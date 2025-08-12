import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiChevronLeft, FiChevronRight, FiEye, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import QuickView from '../ui/QuickView';
import { getFilteredProducts, getPaginatedProducts } from '../../utils/productUtils';

const ProductGrid = ({ category, subcategory, sortBy }) => {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  useEffect(() => {
    // Utiliser les fonctions utilitaires pour filtrer les produits
    const filtered = getFilteredProducts(category, subcategory, sortBy);
    
    // Afficher tous les produits filtrés sans pagination
    setFilteredProducts(filtered);
  }, [category, subcategory, sortBy]);

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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={item}
                className="bg-white shadow-md overflow-hidden group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <Link to={`/nos-creations/homme/${product.id.toString()}`}>
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </Link>
                  
                  {/* Boutons d'action */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-kc-gold hover:text-kc-black transition-colors"
                      aria-label={`Aperçu rapide de ${product.name}`}
                    >
                      <FiEye size={18} />
                    </button>
                  </div>
                  
                  <Link 
                    to={`/nos-creations/homme/${product.id.toString()}`}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-kc-gold text-kc-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-kc-gold/80"
                    aria-label={`Voir ${product.name}`}
                  >
                    <FiArrowRight size={16} />
                  </Link>
                </div>
                <div className="p-4">
                  <Link to={`/nos-creations/homme/${product.id.toString()}`}>
                    <h3 className="text-lg font-medium text-kc-black mb-2 hover:text-kc-gold transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-kc-gold font-semibold">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination supprimée - tous les produits sont affichés sur une seule page */}
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

export default ProductGrid;
