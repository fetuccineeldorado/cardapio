import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';

export const metadata: Metadata = {
  title: 'Cardápio Digital - Sabor & Arte',
  description: 'Faça seu pedido e receba em casa!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
