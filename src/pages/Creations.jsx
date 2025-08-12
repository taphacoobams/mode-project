import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import CategoryMenu from '../components/creations/CategoryMenu';
import ProductGrid from '../components/creations/ProductGrid';
import ProductList from '../components/creations/ProductList';
import FilterSort from '../components/creations/FilterSort';
import PageHeader from '../components/ui/PageHeader';
import ManifestoBanner from '../components/home/ManifestoBanner';

const Creations = () => {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'

  useEffect(() => {
    // Extraire les paramètres de l'URL basé sur le nouveau format de chemin
    const path = window.location.pathname;
    const pathParts = path.split('/');
    
    // Format attendu: /nos-creations/productcategory/[category]/[subcategory] ou /noscreations/productcategory/[category]/[subcategory]
    if (pathParts.length >= 4 && (pathParts[1] === 'noscreations' || pathParts[1] === 'nos-creations') && pathParts[2] === 'productcategory') {
      const categoryParam = pathParts[3];
      const subcategoryParam = pathParts.length >= 5 ? pathParts[4] : '';
      
      if (categoryParam) setCategory(categoryParam);
      if (subcategoryParam) setSubcategory(subcategoryParam);
    }
  }, [window.location.pathname]);

  const handleSortChange = (sort) => {
    setSortBy(sort);
  };
  
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    // Plus besoin de réinitialiser la page car la pagination a été supprimée
  };

  return (
    <>
      <Helmet>
        <title>Nos créations | Khalil Collection - Mode & Broderie - C'est moi, c'est vous !</title>
        <meta name="description" content="Découvrez les créations exclusives de Khalil Collection : vêtements africains premium pour hommes et femmes, broderies artisanales et accessoires de qualité." />
        <meta property="og:title" content="Nos créations | Khalil Collection - Mode & Broderie - C'est moi, c'est vous !" />
        <meta property="og:description" content="Découvrez les créations exclusives de Khalil Collection : vêtements africains premium pour hommes et femmes, broderies artisanales et accessoires de qualité." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khalilcollection.com/noscreations" />
      </Helmet>

      <PageHeader 
        title="Nos créations"
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Nos créations', url: '/nos-creations' },
          ...(category ? [{ label: category.charAt(0).toUpperCase() + category.slice(1), url: `/nos-creations/productcategory/${category}` }] : []),
          ...(subcategory ? [{ label: subcategory.charAt(0).toUpperCase() + subcategory.slice(1).replace(/-/g, ' ') }] : [])
        ]}
      />
      
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
              />
              
              {viewMode === 'grid' ? (
                <ProductGrid 
                  category={category}
                  subcategory={subcategory}
                  sortBy={sortBy}
                />
              ) : (
                <ProductList 
                  category={category}
                  subcategory={subcategory}
                  sortBy={sortBy}
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
