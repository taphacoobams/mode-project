import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { FiEye, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import QuickView from '../ui/QuickView';
import { getFilteredProducts } from '../../utils/productUtils';

const LatestCreations = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState({});

  const handleQuickView = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setQuickViewOpen(true);
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
  

  // Charger les 6 premiers produits de la page Créations avec le tri "newest"
  useEffect(() => {
    // Utiliser la fonction getFilteredProducts pour obtenir les produits triés par "newest"
    const allProducts = getFilteredProducts('', '', 'newest');
    // Prendre les 6 premiers produits
    const latest = allProducts.slice(0, 6).map(product => {
      // Appliquer le prix barré uniquement aux chemises
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
    setLatestProducts(latest);
    
    // Initialiser l'état de survol pour chaque produit
    const hoverState = {};
    latest.forEach(product => {
      hoverState[product.id] = false;
    });
    setIsHovering(hoverState);
  }, []);
  
  // Détecter si l'appareil est mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-kc-black mb-4">Nos dernières créations</h2>
            <div className="w-24 h-1 bg-kc-gold mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Découvrez notre sélection de pièces uniques confectionnées avec passion par nos artisans talentueux.</p>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {latestProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={item}
                className="bg-white rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
                onClick={() => handleProductClick(product.id)}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={() => handleMouseLeave(product.id)}
              >
                <div className="relative overflow-hidden aspect-square">
                  {/* Badge de réduction - uniquement pour les produits avec réduction */}
                  {product.hasDiscount && (
                    <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                      -{product.discountPercentage}%
                    </div>
                  )}
                  
                  <Link 
                    to={`/product/${product.reference.toLowerCase()}`}
                    className="block"
                    onClick={(e) => isMobile && isHovering[product.id] ? e.preventDefault() : null}
                  >
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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
                <div className="p-5 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">{product.category.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</p>
                  <Link to={`/product/${product.reference.toLowerCase()}`}>
                    <h3 className="text-lg font-semibold text-kc-black mb-2 hover:text-kc-gold transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    {product.hasDiscount ? (
                      <>
                        <p className="text-kc-gold font-bold text-xl">{product.discountedPrice}</p>
                        <p className="text-gray-500 text-sm line-through">{product.originalPrice}</p>
                      </>
                    ) : (
                      <p className="text-kc-gold font-bold text-xl">{product.price}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-16">
            <Link 
              to="/creations" 
              className="bg-kc-gold text-kc-black px-8 py-3 rounded-md hover:bg-kc-black hover:text-kc-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-kc-gold/50 inline-flex items-center font-medium text-lg shadow-md"
            >
              <span>Voir toutes nos créations</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* QuickView Modal */}
      <QuickView 
        product={selectedProduct}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
};

export default LatestCreations;
