/* Browser integration QA: real buttons, persistence, endings, responsive layout, local images. */
const {chromium} = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const assert = require('node:assert/strict');
const {createHash} = require('node:crypto');
const root = path.resolve(__dirname, '..');
const season = path.join(root, 'season1');
const reportDir = path.join(season, 'reports');
const screenshots = path.join(reportDir, 'screenshots');
fs.mkdirSync(screenshots, {recursive: true});
const selected = process.argv.includes('--episode') ? Number(process.argv[process.argv.indexOf('--episode') + 1]) : null;

(async () => {
  const browser = await chromium.launch({headless: true, ...(process.env.PLAYWRIGHT_CHANNEL ? {channel: process.env.PLAYWRIGHT_CHANNEL} : {})});
  const context = await browser.newContext({viewport: {width: 1440, height: 1050}, reducedMotion: 'reduce'});
  const page = await context.newPage();
  const errors = [], externalRequests = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('request', request => { if (/^https?:/.test(request.url())) externalRequests.push(request.url()); });
  const report = {mode: 'headless browser UI integration + manual screenshot review', browser: await browser.version(), episodes: [], errors, externalRequests};
  report.sha256 = Object.fromEntries(['storyworld_reader.html', 'season-data.js', 'assets/pixel/pixel-stage.js', 'assets/pixel/legacy-scenes.js', 'recovery/original-pilot/build/sprites.js'].map(file => [file, createHash('sha256').update(fs.readFileSync(path.join(season, file))).digest('hex')]));
  try {
    await page.goto(pathToFileURL(path.join(season, 'storyworld_reader.html')).href);
    await page.locator('#loading-screen.hidden').waitFor({state: 'attached'});
    const count = await page.locator('.episode-card').count();
    assert(count > 0);
    if (!selected) assert.equal(count, 6, 'The full season must expose all six cases');
    await page.locator('.season-cast').evaluate(img => img.decode());
    for (const img of await page.locator('.episode-card img').all()) await img.evaluate(e => e.decode());
    await page.screenshot({path: path.join(screenshots, 'catalog-desktop.png'), fullPage: true});
    const episodeNumbers = await page.locator('[data-episode]').evaluateAll(nodes => nodes.map(node => Number(node.dataset.episode)));
    if (selected) assert(episodeNumbers.includes(selected), `Episode ${selected} is missing from the catalog`);
    for (const n of episodeNumbers) {
      if (selected && n !== selected) continue;
      if (await page.locator('#title-screen').isHidden()) await page.locator('#casebook-btn').click();
      await page.locator(`[data-episode="${n}"]`).click();
      assert.equal(await page.locator('.option-btn').count(), 3);
      await page.locator('#encounter-image').evaluate(img => img.decode());
      assert(await page.locator('#pixel-theater').isVisible(), 'Recovered pixel theater must be active');
      assert.deepEqual(await page.locator('#pixel-scene').evaluate(c => [c.width, c.height, c.getContext('2d').imageSmoothingEnabled]), [320, 180, false]);
      assert(await page.locator('#pixel-voidt').evaluate(c => c.getContext('2d').getImageData(0,0,48,56).data.some(v => v > 0)), 'Original portrait must render');
      assert((await page.locator('#encounter-text').innerText()).split(/\s+/).length >= 50);
      await page.screenshot({path: path.join(screenshots, `episode-${String(n).padStart(2, '0')}-opening.png`), fullPage: true});
      const observed = [];
      let steps = 0;
      while (steps < 20) {
        const info = await page.evaluate(() => ({id: engine.getCurrentEncounter().id, ending: !engine.getCurrentEncounter().options.length, options: engine.getVisibleOptions(engine.getCurrentEncounter()).map(o => o.id)}));
        if (info.ending) break;
        const optionIndex = info.id === 'page_finding_council' ? 0 : (n + steps) % info.options.length;
        await page.locator('.option-btn').nth(optionIndex).click();
        const reaction = await page.locator('#reaction-text').innerText();
        assert(reaction.split(/\s+/).length >= 20);
        if (steps === 0) {
          const before = await page.evaluate(() => JSON.stringify(engine.state.characters));
          await page.reload();
          await page.locator('#loading-screen.hidden').waitFor({state: 'attached'});
          await page.locator('#resume-case').click();
          assert.equal(await page.locator('#reaction-text').innerText(), reaction, 'Resume must retain the pending reaction');
          assert.equal(await page.evaluate(() => JSON.stringify(engine.state.characters)), before, 'Resume must not apply effects again');
        }
        observed.push({scene: info.id, choice: info.options[optionIndex], reaction_words: reaction.split(/\s+/).length});
        await page.locator('.continue-btn').click();
        steps++;
      }
      await page.locator('#ending-overlay.visible').waitFor();
      assert.equal(steps, 19);
      const finding = await page.locator('#ending-title').innerText();
      assert((await page.locator('#ending-text').innerText()).split(/\s+/).length >= 70);
      await page.screenshot({path: path.join(screenshots, `episode-${String(n).padStart(2, '0')}-ending.png`), fullPage: true});
      report.episodes.push({episode: n, steps, finding, resumed_pending_reaction: true, local_art_decoded: true, observed});
      await page.locator('#ending-casebook-btn').click();
      assert((await page.locator(`[data-episode="${n}"]`).locator('..').innerText()).includes(finding));
    }
    await page.setViewportSize({width: 390, height: 844});
    await page.screenshot({path: path.join(screenshots, 'catalog-mobile.png'), fullPage: true});
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), 'Mobile catalog overflows horizontally');
    await page.locator('[data-episode="1"]').click();
    await page.locator('#encounter-image').evaluate(img => img.decode());
    await page.screenshot({path: path.join(screenshots, 'episode-01-mobile.png'), fullPage: true});
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), 'Mobile story overflows horizontally');
    assert.equal(errors.length, 0, errors.join('\n'));
    assert.equal(externalRequests.length, 0, 'Offline reader must not request remote assets');
    assert.equal(report.episodes.length, selected ? 1 : 6);
    report.pass = true;
  } catch (error) {
    report.pass = false; report.failure = error.stack;
    await page.screenshot({path: path.join(screenshots, 'failure.png'), fullPage: true}).catch(() => {});
    process.exitCode = 1;
  } finally {
    fs.writeFileSync(path.join(reportDir, selected ? `episode-${String(selected).padStart(2,'0')}-browser.json` : 'browser-playtest.json'), JSON.stringify(report, null, 2) + '\n');
    await browser.close();
  }
  console.log(JSON.stringify({pass: report.pass, episodes: report.episodes.length, errors, externalRequests, failure: report.failure}, null, 2));
})();
