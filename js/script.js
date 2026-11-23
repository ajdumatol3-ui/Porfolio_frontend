(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Loader */
  /* Keep the name intro on screen until its animation has played (about 2.4s),
     or until the page finishes loading, whichever is later. */
  const introStart = performance.now(), introLength = reduce ? 0 : 2400;
  window.addEventListener('load', () => {
    const wait = Math.max(0, introLength - (performance.now() - introStart));
    setTimeout(() => {
      document.getElementById('loader').classList.add('done');
      document.body.classList.remove('loading');
      // Tell the anime.js effects (js/anime-effects.js) that the intro is finished
      window.__introDone = true;
      document.dispatchEvent(new Event('intro:done'));
    }, wait);
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
  addEventListener('scroll', onScroll, {passive:true});

  /* Auto-hide nav: always visible on the first screen (hero).
     Further down it hides, and shows again when the mouse comes near the top,
     hovers the nav, the keyboard focuses it, or (on touch screens) when scrolling up. */
  const hero = document.getElementById('top');
  const noHover = matchMedia('(hover: none)').matches;
  let mouseNear = false, navHover = false, lastY = scrollY, scrollingUp = false;
  function updateNav(){
    const pastHero = scrollY > (hero ? hero.offsetHeight - 120 : innerHeight * .8);
    const show = !pastHero || mouseNear || navHover || nav.contains(document.activeElement)
      || document.getElementById('menu').classList.contains('open') || (noHover && scrollingUp);
    nav.classList.toggle('hide', !show);
  }
  addEventListener('scroll', () => {
    const y = scrollY;
    if (Math.abs(y - lastY) > 6) { scrollingUp = y < lastY; lastY = y; }
    updateNav();
  }, {passive:true});
  document.addEventListener('mousemove', e => {
    const near = e.clientY < 90;
    if (near !== mouseNear) { mouseNear = near; updateNav(); }
  });
  document.addEventListener('mouseleave', () => { mouseNear = false; updateNav(); });
  nav.addEventListener('mouseenter', () => { navHover = true; updateNav(); });
  nav.addEventListener('mouseleave', () => { navHover = false; updateNav(); });
  nav.addEventListener('focusin', updateNav);
  nav.addEventListener('focusout', () => setTimeout(updateNav, 0));
  onScroll(); updateNav();
  toTop.addEventListener('click', () => scrollTo({top:0, behavior:'smooth'}));

  /* Mobile menu */
  const menuBtn = document.getElementById('menuBtn'), menu = document.getElementById('menu');
  menuBtn.addEventListener('click', () => { menu.classList.toggle('open'); menuBtn.classList.toggle('open'); });
  links.forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); menuBtn.classList.remove('open'); a.blur(); }));

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
  const words = ['Graphic Designer', 'IT Student', 'Web Developer', 'Illustrator Artist', 'Anime Artist', 'Future Game Developer'];
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

  /* Hero photo stack: click to shuffle the front photo to the back */
  const stack = document.getElementById('photo');
  let swapping = false;
  function swapPhoto(){
    if (swapping) return;
    const front = stack.querySelector('.front'), back = stack.querySelector('.back');
    front.classList.replace('front', 'back');
    back.classList.replace('back', 'front');
    if (reduce) return;
    swapping = true;
    front.classList.add('to-back');
    setTimeout(() => { front.classList.remove('to-back'); swapping = false; }, 700);
  }
  stack.addEventListener('click', swapPhoto);
  stack.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); swapPhoto(); } });
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
  /* Magazine page flipper (InDesign project) */
  const magThumbs = [...document.querySelectorAll('#magThumbs button')];
  const magImg = document.getElementById('magImg');
  let magIdx = 0, magSwiped = false;
  function magGo(i){
    if (!magImg) return;
    const next = (i + magThumbs.length) % magThumbs.length;
    if (next === magIdx) return;
    const dir = next > magIdx ? 'turn-next' : 'turn-prev';
    magIdx = next;
    const b = magThumbs[magIdx];
    document.getElementById('magNum').textContent = magIdx + 1;
    document.getElementById('magTitle').textContent = b.dataset.title;
    magThumbs.forEach(t => t.classList.toggle('active', t === b));
    b.scrollIntoView({block:'nearest', inline:'center', behavior: reduce ? 'auto' : 'smooth'});
    const swap = () => { magImg.src = b.dataset.src; magImg.alt = `Magazine page ${magIdx + 1}: ${b.dataset.title}`; magImg.classList.remove('turn-next', 'turn-prev'); };
    if (reduce) return swap();
    magImg.classList.add(dir);
    setTimeout(swap, 200);
  }
  if (magImg) {
    document.getElementById('magTotal').textContent = magThumbs.length;
    document.getElementById('magPrev').addEventListener('click', () => magGo(magIdx - 1));
    document.getElementById('magNext').addEventListener('click', () => magGo(magIdx + 1));
    magThumbs.forEach((t, i) => t.addEventListener('click', () => magGo(i)));
    let sx = null; /* swipe on phones */
    magImg.addEventListener('touchstart', e => sx = e.touches[0].clientX, {passive:true});
    magImg.addEventListener('touchend', e => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 40) { magSwiped = true; setTimeout(() => magSwiped = false, 400); magGo(magIdx + (dx < 0 ? 1 : -1)); }
    });
  }

  const magItems = magThumbs.map((b, i) => ({src:b.dataset.src, cap:`Our Academic Design Works, page ${i + 1}: ${b.dataset.title} (Adobe InDesign)`}));
  const items = [
    ...[...document.querySelectorAll('.tilt:not(.cover)')].map(t => ({el:t, src:t.dataset.full, cap:t.dataset.cap})),
    ...magItems,
    ...[...document.querySelectorAll('.art-grid figure, .exhibit-grid figure')].map(f => ({el:f, src:f.querySelector('img').src, cap:f.querySelector('figcaption').textContent + ' (traditional art)'})),
    ...[...document.querySelectorAll('.cert')].map(c => ({el:c, src:c.dataset.full, cap:c.dataset.cap})),
    ...[...document.querySelectorAll('.gallery figure')].map(f => ({el:f, src:f.querySelector('img').src, cap:f.querySelector('figcaption').textContent}))
  ];
  const lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
  let idx = 0;
  function show(i){ idx = (i + items.length) % items.length; lbImg.src = items[idx].src; lbImg.alt = items[idx].cap; lbCap.textContent = items[idx].cap; }
  items.forEach((it, i) => it.el && it.el.addEventListener('click', () => { show(i); lb.classList.add('open'); }));
  const cover = document.querySelector('.tilt.cover');
  if (cover) cover.addEventListener('click', () => {
    if (magSwiped) { magSwiped = false; return; }
    show(items.indexOf(magItems[magIdx])); lb.classList.add('open');
  });
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
  const gameBox = document.getElementById('gameFrame');
  let gameIframe = null;
  function loadGame(){
    if (gameIframe) return gameIframe;
    gameIframe = document.createElement('iframe');
    gameIframe.src = 'games/word-blaster/index.html';
    gameIframe.title = 'Word Blaster Typing Game';
    gameIframe.setAttribute('allow', 'autoplay; fullscreen');
    gameStart.replaceWith(gameIframe);
    // Give the game keyboard focus as soon as it loads, so typing works right away
    gameIframe.addEventListener('load', focusGame);
    return gameIframe;
  }
  function focusGame(){
    if (!gameIframe) return;
    gameIframe.focus();
    try { gameIframe.contentWindow.focus(); } catch (e) {}
  }
  if (gameStart) gameStart.addEventListener('click', loadGame);

  /* Fullscreen: enlarge the game box (works on the page, no new tab) */
  const gameFull = document.getElementById('gameFull');
  if (gameFull && gameBox) gameFull.addEventListener('click', () => {
    loadGame();
    const req = gameBox.requestFullscreen || gameBox.webkitRequestFullscreen;
    if (req) { const p = req.call(gameBox); if (p && p.then) p.then(() => setTimeout(focusGame, 100)).catch(() => {}); }
    else window.open('games/word-blaster/index.html', '_blank');
    setTimeout(focusGame, 300);
  });
})();
