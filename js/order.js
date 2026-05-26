// ─── FORMULÁRIO DE ENCOMENDA ──────────────────────────────
let pendingWAUrl = null;

function submitOrder() {
  const nome    = document.getElementById('f-nome').value.trim();
  const tel     = document.getElementById('f-tel').value.trim();
  const prod    = document.getElementById('f-produto').value;
  const qtd     = document.getElementById('f-qtd').value || '1';
  const ocasiao = document.getElementById('f-ocasiao').value;
  const obs     = document.getElementById('f-obs').value.trim();
  const data    = document.getElementById('f-data').value;
  const entrega = document.getElementById('f-entrega').value;
  const endereco= document.getElementById('f-end').value.trim();

  if (!nome || !tel || !prod) {
    alert('Preencha pelo menos nome, WhatsApp e produto!');
    return;
  }

  let msg = `Oi Ju! Tudo bem? Gostaria de fazer uma encomenda 😊\n\n`;
  msg += `*Nome:* ${nome}\n`;
  msg += `*WhatsApp:* ${tel}\n`;
  msg += `*Produto:* ${prod}\n`;
  msg += `*Quantidade:* ${qtd}\n`;
  if (ocasiao)  msg += `*Ocasião:* ${ocasiao}\n`;
  if (data)     msg += `*Data desejada:* ${data}\n`;
  msg += `*Entrega:* ${entrega}\n`;
  if (endereco) msg += `*Endereço:* ${endereco}\n`;
  if (obs)      msg += `*Observações:* ${obs}\n`;

  pendingWAUrl = 'https://wa.me/5511995727966?text=' + encodeURIComponent(msg);

  // Mostrar preview antes de enviar
  const lines = msg.split('\n').filter(l => l.trim());
  document.getElementById('preview-content').innerHTML =
    lines.map(l => `<div class="preview-line">${l.replace(/\*(.*?)\*/g, '<strong>$1</strong>')}</div>`).join('');

  document.getElementById('preview-confirm-btn').onclick = function() {
    window.location.href = pendingWAUrl;
    closePreview();
    document.getElementById('order-form-card').classList.add('hidden');
    document.getElementById('order-success').classList.remove('hidden');
  };

  document.getElementById('preview-modal').classList.remove('hidden');
}

function closePreview() {
  document.getElementById('preview-modal').classList.add('hidden');
}

function resetOrder() {
  document.getElementById('order-form-card').classList.remove('hidden');
  document.getElementById('order-success').classList.add('hidden');
  ['f-nome','f-tel','f-email','f-obs','f-end'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function initDateField() {
  const input = document.getElementById('f-data');
  if (!input) return;
  const min = new Date();
  min.setDate(min.getDate() + 3);
  input.min = min.toISOString().split('T')[0];
}

// ─── CALCULADORA ──────────────────────────────────────────
function calcUpdate() {
  const price    = parseFloat(document.getElementById('calc-prod').value)   || 0;
  const qty      = parseInt(document.getElementById('calc-qtd').value)       || 0;
  const delivery = parseFloat(document.getElementById('calc-entrega').value) || 0;
  const total    = price * qty + delivery;
  document.getElementById('calc-total').textContent = fmtBRL(total);
}