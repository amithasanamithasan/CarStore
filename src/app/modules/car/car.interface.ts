export enum CarCategory {
  Sedan = 'Sedan',
  SUV = 'SUV',
  Truck = 'Truck',
  Coupe = 'Coupe',
  Convertible = 'Convertible',
}

export type Car = {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: CarCategory;
  description: string;
  quantity: number;
  inStock: boolean;
};
