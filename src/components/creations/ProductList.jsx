import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiChevronLeft, FiChevronRight, FiEye, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import QuickView from '../ui/QuickView';
import { getFilteredProducts } from '../../utils/productUtils';

const ProductList = ({ category, subcategory, sortBy, currentPage, onPageChange }) => {
  // Mode liste - pas de pagination, affichage de tous les produits
  // Pas de pagination en mode liste - on affiche tous les produits filtrés
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const productsPerPage = 15; // Augmenté de 12 à 15 pour afficher plus de produits par page
  
  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  useEffect(() => {
    // Utiliser la fonction utilitaire pour obtenir les produits filtrés
    const filtered = getFilteredProducts(category, subcategory, sortBy);
    
    // En mode liste, on affiche TOUS les produits filtrés sans pagination
    setFilteredProducts(filtered);
    
    // On calcule quand même le nombre total de pages pour la référence
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
  }, [category, subcategory, sortBy, productsPerPage]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-heading font-medium text-kc-black mb-4">Aucun produit trouvé</h3>
          <p className="text-gray-600">
            Essayez de modifier vos filtres ou consultez nos autres catégories.
          </p>
        </div>
      ) : (
        <>
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col divide-y divide-gray-200"
          >
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={item}
                className="bg-white py-4 group hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-6">
                  {/* Image du produit */}
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Link to={`/nos-creations/homme/${product.id.toString()}`}>
                      <LazyLoadImage
                        src={product.image}
                        alt={product.name}
                        effect="blur"
                        className="w-full h-full object-cover"
                        wrapperClassName="w-full h-full"
                      />
                    </Link>
                  </div>
                  
                  {/* Informations du produit */}
                  <div className="flex-grow">
                    <Link to={`/nos-creations/homme/${product.id.toString()}`}>
                      <h3 className="text-lg font-medium text-kc-black mb-2 hover:text-kc-gold transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-kc-gold font-semibold mb-2">{product.price}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description || `${product.name} - Collection Khalil Collection. Disponible en plusieurs tailles.`}
                    </p>
                    
                    {/* Boutons d'action */}
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleQuickView(product)}
                        className="flex items-center justify-center w-8 h-8 rounded-full text-gray-600 hover:text-kc-gold hover:bg-gray-100 transition-colors"
                        aria-label={`Aperçu rapide de ${product.name}`}
                      >
                        <FiEye size={16} />
                      </button>
                      
                      <Link 
                        to={`/nos-creations/homme/${product.id.toString()}`}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-kc-gold text-kc-black hover:bg-kc-gold/80 transition-colors"
                        aria-label={`Voir les détails de ${product.name}`}
                      >
                        <FiArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pas de pagination en mode liste - tous les produits sont affichés */}
        </>
      )}
      
      {/* QuickView Modal */}
      <QuickView 
        product={quickViewProduct ? {
          ...quickViewProduct,
          // Adapter le format du produit pour le QuickView
          image: quickViewProduct.image
        } : null} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </div>
  );
};

export default ProductList;
