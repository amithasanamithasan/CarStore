/**
 * Enum representing car categories.
 */
export enum CarCategory {
  Sedan = 'Sedan',
  SUV = 'SUV',
  Truck = 'Truck',
  Coupe = 'Coupe',
}

export type Car = {
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  price: number;
  category: CarCategory;
  description?: string;
  quantity: number;
  inStock?: boolean;
};
