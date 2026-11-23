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

  /* Night-sky starfield with shooting stars (fixed behind the whole page) */
  const cv = document.getElementById('poly'), ctx = cv.getContext('2d');
  let stars = [], meteors = [], W, H, nextMeteor = performance.now() + 2200;
  function initSky(){
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    const n = Math.min(240, Math.floor(W * H / 5500));
    stars = Array.from({length:n}, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: .4 + Math.random() * 1.3,
      tw: Math.random() * Math.PI * 2,       // twinkle phase
      sp: .3 + Math.random() * .8,           // twinkle speed
      warm: Math.random() < .16              // a few warm golden stars
    }));
  }
  function spawnMeteor(now){
    const dir = Math.random() < .5 ? 1 : -1;
    meteors.push({
      x: W * (.1 + Math.random() * .8), y: H * Math.random() * .35,
      vx: dir * (5 + Math.random() * 4), vy: 2.2 + Math.random() * 1.8, life: 1
    });
    nextMeteor = now + 2800 + Math.random() * 5200;
  }
  function drawSky(now){
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      const a = .3 + .7 * (.5 + .5 * Math.sin(s.tw + now * .001 * s.sp));
      ctx.fillStyle = s.warm ? `rgba(255,224,178,${a})` : `rgba(214,228,255,${a})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    }
    if (now > nextMeteor && meteors.length < 2) spawnMeteor(now);
    for (const m of meteors) {
      m.x += m.vx; m.y += m.vy; m.life -= .011;
      const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 14, m.y - m.vy * 14);
      g.addColorStop(0, `rgba(255,255,255,${.9 * Math.max(0, m.life)})`);
      g.addColorStop(1, 'rgba(180,230,200,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14); ctx.stroke();
    }
    meteors = meteors.filter(m => m.life > 0 && m.x > -80 && m.x < W + 80 && m.y < H + 80);
  }
  function skyLoop(now){ drawSky(now); requestAnimationFrame(skyLoop); }
  initSky(); addEventListener('resize', () => { initSky(); if (reduce) drawSky(0); });
  if (!reduce) requestAnimationFrame(skyLoop); else drawSky(0);

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
