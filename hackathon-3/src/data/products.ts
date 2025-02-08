export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  colors: string[];
  sizes: string[];
  styles: string[];
  images: string[];
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Black Pullover Hoodie",
    description: "Comfortable cotton blend hoodie in classic black",
    price: 89.99,
    category: "Hoodie",
    colors: ["black"],
    sizes: ["S", "M", "L", "XL"],
    styles: ["Casual", "Streetwear"],
    images: ["/products/hoodie-black-1.jpg"],
    tags: ["hoodie", "black", "pullover", "casual", "men", "women"]
  },
  // Add more products...
]; 