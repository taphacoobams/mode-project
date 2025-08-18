import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { allProducts } from '../../utils/productUtils';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  
  // Fonction pour mettre en surbrillance les caractères recherchés
  const highlightMatch = (text, searchTerm) => {
    if (!searchTerm || searchTerm.trim() === '') return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[-^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (regex.test(part)) {
        return <span key={index} className="text-kc-gold font-semibold">{part}</span>;
      }
      return part;
    });
  };

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

  // Effet pour rechercher en temps réel
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const searchTermLower = searchTerm.toLowerCase();
    
    
    // Recherche uniquement dans le nom des produits avec correspondance exacte
    const results = allProducts.filter(product => {
      // Vérifie si le produit a un nom et si ce nom contient exactement le terme recherché
      if (!product.name) return false;
      
      // Vérifie si le terme recherché est présent dans le nom du produit
      const productNameLower = product.name.toLowerCase();
      return productNameLower.indexOf(searchTermLower) !== -1;
    });
    
    setSearchResults(results);
  }, [searchTerm]);
  
  // Obtenir seulement les 6 premiers résultats pour l'affichage dans le modal
  const displayedResults = searchResults.slice(0, 6);
  
  // Reset search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
      setSearchResults([]);
    }
  }, [isOpen]);

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
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[77.7%] sm:w-96 md:w-96 bg-white z-50 shadow-lg overflow-y-auto border-l border-gray-200"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium font-heading text-kc-black">Recherche de produits</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-kc-gold"
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
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pl-4 pr-12 border border-gray-300 focus:border-kc-gold focus:outline-none text-black"
                />
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              {/* Affichage du nombre total de produits */}
              <div className="text-sm text-gray-500 mb-4">
                Nombre total de produits: <span className="font-semibold text-kc-gold">{allProducts.length}</span>
              </div>
              
              {/* Search Results */}
              {searchResults.length > 0 ? (
                <div className="pb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">{searchResults.length} résultat{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}</h3>
                  <div className="divide-y divide-gray-200">
                  {displayedResults.map(product => (
                    <Link 
                      key={product.id}
                      to={`/product/${product.reference?.toLowerCase() || product.id}`}
                      onClick={onClose}
                      className="group flex items-center gap-4 w-full py-4 px-2 hover:bg-gray-50"
                    >
                      <div className="w-20 h-20 overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h3 className="text-kc-black group-hover:text-kc-gold transition-colors">{highlightMatch(product.name, searchTerm)}</h3>
                        <p className="text-kc-gold font-medium">{product.price}</p>
                        <p className="text-xs text-gray-500">{product.category?.toUpperCase().replace(/-/g, ' ')} / {product.subcategory?.toUpperCase().replace(/-/g, ' ')}</p>
                      </div>
                    </Link>
                  ))}
                  </div>
                  
                  {searchResults.length > 6 && (
                    <div className="mt-6 text-center">
                      <button 
                        onClick={() => {
                          onClose();
                          navigate(`/search-results?q=${encodeURIComponent(searchTerm)}`);
                        }} 
                        className="px-6 py-2 bg-kc-gold text-white hover:bg-kc-gold/90 transition-colors text-sm font-medium"
                      >
                        Voir tous les {searchResults.length} résultats
                      </button>
                    </div>
                  )}
                </div>
              ) : searchTerm ? (
                <div className="py-12 text-center">
                  <p className="text-gray-400">Aucun résultat trouvé pour "{searchTerm}"</p>
                </div>
              ) : null}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
