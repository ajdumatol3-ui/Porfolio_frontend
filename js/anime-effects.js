/* =====================================================================
   Extra animations powered by anime.js (https://animejs.com)
   Library: js/vendor/anime.umd.min.js (v4.5.0, stored locally)

   1. Hero headline: letters pop in, name slides in from a blur
   2. Section headings: letters rise from behind a mask on scroll
   3. Tool badges: slow, smooth spin on hover
   4. Hero skill badges (Illustrator / InDesign / Animate): drag them,
      they spring back
   5. Contact card: click anywhere on it for fireworks
   ===================================================================== */
(() => {
  const A = window.anime;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!A || reduce) return;           // page still works fine without these
  const { animate, stagger } = A;

  /* Split an element's text into word + letter spans (keeps child elements) */
  function splitLetters(el) {
    const letters = [];
    (function walk(node) {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            w.className = 'split-w';
            [...part].forEach(ch => {
              const c = document.createElement('span');
              c.className = 'split-c';
              c.textContent = ch;
              w.appendChild(c);
              letters.push(c);
            });
            frag.appendChild(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && !child.classList.contains('name')) {
          walk(child);
        }
      });
    })(el);
    el.setAttribute('aria-label', el.textContent.trim());
    return letters;
  }

  /* Run fn once when el scrolls into view */
  function onView(el, fn, threshold = 0.35) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { fn(); io.disconnect(); } });
    }, { threshold });
    io.observe(el);
  }

  /* ---------- 1. Hero headline ---------- */
  const h1 = document.querySelector('.hero h1');
  if (h1) {
    h1.classList.remove('reveal');
    const name = h1.querySelector('.name');
    const hiLetters = splitLetters(h1);            // "Hi, I'm" (the name is skipped)
    hiLetters.forEach(c => { c.style.transform = 'translateY(110%)'; });
    if (name) { name.style.opacity = '0'; name.style.filter = 'blur(14px)'; }

    const playHero = () => {
      animate(hiLetters, {
        translateY: ['110%', '0%'],
        rotate: [12, 0],
        duration: 900,
        delay: stagger(45),
        ease: 'outElastic(1, .7)'
      });
      if (name) animate(name, {
        opacity: [0, 1],
        translateX: [-40, 0],
        filter: ['blur(14px)', 'blur(0px)'],
        duration: 1100,
        delay: 300,
        ease: 'outExpo',
        onComplete: () => { name.style.filter = ''; name.style.transform = ''; }
      });
    };
    if (window.__introDone) playHero(); else document.addEventListener('intro:done', playHero, { once: true });
  }

  /* ---------- 2. Section headings ---------- */
  document.querySelectorAll('section h2').forEach(h2 => {
    h2.classList.remove('reveal');
    h2.classList.add('split-mask');
    const letters = splitLetters(h2);
    letters.forEach(c => { c.style.transform = 'translateY(115%)'; });
    onView(h2, () => animate(letters, {
      translateY: ['115%', '0%'],
      duration: 900,
      delay: stagger(22),
      ease: 'outExpo'
    }), 0.6);
  });

  /* ---------- 3. Tool badges: slow, smooth spin on hover ---------- */
  document.querySelectorAll('.tool').forEach(tool => {
    const badge = tool.querySelector('.badge');
    if (!badge) return;
    badge.style.transition = 'none';     // let anime.js drive the transform smoothly
    let busy = false;
    tool.addEventListener('mouseenter', () => {
      if (busy) return;
      busy = true;
      animate(badge, {
        rotate: [0, 360],
        scale: [{ to: 1.1, duration: 750 }, { to: 1, duration: 750 }],
        duration: 1500,             // one smooth turn in 1.5 seconds
        ease: 'inOutSine',
        onComplete: () => {
          animate(badge, { rotate: 0, scale: 1, duration: 0 });   // 360° = 0°, reset quietly
          busy = false;
        }
      });
    });
  });

  /* ---------- 4. Draggable hero badges that spring back ---------- */
  document.querySelectorAll('.float-badge').forEach(badge => {
    badge.classList.add('draggable');
    badge.title = 'Drag me';
    const pos = { x: 0, y: 0 };
    let start = null, back = null;
    const paint = () => { badge.style.translate = `${pos.x}px ${pos.y}px`; };
    badge.addEventListener('pointerdown', e => {
      if (back) back.pause();
      start = { px: e.clientX - pos.x, py: e.clientY - pos.y };
      badge.setPointerCapture(e.pointerId);
      badge.classList.add('dragging');
    });
    badge.addEventListener('pointermove', e => {
      if (!start) return;
      pos.x = e.clientX - start.px;
      pos.y = e.clientY - start.py;
      paint();
    });
    const release = () => {
      if (!start) return;
      start = null;
      badge.classList.remove('dragging');
      back = animate(pos, { x: 0, y: 0, duration: 1200, ease: 'outElastic(1, .4)', onUpdate: paint });
    };
    badge.addEventListener('pointerup', release);
    badge.addEventListener('pointercancel', release);
  });

  /* ---------- 5. Fireworks on every click (canvas particle system) ----------
     Real explosion physics, like a fireworks video:
     - sparks fly out white-hot, then take on the shell's color
     - each leaves a glowing light trail that melts away
     - drag slows them, gravity pulls the trails into a droop, then they
       flicker and burn out at different moments                            */
  {
    const cvs = document.createElement('canvas');
    cvs.className = 'fw-layer';
    cvs.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cvs);
    const fx = cvs.getContext('2d');
    const sizeCanvas = () => { cvs.width = innerWidth; cvs.height = innerHeight; };
    sizeCanvas(); addEventListener('resize', sizeCanvas);

    // Vivid festival colors: electric blue, magenta, gold, red, violet, green
    const palettes = [
      ['#4d8dff', '#7fb0ff', '#b3d1ff', '#2e6fe8'],
      ['#ff4fa3', '#ff7fc0', '#ff2e7e', '#ffb3d9'],
      ['#ffd24d', '#ffe98a', '#ffb347', '#fff3b8'],
      ['#ff5a3d', '#ff8a66', '#ff3d3d', '#ffc1a6'],
      ['#b06aff', '#c89aff', '#8f4de8', '#e0c3ff'],
      ['#64e08a', '#a0f0b4', '#3dc96a', '#d2ffd9']
    ];
    let parts = [], running = false;

    function burst(x, y, size = 1) {
      const colors = palettes[Math.floor(Math.random() * palettes.length)];
      const crackle = Math.random() < .45;   // some shells end in a glitter strobe
      const R = Math.min(innerWidth, innerHeight) * .17 * size;
      const v0 = R / 15;                     // launch speed tuned so drag stops them around R
      const n = Math.round(70 * size);
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + Math.random() * .12;
        const v = v0 * (.55 + Math.random() * .55);
        parts.push({
          x, y, px: x, py: y, trail: [],
          vx: Math.cos(a) * v, vy: Math.sin(a) * v,
          life: 1, decay: .0035 + Math.random() * .0035,
          w: 1.4 + Math.random() * 1.2,
          color: colors[i % colors.length],
          hot: 5 + Math.random() * 7,        // white-hot frames right after the explosion
          crackle
        });
      }
      // the bright flash at the moment of detonation
      parts.push({ x, y, px: x, py: y, vx: 0, vy: 0, life: 1, decay: .1, w: R * .3, color: '#fff', flash: true });
      if (!running) { running = true; requestAnimationFrame(tick); }
    }

    function tick() {
      // a clean slate every frame: trails are drawn per spark, so nothing can linger
      fx.clearRect(0, 0, cvs.width, cvs.height);
      fx.globalCompositeOperation = 'lighter';
      fx.lineCap = 'round';
      for (const p of parts) {
        p.px = p.x; p.py = p.y;
        if (!p.flash) { p.trail.push(p.x, p.y); if (p.trail.length > 22) p.trail.splice(0, 2); }
        p.vx *= .955;
        p.vy = p.vy * .955 + .085;           // drag + gravity
        p.x += p.vx; p.y += p.vy;
        p.life -= p.decay;
        if (p.hot) p.hot--;
        // steeper fade curve: bright for most of the life, then the ember dies quickly
        let a = Math.pow(Math.max(p.life, 0), 1.8);
        if (p.crackle && p.life < .45) a *= Math.random() < .55 ? 1 : .1;   // dying strobe
        if (p.flash) {
          fx.globalAlpha = a;
          const g = fx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.w);
          g.addColorStop(0, 'rgba(255,255,255,.95)');
          g.addColorStop(1, 'rgba(255,255,255,0)');
          fx.fillStyle = g;
          fx.beginPath(); fx.arc(p.x, p.y, p.w, 0, 7); fx.fill();
        } else {
          // the glowing trail behind the spark, brightest near the head
          const t = p.trail;
          fx.strokeStyle = p.color;
          for (let k = 0; k + 3 < t.length; k += 2) {
            const f = (k + 2) / t.length;
            fx.globalAlpha = a * f * .45;
            fx.lineWidth = p.w * (.5 + f * .7);
            fx.beginPath(); fx.moveTo(t[k], t[k + 1]); fx.lineTo(t[k + 2], t[k + 3]); fx.stroke();
          }
          // bright head: white-hot right after the blast, then the shell's color
          fx.strokeStyle = p.hot ? '#fff' : p.color; fx.lineWidth = p.w; fx.globalAlpha = a;
          fx.beginPath(); fx.moveTo(p.px, p.py); fx.lineTo(p.x, p.y); fx.stroke();
        }
      }
      fx.globalAlpha = 1;
      fx.globalCompositeOperation = 'source-over';
      parts = parts.filter(p => p.life > .1 && p.y < cvs.height + 30);
      if (parts.length) requestAnimationFrame(tick);
      else { running = false; fx.clearRect(0, 0, cvs.width, cvs.height); }
    }

    document.addEventListener('click', e => {
      if (parts.length > 900) return;   // don't flood the sky on rapid clicks
      // a shell right where you clicked
      burst(e.clientX, e.clientY);
      // clicking the contact card gives a full finale across the sky
      if (e.target.closest && e.target.closest('.contact')) {
        setTimeout(() => burst(innerWidth * (.14 + Math.random() * .14), e.clientY - 80 - Math.random() * 140, .7), 500);
        setTimeout(() => burst(innerWidth * (.72 + Math.random() * .14), e.clientY - 60 - Math.random() * 160, .8), 850);
      }
    });
  }
})();
