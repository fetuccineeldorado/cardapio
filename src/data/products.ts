import { Product } from '@/types';

export const products: Product[] = [
  // Hambúrgueres
  {
    id: 'burger-1',
    name: 'X-Burger Clássico',
    description: 'Pão, carne 180g, queijo, alface, tomate e molho especial',
    price: 25.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    category: 'burgers',
    available: true,
  },
  {
    id: 'burger-2',
    name: 'X-Bacon',
    description: 'Pão, carne 180g, queijo, bacon crocante, cebola caramelizada',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500',
    category: 'burgers',
    available: true,
  },
  {
    id: 'burger-3',
    name: 'X-Salada Premium',
    description: 'Pão integral, carne 180g, queijo, alface, tomate, pepino e molho',
    price: 27.90,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500',
    category: 'burgers',
    available: true,
  },

  // Pizzas
  {
    id: 'pizza-1',
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela, tomate, manjericão e azeite',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500',
    category: 'pizzas',
    available: true,
  },
  {
    id: 'pizza-2',
    name: 'Pizza Pepperoni',
    description: 'Molho de tomate, mussarela e generosas fatias de pepperoni',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
    category: 'pizzas',
    available: true,
  },
  {
    id: 'pizza-3',
    name: 'Pizza Quatro Queijos',
    description: 'Mussarela, provolone, gorgonzola e parmesão',
    price: 52.00,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96800?w=500',
    category: 'pizzas',
    available: true,
  },

  // Bebidas
  {
    id: 'drink-1',
    name: 'Coca-Cola Lata',
    description: 'Coca-Cola 350ml gelada',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500',
    category: 'drinks',
    available: true,
  },
  {
    id: 'drink-2',
    name: 'Suco Natural',
    description: 'Suco natural de laranja 500ml',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500',
    category: 'drinks',
    available: true,
  },
  {
    id: 'drink-3',
    name: 'Água Mineral',
    description: 'Água mineral sem gás 500ml',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500',
    category: 'drinks',
    available: true,
  },

  // Sobremesas
  {
    id: 'dessert-1',
    name: 'Brownie com Sorvete',
    description: 'Brownie de chocolate com sorvete de baunilha',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500',
    category: 'desserts',
    available: true,
  },
  {
    id: 'dessert-2',
    name: 'Cheesecake',
    description: 'Cheesecake tradicional com calda de frutas vermelhas',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500',
    category: 'desserts',
    available: true,
  },

  // Saladas
  {
    id: 'salad-1',
    name: 'Salada Caesar',
    description: 'Alface romana, croutons, parmesão e molho caesar',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500',
    category: 'salads',
    available: true,
  },
  {
    id: 'salad-2',
    name: 'Salada Tropical',
    description: 'Mix de folhas, manga, abacaxi, castanhas e molho de maracujá',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    category: 'salads',
    available: true,
  },
];
