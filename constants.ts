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
  // --- NOVOS ITENS ---
  {
    id: 'escort-xr3-carro-comando',
    name: 'Escort XR3 Carro Comando Polícia - Glasslite Anos 80 Antigo',
    description: `${HEADER_DESC}Vendo clássico carrinho Escort XR3 "Carro Comando" (Polícia), fabricado pela Glasslite na década de 80. Item original de época, ideal para colecionadores de brinquedos antigos, decoração retrô ou projetos de restauro.

🏎️ Detalhes da Peça:
- Fabricante: Glasslite (Brasil).
- Modelo: Ford Escort XR3.
- Material: Plástico rígido.
- Mecanismo: Fricção FUNCIONANDO!

🔍 Estado de Conservação:
- Estrutura íntegra, sem quebrados aparentes na carroceria.
- Possui o giroflex original (peça que costuma faltar).
- Apresenta amarelamento natural do plástico e desgastes na pintura e adesivos devido à idade.
- Vendido no estado em que se encontra.`,
    price: 89.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/carro_comando/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/carro_comando/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/carro_comando/03.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/carro_comando/04.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 150000,
    keywords: ['glasslite', 'escort', 'policia', 'antigo', 'brinquedo', 'vintage']
  },
  {
    id: 'jazz-bootleg-pontiac',
    name: 'Robô Transformável Estilo Transformers Jazz (Filme) - Pontiac Solstice Prata',
    description: `${HEADER_DESC}AVISO: NÃO É ORIGINAL! TRATA-SE DE UM BOOTLEG! Inspirado no Jazz do filme de 2007. Escala Legends. Articulações firmes e visual fiel ao Pontiac Solstice.`,
    price: 45.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/jazz_bootleg/00.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/jazz_bootleg/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/jazz_bootleg/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/jazz_bootleg/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 140000,
    keywords: ['transformers', 'jazz', 'bootleg', 'robô']
  },

  // --- DISPONÍVEIS ---
  {
    id: 'escoteiros-mirins-colecao-rara',
    name: 'Coleção Biblioteca do Escoteiro Mirim Completa (20 Vols) + Estante Original Rara',
    description: `${HEADER_DESC}Coleção completa da Editora Nova Cultural (1985/86).`,
    price: 800.00,
    category: 'Livros',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 20000,
    keywords: ['disney', 'coleção']
  },
  {
    id: 'diaclone-police-countach-1982',
    name: 'Raro Takara Diaclone Police Countach 1982 (Japan)',
    description: `${HEADER_DESC}Figura original Takara Diaclone Car Robot No. 3.`,
    price: 300.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_branco/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 10000,
    keywords: ['diaclone', 'takara']
  },
  {
    id: 'tv-philco-ford-vintage-amarela',
    name: 'TV Vintage Philco-Ford Amarela Space Age',
    description: `${HEADER_DESC}TV portátil Philco-Ford de 1970.`,
    price: 349.00,
    category: 'Info Eletrônicos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now(),
    keywords: ['tv', 'vintage']
  },
  {
    id: 'yamaha-clavinova-cvp',
    name: 'Piano Digital Yamaha Clavinova CVP Profissional',
    description: `${HEADER_DESC}Piano Digital Yamaha Clavinova (Linha CVP). Teclas Pesadas.`,
    price: 8900.00,
    category: 'Instrumentos Musicais',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1500,
    keywords: ['piano', 'yamaha']
  },
  {
    id: 'fogao-lenha-fundimig-f090',
    name: 'Fogão a Lenha Antigo Fundimig F-090 Ferro',
    description: `${HEADER_DESC}Fogão a lenha antigo Fundimig F-090. 100% Ferro Fundido.`,
    price: 1390.00,
    category: 'Cozinha',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/fogao_fundimig/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 900,
    keywords: ['fogão', 'ferro']
  },
  {
    id: 'fogao-industrial-dako-couracado',
    name: 'Fogão Industrial Dako Couraçado Ferro Puro',
    description: `${HEADER_DESC}Fogão Industrial Clássico Dako Couraçado.`,
    price: 1250.00,
    category: 'Cozinha',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000,
    keywords: ['fogão', 'industrial']
  },

  // --- VENDIDOS ---
  {
    id: 'bumblebee-estrela-g1-restauro',
    name: 'Transformers G1 Bumblebee Fusca - Estrela Anos 80 (Vendido)',
    description: `Vendido: Transformers Bumblebee original da Estrela.`,
    price: 80.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/01.png'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() + 11000,
    keywords: ['transformers', 'estrela']
  },
  {
    id: 'diaclone-hilux-azul',
    name: 'Diaclone Hilux 4WD Azul, Takara (1983) (Vendido)',
    description: `Vendido: Diaclone Hilux 4WD Azul.`,
    price: 290.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_azul/01.png'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 5000,
    keywords: ['diaclone']
  },
  {
    id: 'boneco-dengue-xuxa',
    name: 'Boneco Dengue - Xou da Xuxa (Vendido)',
    description: 'Vendido: Boneco vintage Dengue.',
    price: 350.00,
    category: 'Brinquedos',
    images: ['https://desapegos.puter.site/brinquedos/dengue_xuxa/01.jpg'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 6000,
    keywords: ['xuxa']
  },
  {
    id: 'kit-mario-bros-mcdonalds',
    name: 'Kit Figuras Super Mario Bros - McDonald\'s (Vendido)',
    description: 'Vendido: Kit bonecos Mario Bros.',
    price: 80.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_mario/01.png'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 7000,
    keywords: ['mario']
  }
];

export const WHATSAPP_NUMBER = "5543991223034";
export const NEIGHBORHOOD = "San Fernando";
export const FB_MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/100001551016902/";
export const INSTAGRAM_URL = "https://www.instagram.com/novidades.e.desapegos/";