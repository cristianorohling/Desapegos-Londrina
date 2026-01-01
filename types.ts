
export type Category = "Brinquedos" | "Decoração" | "Pets" | "Utilidades Domésticas" | "Roupas" | "Eletrônicos" | "Móveis" | "Outros";

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

export interface AppState {
  products: Product[];
  activeCategory: Category | 'Todos';
  searchQuery: string;
  isAdminMode: boolean;
}
