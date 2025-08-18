import { useState } from 'react';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

const FilterSortSearch = ({ sortBy, onSortChange, onPriceFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [onDemand, setOnDemand] = useState(false);
  
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
          className="flex items-center text-kc-black hover:text-kc-gold transition-colors mb-4 sm:mb-0"
          onClick={() => setShowFilters(!showFilters)}
          aria-expanded={showFilters}
        >
          <FiFilter className="mr-2" />
          <span>Filtres</span>
          <FiChevronDown className={`ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>
        
        <div className="flex items-center space-x-4">
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
                className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-kc-gold"
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
        <div className="mt-4 pt-4 border-t border-gray-200">
          {/* Price Range Filter */}
          <div className="max-w-md">
            <h3 className="text-sm font-medium text-kc-black mb-2">Prix</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                onBlur={() => onPriceFilterChange(minPrice, maxPrice, onDemand)}
                className="w-full border border-gray-200 rounded-sm px-3 py-2 focus:outline-none focus:border-kc-gold"
                aria-label="Prix minimum"
                disabled={onDemand}
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                onBlur={() => onPriceFilterChange(minPrice, maxPrice, onDemand)}
                className="w-full border border-gray-200 rounded-sm px-3 py-2 focus:outline-none focus:border-kc-gold"
                aria-label="Prix maximum"
                disabled={onDemand}
              />
            </div>
            
            {/* Prix sur demande checkbox */}
            <div className="mt-3 flex items-center">
              <input
                type="checkbox"
                id="price-on-demand"
                checked={onDemand}
                onChange={(e) => {
                  setOnDemand(e.target.checked);
                  if (e.target.checked) {
                    setMinPrice('');
                    setMaxPrice('');
                  }
                  onPriceFilterChange('', '', e.target.checked);
                }}
                className="h-4 w-4 text-kc-gold focus:ring-kc-gold border-gray-300 rounded"
              />
              <label htmlFor="price-on-demand" className="ml-2 block text-sm text-gray-700">
                Prix sur demande uniquement
              </label>
            </div>
            
            <div className="mt-3">
              <button 
                onClick={() => {
                  onPriceFilterChange(minPrice, maxPrice, onDemand);
                }}
                className="bg-kc-gold text-kc-black px-4 py-2 rounded-sm hover:bg-opacity-90 transition-colors"
              >
                Appliquer
              </button>
              <button 
                onClick={() => {
                  setMinPrice('');
                  setMaxPrice('');
                  setOnDemand(false);
                  onPriceFilterChange('', '', false);
                }}
                className="ml-2 text-gray-600 hover:text-kc-gold transition-colors"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSortSearch;
