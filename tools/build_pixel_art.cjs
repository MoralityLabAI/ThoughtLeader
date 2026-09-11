/* Render editable, repo-native recovered pixel assets. No image generation or image conversion. */
const fs=require('node:fs'),path=require('node:path'),{createHash}=require('node:crypto');
const {chromium}=require('playwright');const {pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..'),season=path.join(root,'season1'),out=path.join(season,'assets','pixel');
const original=path.join(season,'recovery','original-pilot');fs.mkdirSync(out,{recursive:true});
const theater=fs.readFileSync(path.join(original,'frame-theater.html'),'utf8').replace(/\r\n/g,'\n');
const sceneCode=theater.slice(theater.indexOf('const px ='),theater.indexOf('/* =====================================================================\n   2. PORTRAITS'));
if(!sceneCode.includes('const SCENES =')||!sceneCode.includes('datacenter(ctx'))throw Error('Original scene painter boundaries not found');
fs.writeFileSync(path.join(out,'legacy-scenes.js'),`/* Unchanged scene painter source from original-pilot/frame-theater.html. */\n(() => {\n${sceneCode}\nwindow.THOUGHTLEADER_LEGACY_SCENES=SCENES;\n})();\n`);
const sha=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL||'msedge'});
 const page=await browser.newPage({viewport:{width:1380,height:1000},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(pathToFileURL(path.join(out,'gallery.html')).href);
 await page.waitForFunction(()=>window.THOUGHTLEADER_PIXEL);
 const manifest={schemaVersion:1,method:'Restored indexed sprite data plus native Canvas scene painters; no AI raster generation, no resampling of the noir illustrations.',originalRepository:'https://github.com/patrickdugan/ThoughtLeader',originalCommit:'c8136095bb08e4b8a512560c8ca47e18b61f36b5',nativeSceneSize:[320,180],portraitSize:[48,56],assets:[],sourceHashes:{}};
 for(const relative of ['build/sprites.js','src/sprites.py','src/roto.py','src/_levin_payload.json','frame-theater.html','character-sheet.html'])manifest.sourceHashes[`season1/recovery/original-pilot/${relative}`]=sha(path.join(original,relative));
 for(let n=0;n<=6;n++){
   const data=await page.evaluate(n=>{const c=document.createElement('canvas');c.width=1280;c.height=720;const ctx=c.getContext('2d');ctx.imageSmoothingEnabled=false;const small=document.createElement('canvas');small.width=320;small.height=180;
     if(n===0){THOUGHTLEADER_LEGACY_SCENES.office(small.getContext('2d'),20);const x=small.getContext('2d');x.imageSmoothingEnabled=false;x.drawImage(THOUGHTLEADER_PIXEL.portrait('VOIDT'),74,61,72,84);x.drawImage(THOUGHTLEADER_PIXEL.portrait('LAMPORT'),174,61,72,84);}else THOUGHTLEADER_PIXEL.draw(small,n,20);
     ctx.drawImage(small,0,0,1280,720);return c.toDataURL('image/png').split(',')[1];},n);
   const file=n===0?'cast.png':`ep${String(n).padStart(2,'0')}.png`,absolute=path.join(out,file);fs.writeFileSync(absolute,Buffer.from(data,'base64'));
   manifest.assets.push({file,relativePath:`season1/assets/pixel/${file}`,width:1280,height:720,bytes:fs.statSync(absolute).size,sha256:sha(absolute),status:n===0?'Recovered portraits composed over recovered office':'New native scene in recovered palette/renderer grammar'});
 }
 await page.screenshot({path:path.join(season,'reports','screenshots','pixel-gallery.png'),fullPage:true});
 await page.goto(pathToFileURL(path.join(original,'character-sheet.html')).href);
 await page.screenshot({path:path.join(season,'reports','screenshots','recovered-character-sheet.png'),fullPage:true});
 await browser.close();if(errors.length)throw Error(errors.join('\n'));
 fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');console.log('Seven pixel PNGs rendered; original sprite grids retained; gallery error-free.');
})();
