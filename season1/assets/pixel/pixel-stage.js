/* New Season 1 environments extending the recovered 320x180 frame-theater grammar.
   Portrait grids and original four room painters are preserved separately, unchanged. */
(() => {
  'use strict';
  const W = 320, H = 180;
  const colors = {ink:'#0e131b', wall:'#1b2430', floor:'#171b23', steel:'#3a4657', paper:'#c8bfa4', teal:'#6fb3a8', amber:'#d9a441', red:'#a76271'};
  const rect = (c,x,y,w,h,color) => { c.fillStyle=color; c.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h)); };
  const line = (c,x,y,x2,y2,color) => {
    let dx=Math.abs(x2-x), sx=x<x2?1:-1, dy=-Math.abs(y2-y), sy=y<y2?1:-1, err=dx+dy;
    for(;;) { rect(c,x,y,1,1,color); if(x===x2&&y===y2) break; const e=2*err; if(e>=dy){err+=dy;x+=sx;} if(e<=dx){err+=dx;y+=sy;} }
  };
  function room(c,wall=colors.wall) {
    rect(c,0,0,W,H,wall); rect(c,0,139,W,41,colors.floor); rect(c,0,138,W,2,colors.ink);
    for(let y=149;y<180;y+=12) rect(c,0,y,W,1,'#232a34');
    for(let x=-100;x<420;x+=70) line(c,160+(x-160)/2|0,140,x,179,'#232a34');
  }
  function windowFrame(c,x,y,w,h,night=true) {
    rect(c,x-2,y-2,w+4,h+4,colors.steel); rect(c,x,y,w,h,night?'#101c2a':'#bd986d');
    for(let i=0;i<7;i++) { const height=12+(i*19)%35; rect(c,x+i*w/7,y+h-height,w/7-2,height,night?'#26384a':'#6c695d'); }
    rect(c,x+w/2,y,2,h,colors.steel); rect(c,x,y+h/2,w,2,colors.steel);
  }
  function table(c,x,y,w) { rect(c,x,y,w,4,'#6b5340'); rect(c,x,y+4,w,7,'#3a3026'); rect(c,x+4,y+11,4,28,'#252028'); rect(c,x+w-8,y+11,4,28,'#252028'); }
  function paper(c,x,y,w=16) { rect(c,x,y,w,11,colors.paper); for(let j=2;j<9;j+=3)rect(c,x+2,y+j,w-5,1,'#8f8c80'); }
  function screen(c,x,y,w,h,f=0) {
    rect(c,x-3,y-3,w+6,h+7,'#39424f'); rect(c,x,y,w,h,'#102c30');
    for(let row=4;row<h-3;row+=5)rect(c,x+3,y+row,Math.max(3,(row*7)%(w-5)),1,colors.teal);
    if(Math.floor(f/32)%2)rect(c,x+w-6,y+h-5,3,2,colors.amber);
    rect(c,x+w/2-3,y+h+4,6,5,'#39424f');
  }
  function chair(c,x,y,color='#394b59') {rect(c,x,y,17,16,color);rect(c,x-1,y+16,19,3,'#586775');rect(c,x+1,y+19,2,13,colors.ink);rect(c,x+14,y+19,2,13,colors.ink);}
  const portraits = new Map();
  function portrait(who,frame=0,talking=false) {
    const key=`${who}:${frame}: ${talking}`;
    if(portraits.has(key))return portraits.get(key);
    const data=SPRITE_DATA, sprite=data.sprites[who];
    const rows=sprite.base.map(row=>row.split(''));
    const patch=p=>{if(p) p.rows.forEach((row,y)=>[...row].forEach((ch,x)=>rows[y+p.y][x+p.x]=ch));};
    if(frame===1)patch(sprite.eyesClosed);
    if(talking)patch(frame===2?sprite.mouthOpen:sprite.mouthMid);
    const canvas=document.createElement('canvas');canvas.width=data.w;canvas.height=data.h;
    const ctx=canvas.getContext('2d');
    rows.forEach((row,y)=>row.forEach((ch,x)=>{if(data.pal[ch])rect(ctx,x,y,1,1,data.pal[ch]);}));
    portraits.set(key,canvas);return canvas;
  }
  const rooms = {
    campus(c,f) {
      room(c);windowFrame(c,9,17,66,72);rect(c,103,15,144,72,'#4a5566');rect(c,107,19,136,64,'#101b27');
      c.imageSmoothingEnabled=false;c.drawImage(portrait('KIRIAKOU',Math.floor(f/80)%4===0?1:0,false),161,21,48,56);
      rect(c,111,77,25,2,colors.red);rect(c,219,24,17,2,colors.teal);
      for(let row=0;row<2;row++)for(let col=0;col<3;col++){let x=23+col*100,y=104+row*43;table(c,x,y,66);paper(c,x+8,y-10);chair(c,x+38,y+8);}
      screen(c,264,62,35,30,f);rect(c,258,98,49,4,'#6b5340');
    },
    dispatch(c,f) {
      room(c,'#1c2930');windowFrame(c,11,16,99,77);for(let i=0;i<19;i++) {let x=13+(i*17)%94,y=18+(i*13+Math.floor(f/5))%69;rect(c,x,y,1,5,'#536875');}
      rect(c,132,18,163,67,'#30414b');rect(c,136,22,155,59,'#102229');
      for(let i=0;i<8;i++){let x=145+(i*43)%128,y=31+(i*17)%40;line(c,145,59,x,y,'#3f6f6a');rect(c,x,y,3,3,i===Math.floor(f/50)%8?colors.amber:colors.teal);}
      table(c,125,126,175);screen(c,231,97,40,23,f);paper(c,146,114,24);
      for(let i=0;i<3;i++){rect(c,12+i*29,113,23,32,'#705444');rect(c,13+i*29,116,21,2,'#b0805c');rect(c,22+i*29,113,3,30,colors.paper);}
      // Courier bicycle: deliberately square pixels, not a vector or smooth wheel.
      [[91,157],[139,157]].forEach(([x,y])=>{for(let a=0;a<24;a++){let t=a*Math.PI/12;rect(c,x+Math.round(Math.cos(t)*12),y+Math.round(Math.sin(t)*12),2,2,'#8f9aa8');}});
      line(c,91,157,108,138,colors.teal);line(c,108,138,123,157,colors.teal);line(c,91,157,123,157,colors.teal);line(c,108,138,131,138,colors.teal);line(c,131,138,139,157,colors.teal);line(c,123,157,131,138,colors.teal);rect(c,101,134,12,3,colors.ink);
    },
    community(c,f) {
      room(c,'#283139');windowFrame(c,13,16,80,69,false);rect(c,114,15,91,51,'#675443');
      for(let i=0;i<5;i++)paper(c,120+(i%3)*26,21+Math.floor(i/3)*20,20);
      rect(c,240,24,59,67,'#4a4650');rect(c,244,28,51,59,'#bd986d');
      // The fairground outside is a venue, not religious iconography or an ominous caricature.
      for(let i=0;i<7;i++){line(c,250+i*6,61,269,35,'#a76271');rect(c,247+i*6,61,6,6,i%2?'#c8bfa4':'#a76271');}
      chair(c,30,109);chair(c,258,108);table(c,64,128,183);paper(c,92,116,23);paper(c,162,111,26);
      rect(c,202,109,12,18,'#8f9aa8');rect(c,205,105,6,5,'#8f9aa8');rect(c,218,121,9,8,colors.paper);screen(c,123,90,27,24,f);
    },
    forum(c,f) {
      room(c,'#211f30');windowFrame(c,235,19,65,71);rect(c,12,17,47,110,'#3b3342');
      for(let y=32;y<118;y+=24){rect(c,14,y,43,3,'#5b4a58');for(let i=0;i<5;i++)rect(c,18+i*7,y-13,5,13,['#8f6171','#465d72','#887655'][i%3]);}
      table(c,72,130,160);screen(c,86,47,129,67,f);rect(c,91,53,25,52,'#26434b');
      for(let j=0;j<4;j++){rect(c,124,55+j*12,78-j*6,7,j===Math.floor(f/80)%4?'#a76271':'#3f5660');}
      rect(c,115,121,63,5,'#65717f');chair(c,237,112,'#50475a');paper(c,17,145,25);
      // No usernames, hateful slogans, trophies, weapons, or glamorized grievance symbols.
    },
    harbor(c,f) {
      room(c,'#222b34');windowFrame(c,83,13,143,84);rect(c,87,70,135,23,'#263f4d');
      for(let x=89;x<222;x+=14)rect(c,x,78+(x%3),10,1,'#526e78');
      line(c,112,17,112,65,'#8f9aa8');line(c,112,18,178,18,'#8f9aa8');line(c,144,18,144,44,'#8f9aa8');
      for(let i=0;i<4;i++)rect(c,93+i*29,51,26,16,['#7d4a3f','#465d72','#6d6759'][i%3]);
      table(c,68,128,183);paper(c,93,110,36);paper(c,168,115,24);rect(c,208,112,10,16,'#111620');
      rect(c,18,44,35,80,'#46545a');for(let i=0;i<4;i++){rect(c,21,48+i*18,29,15,'#2d3542');rect(c,31,53+i*18,9,2,'#8f9aa8');}
      chair(c,269,103);rect(c,153,96,3,18,'#39424f');rect(c,143,90,23,7,colors.amber);
    },
    movement(c,f) {
      room(c,'#37464a');windowFrame(c,10,17,80,66,false);windowFrame(c,233,17,74,66,false);
      rect(c,107,14,106,56,'#6d6759');paper(c,114,22,35);paper(c,157,22,43);rect(c,116,42,30,15,'#6fb3a8');rect(c,157,42,36,15,'#a76271');
      for(let i=0;i<5;i++)chair(c,22+i*61,93,i%2?'#6d6759':'#46545a');
      table(c,45,132,229);screen(c,137,96,38,27,f);paper(c,69,120,26);paper(c,196,118,28);
      rect(c,286,114,10,24,'#b0805c');for(let i=0;i<5;i++){rect(c,279+i*3,90+(i%2)*6,4,21,'#668369');}
      rect(c,15,121,17,18,'#46545a');rect(c,19,117,9,4,'#8f9aa8');
      // Ordinary member-run civic space. AI is a shared tool, not a sinister throne.
    }
  };
  const settings=['campus','dispatch','community','forum','harbor','movement'];
  function draw(canvas,episode,frame=0,setting=null) {
    const c=canvas.getContext('2d');c.imageSmoothingEnabled=false;
    (rooms[setting||settings[episode-1]]||window.THOUGHTLEADER_LEGACY_SCENES?.[setting]||rooms.campus)(c,frame);
  }
  function drawPortrait(canvas,who,frame=0) {
    const c=canvas.getContext('2d');c.imageSmoothingEnabled=false;c.clearRect(0,0,48,56);
    const blink=(frame+(who==='LAMPORT'?97:0))%230<7?1:0;c.drawImage(portrait(who,blink),0,0);
  }
  let current=null, animation=null;
  function mount(episode) {
    current=episode;
    const wrapper=document.getElementById('pixel-theater');if(!wrapper)return;
    wrapper.hidden=false;document.getElementById('encounter-image').classList.remove('visible');
    if(animation)cancelAnimationFrame(animation);
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tick=timestamp=>{const frame=reduced?20:Math.floor(timestamp/40);draw(document.getElementById('pixel-scene'),current,frame);drawPortrait(document.getElementById('pixel-voidt'),'VOIDT',frame);drawPortrait(document.getElementById('pixel-lamport'),'LAMPORT',frame);if(!reduced)animation=requestAnimationFrame(tick);};
    tick(800);
  }
  window.THOUGHTLEADER_PIXEL={draw,drawPortrait,portrait,mount,settings,width:W,height:H};
})();
