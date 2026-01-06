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
    id: 'casinha-passarinho-madeira',
    name: 'Casinha de Passarinho Decorativa em Madeira Maciça - Estilo Rústico',
    description: `Dê um toque de charme e natureza à sua decoração com esta linda casinha de passarinho artesanal.\n\nConfeccionada em madeira resistente e com acabamento em verniz escuro, esta peça traz o estilo rústico clássico que combina perfeitamente com jardins, varandas, áreas gourmet ou até mesmo para compor cenários e decorações internas.\n\n✨ Características:\n- Material: Madeira maciça tratada e envernizada (maior durabilidade).\n- Design: Rústico e minimalista.\n- Acabamento: Verniz de alto brilho que realça os veios da madeira.\n- Uso: Ideal para decoração de ambientes, jardins ou colecionadores.`,
    price: 35.00,
    category: 'Decoração',
    images: [
      'https://desapegos.puter.site/deco/casinha_envernizada/01.png',
      'https://desapegos.puter.site/deco/casinha_envernizada/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 400
  },
  {
    id: 'coruja-entalhada-madeira',
    name: 'Coruja Entalhada em Madeira Maciça - Decoração Rústica de Parede',
    description: `Traga sabedoria e um toque rústico para o seu ambiente com esta belíssima escultura de coruja, entalhada à mão em madeira maciça.\n\n✨ Destaques:\n- Artesanato Autêntico: Entalhe manual com riqueza de detalhes nas texturas.\n- Material Nobre: Feita em madeira resistente e durável.\n- Versatilidade: Combina com decorações rústicas, vintage, boho ou campestres.\n- Pronta para Pendurar: Ideal para destacar paredes vazias ou compor com outros quadros.\n\n🦉 Ficha Técnica:\n- Material: Madeira maciça.\n- Acabamento: Envernizado (protege e dá brilho).\n- Estado: Excelente conservação.`,
    price: 50.00,
    category: 'Decoração',
    images: [
      'https://desapegos.puter.site/deco/coruja_entalhada/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 300
  },
  {
    id: 'volante-multilaser-3-em-1',
    name: 'Volante e Pedal Multilaser 3 em 1 (PS2, PS3 e PC)',
    description: `Eleve sua experiência em jogos de corrida! Vendo Kit Volante e Pedal da marca Multilaser, compatível com PlayStation 2, PlayStation 3 e PC. Ideal para simuladores e diversão garantida.\n\n🎮 Compatibilidade: PS2, PS3 e Computador (PC).\n✨ Estado: Excelente estado de conservação, sem marcas de uso significativas.\n🏎️ Funcionamento: Totalmente funcional, todos os botões, pedais e respostas do volante estão 100%.`,
    price: 150.00,
    category: 'Informática',
    images: [
      'https://desapegos.puter.site/informatica/volante_multi/01.png',
      'https://desapegos.puter.site/informatica/volante_multi/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 200
  },
  {
    id: 'fogao-lenha-fundimig-f090',
    name: 'Fogão a Lenha Antigo FUNDIMIG F-090 (Nº 0) - Relíquia em Ferro Fundido',
    description: `Uma peça clássica e robusta, inteiramente fabricada em ferro fundido de alta qualidade. Ideal para quem busca um projeto de restauração, decoração rústica ou precisa de peças de reposição para outro fogão da mesma época.\n\n🔥 Características:\n- Marca: Fundimig\n- Material: Ferro fundido com detalhes em relevo (design clássico e elegante).\n- Dimensões: 71cm (altura com pés) x 51cm (profundidade) x 75cm (largura).\n\n🛠️ Estado: A estrutura principal está íntegra e o ferro é extremamente durável. A peça apresenta ferrugem superficial natural do tempo, que pode ser tratada com lixamento e pintura de alta temperatura. Faltam algumas peças.`,
    price: 1400.00,
    category: 'Cozinha',
    images: [
      'https://desapegos.puter.site/cozinha/fogao_fundimig/01.png',
      'https://desapegos.puter.site/cozinha/fogao_fundimig/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 100
  },
  {
    id: 'fogao-industrial-dako-couracado',
    name: 'Fogão Industrial Dako Couraçado Clássico – O "Tanque de Guerra" da Cozinha',
    description: `Para quem busca potência real e durabilidade extrema! Este clássico Dako Couraçado é conhecido pela sua robustez incomparável. Perfeito para quem precisa de um equipamento que não te deixa na mão.\n\n🛠️ Estado: É um item vintage, com marcas de uso que contam sua história, mas sua estrutura é de ferro puro. Funcionamento pleno das bocas e do forno.\n\n🔥 Diferencial: Forno gigante e funcional, ideal para assados grandes, pães artesanais ou para uso em pequenos comércios e áreas de lazer.\n\n📦 Bônus: Já acompanha mangueira e registro! É comprar e começar a usar.`,
    price: 800.00,
    category: 'Cozinha',
    images: [
      'https://desapegos.puter.site/cozinha/dako_couracado/01.png',
      'https://desapegos.puter.site/cozinha/dako_couracado/02.jpg',
      'https://desapegos.puter.site/cozinha/dako_couracado/03.jpg',
      'https://desapegos.puter.site/cozinha/dako_couracado/04.jpg',
      'https://desapegos.puter.site/cozinha/dako_couracado/05.jpg',
      'https://desapegos.puter.site/cozinha/dako_couracado/06.jpg',
      'https://desapegos.puter.site/cozinha/dako_couracado/07.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now()
  },
  {
    id: 'fruteira-mesa-2-andares-floral',
    name: 'Fruteira de Mesa Premium 2 Andares - Charme Floral',
    description: `Adicione um toque de elegância e organização à sua mesa! Esta fruteira de dois andares não é apenas funcional, é uma peça de decoração por si só.\n\n✨ Design: Acabamento rendado com centro floral delicado. Muito versátil para organizar frutas, servir docinhos em festas ou até organizar maquiagens e perfumes.\n\n🍎 Praticidade: Fácil de limpar e montar. Um achado por um preço simbólico!`,
    price: 15.00,
    category: 'Cozinha',
    images: [
      'https://desapegos.puter.site//cozinha/suporte_frutas/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 50
  },
  {
    id: 'termo-rey-gravatinha-par',
    name: 'Relíquia Termo-Rey "Gravatinha" - Par de Travessas Vintage',
    description: `Atenção colecionadores e amantes do retrô! Estamos desapegando deste par icônico da lendária Termo-Rey, na estampa "Gravatinha" (padrão geométrico laranja dos anos 60/70).\n\n🍽️ O que inclui:\n- 1 Travessa Oval clássica\n- 1 Tigela (Bowl) Redonda\n\nPeças em opalina branca ultra resistente, perfeitas para quem valoriza a memória afetiva e quer dar um toque autêntico de "casa de vó" na decoração ou na mesa posta.`,
    price: 120.00,
    category: 'Cozinha',
    images: [
      'https://desapegos.puter.site/cozinha/termo_rey/01.png',
      'https://desapegos.puter.site/cozinha/termo_rey/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 100
  },
  {
    id: 'mini-aquaterrario-decorado-betta',
    name: 'Mini Aquaterrário Decorado - Home Office & Pets',
    description: `Um pedaço da natureza na sua mesa! Este mini aquaterrário é perfeito para quem quer a companhia de um peixinho Betta ou uma pequena tartaruga com estilo e praticidade.\n\n✨ Destaques:\n- Já vem decorado com plantas e substrato fixos.\n- Possui plataforma elevada (área seca) para tartarugas.\n- Acompanha tampa de vidro sob medida para total segurança.\n\n📏 Compacto: 19x13x13cm. Ideal para qualquer cantinho!`,
    price: 30.00,
    category: 'Pets',
    images: [
      'https://desapegos.puter.site/pets/aquario_beta/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 200
  },
  {
    id: 'boneco-dengue-vintage-xuxa',
    name: 'Boneco Dengue (Xou da Xuxa) - Colecionável Original Anos 80',
    description: `Uma verdadeira viagem no tempo! O fiel escudeiro da Rainha Xuxa pode ser seu. Este boneco do Dengue é uma peça rara de se encontrar com articulações tão firmes.\n\n🎨 Estado: Pintura amarela e verde muito bem preservada. Articulações segurando todas as poses.\n\n⚠️ Nota para colecionadores: Não possui as antenas e asas originais, mas a estrutura básica está excelente para restauro ou exibição.`,
    price: 45.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/dengue_xuxa/01.png',
      'https://desapegos.puter.site/brinquedos/dengue_xuxa/02.jpg',
      'https://desapegos.puter.site/brinquedos/dengue_xuxa/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 300
  },
  {
    id: 'kit-cozinha-barbie-vintage',
    name: 'Super Lote Cozinha Vintage Barbie - Itens de Coleção',
    description: `Oportunidade para quem ama miniaturas retrô! Lote com diversas comidinhas e eletros mini que marcaram época.\n\n🥤 Inclui: Embalagens clássicas de Leite, Margarina e o raro Suco Elefanta, além de batedeira e máquina de costura miniatura. Perfeito para dioramas ou colecionadores exigentes.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/kit_minicozinha/01.png',
      'https://desapegos.puter.site/brinquedos/kit_minicozinha/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 400
  },
  {
    id: 'mesa-cadeiras-barbie',
    name: 'Conjunto Jantar Crystal Doll - Mesa e 4 Cadeiras Pink',
    description: `Para a casa da Barbie ficar completa! Mesa em estilo cristal com glitter e cadeiras pink vibrantes.\n\n💖 Ideal para bonecas tamanho padrão (Barbie, Susie, etc). Em estado de novo, pronto para a próxima brincadeira!`,
    price: 10.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/mesa_barbie/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 500
  },
  {
    id: 'yamaha-clavinova-cvp',
    name: 'Piano Digital Yamaha Clavinova CVP - Som Profissional',
    description: `Um instrumento de elite para músicos apaixonados. A linha CVP da Yamaha é famosa pelo toque realista de piano de cauda e timbres impecáveis.\n\n🎹 Toque: Teclas pesadas e sensitivas (GH/GH3).\n🎹 Som: Alto-falantes integrados de alta fidelidade.\n\n⚠️ Detalhe: O piano funciona perfeitamente para tocar, porém o display está sem a luz de fundo (backlight). É possível ler as informações sob luz forte ou lanterna. Um piano de R$ 15k por uma fração do preço devido a este detalhe.`,
    price: 8000.00,
    category: 'Instrumentos Musicais',
    images: [
      'https://desapegos.puter.site/instrumentos/yamaha_clavinova/01.png',
      'https://desapegos.puter.site/instrumentos/yamaha_clavinova/02.png',
      'https://desapegos.puter.site/instrumentos/yamaha_clavinova/03.png',
      'https://desapegos.puter.site/instrumentos/yamaha_clavinova/04.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 600
  },
  {
    id: 'pogobol-barbie-classico',
    name: 'Pogobol Barbie Original - Diversão Ativa Retrô',
    description: `O clássico que nunca sai de moda! Pogobol oficial temático da Barbie em tons de rosa e roxo.\n\n🛼 Estado: Item usado com marcas de aventuras anteriores, mas com a pressão e o plástico em perfeito estado para continuar pulando muito!`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/barbie_pogobol/01.png',
      'https://desapegos.puter.site/brinquedos/barbie_pogobol/02.jpg',
      'https://desapegos.puter.site/brinquedos/barbie_pogobol/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 700
  },
  {
    id: 'lote-lol-surprise-completo',
    name: 'Super Lote L.O.L. Surprise! - 5 Bonecas + Acessórios',
    description: `O sonho de qualquer fã da LOL! Um lote completo com 5 bonequinhas originais, cada uma com seu estilo único (incluindo modelos com glitter).\n\n🟣 Inclui: Roupas, mamadeiras, sapatos e a icônica BOLA original para guardar tudo. Prontas para novas surpresas!`,
    price: 85.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/lote_lol/01.png',
      'https://desapegos.puter.site/brinquedos/lote_lol/02.jpg',
      'https://desapegos.puter.site/brinquedos/lote_lol/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000
  },
  {
    id: 'bandai-dx-dodekabutak-vintage',
    name: 'Robô DX Dodekabutak Bandai - Original Japonês Kabutack',
    description: `Item de raridade extrema para colecionadores de Tokusatsu e robôs japoneses. Original Bandai Japan, série Kabutack.\n\n🤖 Função: Transformação completa de Besouro para Modo Robô (Super Change Series). Peça robusta, licenciada e em excelente estado de conservação.`,
    price: 100.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/robo_kabutak/01.jpg',
      'https://desapegos.puter.site/brinquedos/robo_kabutak/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2000
  },
  {
    id: 'chapeu-woody-toy-story',
    name: 'Chapéu Woody Toy Story - Edição Caubói Autêntico',
    description: `"Tem uma cobra na minha bota!" Chapéu icônico do Woody em feltro marrom texturizado com costuras laterais.\n\n🤠 Estado: Muito conservado, perfeito para fantasias, decoração temática ou para o pequeno caubói da casa.`,
    price: 5.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/chapeu_woody/01.jpg',
      'https://desapegos.puter.site/brinquedos/chapeu_woody/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 3000
  },
  {
    id: 'cavalo-madeira-balanco',
    name: 'Cavalinho de Balanço Retrô - Madeira Maciça Reforçada',
    description: `Um brinquedo que dura gerações! Feito em madeira de lei reforçada, muito superior aos modelos de plástico.\n\n🪵 Decoração: Além de divertir, é uma peça linda para compor quartos infantis com pegada rústica ou vintage. Totalmente seguro e estável.`,
    price: 80.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/cavalo_madeira/01.png',
      'https://desapegos.puter.site/brinquedos/cavalo_madeira/02.jpg',
      'https://desapegos.puter.site/brinquedos/cavalo_madeira/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 4000
  },
  {
    id: 'stacie-suco-playset',
    name: 'Playset Barbie Stacie - Smoothie & Pet Friend',
    description: `A irmã da Barbie em um dia de sol! Playset completo com balcão de sucos, acessórios refrescantes e o inseparável cachorrinho.\n\n🥤 Diversão: Inclui itens detalhados para criar histórias de verão. Boneca original Mattel em perfeito estado.`,
    price: 35.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/stacie_suco/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 5000
  },
  {
    id: 'gaiola-calopsita',
    name: 'Gaiola Chalé Premium para Calopsitas e Pássaros Mansos',
    description: `O lar perfeito para seu pet alado! Estrutura branca tipo chalé, muito espaçosa e higiênica.\n\n🦜 Praticidade: Bandeja removível que facilita a limpeza diária. Duas portas de acesso e poleiros de madeira inclusos. Cabe confortavelmente até 2 aves.`,
    price: 55.00,
    category: 'Pets',
    images: [
      'https://desapegos.puter.site/pets/gaiola_calopsita/01.png',
      'https://desapegos.puter.site/pets/gaiola_calopsita/02.jpg',
      'https://desapegos.puter.site/pets/gaiola_calopsita/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 6000
  },
  {
    id: 'globo-pera-luminaria',
    name: 'Globo Luminária Pera - Reposição 10cm',
    description: `Mantenha sua iluminação impecável. Globo de plástico resistente (polietileno) modelo Pera.\n\n💡 Medida: Boca de 10cm, padrão para a maioria dos ventiladores de teto e lustres. Transparência perfeita para luz suave.`,
    price: 15.00,
    category: 'Decoração',
    images: [
      'https://desapegos.puter.site/deco/globo_pera/01.png',
      'https://desapegos.puter.site/deco/globo_pera/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 10000
  },
  {
    id: 'fogao-venax',
    name: 'Fogão de Mesa Venax 4 Bocas Inox - Luxo Portátil',
    description: `Praticidade com acabamento premium! Este fogão Venax de mesa em Inox é perfeito para apartamentos, áreas gourmet ou camping.\n\n⚡ Tecnologia: Acendimento automático total e mesa em inox brilhante de fácil limpeza. Possui painel traseiro (respaldo) que protege a sua parede de gordura.`,
    price: 190.00,
    category: 'Cozinha',
    images: [
      'https://desapegos.puter.site/eletro/fogareiro_venax/01.jpg',
      'https://desapegos.puter.site/eletro/fogareiro_venax/02.jpg',
      'https://desapegos.puter.site/eletro/fogareiro_venax/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 15000
  },
  {
    id: 'repetidor-tplink',
    name: 'Repetidor Wi-Fi TP-Link 300Mbps - Fim do Sinal Fraco',
    description: `Sua internet em todos os cômodos! Repetidor original TP-Link, modelo TL-WA850RE, o mais vendido da categoria.\n\n📶 Performance: 300Mbps de velocidade, bivolt automático e configuração simplificada via botão WPS. Ideal para home office e streaming.`,
    price: 60.00,
    category: 'Informática',
    images: [
      'https://desapegos.puter.site/informatica/repetidor_tp-link/01.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 20000
  },
  {
    id: 'batgirl-jato',
    name: 'Batgirl DC Super Hero Girls + Bat-Jato - Mattel',
    description: `Heroína pronta para o combate aéreo! Boneca Batgirl de 15cm original Mattel com seu jato tecnológico.\n\n✈️ Acessórios: O jato possui wheels funcionais e a boneca vem com seu traje clássico de heroína. Item impecável para colecionadores de DC.`,
    price: 45.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/batgirl_jato/01.png',
      'https://desapegos.puter.site/brinquedos/batgirl_jato/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 25000
  },
  {
    id: 'lote-ferramentas-massinha',
    name: 'Mega Kit Acessórios Play-Doh - Fábrica de Diversão',
    description: `Tudo o que os pequenos precisam para criar! Lote gigante de moldes, extrusoras de macarrão e ferramentas de corte.\n\n🌈 Criatividade: Dezenas de formas para soltar a imaginação. (Observação: Acompanha apenas os acessórios plásticos, não inclui as massas).`,
    price: 35.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/kit_massinha/01.png',
      'https://desapegos.puter.site/brinquedos/kit_massinha/02.jpg',
      'https://desapegos.puter.site/brinquedos/kit_massinha/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 30000
  },
  {
    id: 'lote-polly-pocket',
    name: 'Lote Polly Pocket Fashion - 4 Bonecas + Closet Completo',
    description: `Crie infinitas combinações de moda! Lote com 4 bonecas Polly e uma enorme variedade de roupas, sapatos e bolsas.\n\n👗 Moda: Inclui vestidos, saias, acessórios e até um pet. Horas de diversão garantidas com o closet mais famoso do mundo das bonecas.`,
    price: 55.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/lote_polly/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 50000
  },
  {
    id: 'panelinhas-metal',
    name: 'Kit MasterChef Kids - Panelinhas em Metal Inox Realistas',
    description: `A casinha subiu de nível! Kit de panelas em metal de verdade (estilo inox), muito mais duráveis e realistas que as de plástico.\n\n🍳 Menu: Caçarola, frigideira, escorredor e utensílios profissionais miniatura. Brilhantes e prontas para o próximo banquete imaginário!`,
    price: 50.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/panelinhas_metal/01.png',
      'https://desapegos.puter.site/brinquedos/panelinhas_metal/02.jpg',
      'https://desapegos.puter.site/brinquedos/panelinhas_metal/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 100000
  },
  {
    id: 'barbie-salao-pia',
    name: 'Pia de Salão Barbie Glamour - Cuba com Glitter',
    description: `Momento de autocuidado para as bonecas! Lavatório de salão com cuba azul translúcida cheia de glitter e armário retrô roxo.\n\n✨ Estilo: Peça icônica da Mattel para completar qualquer cenário de casinha ou salão de beleza da Barbie.`,
    price: 30.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/barbiesalao/01.png',
      'https://desapegos.puter.site/brinquedos/barbiesalao/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 500000
  },
  {
    id: 'army-men-toy-story',
    name: 'Exército Original Disney Pixar Toy Story - Pelotão de Elite',
    description: `"Soldados, preparar para o resgate!" Lote oficial Disney Pixar dos clássicos soldadinhos verdes do filme Toy Story.\n\n🎖️ Autenticidade: Peças gravadas com a licença oficial. Grande variedade de poses (binóculo, rastejando, atirando). Item para colecionadores e fãs da saga.`,
    price: 45.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/armymen/01.png',
      'https://desapegos.puter.site/brinquedos/armymen/02.png',
      'https://desapegos.puter.site/brinquedos/armymen/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000000
  },
  {
    id: 'baby-alive-festa-massas',
    name: 'Baby Alive Festa das Massas Original Hasbro - Interativa',
    description: `A bebê que come de verdade! Esta Baby Alive acompanha uma maquininha que cria diferentes formatos de massa.\n\n👶 Interatividade: A criança prepara o macarrão, dá para a bebê e depois troca a fraldinha. Original Hasbro, muito conservada e higienizada. Inclui vestidinho original e acessórios de cozinha.`,
    price: 150.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/babyalive/01.png',
      'https://desapegos.puter.site/brinquedos/babyalive/02.jpg',
      'https://desapegos.puter.site/brinquedos/babyalive/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2000000
  }
];

export const WHATSAPP_NUMBER = "5543991167333";
export const NEIGHBORHOOD = "San Fernando";