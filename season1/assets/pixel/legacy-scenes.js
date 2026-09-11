/* Unchanged scene painter source from original-pilot/frame-theater.html. */
(() => {
const px = (ctx, x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); };

const SCENES = {

  office(ctx, f) {
    px(ctx, 0, 0, 320, 180, "#12151c");
    px(ctx, 0, 0, 320, 142, "#1b2430");   // back wall
    px(ctx, 0, 142, 320, 38, "#171b23");  // floor
    px(ctx, 0, 140, 320, 2, "#0d1016");

    // window blinds, streetlight leaking through
    px(ctx, 206, 18, 96, 74, "#0e141c");
    for (let y = 20; y < 90; y += 4) {
      px(ctx, 208, y, 92, 2, "#26313f");
      px(ctx, 208, y + 2, 92, 1, "#1a222c");
    }
    ctx.globalAlpha = 0.10;
    px(ctx, 208, 20, 92, 70, "#d9a441");
    ctx.globalAlpha = 1;
    px(ctx, 206, 18, 96, 1, "#2f3b4a");
    px(ctx, 206, 91, 96, 1, "#2f3b4a");

    // filing cabinets
    px(ctx, 8, 66, 52, 76, "#232c38");
    px(ctx, 8, 66, 52, 1, "#3a4657");
    for (let i = 0; i < 3; i++) {
      const y = 72 + i * 24;
      px(ctx, 12, y, 44, 20, "#1e2731");
      px(ctx, 28, y + 9, 12, 2, "#4a5566");
    }

    // corkboard, pinned photos, red thread
    px(ctx, 84, 26, 92, 58, "#2a2118");
    px(ctx, 84, 26, 92, 1, "#3b2f22");
    const pins = [[92,34,18,14],[120,32,16,12],[148,38,20,16],[96,58,22,16],[134,58,18,14]];
    pins.forEach(([x,y,w,h]) => { px(ctx, x, y, w, h, "#b7ad92"); px(ctx, x, y, w, 1, "#d5cbae"); });
    ctx.strokeStyle = "#7d3a44"; ctx.lineWidth = 1; ctx.beginPath();
    ctx.moveTo(101, 41); ctx.lineTo(128, 38); ctx.lineTo(158, 46);
    ctx.lineTo(107, 66); ctx.lineTo(143, 65); ctx.stroke();

    // desk
    px(ctx, 62, 116, 196, 6, "#3a3026");
    px(ctx, 62, 122, 196, 20, "#241d16");
    px(ctx, 62, 116, 196, 1, "#544433");

    // lamp + cone
    px(ctx, 84, 96, 3, 20, "#39424f");
    px(ctx, 76, 90, 20, 7, "#4a5462");
    px(ctx, 76, 96, 20, 1, "#d9a441");
    const flick = 0.11 + (Math.sin(f / 37) + Math.sin(f / 11)) * 0.008;
    ctx.globalAlpha = Math.max(0.06, flick);
    ctx.fillStyle = "#d9a441";
    ctx.beginPath();
    ctx.moveTo(80, 97); ctx.lineTo(94, 97); ctx.lineTo(116, 118); ctx.lineTo(58, 118);
    ctx.closePath(); ctx.fill();
    ctx.globalAlpha = 1;

    // papers in the light
    px(ctx, 70, 110, 22, 7, "#c8bfa4");
    px(ctx, 78, 106, 20, 7, "#b3ab92");
    px(ctx, 96, 111, 14, 5, "#c8bfa4");

    // CRT on the desk
    px(ctx, 196, 84, 46, 34, "#242c36");
    px(ctx, 200, 88, 38, 24, "#0c1a19");
    ctx.globalAlpha = 0.55 + Math.sin(f / 23) * 0.05;
    px(ctx, 200, 88, 38, 24, "#0f2b28");
    ctx.globalAlpha = 1;
    for (let y = 89; y < 112; y += 2) px(ctx, 200, y, 38, 1, "#10322e");
    px(ctx, 203, 92, 20, 2, "#6fb3a8");
    px(ctx, 203, 97, 28, 2, "#4c8d84");
    px(ctx, 203, 102, 12, 2, "#4c8d84");
    if (Math.floor(f / 30) % 2) px(ctx, 217, 102, 3, 2, "#6fb3a8");
    px(ctx, 210, 118, 18, 4, "#242c36");
  },

  anteroom(ctx, f) {
    const disc = (x, y, r, c) => {
      for (let dy = -r; dy <= r; dy++)
        for (let dx = -r; dx <= r; dx++)
          if (dx * dx + dy * dy <= r * r) px(ctx, x + dx, y + dy, 1, 1, c);
    };

    px(ctx, 0, 0, 320, 180, "#141922");
    px(ctx, 0, 0, 320, 14, "#1a1f27");     // ceiling
    px(ctx, 0, 14, 320, 104, "#222932");   // upper wall
    px(ctx, 0, 116, 320, 3, "#171c24");    // chair rail
    px(ctx, 0, 119, 320, 31, "#1b212a");   // lower wall
    px(ctx, 0, 149, 320, 1, "#0e1218");
    px(ctx, 0, 150, 320, 30, "#171b23");   // floor

    // fluorescent troffers — the only overhead light in the show
    [64, 196].forEach((x, i) => {
      const dead = i === 1 && Math.floor(f / 6) % 9 === 0;
      px(ctx, x, 3, 60, 6, dead ? "#2b3038" : "#e6e0cc");
      px(ctx, x - 2, 2, 64, 1, "#39404a");
      ctx.globalAlpha = dead ? 0.02 : 0.07;
      px(ctx, x - 10, 9, 80, 40, "#e6e0cc");
      ctx.globalAlpha = 1;
    });

    // phone lockers. Six of ten are occupied, which is the scene's only fact.
    const taken = [1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
    px(ctx, 8, 36, 90, 74, "#1d232c");
    px(ctx, 8, 36, 90, 1, "#39404a");
    for (let i = 0; i < 10; i++) {
      const cx = 12 + (i % 5) * 17, cy = 40 + Math.floor(i / 5) * 34;
      if (taken[i]) {
        px(ctx, cx, cy, 15, 30, "#2a313a");
        px(ctx, cx, cy, 15, 1, "#3c444f");
        px(ctx, cx + 11, cy + 13, 2, 2, "#8a6a3a");   // cylinder
      } else {
        px(ctx, cx, cy, 15, 30, "#0d1117");
        px(ctx, cx, cy, 15, 1, "#252c35");
        px(ctx, cx + 1, cy + 1, 13, 3, "#161b22");
      }
    }
    px(ctx, 8, 110, 90, 3, "#161b22");

    // the door
    px(ctx, 176, 22, 92, 128, "#2b323c");
    px(ctx, 180, 26, 84, 124, "#343b46");
    px(ctx, 180, 26, 84, 1, "#454e5b");
    px(ctx, 263, 26, 1, 124, "#1c222a");
    for (const hy of [40, 88, 136]) px(ctx, 176, hy, 5, 14, "#454e5b");

    disc(214, 84, 9, "#242a33");                 // spin dial
    disc(214, 84, 7, "#4a5462");
    disc(214, 84, 2, "#1b2028");
    const ang = f / 90;
    px(ctx, 214 + Math.round(Math.cos(ang) * 5), 84 + Math.round(Math.sin(ang) * 5), 2, 2, "#c9cfd8");

    px(ctx, 240, 68, 16, 26, "#20262e");         // cipher keypad
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 3; c++)
        px(ctx, 242 + c * 5, 70 + r * 6, 3, 4, "#39414c");

    // indicator: red, and every so often not
    const green = f % 1100 < 40;
    px(ctx, 206, 12, 18, 8, "#171c24");
    disc(215, 16, 3, green ? "#4a9d76" : "#a83f48");
    ctx.globalAlpha = 0.18;
    disc(215, 16, 6, green ? "#4a9d76" : "#a83f48");
    ctx.globalAlpha = 1;
    px(ctx, 186, 12, 16, 7, "#c8bfa4");          // OPEN/CLOSED placard
    px(ctx, 188, 14, 12, 1, "#3b3a33");

    ctx.globalAlpha = 0.10;                      // light under the door
    px(ctx, 182, 146, 80, 4, "#d9a441");
    ctx.globalAlpha = 1;

    // access log on a stand, pen on a chain
    px(ctx, 116, 96, 26, 4, "#3a3026");
    px(ctx, 120, 100, 4, 50, "#2b2419");
    px(ctx, 118, 92, 22, 5, "#c8bfa4");
    px(ctx, 121, 93, 15, 1, "#6b6455");
    px(ctx, 138, 96, 1, 8, "#4a5462");

    // the chair, empty
    px(ctx, 26, 122, 30, 3, "#3a3026");
    px(ctx, 26, 100, 3, 24, "#2b2419");
    px(ctx, 53, 100, 3, 24, "#2b2419");
    px(ctx, 26, 98, 30, 3, "#3a3026");
    px(ctx, 29, 125, 3, 22, "#241e15");
    px(ctx, 50, 125, 3, 22, "#241e15");

    ctx.globalAlpha = 0.05;                      // linoleum sheen
    px(ctx, 190, 150, 60, 30, "#e6e0cc");
    ctx.globalAlpha = 1;
  },

  corridor(ctx, f) {
    px(ctx, 0, 0, 320, 180, "#0c1017");
    px(ctx, 0, 0, 320, 24, "#141a24");
    px(ctx, 0, 138, 320, 42, "#12161e");

    // nested rings receding to a lit far end
    const rings = 5;
    for (let k = rings; k >= 0; k--) {
      const t = k / rings;
      const x0 = Math.round(0 + t * 132), y0 = Math.round(0 + t * 74);
      const x1 = 320 - x0,               y1 = 180 - Math.round(t * 60);
      const shade = ["#1c242f", "#19212b", "#161d26", "#131922", "#10151d", "#0d1219"][k];
      px(ctx, x0, y0, 2, y1 - y0, shade);
      px(ctx, x1 - 2, y0, 2, y1 - y0, shade);
      px(ctx, x0, y0, x1 - x0, 1, shade);
      // office doors, glass lit from inside
      if (k < rings && k > 0) {
        const dw = Math.max(3, 14 - k * 2), dh = Math.max(8, 44 - k * 7);
        const dy = y1 - 20 - dh;
        const lit = (k + Math.floor(f / 90)) % 3 !== 0;
        px(ctx, x0 + 3, dy, dw, dh, "#0e141c");
        px(ctx, x0 + 4, dy + 2, dw - 2, dh - 6, lit ? "#3a3018" : "#12161d");
        px(ctx, x1 - 3 - dw, dy, dw, dh, "#0e141c");
        px(ctx, x1 - 2 - dw, dy + 2, dw - 2, dh - 6, "#12161d");
      }
    }

    // the far end: a doorway, and something standing in it
    px(ctx, 138, 78, 44, 60, "#0a0e14");
    px(ctx, 142, 82, 36, 52, "#2c3648");
    px(ctx, 146, 86, 28, 44, "#46536a");
    px(ctx, 155, 96, 10, 38, "#141a24");
    px(ctx, 156, 90, 8, 8, "#141a24");

    // ceiling panels, one of them failing
    for (let i = 0; i < 4; i++) {
      const x = 40 + i * 62, w = 34;
      const dead = i === 2 && Math.floor(f / 7) % 5 === 0;
      px(ctx, x, 6, w, 4, dead ? "#1a1d22" : "#c8bfa4");
      ctx.globalAlpha = dead ? 0.03 : 0.07;
      px(ctx, x - 6, 10, w + 12, 26, "#c8bfa4");
      ctx.globalAlpha = 1;
    }

    // floor, wet-looking
    for (let i = 0; i < 6; i++) px(ctx, 0, 140 + i * i * 1.2, 320, 1, "#171d27");
    ctx.globalAlpha = 0.06;
    px(ctx, 150, 138, 20, 42, "#c8bfa4");
    ctx.globalAlpha = 1;
  },

  datacenter(ctx, f) {
    px(ctx, 0, 0, 320, 180, "#070b10");
    px(ctx, 0, 132, 320, 48, "#0b1016");
    for (let i = 0; i < 7; i++) {
      const y = 134 + i * i * 0.9;
      px(ctx, 0, y, 320, 1, "#0f1620");
    }

    // receding racks, both sides
    const rack = (x, w, top, bot, open) => {
      px(ctx, x, top, w, bot - top, "#141b24");
      px(ctx, x, top, w, 1, "#232f3d");
      px(ctx, x + w - 1, top, 1, bot - top, "#0a0f15");
      if (open) {
        px(ctx, x + 2, top + 6, w - 4, bot - top - 14, "#1d1509");
        ctx.globalAlpha = 0.30;
        px(ctx, x + 2, top + 6, w - 4, bot - top - 14, "#d9a441");
        ctx.globalAlpha = 1;
      }
      for (let y = top + 6; y < bot - 8; y += 6) {
        px(ctx, x + 3, y, w - 6, 3, open ? "#3a2c12" : "#0f151d");
        const seed = (x * 31 + y * 17);
        const on = Math.floor(f / 12 + seed) % 5 !== 0;
        if (on) px(ctx, x + w - 7, y + 1, 2, 1, seed % 3 ? "#6fb3a8" : "#d9a441");
      }
    };
    rack(2, 46, 30, 140, false);
    rack(50, 38, 40, 136, false);
    rack(90, 30, 50, 130, false);
    rack(272, 46, 30, 140, true);
    rack(232, 38, 40, 136, false);
    rack(202, 30, 50, 130, false);

    // cold aisle haze + vanishing point
    px(ctx, 122, 56, 76, 76, "#0a1119");
    px(ctx, 122, 56, 76, 1, "#1b2836");
    ctx.globalAlpha = 0.16;
    px(ctx, 118, 40, 84, 100, "#6fb3a8");
    ctx.globalAlpha = 1;
    px(ctx, 152, 96, 16, 36, "#0d141c");
    if (Math.floor(f / 45) % 2) px(ctx, 158, 104, 2, 2, "#d9a441");
  }
};


window.THOUGHTLEADER_LEGACY_SCENES=SCENES;
})();
