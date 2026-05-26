// ─── PRODUTOS ────────────────────────────────────────────
// Para adicionar um produto novo, basta inserir um objeto aqui.
// Categorias disponíveis: 'trufas' | 'bolos' | 'brigadeiros' | 'caixas'
//
// Para adicionar imagem a um produto, inclua o campo:
//   image: './images/nome-da-foto.jpg'
// Se não tiver imagem, o campo icon (emoji) será exibido normalmente.
// Exemplo:
//   { id: 1, cat: 'trufas', tag: 'Trufa', icon: '🍫', image: './images/trufa-brigadeiro.jpg',
//     name: 'Trufa de Brigadeiro', desc: '...', price: 6.00 }

const PRODUCTS = [
  // TRUFAS
  {
    id: 1, cat: 'trufas', tag: 'Trufa', icon: '🍫',
    image: './images/Trufa Brigadeiro.png',
    name: 'Trufa de Brigadeiro',
    desc: 'Chocolate ao leite recheado com brigadeiro cremoso clássico',
    price: 6.00
  },
  {
    id: 2, cat: 'trufas', tag: 'Trufa', icon: '🥥',
    image: './images/Trufa Prestígio.png',
    name: 'Trufa de Prestígio',
    desc: 'Chocolate com recheio de coco ralado e brigadeiro delicioso',
    price: 6.00
  },
  {
    id: 3, cat: 'trufas', tag: 'Trufa', icon: '🍼',
    image: './images/Trufa Ninho.png',
    name: 'Trufa de Ninho',
    desc: 'Chocolate branco com recheio de leite ninho cremoso',
    price: 6.00
  },
  {
    id: 4, cat: 'trufas', tag: 'Trufa', icon: '🍓',
    image: './images/Trufa Ninho com Morango.png',
    name: 'Trufa Ninho c/ Morango',
    desc: 'Combinação irresistível de ninho e geleia de morango fresco',
    price: 6.00
  },
  {
    id: 5, cat: 'trufas', tag: 'Trufa', icon: '🟡',
    image: './images/Trufa Maracujá.png',
    name: 'Trufa de Maracujá',
    desc: 'Recheio azedinho de maracujá no chocolate — contraste perfeito',
    price: 6.00
  },
  {
    id: 6, cat: 'trufas', tag: 'Trufa', icon: '☕',
    image: './images/Trufa de Café.png',
    name: 'Trufa de Café',
    desc: 'Para amantes de café: recheio intenso e aromático irresistível',
    price: 6.00
  },
  {
    id: 7, cat: 'trufas', tag: 'Trufa', icon: '🏔️',
    image: './images/Trufa Alpino.png',
    name: 'Trufa Alpino',
    desc: 'Sabor alpino clássico, cremoso e com aquela nostalgia gostosa',
    price: 6.00
  },

  // BOLOS BOMBOM
  {
    id: 8, cat: 'bolos', tag: 'Bolo', icon: '🎂',
    image: './images/Bolo Bombom Cenoura.png',
    name: 'Bolo Bombom Cenoura',
    desc: 'Bolo de cenoura fofinho recheado com brigadeiro e cobertura de chocolate',
    price: 7.50
  },
  {
    id: 9, cat: 'bolos', tag: 'Bolo', icon: '🍰',
    image: './images/Bolo Bombom Chocolate.png',
    name: 'Bolo Bombom Chocolate',
    desc: 'Bolo de chocolate com brigadeiro — clássico que nunca decepciona',
    price: 7.50
  },
  {
    id: 10, cat: 'bolos', tag: 'Bolo', icon: '🎉',
    image: './images/Bolo Choc. c Prestígio.png',
    name: 'Bolo Choc. c/ Prestígio',
    desc: 'Bolo de chocolate recheado com brigadeiro de prestígio e coco',
    price: 7.50
  },

  // BRIGADEIROS
  {
    id: 11, cat: 'brigadeiros', tag: 'Dúzia', icon: '🍬',
    image: './images/Brigadeiro Clássico.png',
    name: 'Brigadeiro Clássico',
    desc: 'O brigadeiro tradicional com granulado — dúzia feita com amor',
    price: 24.00
  },
  {
    id: 12, cat: 'brigadeiros', tag: 'Dúzia', icon: '✨',
    image: './images/Brigadeiro Especial.jpeg',
    name: 'Brigadeiro Especial',
    desc: 'Brigadeiro gourmet em versões especiais de sabores variados',
    price: 28.00
  },

  // CAIXAS PRESENTE
  {
    id: 13, cat: 'caixas', tag: 'Caixa', icon: '🎁',
    image: './images/Caixa Mista 12un.jpeg',
    name: 'Caixa Mista 12un',
    desc: '12 trufas sortidas em caixa presenteável — perfeita para presentes',
    price: 65.00
  },
  {
    id: 14, cat: 'caixas', tag: 'Caixa', icon: '💝',
    image: './images/Caixa Mista 24un.jpeg',
    name: 'Caixa Mista 24un',
    desc: '24 trufas sortidas — ideal para eventos e presentear com estilo',
    price: 120.00
  },
];