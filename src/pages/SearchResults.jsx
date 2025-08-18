import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allProducts } from '../utils/productUtils';
import SearchProductGrid from '../components/search/SearchProductGrid';
import { Helmet } from 'react-helmet-async';
import FilterSortSearch from '../components/search/FilterSortSearch';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q') || '';
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState({ min: '', max: '', onDemand: false });
  const productsPerPage = 12;

  useEffect(() => {
    setLoading(true);
    
    if (!searchQuery.trim()) {
      // Si la recherche est vide, on n'affiche aucun produit
      setSearchResults([]);
      setFilteredResults([]);
      setLoading(false);
      return;
    }
    
    // Recherche uniquement dans le nom des produits avec correspondance exacte
    const searchTermLower = searchQuery.toLowerCase();
    
    const results = allProducts.filter(product => {
      // Vérifie si le produit a un nom et si ce nom contient exactement le terme recherché
      if (!product.name) return false;
      
      // Vérifie si le terme recherché est présent dans le nom du produit
      // en comparant chaque caractère individuellement
      const productNameLower = product.name.toLowerCase();
      return productNameLower.indexOf(searchTermLower) !== -1;
    });
    
    setSearchResults(results);
    setFilteredResults(results);
    setLoading(false);
    // Réinitialiser la page à 1 quand la recherche change
    setCurrentPage(1);
  }, [searchQuery]);
  
  // Fonction pour extraire le prix numérique d'une chaîne
  const extractPrice = (priceString) => {
    if (priceString === "Prix sur demande") return null;
    return parseFloat(priceString.replace(/[^0-9,]/g, '').replace(',', '.'));
  };

  // Effet pour appliquer le tri et les filtres
  useEffect(() => {
    if (searchResults.length === 0) return;
    
    let filtered = [...searchResults];
    
    // Appliquer le filtre de prix
    if (priceFilter.min || priceFilter.max || priceFilter.onDemand) {
      filtered = filtered.filter(product => {
        // Traiter le cas spécial "Prix sur demande"
        if (priceFilter.onDemand) {
          return product.price === "Prix sur demande";
        }
        
        // Ignorer les produits "Prix sur demande" pour les filtres numériques
        if (product.price === "Prix sur demande") {
          return false;
        }
        
        const price = extractPrice(product.price);
        const minPrice = priceFilter.min ? parseFloat(priceFilter.min) : 0;
        const maxPrice = priceFilter.max ? parseFloat(priceFilter.max) : Infinity;
        
        return price >= minPrice && price <= maxPrice;
      });
    }
    
    // Appliquer le tri
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => {
          const priceA = extractPrice(a.price) || Infinity;
          const priceB = extractPrice(b.price) || Infinity;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filtered.sort((a, b) => {
          const priceA = extractPrice(a.price) || 0;
          const priceB = extractPrice(b.price) || 0;
          return priceB - priceA;
        });
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        filtered = filtered.filter(product => product.new).concat(
          filtered.filter(product => !product.new)
        );
        break;
      case 'bestseller':
        filtered = filtered.filter(product => product.bestseller).concat(
          filtered.filter(product => !product.bestseller)
        );
        break;
      default:
        // Par défaut, on garde l'ordre original
        break;
    }
    
    setFilteredResults(filtered);
    // Réinitialiser la page à 1 quand les filtres changent
    setCurrentPage(1);
  }, [searchResults, sortBy, priceFilter]);
  
  // Fonction pour gérer le changement de tri
  const handleSortChange = (sort) => {
    setSortBy(sort);
    setCurrentPage(1); // Réinitialiser la page lors du changement de tri
  };
  
  // Fonction pour gérer les changements de filtre de prix
  const handlePriceFilterChange = (min, max, onDemand) => {
    setPriceFilter({ min, max, onDemand });
    setCurrentPage(1); // Réinitialiser la page lors du changement de filtre de prix
  };
  
  // Fonction pour gérer le changement de page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Faire défiler vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Obtenir les produits pour la page actuelle
  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredResults.slice(startIndex, endIndex);
  };
  
  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredResults.length / productsPerPage);

  return (
    <>
      <Helmet>
        <title>Résultats de recherche pour "{searchQuery}" | Khalil Collection</title>
        <meta name="description" content={`Résultats de recherche pour "${searchQuery}" - Khalil Collection`} />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-kc-black">
            Résultats de recherche
          </h1>
          <p className="text-gray-600 mb-4">
            {searchResults.length} résultat{searchResults.length !== 1 ? 's' : ''} pour "{searchQuery}"
          </p>
          
          {searchResults.length > 0 && (
            <div className="mb-6">
              {/* Utiliser le composant FilterSortSearch sans les icônes grille/liste */}
              <FilterSortSearch 
                sortBy={sortBy} 
                onSortChange={handleSortChange}
                onPriceFilterChange={handlePriceFilterChange}
              />
              
              {/* Afficher le nombre de résultats filtrés */}
              <div className="text-sm text-gray-600 mt-2">
                {filteredResults.length} produit{filteredResults.length !== 1 ? 's' : ''} trouvé{filteredResults.length !== 1 ? 's' : ''}
              </div>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-kc-gold"></div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="w-full">
              {/* Afficher les résultats en mode grille uniquement */}
              <SearchProductGrid searchResults={getCurrentPageProducts()} />
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center space-x-2" aria-label="Pagination">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-kc-black hover:bg-gray-100'}`}
                      aria-label="Page précédente"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-4 py-2 rounded-md ${pageNumber === currentPage ? 'bg-kc-gold text-white' : 'text-kc-black hover:bg-gray-100'}`}
                          aria-label={`Page ${pageNumber}`}
                          aria-current={pageNumber === currentPage ? 'page' : undefined}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-kc-black hover:bg-gray-100'}`}
                      aria-label="Page suivante"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-heading font-medium text-kc-black dark:text-kc-white mb-4">Aucun résultat trouvé</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Essayez de modifier vos termes de recherche ou consultez nos catégories.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default SearchResults;
