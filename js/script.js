(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Loader */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('done');
      document.body.classList.remove('loading');
    }, reduce ? 0 : 700);
  });

  /* Scroll: progress bar, nav, back-to-top, active link */
  const progress = document.getElementById('progress');
  const nav = document.getElementById('nav');
  const toTop = document.getElementById('toTop');
  const links = [...document.querySelectorAll('nav ul a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href')));
  function onScroll(){
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (h > 0 ? y / h * 100 : 0) + '%';
    nav.classList.toggle('scrolled', y > 40);
    toTop.classList.toggle('show', y > 600);
    let current = null;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) current = i; });
    links.forEach((a, i) => a.classList.toggle('active', i === current));
  }
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  toTop.addEventListener('click', () => scrollTo({top:0, behavior:'smooth'}));

  /* Mobile menu */
  const menuBtn = document.getElementById('menuBtn'), menu = document.getElementById('menu');
  menuBtn.addEventListener('click', () => { menu.classList.toggle('open'); menuBtn.classList.toggle('open'); });
  links.forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); menuBtn.classList.remove('open'); }));

  /* Reveal on scroll (with stagger for siblings) */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
      el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) * 0.1) + 's';
      el.classList.add('in');
      el.querySelectorAll('.meter i').forEach(m => m.style.width = m.dataset.w);
      el.querySelectorAll('.count').forEach(countUp);
      io.unobserve(el);
    });
  }, {threshold:.15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* Count-up numbers */
  function countUp(el){
    const to = +el.dataset.to, start = performance.now(), dur = 1200;
    (function step(t){
      const p = Math.min(1, (t - start) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  /* Typing effect */
  const words = ['Graphic Designer', 'IT Student', 'Illustrator Artist', 'Graphic Designer', 'Future Game Developer'];
  const typed = document.getElementById('typed');
  let w = 0, c = 0, del = false;
  function type(){
    const word = words[w];
    typed.textContent = word.slice(0, c);
    if (!del && c < word.length) c++;
    else if (del && c > 0) c--;
    else if (!del) { del = true; return setTimeout(type, 1600); }
    else { del = false; w = (w + 1) % words.length; }
    setTimeout(type, del ? 45 : 90);
  }
  if (reduce) typed.textContent = words[0]; else type();

  /* Button ripple */
  document.querySelectorAll('.btn').forEach(b => b.addEventListener('click', e => {
    const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height);
    const span = document.createElement('span');
    span.className = 'ripple';
    span.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s/2}px;top:${e.clientY - r.top - s/2}px`;
    b.appendChild(span); setTimeout(() => span.remove(), 600);
  }));

  /* Click burst anywhere */
  const colors = ['#7ea6d8', '#3e6aa3', '#a9c8ea', '#c9b8f0', '#5b86c0'];
  if (!reduce) document.addEventListener('click', e => {
    for (let i = 0; i < 10; i++) {
      const p = document.createElement('i');
      p.className = 'burst';
      const a = Math.random() * Math.PI * 2, d = 30 + Math.random() * 40;
      p.style.cssText = `left:${e.clientX - 4}px;top:${e.clientY - 4}px;background:${colors[i % colors.length]};--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d}px;--r:${Math.random()*360}deg`;
      document.body.appendChild(p); setTimeout(() => p.remove(), 700);
    }
  });

  /* 3D tilt for hero photo and project images */
  function tilt(el, max){
    if (reduce) return;
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transform = `rotateY(${(x - .5) * max}deg) rotateX(${(.5 - y) * max}deg) scale(1.02)`;
      el.style.setProperty('--mx', x * 100 + '%'); el.style.setProperty('--my', y * 100 + '%');
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  }
  tilt(document.getElementById('photo'), 14);
  document.querySelectorAll('.tilt').forEach(el => tilt(el, 12));

  /* Animated low-poly background in hero */
  const cv = document.getElementById('poly'), ctx = cv.getContext('2d');
  let pts = [], W, H;
  function initPoly(){
    W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight;
    const n = Math.min(70, Math.floor(W * H / 16000));
    pts = Array.from({length:n}, () => ({x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.35, vy:(Math.random()-.5)*.35}));
  }
  let mouse = {x:-999, y:-999};
  cv.parentElement.addEventListener('mousemove', e => { const r = cv.getBoundingClientRect(); mouse = {x:e.clientX - r.left, y:e.clientY - r.top}; });
  function drawPoly(){
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 140) {
          const near = Math.hypot(a.x - mouse.x, a.y - mouse.y) < 160;
          ctx.strokeStyle = near ? `rgba(62,106,163,${(1 - d/140) * .8})` : `rgba(126,166,216,${(1 - d/140) * .35})`;
          ctx.lineWidth = near ? 1.2 : .7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const p of pts) { ctx.fillStyle = 'rgba(126,166,216,.85)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 7); ctx.fill(); }
    requestAnimationFrame(drawPoly);
  }
  initPoly(); addEventListener('resize', initPoly);
  if (!reduce) drawPoly();

  /* Lightbox for gallery and projects */
  const items = [
    ...[...document.querySelectorAll('.tilt')].map(t => ({el:t, src:t.dataset.full, cap:t.dataset.cap})),
    ...[...document.querySelectorAll('.cert')].map(c => ({el:c, src:c.dataset.full, cap:c.dataset.cap})),
    ...[...document.querySelectorAll('.gallery figure')].map(f => ({el:f, src:f.querySelector('img').src, cap:f.querySelector('figcaption').textContent}))
  ];
  const lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
  let idx = 0;
  function show(i){ idx = (i + items.length) % items.length; lbImg.src = items[idx].src; lbImg.alt = items[idx].cap; lbCap.textContent = items[idx].cap; }
  items.forEach((it, i) => it.el.addEventListener('click', () => { show(i); lb.classList.add('open'); }));
  const close = () => lb.classList.remove('open');
  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); show(idx - 1); });
  document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); show(idx + 1); });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });

  /* Word Blaster game: Play / Demo tabs */
  const tabs = document.querySelectorAll('.game-tab'), panes = document.querySelectorAll('.game-pane');
  const video = document.querySelector('.game-video');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.toggle('active', x === t));
    panes.forEach(p => p.classList.toggle('active', p.dataset.pane === t.dataset.pane));
    if (t.dataset.pane !== 'video' && video) video.pause();
  }));

  /* Load the game only when asked (keeps the page fast) */
  const gameStart = document.getElementById('gameStart');
  if (gameStart) gameStart.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = 'games/word-blaster/index.html';
    frame.title = 'Word Blaster Typing Game';
    frame.setAttribute('allow', 'autoplay; fullscreen');
    gameStart.replaceWith(frame);
    frame.addEventListener('load', () => frame.focus());
  });
})();
