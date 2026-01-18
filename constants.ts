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
  // --- NOVO ITEM DISPONÍVEL ---
  {
    id: 'jazz-bootleg-pontiac',
    name: 'Robô Transformável Estilo Transformers Jazz (Filme) - Pontiac Solstice Prata',
    description: `${HEADER_DESC}AVISO: NÃO É ORIGINAL! TRATA-SE DE UM BOOTLEG!

Vendo boneco transformável inspirado no personagem Jazz do primeiro filme dos Transformers (2007).

🤖 Visual Incrível: No modo veículo, ele se transforma em um Pontiac Solstice prateado. O visual do carro é muito bonito, ótimo para deixar exposto na estante ou usar em maquetes.

🔍 Detalhes do Produto:
- Tipo: Versão alternativa/genérica (Bootleg), não é da marca Hasbro.
- Tamanho: Escala Legends (pequeno, cabe na palma da mão).
- Condição: Novo (sem uso), porém, por ser uma versão genérica, possui plástico mais simples e articulações bem firmes/rígidas.
- Indicação: Perfeito para quem quer um brinquedo barato para batalhas, para customizadores treinarem pintura ou para colecionadores de variantes "KO".`,
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
    createdAt: Date.now() + 100000,
    keywords: ['transformers', 'jazz', 'bootleg', 'carro', 'robô', 'brinquedo']
  },

  // --- ITENS DISPONÍVEIS ---
  {
    id: 'escoteiros-mirins-colecao-rara',
    name: 'Coleção Biblioteca do Escoteiro Mirim Completa (20 Vols) + Estante Original Rara',
    description: `${HEADER_DESC}Vendo coleção completa da Editora Nova Cultural (1985/86). Item de colecionador!`,
    price: 800.00,
    category: 'Livros',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 20000,
    keywords: ['livros', 'coleção', 'escoteiros mirins', 'disney']
  },
  {
    id: 'chaveiro-espada-garen-lol',
    name: 'Chaveiro Espada do Garen (League of Legends) - 12cm Metal',
    description: `${HEADER_DESC}Miniatura da espada do campeão Garen. Material: Liga de Zinco.`,
    price: 30.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/pingente_lol/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() + 25000,
    keywords: ['lol', 'garen', 'chaveiro']
  },
  {
    id: 'miniatura-guarana-tai-vintage',
    name: 'Miniatura Guaraná Taí Coca-Cola Anos 80 - Coleção Rara',
    description: `${HEADER_DESC}Miniatura rara do Guaraná Taí. Original dos anos 80.`,
    price: 50.00,
    category: 'Decoração',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/miniatura_tai/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 12000,
    keywords: ['taí', 'coca-cola', 'vintage']
  },
  {
    id: 'bumblebee-estrela-g1-restauro',
    name: 'Transformers G1 Bumblebee Fusca - Estrela Anos 80 (Para Restauro)',
    description: `${HEADER_DESC}Transformers Bumblebee original da Estrela (anos 80).`,
    price: 70.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 11000,
    keywords: ['transformers', 'bumblebee', 'estrela']
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
    description: `${HEADER_DESC}TV portátil Philco-Ford, modelo icônico de 1970.`,
    price: 349.00,
    category: 'Info Eletrônicos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now(),
    keywords: ['tv', 'vintage', 'philco']
  },
  {
    id: 'tait-speaker-tmaa10',
    name: 'Alto-Falante Tait Padrão Industrial p/ Rádio PX',
    description: `${HEADER_DESC}Alto-falante remoto original Tait Communications.`,
    price: 170.00,
    category: 'Info Eletrônicos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/speaker_tait/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 200,
    keywords: ['rádio', 'px', 'speaker']
  },
  {
    id: 'comando-arcade-sanwa-vermelho',
    name: 'Comando Arcade Sanwa Vermelho - Fliperama',
    description: `${HEADER_DESC}Controle para Arcade tipo Sanwa JLF. NOVO.`,
    price: 60.00,
    category: 'Info Eletrônicos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 400,
    keywords: ['arcade', 'sanwa']
  },
  {
    id: 'mimo-convert-locomotiva',
    name: 'Robô GoBots Loco Mimo Anos 80',
    description: `${HEADER_DESC}Clássico da Mimo (Convert) anos 80.`,
    price: 89.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mimo_convert/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 500,
    keywords: ['gobots', 'mimo']
  },
  {
    id: 'patins-inline-ajustavel',
    name: 'Patins In Line Ajustável 34-36 Preto',
    description: `${HEADER_DESC}Patins Roller In-Line Ajustável (34 ao 36).`,
    price: 130.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/patins_inline/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 600,
    keywords: ['patins', 'esporte']
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
  {
    id: 'suporte-doces-cupcakes_floral',
    name: 'Suporte Doces Cupcakes 2 Andares',
    description: `${HEADER_DESC}Boleira de 2 andares estilo provençal.`,
    price: 20.00,
    category: 'Cozinha',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/suporte_frutas/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1100,
    keywords: ['festa', 'boleira']
  },
  {
    id: 'mini-aquaterrario-decorado-betta',
    name: 'Mini Aquário Terrário Decorado Betta',
    description: `${HEADER_DESC}Mini Aquaterrário pronto para uso (19x13x13cm).`,
    price: 40.00,
    category: 'Pets',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/aquario_beta/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1200,
    keywords: ['aquário', 'peixe']
  },
  {
    id: 'kit-cozinha-barbie-vintage',
    name: 'Lote Miniaturas Cozinha Barbie Vintage Anos 80',
    description: `${HEADER_DESC}Miniaturas originais da Barbie Estrela.`,
    price: 19.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_minicozinha/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1300,
    keywords: ['barbie', 'vintage']
  },
  {
    id: 'mesa-cadeiras-barbie',
    name: 'Mesa Jantar Boneca Barbie + 4 Cadeiras Pink',
    description: `${HEADER_DESC}Conjunto Sala de Jantar Crystal Doll.`,
    price: 15.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mesa_barbie/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1400,
    keywords: ['barbie', 'móveis']
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
    id: 'pogobol-barbie-classico',
    name: 'Pogobol Estrela Barbie Original Vintage Anos 90',
    description: `${HEADER_DESC}Clássico Pogobol da Estrela - Edição Barbie.`,
    price: 15.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbie_pogobol/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1600,
    keywords: ['pogobol', 'vintage']
  },
  {
    id: 'lote-lol-surprise-completo',
    name: 'Lote 5 Bonecas LOL Surprise Originais',
    description: `${HEADER_DESC}Lote de 5 bonecas LOL originais + acessórios.`,
    price: 85.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_lol/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1700,
    keywords: ['lol', 'boneca']
  },
  {
    id: 'bandai-dx-dodekabutak-vintage',
    name: 'Boneco Bandai Kabutack 1997 Raro',
    description: `${HEADER_DESC}Robô DX Dodekabutak Bandai Japan (1997).`,
    price: 65.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/robo_kabutak/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1800,
    keywords: ['bandai', 'kabutack']
  },
  {
    id: 'cavalo-madeira-balanco',
    name: 'Cavalinho de Balanço Madeira Maciça',
    description: `${HEADER_DESC}Cavalinho de Balanço Tradicional em Madeira de Lei.`,
    price: 75.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/cavalo_madeira/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1900,
    keywords: ['madeira', 'cavalinho']
  },
  {
    id: 'stacie-suco-playset',
    name: 'Playset Barbie Stacie Barraca de Suco',
    description: `${HEADER_DESC}Playset Original Barbie Stacie Mattel.`,
    price: 65.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/stacie_suco/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2000,
    keywords: ['barbie', 'playset']
  },
  {
    id: 'gaiola-calopsita',
    name: 'Gaiola Chalé Grande Branca p/ Calopsita',
    description: `${HEADER_DESC}Gaiola espaçosa, ideal para Calopsitas.`,
    price: 75.00,
    category: 'Pets',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/gaiola_calopsita/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2100,
    keywords: ['gaiola', 'calopsita']
  },
  {
    id: 'fogao-venax',
    name: 'Fogão Cooktop Portátil Venax 4 Bocas Inox',
    description: `${HEADER_DESC}Fogão de Mesa Venax 4 Bocas Inox.`,
    price: 189.00,
    category: 'Cozinha',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/eletro/fogareiro_venax/01.jpg'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2300,
    keywords: ['fogão', 'cooktop']
  },
  {
    id: 'batgirl-jato',
    name: 'Boneca Batgirl + Jato Mattel Original',
    description: `${HEADER_DESC}Boneca Articulada + Nave Bat-Jato.`,
    price: 50.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/batgirl_jato/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2500,
    keywords: ['batgirl', 'mattel']
  },
  {
    id: 'lote-ferramentas-massinha',
    name: 'Lote Acessórios Massinha Play-Doh',
    description: `${HEADER_DESC}Saco de ferramentas para massinha.`,
    price: 40.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_massinha/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2600,
    keywords: ['massinha', 'play-doh']
  },
  {
    id: 'lote-polly-pocket',
    name: 'Lote Polly Pocket 4 Bonecas + Closet',
    description: `${HEADER_DESC}Kit Polly Pocket Fashion.`,
    price: 60.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_polly/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2700,
    keywords: ['polly', 'boneca']
  },
  {
    id: 'panelinhas-metal',
    name: 'Kit Panelinhas Brinquedo Metal Inox Realista',
    description: `${HEADER_DESC}Kit de Cozinha Infantil Luxo em Metal.`,
    price: 49.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/panelinhas_metal/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2800,
    keywords: ['cozinha', 'panelinhas']
  },
  {
    id: 'barbie-salao-pia',
    name: 'Pia Lavatório Salão Barbie Glamour',
    description: `${HEADER_DESC}Acessório para Casa da Barbie.`,
    price: 25.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbiesalao/01.png'],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2900,
    keywords: ['barbie', 'móveis']
  },
  {
    id: 'army-men-toy-story',
    name: 'Soldadinhos Army Men Toy Story Disney Pixar',
    description: `${HEADER_DESC}Soldadinhos ORIGINAIS Disney/Pixar.`,
    price: 49.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/armymen/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3000,
    keywords: ['toy story', 'soldadinho']
  },
  {
    id: 'baby-alive-festa-massas',
    name: 'Boneca Baby Alive Festa das Massas - Completa',
    description: `${HEADER_DESC}Baby Alive Interativa (Come e Faz Caquinha).`,
    price: 120.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/babyalive/01.png'],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3100,
    keywords: ['baby alive', 'boneca']
  },

  // --- ITENS VENDIDOS (SÓ APARECEM EM /VENDIDOS) ---
  {
    id: 'diaclone-hilux-azul',
    name: 'Diaclone Hilux 4WD Azul, Takara (1983)',
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
    name: 'Boneco Dengue - Xou da Xuxa',
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
    name: 'Kit Figuras Super Mario Bros - McDonald\'s',
    description: 'Vendido: Kit bonecos Mario Bros.',
    price: 80.00,
    category: 'Brinquedos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_mario/01.png'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 7000,
    keywords: ['mario']
  },
  {
    id: 'volante-multilaser-3-em-1',
    name: 'Volante e Pedal Multilaser 3 em 1 (PS2, PS3 e PC)',
    description: `Vendido: Volante e Pedal.`,
    price: 100.00,
    category: 'Info Eletrônicos',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/volante_multi/01.jpg'],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 8000,
    keywords: ['volante']
  },
  {
    id: 'chaleira-smartfy-inox',
    name: 'Chaleira Elétrica Inox 1.8L 110v',
    description: `Vendido: Chaleira Inox.`,
    price: 50.00,
    category: 'Cozinha',
    images: ['https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/chaleira_smartfy/01.webp'],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 11000,
    keywords: ['chaleira']
  }
];

export const WHATSAPP_NUMBER = "5543991223034";
export const NEIGHBORHOOD = "San Fernando";
export const FB_MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/100001551016902/";
export const INSTAGRAM_URL = "https://www.instagram.com/novidades.e.desapegos/";
