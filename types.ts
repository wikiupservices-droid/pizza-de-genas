export enum PizzaBase {
  TOMATO = 'Base Tomate',
  CREAM = 'Base Crème',
  CALZONE = 'Calzone',
  DRINKS = 'Boissons'
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients?: string[];
  description?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  title: PizzaBase;
  items: MenuItem[];
}

export interface Deal {
  title: string;
  description: string;
  price?: number;
  condition?: string;
}