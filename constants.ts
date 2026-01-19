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
  // --- DESTAQUES (NOVOS) ---
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
- Vendido no estado em que se encontra.

Palavras-chave: glasslite, escort XR3, carro comando, polícia, brinquedo vintage, colecionável.`,
    price: 89.00,
    category: 'Brinquedos',
    images: [
      `${IMG_BASE_URL}/brinquedos/carro_comando/01.png`,
      `${IMG_BASE_URL}/brinquedos/carro_comando/02.png`,
      `${IMG_BASE_URL}/brinquedos/carro_comando/03.png`,
      `${IMG_BASE_URL}/brinquedos/carro_comando/04.jpg`
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 150000,
    keywords: ['glasslite', 'escort', 'policia', 'antigo', 'brinquedo', 'vintage']
  },
  {
    id: 'jazz-bootleg-pontiac',
    name: 'Robô Transformável Estilo Transformers Jazz (Filme) - Pontiac Solstice Prata',
    description: `${HEADER_DESC}AVISO: NÃO É ORIGINAL! Trata-se de um bootleg. Boneco transformável inspirado no personagem Jazz do filme Transformers 2007. Ótimo para coleção alternativa, exibição ou brincadeira.

🤖 Destaques:
- Modo veículo: Pontiac Solstice prateado.
- Tipo: versão alternativa/genérica (bootleg).
- Escala Legends, tamanho compacto.
- Condição: novo, sem uso, articulações firmes.

➡️ Indicado para fãs de Transformers, colecionadores de versões alternativas e quem busca item raro de mercado paralelo. Use termos de busca como Jazz, Transformers, bootleg, robô, figura transformável para facilitar descoberta.`,
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

  // --- ITENS DISPONÍVEIS ---
  {
    id: 'escoteiros-mirins-colecao-rara',
    name: 'Coleção Biblioteca do Escoteiro Mirim Completa (20 Vols) + Estante Original Rara',
    description: `${HEADER_DESC}Coleção completa da Biblioteca do Escoteiro Mirim, Editora Nova Cultural, edição 1985/86. Inclui 20 volumes originais e estante de exposição rara.

📚 Por que é especial:
- Conjunto completo, difícil de encontrar à venda.
- Referência do universo Disney e literatura infantojuvenil dos anos 80.
- Ideal para colecionadores, fãs de nostalgia, decoração temática ou pesquisa histórica.

✅ Condição: conforme idade, preservada para coleção. Peso cultural e valor crescente para quem busca material raro em bom estado.

Palavras-chave: Escoteiro Mirim, coleção rara, livros vintage, Disney, coleção completa, anos 80.`,
    price: 800.00,
    category: 'Livros',
    images: [`${IMG_BASE_URL}/livros/escoteiros_mirins/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() + 20000,
    keywords: ['disney', 'coleção']
  },
  {
    id: 'chaveiro-espada-garen-lol',
    name: 'Chaveiro Espada do Garen (League of Legends) - 12cm Metal',
    description: `${HEADER_DESC}Chaveiro colecionável em metal inspirado na espada do campeão Garen, do jogo League of Legends. Acessório de 12 cm, ideal para fãs, gamers e colecionadores.

⚔️ Características:
- Material: liga de zinco metálica, acabamento resistente.
- Tamanho compacto, fácil de carregar em mochila ou chaveiro.
- Visual fiel ao universo LoL, ótimo presente geek ou item de exposição.

🔑 Use termos como League of Legends, Garen, chaveiro metálico, acessório gamer para aumentar visibilidade do anúncio.

Palavras-chave: LoL, Garen, chaveiro, metal, colecionável.`,
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
    description: `${HEADER_DESC}Miniatura colecionável do Guaraná Taí, marca clássica associada à Coca-Cola no Brasil, dos anos 80. Peça vintage rara para coleção ou decoração retrô.

🥤 Destaques:
- Originalidade: peça de época, não réplica.
- Uso: decoração temática, bar vintage, cozinha retrô, exibição em prateleiras.
- Público: colecionadores de refrigerantes, itens publicitários e memorabilia brasileira.

📝 Sugestões de busca: Guaraná Taí, miniatura vintage, Coca-Cola, item raro, anos 80, coleção publicitária.

Palavras-chave: taí, coca-cola, vintage, miniatura, colecionável.`,
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
    description: `${HEADER_DESC}Figura original Takara Diaclone Car Robot No. 3 Police Countach, 1982, Japão. Peça histórica, anterior à linha Transformers, com alto valor para colecionadores.

🚓 Por que buscar:
- Linha Diaclone: precursor dos Transformers, muito valorizado.
- Fabricação japonesa Takara, item autêntico.
- Aplicação: coleção, exposição, estudo da história dos brinquedos.

📌 Estado e raridade: peça rara no Brasil, indicada para colecionador exigente. Utilize termos Diaclone, Takara, Police Countach, vintage, G1 para facilitar descoberta.

Palavras-chave: diaclone, takara, policial, countach, colecionável.`,
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
    description: `${HEADER_DESC}TV portátil vintage Philco-Ford, design Space Age, cor amarela, década de 1970. Ícone do design industrial e cultura pop brasileira.

📺 Usos:
- Decoração retrô, cenografia, coleção de eletrônicos antigos.
- Peça de destaque em ambientes vintage, lojas temáticas, bars e estúdios.
- Referência histórica para entusiastas do design e da tecnologia de época.

📝 Observação: item já vendido; mantido para histórico e referência de catálogo.

Palavras-chave: tv vintage, Philco-Ford, anos 70, design, colecionável.`,
    price: 300.00,
    category: 'Info Eletrônicos',
    images: [`${IMG_BASE_URL}/informatica/tv_philco_ford/01.png`],
    isSold: true,
    isHighlighted: true,
    createdAt: Date.now(),
    keywords: ['tv', 'vintage', 'philco']
  },
  {
    id: 'tait-speaker-tmaa10',
    name: 'Alto-Falante Tait Padrão Industrial p/ Rádio PX',
    description: `${HEADER_DESC}Alto-falante remoto industrial original Tait Communications, ideal para rádios PX, comunicação profissional, projetos técnicos ou reposição.

🔊 Características principais:
- Construção robusta, uso industrial.
- Compatível com sistemas de comunicação profissional e radioamadorismo.
- Som claro e volume adequado para ambientes diversos.
- Item original, difícil de encontrar no Brasil.

🔧 Indicação: técnicos, entusiastas, colecionadores de equipamentos de transmissão e radioamadores.

Palavras-chave: rádio PX, alto-falante industrial, Tait, speaker, comunicação.`,
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
    description: `${HEADER_DESC}Comando joystick arcade tipo Sanwa JLF, cor vermelha, novo. Perfeito para fliperama, bartop, projeto DIY ou reposição de painel.

🕹️ Destaques:
- Alta precisão e resposta rápida, padrão Sanwa.
- Produto novo, sem uso, com boa durabilidade.
- Compatível com montagem em painel de arcade, facilmente integrado.

🎯 Público: jogadores, construtores de máquinas, oficinas de fliperama, entusiastas de retro gaming.

Palavras-chave: arcade, Sanwa, joystick, fliperama, comando novo, DIY.`,
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
    description: `${HEADER_DESC}Robô GoBots Loco, versão da Mimo Convert nos anos 80. Brinquedo vintage brasileiro de transformação, com forte apelo nostálgico e valor colecionável.

🚂 Pontos de interesse:
- Transformação locomotiva ↔ robô.
- Original da época, peça de coleção.
- Ideal para fã de GoBots, anos 80, cultura pop retro.

📌 Como usar: exibição em prateleiras temáticas, foto para catálogo vintage, presente raro para colecionador.

Palavras-chave: gobots, mimo, robô, vintage, anos 80, colecionável.`,
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
    description: `${HEADER_DESC}Patins inline ajustáveis, tamanho 34 a 36, na cor preta. Excelente opção de lazer, esporte e introdução ao patins para crianças e adolescentes.

🛼 Benefícios:
- Ajuste fácil conforme crescimento do pé.
- Estrutura resistente, uso recreativo.
- Boa escolha para presentear, escola, clube ou prática ao ar livre.

⚠️ Uso: conferir ajuste correto para segurança. Ideal para superfícies lisas e planos.

Palavras-chave: patins, inline, ajustável, 34 a 36, esporte, lazer.`,
    price: 150.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/patins_inline/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now() - 600,
    keywords: ['patins', 'esporte']
  },
  {
    id: 'yamaha-clavinova-cvp',
    name: 'Piano Digital Yamaha Clavinova CVP Profissional',
    description: `${HEADER_DESC}Piano digital Yamaha Clavinova da linha CVP, modelo profissional com teclas pesadas. Referência mundial em qualidade de piano digital para uso profissional, estúdio, escola ou residência.

🎹 Características:
- Teclas com ação pesada, sensação próxima ao piano acústico.
- Ampla variedade de timbres, recursos e controles.
- Marca Yamaha, reconhecida por durabilidade e som premium.
- Ideal para músicos, professores, estúdios, apresentações e gravações.

📌 Considerações: instrumento de alto padrão; acompanha exigências de quem busca performance e realismo.

Palavras-chave: piano digital, Clavinova, Yamaha, teclas pesadas, profissional.`,
    price: 8900.00,
    category: 'Instrumentos Musicais',
    images: [`${IMG_BASE_URL}/instrumentos/yamaha_clavinova/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1500,
    keywords: ['piano', 'yamaha']
  },
  {
    id: 'fogao-lenha-fundimig-f090',
    name: 'Fogão a Lenha Antigo Fundimig F-090 Ferro',
    description: `${HEADER_DESC}Fogão a lenha antigo Fundimig F-090, construção em ferro fundido de alta resistência. Peça clássica para cozinha rústica, sítio, fazenda ou coleção de utensílios antigos.

🔥 Vantagens:
- Estrutura robusta e durável.
- Excelente retenção de calor, ideal para uso contínuo.
- Design tradicional, combina com decoração campestre e ambientes vintage.

📝 Observação: item pesado, exige instalação adequada e espaço. Pode ser usado para refeição, decoração de restaurante temático ou acendimento em ambiente externo.

Palavras-chave: fogão a lenha, Fundimig, ferro fundido, vintage, cozinha rústica.`,
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
    description: `${HEADER_DESC}Fogão industrial clássico Dako Couraçado, fabricado em ferro puro. Modelo antigo, robusto, ideal para uso intenso, restaurante, cozinha comunitária ou decoração industrial.

🍳 Características:
- Estrutura resistente para uso frequente.
- Versão clássica, valorizada por colecionadores e profissionais.
- Ajuste e manutenção simples, com visual imponente.

📌 Uso sugerido: cozinha grande, ambiente comercial, espaço gourmet rústico ou exposições de equipamentos antigos.

Palavras-chave: fogão industrial, Dako, ferro puro, clássico, cozinha profissional.`,
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
    description: `${HEADER_DESC}Suporte para doces e cupcakes de 2 andares com estilo provençal, ideal para festas, eventos, decoração de mesa e sobremesas. Peça charmosa para uso doméstico ou comercial.

🧁 Benefícios:
- Estrutura leve e fácil de montar.
- Estilo vintage e delicado, combina com festas temáticas e decoração romântica.
- Uso em bolos, doces, cupcakes, salgadinhos ou exposição em buffet.

🔎 Público alvo: anfitriões, confeiteiras, decoradores, lojistas de festa, colecionadores de itens de cozinha decorativos.

Palavras-chave: suporte de doces, cupcake, boleira, festa, provençal.`,
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
    description: `${HEADER_DESC}Mini aquaterrário decorado pronto para uso, dimensões aproximadas 19x13x13 cm. Perfeito para peixe Betta, decoração de mesa ou ambiente compacto.

🐟 Características:
- Tamanho pequeno para espaços reduzidos.
- Visual decorado, pronto para exposição.
- Fácil manutenção; boa opção para iniciantes.
- Ideal para presentes, ambientes domésticos, escritórios, lojas ou eventos.

🔑 Dica: usar termos como aquário Betta, mini aquário, terrário decorado, decoração aquática para facilitar busca e aquisição.

Palavras-chave: aquário, peixe, Betta, mini, decoração.`,
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
    description: `${HEADER_DESC}Lote de miniaturas originais da Barbie Estrela, anos 80. Item vintage ideal para coleção de bonecas, ambientação de casa de bonecas ou decoração retrô.

🍽️ Itens e usos:
- Mini utensílios de cozinha em escala reduzida.
- Complemento perfeito para casas de boneca vintage.
- Uso em dioramas, coleções temáticas, exposição em lojas ou eventos.

🔔 Público: colecionadores Barbie, fãs de brinquedos antigos, historiadores de brinquedos e decoradores.

Palavras-chave: Barbie vintage, mini cozinha, Estrela, anos 80, lote colecionável.`,
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
    description: `${HEADER_DESC}Conjunto de mesa de jantar para boneca Barbie, com 4 cadeiras na cor pink. Modelo Crystal Doll, ideal para brincar, decorar ou colecionar.

🍽️ Características:
- Mobília em miniatura para bonecas.
- Visual vibrante e chamativo estilo Barbie.
- Ótima adição a casas de boneca, playsets e cenários de fotografia.

🔍 Sugestão de busca: mesa Barbie, móveis Barbie, Crystal Doll, conjunto de jantar, miniatura.

Palavras-chave: barbie, móveis, mesa, cadeiras, brinquedo.`,
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
    description: `${HEADER_DESC}Pogobol clássico da Estrela, edição Barbie, anos 90. Brinquedo vintage de mola para pular, colecionável e com alto apelo nostálgico.

🏃 Características:
- Design original, tamanho compacto.
- Funcionamento simples, diversão garantida.
- Ideal para colecionador, presente retrô ou jogo ao ar livre.

🔎 Termos úteis: Pogobol, Estrela, Barbie, vintage, anos 90, brinquedo colecionável.

Palavras-chave: pogobol, vintage, barbie, anos 90, brinquedo.`,
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
    description: `${HEADER_DESC}Lote com 5 bonecas LOL Surprise originais, acompanhadas de acessórios. Peça ideal para coleção, presente ou venda conjunta.

👧 Detalhes:
- Bonecas originais licenciadas.
- Vários acessórios inclusos.
- Apelo forte para crianças, adolescentes e colecionadores de brinquedos modernos.
- Boa opção para quem quer começar ou ampliar coleção LOL.

🔍 Use palavras como LOL Surprise, lote, boneca original, acessórios para melhorar visibilidade do anúncio.

Palavras-chave: lol, boneca, lote, original, colecionável.`,
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
    description: `${HEADER_DESC}Robô DX Dodekabutak, série Kabutack, Bandai Japão, 1997. Peça vintage rara para colecionadores de tokusatsu, cultura pop japonesa e brinquedos antigos.

🤖 Motivos para coleção:
- Produto original japonês, alta qualidade de fabricação.
- Série cult, pouco disponível no mercado atual.
- Excelente para exibição, dioramas, eventos de cultura pop.

📝 Termos de busca: Bandai, Kabutack, Dodekabutak, robô vintage, tokusatsu, 1997.

Palavras-chave: bandai, kabutack, vintage, robô, raro.`,
    price: 65.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/robo_kabutak/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1800,
    keywords: ['bandai', 'kabutack']
  },
  {
    id: 'cavalo-madeira-balanco',
    name: 'Cavalinho de Balanço Madeira Maciça',
    description: `${HEADER_DESC}Cavalinho de balanço tradicional, feito em madeira maciça de lei. Peça robusta e clássica para lazer infantil, decoração ou coleção de brinquedos de madeira.

🐴 Destaques:
- Madeira resistente, acabamento tradicional.
- Estilo atemporal, serve como peça de destaque em quarto infantil, sala ou área de lazer.
- Ótimo presente para crianças ou colecionadores de brinquedos artesanais.

🔑 Busca: cavalinho de balanço, madeira maciça, brinquedo artesanal, vintage, decoração infantil.

Palavras-chave: madeira, cavalinho, brinquedo, balanço, artesanal.`,
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
    description: `${HEADER_DESC}Playset original Mattel da linha Barbie Stacie, barraca de suco. Brinquedo completo para brincar, montar cenários, decorar coleção ou expor em estantes.

🍹 Características:
- Playset temático com acessórios.
- Linha oficial Barbie, qualidade Mattel.
- Atrai fãs de bonecas, colecionadores e crianças em fase de imaginação.

🔍 Termos úteis: Barbie Stacie, playset, barraca de suco, Mattel, brinquedo original.

Palavras-chave: barbie, playset, boneca, brinquedo, coleção.`,
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
    description: `${HEADER_DESC}Gaiola espaçosa, modelo chalé, cor branca, ideal para calopsitas. Perfeita para aviário doméstico, criação amadora ou observação de aves de estimação.

🐦 Benefícios:
- Espaço amplo para movimento das aves.
- Estrutura sólida, adequada para uso doméstico.
- Boa visibilidade do interior, fácil de limpar e organizar.

⚠️ Uso: certificar segurança e higiene para o bem-estar do animal. Compatível com decoração de ambientes internos e externos.

Palavras-chave: gaiola, calopsita, aves, doméstico, criação.`,
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
    description: `${HEADER_DESC}Fogão cooktop portátil Venax, 4 bocas, acabamento inox. Prático para cozinha compacta, camping, festas, quiosques ou uso temporário.

🍳 Características:
- Quatro bocas para preparo simultâneo.
- Design inox, fácil limpeza.
- Portátil, ideal para ambientes pequenos, eventos ou cozinhas secundárias.

🔔 Público: estudantes, pequenos comércios, espaços de lazer, cozinheiros amadores.

Palavras-chave: fogão portátil, Venax, inox, 4 bocas, cooktop.`,
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
    description: `${HEADER_DESC}Boneca articulada Batgirl com nave jato original Mattel. Brinquedo clássico para brincar, colecionar ou expor, com temática de super-heroína.

🦇 Destaques:
- Personagem Batgirl, linha oficial.
- Nave/jato inclusa, aumentam valor e apelo do conjunto.
- Indicado para colecionadores de produtos DC, fãs de super-heróis e crianças.

🔍 Sugestões de busca: Batgirl Mattel, boneca com jato, brinquedo original, super-heroína, coleção DC.

Palavras-chave: batgirl, mattel, brinquedo, jato, coleção.`,
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
    description: `${HEADER_DESC}Lote de acessórios para massinha Play-Doh, ideal para brincar, criar cenários e atividades sensoriais. Perfeito para escolas, festas e diversão infantil.

🧩 Vantagens:
- Peças variadas, usadas em diversas formas e jogos.
- Incentiva criatividade, coordenação motora e diversão em grupo.
- Compatível com demais kits Play-Doh e similar.

🔎 Títulos sugeridos: lote massinha, Play-Doh, acessórios, brinquedo educativo, lote infantil.

Palavras-chave: massinha, play-doh, acessórios, brinquedo, lote.`,
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
    description: `${HEADER_DESC}Lote Polly Pocket com 4 bonecas e closet, ideal para coleção, brincadeira ou exposição. Conjunto compacto e leve para fãs de miniaturas e brinquedos de moda.

👗 Características:
- Quatro bonecas em miniatura.
- Closet para arrumação e cenários de jogo.
- Fácil transporte e armazenamento.
- Atraente para crianças, colecionadores e lojistas de brinquedos.

Palavras-chave: polly pocket, lote, boneca, closet, miniatura, brinquedo.`,
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
    description: `${HEADER_DESC}Kit de panelinhas em metal inox, linha infantil realista. Excelente para brincar de cozinha, enfeitar área de brinquedos ou compor cenário de cozinha infantil.

🍲 Benefícios:
- Material metálico durável, acabamento realista.
- Estilo luxuoso para brinquedo infantil.
- Estimula brincadeiras imaginativas e aprendizagem sobre cozinha.

🔧 Sugestões de busca: panelinhas de metal, kit cozinha infantil, brinquedo realista, inox, decoração.

Palavras-chave: cozinha, panelinhas, metal, brinquedo, infantil.`,
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
    description: `${HEADER_DESC}Acessório de pia/lavatório para casa da Barbie, estilo Glamour. Complemento útil para playsets, decoração e coleção de móveis Barbie.

🚰 Detalhes:
- Peça única, compatível com casas e ambientes Barbie.
- Design glamouroso, com detalhes que destacam a ambientação.
- Valor acessório para completar cenários de salão, banheiro ou espaço de maquiagem.

🔎 Termos de busca: Pia Barbie, lavatório, acessórios Barbie, mobiliário de boneca.

Palavras-chave: barbie, móveis, pia, lavatório, brinquedo.`,
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
    description: `${HEADER_DESC}Conjunto de soldadinhos Army Men originais Disney/Pixar, da franquia Toy Story. Brinquedos de plástico para brincar, colecionar ou expor.

🪖 Destaques:
- Licença oficial Disney/Pixar.
- Peças pequenas e leves, fáceis de organizar e transportar.
- Uso em jogos de imaginação, coleção de personagens e cenários.

🔍 Palavras-chave sugeridas: Toy Story, Army Men, soldadinhos, Disney, Pixar, brinquedo original.

Palavras-chave: toy story, soldadinho, disney, pixar, brinquedo.`,
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
    description: `${HEADER_DESC}Boneca interativa Baby Alive Festa das Massas, completa com acessórios. Versão clássica para brincar, colecionar ou presentear.

👶 Funcionalidades:
- Interatividade: come e produz resíduos naturais de massinha.
- Versão completa, pronta para uso.
- Compatível com acessórios e conjuntos Baby Alive.

🎁 Público: crianças, colecionadores e fãs de brinquedos interativos.

Palavras-chave: baby alive, boneca interativa, festa das massas, brinquedo completo, coleção.`,
    price: 150.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/babyalive/01.png`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 3100,
    keywords: ['baby alive', 'boneca']
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
    createdAt: Date.now() + 11000,
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
    id: 'kit-mario-bros-mcdonalds',
    name: 'Kit Figuras Super Mario Bros - McDonald\'s',
    description: '',
    price: 100.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/kit_mario/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 7000,
    keywords: ['mario']
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
    id: 'soldados-rpg-chumbo',
    name: 'Soldados RPG em Chumbo',
    description: '',
    price: 100.00,
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
    images: ['${IMG_BASE_URL}/brinquedos/chapeu_woody/01.jpg'],
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
  }
  {
    id: 'mjolnir-thor-plastico',
    name: 'Martelo do Thor (Mjolnir) - Plástico Leve para Fantasia',
    description: `${HEADER_DESC}⚡ "Aquele que empunhar este martelo..."

Mjolnir, o Martelo do Thor.
- Material: Plástico injetado (leve e seguro).
- Uso: Ideal para compor fantasias de última hora (Cosplay simples), festas à fantasia ou decoração de estante Geek.
- Tamanho: Escala 1:1 aproximada (Brinquedo).`,
    price: 15.00,
    category: 'Brinquedos',
    images: [`${IMG_BASE_URL}/brinquedos/martelo_thor/01.png`],
    isSold: false,
    isHighlighted: false,
    createdAt: Date.now(),
    keywords: ['thor', 'marvel', 'cosplay', 'vingadores', 'martelo']
  },
  {
    id: 'repetidor-wifi-tplink',
    name: 'Repetidor de Sinal Wi-Fi TP-Link - Amplificador de Alcance',
    description: `${HEADER_DESC}📶 Chega de "zonas mortas" na sua internet!

Repetidor TP-Link.
- Função: Amplia o sinal do seu roteador para cômodos onde a Wi-Fi não chega bem.
- Instalação: Fácil configuração (Plug & Play em tomadas).
- Estado: Usado, funcionando perfeitamente.`,
    price: 50.00,
    category: 'Info Eletrônicos',
    images: [`${IMG_BASE_URL}/informatica/repetidor_tp-link/01.jpg`],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 100,
    keywords: ['wifi', 'internet', 'tp-link', 'repetidor']
  },
  {
    id: 'coruja-madeira-entalhada',
    name: 'Coruja Decorativa Entalhada em Madeira Maciça',
    description: `${HEADER_DESC}🦉 Arte Rústica.

Bela escultura de Coruja entalhada à mão em madeira.
- Detalhes em relevo.
- Peça única de artesanato.`,
    price: 50.00,
    category: 'Decoração',
    images: [`${IMG_BASE_URL}/deco/coruja_entalhada/01.png`],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 5000,
    keywords: ['artesanato', 'madeira', 'decoração', 'rústico']
  },
];

export const WHATSAPP_NUMBER = "5543991223034";
export const NEIGHBORHOOD = "San Fernando";
export const FB_MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/100001551016902/";
export const INSTAGRAM_URL = "https://www.instagram.com/novidades.e.desapegos/";
