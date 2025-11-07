'use client';

import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { restaurantConfig } from '@/data/config';
import { FiShoppingCart, FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function Cart() {
  const { cart, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const totalWithDelivery = totalPrice + restaurantConfig.deliveryFee;

  const sendToWhatsApp = () => {
    if (!customerName || !customerAddress || !paymentMethod) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (totalPrice < restaurantConfig.minimumOrder) {
      alert(`Pedido mínimo de R$ ${restaurantConfig.minimumOrder.toFixed(2)}`);
      return;
    }

    let message = `🍽️ *NOVO PEDIDO* 🍽️\n\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    message += `📍 *Endereço:* ${customerAddress}\n`;
    message += `💳 *Pagamento:* ${paymentMethod}\n\n`;
    message += `*--- ITENS ---*\n\n`;

    cart.forEach((item) => {
      message += `▪️ *${item.quantity}x ${item.name}*\n`;
      message += `   R$ ${item.price.toFixed(2)} cada\n`;
      if (item.observations) {
        message += `   📝 Obs: ${item.observations}\n`;
      }
      message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `*--- RESUMO ---*\n`;
    message += `Subtotal: R$ ${totalPrice.toFixed(2)}\n`;
    message += `Taxa de entrega: R$ ${restaurantConfig.deliveryFee.toFixed(2)}\n`;
    message += `*TOTAL: R$ ${totalWithDelivery.toFixed(2)}*\n\n`;
    message += `Obrigado pela preferência! 🙏`;

    const whatsappUrl = `https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Limpar carrinho após enviar
    clearCart();
    setCustomerName('');
    setCustomerAddress('');
    setPaymentMethod('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Flutuante do Carrinho */}
      {totalItems > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-all z-50 flex items-center gap-3"
        >
          <FiShoppingCart size={24} />
          <span className="font-bold text-lg">{totalItems}</span>
          <span className="font-bold">R$ {totalPrice.toFixed(2)}</span>
        </button>
      )}

      {/* Modal do Carrinho */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full md:max-w-2xl md:rounded-lg max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-primary-600 text-white p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FiShoppingCart size={24} />
                Seu Pedido ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
              </h2>
              <button onClick={() => setIsOpen(false)} className="hover:bg-primary-700 p-2 rounded">
                <FiX size={24} />
              </button>
            </div>

            <div className="p-4">
              {/* Itens do Carrinho */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded-lg">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
                      {item.observations && (
                        <p className="text-xs text-gray-500 mt-1">Obs: {item.observations}</p>
                      )}

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                        >
                          <FiMinus size={16} />
                        </button>
                        <span className="font-bold px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                        >
                          <FiPlus size={16} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-600 hover:text-red-700"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-primary-600">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Formulário de Dados */}
              <div className="space-y-3 mb-6 border-t pt-4">
                <h3 className="font-bold text-gray-800 mb-3">Dados para Entrega</h3>

                <input
                  type="text"
                  placeholder="Seu nome *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />

                <textarea
                  placeholder="Endereço completo (Rua, número, bairro, complemento) *"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={3}
                />

                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                >
                  <option value="">Forma de pagamento *</option>
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="Cartão de Débito">Cartão de Débito</option>
                  <option value="Cartão de Crédito">Cartão de Crédito</option>
                  <option value="PIX">PIX</option>
                </select>
              </div>

              {/* Resumo */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span className="font-semibold">R$ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxa de entrega:</span>
                  <span className="font-semibold">R$ {restaurantConfig.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                  <span>Total:</span>
                  <span className="text-primary-600">R$ {totalWithDelivery.toFixed(2)}</span>
                </div>

                {totalPrice < restaurantConfig.minimumOrder && (
                  <p className="text-sm text-red-600 mt-2">
                    Pedido mínimo: R$ {restaurantConfig.minimumOrder.toFixed(2)}
                  </p>
                )}
              </div>

              {/* Botão Enviar */}
              <button
                onClick={sendToWhatsApp}
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp size={24} />
                Enviar Pedido pelo WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
