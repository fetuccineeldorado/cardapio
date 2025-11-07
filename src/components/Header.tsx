'use client';

import React from 'react';
import { restaurantConfig } from '@/data/config';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {restaurantConfig.name}
          </h1>
          <p className="text-white/90 mb-4">
            {restaurantConfig.welcomeMessage}
          </p>

          <div className="flex items-center justify-center gap-2 text-sm">
            <FaWhatsapp size={20} />
            <span>Pedido mínimo: R$ {restaurantConfig.minimumOrder.toFixed(2)}</span>
            <span className="mx-2">•</span>
            <span>Taxa de entrega: R$ {restaurantConfig.deliveryFee.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
