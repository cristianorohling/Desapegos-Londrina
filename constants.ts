import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  "Brinquedos",
  "Decoração",
  "Pets",
  "Cozinha",
  "Informática",
  "Móveis",
  "Instrumentos Musicais",
  "Outros"
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'fogao-industrial-dako-couracado',
    name: 'Fogão Industrial Dako Couraçado Clássico – Robusto e Forno Funcional',
    description: `Você está procurando um fogão que aguenta o tranco de verdade? Vendo este clássico fogão industrial da linha Dako Couraçado, conhecido por sua extrema robustez e durabilidade. É o tipo de equipamento feito para durar gerações.\n\n🛠️ Detalhes do Produto: É um fogão antigo, um verdadeiro "tanque de guerra". Ele possui marcas de uso visíveis e alguns pontos de ferrugem naturais do tempo, como é esperado de um equipamento industrial dessa idade. No entanto, nada disso interfere no seu funcionamento. As bocas são potentes e a estrutura é firme.\n\n🔥 O Grande Diferencial: O forno está totalmente funcional, pronto para assar pães, bolos, carnes ou o que você precisar em grandes quantidades.\n\n📦 Bônus: Para facilitar a sua vida, o fogão já vai acompanhado da mangueira de gás e do registro em bom estado. É só instalar e começar a cozinhar.\n\nIdeal para quem precisa de potência e um equipamento que funciona de verdade. Ótimo para cozinhas movimentadas, áreas de festa, sítios ou pequenos comércios.`,
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
    name: 'Fruteira de Mesa 2 Andares - Floral e Delicada',
    description: `Vendo esta linda peça organizadora de dois andares. Ela é feita de material resistente com acabamento estilo renda e centro floral. Muito versátil, você pode usar para:\n\n🍎 Colocar frutas na mesa de jantar.\n🧁 Servir salgadinhos ou doces em festas.\n💄 Organizar maquiagens e perfumes na penteadeira.\n☕ Decorar o cantinho do café.\n\nEstá em ótimo estado e é muito fácil de limpar/desmontar. Valor: R$ 10,00 (Barato pra sair hoje!)`,
    price: 10.00,
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
    name: 'Par de Travessas Termo-Rey "Gravatinha" - Nostalgia Pura',
    description: `Lembra daquele cheirinho de bolo saindo do forno? Da mesa posta para o almoço de domingo na casa da avó? 👵 Essas travessas não são apenas vasilhas, são uma viagem direta para essas memórias.\n\nEstou desapegando deste par incrível de travessas opalinas da lendária Termo-Rey, na icônica e desejada estampa "Gravatinha" (o clássico padrão geométrico laranja).\n\nEssas peças marcaram época nos anos 60 e 70 e hoje são verdadeiros tesouros para colecionadores e amantes da decoração vintage afetiva. ✨ É cada vez mais difícil encontrar esse modelo, ainda mais o parzinho assim!\n\n🍽️ O que você leva:\n- 01 Travessa Oval Termo-Rey Gravatinha\n- 01 Tigela (Bowl) Redonda Termo-Rey Gravatinha\n\nPeças com história, feitas daquela opalina resistente que não se faz mais hoje em dia. Perfeitas para completar sua coleção ou dar aquele toque retrô autêntico na sua cozinha.`,
    price: 100.00,
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
    name: 'Mini Aquaterrário Decorado com Tampo de Vidro - Ideal para Betta ou Tartaruga',
    description: `Traga mais vida e tranquilidade para o seu ambiente com este lindo Mini Aquaterrário. Compacto e já decorado, ele é a peça perfeita para quem deseja ter um pet de estimação sem ocupar muito espaço. Ideal para mesas de escritório, estantes ou bancadas.\n\n✨ Destaques do Produto:\n- Design Inteligente: Possui uma plataforma elevada (área seca) com decoração, perfeita para o descanso de mini tartarugas.\n- Segurança Total: Acompanha tampo de vidro sob medida, evitando que o animal pule para fora e protegendo contra poeira.\n- Pronto para Uso: O aquário já vem com a decoração fixada (plantas e substrato), oferecendo um visual natural e harmonioso.\n- Versatilidade: Excelente lar para um peixe Betta ou para filhotes de tartaruga tigre d'água (durante os primeiros meses).\n\n📏 Especificações Técnicas:\n- Material: Vidro com acabamento em fita colorida.\n- Dimensões: 19cm (L) x 13cm (P) x 13cm (A).\n\n📦 Itens Inclusos: Aquário decorado + Tampa de vidro.`,
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
    name: 'Boneco Vintage Articulado Dengue (Xou da Xuxa) Anos 80',
    description: `Grande oportunidade para colecionadores e nostálgicos dos anos 80!\n\nColoco à venda este incrível boneco vintage articulado do personagem "Dengue" (do Xou da Xuxa). É uma peça cheia de história e perfeita para completar sua coleção.\n\n✨ Detalhes do Estado de Conservação:\n🎨 Pintura: Em muito bom estado, com as cores amarelo e verde ainda vivas, conforme as fotos.\n🦾 Articulações: Excelente estado! Estão firmes e segurando bem as poses, o que é raro em bonecos dessa idade.\n\n⚠️ Observações importantes: A peça é vendida exatamente como está nas imagens. Ela não possui as antenas e não possui asas.\n\nApesar dos detalhes faltantes, é um item estruturalmente muito bom e difícil de achar com articulações tão preservadas.`,
    price: 30.00,
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
    name: 'Kit Cozinha Infantil para Barbie - Panelinhas, Comidinhas e Eletros',
    description: `Vendo lote de brinquedos antigos de cozinha/casinha. Ótima oportunidade para completar sua coleção ou decoração vintage.\n\n✨ Detalhes do Lote:\n- Diversas comidinhas (embalagens vintage de Leite, Margarina, Suco e Refrigerante Elefanta).\n- Conjunto de panelas roxas.\n- Mini batedeira e máquina de costura.\n- Talheres e pratos.`,
    price: 8.00,
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
    name: 'Conjunto de Mesinha e 4 Cadeiras para Casa de Bonecas',
    description: `Vendo lindo kit de móveis para casinha de boneca. O conjunto está em ótimo estado e é perfeito para completar a decoração.\n\n✨ O que inclui:\n- 1 mesa redonda transparente com detalhes em relevo (estilo cristal com glitter)\n- 4 cadeiras na cor rosa pink com design vazado.\n\n📏 Compatibilidade: Ideal para bonecas tamanho padrão (tipo Barbie, Susie, etc.).`,
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
    name: 'Piano Digital Yamaha Clavinova Série CVP - Oportunidade',
    description: `Vendo Piano Digital Yamaha Clavinova (Série CVP), um instrumento robusto e consagrado pela qualidade sonora e fidelidade ao toque de um piano acústico.\n\nO instrumento possui a aclamada mecânica de teclas da Yamaha (pesadas e sensitivas), ideal tanto para estudantes quanto para pianistas experientes que buscam a sensação real de um piano de cauda em um formato digital.\n\n✨ Estado de Conservação:\n🎹 Mecânica e Som: Funcionamento perfeito. Todas as teclas estão alinhadas, com peso correto e emitindo som limpo. Alto-falantes potentes e sem chiados.\n🪑 Estética: Móvel em bom estado geral, com marcas naturais do tempo (detalhe oxidado na plaqueta da marca, conforme fotos).\n\n⚠️ ATENÇÃO (Detalhe importante):\nO display (tela) está funcionando o sistema, porém está sem backlight (luz de fundo). O conteúdo aparece, mas fica escuro/difícil de ler. O piano pode ser tocado perfeitamente como um piano tradicional, mas a navegação nos menus de ritmos requer reparo ou uso com iluminação externa.`,
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
    name: 'Pogobol da Barbie - Diversão Clássica em Rosa e Roxo!',
    description: `Este é um Pogobol temático da Barbie, um brinquedo clássico para pular e se divertir. \n\nO item apresentado nas imagens é um product usado e exibe sinais visíveis de desgaste e uso, como marcas na superfície da bola rosa e na base plástica. Apesar das marcas de uso, ele mantém suas características originais e o tema da Barbie.`,
    price: 10.00,
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
    name: 'Lote L.O.L. Surprise! ✨ Várias Bonecas + Acessórios e Bola!',
    description: `O mundo da L.O.L. Surprise invadiu a área! 💖 Estou desapegando deste lote super fofo com 5 bonequinhas cheias de estilo. É o kit perfeito para começar uma coleção ou aumentar a diversão de quem já ama essas pequenas.\n\nO pacote da alegria inclui:\n\n🎀 5 Bonequinhas L.O.L. com visuais diferentes (tem de cabelo com glitter, coloridas e muito mais!).\n🍼 Vários acessórios: mamadeiras, sapatinho, roupinha extra e tiara.\n🟣 Bônus: Acompanha a BOLA original para guardar tudo e levar a brincadeira para qualquer lugar!\n\nTudo pronto para novas aventuras. Quem vai levar essas fofuras para casa?`,
    price: 80.00,
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
    name: 'Robô Transformável Bandai DX Dodekabutak - Super Change Series',
    description: `Vendo robô transformável vintage da Bandai, modelo DX Dodekabutac da série japonesa B-Robo Kabutack. Peça original e licenciada, fabricada no Japão.\n\nDetalhes do Produto:\n🤖 Personagem: Dodekabutak (Robô Besouro Gigante)\n✨ Linha: Super Change Series\n\nUm item raro para colecionadores de robôs japoneses e fãs da cultura Tokusatsu. Em excelente estado de conservação!`,
    price: 80.00,
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
    name: 'Chapéu do Woody (Toy Story) - Clássico Caubói',
    description: `Se você sempre quis fazer parte da turma do Andy, essa é a sua chance! Estou passando para frente este item icônico: o chapéu de caubói do Woody.\n\nEle é feito de um feltro marrom texturizado super autêntico e possui aquele detalhe clássico da costura na borda da aba, exatamente como nos filmes. Perfeito para festas, fantasias ou para colecionadores de Toy Story.`,
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
    createdAt: Date.now() - 4000
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
    createdAt: Date.now() - 5000
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
    createdAt: Date.now() - 6000
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
    createdAt: Date.now() - 10000
  },
  {
    id: 'fogao-venax',
    name: 'Fogão de Mesa Venax 4 Bocas – Inox com Acendimento Automático e Respaldo',
    description: `Vendo fogão portátil (fogareiro) da marca Venax, modelo de mesa, ideal para quem tem pouco espaço, para cozinhas compactas ou para usar como fogão auxiliar em áreas de festa e camping.\n\nO grande diferencial deste modelo é o respaldo traseiro (panel), que além de dar um acabamento bonito, protege a parede contra respingos de gordura enquanto você cozinha.\n\nCaracterísticas Técnicas:\n\n✨ Mesa: Em Inox brilhante (super fácil de limpar e durável).\n🔥 Queimadores (Bocas): 4 no total, sendo 1 Grande (mais potente/rápido) e 3 Médios.\n⚡ Acendimento: Totalmente automático (não precisa de fósforo).\n🍳 Trempes: Esmaltadas, garantindo maior durabilidade.\n🧽 Praticidade: Botões removíveis para facilitar a limpeza pesada.\n🔧 Instalação: Entrada de gás do lado esquerdo (visto de frente).`,
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
    name: 'Repetidor de Sinal Wi-Fi TP-Link 300Mbps (Modelo TL-WA850RE) - Bivolt',
    description: `Vendo repetidor de sinal Wi-Fi da TP-Link, modelo TL-WA850RE (Versão 4.0). Excelente para ampliar a cobertura da internet em casa ou no escritório, eliminando "zonas mortas" onde o sinal do roteador principal não chega.\n\nDetalhes Técnicos:\n\n📶 Marca: TP-Link\n⚙️ Modelo: TL-WA850RE\n🚀 Velocidade: 300Mbps\n⚡ Voltagem: Bivolt (100-240V)\n🔌 Instalação: Plug & Play (basta colocar na tomada e configurar).\n✨ Estado: Usado, em bom estado de conservação e funcionando perfeitamente.`,
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
    createdAt: Date.now() - 25000
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
    createdAt: Date.now() - 30000
  },
  {
    id: 'lote-polly-pocket',
    name: 'Lote Polly Pocket: 4 Bonecas + Várias Roupas e Acessórios',
    description: `Vendo um excelente lote de Polly Pocket, perfeito para colecionar ou montar diversos looks. O kit é composto por 4 bonecas diferentes e uma grande variedade de roupinhas e acessórios.\n\nO lote inclui:\n\n👗 4 Bonecas Polly Pocket (loiras e morenas com estilos diferentes).\n👠 Diversas peças de roupa: vestidos estampados, macacão, calças, shorts, saias e blusinhas.\n👜 Acessórios: Pares de sapatos, botas e bolsas.\n🧸 Extra: Inclui até um ursinho marrom.\n\nTudo em ótimo estado de conservação.`,
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
    description: `"Sentido! Batalhão, apresentar armas!"\n\nTraga a magia do quarto do Andy para sua casa com este incrível lote dos icônicos Soldadinhos Verdes!\n\nEstes não são soldadinhos genéricos. Este é um conjunto oficial Disney • Pixar, com a autenticidade gravada na base de cada peça (conforme mostrado nas fotos). São os verdadeiros heróis de Toy Story prontos para a missão!\n\nDetalhes do Conjunto:\n- Um exército de soldadinhos verdes clássicos.\n- Grande variedade de poses de combate: atirando de pe, ajoelhados, rastejando (prone), com binóculos, etc.\n- Peças originel e licenciadas.\n- Estado de conservação: Excelente, prontos para muitas horas de batalha imaginária ou para completar sua coleção.\n\nIdeal para fãs da franquia Toy Story e colecionadores da Disney.\n\nNão perca a chance de comandar este pelotão!`,
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
      'https://desapegos.puter.site/babyalive/02.jpg',
      'https://desapegos.puter.site/babyalive/03.jpg'
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