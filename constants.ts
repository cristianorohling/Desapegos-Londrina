import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  "Brinquedos",
  "Decoração",
  "Pets",
  "Utilidades Domésticas",
  "Informática",
  "Eletrodomésticos",
  "Móveis",
  "Outros"
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'cavalo-madeira-balanco',
    name: 'Cavalinho de Balanço em Madeira Reforçado - Clássico e Resistente',
    description: `Vendo cavalinho de balanço feito em madeira de alta qualidade. É um brinquedo "à moda antiga", muito mais resistente que os de plástico atuais. Ideal tanto para a diversão das crianças (ajuda no equilíbrio e coordenação) quanto para decoração de quartos infantis ou ambientes com estilo vintage/rústico.\n\nA estrutura é reforçada, garantindo segurança e durabilidade. Peça muito bonita e conservada.`,
    price: 80.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/cavalo_madeira/01.png',
      'https://desapegos.puter.site/brinquedos/cavalo_madeira/02.jpg',
      'https://desapegos.puter.site/brinquedos/cavalo_madeira/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now()
  },
  {
    id: 'stacie-suco-playset',
    name: 'Boneca Barbie Stacie Playset Com Suco E Cachorrinho',
    description: `Junte-se à Stacie™, a irmã mais nova e cheia de energia da Barbie®, para uma tarde de diversão refrescante e saudável! Este playset adorável traz tudo o que é necessário para criar histórias deliciosas sob o sol.`,
    price: 35.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/stacie_suco/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 500
  },
  {
    id: 'gaiola-calopsita',
    name: 'Gaiola Espaçosa para Calopsitas e Pássaros Mansos – Ótimo Estado',
    description: `Vendo gaiola branca estilo "chalé", ideal para acomodar com conforto calopsitas, periquitos ou agapornis. A gaiola é espaçosa, permitindo que o pássaro se movimente bem, e possui estrutura resistente.\n\nDestaques:\n\n🦜 Capacidade: Comporta confortavelmente até 2 calopsitas.\n🧼 Praticidade: Possui bandeja inferior removível (gaveta) que facilita muito a limpeza dos dejetos sem precisar abrir a gaiola.\n🚪 Acessos: Conta com duas aberturas (portas) para facilitar o manuseio e a colocação de comida/água.\n🪵 Acessórios: Acompanha os poleiros de madeira (conforme fotos).\n\nMedidas:\n📏 Largura: 46 cm\n📏 Profundidade: 27 cm\n📏 Altura: 48 cm (no ponto mais alto) / 40 cm (laterais)\n\nEstou à disposição para dúvidas. Entre em contato!`,
    price: 50.00,
    category: 'Pets',
    images: [
      'https://desapegos.puter.site/pets/gaiola_calopsita/01.png',
      'https://desapegos.puter.site/pets/gaiola_calopsita/02.jpg',
      'https://desapegos.puter.site/pets/gaiola_calopsita/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1000
  },
  {
    id: 'globo-pera-luminaria',
    name: 'Globo Pera Com Boca 10 Cm Para Lustre Ou Ventilador Teto',
    description: `Renove sua luminária com segurança! Globo modelo Pera feito de plástico resistente. Boca padrão de 10cm, serve perfeitamente em ventiladores e lustres.`,
    price: 8.00,
    category: 'Decoração',
    images: [
      'https://desapegos.puter.site/deco/globo_pera/01.png',
      'https://desapegos.puter.site/deco/globo_pera/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 5000
  },
  {
    id: 'fogao-venax',
    name: 'Fogão de Mesa Venax 4 Bocas – Inox com Acendimento Automático e Respaldo',
    description: `Vendo fogão portátil (fogareiro) da marca Venax, modelo de mesa, ideal para quem tem pouco espaço, para cozinhas compactas ou para usar como fogão auxiliar em áreas de festa e camping.\n\nO grande diferencial deste modelo é o respaldo traseiro (painel), que além de dar um acabamento bonito, protege a parede contra respingos de gordura enquanto você cozinha.\n\nCaracterísticas Técnicas:\n\n✨ Mesa: Em Inox brilhante (super fácil de limpar e durável).\n🔥 Queimadores (Bocas): 4 no total, sendo 1 Grande (mais potente/rápido) e 3 Médios.\n⚡ Acendimento: Totalmente automático (não precisa de fósforo).\n🍳 Trempes: Esmaltadas, garantindo maior durabilidade.\n🧽 Praticidade: Botões removíveis para facilitar a limpeza pesada.\n🔧 Instalação: Entrada de gás do lado esquerdo (visto de frente).`,
    price: 190.00,
    category: 'Eletrodomésticos',
    images: [
      'https://desapegos.puter.site/eletro/fogareiro_venax/01.jpg',
      'https://desapegos.puter.site/eletro/fogareiro_venax/02.jpg',
      'https://desapegos.puter.site/eletro/fogareiro_venax/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 10000
  },
  {
    id: 'repetidor-tplink',
    name: 'Repetidor de Sinal Wi-Fi TP-Link 300Mbps (Modelo TL-WA850RE) - Bivolt',
    description: `Vendo repetidor de sinal Wi-Fi da TP-Link, modelo TL-WA850RE (Versão 4.0). Excelente para ampliar a cobertura da internet em casa ou no escritório, eliminando "zonas mortas" onde o sinal do roteador principal não chega.\n\nDetalhes Técnicos:\n\n📶 Marca: TP-Link\n⚙️ Modelo: TL-WA850RE\n🚀 Velocidade: 300Mbps\n⚡ Voltagem: Bivolt (100-240V)\n🔌 Instalação: Plug & Play (basta colocar na tomada e configurar).\n✨ Estado: Usado, em bom estado de conservação e funcionando perfeitamente.`,
    price: 60.00,
    category: 'Informática',
    images: [
      'https://desapegos.puter.site/informatica/repetidor_tp-link/01.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 15000
  },
  {
    id: 'batgirl-jato',
    name: 'Boneca Batgirl DC Super Hero Girls com Jato (Mattel) - 15cm',
    description: `Vendo boneca Batgirl da linha DC Super Hero Girls, original da Mattel. Item perfeito para colecionadores ou para presentear. A boneca está pronta para a ação with seu jato personalizado!\n\nDetalhes do product:\n\n🦸‍♀️ Tamanho: Boneca de 15 cm.\n✈️ Acessórios: Acompanha o Jato (com rodas que giram de verdade) e o capacete removível.\n🏷️ Marca: Mattel (Ref: DVG74/DVG72).\n✨ Estado: Usada, mas bem conservada.`,
    price: 50.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/batgirl_jato/01.png',
      'https://desapegos.puter.site/brinquedos/batgirl_jato/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 20000
  },
  {
    id: 'lote-ferramentas-massinha',
    name: 'Super Lote de Ferramentas e Moldes para Massinha (Play-Doh/Super Massa)',
    description: `⚠️ Importante: O kit contém apenas os acessórios plásticos. As massinhas originais secaram com o tempo e foram descartadas. Você precisará usar suas próprias massinhas (Play-Doh, caseiras ou de outras marcas).\n\nKit completo de acessórios para a criançada soltar a imaginação modelando! É o combo perfeito para quem já tem os potinhos de massa em casa e precisa de ferramentas, ou para quem quer renovar os brinquedos.\n\nO que o kit inclui:\n\n✨ Vários moldes divertidos (personagens, animais, formas geométricas).\n🍝 Extrusora (fábrica de espaguete/cobrinhas) manual.\n🔪 Rolinho de abrir massa, faquinhas e estecas de modelar.\n📦 Caixa original "Maletinha Divertida Fazendo Moda".`,
    price: 35.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/kit_massinha/01.png',
      'https://desapegos.puter.site/brinquedos/kit_massinha/02.jpg',
      'https://desapegos.puter.site/brinquedos/kit_massinha/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 25000
  },
  {
    id: 'lote-polly-pocket',
    name: 'Lote Polly Pocket: 4 Bonecas + Várias Roupas e Acessórios',
    description: `Vendo um excelente lote de Polly Pocket, perfeito para colecionar ou brincar. O kit é composto por 4 bonecas diferentes e uma grande variedade de roupinhas e acessórios para montar diversos looks.\n\nO lote inclui:\n\n👗 4 Bonecas Polly Pocket (loiras e morenas com estilos diferentes).\n👠 Diversas peças de roupa: vestidos estampados, macacão, calças, shorts, saias e blusinhas.\n👜 Acessórios: Pares de sapatos, botas e bolsas (uma amarela e uma prateada/roxa).\n🧸 Extra: Inclui até um ursinho marrom.\n\nTudo em ótimo estado de conservação, exatamente como nas fotos. Entre em contato para mais detalhes!`,
    price: 50.00,
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
    name: 'Kit de Panelinhas de Metal - Estilo Inox Profissional',
    description: `A brincadeira de casinha ficou séria (e muito mais divertida)! Esqueça as panelinhas de plástico que amassam fácil. Apresento este kit de cozinha infantil estilo "Inox", perfeito para os pequenos chefs que exigem qualidade na hora de preparar o "papazinho" imaginário.\n\nO que vem no menu:\n\n🥘 Caçarola com tampa: Para os grandes cozidos.\n🍝 Escorredor de macarrão: Super realista!\n🍳 Frigideira: Para aquele ovinho frito de mentirinha.\n🥄 Trio de Utensílios: Concha, espumadeira e espátula em metal.\n\nUm conjunto resistente, brilhante e pronto para durar gerações de brincadeiras. O toque de realismo que faltava na cozinha de brinquedo!`,
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
    name: 'Pia do Salão de Beleza da Barbie - Glamour e Estilo',
    description: `Transforme a brincadeira em um momento de puro glamour! Este lavatório do Salão de Beleza da Barbie é a peça que faltava para completar o cenário perfeito. \n\nCom uma cuba azul translúcida cheia de glitter e um armário roxo super charmoso decorado com o clássico laço rosa, ele traz todo o estilo que a boneca mais famosa do mundo merece.\n\nPerfeito para criar histórias de "dia de beleza", lavar os cabelos das bonecas (de faz de conta!) e deixar a imaginação fluir. Um item encantador que promete horas de diversão estilosa.`,
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
    name: 'Exército de Soldadinhos Verdes Disney Pixar Toy Story - Oficiais!',
    description: `"Sentido! Batalhão, apresentar armas!"\n\nTraga a magia do quarto do Andy para sua casa com este incrível lote dos icônicos Soldadinhos Verdes!\n\nEstes não são soldadinhos genéricos. Este é um conjunto oficial Disney • Pixar, com a autenticidade gravada na base de cada peça (conforme mostrado nas fotos). São os verdadeiros heróis de Toy Story prontos para a missão!\n\nDetalhes do Conjunto:\n- Um exército de soldadinhos verdes clássicos.\n- Grande variedade de poses de combate: atirando de pé, ajoelhados, rastejando (prone), com binóculos, etc.\n- Peças originel e licenciadas.\n- Estado de conservação: Excelente, prontos para muitas horas de batalha imaginária ou para completar sua coleção.\n\nIdeal para fãs da franquia Toy Story e colecionadores da Disney.\n\nNão perca a chance de comandar este pelotão!`,
    price: 40.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/armymen/01.png',
      'https://desapegos.puter.site/brinquedos/armymen/02.png',
      'https://desapegos.puter.site/brinquedos/armymen/03.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000000
  },
  {
    id: 'baby-alive-festa-massas',
    name: 'Boneca Baby Alive Festa das Massas (Hasbro) - em Ótimo Estado',
    description: `Vendo Boneca Baby Alive - Edição "Festa das Massas". A boneca é super divertida: a criança pode preparar o "macarrão" na maquininha, dar para a bebê comer e depois trocar a fraldinha.\n\nDetalhes do Brinquedo:\n\nMarca: Hasbro (Original).\n\nFunção: Acompanha uma máquina de massas que cria formatos divertidos (coração, gravatinha) ao girar a manivela.\n\nTamanho: Aproximadamente 32cm de altura.\n\nMaterial: Vinil e plástico resistente.\n\nItens Inclusos (conforme fotos):\n- Boneca com vestido removível.\n- Máquina de macarrão (cor azul).\n- Acessórios (pratinho/bandeja).\n- Pote de massinha (apenas o pote original, não acompanha a massinha).\n- Fraldinha.\n\nEstado de conservação: Produto usado, mas muito bem conservado e funcionando perfeitamente.\n\n⚠️ CONDIÇÕES DE VENDA (Leia com atenção):\n- Trocas: Não aceito trocas por outros produtos.\n- Pagamento: Dinheiro, Pix ou Cartão de Crédito/Debitó (parcelo, com taxas da maquininha por conta do comprador).`,
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
  },
  {
    id: 'abajur-retro',
    name: 'Abajur Retrô de Metal - Estilo Industrial',
    description: 'Luminária de mesa com design vintage industrial. Fio em tecido, bivolt. Dá um toque aconchegante em qualquer ambiente. Perfeito para leitura ou decoração de criado-mudo.',
    price: 110.00,
    category: 'Decoração',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400'],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 11000000
  }
];

export const WHATSAPP_NUMBER = "5543991167333";