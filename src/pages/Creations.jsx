import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import CategoryMenu from '../components/creations/CategoryMenu';
import ProductGrid from '../components/creations/ProductGrid';
import ProductList from '../components/creations/ProductList';
import FilterSort from '../components/creations/FilterSort';
import ManifestoBanner from '../components/home/ManifestoBanner';

const Creations = () => {
  const location = useLocation(); // Utiliser useLocation pour détecter les changements d'URL
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState({ min: '', max: '', onDemand: false });

  // Extraire les paramètres de l'URL à chaque changement de location
  useEffect(() => {
    // Extraire les paramètres de l'URL basé sur le nouveau format de chemin
    const path = location.pathname;
    const pathParts = path.split('/');
    
    
    // Format attendu: /creations/productcategory/[category]/[subcategory]
    if (pathParts.length >= 4 && pathParts[1] === 'creations' && pathParts[2] === 'productcategory') {
      const categoryParam = pathParts[3];
      const subcategoryParam = pathParts.length >= 5 ? pathParts[4] : '';
      
      
      if (categoryParam) {
        setCategory(categoryParam);
        setCurrentPage(1); // Réinitialiser la page lors du changement de catégorie
      } else {
        setCategory('');
      }
      
      if (subcategoryParam) {
        setSubcategory(subcategoryParam);
        setCurrentPage(1); // Réinitialiser la page lors du changement de sous-catégorie
      } else {
        setSubcategory('');
      }
    } else {
      // Si nous sommes sur la page principale des créations sans filtres
      setCategory('');
      setSubcategory('');
    }
  }, [location.pathname]); // Dépendance sur location.pathname pour réagir aux changements d'URL

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setCurrentPage(1); // Réinitialiser la page lors du changement de tri
  };
  
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    setCurrentPage(1); // Réinitialiser la page lors du changement de mode d'affichage
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll vers le haut de la page pour une meilleure expérience utilisateur
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handlePriceFilterChange = (min, max, onDemand) => {
    setPriceFilter({ min, max, onDemand });
    setCurrentPage(1); // Réinitialiser la page lors du changement de filtre de prix
  };

  return (
    <>
      <Helmet>
        <title>Nos créations | Khalil Collection - Mode & Broderie - C'est moi, c'est vous !</title>
        <meta name="description" content="Découvrez les créations exclusives de Khalil Collection : vêtements africains premium pour homme et femme, broderies artisanales et accessoires de qualité." />
        <meta property="og:title" content="Nos créations | Khalil Collection - Mode & Broderie - C'est moi, c'est vous !" />
        <meta property="og:description" content="Découvrez les créations exclusives de Khalil Collection : vêtements africains premium pour homme et femme, broderies artisanales et accessoires de qualité." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khalilcollection.com/creations" />
      </Helmet>

      {/* PageHeader supprimé */}
      
      <div className="py-16">
        <div className="container">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Menu Sidebar */}
            <div className="lg:col-span-1">
              <CategoryMenu 
                activeCategory={category} 
                activeSubcategory={subcategory}
              />
            </div>
            
            {/* Products Section */}
            <div className="lg:col-span-3">
              <FilterSort 
                sortBy={sortBy} 
                onSortChange={handleSortChange}
                viewMode={viewMode}
                onViewModeChange={handleViewModeChange}
                onPriceFilterChange={handlePriceFilterChange}
              />
              
              {viewMode === 'grid' ? (
                <ProductGrid 
                  category={category}
                  subcategory={subcategory}
                  sortBy={sortBy}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  priceFilter={priceFilter}
                />
              ) : (
                <ProductList 
                  category={category}
                  subcategory={subcategory}
                  sortBy={sortBy}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  priceFilter={priceFilter}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      
      <ManifestoBanner />
    </>
  );
};

export default Creations;
