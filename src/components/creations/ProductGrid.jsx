import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiEye, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import QuickView from '../ui/QuickView';
import { getFilteredProducts, getPaginatedProducts } from '../../utils/productUtils';

const ProductGrid = ({ category, subcategory, sortBy, currentPage = 1, onPageChange, priceFilter }) => {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState({});
  const productsPerPage = 12; // 12 articles par page
  
  // Détecter la taille de l'écran
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier la taille initiale
    checkScreenSize();
    
    // Ajouter un écouteur d'événement pour les changements de taille
    window.addEventListener('resize', checkScreenSize);
    
    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const handleQuickView = (product, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };
  
  // Gérer le survol ou le clic selon le type d'appareil
  const handleMouseEnter = (productId) => {
    if (!isMobile) {
      setIsHovering(prev => ({ ...prev, [productId]: true }));
    }
  };
  
  const handleMouseLeave = (productId) => {
    if (!isMobile) {
      setIsHovering(prev => ({ ...prev, [productId]: false }));
    }
  };
  
  const handleProductClick = (productId) => {
    if (isMobile) {
      setIsHovering(prev => {
        const newState = { ...prev };
        // Réinitialiser tous les autres produits
        Object.keys(newState).forEach(key => {
          newState[key] = false;
        });
        // Activer uniquement le produit cliqué
        newState[productId] = !prev[productId];
        return newState;
      });
    }
  };
  

  const handlePageChange = (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };

  useEffect(() => {
    
    // Utiliser les fonctions utilitaires pour filtrer les produits
    let filtered = getFilteredProducts(category, subcategory, sortBy);
    
    // Appliquer le filtre de prix si défini
    if (priceFilter) {
      // Filtre pour "Prix sur demande"
      if (priceFilter.onDemand) {
        filtered = filtered.filter(product => {
          return product.price === "Prix sur demande";
        });
      }
      // Filtre par plage de prix
      else if (priceFilter.min || priceFilter.max) {
        filtered = filtered.filter(product => {
          // Ignorer les produits "Prix sur demande"
          if (product.price === "Prix sur demande") {
            return false;
          }
          
          // Extraire le prix numérique du format "XX XXX FCFA"
          const priceString = product.price.replace(/[^0-9]/g, '');
          const price = parseInt(priceString, 10);
          
          const minPrice = priceFilter.min ? parseInt(priceFilter.min, 10) : 0;
          const maxPrice = priceFilter.max ? parseInt(priceFilter.max, 10) : Infinity;
          
          return price >= minPrice && price <= maxPrice;
        });
      }
    }
    
    // Ajouter un prix original et une réduction uniquement pour les chemises
    filtered = filtered.map(product => {
      if (product.subcategory === 'chemises') {
        return {
          ...product,
          hasDiscount: true,
          originalPrice: '25 000 FCFA',
          discountedPrice: '15 000 FCFA',
          discountPercentage: 40 // (25000 - 15000) / 25000 * 100 = 40%
        };
      }
      return {
        ...product,
        hasDiscount: false
      };
    });
    
    setFilteredProducts(filtered);
    
    // Calculer le nombre total de pages
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    
    // Obtenir les produits pour la page actuelle
    const paginated = getPaginatedProducts(filtered, currentPage, productsPerPage);
    setPaginatedProducts(paginated);
    
    // Initialiser l'état de survol pour chaque produit
    const hoverState = {};
    paginated.forEach(product => {
      hoverState[product.id] = false;
    });
    setIsHovering(hoverState);
  }, [category, subcategory, sortBy, currentPage, productsPerPage, priceFilter]);

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
          <h3 className="text-xl font-heading font-medium text-kc-black dark:text-kc-white mb-4">Aucun produit trouvé</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Essayez de modifier vos filtres ou consultez nos autres catégories.
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
            {paginatedProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={item}
                className="bg-white shadow-md overflow-hidden group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                onClick={() => handleProductClick(product.id)}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={() => handleMouseLeave(product.id)}
              >
                <div className="relative overflow-hidden aspect-square bg-gray-50">
                  {/* Badge de réduction - uniquement pour les produits avec réduction */}
                  {product.hasDiscount && (
                    <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                      -{product.discountPercentage}%
                    </div>
                  )}
                  
                  <Link 
                    to={`/product/${product.reference.toLowerCase()}`}
                    onClick={(e) => isMobile && isHovering[product.id] ? e.preventDefault() : null}
                  >
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-cover md:object-contain transition-transform duration-700 group-hover:scale-105"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </Link>
                  
                  {/* Boutons d'action - visibles au survol sur desktop ou après clic sur mobile */}
                  {((!isMobile && isHovering[product.id]) || (isMobile && isHovering[product.id])) && (
                    <div className="absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300">
                      <button
                        onClick={(e) => handleQuickView(product, e)}
                        className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-kc-gold hover:text-kc-black transition-colors"
                        aria-label={`Aperçu rapide de ${product.name}`}
                      >
                        <FiEye size={18} />
                      </button>
                      <a
                        href={`https://wa.me/221784631010?text=${encodeURIComponent(`Bonjour, je vous contacte depuis votre site Khalil Collection\n\nJe suis intéressé(e) par ce produit: ${product.reference.toUpperCase()} sur https://khalil-collection.vercel.app/product/${product.reference.toLowerCase()}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-green-500 shadow-md flex items-center justify-center hover:bg-green-600 text-white transition-colors"
                        aria-label={`Commander ${product.name} via WhatsApp`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaWhatsapp size={18} />
                      </a>
                    </div>
                  )}
                  
                  {((!isMobile && isHovering[product.id]) || (isMobile && isHovering[product.id])) && (
                    <Link 
                      to={`/product/${product.reference.toLowerCase()}`}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-kc-gold text-kc-black w-10 h-10 rounded-full flex items-center justify-center transition-opacity duration-300 hover:bg-kc-gold/80"
                      aria-label={`Voir ${product.name}`}
                    >
                      <FiArrowRight size={16} />
                    </Link>
                  )}
                </div>
                <div className="p-2 sm:p-4">
                  <Link to={`/product/${product.reference.toLowerCase()}`}>
                    <h3 className="text-xs sm:text-sm md:text-lg font-medium text-kc-black mb-1 sm:mb-2 hover:text-kc-gold transition-colors line-clamp-2">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    {product.hasDiscount ? (
                      <>
                        <p className="text-kc-gold font-semibold text-xs sm:text-sm md:text-base">{product.discountedPrice}</p>
                        <p className="text-gray-500 text-xs line-through">{product.originalPrice}</p>
                      </>
                    ) : (
                      <p className="text-kc-gold font-semibold text-xs sm:text-sm md:text-base">{product.price}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 sm:mt-8">
              <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2" aria-label="Pagination">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-1 sm:p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Page précédente"
                >
                  <FiChevronLeft size={16} />
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Afficher tous les numéros de pages en même temps
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-md text-xs sm:text-sm ${pageNumber === currentPage
                        ? 'bg-kc-gold text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-label={`Page ${pageNumber}`}
                      aria-current={pageNumber === currentPage ? 'page' : undefined}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-1 sm:p-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Page suivante"
                >
                  <FiChevronRight size={16} />
                </button>
              </nav>
            </div>
          )}
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
