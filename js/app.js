// ─── NAVEGAÇÃO ────────────────────────────────────────────
function nav(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const link = document.getElementById('nl-' + page);
  if (link) link.classList.add('active');
  if (page === 'carrinho') renderCart();
  if (page === 'catalogo') renderCatalog();
  window.scrollTo(0, 0);
  closeMenu();
}

// ─── MENU MOBILE ──────────────────────────────────────────
function toggleMenu() {
  document.querySelector('nav').classList.toggle('menu-open');
  document.getElementById('nav-hamburger').classList.toggle('open');
}
function closeMenu() {
  document.querySelector('nav').classList.remove('menu-open');
  document.getElementById('nav-hamburger').classList.remove('open');
}

// ─── INSTAGRAM ────────────────────────────────────────────
function openIG() {
  window.location.href = 'https://instagram.com/judocesart_';
}

// ─── INICIALIZAÇÃO ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderCatalog();
  calcUpdate();
  initDateField();

  // Fechar modal clicando fora
  document.getElementById('confirm-modal').addEventListener('click', function(e) {
    if (e.target === this) confirmModalCancel();
  });
  document.getElementById('preview-modal').addEventListener('click', function(e) {
    if (e.target === this) closePreview();
  });
});