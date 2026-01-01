
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  "Brinquedos",
  "Decoração",
  "Pets",
  "Utilidades Domésticas",
  "Roupas",
  "Eletrônicos",
  "Móveis",
  "Outros"
];

export const INITIAL_PRODUCTS: Product[] = [
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
    createdAt: Date.now()
  },
  {
    id: 'army-men-toy-story',
    name: 'Exército de Soldadinhos Verdes Disney Pixar Toy Story - Oficiais!',
    description: `"Sentido! Batalhão, apresentar armas!"\n\nTraga a magia do quarto do Andy para sua casa com este incrível lote dos icônicos Soldadinhos Verdes!\n\nEstes não são soldadinhos genéricos. Este é um conjunto oficial Disney • Pixar, com a autenticidade gravada na base de cada peça (conforme mostrado nas fotos). São os verdadeiros heróis de Toy Story prontos para a missão!\n\nDetalhes do Conjunto:\n- Um exército de soldadinhos verdes clássicos.\n- Grande variedade de poses de combate: atirando de pé, ajoelhados, rastejando (prone), com binóculos, etc.\n- Peças originais e licenciadas.\n- Estado de conservação: Excelente, prontos para muitas horas de batalha imaginária ou para completar sua coleção.\n\nIdeal para fãs da franquia Toy Story e colecionadores da Disney.\n\nNão perca a chance de comandar este pelotão!`,
    price: 40.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/armymen/01.png',
      'https://desapegos.puter.site/brinquedos/armymen/02.png',
      'https://desapegos.puter.site/brinquedos/armymen/03.png'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 1000
  },
  {
    id: 'baby-alive-festa-massas',
    name: 'Boneca Baby Alive Festa das Massas (Hasbro) - em Ótimo Estado',
    description: `Vendo Boneca Baby Alive - Edição "Festa das Massas". A boneca é super divertida: a criança pode preparar o "macarrão" na maquininha, dar para a bebê comer e depois trocar a fraldinha.\n\nDetalhes do Brinquedo:\n\nMarca: Hasbro (Original).\n\nFunção: Acompanha uma máquina de massas que cria formatos divertidos (coração, gravatinha) ao girar a manivela.\n\nTamanho: Aproximadamente 32cm de altura.\n\nMaterial: Vinil e plástico resistente.\n\nItens Inclusos (conforme fotos):\n- Boneca com vestido removível.\n- Máquina de macarrão (cor azul).\n- Acessórios (pratinho/bandeja).\n- Pote de massinha (apenas o pote original, não acompanha a massinha).\n- Fraldinha.\n\nEstado de conservação: Produto usado, mas muito bem conservado e funcionando perfeitamente.\n\n⚠️ CONDIÇÕES DE VENDA (Leia com atenção):\n- Trocas: Não aceito trocas por outros produtos.\n- Pagamento: Dinheiro, Pix ou Cartão de Crédito/Débito (parcelo, com taxas da maquininha por conta do comprador).`,
    price: 150.00,
    category: 'Brinquedos',
    images: [
      'https://desapegos.puter.site/brinquedos/babyalive/01.png',
      'https://desapegos.puter.site/brinquedos/babyalive/02.jpg',
      'https://desapegos.puter.site/brinquedos/babyalive/03.jpg'
    ],
    isSold: false,
    isHighlighted: true,
    createdAt: Date.now() - 2000
  },
  {
    id: '11',
    name: 'Abajur Retrô de Metal',
    description: 'Luminária de mesa com design vintage industrial. Fio em tecido, bivolt. Dá um toque aconchegante em qualquer ambiente.',
    price: 110.00,
    category: 'Decoração',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400'],
    isSold: true,
    isHighlighted: false,
    createdAt: Date.now() - 11000
  }
];

export const WHATSAPP_NUMBER = "5543991167333";
