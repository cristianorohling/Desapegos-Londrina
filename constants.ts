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
    description: `Disponível para venda o Diaclone Hilux 4WD Azul...`,
    price: 290.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_azul/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_azul/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_azul/03.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_azul/04.png'
    ],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() + 4000,
    keywords: ['diaclone', 'takara', 'transformers', 'vintage', 'azul', 'hilux', '4wd', 'colecionador', 'anos 80', 'raridade', 'metal die-cast']
  },
  {
    id: 'boneco-dengue-xuxa',
    name: 'Boneco Dengue - Xou da Xuxa',
    description: 'Boneco vintage do personagem Dengue.',
    price: 0,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/dengue_xuxa/01.jpg',
      'https://desapegos.puter.site/brinquedos/dengue_xuxa/02.jpg',
      'https://desapegos.puter.site/brinquedos/dengue_xuxa/03.jpg'
    ],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 300,
    keywords: ['boneco', 'dengue', 'xuxa', 'xou da xuxa', 'anos 80', 'vintage', 'colecionável', 'brinquedo antigo', 'raridade']
  },
  {
    id: 'kit-mario-bros-mcdonalds',
    name: 'Kit Figuras Super Mario Bros - McDonald\'s / Nintendo',
    description: 'Coleção de bonecos do Super Mario Bros lançados pelo McDonald\'s. O lote inclui diversos personagens clássicos como Bowser, Yoshi, Luigi, Peach, Toad e Toadette.',
    price: 0,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_mario/01.png'
    ],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() + 500,
    keywords: ['mario bros', 'nintendo', 'mcdonalds', 'bowser', 'yoshi', 'luigi', 'peach', 'toad', 'toadette', 'brinquedo', 'coleção', 'vintage']
  },
  {
    id: 'volante-multilaser-3-em-1',
    name: 'Volante e Pedal Multilaser 3 em 1 (PS2, PS3 e PC)',
    description: `Kit Volante e Pedal da marca Multilaser, modelo 3 em 1. Compatível com PlayStation 2, PlayStation 3 e Computador (PC). Em bom estado de conservação e totalmente funcional (botões, pedais e respostas ok).`,
    price: 100.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/volante_multi/01.jpg'
    ],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 1000,
    keywords: ['volante', 'pedal', 'multilaser', 'ps2', 'ps3', 'pc', 'gamer', 'corrida', 'simulador']
  },
  {
    id: 'chapeu-woody',
    name: 'Chapéu Woody (Toy Story)',
    description: 'Chapéu do personagem Woody.',
    price: 0,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/chapeu_woody/01.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/chapeu_woody/02.jpg'
    ],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 3000,
    keywords: ['chapéu woody', 'toy story', 'fantasia', 'caubói', 'infantil', 'disney', 'pixar', 'cosplay infantil']
  },
  {
    id: 'mjolnir-thor-low-cost',
    name: 'Martelo Mjolnir Thor Plástico - Fantasia',
    description: `${HEADER_DESC}Martelo do Thor versão simples (brinquedo plástico). Ideal para fantasia.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/martelo_thor/01.png'
    ],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 100,
    keywords: ['thor', 'martelo', 'fantasia']
  },
  {
    id: 'chaleira-smartfy-inox',
    name: 'Chaleira Elétrica Inox 1.8L 110v - Nova',
    description: `${HEADER_DESC}Jarra Elétrica Smartfy Inox 1.8 Litros (110v). Produto NOVO na caixa.`,
    price: 50.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/chaleira_smartfy/01.webp'
    ],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 300,
    keywords: ['chaleira', 'inox', 'cozinha']
  },
  {
    id: 'kit-guardioes-galaxia-bootleg',
    name: 'Kit Bonecos Guardiões da Galáxia (Star-Lord/Groot)',
    description: `${HEADER_DESC}Kit completo com 5 bonecos dos Guardiões da Galáxia.`,
    price: 45.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/guardioes_galaxia/01.png'
    ],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 700,
    keywords: ['marvel', 'guardiões', 'bonecos']
  },
  {
    id: 'casinha-passarinho-madeira',
    name: 'Casinha Passarinho Madeira Rústica',
    description: `${HEADER_DESC}Casinha de passarinho artesanal em madeira maciça.`,
    price: 55.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/casinha_envernizada/01.png'
    ],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 800,
    keywords: ['jardim', 'madeira', 'artesanato']
  },
  {
    id: 'globo-pera-luminaria',
    name: 'Globo Cúpula Ventilador Teto Plástico',
    description: `${HEADER_DESC}Globo/Tulipa modelo "Pera" para ventilador de teto. Peça de reposição.`,
    price: 10.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/globo_pera/01.png'
    ],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 2200,
    keywords: ['globo', 'ventilador', 'reparo']
  },
  {
    id: 'repetidor-tplink',
    name: 'Repetidor Wi-Fi TP-Link 300Mbps',
    description: `${HEADER_DESC}Repetidor TP-Link TL-WA850RE. Amplia o sinal do Wi-Fi.`,
    price: 40.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/repetidor_tp-link/01.jpg'
    ],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 2400,
    keywords: ['wifi', 'repetidor', 'internet']
  },

  // --- ITENS DISPONÍVEIS ---
  {
    id: 'escoteiros-mirins-colecao-rara',
    name: 'Coleção Biblioteca do Escoteiro Mirim Completa (20 Vols) + Estante Original Rara',
    description: `${HEADER_DESC}Vendo coleção completa da "Biblioteca do Escoteiro Mirim", publicada pela Editora Nova Cultural (1985/86). Item de colecionador!

O QUE ESTÁ INCLUSO:
* Todos os 20 volumes (Capa Dura).
* Acompanha a mini-estante plástica ORIGINAL da época (Item muito difícil de encontrar hoje em dia).

DETALHES:
As lombadas dos 20 livros, quando organizadas na estante, formam uma linda ilustração panorâmica dos Escoteiros Mirins. Conteúdo riquíssimo: adaptações dos manuais Disney clássicos (Prof. Pardal, Tio Patinhas, Mickey, etc.).

ESTADO DE CONSERVAÇÃO: Livros em bom estado geral, íntegros e completos. Apresentam marcas do tempo e oxidação (amarelado) nas capas e cortes laterais, o que é natural para esta edição de capa branca com mais de 35 anos. As fotos são reais do produto.`,
    price: 800.00,
    category: 'Livros',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/03.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/04.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/05.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/livros/escoteiros_mirins/06.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 20000,
    keywords: ['livros', 'coleção', 'escoteiros mirins', 'disney', 'vintage', 'anos 80', 'raridade', 'mini-estante']
  },
  {
    id: 'chaveiro-espada-garen-lol',
    name: 'Chaveiro Espada do Garen (League of Legends) - 12cm Metal',
    description: `${HEADER_DESC}Vendo pingente com miniatura da espada do campeão Garen. Peça rica em detalhes, ideal para usar na chave, mochila ou deixar na estante junto com a coleção.

DETALHES TÉCNICOS:
* Material: Liga de Zinco (Metal maciço, não é plástico).
* Tamanho: 12 cm (Tamanho grande para chaveiro).
* Acabamento: Estilo Bronze Antigo / Envelhecido.
* Estado: Excelente conservação.`,
    price: 30.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/pingente_lol/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() + 25000,
    keywords: ['league of legends', 'lol', 'garen', 'espada', 'chaveiro', 'metal', 'geek', 'colecionador']
  },
  {
    id: 'miniatura-guarana-tai-vintage',
    name: 'Miniatura Guaraná Taí Coca-Cola Anos 80 - Coleção Rara',
    description: `${HEADER_DESC}Vendo miniatura rara do Guaraná Taí. Peça original e autêntica da famosa Promoção das Miniaturas da Coca-Cola (anos 80), que incluía também Fanta e Sprite. Item indispensável para quem quer completar o engradado clássico da coleção.`,
    price: 50.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/miniatura_tai/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 12000,
    keywords: ['guaraná taí', 'coca-cola', 'miniatura', 'vintage', 'anos 80']
  },
  {
    id: 'bumblebee-estrela-g1-restauro',
    name: 'Transformers G1 Bumblebee Fusca - Estrela Anos 80 (Para Restauro)',
    description: `${HEADER_DESC}Vendo Transformers Bumblebee (Fusca) original da Estrela (anos 80), ideal para retirada de peças ou restauro.`,
    price: 70.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/02.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 11000,
    keywords: ['transformers', 'bumblebee', 'fusca', 'estrela']
  },
  {
    id: 'diaclone-police-countach-1982',
    name: 'Raro Takara Diaclone Police Countach 1982 (Japan)',
    description: `${HEADER_DESC}Oportunidade única para colecionadores de G1 e Diaclone. Vendo figura original Takara Diaclone Car Robot No. 3.`,
    price: 300.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_branco/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 10000,
    keywords: ['diaclone', 'takara', 'transformers', 'vintage']
  },
  {
    id: 'tv-philco-ford-vintage-amarela',
    name: 'TV Vintage Philco-Ford Amarela Space Age',
    description: `${HEADER_DESC}Vendo rara TV portátil da marca Philco-Ford, modelo icônico da década de 1970.`,
    price: 349.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now(),
    keywords: ['tv antiga', 'philco', 'vintage', 'space age']
  },
  {
    id: 'tait-speaker-tmaa10',
    name: 'Alto-Falante Tait Padrão Industrial p/ Rádio PX',
    description: `${HEADER_DESC}Alto-falante remoto original Tait Communications (TMAA10).`,
    price: 170.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/speaker_tait/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 200,
    keywords: ['tait', 'px', 'py', 'industrial']
  },
  {
    id: 'comando-arcade-sanwa-vermelho',
    name: 'Comando Arcade Sanwa Vermelho - Fliperama',
    description: `${HEADER_DESC}Controle para Arcade/Fliperama tipo Sanwa JLF. NOVO.`,
    price: 60.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 400,
    keywords: ['arcade', 'fliperama', 'sanwa']
  },
  {
    id: 'mimo-convert-locomotiva',
    name: 'Robô GoBots Loco Mimo Anos 80',
    description: `${HEADER_DESC}Clássico da Mimo (Convert) anos 80, versão brasileira dos GoBots.`,
    price: 89.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mimo_convert/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 500,
    keywords: ['mimo', 'convert', 'gobots']
  },
  {
    id: 'patins-inline-ajustavel',
    name: 'Patins In Line Ajustável 34-36 Preto',
    description: `${HEADER_DESC}Patins Roller In-Line Ajustável (Serve do 34 ao 36).`,
    price: 130.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/patins_inline/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 600,
    keywords: ['patins', 'roller', 'esporte']
  },
  {
    id: 'fogao-lenha-fundimig-f090',
    name: 'Fogão a Lenha Antigo Fundimig F-090 Ferro',
    description: `${HEADER_DESC}Relíquia! Fogão a lenha antigo Fundimig F-090. Material: 100% Ferro Fundido.`,
    price: 1390.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/fogao_fundimig/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 900,
    keywords: ['fogão', 'ferro', 'antigo']
  },
  {
    id: 'fogao-industrial-dako-couracado',
    name: 'Fogão Industrial Dako Couraçado Ferro Puro',
    description: `${HEADER_DESC}Fogão Industrial Clássico Dako Couraçado. Estrutura inquebrável em ferro.`,
    price: 1250.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000,
    keywords: ['fogão', 'industrial', 'dako']
  },
  {
    id: 'suporte-doces-cupcakes_floral',
    name: 'Suporte Doces Cupcakes 2 Andares',
    description: `${HEADER_DESC}Boleira/Suporte de 2 andares para doces e salgados. Estilo provençal.`,
    price: 20.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos//cozinha/suporte_frutas/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1100,
    keywords: ['festa', 'boleira', 'doces']
  },
  {
    id: 'mini-aquaterrario-decorado-betta',
    name: 'Mini Aquário Terrário Decorado Betta',
    description: `${HEADER_DESC}Mini Aquaterrário pronto para uso. Medidas: 19x13x13cm.`,
    price: 40.00,
    category: 'Pets',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/aquario_beta/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1200,
    keywords: ['aquário', 'betta', 'peixe']
  },
  {
    id: 'kit-cozinha-barbie-vintage',
    name: 'Lote Miniaturas Cozinha Barbie Vintage Anos 80',
    description: `${HEADER_DESC}Lote de colecionador! Miniaturas originais da Barbie Estrela.`,
    price: 19.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_minicozinha/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1300,
    keywords: ['barbie', 'vintage', 'miniatura']
  },
  {
    id: 'mesa-cadeiras-barbie',
    name: 'Mesa Jantar Boneca Barbie + 4 Cadeiras Pink',
    description: `${HEADER_DESC}Conjunto Sala de Jantar Crystal Doll. 1 Mesa e 4 Cadeiras.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mesa_barbie/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1400,
    keywords: ['barbie', 'móveis', 'boneca']
  },
  {
    id: 'yamaha-clavinova-cvp',
    name: 'Piano Digital Yamaha Clavinova CVP Profissional',
    description: `${HEADER_DESC}Piano Digital Yamaha Clavinova (Linha CVP). Teclas Pesadas.`,
    price: 8900.00,
    category: 'Instrumentos Musicais',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1500,
    keywords: ['piano', 'yamaha', 'teclado']
  },
  {
    id: 'pogobol-barbie-classico',
    name: 'Pogobol Estrela Barbie Original Vintage Anos 90',
    description: `${HEADER_DESC}Clássico Pogobol da Estrela - Edição Barbie. Original dos anos 90.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbie_pogobol/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1600,
    keywords: ['pogobol', 'estrela', 'vintage']
  },
  {
    id: 'lote-lol-surprise-completo',
    name: 'Lote 5 Bonecas LOL Surprise Originais',
    description: `${HEADER_DESC}Lote de desapego LOL Surprise! 5 Bonecas originais + acessórios.`,
    price: 85.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_lol/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1700,
    keywords: ['lol', 'boneca', 'lote']
  },
  {
    id: 'bandai-dx-dodekabutak-vintage',
    name: 'Boneco Bandai Kabutack 1997 Raro',
    description: `${HEADER_DESC}Raridade! Robô DX Dodekabutak Bandai Japan (1997). Besouro/Robô.`,
    price: 65.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/robo_kabutak/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1800,
    keywords: ['bandai', 'kabutack', 'tokusatsu']
  },
  {
    id: 'cavalo-madeira-balanco',
    name: 'Cavalinho de Balanço Madeira Maciça',
    description: `${HEADER_DESC}Cavalinho de Balanço Tradicional. Feito em Madeira de Lei Maciça.`,
    price: 75.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/cavalo_madeira/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1900,
    keywords: ['cavalinho', 'madeira', 'balanço']
  },
  {
    id: 'stacie-suco-playset',
    name: 'Playset Barbie Stacie Barraca de Suco',
    description: `${HEADER_DESC}Playset Original Barbie Stacie "Barraca de Sucos". Completo Mattel.`,
    price: 65.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/stacie_suco/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2000,
    keywords: ['barbie', 'playset', 'boneca']
  },
  {
    id: 'gaiola-calopsita',
    name: 'Gaiola Chalé Grande Branca p/ Calopsita',
    description: `${HEADER_DESC}Gaiola Modelo Chalé Jardim. Espaçosa, ideal para Calopsitas.`,
    price: 75.00,
    category: 'Pets',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/gaiola_calopsita/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2100,
    keywords: ['gaiola', 'calopsita', 'pássaro']
  },
  {
    id: 'fogao-venax',
    name: 'Fogão Cooktop Portátil Venax 4 Bocas Inox',
    description: `${HEADER_DESC}Fogão de Mesa Venax 4 Bocas Inox. Funcionando perfeitamente.`,
    price: 189.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/eletro/fogareiro_venax/01.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2300,
    keywords: ['fogão', 'cooktop', 'venax']
  },
  {
    id: 'batgirl-jato',
    name: 'Boneca Batgirl + Jato Mattel Original',
    description: `${HEADER_DESC}Kit DC Super Hero Girls Mattel. Boneca Articulada + Nave Bat-Jato.`,
    price: 50.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/batgirl_jato/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2500,
    keywords: ['batgirl', 'dc', 'mattel']
  },
  {
    id: 'lote-ferramentas-massinha',
    name: 'Lote Acessórios Massinha Play-Doh',
    description: `${HEADER_DESC}Saco cheio de ferramentas para massinha! Cortadores e moldes.`,
    price: 40.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_massinha/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2600,
    keywords: ['massinha', 'play-doh', 'moldes']
  },
  {
    id: 'lote-polly-pocket',
    name: 'Lote Polly Pocket 4 Bonecas + Closet',
    description: `${HEADER_DESC}Kit Polly Pocket Fashion. 4 Bonecas + Closet + Roupas.`,
    price: 60.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_polly/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2700,
    keywords: ['polly', 'lote', 'boneca']
  },
  {
    id: 'panelinhas-metal',
    name: 'Kit Panelinhas Brinquedo Metal Inox Realista',
    description: `${HEADER_DESC}Kit de Cozinha Infantil Luxo. Feitas em METAL tipo Inox.`,
    price: 49.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/panelinhas_metal/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2800,
    keywords: ['cozinha', 'panelinhas', 'metal']
  },
  {
    id: 'barbie-salao-pia',
    name: 'Pia Lavatório Salão Barbie Glamour',
    description: `${HEADER_DESC}Acessório para Casa da Barbie. Cuba com glitter e armário.`,
    price: 25.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbiesalao/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2900,
    keywords: ['barbie', 'móveis', 'salão']
  },
  {
    id: 'army-men-toy-story',
    name: 'Soldadinhos Army Men Toy Story Disney Pixar',
    description: `${HEADER_DESC}O pelotão do Toy Story! Soldadinhos ORIGINAIS Disney/Pixar.`,
    price: 49.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/armymen/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3000,
    keywords: ['toy story', 'disney', 'pixar']
  },
  {
    id: 'baby-alive-festa-massas',
    name: 'Boneca Baby Alive Festa das Massas - Completa',
    description: `${HEADER_DESC}Baby Alive Interativa (Come e Faz Caquinha). Funcionando perfeitamente.`,
    price: 120.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/babyalive/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3100,
    keywords: ['baby alive', 'hasbro', 'boneca']
  }
];

export const WHATSAPP_NUMBER = "5543991223034";
export const NEIGHBORHOOD = "San Fernando";
export const FB_MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/100001551016902/";
