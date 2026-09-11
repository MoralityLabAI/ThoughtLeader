/* Execute the exact browser engine for repeatable season rehearsal. No second simulator. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const {createHash} = require('node:crypto');
const sha256 = data => createHash('sha256').update(data).digest('hex');
const root = path.resolve(__dirname, '..');
const season = path.join(root, 'season1');
const reader = fs.readFileSync(path.join(season, 'storyworld_reader.html'), 'utf8');
const engineCode = reader.slice(reader.indexOf('class StoryworldEngine {'), reader.indexOf('// ========== UI CONTROLLER'));
const Engine = vm.runInNewContext(`${engineCode}\nStoryworldEngine;`);
const args = process.argv.slice(2);
const arg = (name, fallback) => args.includes(name) ? Number(args[args.indexOf(name) + 1]) : fallback;
const runs = arg('--runs', 5000);
const seed = arg('--seed', 20260911);
assert(Number.isInteger(runs) && runs > 0);
function random(seedValue) {
  let x = seedValue >>> 0;
  return () => { x += 0x6D2B79F5; let t = x; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
function save(file, value) { fs.mkdirSync(path.dirname(file), {recursive: true}); fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n'); }
const files = fs.readdirSync(path.join(season, 'worlds')).filter(f => /^episode-\d\d\.json$/.test(f)).sort();
const summary = {method: 'actual StoryworldEngine extracted from the delivered browser reader; uniform choice among legal options; deterministic highest-score reactions', reader_sha256: sha256(reader), runs_per_episode: runs, seed, reports: [], failures: []};
for (const [index, file] of files.entries()) {
  const world = JSON.parse(fs.readFileSync(path.join(season, 'worlds', file), 'utf8'));
  const rng = random(seed + index);
  const report = {episode: world.reconstruction.episode, title: world.title, seed: seed + index, runs, endings: {}, witnesses: {}, dead_ends: 0, invalid_states: 0, blocked_special_options: 0, special_option_opportunities: 0};
  report.world_sha256 = sha256(fs.readFileSync(path.join(season, 'worlds', file)));
  report.reader_sha256 = summary.reader_sha256;
  const reactionsSeen = new Set();
  const min = {}, max = {};
  for (let trial = 0; trial < runs; trial++) {
    const engine = new Engine().load(world);
    const choices = [];
    let end = null;
    for (let step = 0; step < 32; step++) {
      const scene = engine.getCurrentEncounter();
      if (!scene) break;
      if (!scene.options.length) { end = scene; break; }
      const options = engine.getVisibleOptions(scene);
      if (!options.length) break;
      if (scene.id === 'page_finding_council') {
        report.special_option_opportunities += 2;
        report.blocked_special_options += scene.options.length - options.length;
      }
      const option = options[Math.floor(rng() * options.length)];
      const reaction = engine.selectReaction(option);
      reactionsSeen.add(reaction.id);
      choices.push(option.id);
      const pending = engine.selectOption(option.id);
      assert(pending, 'A visible option must be selectable');
      assert.equal(engine.selectOption(option.id), null, 'Double input must not apply effects twice');
      for (const [character, state] of Object.entries(engine.state.characters)) {
        for (const [property, value] of Object.entries(state.properties)) {
          if (!Number.isFinite(value) || value < -1 || value > 1) report.invalid_states++;
          const key = `${character}.${property}`;
          min[key] = Math.min(min[key] ?? 1, value); max[key] = Math.max(max[key] ?? -1, value);
        }
      }
      engine.continueToNext();
    }
    if (!end) { report.dead_ends++; continue; }
    report.endings[end.id] = (report.endings[end.id] || 0) + 1;
    report.witnesses[end.id] ??= {kind: end.ending_kind, choices};
  }
  const endingScenes = world.encounters.filter(e => !e.options.length);
  report.ending_rates = Object.fromEntries(endingScenes.map(e => [e.id, (report.endings[e.id] || 0) / runs]));
  report.missing_endings = endingScenes.filter(e => !report.endings[e.id]).map(e => e.id);
  report.reactions_visited = reactionsSeen.size;
  report.reactions_total = world.encounters.flatMap(e => e.options.flatMap(o => o.reactions)).length;
  report.late_special_block_rate = report.blocked_special_options / report.special_option_opportunities;
  report.state_ranges = Object.fromEntries(Object.keys(min).map(k => [k, [min[k], max[k]]]));
  report.balance_warnings = Object.entries(report.ending_rates).filter(([, rate]) => rate > .3 || rate < .01).map(([id, rate]) => `${id}: ${(rate * 100).toFixed(2)}% outside upstream 1–30% target`);
  report.pass = report.dead_ends === 0 && report.invalid_states === 0 && report.missing_endings.length === 0;
  report.claim = 'Sampled draft playability, not proof that every possible state/branch is reachable. Random-play frequencies describe this declared policy only.';
  save(path.join(season, 'reports', file.replace('.json', '-rehearsal.json')), report);
  summary.reports.push({episode: report.episode, pass: report.pass, endings: report.endings, dead_ends: report.dead_ends, balance_warnings: report.balance_warnings});
  if (!report.pass) summary.failures.push(file);
  console.log(`${file}: ${runs} runs, ${Object.keys(report.endings).length}/5 endings, ${report.dead_ends} dead ends, ${report.reactions_visited} reactions visited`);
}
// Regression: first-order beliefs must be separate from another character's true Trust value.
if (files.length) {
  const sample = JSON.parse(fs.readFileSync(path.join(season, 'worlds', files[0]), 'utf8'));
  const engine = new Engine().load(sample);
  engine.setBNumber('char_voidt', ['Trust', 'char_lamport'], .7);
  assert.equal(engine.getBNumber('char_voidt', ['Trust', 'char_lamport']), .7);
  assert.equal(engine.getBNumber('char_voidt', ['Trust']), 0);
  assert.equal(engine.getBNumber('char_lamport', ['Trust']), 0);
  const endingGate = sample.encounters.find(e => e.id === 'page_finding_council');
  engine.state.currentEncounterId = endingGate.id;
  engine.setBNumber('char_bureau', ['Evidence'], -1);
  const locked = endingGate.options.find(o => o.id.endsWith('_calibrated'));
  assert(!engine.getVisibleOptions(endingGate).includes(locked));
  assert.equal(engine.selectOption(locked.id), null, 'A hidden finding must reject direct invocation');
}
summary.pass = files.length === 6 && summary.failures.length === 0;
summary.regressions = ['full belief keyrings remain distinct', 'hidden findings cannot be selected directly', 'double choice input cannot duplicate effects', 'all sampled state values finite and bounded'];
save(path.join(season, 'reports', 'season-rehearsal.json'), summary);
if (!summary.pass) process.exitCode = 1;
