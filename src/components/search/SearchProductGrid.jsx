import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiEye, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import QuickView from '../ui/QuickView';

const SearchProductGrid = ({ searchResults }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  // Pas besoin de détecter la taille de l'écran car nous n'utilisons plus cette information
  
  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

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
      {searchResults.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-heading font-medium text-kc-black dark:text-kc-white mb-4">Aucun produit trouvé</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Essayez de modifier vos termes de recherche ou consultez nos catégories.
          </p>
        </div>
      ) : (
        <>
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          >
            {searchResults.map((product) => (
              <motion.div 
                key={product.id} 
                variants={item}
                className="bg-white shadow-md overflow-hidden group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden aspect-square bg-gray-50">
                  <Link to={`/product/${product.reference?.toLowerCase() || product.id}`}>
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-cover md:object-contain transition-transform duration-700 group-hover:scale-105"
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
                    <a
                      href={`https://wa.me/221784631010?text=${encodeURIComponent(`Bonjour, je vous contacte depuis votre site Khalil Collection\n\nJe suis intéressé(e) par ce produit: ${product.reference?.toUpperCase() || product.id} sur https://khalil-collection.vercel.app/product/${product.reference?.toLowerCase() || product.id}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-green-500 shadow-md flex items-center justify-center hover:bg-green-600 text-white transition-colors"
                      aria-label={`Commander ${product.name} via WhatsApp`}
                    >
                      <FaWhatsapp size={18} />
                    </a>
                  </div>
                  
                  <Link 
                    to={`/product/${product.reference?.toLowerCase() || product.id}`}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-kc-gold text-kc-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-kc-gold/80"
                    aria-label={`Voir ${product.name}`}
                  >
                    <FiArrowRight size={16} />
                  </Link>
                </div>
                <div className="p-2 sm:p-4">
                  <Link to={`/product/${product.reference?.toLowerCase() || product.id}`}>
                    <h3 className="text-xs sm:text-sm md:text-lg font-medium text-kc-black mb-1 sm:mb-2 hover:text-kc-gold transition-colors line-clamp-2">{product.name}</h3>
                  </Link>
                  <p className="text-kc-gold font-semibold text-xs sm:text-sm md:text-base">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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

export default SearchProductGrid;
