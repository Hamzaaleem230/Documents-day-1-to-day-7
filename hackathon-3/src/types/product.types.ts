
export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'tshirt' | 'short' | 'jeans' | 'hoodie' | 'shirt';
  discountPercent: number;
  new: boolean;
  colors: string[];
  sizes: string[];
}