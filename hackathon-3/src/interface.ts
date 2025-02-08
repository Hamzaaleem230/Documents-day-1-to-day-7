export interface Product {
    name: string; 
    category: 'tshirt' | 'short' | 'jeans' | 'hoodie' | 'shirt';
    description: string; // Product description
    image: string; // URL of the product image
    id: string; // Unique identifier for the product
    colors: ('Blue' | 'White' | 'Black' | 'Red')[]; // Array of available colors
    sizes: string[]; // Array of available sizes
    price: number; // Product price
    discountPercent: number; // Discount percentage
    isNew: boolean; // Indicates if the product is new or not
    _id: string; // Unique identifier for the product
  }
  