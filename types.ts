export type Category = "Brinquedos" | "Decoração" | "Pets" | "Cozinha" | "Info Eletrônicos" | "Instrumentos Musicais";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
  isSold: boolean;
  isHighlighted: boolean;
  keywords?: string[];
  createdAt: number;
}