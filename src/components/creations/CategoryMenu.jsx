import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const CategoryMenu = ({ activeCategory, activeSubcategory }) => {
  const navigate = useNavigate();
  const [expandedCategories, setExpandedCategories] = useState({
    homme: activeCategory === 'homme',
    femme: activeCategory === 'femme',
    accessoires: activeCategory === 'accessoires',
  });

  const categories = [
    {
      id: 'homme',
      name: 'Homme',
      subcategories: [
        { id: 'chemises', name: 'Chemises' },
        { id: 'costumes-africains', name: 'Costumes africains' },
        { id: 'polo', name: 'Polo' },
        { id: 'pantalons', name: 'Pantalons' },
      ],
    },
    {
      id: 'femme',
      name: 'Femme',
      subcategories: [
        { id: 'collection-femme-chic', name: 'Collection femme chic' },
        { id: 'collection-sakinatou', name: 'Collection Sakinatou' },
      ],
    },
    {
      id: 'accessoires',
      name: 'Accessoires',
      subcategories: [
        { id: 'boxer', name: 'Boxer' },
        { id: 'khalil-sunglasses', name: 'Khalil Collection sunglasses' },
        { id: 'chaussures', name: 'Chaussures' },
      ],
    },
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories({
      ...expandedCategories,
      [categoryId]: !expandedCategories[categoryId],
    });
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/nos-creations?category=${categoryId}`);
  };

  const handleSubcategoryClick = (categoryId, subcategoryId) => {
    navigate(`/nos-creations?category=${categoryId}&subcategory=${subcategoryId}`);
  };

  return (
    <div className="bg-white shadow-md p-6">
      <h2 className="text-xl font-heading font-bold text-kc-black mb-6">Catégories</h2>
      
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.id} className="border-b border-gray-100 pb-2">
            <div className="flex items-center justify-between">
              <button
                className={`text-left py-2 font-medium hover:text-kc-gold transition-colors w-full flex items-center justify-between ${
                  activeCategory === category.id ? 'text-kc-gold' : 'text-kc-black'
                }`}
                onClick={() => {
                  toggleCategory(category.id);
                  handleCategoryClick(category.id);
                }}
                aria-expanded={expandedCategories[category.id]}
              >
                {category.name}
                {expandedCategories[category.id] ? (
                  <FiChevronUp className="ml-2" />
                ) : (
                  <FiChevronDown className="ml-2" />
                )}
              </button>
            </div>
            
            {expandedCategories[category.id] && (
              <ul className="pl-4 mt-2 space-y-2">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <button
                      className={`text-left py-1 text-sm hover:text-kc-gold transition-colors w-full ${
                        activeSubcategory === subcategory.id ? 'text-kc-gold font-medium' : 'text-gray-600'
                      }`}
                      onClick={() => handleSubcategoryClick(category.id, subcategory.id)}
                    >
                      {subcategory.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link 
          to="/nos-creations"
          className="text-primary hover:underline font-medium"
        >
          Voir toutes les créations
        </Link>
      </div>
    </div>
  );
};

export default CategoryMenu;
