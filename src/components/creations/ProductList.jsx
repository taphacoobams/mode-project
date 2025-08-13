import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiEye, FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import QuickView from '../ui/QuickView';
import { getFilteredProducts, getPaginatedProducts } from '../../utils/productUtils';
import { convertEuroToCFA } from '../../utils/priceUtils';

const ProductList = ({ category, subcategory, sortBy, currentPage = 1, onPageChange }) => {
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
    // Utiliser la fonction utilitaire pour obtenir les produits filtrés
    const filtered = getFilteredProducts(category, subcategory, sortBy);
    setFilteredProducts(filtered);
    
    // Calculer le nombre total de pages
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    
    // Obtenir les produits pour la page actuelle
    const paginated = getPaginatedProducts(filtered, currentPage, productsPerPage);
    setPaginatedProducts(paginated);
  }, [category, subcategory, sortBy, currentPage, productsPerPage]);

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
            {paginatedProducts.map((product) => (
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
                    <p className="text-kc-gold font-semibold mb-2">{convertEuroToCFA(product.price)}</p>
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

                      <a
                        href={`https://wa.me/221784631010?text=Je%20suis%20intéressé(e)%20par%20ce%20produit:%20${encodeURIComponent(product.name)}%20sur%20https://khalil-collection.vercel.app/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                        aria-label={`Commander ${product.name} via WhatsApp`}
                      >
                        <FaWhatsapp size={16} />
                      </a>
                    </div>
                  </div>
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
                    pageNumber === 4 && currentPage > 5 ||
                    pageNumber === totalPages - 3 && currentPage < totalPages - 4
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

export default ProductList;
