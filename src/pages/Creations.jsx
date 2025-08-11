import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import CategoryMenu from '../components/creations/CategoryMenu';
import ProductGrid from '../components/creations/ProductGrid';
import ProductList from '../components/creations/ProductList';
import FilterSort from '../components/creations/FilterSort';
import PageHeader from '../components/ui/PageHeader';

const Creations = () => {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const subcategoryParam = searchParams.get('subcategory');
    
    if (categoryParam) setCategory(categoryParam);
    if (subcategoryParam) setSubcategory(subcategoryParam);
  }, [searchParams]);

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
        <title>Nos créations | I. K. MBENGUE - La mode africaine à un autre niveau</title>
        <meta name="description" content="Découvrez nos collections de vêtements africains premium pour hommes et femmes. Chemises, costumes, robes et accessoires de qualité." />
        <meta property="og:title" content="Nos créations | I. K. MBENGUE - La mode africaine à un autre niveau" />
        <meta property="og:description" content="Découvrez nos collections de vêtements africains premium pour hommes et femmes. Chemises, costumes, robes et accessoires de qualité." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://btoure.com/nos-creations" />
      </Helmet>

      <PageHeader 
        title="Nos créations"
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Nos créations' }
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
    </>
  );
};

export default Creations;
