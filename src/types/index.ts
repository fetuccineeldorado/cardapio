export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
  observations?: string;
}

export interface RestaurantConfig {
  name: string;
  whatsappNumber: string;
  logo?: string;
  primaryColor: string;
  welcomeMessage: string;
  deliveryFee: number;
  minimumOrder: number;
}
