// ─── LOADING SCREEN ───────────────────────────────────────
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hide');
    setTimeout(() => {
      loader.remove();
      animateHeroWords();
    }, 600);
  }, 1800);
}

// ─── CURSOR CUSTOMIZADO ───────────────────────────────────
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    rx += (mx - rx) * .14;
    ry += (my - ry) * .14;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
  document.querySelectorAll('a,button,.cat-card,.product-card,.occasion-card,.review-card,.ig-post')
    .forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
}

// ─── SCROLL REVEAL ────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .line-draw, .img-reveal, .highlight-word');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

// ─── HERO PALAVRAS ────────────────────────────────────────
function animateHeroWords() {
  document.querySelectorAll('.hero-word').forEach((w, i) => {
    setTimeout(() => w.classList.add('in'), i * 100);
  });
}

// ─── CONTADOR ANIMADO ─────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 25);
  });
}

function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounters(); io.disconnect(); }
    });
  }, { threshold: 0.3 });
  const statsSection = document.getElementById('stats-section');
  if (statsSection) io.observe(statsSection);
}

// ─── PARALLAX SUAVE ───────────────────────────────────────
function initParallax() {
  const hero = document.querySelector('.hero-parallax');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const shapes = hero.querySelectorAll('.float-shape');
    shapes.forEach((s, i) => {
      const speed = 0.06 + i * 0.04;
      s.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}

// ─── TILT 3D NOS CARDS ────────────────────────────────────
function initTilt() {
  document.querySelectorAll('.card-3d').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -6;
      const rotY = ((x - cx) / cx) * 6;
      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// ─── NAVBAR SCROLL ────────────────────────────────────────
function initNavScroll() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ─── INICIALIZAR TUDO ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initReveal();
  initCounters();
  initParallax();
  initNavScroll();
  setTimeout(initTilt, 2000);
});