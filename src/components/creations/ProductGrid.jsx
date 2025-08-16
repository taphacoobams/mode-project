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
  const productsPerPage = 12; // 12 articles par page
  
  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handlePageChange = (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };

  useEffect(() => {
    console.log('ProductGrid - Catégorie:', category);
    console.log('ProductGrid - Sous-catégorie:', subcategory);
    console.log('ProductGrid - Filtre de prix:', priceFilter);
    
    // Utiliser les fonctions utilitaires pour filtrer les produits
    let filtered = getFilteredProducts(category, subcategory, sortBy);
    
    // Appliquer le filtre de prix si défini
    if (priceFilter && (priceFilter.min || priceFilter.max)) {
      filtered = filtered.filter(product => {
        // Extraire le prix numérique du format "XX XXX FCFA"
        const priceString = product.price.replace(/[^0-9]/g, '');
        const price = parseInt(priceString, 10);
        
        const minPrice = priceFilter.min ? parseInt(priceFilter.min, 10) : 0;
        const maxPrice = priceFilter.max ? parseInt(priceFilter.max, 10) : Infinity;
        
        return price >= minPrice && price <= maxPrice;
      });
      console.log('ProductGrid - Après filtre de prix:', filtered.length);
    }
    
    console.log('ProductGrid - Produits filtrés:', filtered.length);
    setFilteredProducts(filtered);
    
    // Calculer le nombre total de pages
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    
    // Obtenir les produits pour la page actuelle
    const paginated = getPaginatedProducts(filtered, currentPage, productsPerPage);
    setPaginatedProducts(paginated);
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
            {paginatedProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={item}
                className="bg-white shadow-md overflow-hidden group"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <Link to={`/product/${product.reference.toLowerCase()}`}>
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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
                      href={`https://wa.me/221784631010?text=${encodeURIComponent(`Bonjour, je vous contacte depuis votre site Khalil Collection\n\nJe suis intéressé(e) par ce produit: ${product.reference.toUpperCase()} sur https://khalil-collection.vercel.app/product/${product.reference.toLowerCase()}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-green-500 shadow-md flex items-center justify-center hover:bg-green-600 text-white transition-colors"
                      aria-label={`Commander ${product.name} via WhatsApp`}
                    >
                      <FaWhatsapp size={18} />
                    </a>
                  </div>
                  
                  <Link 
                    to={`/product/${product.reference.toLowerCase()}`}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-kc-gold text-kc-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-kc-gold/80"
                    aria-label={`Voir ${product.name}`}
                  >
                    <FiArrowRight size={16} />
                  </Link>
                </div>
                <div className="p-4">
                  <Link to={`/product/${product.reference.toLowerCase()}`}>
                    <h3 className="text-lg font-medium text-kc-black mb-2 hover:text-kc-gold transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-kc-gold font-semibold">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2" aria-label="Pagination">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Page précédente"
                >
                  <FiChevronLeft size={18} />
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Afficher les 3 premiers, les 3 derniers, et 2 autour de la page courante
                  if (
                    pageNumber <= 3 ||
                    pageNumber > totalPages - 3 ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-3 py-1 rounded-md ${pageNumber === currentPage
                          ? 'bg-kc-gold text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-label={`Page ${pageNumber}`}
                        aria-current={pageNumber === currentPage ? 'page' : undefined}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    (pageNumber === 4 && currentPage > 5) ||
                    (pageNumber === totalPages - 3 && currentPage < totalPages - 4)
                  ) {
                    // Afficher des points de suspension pour indiquer des pages omises
                    return <span key={pageNumber} className="px-2">...</span>;
                  }
                  return null;
                })}
                
                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Page suivante"
                >
                  <FiChevronRight size={18} />
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
