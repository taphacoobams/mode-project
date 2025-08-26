import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
// import WhatsAppButton from './WhatsAppButton'; // Non utilisé

const QuickView = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="p-0 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Main image */}
        <div className="md:flex-1">
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Product info */}
        <div className="p-6 md:w-1/3 flex flex-col justify-center">
          <h2 className="text-2xl font-heading font-bold text-kc-black mb-2">{product.name}</h2>
          
          <div className="mb-4">
            <p className="text-sm text-gray-500">Stock: <span className="text-green-600">En stock</span></p>
          </div>
          
          <div className="mb-6">
            {product.subcategory === 'chemises' || product.hasDiscount ? (
              <div className="flex items-center gap-3">
                <p className="text-2xl font-semibold text-kc-gold">{product.discountedPrice || '15 000 FCFA'}</p>
                <p className="text-lg text-gray-500 line-through">{product.originalPrice || '25 000 FCFA'}</p>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">-40%</span>
              </div>
            ) : (
              <p className="text-2xl font-semibold text-kc-gold">{product.price}</p>
            )}
          </div>
          
          {product.description && (
            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              {product.description}
            </p>
          )}
          
          <Link 
            to={`/product/${product.reference.toLowerCase()}`}
            className="inline-block bg-kc-gold hover:bg-kc-gold/90 text-kc-black py-3 px-6 text-sm uppercase tracking-wider font-medium w-full text-center"
          >
            Voir les détails
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default QuickView;
