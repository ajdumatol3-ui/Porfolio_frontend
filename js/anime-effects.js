/* =====================================================================
   Extra animations powered by anime.js (https://animejs.com)
   Library: js/vendor/anime.umd.min.js (v4.5.0, stored locally)

   1. Hero headline: letters pop in, name wipes in, a hand-drawn
      underline draws itself (SVG line drawing)
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

    // Hand-drawn underline under the name
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'scribble');
    svg.setAttribute('viewBox', '0 0 420 28');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M6 18 C 70 6, 120 26, 190 14 S 300 4, 350 15 S 400 22, 414 9');
    svg.appendChild(path);
    h1.appendChild(svg);
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

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
      animate(path, { strokeDashoffset: [len, 0], duration: 1100, delay: 1100, ease: 'inOutQuad' });
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

  /* ---------- 5. Contact card: fireworks on click ---------- */
  const card = document.querySelector('.contact');
  if (card) {
    // One fixed layer over the page, so sparks can fly outside the card
    const sky = document.createElement('div');
    sky.className = 'fw-layer';
    sky.setAttribute('aria-hidden', 'true');
    document.body.appendChild(sky);

    const palettes = [
      ['#3e6aa3', '#7ea6d8', '#5b86c0', '#2f4f7f'],   // site blues
      ['#ffb347', '#f5a623', '#ff7b54', '#e8590c'],   // gold / orange
      ['#8f7bd8', '#b06ab3', '#e86fa8', '#6a4fc4'],   // purple / pink
      ['#1fb6d6', '#3ec6e0', '#0e8fb0', '#5b86c0']    // cyan
    ];
    const dot = (cls, x, y, color, size) => {
      const p = document.createElement('i');
      p.className = cls;
      p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:${color};color:${color}`;
      sky.appendChild(p);
      return p;
    };

    function burst(x, y) {
      const colors = palettes[Math.floor(Math.random() * palettes.length)];
      // bright flash ring
      const ring = dot('fw-ring', x, y, 'transparent', 10);
      ring.style.borderColor = colors[0];
      animate(ring, { scale: [0, 9], opacity: [.9, 0], duration: 700, ease: 'outExpo', onComplete: () => ring.remove() });
      // sparks flying out in a circle, then drifting down and fading
      const count = 34;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + Math.random() * .2;
        const dist = 70 + Math.random() * 80;
        const dx = Math.cos(angle) * dist, dy = Math.sin(angle) * dist;
        const s = dot('fw-spark', x, y, colors[i % colors.length], 4 + Math.random() * 4);
        animate(s, {
          translateX: [{ to: dx, duration: 800, ease: 'outExpo' }, { to: dx * 1.08, duration: 700, ease: 'linear' }],
          translateY: [{ to: dy, duration: 800, ease: 'outExpo' }, { to: dy + 45, duration: 700, ease: 'inQuad' }],
          scale: [{ to: 1, duration: 800 }, { to: .2, duration: 700 }],
          opacity: [{ to: 1, duration: 800 }, { to: 0, duration: 700 }],
          onComplete: () => s.remove()
        });
      }
    }

    function launch(x, y) {
      // the rocket rises from the bottom of the card to where you clicked
      const r = card.getBoundingClientRect();
      const startY = Math.max(y + 60, r.bottom - 10);
      const rocket = dot('fw-rocket', x, startY, '#3e6aa3', 6);
      animate(rocket, {
        translateY: [0, y - startY],
        opacity: [{ to: 1, duration: 420 }, { to: 0, duration: 80 }],
        duration: 500,
        ease: 'outQuad',
        onComplete: () => { rocket.remove(); burst(x, y); }
      });
    }

    card.addEventListener('click', e => {
      launch(e.clientX, e.clientY);
      // a second, smaller firework nearby for extra sparkle
      setTimeout(() => burst(e.clientX + (Math.random() - .5) * 160, e.clientY - 30 - Math.random() * 50), 650);
    });
  }
})();
