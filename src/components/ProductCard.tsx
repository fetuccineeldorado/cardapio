'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { FiPlus, FiCheck } from 'react-icons/fi';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [showObservations, setShowObservations] = useState(false);
  const [observations, setObservations] = useState('');

  const handleAddToCart = () => {
    addToCart(product, observations);
    setAdded(true);
    setObservations('');
    setShowObservations(false);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-primary-600">
            R$ {product.price.toFixed(2)}
          </span>

          {product.available ? (
            <span className="text-xs text-green-600 font-semibold">Disponível</span>
          ) : (
            <span className="text-xs text-red-600 font-semibold">Indisponível</span>
          )}
        </div>

        {showObservations && (
          <div className="mb-3">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              placeholder="Observações (ex: sem cebola, bem passado...)"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              rows={2}
            />
          </div>
        )}

        <div className="flex gap-2">
          {!showObservations && (
            <button
              onClick={() => setShowObservations(true)}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors"
              disabled={!product.available}
            >
              + Observações
            </button>
          )}

          <button
            onClick={handleAddToCart}
            disabled={!product.available}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            } disabled:bg-gray-300 disabled:cursor-not-allowed`}
          >
            {added ? (
              <>
                <FiCheck size={18} />
                Adicionado
              </>
            ) : (
              <>
                <FiPlus size={18} />
                Adicionar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
