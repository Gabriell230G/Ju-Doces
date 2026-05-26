# 🍫 Ju Doces

Site de encomendas da **Ju Doces** — confeitaria artesanal com trufas, bolos bombom, brigadeiros e caixas presente feitos com muito amor em Osasco, SP.

🔗 **[Acessar o site](https://gabriell230g.github.io/Ju-Doces/)**

---

## 📸 Sobre

Site desenvolvido para facilitar as encomendas da Ju diretamente pelo WhatsApp, com cardápio completo, carrinho e formulário de pedido.

---

## ✨ O que tem no site

- Página inicial com apresentação, categorias e depoimentos
- Cardápio com cards interativos — clica para ver os detalhes de cada produto
- Carrinho com controle de quantidade
- Formulário de encomenda que monta a mensagem e abre direto no WhatsApp
- Página Sobre com a história da Ju
- Layout responsivo para celular e computador

---

## 🗂️ Arquivos

```
├── index.html
├── images/        ← fotos dos produtos e logos
├── css/
│   ├── base.css
│   ├── animations.css
│   ├── home.css
│   └── components.css
└── js/
    ├── products.js    ← adicione produtos aqui
    ├── app.js
    ├── cart.js
    ├── catalog.js
    ├── order.js
    └── animations.js
```

---

## 🛍️ Adicionar um produto novo

Abra `js/products.js` e adicione um objeto no array:

```js
{
  id: 15,
  cat: 'trufas',               // trufas | bolos | brigadeiros | caixas
  tag: 'Trufa',
  icon: '🍫',
  image: './images/foto.jpg',  // opcional
  name: 'Nome do produto',
  desc: 'Descrição do produto',
  price: 6.00
}
```

---

## 🔧 Rodar localmente

Abra o `index.html` direto no navegador, ou use:

```bash
npx serve .
```

---

## 🛠️ Feito com

HTML · CSS · JavaScript · [Tabler Icons](https://tabler.io/icons) · Google Fonts

---

*Feito com muito amor 🍫*
