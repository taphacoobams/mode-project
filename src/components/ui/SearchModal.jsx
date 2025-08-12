import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  // Focus on input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Search function - returns empty results as products are not available
  const handleSearch = (term) => {
    setSearchTerm(term);
    
    // No products available
    const mockProducts = [];
    
    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    // Always return empty results
    const results = [];
    
    setSearchResults(results);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          
          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg p-4"
          >
            <div className="container max-w-4xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium font-heading text-kc-black">Recherche</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-kc-black"
                  aria-label="Fermer"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              {/* Search Input */}
              <div className="relative mb-8">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full py-3 pl-4 pr-12 border border-gray-300 focus:border-kc-gold focus:outline-none"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              {/* Search Results */}
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {searchResults.map(product => (
                    <Link 
                      key={product.id}
                      to={`/nos-creations/${product.category}/${product.id}`}
                      onClick={onClose}
                      className="group"
                    >
                      <div className="aspect-square overflow-hidden bg-gray-100 mb-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="text-kc-black group-hover:text-kc-gold transition-colors">{product.name}</h3>
                      <p className="text-kc-gold font-medium">{product.price}</p>
                    </Link>
                  ))}
                </div>
              ) : searchTerm ? (
                <p className="text-center text-gray-500 py-8">Aucun résultat trouvé pour "{searchTerm}"</p>
              ) : null}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
