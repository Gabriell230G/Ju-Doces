// ─── CATÁLOGO ─────────────────────────────────────────────
// Renderiza os cards de produto e gerencia os filtros

let currentFilter = 'all';

function productCardHTML(product) {
  const imgContent = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : `<span class="product-emoji">${product.icon}</span>`;

  return `
    <div class="product-card flip-card" data-cat="${product.cat}" onclick="flipCard(this)">
      <div class="flip-inner">

        <!-- FRENTE -->
        <div class="flip-front">
          <div class="product-img">${imgContent}</div>
          <div class="flip-tap-hint">Toque para detalhes ↺</div>
          <div class="product-info">
            <div class="product-tag-pill">${product.tag}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-front-footer">
              <span class="product-price-sm">${fmtBRL(product.price)}</span>
              <button class="add-btn-front" onclick="event.stopPropagation(); addToCart(${product.id}, this)" aria-label="Adicionar ao carrinho">+</button>
            </div>
          </div>
        </div>

        <!-- VERSO -->
        <div class="flip-back">
          <div class="flip-back-icon">${product.icon}</div>
          <div class="flip-back-tag">${product.tag}</div>
          <div class="flip-back-name">${product.name}</div>
          <div class="flip-back-desc">${product.desc}</div>
          <div class="flip-back-price">${fmtBRL(product.price)}</div>
          <div class="flip-back-actions">
            <button class="flip-add-btn" onclick="event.stopPropagation(); addToCart(${product.id}, this)" aria-label="Adicionar ao carrinho">+</button>
            <button class="flip-back-btn" onclick="event.stopPropagation(); flipCard(this.closest('.flip-card'))">↩ Voltar</button>
          </div>
        </div>

      </div>
    </div>`;
}

function flipCard(card) {
  card.classList.toggle('flipped');
}

function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(0, 6).map(productCardHTML).join('');
}

function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;
  const filtered = currentFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === currentFilter);
  grid.innerHTML = filtered.map(productCardHTML).join('');
}

function filterByTag(cat, btnEl) {
  currentFilter = cat;
  document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
  renderCatalog();
}

function goToCategory(cat) {
  currentFilter = cat;
  nav('catalogo');
  setTimeout(() => {
    document.querySelectorAll('.tag-btn').forEach(b => {
      const matches = cat === 'all' || b.textContent.toLowerCase().includes(cat);
      b.classList.toggle('active', matches);
    });
    renderCatalog();
  }, 50);
}