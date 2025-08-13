import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';
import QuickView from '../ui/QuickView';
import { getFilteredProducts } from '../../utils/productUtils';
import { convertEuroToCFA } from '../../utils/priceUtils';

const LatestCreations = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [latestProducts, setLatestProducts] = useState([]);

  const handleQuickView = (product, e) => {
    e.preventDefault();
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  // Charger les 6 premiers produits de la page Créations avec le tri "newest"
  useEffect(() => {
    // Utiliser la fonction getFilteredProducts pour obtenir les produits triés par "newest"
    const allProducts = getFilteredProducts('', '', 'newest');
    // Prendre les 6 premiers produits
    const latest = allProducts.slice(0, 6);
    setLatestProducts(latest);
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
              >
                <div className="relative overflow-hidden aspect-square">
                  <Link 
                    to={`/nos-creations/${product.category}/${product.id.toString()}`}
                    className="block"
                  >
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  
                  <button
                    onClick={(e) => handleQuickView(product, e)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-kc-gold text-kc-black py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 shadow-md"
                    aria-label={`Aperçu rapide de ${product.name}`}
                  >
                    <FiEye size={18} />
                    <span>Aperçu rapide</span>
                  </button>
                </div>
                <div className="p-5 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">{product.category.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</p>
                  <Link to={`/nos-creations/${product.category}/${product.id.toString()}`}>
                    <h3 className="text-lg font-semibold text-kc-black mb-2 hover:text-kc-gold transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-kc-gold font-bold text-xl">{convertEuroToCFA(product.price)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-16">
            <Link 
              to="/nos-creations" 
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
