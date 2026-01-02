export type Category = "Brinquedos" | "Decoração" | "Pets" | "Cozinha" | "Móveis" | "Informática" | "Instrumentos Musicais" | "Outros";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
  isSold: boolean;
  isHighlighted: boolean;
  createdAt: number;
}