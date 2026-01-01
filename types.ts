
export type Category = "Brinquedos" | "Decoração" | "Pets" | "Utilidades Domésticas" | "Roupas" | "Eletrônicos" | "Móveis" | "Informática" | "Outros";

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