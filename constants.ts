import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  "Brinquedos",
  "Decoração",
  "Pets",
  "Cozinha",
  "Info Eletrônicos",
  "Instrumentos Musicais"
];

// Texto padrão para facilitar manutenção futura
const HEADER_DESC = `Sou de Londrina (San Fernando), pode retirar em mãos comigo. Para outras cidades, envio via OLX Pay (Correios) com embalagem reforçada.

`;

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'miniatura-guarana-tai-vintage',
    name: 'Miniatura Guaraná Taí Coca-Cola Anos 80 - Coleção Rara',
    description: `${HEADER_DESC}Vendo miniatura rara do Guaraná Taí. Peça original e autêntica da famosa Promoção das Miniaturas da Coca-Cola (anos 80), que incluía também Fanta e Sprite. Item indispensável para quem quer completar o engradado clássico da coleção.

Estado de conservação:
* Vidro e Rótulo: Rótulo íntegro, original e com cores vivas (excelente estado).
* Tampa: Tampinha de metal original com oxidação natural do tempo.
* Conteúdo: Garrafa vazia (sem líquido).`,
    price: 50.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/miniatura_tai/01.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 12000,
    keywords: ['guaraná taí', 'coca-cola', 'miniatura', 'vintage', 'anos 80', 'colecionador', 'garrafinha', 'promoção']
  },
  {
    id: 'bumblebee-estrela-g1-restauro',
    name: 'Transformers G1 Bumblebee Fusca - Estrela Anos 80 (Para Restauro)',
    description: `${HEADER_DESC}Vendo Transformers Bumblebee (Fusca) original da Estrela (anos 80), ideal para retirada de peças ou restauro.

DETALHES:
* Marca: Estrela S.A. (estampado no chassi).
* Mecanismo de transformação das pernas e braços funcionando.
* ATENÇÃO: A cabeça NÃO é original, está solta e vai junto apenas para completar o robô.
* Cromados das rodas com desgaste natural do tempo.`,
    price: 70.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/03.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/04.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/bumblebee_estrela/05.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 11000,
    keywords: ['transformers', 'bumblebee', 'fusca', 'estrela', 'anos 80', 'vintage', 'robô', 'restauro', 'brinquedo antigo']
  },
  {
    id: 'diaclone-police-countach-1982',
    name: 'Raro Takara Diaclone Police Countach 1982 (Pre-Transformer Sunstreaker) - Japan',
    description: `${HEADER_DESC}Oportunidade única para colecionadores de G1 e Diaclone. Vendo figura original Takara Diaclone Car Robot No. 3 - Countach Patrol Car (versão japonesa da polícia).

Este é o modelo "Pre-Transformer" que deu origem ao molde do Sunstreaker, mas na versão exclusiva de polícia que nunca foi lançada pela Hasbro no ocidente. Fabricado no Japão (aprox. 1982/1983).

Detalhes do Item:
* Fabricante: Takara - Made in Japan (gravado no chassi).
* Integridade: Mecanismo de transformação funciona, mas falta parte de um dos braços.
* Reparos: Possui reparos caseiros antigos nas articulações (pinos substituídos por palitos).
* Estética: Plástico com amarelamento do tempo. Adesivos originais "Polis Countach" e "Carrorobot" presentes, com desgastes naturais.
* Acessórios: Não acompanha armas ou piloto.`,
    price: 300.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_branco/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_branco/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_branco/03.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_branco/04.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/diaclone_branco/05.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 10000,
    keywords: ['diaclone', 'takara', 'transformers', 'vintage', 'countach', 'sunstreaker', 'raridade', 'japão', 'anos 80', 'colecionador']
  },
  {
    id: 'tv-philco-ford-vintage-amarela',
    name: 'TV Vintage Philco-Ford Amarela Space Age - Decoração (Londrina)',
    description: `${HEADER_DESC}Vendo rara TV portátil da marca Philco-Ford, modelo icônico da década de 1970. Uma verdadeira peça de história e design "Space Age".

Ideal para: Colecionadores, decoração de ambientes retrô, cenografia e vitrines.

Destaques:
* Design futurista na cor Amarelo/Mostarda (rara).
* Estrutura íntegra, botões originais.
* Liga e acende (chuvisco), vendida como item decorativo.
* Atenção: Envio em embalagem extremamente protegida.`,
    price: 349.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/03.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/tv_philco_ford/04.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now(),
    keywords: ['tv antiga', 'philco', 'vintage', 'space age', 'decoração', 'amarela', 'anos 70', 'cenografia']
  },
  {
    id: 'mjolnir-thor-low-cost',
    name: 'Martelo Mjolnir Thor Plástico - Fantasia Barato (Londrina)',
    description: `${HEADER_DESC}Martelo do Thor versão simples (brinquedo plástico). 

Ideal para completar fantasia de última hora, cosplay infantil ou decoração geek de baixo custo. Leve e seguro para crianças.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/martelo_thor/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 100,
    keywords: ['thor', 'martelo', 'mjolnir', 'fantasia', 'cosplay', 'brinquedo', 'vingadores']
  },
  {
    id: 'tait-speaker-tmaa10',
    name: 'Alto-Falante Tait Padrão Industrial p/ Rádio PX - Novo (Londrina)',
    description: `${HEADER_DESC}Alto-falante remoto original Tait Communications (TMAA10). Equipamento NOVO, padrão industrial/militar.

* Áudio cristalino e altíssimo volume (ideal para ambientes barulhentos, caminhões, obras).
* Durabilidade extrema.
* Acompanha suporte de metal e cabo longo.
* Compatível com rádios Motorola, Yaesu, Icom, PX/PY.`,
    price: 170.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/speaker_tait/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/speaker_tait/02.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 200,
    keywords: ['tait', 'alto-falante', 'radioamador', 'px', 'py', 'caminhoneiro', 'industrial', 'tmaa10']
  },
  {
    id: 'chaleira-smartfy-inox',
    name: 'Chaleira Elétrica Inox 1.8L 110v - Nova (Retira Londrina)',
    description: `${HEADER_DESC}Jarra Elétrica Smartfy Inox 1.8 Litros (110v). Produto NOVO na caixa.

* Potência: 1500W (Ferve muito rápido).
* Acabamento em Inox (mais higiênico e durável que plástico).
* Desligamento automático.
* Preço de oportunidade para desocupar espaço.`,
    price: 50.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/chaleira_smartfy/01.webp',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/chaleira_smartfy/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 300,
    keywords: ['chaleira elétrica', 'inox', '110v', 'cozinha', 'eletrodoméstico', 'café', 'chá', 'novo']
  },
  {
    id: 'comando-arcade-sanwa-vermelho',
    name: 'Comando Arcade Sanwa Vermelho - Fliperama (Londrina/Envio)',
    description: `${HEADER_DESC}Controle para Arcade/Fliperama tipo Sanwa JLF (Padrão Japonês). NOVO.

* Balltop Vermelha.
* Alta precisão para jogos de luta e shmups.
* Clique dos microswitches macio e responsivo.
* Acompanha restritor octogonal/quadrado.`,
    price: 60.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/03.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/comando_sanwa/04.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 400,
    keywords: ['arcade', 'fliperama', 'sanwa', 'stick', 'controle', 'games', 'retrogaming', 'luta']
  },
  {
    id: 'mimo-convert-locomotiva',
    name: 'Robô GoBots Loco Mimo Anos 80 - Coleção (Retira ou Envio)',
    description: `${HEADER_DESC}Clássico da Mimo (Convert) anos 80, versão brasileira dos GoBots. Modelo "Loco" (Locomotiva).

* Item original de época.
* Transforma perfeitamente.
* Ideal para colecionadores de brinquedos nacionais antigos.
* Estado: "Played condition" (com marcas do tempo, veja fotos).`,
    price: 89.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mimo_convert/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mimo_convert/02.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 500,
    keywords: ['mimo', 'convert', 'gobots', 'transformers', 'anos 80', 'vintage', 'robô', 'trem']
  },
  {
    id: 'patins-inline-ajustavel',
    name: 'Patins In Line Ajustável 34-36 Preto - Retira Londrina',
    description: `${HEADER_DESC}Patins Roller In-Line Ajustável (Serve do 34 ao 36). Unissex.

* Cor: Preto/Prata.
* Estado: Usado, higienizado, rodinhas em bom estado.
* Sistema de travas seguro.
* Ótimo para quem está aprendendo a patinar sem gastar muito.`,
    price: 130.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/patins_inline/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/patins_inline/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 600,
    keywords: ['patins', 'roller', 'inline', 'ajustável', '34', '35', '36', 'esporte', 'lazer']
  },
  {
    id: 'kit-guardioes-galaxia-bootleg',
    name: 'Kit Bonecos Guardiões da Galáxia (Star-Lord/Groot) - Barato',
    description: `${HEADER_DESC}Kit completo com 5 bonecos dos Guardiões da Galáxia (Versão Bootleg/Chinesa).

* Inclui: Star-Lord, Gamora, Drax, Rocket e Groot.
* Ótimo custo-benefício para decoração ou brinquedo de batalha.
* Bonecos simples, mas com visual bacana da equipe reunida.`,
    price: 45.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/guardioes_galaxia/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 700,
    keywords: ['guardiões da galáxia', 'marvel', 'bonecos', 'vingadores', 'groot', 'star lord', 'kit']
  },
  {
    id: 'casinha-passarinho-madeira',
    name: 'Casinha Passarinho Madeira Rústica - Decoração (Londrina)',
    description: `${HEADER_DESC}Casinha de passarinho artesanal em madeira maciça. 

* Acabamento em verniz escuro.
* Estilo rústico, perfeita para jardim, varanda ou área gourmet.
* Peça nova, nunca exposta ao tempo.`,
    price: 55.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/casinha_envernizada/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/casinha_envernizada/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 800,
    keywords: ['jardim', 'decoração', 'rústico', 'madeira', 'artesanato', 'paisagismo', 'passarinho']
  },
  {
    id: 'fogao-lenha-fundimig-f090',
    name: 'Fogão a Lenha Antigo Fundimig F-090 Ferro - Restauro (Londrina)',
    description: `${HEADER_DESC}Relíquia! Fogão a lenha antigo Fundimig F-090 (Número 0).

* Material: 100% Ferro Fundido.
* Ideal para: Restauração completa ou decoração de ambiente rústico/fazenda.
* Estado: Precisa de restauro (tem ferrugem e faltam peças internas), vendido no estado.
* RETIRADA APENAS EM LONDRINA (Item muito pesado).`,
    price: 1390.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/fogao_fundimig/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/cozinha/fogao_fundimig/02.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 900,
    keywords: ['fogão a lenha', 'ferro', 'antigo', 'fundimig', 'rústico', 'decoração', 'fazenda']
  },
  {
    id: 'fogao-industrial-dako-couracado',
    name: 'Fogão Industrial Dako Couraçado Ferro Puro - Vintage (Londrina)',
    description: `${HEADER_DESC}Fogão Industrial Clássico Dako Couraçado. O "tanque de guerra" das cozinhas.

* Estrutura inquebrável em ferro.
* Bocas e Forno Gigante funcionando.
* Acompanha mangueira e registro.
* Marcas de uso do tempo (vintage).
* RETIRADA APENAS EM LONDRINA.`,
    price: 1250.00,
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
    createdAt: Date.now() - 1000,
    keywords: ['fogão industrial', 'dako', 'couraçado', 'restaurante', 'ferro', 'vintage', 'forno']
  },
  {
    id: 'suporte-doces-cupcakes_floral',
    name: 'Suporte Doces Cupcakes 2 Andares - Festa (Londrina)',
    description: `${HEADER_DESC}Boleira/Suporte de 2 andares para doces e salgados.

* Estilo provençal com detalhes florais.
* Desmontável e fácil de limpar.
* Perfeito para compor mesa de aniversário ou café da tarde.`,
    price: 20.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos//cozinha/suporte_frutas/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1100,
    keywords: ['festa', 'boleira', 'suporte doces', 'cupcake', 'decoração', 'mesa posta']
  },
  {
    id: 'mini-aquaterrario-decorado-betta',
    name: 'Mini Aquário Terrário Decorado Betta - Vidro (Londrina)',
    description: `${HEADER_DESC}Mini Aquaterrário pronto para uso.

* Medidas: 19x13x13cm.
* Decoração fixa incluída (pedras e plantas artificiais).
* Plataforma seca (ideal para pequenas tartarugas ou rãs).
* Ótimo para peixe Betta.`,
    price: 40.00,
    category: 'Pets',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/aquario_beta/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1200,
    keywords: ['aquário', 'betta', 'terrário', 'peixe', 'pets', 'decoração', 'tartaruga']
  },
  {
    id: 'kit-cozinha-barbie-vintage',
    name: 'Lote Miniaturas Cozinha Barbie Vintage Anos 80 - Raro',
    description: `${HEADER_DESC}Lote de colecionador! Miniaturas originais da Barbie Estrela (Anos 80/90).

* Inclui: Caixinhas de leite/suco (Elefanta), Batedeira, Máquina de Costura.
* Peças raras para completar cenários vintage ou dioramas.`,
    price: 19.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_minicozinha/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_minicozinha/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1300,
    keywords: ['barbie', 'estrela', 'vintage', 'miniatura', 'cozinha', 'anos 80', 'coleção']
  },
  {
    id: 'mesa-cadeiras-barbie',
    name: 'Mesa Jantar Boneca Barbie + 4 Cadeiras Pink - Novo',
    description: `${HEADER_DESC}Conjunto Sala de Jantar Crystal Doll.

* 1 Mesa com acabamento glitter.
* 4 Cadeiras Pink.
* Tamanho compatível com Barbie, Susi, Monster High.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/mesa_barbie/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1400,
    keywords: ['barbie', 'móveis', 'boneca', 'brinquedo', 'pink', 'casa de boneca']
  },
  {
    id: 'yamaha-clavinova-cvp',
    name: 'Piano Digital Yamaha Clavinova CVP Profissional - (Londrina)',
    description: `${HEADER_DESC}Piano Digital Yamaha Clavinova (Linha CVP).

* Teclas Pesadas (Ação de Martelo - GH).
* Som de piano de cauda incrível e centenas de outros timbres.
* Detalhe: Backlight do visor queimado (dá para ler com luz externa), restante funcionando 100%.
* Um instrumento para a vida toda.
* Aceito propostas coerentes. Retirada em Londrina.`,
    price: 8900.00,
    category: 'Instrumentos Musicais',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/03.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/instrumentos/yamaha_clavinova/04.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1500,
    keywords: ['piano', 'yamaha', 'clavinova', 'teclado', 'piano digital', 'instrumento', 'profissional']
  },
  {
    id: 'pogobol-barbie-classico',
    name: 'Pogobol Estrela Barbie Original Vintage Anos 90 (Londrina)',
    description: `${HEADER_DESC}Clássico Pogobol da Estrela - Edição Barbie.

* Original dos anos 90.
* Borracha com boa pressão, disco com marcas de uso normais.
* Item nostálgico para colecionar ou brincar.`,
    price: 15.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbie_pogobol/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbie_pogobol/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbie_pogobol/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 1600,
    keywords: ['pogobol', 'estrela', 'antigo', 'anos 90', 'barbie', 'brinquedo', 'vintage']
  },
  {
    id: 'lote-lol-surprise-completo',
    name: 'Lote 5 Bonecas LOL Surprise Originais + Acessórios (Londrina)',
    description: `${HEADER_DESC}Lote de desapego LOL Surprise!

* 5 Bonecas originais (incluindo raras com glitter).
* Vários acessórios (roupas, sapatos, mamadeiras).
* Acompanha bola original.
* Preço para levar tudo de uma vez.`,
    price: 85.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_lol/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_lol/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_lol/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1700,
    keywords: ['lol surprise', 'boneca', 'lote', 'brinquedo', 'menina', 'coleção']
  },
  {
    id: 'bandai-dx-dodekabutak-vintage',
    name: 'Boneco Bandai Kabutack 1997 Raro - Retira Londrina ou Envio',
    description: `${HEADER_DESC}Raridade! Robô DX Dodekabutak Bandai Japan (1997).

* Série B-Robo Kabutack (Metal Hero).
* Transforma de Besouro para Robô (Mecanismo Super Change 100%).
* Muito conservado, pintura brilhante.
* Essencial para colecionador de Tokusatsu.`,
    price: 65.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/robo_kabutak/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/robo_kabutak/02.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1800,
    keywords: ['bandai', 'kabutack', 'tokusatsu', 'robot', 'vintage', 'anos 90', 'japão', 'raro']
  },
  {
    id: 'cavalo-madeira-balanco',
    name: 'Cavalinho de Balanço Madeira Maciça - Decoração Infantil (Londrina)',
    description: `${HEADER_DESC}Cavalinho de Balanço Tradicional.

* Feito em Madeira de Lei Maciça (muito resistente e pesado).
* Estilo retrô, lindo para decorar quarto infantil ou para fotos.
* Brinquedo eterno, dura gerações.`,
    price: 75.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/cavalo_madeira/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/cavalo_madeira/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/cavalo_madeira/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1900,
    keywords: ['cavalinho', 'madeira', 'balanço', 'brinquedo educativo', 'decoração', 'rústico', 'infantil']
  },
  {
    id: 'stacie-suco-playset',
    name: 'Playset Barbie Stacie Barraca de Suco - Completo Mattel',
    description: `${HEADER_DESC}Playset Original Barbie Stacie "Barraca de Sucos".

* Inclui: Boneca Stacie, Quiosque, Liquidificador, Copos e Cachorrinho.
* Tudo original Mattel e em perfeito estado.
* Lindo presente.`,
    price: 65.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/stacie_suco/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2000,
    keywords: ['barbie', 'stacie', 'playset', 'boneca', 'suco', 'mattel', 'brinquedo']
  },
  {
    id: 'gaiola-calopsita',
    name: 'Gaiola Chalé Grande Branca p/ Calopsita - (Londrina)',
    description: `${HEADER_DESC}Gaiola Modelo Chalé Jardim.

* Espaçosa, ideal para Calopsitas, Agapornis ou Periquitos.
* Bandeja removível (fácil limpeza).
* Cor branca. Acompanha poleiros.`,
    price: 75.00,
    category: 'Pets',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/gaiola_calopsita/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/gaiola_calopsita/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/pets/gaiola_calopsita/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2100,
    keywords: ['gaiola', 'calopsita', 'viveiro', 'pássaro', 'pets', 'aves']
  },
  {
    id: 'globo-pera-luminaria',
    name: 'Globo Cúpula Ventilador Teto Plástico - Reposição',
    description: `${HEADER_DESC}Globo/Tulipa modelo "Pera" para ventilador de teto.

* Material: Plástico (não quebra fácil como vidro).
* Boca: 10cm (Padrão universal).
* Peça de reposição nova.`,
    price: 10.00,
    category: 'Decoração',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/globo_pera/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/deco/globo_pera/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2200,
    keywords: ['globo', 'luminária', 'ventilador', 'reparo', 'casa', 'iluminação']
  },
  {
    id: 'fogao-venax',
    name: 'Fogão Cooktop Portátil Venax 4 Bocas Inox - Camping (Londrina)',
    description: `${HEADER_DESC}Fogão de Mesa Venax 4 Bocas Inox.

* Funcionando perfeitamente (Gás GLP).
* Acendimento automático.
* Leve e portátil: Ideal para quiosque, camping ou cozinha compacta.
* Acabamento inox bonito.`,
    price: 189.00,
    category: 'Cozinha',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/eletro/fogareiro_venax/01.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/eletro/fogareiro_venax/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/eletro/fogareiro_venax/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2300,
    keywords: ['fogão', 'cooktop', 'venax', 'camping', 'portátil', 'inox', '4 bocas']
  },
  {
    id: 'repetidor-tplink',
    name: 'Repetidor Wi-Fi TP-Link 300Mbps - Funciona 100% (Londrina)',
    description: `${HEADER_DESC}Repetidor TP-Link TL-WA850RE.

* Amplia o sinal do Wi-Fi para quartos "mortos".
* Velocidade 300Mbps.
* Bivolt.
* Testado e funcionando perfeitamente.`,
    price: 40.00,
    category: 'Info Eletrônicos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/informatica/repetidor_tp-link/01.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2400,
    keywords: ['wifi', 'repetidor', 'internet', 'tp-link', 'wireless', 'rede']
  },
  {
    id: 'batgirl-jato',
    name: 'Boneca Batgirl + Jato Mattel Original - Barato (Londrina/Envio)',
    description: `${HEADER_DESC}Kit DC Super Hero Girls Mattel.

* Boneca Batgirl Articulada (15cm).
* Nave Bat-Jato (com rodas).
* Brinquedo robusto e original. Ótimo estado.`,
    price: 50.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/batgirl_jato/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/batgirl_jato/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2500,
    keywords: ['batgirl', 'dc', 'super hero girls', 'boneca', 'brinquedo', 'mattel']
  },
  {
    id: 'lote-ferramentas-massinha',
    name: 'Lote Acessórios Massinha Play-Doh Cortadores e Moldes',
    description: `${HEADER_DESC}Saco cheio de ferramentas para massinha!

* Vários cortadores, rolinhos, faquinhas e moldes.
* Compatível com Play-Doh e massas escolares.
* *Não acompanha a massa, apenas os acessórios.*`,
    price: 40.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_massinha/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_massinha/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/kit_massinha/03.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2600,
    keywords: ['massinha', 'play-doh', 'moldes', 'brinquedo educativo', 'artes']
  },
  {
    id: 'lote-polly-pocket',
    name: 'Lote Polly Pocket 4 Bonecas + Closet Roupas - Barato',
    description: `${HEADER_DESC}Kit Polly Pocket Fashion.

* 4 Bonecas Polly.
* 1 Closet expositor.
* Várias roupinhas emborrachadas, bolsas e sapatos.
* Diversão garantida.`,
    price: 60.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/lote_polly/01.png'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2700,
    keywords: ['polly', 'polly pocket', 'boneca', 'lote', 'roupinhas', 'fashion']
  },
  {
    id: 'panelinhas-metal',
    name: 'Kit Panelinhas Brinquedo Metal Inox Realista - MasterChef Kids',
    description: `${HEADER_DESC}Kit de Cozinha Infantil Luxo.

* Feitas em METAL (tipo Inox), não quebram como as de plástico.
* Muito realistas (Miniaturas perfeitas).
* Inclui panelas, escorredor e talheres.`,
    price: 49.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/panelinhas_metal/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/panelinhas_metal/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/panelinhas_metal/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2800,
    keywords: ['cozinha', 'brinquedo', 'panelinhas', 'metal', 'inox', 'masterchef']
  },
  {
    id: 'barbie-salao-pia',
    name: 'Pia Lavatório Salão Barbie Glamour - Cuba Glitter Mattel',
    description: `${HEADER_DESC}Acessório para Casa da Barbie.

* Pia de Salão de Beleza.
* Cuba com glitter e armário funcional.
* Produto original Mattel.`,
    price: 25.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/barbiesalao/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/barbiesalao/02.jpg'
    ],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 2900,
    keywords: ['barbie', 'móveis', 'salão', 'brinquedo', 'boneca']
  },
  {
    id: 'army-men-toy-story',
    name: 'Soldadinhos Army Men Toy Story Disney Pixar Originais - Lote',
    description: `${HEADER_DESC}O pelotão do Toy Story!

* Soldadinhos "Army Men" ORIGINAIS Disney/Pixar (tem a marca gravada na base).
* Plástico de alta qualidade e poses fiéis ao filme.
* Item de colecionador.`,
    price: 49.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/armymen/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/armymen/02.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/armymen/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3000,
    keywords: ['toy story', 'soldadinho', 'army men', 'disney', 'pixar', 'coleção']
  },
  {
    id: 'baby-alive-festa-massas',
    name: 'Boneca Baby Alive Festa das Massas - Completa (Retira Londrina)',
    description: `${HEADER_DESC}Baby Alive Interativa (Come e Faz Caquinha).

* Modelo: Festa das Massas.
* Funcionando perfeitamente.
* Acompanha acessórios originais.
* Cabelo e rosto impecáveis.`,
    price: 120.00,
    category: 'Brinquedos',
    images: [
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/babyalive/01.png',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/babyalive/02.jpg',
      'https://cdn.jsdelivr.net/gh/cristianorohling/Desapegos/brinquedos/babyalive/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3100,
    keywords: ['baby alive', 'hasbro', 'boneca', 'interativa', 'massinha', 'brinquedo']
  }
];

export const WHATSAPP_NUMBER = "5543991223034";
export const NEIGHBORHOOD = "San Fernando";
export const FB_MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/100001551016902/";