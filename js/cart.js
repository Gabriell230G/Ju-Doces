// ─── CARRINHO ─────────────────────────────────────────────
let cart = {};
let pendingRemoveId = null;

function fmtBRL(value) {
  return 'R$ ' + value.toFixed(2).replace('.', ',');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function addToCart(productId, btnEl) {
  cart[productId] = (cart[productId] || 0) + 1;
  updateCartBadge();
  btnEl.style.transform = 'scale(1.3)';
  btnEl.textContent = '✓';
  setTimeout(() => { btnEl.style.transform = 'scale(1)'; btnEl.textContent = '+'; }, 500);

  const p = PRODUCTS.find(x => x.id == productId);
  showToast(`🍫 <strong>${p.name}</strong> adicionado! <span class="toast-link" onclick="nav('carrinho')">Ver carrinho →</span>`);
}

function changeQty(productId, delta) {
  const newQty = (cart[productId] || 0) + delta;
  if (delta < 0 && newQty <= 0) {
    // pedir confirmação antes de remover
    pendingRemoveId = productId;
    document.getElementById('confirm-modal').classList.remove('hidden');
    return;
  }
  cart[productId] = Math.max(0, newQty);
  if (cart[productId] === 0) delete cart[productId];
  updateCartBadge();
  renderCart();
}

function confirmModalOk() {
  if (pendingRemoveId !== null) {
    delete cart[pendingRemoveId];
    pendingRemoveId = null;
    updateCartBadge();
    renderCart();
  }
  document.getElementById('confirm-modal').classList.add('hidden');
}

function confirmModalCancel() {
  pendingRemoveId = null;
  document.getElementById('confirm-modal').classList.add('hidden');
}

function clearCart() {
  cart = {};
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const total = Object.values(cart).reduce((a, b) => a + b, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

function getCartSummary() {
  return Object.keys(cart).map(id => {
    const p = PRODUCTS.find(x => x.id == id);
    return `${cart[id]}x ${p.name}`;
  }).join(', ');
}

function renderCart() {
  const wrap = document.getElementById('cart-items-wrap');
  const chk  = document.getElementById('cart-checkout-wrap');
  const ids  = Object.keys(cart).filter(id => cart[id] > 0);

  if (!ids.length) {
    wrap.innerHTML = `
      <div class="cart-empty">
        <i class="ti ti-shopping-bag"></i>
        <p>Seu carrinho está vazio.</p>
        <button class="btn-primary" style="margin-top:1rem" onclick="nav('catalogo')">Ver cardápio</button>
      </div>`;
    chk.innerHTML = '';
    return;
  }

  let total = 0;
  wrap.innerHTML = ids.map(id => {
    const p   = PRODUCTS.find(x => x.id == id);
    const sub = p.price * cart[id];
    total += sub;
    const iconHTML = p.image ? `<img src="${p.image}" alt="${p.name}">` : p.icon;
    return `
      <div class="cart-item">
        <div class="cart-item-icon">${iconHTML}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${fmtBRL(p.price)} × ${cart[id]} = ${fmtBRL(sub)}</div>
        </div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${id}, -1)">−</button>
          <span class="qty-num">${cart[id]}</span>
          <button class="qty-btn" onclick="changeQty(${id}, 1)">+</button>
        </div>
      </div>`;
  }).join('');

  chk.innerHTML = `
    <div class="cart-total-box">
      <span class="cart-total-label">Total estimado</span>
      <span class="cart-total-val">${fmtBRL(total)}</span>
    </div>
    <button class="btn-primary" style="width:100%;margin-top:1rem;padding:15px" onclick="cartToOrder()">
      <i class="ti ti-brand-whatsapp"></i> Finalizar encomenda
    </button>
    <button class="btn-outline" style="width:100%;margin-top:.6rem;padding:13px" onclick="clearCart()">
      <i class="ti ti-trash"></i> Limpar carrinho
    </button>`;
}

function cartToOrder() {
  const summary = getCartSummary();
  nav('encomenda');
  setTimeout(() => {
    const obs = document.getElementById('f-obs');
    if (obs) obs.value = 'Produtos do carrinho: ' + summary;
  }, 100);
}