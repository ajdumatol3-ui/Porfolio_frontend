/* =====================================================================
   Seminars: scroll-jacked gallery
   - The section pins (sticky) while you scroll through a tall track.
   - Scroll progress drives the animation (scrubbed, so it runs
     backwards when you scroll up):
       1. photos arrive one at a time, stacking like prints
       2. at the deepest point they fly into a grid showing all of them
       3. a little extra scroll ("leeway") keeps the full grid pinned
          before the page moves on
   - Only transform and opacity are animated.
   - Everything fits inside one screen (100svh), on desktop and mobile.
   - With "reduce motion" on, the normal static grid is kept.
   ===================================================================== */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const section = document.getElementById('seminars');
  if (!section || reduce) return;
  const wrap = section.querySelector('.wrap');
  const gallery = section.querySelector('.gallery');
  if (!wrap || !gallery) return;
  const figs = [...gallery.querySelectorAll('figure')];
  const N = figs.length;
  if (N < 2) return;

  /* ---------- build: section > track (tall) > sticky (100svh) > wrap ---------- */
  section.classList.add('sj');
  const track = document.createElement('div');
  track.className = 'sj-track';
  const sticky = document.createElement('div');
  sticky.className = 'sj-sticky';
  section.insertBefore(track, wrap);
  track.appendChild(sticky);
  sticky.appendChild(wrap);

  const counter = document.createElement('div');
  counter.className = 'sj-counter';
  counter.innerHTML = '<span class="sj-num"></span><span class="sj-hint"></span>';
  wrap.insertBefore(counter, gallery);
  const numEl = counter.querySelector('.sj-num'), hintEl = counter.querySelector('.sj-hint');

  const imgs = figs.map(f => f.querySelector('img'));
  const caps = figs.map(f => f.querySelector('figcaption'));
  figs.forEach((f, i) => {
    f.classList.remove('reveal', 'zoom', 'in', 'left', 'right');
    f.style.zIndex = i + 1;
  });
  imgs.forEach(img => { if (img) img.loading = 'eager'; });

  // A slightly different tilt for each print in the stack
  const tilt = figs.map((_, i) => i === 0 ? 0 : (i % 2 ? 1 : -1) * (1.2 + (i * 7 % 5) * 0.5));

  /* ---------- grid layouts (in grid units) ---------- */
  // [column, row, width, height]
  const WIDE_7 = { cols: 4, rows: 4, items: [[0,0,2,2],[2,0,2,1],[2,1,1,1],[3,1,1,1],[0,2,2,2],[2,2,1,2],[3,2,1,2]] };
  const TALL_7 = { cols: 2, rows: 4, items: [[0,0,2,1],[0,1,1,1],[1,1,1,1],[0,2,1,1],[1,2,1,1],[0,3,1,1],[1,3,1,1]] };
  function autoGrid(n, aspect) {
    // generic fallback for other photo counts: a balanced grid
    let best = null;
    for (let cols = 1; cols <= n; cols++) {
      const rows = Math.ceil(n / cols);
      const cell = Math.min(aspect / cols, 1 / rows);
      if (!best || cell > best.cell) best = { cols, rows, cell };
    }
    const items = [];
    for (let i = 0; i < n; i++) items.push([i % best.cols, Math.floor(i / best.cols), 1, 1]);
    return { cols: best.cols, rows: best.rows, items };
  }

  /* ---------- scroll timeline ----------
     u = 0 ........ N-1 : photo i arrives during [i-1, i]   (photo 0 is there at the start)
     u = N-1 ...... N   : all photos move into the grid
     u = N ... N+LEEWAY : nothing changes (full grid stays pinned)        */
  const LEEWAY = 0.7;
  const TOTAL = N + LEEWAY;

  let L = [];         // per-photo geometry
  let W = 0, H = 0;   // stage size

  function measure() {
    // scroll distance per step, then the tall track that creates the pinning
    const vh = window.innerHeight;
    const stepPx = Math.max(240, vh * 0.55);
    track.style.height = (vh + TOTAL * stepPx) + 'px';

    W = gallery.clientWidth;
    H = gallery.clientHeight;
    if (!W || !H) return;
    const gap = W < 600 ? 8 : 12;
    const spec = N === 7 ? (W / H < 1.15 ? TALL_7 : WIDE_7) : autoGrid(N, W / H);
    const cw = (W - gap * (spec.cols - 1)) / spec.cols;
    const ch = (H - gap * (spec.rows - 1)) / spec.rows;

    L = figs.map((f, i) => {
      const [c, r, ws, hs] = spec.items[i];
      const gw = ws * cw + (ws - 1) * gap, gh = hs * ch + (hs - 1) * gap;
      const gx = c * (cw + gap), gy = r * (ch + gap);
      // single view: the photo's own shape, as large as fits the stage
      const img = imgs[i];
      let ar = img && img.naturalWidth ? img.naturalWidth / img.naturalHeight : 4 / 3;
      ar = Math.min(1.8, Math.max(0.62, ar));
      let sw = W * 0.86, sh = sw / ar;
      if (sh > H * 0.9) { sh = H * 0.9; sw = sh * ar; }
      const sx = (W - sw) / 2, sy = (H - sh) / 2;
      // the figure is laid out at its single size; the grid is a transform from it
      f.style.left = sx + 'px';
      f.style.top = sy + 'px';
      f.style.width = sw + 'px';
      f.style.height = sh + 'px';
      return {
        dx: (gx + gw / 2) - (sx + sw / 2),
        dy: (gy + gh / 2) - (sy + sh / 2),
        kx: gw / sw,
        ky: gh / sh
      };
    });
    update();
  }

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;   // easeInOutCubic

  let lastShown = '';
  function update() {
    if (!L.length) return;
    const range = track.offsetHeight - window.innerHeight;
    const scrolled = -track.getBoundingClientRect().top;
    const u = clamp(scrolled / range, 0, 1) * TOTAL;

    const enter = figs.map((_, i) => i === 0 ? 1 : ease(clamp(u - (i - 1), 0, 1)));
    const g = ease(clamp(u - (N - 1), 0, 1));

    for (let i = 0; i < N; i++) {
      const e = enter[i], l = L[i];
      // how many photos have landed on top of this one (for the stack look)
      let depth = 0;
      for (let j = i + 1; j < N; j++) depth += enter[j];
      depth = Math.min(depth, 3);

      // single / stacked state
      const sY = (1 - e) * H * 0.85 - depth * 10;
      const sR = tilt[i] + (1 - e) * 10;
      const sS = (1 - depth * 0.045) * (0.92 + 0.08 * e);
      // blend into the grid state
      const x = lerp(0, l.dx, g);
      const y = lerp(sY, l.dy, g);
      const r = lerp(sR, 0, g);
      const kx = lerp(sS, l.kx, g);
      const ky = lerp(sS, l.ky, g);
      const op = lerp(i === 0 ? 1 : clamp(e * 2.5, 0, 1), 1, g);

      figs[i].style.transform = `translate3d(${x}px,${y}px,0) rotate(${r}deg) scale(${kx},${ky})`;
      figs[i].style.opacity = op;
      // keep the photo itself undistorted while its frame changes shape
      const m = Math.max(kx, ky);
      if (imgs[i]) imgs[i].style.transform = `scale(${m / kx},${m / ky})`;
      if (caps[i]) caps[i].style.opacity = 1 - g;
    }

    // counter text
    const shown = g > 0.5 ? N : enter.filter(e => e > 0.5).length;
    const key = shown + (g > 0.5 ? 'grid' : '');
    if (key !== lastShown) {
      lastShown = key;
      numEl.textContent = g > 0.5
        ? `All ${N} photos`
        : `${String(shown).padStart(2, '0')} / ${String(N).padStart(2, '0')}`;
      hintEl.textContent = g > 0.5 ? 'Keep scrolling ↓' : 'Scroll to see the next photo ↓';
    }
  }

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; update(); });
  }, { passive: true });
  let rt = null;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(measure, 120); });
  imgs.forEach(img => img && !img.complete && img.addEventListener('load', measure, { once: true }));
  measure();
})();
