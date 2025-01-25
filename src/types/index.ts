export enum Category {
  LUXURY = 'LUXURY',
  SPORT = 'SPORT',
  SUV = 'SUV'
}

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  price: string;
  specs: string[];
  available: boolean;
  category: Category;
  featured: boolean;
  description: string;
}

export interface Service {
  title: string;
  icon: unknown;
  description: string;
  features: string[];
  image: string;
}