import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  "Brinquedos",
  "Decoração",
  "Pets",
  "Cozinha",
  "Info Eletrônicos",
  "Instrumentos Musicais",
  "Livros"
];

const HEADER_DESC = `Sou de Londrina (San Fernando), pode retirar em mãos comigo. Para outras cidades, envio via OLX Pay (Correios) com embalagem reforçada.

`;

export const INITIAL_PRODUCTS: Product[] = [
  // --- ITENS VENDIDOS ---
  {
    id: 'diaclone-hilux-azul',
    name: 'Diaclone Hilux 4WD Azul, Takara (1983)',
    description: `Disponível para venda o Diaclone Hilux 4WD Azul, Takara original 1983.`,
    price: 290.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_azul/01.png'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 5000,
    keywords: ['diaclone', 'takara', 'transformers']
  },
  {
    id: 'boneco-dengue-xuxa',
    name: 'Boneco Dengue - Xou da Xuxa',
    description: 'Boneco vintage do personagem Dengue da Xuxa.',
    price: 350.00,
    category: 'Brinquedos',
    images: ['https://desapegos.puter.site/brinquedos/dengue_xuxa/01.jpg'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 6000,
    keywords: ['xuxa', 'dengue']
  },
  {
    id: 'kit-mario-bros-mcdonalds',
    name: 'Kit Figuras Super Mario Bros - McDonald\'s / Nintendo',
    description: 'Coleção de bonecos do Super Mario Bros lançados pelo McDonald\'s.',
    price: 150.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_mario/01.png'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 7000,
    keywords: ['mario', 'nintendo']
  },
  {
    id: 'volante-multilaser-3-em-1',
    name: 'Volante e Pedal Multilaser 3 em 1 (PS2, PS3 e PC)',
    description: `Kit Volante e Pedal Multilaser 3 em 1.`,
    price: 100.00,
    category: 'Info Eletrônicos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/volante_multi/01.jpg'],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 8000,
    keywords: ['volante', 'gamer']
  },
  {
    id: 'chaleira-smartfy-inox',
    name: 'Chaleira Elétrica Inox 1.8L 110v - Nova',
    description: `${HEADER_DESC}Jarra Elétrica Smartfy Inox 1.8 Litros (110v). Novo na caixa.`,
    price: 50.00,
    category: 'Cozinha',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/chaleira_smartfy/01.webp'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 11000,
    keywords: ['chaleira', 'cozinha']
  },

  // --- ITENS DISPONÍVEIS ---
  {
    id: 'escoteiros-mirins-colecao-rara',
    name: 'Coleção Biblioteca do Escoteiro Mirim Completa (20 Vols) + Estante Original Rara',
    description: `${HEADER_DESC}Vendo coleção completa da Editora Nova Cultural (1985/86).`,
    price: 800.00,
    category: 'Livros',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 1000,
    keywords: ['disney', 'colecao']
  },
  {
    id: 'tv-philco-ford-vintage-amarela',
    name: 'TV Vintage Philco-Ford Amarela Space Age',
    description: `${HEADER_DESC}TV portátil icônica dos anos 70.`,
    price: 349.00,
    category: 'Info Eletrônicos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 6000,
    keywords: ['tv', 'vintage']
  },
  {
    id: 'diaclone-police-countach-1982',
    name: 'Raro Takara Diaclone Police Countach 1982 (Japan)',
    description: `${HEADER_DESC}Takara Diaclone Car Robot No. 3 original 1982.`,
    price: 300.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_branco/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 5000,
    keywords: ['diaclone', 'takara']
  }
];

export const WHATSAPP_NUMBER = "5543991223034";
export const NEIGHBORHOOD = "San Fernando";
export const FB_MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/100001551016902/";
export const INSTAGRAM_URL = "https://www.instagram.com/novidades.e.desapegos/";
