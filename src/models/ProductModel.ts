export interface ProductModel {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  inventory: number;
  image: string;
  rating?: number;
}
