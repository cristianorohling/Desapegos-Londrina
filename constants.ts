import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  "Brinquedos",
  "Decoração",
  "Pets",
  "Cozinha",
  "Info Eletrônicos",
  "Instrumentos Musicais"
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'tv-philco-ford-vintage-amarela',
    name: 'TV Antiga Philco-Ford Portátil Amarela - Vintage Anos 70 - Rara - Space Age',
    description: `Vendo rara TV portátil da marca Philco-Ford, modelo icônico da década de 1970. Uma verdadeira peça de história e design, ideal para colecionadores, decoração de ambientes retrô, cenografia, vitrines ou projetos de restauração.

Destaques do Produto:
* Marca: Philco-Ford (Período clássico da marca).
* Estilo: Design "Space Age" com gabinete na cor Amarelo/Mostarda (cor difícil de encontrar e muito valorizada).
* Estética: Peça com design arredondado, típica do futurismo dos anos 70.
* Estado de Conservação: Estrutura externa (carcaça) íntegra, sem trincados graves. Botões e seletores originais presentes.
* Funcionamento: O aparelho liga e acende a tela (chuvisco), mas precisa de conversor para sinal digital ou revisão técnica.

Observação: Trata-se de uma TV de tubo (CRT) analógica. Para assistir canais hoje em dia, é necessário uso de conversores externos, mas seu maior valor é como objeto de decoração vintage.`,
    price: 390.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/03.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/04.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 9000,
    keywords: ['tv antiga', 'philco-ford', 'vintage', 'anos 70', 'amarela', 'retrô', 'decoração', 'space age', 'colecionador', 'tv de tubo']
  },
  {
    id: 'mjolnir-thor-low-cost',
    name: 'Mjolnir do Thor (Versão de Entrada/Low Cost)',
    description: `Vendo este Mjolnir de plástico. Não foi forjado no coração de uma estrela moribunda, foi forjado numa injetora de plástico mesmo, mas quebra o galho!

Perfeito para:
* Completar fantasia de última hora.
* Deixar na estante (de longe engana bem!).
* Presentear sobrinho que quebra tudo.
* Fazer um projeto de pintura e deixar ele com cara de item de luxo.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/martelo_thor/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() + 8000,
    keywords: ['thor', 'mjolnir', 'marvel', 'vingadores', 'martelo', 'fantasia', 'brinquedo', 'geek', 'barato']
  },
  {
    id: 'tait-speaker-tmaa10',
    name: 'Alto-Falante Tait TMAA10 High Power (Novo) - Padrão Industrial p/ Rádio',
    description: `Vendo alto-falante remoto original da Tait Communications, modelo High-Power (TMAA10). Equipamento novo, nunca utilizado.

Este não é um alto-falante comum. É um equipamento de padrão industrial/militar, projetado para oferecer áudio extremamente alto e cristalino mesmo em ambientes barulhentos (ideal para caminhonetes a diesel, caminhões, viaturas ou maquinário agrícola).

Destaques:
* Durabilidade Extrema: Carcaça reforçada e resistente a impactos e vibração.
* Qualidade de Áudio: Som encorpado, sem a distorção típica de caixas de plástico simples.
* Praticidade: Acompanha suporte de metal (bracket) original para fixação no painel ou teto e cabo longo para instalação flexível.

Especificações:
* Marca: Tait Communications (Nova Zelândia)
* Estado: Novo (Zero)
* Compatibilidade: Funciona em qualquer rádio móvel (VHF, UHF, PX/Faixa do Cidadão) que aceite caixa externa (Motorola, Yaesu, Icom, Voyager, etc).`,
    price: 199.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/speaker_tait/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/speaker_tait/02.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 7000,
    keywords: ['tait', 'tmaa10', 'alto-falante', 'rádio', 'comunicação', 'industrial', 'vhf', 'uhf', 'px', 'novo']
  },
  {
    id: 'chaleira-smartfy-inox',
    name: 'Jarra Chaleira Elétrica Inox Smartfy 1.8L 220V - NOVA NA CAIXA',
    description: `Traga modernidade e eficiência para a sua cozinha com a Jarra Elétrica Smartfy Inox. Equipamento robusto, ideal para quem busca rapidez no preparo de bebidas quentes e agilidade nas receitas do dia a dia.

Destaques do Produto:
* Alta Performance: Com 1500W de potência, ferve 1,8 litros de água em poucos minutos.
* Acabamento Premium: Design sofisticado em Aço Inox e Preto, combinando com qualquer cozinha moderna.
* Segurança Total: Sistema de desligamento automático após a fervura e proteção contra superaquecimento.
* Higiene: Filtro integrado no bico e interior em inox, garantindo água pura sem cheiro ou gosto.
* Ergonomia: Base com giro 360º, facilitando o manuseio tanto para destros quanto para canhotos.
* Ideal para: Café, chás, chimarrão, preparo de alimentos instantâneos e esterilização de utensílios.

Ficha Técnica:
* Marca: Smartfy
* Modelo: JE02I
* Voltagem: 220V - 240V
* Capacidade: 1.8 Litros
* Material: Aço Inoxidável e Polipropileno
* Condição: Novo, intacto na embalagem original.`,
    price: 60.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/chaleira_smartfy/01.webp',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/chaleira_smartfy/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 6000,
    keywords: ['chaleira elétrica', 'smartfy', 'inox', 'cozinha', '220v', 'novo', 'eletrodoméstico', 'café', 'chá', 'chimarrão']
  },
  {
    id: 'comando-arcade-sanwa-vermelho',
    name: 'Comando Arcade Tipo Sanwa Profissional Vermelho - Alta Precision',
    description: `Controle para fliperama padrão Japonês (Tipo Sanwa). Ideal para quem busca precisão em jogos de luta (Street Fighter, KOF, Mortal Kombat) e agilidade em jogos de nave (shmup).

Diferente dos comandos nacionais antigos (pesados), este modelo "Tipo Sanwa" oferece uma movimentação macia, curso curto e resposta rápida, permitindo a execução de combos e movimentos complexos com muito mais facilidade.

Características:
* Modelo: Estilo Sanwa JLF (Padrão Japonês).
* Sensibilidade: Alta precisão com microswitches de resposta tátil (barulho de "clique" satisfatório).
* Formato: Balltop (Bolinha) na cor Vermelha.
* Restritor: Acompanha restritor (peça amarela) para garantir movimentos precisos nas diagonais.
* Estado: NOVO`,
    price: 65.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/03.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/04.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 5000,
    keywords: ['arcade', 'fliperama', 'sanwa', 'controle', 'games', 'jogos de luta', 'precisão', 'retrogamer', 'novo']
  },
  {
    id: 'diaclone-hilux-azul',
    name: 'Diaclone Hilux 4WD Azul, Takara (1983)',
    description: `Disponível para venda o Diaclone Hilux 4WD Azul, fabricado pela Takara, conhecido entre colecionadores como "Blue Trailbreaker". Este modelo é um Pre-Transformer genuíno, utilizando o molde original que antecede a linha G1 da Hasbro, com a construção robusta em metal die-cast e acabamento cromado típicos da engenharia japonesa dos anos 80.

Esta variante de cor é um item de alta raridade, sendo consideravelmente mais difícil de encontrar no mercado do que a versão preta padrão. Trata-se de uma peça essencial para coleções de Transformers Vintage, ideal para quem busca documentar a história da linha com variantes escassas e originais de época.`,
    price: 260.00,
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
    id: 'mimo-convert-locomotiva',
    name: 'Mimo Convert "Locomotiva" (versão brasileira do "GoBots Loco")',
    description: `Mergulhe na nostalgia dos anos 80 com este robô vintage "Loco", da clássica linha Converts da Mimo (versão brasileira dos Gobots). Uma peça autêntica de época que se transforma de locomotiva a vapor para robô, ideal para colecionadores que valorizam a história dos brinquedos nacionais ou buscam completar sua coleção com um item original.

O boneco é vendido no estado, apresentando marcas de uso visíveis e desgaste natural de um brinquedo que foi muito aproveitado ("played condition"), já sem os adesivos originais. A mecânica de transformação permanece funcional, tornando-o uma excelente opção acessível para projetos de restauração, customização ou simplesmente para ter na estante um sobrevivente genuíno da infância.`,
    price: 100.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mimo_convert/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mimo_convert/02.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 3000,
    keywords: ['mimo', 'convert', 'gobots', 'loco', 'locomotiva', 'vintage', 'anos 80', 'brinquedo antigo', 'robô', 'transformação', 'colecionador']
  },
  {
    id: 'guitarra-guitar-hero-bright',
    name: "Guitarra Guitar Hero Bright - PS2 / PS3 / Wii",
    description: `Vendo Guitarra Controle da marca Bright, modelo Stratocaster branca. Na caixa original, caixa levemente danificada.

Compatibilidade: PS2, PS3 e Wii.
Conexão: Com fio (cabo USB/Adaptador).
Estado: Produto novo, testado e funcionando 100%.

Ideal para quem quer reviver os clássicos do Guitar Hero e Rock Band nos consoles retrô ou PC.`,
    price: 249.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/guitarra_bright/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/guitarra_bright/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/guitarra_bright/03.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/guitarra_bright/04.jpg'
    ],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() + 2000,
    keywords: ['guitar hero', 'guitarra', 'bright', 'ps2', 'ps3', 'wii', 'controle', 'games', 'rock band', 'novo']
  },
  {
    id: 'patins-inline-ajustavel',
    name: "Patins In Line Preto Ajustável Tam 34, 35 e 36 - Roller Recreativo",
    description: `Vendo par de patins in-line (roller) na cor preta com detalhes em branco e prata. Modelo recreativo unissex, ideal para lazer e iniciantes na patinação.

Características do produto:
Numeração: Atende tamanhos 34 e 35, servindo até 36 (formato ajustável).
Estrutura: Bota externa rígida para maior suporte e bota interna (liner) acolchoada e confortável.
Fixação: Sistema triplo de fechamento com cadarço, tira de velcro no peito do pé e presilha de trava rápida no tornozelo, garantindo firmeza e segurança.
Rodas: 4 rodas in linha originais modelo Conect, em bom estado de conservação.
Segurança: Possui freio traseiro instalado no pé direito.

Produto íntegro, higienizado e pronto para uso.`,
    price: 150.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/patins_inline/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/patins_inline/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 1000,
    keywords: ['patins', 'inline', 'roller', 'esporte', 'lazer', 'ajustável', 'brinquedo', 'radical']
  },
  {
    id: 'lote-miniaturas-chumbo-rpg',
    name: "Lote Imperdível de Miniaturas de Chumbo (Old School)",
    description: `Reviva a era de ouro do RPG com este lote exclusivo de guerreiros em metal. São peças pesadas, detalhadas e clássicas, perfeitas para colecionadores e pintores que buscam a nostalgia das mesas antigas. O valor de R$ 80 refere-se ao lote completo das miniaturas (cenário não incluso).

Nota importante: Por serem miniaturas vintage de chumbo, são itens destinados a colecionadores adultos e hobbyistas. Recomenda-se lavar as mãos após o manuseio e não são indicadas para crianças.`,
    price: 50.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/guerreiros_rpg/01.png'
    ],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() + 700,
    keywords: ['miniaturas de chumbo', 'rpg', 'guerreiros', 'metal', 'old school', 'colecionador', 'vintage', 'hobby', 'miniatura antiga', 'fantasia']
  },
  {
    id: 'kit-guardioes-galaxia-bootleg',
    name: "Kit Completo Guardiões da Galáxia - Versão bootleg",
    description: `Dá uma olhada nesse kit completo da equipe mais fora da lei da galáxia! São bonecos de fabricação chinesa (versão alternativa/bootleg), ideais para quem quer a equipe toda reunida sem gastar muito.

O set é completão e bem bacana: o Senhor das Estrelas (Star-Lord) vem com seus dois blasters clássicos e o Drax já chega armado com sua faca de combate. Além deles, o kit conta com Gamora, Rocket Raccoon e o pequeno Groot. Ótimo custo-benefício para enfeitar a estante.`,
    price: 50.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/guardioes_galaxia/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 600,
    keywords: ['guardiões da galáxia', 'action figure', 'bonecos marvel', 'kit completo', 'senhor das estrelas', 'drax', 'rocket e groot', 'versão chinesa', 'bootleg', 'brinquedo barato']
  },
  {
    id: 'lote-mario-bros-mcdonalds',
    name: "Lote Bonecos Super Mario Bros: Bowser, Yoshi, Luigi, Peach e McDonald's",
    description: `Vendo lote misto de brinquedos Super Mario (McDonald's e genéricos)! O kit conta com figuras marcantes como Mario, Luigi, Princesa Peach, Bowser, Yoshi, Toad e Toadette, além de acessórios como cogumelos e blocos. Tudo em bom estado por apenas 80 reais! Aproveite!`,
    price: 50.00,
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
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now() + 300,
    keywords: ['coruja', 'madeira', 'entalhe', 'escultura', 'rústico', 'parede', 'artesanato', 'decoração']
  },
  {
    id: 'volante-multilaser-3-em-1',
    name: 'Volante e Pedal Multilaser 3 em 1 (PS2, PS3 e PC)',
    description: `Kit Volante e Pedal da marca Multilaser, modelo 3 em 1. Compatível com PlayStation 2, PlayStation 3 e Computador (PC). Em bom estado de conservação e totalmente funcional (botões, pedais e respostas ok).`,
    price: 100.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/volante_multi/01.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/volante_multi/02.jpg'
    ],
    isSold: true,
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
    isSold: true,
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
    price: 80.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/robo_kabutak/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/robo_kabutak/02.png'
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
    price: 10.00,
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
    description: `Playset original Mattel da boneca Stacie (irmã da Barbie) com tema de barraca de sucos. Inclui a boneca, balcão, acessórios de smoothie e cachorrinho pet.`,
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
    price: 50.00,
    category: 'Info Eletrônicos',
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
    description: `Conjunto DC Super Hero Girls original Mattel. Inclui boneca Batgirl articulada de 15cm e Bat-Jato com rodas funcionais. Item de colecionador em ótimo estado.`,
    price: 60.00,
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
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/barbiesalao/02.jpg'
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

export const WHATSAPP_NUMBER = "5543991223034";
export const NEIGHBORHOOD = "San Fernando";
export const FB_MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/100001551016902/";