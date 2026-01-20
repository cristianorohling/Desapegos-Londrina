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

const IMG_BASE_URL = 'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos';

export const INITIAL_PRODUCTS: Product[] = [
  // --- ITENS DISPONÍVEIS ---
  {
    id: 'escort-xr3-carro-comando',
    name: 'Escort XR3 Carro Comando Polícia - Glasslite Anos 80 Antigo',
    description: `${HEADER_DESC}Clássico carrinho Escort XR3 Carro Comando, fabricação Glasslite anos 80. Item vintage de colecionador, perfeito para quem busca brinquedo antigo, decoração retrô ou peça para restauro.

🏎️ Detalhes:
- Fabricante: Glasslite, Brasil.
- Modelo: Ford Escort XR3, versão Polícia.
- Material: plástico rígido.
- Mecanismo: fricção funcionando.

🔍 Conservação:
- Estrutura íntegra, sem quebras aparentes.
- Giroflex original presente.
- Amarelamento natural do plástico, pequenos desgastes na pintura e adesivos de época.
- Vendido no estado em que se encontra.`,
    price: 89.00,
    category: 'Brinquedos',
    images: [
      `${IMG_BASE_URL}/brinquedos/carro_comando/01.png`,
      `${IMG_BASE_URL}/brinquedos/carro_comando/02.png`,
      `${IMG_BASE_URL}/brinquedos/carro_comando/03.png`,
      `${IMG_BASE_URL}/brinquedos/carro_comando/04.png`
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 150000,
    keywords: ['glasslite', 'escort', 'policia', 'antigo', 'brinquedo', 'vintage']
  },
  {
    id: 'jazz-bootleg-pontiac',
    name: 'Robô Transformável Estilo Transformers Jazz (Filme) - Pontiac Solstice Prata',
    description: `${HEADER_DESC}AVISO: NÃO É ORIGINAL! Trata-se de um bootleg. Boneco transformável inspirado no personagem Jazz do filme Transformers 2007.`,
    price: 35.00,
    category: 'Brinquedos',
    images: [
      `${IMG_BASE_URL}/brinquedos/jazz_bootleg/00.png`,
      `${IMG_BASE_URL}/brinquedos/jazz_bootleg/01.png`,
      `${IMG_BASE_URL}/brinquedos/jazz_bootleg/02.png`,
      `${IMG_BASE_URL}/brinquedos/jazz_bootleg/03.jpg`
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 140000,
    keywords: ['transformers', 'jazz', 'bootleg', 'robô']
  },
  {
    id: 'escoteiros-mirins-colecao-rara',
    name: 'Coleção Biblioteca do Escoteiro Mirim Completa (20 Vols) + Estante Original Rara',
    description: `${HEADER_DESC}Coleção completa da Biblioteca do Escoteiro Mirim, Editora Nova Cultural, edição 1985/86. Inclui 20 volumes originais e estante de exposição rara.`,
    price: 899.00,
    category: 'Livros',
    images: [`${IMG_BASE_URL}/livros/escoteiros_mirins/01.png`,
             `${IMG_BASE_URL}/livros/escoteiros_mirins/02.png`,
             `${IMG_BASE_URL}/livros/escoteiros_mirins/03.png`,
             `${IMG_BASE_URL}/livros/escoteiros_mirins/04.png`,
             `${IMG_BASE_URL}/livros/escoteiros_mirins/05.png`
            ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 20000,
    keywords: ['disney', 'coleção']
  },
  {
    id: 'chaveiro-espada-garen-lol',
    name: 'Chaveiro Espada do Garen (League of Legends) - 12cm Metal',
    description: `${HEADER_DESC}Chaveiro colecionável em metal inspirado na espada do campeão Garen, do jogo League of Legends.`,
    price: 30.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/pingente_lol/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() + 25000,
    keywords: ['lol', 'garen', 'chaveiro']
  },
  {
    id: 'miniatura-guarana-tai-vintage',
    name: 'Miniatura Guaraná Taí Coca-Cola Anos 80 - Coleção Rara',
    description: `${HEADER_DESC}Miniatura colecionável do Guaraná Taí, marca clássica dos anos 80.`,
    price: 50.00,
    category: 'Decoração',
    images: [`${IMG_BASE_URL}/deco/miniatura_tai/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 12000,
    keywords: ['taí', 'coca-cola', 'vintage']
  },
  {
    id: 'diaclone-police-countach-1982',
    name: 'Raro Takara Diaclone Police Countach 1982 (Japan)',
    description: `${HEADER_DESC}Figura original Takara Diaclone Car Robot No. 3 Police Countach, 1982, Japão.`,
    price: 300.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/diaclone_branco/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 10000,
    keywords: ['diaclone', 'takara']
  },
  {
    id: 'tv-philco-ford-vintage-amarela',
    name: 'TV Vintage Philco-Ford Amarela Space Age',
    description: `${HEADER_DESC}TV portátil vintage Philco-Ford, design Space Age, cor amarela, década de 1970.`,
    price: 300.00,
    category: 'Info Eletrônicos',
    images: [`${IMG_BASE_URL}/informatica/tv_philco_ford/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now(),
    keywords: ['tv', 'vintage', 'philco']
  },
  {
    id: 'tait-speaker-tmaa10',
    name: 'Alto-Falante Tait Padrão Industrial p/ Rádio PX',
    description: `${HEADER_DESC}Alto-falante remoto industrial original Tait Communications.`,
    price: 170.00,
    category: 'Info Eletrônicos',
    images: [`${IMG_BASE_URL}/informatica/speaker_tait/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 200,
    keywords: ['rádio', 'px', 'speaker']
  },
  {
    id: 'comando-arcade-sanwa-vermelho',
    name: 'Comando Arcade Sanwa Vermelho - Fliperama',
    description: `${HEADER_DESC}Comando joystick arcade tipo Sanwa JLF, cor vermelha, novo.`,
    price: 60.00,
    category: 'Info Eletrônicos',
    images: [`${IMG_BASE_URL}/informatica/comando_sanwa/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 400,
    keywords: ['arcade', 'sanwa']
  },
  {
    id: 'mimo-convert-locomotiva',
    name: 'Robô GoBots Loco Mimo Anos 80',
    description: `${HEADER_DESC}Robô GoBots Loco, versão da Mimo Convert nos anos 80.`,
    price: 100.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/mimo_convert/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 500,
    keywords: ['gobots', 'mimo']
  },
  {
    id: 'patins-inline-ajustavel',
    name: 'Patins In Line Ajustável 34-36 Preto',
    description: `${HEADER_DESC}Patins inline ajustáveis, tamanho 34 a 36, na cor preta.`,
    price: 150.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/patins_inline/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 600,
    keywords: ['patins', 'esporte']
  },
  {
    id: 'fogao-lenha-fundimig-f090',
    name: 'Fogão a Lenha Antigo Fundimig F-090 Ferro',
    description: `${HEADER_DESC}Fogão a lenha antigo Fundimig F-090, construção em ferro fundido.`,
    price: 1399.00,
    category: 'Cozinha',
    images: [`${IMG_BASE_URL}/cozinha/fogao_fundimig/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 900,
    keywords: ['fogão', 'ferro']
  },
  {
    id: 'fogao-industrial-dako-couracado',
    name: 'Fogão Industrial Dako Couraçado Ferro Puro',
    description: `${HEADER_DESC}Fogão industrial clássico Dako Couraçado, fabricado em ferro puro.`,
    price: 1299.00,
    category: 'Cozinha',
    images: [`${IMG_BASE_URL}/cozinha/dako_couracado/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000,
    keywords: ['fogão', 'industrial']
  },
  {
    id: 'suporte-doces-cupcakes_floral',
    name: 'Suporte Doces Cupcakes 2 Andares',
    description: `${HEADER_DESC}Suporte para doces e cupcakes de 2 andares com estilo provençal.`,
    price: 20.00,
    category: 'Cozinha',
    images: [`${IMG_BASE_URL}/cozinha/suporte_frutas/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1100,
    keywords: ['festa', 'boleira']
  },
  {
    id: 'mini-aquaterrario-decorado-betta',
    name: 'Mini Aquário Terrário Decorado Betta',
    description: `${HEADER_DESC}Mini aquaterrário decorado pronto para uso, 19x13x13 cm.`,
    price: 40.00,
    category: 'Pets',
    images: [`${IMG_BASE_URL}/pets/aquario_beta/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1200,
    keywords: ['aquário', 'peixe']
  },
  {
    id: 'kit-cozinha-barbie-vintage',
    name: 'Lote Miniaturas Cozinha Barbie Vintage Anos 80',
    description: `${HEADER_DESC}Lote de miniaturas originais da Barbie Estrela, anos 80.`,
    price: 19.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/kit_minicozinha/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1300,
    keywords: ['barbie', 'vintage']
  },
  {
    id: 'mesa-cadeiras-barbie',
    name: 'Mesa Jantar Boneca Barbie + 4 Cadeiras Pink',
    description: `${HEADER_DESC}Conjunto de mesa de jantar para boneca Barbie, com 4 cadeiras.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/mesa_barbie/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1400,
    keywords: ['barbie', 'móveis']
  },
  {
    id: 'pogobol-barbie-classico',
    name: 'Pogobol Estrela Barbie Original Vintage Anos 90',
    description: `${HEADER_DESC}Pogobol clássico da Estrela, edição Barbie, anos 90.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/barbie_pogobol/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1600,
    keywords: ['pogobol', 'vintage']
  },
  {
    id: 'lote-lol-surprise-completo',
    name: 'Lote 5 Bonecas LOL Surprise Originais',
    description: `${HEADER_DESC}Lote com 5 bonecas LOL Surprise originais com acessórios.`,
    price: 85.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/lote_lol/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1700,
    keywords: ['lol', 'boneca']
  },
  {
    id: 'bandai-dx-dodekabutak-vintage',
    name: 'Boneco Bandai Kabutack 1997 Raro',
    description: `${HEADER_DESC}Robô DX Dodekabutak, série Kabutack, Bandai Japão, 1997.`,
    price: 65.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/robo_kabutak/01.png`],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 1800,
    keywords: ['bandai', 'kabutack']
  },
  {
    id: 'cavalo-madeira-balanco',
    name: 'Cavalinho de Balanço Madeira Maciça',
    description: `${HEADER_DESC}Cavalinho de balanço tradicional em madeira maciça.`,
    price: 80.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/cavalo_madeira/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1900,
    keywords: ['madeira', 'cavalinho']
  },
  {
    id: 'stacie-suco-playset',
    name: 'Playset Barbie Stacie Barraca de Suco',
    description: `${HEADER_DESC}Playset original Mattel da linha Barbie Stacie.`,
    price: 65.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/stacie_suco/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2000,
    keywords: ['barbie', 'playset']
  },
  {
    id: 'gaiola-calopsita',
    name: 'Gaiola Chalé Grande Branca p/ Calopsita',
    description: `${HEADER_DESC}Gaiola espaçosa, modelo chalé, cor branca.`,
    price: 80.00,
    category: 'Pets',
    images: [`${IMG_BASE_URL}/pets/gaiola_calopsita/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2100,
    keywords: ['gaiola', 'calopsita']
  },
  {
    id: 'fogao-venax',
    name: 'Fogão Cooktop Portátil Venax 4 Bocas Inox',
    description: `${HEADER_DESC}Fogão cooktop portátil Venax, 4 bocas, inox.`,
    price: 250.00,
    category: 'Cozinha',
    images: [`${IMG_BASE_URL}/eletro/fogareiro_venax/01.jpg`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2300,
    keywords: ['fogão', 'cooktop']
  },
  {
    id: 'batgirl-jato',
    name: 'Boneca Batgirl + Jato Mattel Original',
    description: `${HEADER_DESC}Boneca articulada Batgirl com nave jato original Mattel.`,
    price: 80.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/batgirl_jato/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2500,
    keywords: ['batgirl', 'mattel']
  },
  {
    id: 'lote-ferramentas-massinha',
    name: 'Lote Acessórios Massinha Play-Doh',
    description: `${HEADER_DESC}Lote de acessórios para massinha Play-Doh.`,
    price: 40.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/kit_massinha/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2600,
    keywords: ['massinha', 'play-doh']
  },
  {
    id: 'lote-polly-pocket',
    name: 'Lote Polly Pocket 4 Bonecas + Closet',
    description: `${HEADER_DESC}Lote Polly Pocket com 4 bonecas e closet.`,
    price: 60.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/lote_polly/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2700,
    keywords: ['polly', 'boneca']
  },
  {
    id: 'panelinhas-metal',
    name: 'Kit Panelinhas Brinquedo Metal Inox Realista',
    description: `${HEADER_DESC}Kit de panelinhas em metal inox, linha infantil realista.`,
    price: 49.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/panelinhas_metal/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2800,
    keywords: ['cozinha', 'panelinhas']
  },
  {
    id: 'barbie-salao-pia',
    name: 'Pia Lavatório Salão Barbie Glamour',
    description: `${HEADER_DESC}Acessório de pia/lavatório para casa da Barbie.`,
    price: 25.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/barbiesalao/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2900,
    keywords: ['barbie', 'móveis']
  },
  {
    id: 'army-men-toy-story',
    name: 'Soldadinhos Army Men Toy Story Disney Pixar',
    description: `${HEADER_DESC}Conjunto de soldadinhos Army Men originais Disney/Pixar.`,
    price: 49.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/armymen/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3000,
    keywords: ['toy story', 'soldadinho']
  },
  {
    id: 'baby-alive-festa-massas',
    name: 'Boneca Baby Alive Festa das Massas - Completa',
    description: `${HEADER_DESC}Boneca interativa Baby Alive Festa das Massas completa.`,
    price: 150.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/babyalive/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3100,
    keywords: ['baby alive', 'boneca']
  },
  {
    id: 'mjolnir-thor-plastico',
    name: 'Martelo do Thor (Mjolnir) - Plástico Leve para Fantasia',
    description: `${HEADER_DESC}Martelo do Thor em plástico leve para fantasia.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/martelo_thor/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now(),
    keywords: ['thor', 'marvel']
  },
  {
    id: 'repetidor-wifi-tplink',
    name: 'Repetidor de Sinal Wi-Fi TP-Link',
    description: `${HEADER_DESC}Repetidor TP-Link para ampliar sinal Wi-Fi.`,
    price: 50.00,
    category: 'Info Eletrônicos',
    images: [`${IMG_BASE_URL}/informatica/repetidor_tp-link/01.jpg`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 100,
    keywords: ['wifi', 'tp-link']
  },
  {
    id: 'chaleira-smartfy-inox',
    name: 'Jarra Chaleira Elétrica Inox 1.8L 110v',
    description: 'Chaleira Elétrica Inox Smartfy, nova na caixa!',
    price: 50.00,
    category: 'Cozinha',
    images: [`${IMG_BASE_URL}/cozinha/chaleira_smartfy/01.webp`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 11000,
    keywords: ['chaleira','jarra','nova']
  },

  // --- VENDIDOS (SOLD) ---
  {
    id: 'boneco-dengue-xuxa',
    name: 'Boneco Dengue (Xou da Xuxa) - Colecionável Original Anos 80',
    description: '',
    price: 80.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/dengue_xuxa/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 6000,
    keywords: ['xuxa']
  },
  {
    id: 'bumblebee-estrela-g1-restauro',
    name: 'Transformers G1 Bumblebee Fusca - Estrela Anos 80',
    description: '',
    price: 80.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/bumblebee_estrela/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now(),
    keywords: ['transformers', 'estrela']
  },
  {
    id: 'diaclone-hilux-azul',
    name: 'Diaclone Hilux 4WD Azul, Takara (1983)',
    description: '',
    price: 260.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/diaclone_azul/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 5000,
    keywords: ['diaclone']
  },
  {
    id: 'guardioes-galaxia-bootleg',
    name: 'Bonecos Bootleg Guardiões da Galáxia',
    description: '',
    price: 80.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/guardioes_galaxia/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 8000,
    keywords: ['guardiões', 'marvel']
  },
  {
    id: 'kit-mario-bros-mcdonalds',
    name: 'Kit Figuras Super Mario Bros - McDonald\'s',
    description: '',
    price: 50.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/kit_mario/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 7000,
    keywords: ['mario']
  },
  {
    id: 'soldados-rpg-chumbo',
    name: 'Soldados RPG em Chumbo',
    description: '',
    price: 50.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/guerreiros_rpg/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 9000,
    keywords: ['rpg', 'chumbo']
  },
  {
    id: 'chapeu-woody',
    name: 'Chapéu do Woody',
    description: '',
    price: 10.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/chapeu_woody/01.jpg`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 9500,
    keywords: ['woody', 'toy story']
  },
  {
    id: 'guitarra-bright-ps2',
    name: 'Guitarra Guitar Hero Bright - PS2 / PS3 / Wii',
    description: '',
    price: 249.00,
    category: 'Info Eletrônicos',
    images: [`${IMG_BASE_URL}/informatica/guitarra_bright/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 10000,
    keywords: ['guitarra', 'games']
  },
  {
    id: 'termo-rey-gravatinha',
    name: 'Relíquia Termo-Rey "Gravatinha" - Par de Travessas Vintage',
    description: '',
    price: 180.00,
    category: 'Cozinha',
    images: [`${IMG_BASE_URL}/cozinha/termo_rey/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 11000,
    keywords: ['termo-rey', 'vintage']
  },
  {
    id: 'volante-multilaser-3-em-1',
    name: 'Volante e Pedal Multilaser 3 em 1 (PS2, PS3 e PC)',
    description: '',
    price: 100.00,
    category: 'Info Eletrônicos',
    images: [`${IMG_BASE_URL}/informatica/volante_multi/01.jpg`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 8000,
    keywords: ['volante']
  },
  {
    id: 'coruja-madeira-entalhada',
    name: 'Coruja Decorativa Entalhada em Madeira Maciça',
    description: '',
    price: 50.00,
    category: 'Decoração',
    images: [`${IMG_BASE_URL}/deco/coruja_entalhada/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 5000,
    keywords: ['artesanato', 'madeira']
  }
];

export const WHATSAPP_NUMBER = "5543991223034";
export const NEIGHBORHOOD = "San Fernando";
export const FB_MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/100001551016902/";
export const INSTAGRAM_URL = "https://www.instagram.com/novidades.e.desapegos/";