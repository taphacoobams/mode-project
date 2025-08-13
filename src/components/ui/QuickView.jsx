import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { convertEuroToCFA } from '../../utils/priceUtils';

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
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Product info */}
        <div className="p-6 md:w-1/3 flex flex-col justify-center">
          <h2 className="text-2xl font-heading font-bold text-kc-black mb-2">{product.name}</h2>
          
          <div className="mb-4">
            <p className="text-sm text-gray-500">Stock: <span className="text-green-600">En stock</span></p>
          </div>
          
          <p className="text-2xl font-semibold text-kc-gold mb-6">{convertEuroToCFA(product.price)}</p>
          
          <Link 
            to={`/nos-creations/${product.category}/${product.id.toString()}`}
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
