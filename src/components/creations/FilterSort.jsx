import { useState } from 'react';
import { FiFilter, FiChevronDown, FiGrid, FiList } from 'react-icons/fi';

const FilterSort = ({ sortBy, onSortChange, viewMode, onViewModeChange }) => {
  const [showFilters, setShowFilters] = useState(false);
  
  const sortOptions = [
    { id: 'newest', name: 'Nouveautés' },
    { id: 'price-asc', name: 'Prix croissant' },
    { id: 'price-desc', name: 'Prix décroissant' },
    { id: 'name-asc', name: 'Nom A-Z' },
    { id: 'name-desc', name: 'Nom Z-A' },
  ];

  return (
    <div className="bg-white shadow-md p-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <button
          className="flex items-center text-secondary hover:text-primary transition-colors mb-4 sm:mb-0"
          onClick={() => setShowFilters(!showFilters)}
          aria-expanded={showFilters}
        >
          <FiFilter className="mr-2" />
          <span>Filtres</span>
          <FiChevronDown className={`ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>
        
        <div className="flex items-center space-x-4">
          {/* Boutons d'affichage grille/liste */}
          <div className="flex items-center border border-gray-200 rounded-sm overflow-hidden">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
              aria-label="Affichage en grille"
              aria-pressed={viewMode === 'grid'}
            >
              <FiGrid size={18} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
              aria-label="Affichage en liste"
              aria-pressed={viewMode === 'list'}
            >
              <FiList size={18} />
            </button>
          </div>
          
          {/* Sélecteur de tri */}
          <div className="flex items-center">
            <label htmlFor="sort-select" className="text-gray-600 mr-2">
              Trier par:
            </label>
            <div className="relative">
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-primary"
                aria-label="Options de tri"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FiChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Price Range Filter */}
          <div>
            <h3 className="text-sm font-medium text-secondary mb-2">Prix</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full border border-gray-200 rounded-sm px-3 py-2 focus:outline-none focus:border-primary"
                aria-label="Prix minimum"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full border border-gray-200 rounded-sm px-3 py-2 focus:outline-none focus:border-primary"
                aria-label="Prix maximum"
              />
            </div>
          </div>
          
          {/* Color Filter */}
          <div>
            <h3 className="text-sm font-medium text-secondary mb-2">Couleur</h3>
            <div className="flex flex-wrap gap-2">
              {['#000000', '#FFFFFF', '#C8A165', '#0000FF', '#FF0000', '#008000'].map((color) => (
                <button
                  key={color}
                  className="w-6 h-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  style={{ backgroundColor: color }}
                  aria-label={`Filtrer par couleur ${color}`}
                />
              ))}
            </div>
          </div>
          
          {/* Size Filter */}
          <div>
            <h3 className="text-sm font-medium text-secondary mb-2">Taille</h3>
            <div className="flex flex-wrap gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className="min-w-[36px] h-8 px-2 border border-gray-200 rounded-sm hover:border-primary hover:text-primary focus:outline-none focus:border-primary focus:text-primary transition-colors"
                  aria-label={`Filtrer par taille ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSort;
