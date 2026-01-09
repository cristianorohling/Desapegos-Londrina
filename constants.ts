import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  "Brinquedos",
  "Decoração",
  "Pets",
  "Cozinha",
  "Informática",
  "Instrumentos Musicais"
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'lote-mario-bros-mcdonalds',
    name: "Lote Bonecos Super Mario Bros: Bowser, Yoshi, Luigi, Peach e McDonald's",
    description: `Vendo lote misto de brinquedos Super Mario (McDonald's e genéricos)! O kit conta com figuras marcantes como Mario, Luigi, Princesa Peach, Bowser, Yoshi, Toad e Toadette, além de acessórios como cogumelos e blocos. Tudo em bom estado por apenas 80 reais! Aproveite!`,
    price: 80.00,
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
    id: 'casinha-passarinho-madeira',
    name: 'Casinha de Passarinho Decorativa em Madeira Maciça - Estilo Rústico',
    description: `Casinha de passarinho artesanal feita em madeira maciça tratada e envernizada com verniz escuro. Peça de estilo rústico, ideal para decoração de jardins, varandas, áreas gourmet ou ambientes internos.`,
    price: 50.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/casinha_envernizada/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/casinha_envernizada/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 400,
    keywords: ['passarinho', 'jardim', 'madeira', 'rústico', 'artesanato', 'casa', 'decoração de jardim']
  },
  {
    id: 'coruja-entalhada-madeira',
    name: 'Coruja Entalhada em Madeira Maciça - Decoração Rústica de Parede',
    description: `Escultura de coruja entalhada manualmente em madeira maciça. Peça única de artesanato para decoração rústica de parede. Acabamento envernizado e em excelente estado de conservação.`,
    price: 50.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/coruja_entalhada/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 300,
    keywords: ['coruja', 'madeira', 'entalhe', 'escultura', 'rústico', 'parede', 'artesanato', 'decoração']
  },
  {
    id: 'volante-multilaser-3-em-1',
    name: 'Volante e Pedal Multilaser 3 em 1 (PS2, PS3 e PC)',
    description: `Kit Volante e Pedal da marca Multilaser, modelo 3 em 1. Compatível com PlayStation 2, PlayStation 3 e Computador (PC). Em bom estado de conservação e totalmente funcional (botões, pedais e respostas ok).`,
    price: 150.00,
    category: 'Informática',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/volante_multi/01.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/volante_multi/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 200,
    keywords: ['volante', 'pedal', 'multilaser', 'ps2', 'ps3', 'pc', 'gamer', 'jogos de corrida', 'simulador']
  },
  {
    id: 'fogao-lenha-fundimig-f090',
    name: 'Fogão a Lenha Antigo FUNDIMIG F-090 (Nº 0) - Relíquia em Ferro Fundido',
    description: `Fogão a lenha antigo da marca Fundimig, modelo F-090 (Número 0). Fabricado inteiramente em ferro fundido. Peça robusta, ideal para projetos de restauração ou decoração rústica. Dimensões: 71cm (A) x 51cm (P) x 75cm (L). Apresenta ferrugem superficial e faltam algumas peças.`,
    price: 1399.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/fogao_fundimig/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/fogao_fundimig/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 100,
    keywords: ['fogão a lenha', 'ferro fundido', 'antigo', 'relíquia', 'restauração', 'rústico', 'fundimig', 'decoração fazenda']
  },
  {
    id: 'fogao-industrial-dako-couracado',
    name: 'Fogão Industrial Dako Couraçado Clássico',
    description: `Fogão industrial clássico Dako Couraçado. Estrutura robusta em ferro puro de alta durabilidade. Possui forno gigante funcional e bocas em pleno funcionamento. Item vintage com marcas de uso. Acompanha mangueira e registro de gás.`,
    price: 1299.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/03.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/04.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/05.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/06.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/dako_couracado/07.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now(),
    keywords: ['fogão industrial', 'dako', 'couraçado', 'ferro', 'forno grande', 'profissional', 'cozinha', 'vintage', 'robusto']
  },
  {
    id: 'suporte-doces-cupcakes_floral',
    name: 'Suporte para doces e Cucpakes 2 Andares - Charme Floral',
    description: `Suporte de dois andares para doces, cupcakes ou salgados. Design com acabamento rendado e centro floral delicado. Feito em material plástico fácil de limpar e montar. Ideal para festas e mesa posta.`,
    price: 25.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos//cozinha/suporte_frutas/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 50,
    keywords: ['suporte doces', 'cupcakes', 'boleira', 'floral', 'provençal', 'festa', 'mesa posta', 'decoração', 'dois andares']
  },
  {
    id: 'termo-rey-gravatinha-par',
    name: 'Relíquia Termo-Rey "Gravatinha" - Par de Travessas Vintage',
    description: `Par de travessas vintage da marca Termo-Rey, na clássica estampa "Gravatinha" (padrão geométrico dos anos 60/70). O conjunto inclui 1 travessa oval e 1 tigela redonda em opalina branca resistente. Peças de coleção em bom estado.`,
    price: 180.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/termo_rey/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/termo_rey/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 100,
    keywords: ['termo-rey', 'gravatinha', 'vintage', 'antigo', 'travessa', 'tigela', 'opalina', 'anos 60', 'anos 70', 'coleção', 'retrô']
  },
  {
    id: 'mini-aquaterrario-decorado-betta',
    name: 'Mini Aquaterrário Decorado - Home Office & Pets',
    description: `Mini aquaterrário compacto (medidas aprox. 19x13x13cm). Já vem decorado com plantas e substrato fixos e possui plataforma elevada (área seca). Acompanha tampa de vidro. Ideal para peixe Betta ou pequena tartaruga.`,
    price: 45.00,
    category: 'Pets',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/aquario_beta/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 200,
    keywords: ['aquário', 'terrário', 'betta', 'tartaruga', 'peixe', 'decorado', 'pequeno', 'pets', 'home office']
  },
  {
    id: 'boneco-dengue-vintage-xuxa',
    name: 'Boneco Dengue (Xou da Xuxa) - Colecionável Original Anos 80',
    description: `Boneco original do personagem Dengue (Xou da Xuxa), anos 80. Pintura e articulações bem preservadas. Não possui as antenas e asas originais. Peça para colecionadores ou restauro.`,
    price: 80.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/dengue_xuxa/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/dengue_xuxa/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/dengue_xuxa/03.jpg'
    ],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() - 300,
    keywords: ['boneco', 'dengue', 'xuxa', 'xou da xuxa', 'anos 80', 'vintage', 'colecionável', 'brinquedo antigo', 'raridade']
  },
  {
    id: 'kit-cozinha-barbie-vintage',
    name: 'Super Lote Cozinha Vintage Barbie - Itens de Coleção',
    description: `Lote de miniaturas vintage para cozinha da Barbie. Inclui embalagens clássicas (Leite, Suco Elefanta), batedeira e máquina de costura em miniatura. Itens de coleção dos anos 80/90 para dioramas.`,
    price: 19.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_minicozinha/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_minicozinha/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 400,
    keywords: ['barbie', 'cozinha', 'miniatura', 'vintage', 'anos 80', 'anos 90', 'coleção', 'diorama', 'acessórios boneca', 'suco elefanta']
  },
  {
    id: 'mesa-cadeiras-barbie',
    name: 'Conjunto Jantar Crystal Doll - Mesa e 4 Cadeiras Pink',
    description: `Conjunto de sala de jantar para bonecas tamanho Barbie. Inclui 1 mesa em estilo cristal com glitter e 4 cadeiras na cor pink. Em estado de novo.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mesa_barbie/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 500,
    keywords: ['mesa boneca', 'cadeiras boneca', 'barbie', 'crystal', 'pink', 'rosa', 'móveis boneca', 'brinquedo', 'sala de jantar']
  },
  {
    id: 'yamaha-clavinova-cvp',
    name: 'Piano Digital Yamaha Clavinova CVP - Som Profissional',
    description: `Piano digital profissional Yamaha Clavinova linha CVP. Teclas pesadas e sensitivas (GH), som de alta fidelidade. O instrumento funciona perfeitamente, mas o display está sem a luz de fundo (backlight queimado).`,
    price: 9000.00,
    category: 'Instrumentos Musicais',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/03.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/04.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 600,
    keywords: ['piano digital', 'yamaha', 'clavinova', 'cvp', 'teclado', 'instrumento musical', 'profissional', 'piano elétrico', 'teclas pesadas']
  },
  {
    id: 'pogobol-barbie-classico',
    name: 'Pogobol Barbie Original - Diversão Ativa Retrô',
    description: `Pogobol original da Estrela, modelo temático da Barbie (rosa e roxo). Brinquedo clássico, usado, com marcas de uso no plástico, mas funcional e com boa pressão na bola.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbie_pogobol/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbie_pogobol/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbie_pogobol/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 700,
    keywords: ['pogobol', 'barbie', 'estrela', 'brinquedo antigo', 'anos 90', 'vintage', 'pula pula', 'retrô']
  },
  {
    id: 'lote-lol-surprise-completo',
    name: 'Super Lote L.O.L. Surprise! - 5 Bonecas + Acessórios',
    description: `Lote com 5 bonecas originais L.O.L. Surprise!, incluindo modelos com glitter. Acompanha diversas roupas, sapatos, acessórios e a bola original para guardar.`,
    price: 85.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_lol/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_lol/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_lol/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000,
    keywords: ['lol surprise', 'bonecas lol', 'lote bonecas', 'coleção', 'brinquedo menina', 'acessórios lol', 'glitter']
  },
  {
    id: 'bandai-dx-dodekabutak-vintage',
    name: 'Robô DX Dodekabutak Bandai - Original Japonês Kabutack',
    description: `Robô DX Dodekabutak original Bandai Japan, da série Kabutack (1997). Realiza transformação completa de modo besouro para modo robô. Peça rara e em excelente estado de conservação.`,
    price: 100.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/robo_kabutak/01.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/robo_kabutak/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2000,
    keywords: ['robô', 'bandai', 'kabutack', 'dodekabutak', 'tokusatsu', 'japonês', 'vintage', 'colecionável', 'transformável', 'anos 90']
  },
  {
    id: 'chapeu-woody-toy-story',
    name: 'Chapéu Woody Toy Story - Edição Caubói Autêntico',
    description: `Chapéu do personagem Woody (Toy Story) em feltro marrom com as costuras laterais características. Tamanho infantil. Em bom estado de conservação para fantasias.`,
    price: 8.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/chapeu_woody/01.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/chapeu_woody/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 3000,
    keywords: ['chapéu woody', 'toy story', 'fantasia', 'caubói', 'infantil', 'disney', 'pixar', 'cosplay infantil']
  },
  {
    id: 'cavalo-madeira-balanco',
    name: 'Cavalinho de Balanço Retrô - Madeira Maciça Reforçada',
    description: `Cavalinho de balanço estilo retrô feito em madeira de lei maciça e reforçada. Brinquedo durável e seguro, também serve como peça de decoração para quartos infantis.`,
    price: 80.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/cavalo_madeira/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/cavalo_madeira/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/cavalo_madeira/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 4000,
    keywords: ['cavalinho', 'balanço', 'madeira maciça', 'brinquedo educativo', 'rústico', 'decoração infantil', 'retrô', 'vintage']
  },
  {
    id: 'stacie-suco-playset',
    name: 'Playset Barbie Stacie - Smoothie & Pet Friend',
    description: `Playset original Mattel da boneca Stacie (irmã da Barbie) with tema de barraca de sucos. Inclui a boneca, balcão, acessórios de smoothie e cachorrinho pet.`,
    price: 69.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/stacie_suco/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 5000,
    keywords: ['barbie', 'stacie', 'playset', 'boneca', 'suco', 'smoothie', 'cachorro', 'pet', 'brinquedo mattel']
  },
  {
    id: 'gaiola-calopsita',
    name: 'Gaiola Chalé Premium para Calopsitas e Pássaros Mansos',
    description: `Gaiola espaçosa modelo chalé branco, ideal para calopsitas e pássaros mansos. Possui bandeja removível para facilitar a limpeza, duas portas de acesso e poleiros.`,
    price: 80.00,
    category: 'Pets',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/gaiola_calopsita/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/gaiola_calopsita/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/gaiola_calopsita/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 6000,
    keywords: ['gaiola', 'calopsita', 'viveiro', 'pássaros', 'chalé', 'pets', 'aves', 'agapornis']
  },
  {
    id: 'globo-pera-luminaria',
    name: 'Globo Luminária Pera - Reposição 10cm',
    description: `Globo (cúpula) modelo Pera em plástico resistente (polietileno). Boca de 10cm. Peça de reposição para ventiladores de teto e lustres.`,
    price: 10.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/globo_pera/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/globo_pera/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 10000,
    keywords: ['globo', 'luminária', 'cúpula', 'ventilador de teto', 'bocal 10cm', 'reposição', 'iluminação', 'plástico']
  },
  {
    id: 'fogao-venax',
    name: 'Fogão de Mesa Venax 4 Bocas Inox - Luxo Portátil',
    description: `Fogão de mesa (cooktop portátil) Venax de 4 bocas. Mesa em aço inox, acendimento automático e painel traseiro. Ideal para cozinhas pequenas ou camping.`,
    price: 199.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/eletro/fogareiro_venax/01.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/eletro/fogareiro_venax/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/eletro/fogareiro_venax/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 15000,
    keywords: ['fogão de mesa', 'cooktop', 'fogareiro', 'venax', 'inox', 'portátil', '4 bocas', 'camping', 'cozinha pequena', 'acendimento automático']
  },
  {
    id: 'repetidor-tplink',
    name: 'Repetidor Wi-Fi TP-Link 300Mbps - Fim do Sinal Fraco',
    description: `Repetidor de sinal Wi-Fi TP-Link modelo TL-WA850RE. Velocidade de 300Mbps, bivolt, com configuração fácil via botão WPS. Melhora a cobertura da internet.`,
    price: 79.00,
    category: 'Informática',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/repetidor_tp-link/01.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 20000,
    keywords: ['repetidor wifi', 'tp-link', 'amplificador sinal', 'roteador', 'internet', 'wireless', 'wifi', 'informática']
  },
  {
    id: 'batgirl-jato',
    name: 'Batgirl DC Super Hero Girls + Bat-Jato - Mattel',
    description: `Conjunto DC Super Hero Girls original Mattel. Inclui boneca Batgirl articulada de 15cm e Bat-Jato com wheels funcionais. Item de colecionador em ótimo estado.`,
    price: 80.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/batgirl_jato/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/batgirl_jato/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 25000,
    keywords: ['batgirl', 'dc super hero girls', 'boneca heroína', 'bat-jato', 'veículo', 'mattel', 'dc comics', 'brinquedo', 'colecionável']
  },
  {
    id: 'lote-ferramentas-massinha',
    name: 'Mega Kit Acessórios Play-Doh - Fábrica de Diversão',
    description: `Grande lote de acessórios e ferramentas para brincar com massinha (tipo Play-Doh). Inclui diversas formas de corte, extrusoras e rolinhos. Não acompanha as massas.`,
    price: 45.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_massinha/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_massinha/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_massinha/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 30000,
    keywords: ['massinha', 'play-doh', 'ferramentas massinha', 'cortadores', 'moldes', 'rolinhos', 'brinquedo educativo', 'arte', 'criatividade']
  },
  {
    id: 'lote-polly-pocket',
    name: 'Lote Polly Pocket Fashion - 4 Bonecas + Closet Completo',
    description: `Lote Polly Pocket contendo 4 bonecas e um grande closet com variedade de roupas, sapatos, bolsas e acessórios para montar looks.`,
    price: 65.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_polly/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 50000,
    keywords: ['polly pocket', 'bonecas polly', 'lote', 'roupinhas polly', 'closet', 'fashion', 'moda', 'brinquedo menina', 'acessórios']
  },
  {
    id: 'panelinhas-metal',
    name: 'Kit MasterChef Kids - Panelinhas em Metal Inox Realistas',
    description: `Kit de panelinhas de brinquedo feitas em metal (estilo inox), realistas e duráveis. Inclui caçarola, frigideira, escorredor e utensílios em miniatura.`,
    price: 50.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/panelinhas_metal/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/panelinhas_metal/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/panelinhas_metal/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 100000,
    keywords: ['panelinhas', 'brinquedo cozinha', 'metal', 'inox', 'masterchef kids', 'realista', 'brincadeira de casinha', 'durável']
  },
  {
    id: 'barbie-salao-pia',
    name: 'Pia de Salão Barbie Glamour - Cuba com Glitter',
    description: `Lavatório/Pia de salão de beleza para Barbie. Possui cuba azul com glitter e armário roxo. Acessório original Mattel para casinha de bonecas.`,
    price: 29.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbiesalao/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbiesalao/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 500000,
    keywords: ['pia barbie', 'salão de beleza barbie', 'lavatório boneca', 'móveis barbie', 'glitter', 'acessório boneca', 'mattel']
  },
  {
    id: 'army-men-toy-story',
    name: 'Exército Original Disney Pixar Toy Story - Pelotão de Elite',
    description: `Lote de soldadinhos verdes "Army Men" originais Disney Pixar do filme Toy Story. Peças gravadas com a licença, em diversas poses de combate.`,
    price: 49.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/armymen/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/armymen/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/armymen/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000000,
    keywords: ['soldadinhos', 'army men', 'toy story', 'soldado verde', 'disney pixar', 'colecionável', 'miniatura', 'clássico']
  },
  {
    id: 'baby-alive-festa-massas',
    name: 'Baby Alive Festa das Massas Original Hasbro - Interativa',
    description: `Boneca interativa Baby Alive Festa das Massas (Hasbro). Ela "come" a massinha de macarrão e faz caquinha na fralda. Acompanha acessórios originais.`,
    price: 150.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/babyalive/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/babyalive/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/babyalive/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2000000,
    keywords: ['baby alive', 'boneca que come', 'festa das massas', 'hasbro', 'boneca interativa', 'brinquedo menina', 'massinha']
  }
];

export const WHATSAPP_NUMBER = "5543991167333";
export const NEIGHBORHOOD = "San Fernando";