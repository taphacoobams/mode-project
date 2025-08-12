// Sous-catégories pour les produits homme (référence uniquement)
// const additionalSubcategories = {
//   homme: ['chemises', 'costumes-africains', 'pantalons', 'vestes', 'ensembles', 'tenues-traditionnelles', 'boubous-traditionnels', 'grand-boubou']
// };

// Toutes les images disponibles pour les produits homme
const allAvailableImages = [
  // Boubou traditionnel
  '/images/boubou-traditionnel/photo_1_2025-08-12_19-31-00.jpg',
  '/images/boubou-traditionnel/photo_2_2025-08-12_19-31-00.jpg',
  '/images/boubou-traditionnel/photo_3_2025-08-12_19-31-00.jpg',
  '/images/boubou-traditionnel/photo_4_2025-08-12_19-31-00.jpg',
  '/images/boubou-traditionnel/photo_5_2025-08-12_19-31-00.jpg',
  '/images/boubou-traditionnel/photo_6_2025-08-12_19-31-00.jpg',
  '/images/boubou-traditionnel/photo_7_2025-08-12_19-31-00.jpg',
  '/images/boubou-traditionnel/photo_8_2025-08-12_19-31-00.jpg',
  
  // Broderie fait main
  '/images/broderie-fait-main/photo_1_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_2_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_3_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_4_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_5_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_6_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_7_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_8_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_9_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_10_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_11_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_12_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_13_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_14_2025-08-12_19-28-15.jpg',
  '/images/broderie-fait-main/photo_15_2025-08-12_19-28-15.jpg',
  
  // Grand boubou
  '/images/grand-boubou/photo_1_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_2_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_3_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_4_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_5_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_6_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_7_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_8_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_9_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_10_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_11_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_12_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_13_2025-08-12_19-32-52.jpg',
  '/images/grand-boubou/photo_14_2025-08-12_19-32-52.jpg',
  
  // Haut
  '/images/haut/photo_1_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_2_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_3_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_4_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_5_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_6_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_7_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_8_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_9_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_10_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_11_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_12_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_13_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_14_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_15_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_16_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_17_2025-08-12_19-24-44.jpg',
  '/images/haut/photo_1_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_2_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_3_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_4_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_5_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_6_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_7_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_8_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_9_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_10_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_11_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_12_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_13_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_14_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_15_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_16_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_17_2025-08-12_19-26-49.jpg',
  '/images/haut/photo_18_2025-08-12_19-26-49.jpg'
];

// Variantes de styles pour enrichir les noms de produits (référence uniquement)
// const styleVariants = [
//   'Premium', 'Deluxe', 'Royal', 'Luxe', 'Festif',
//   'Rafiné', 'Authentique', 'Majestueux', 'Chic', 'Tendance'
// ];

// Variantes de matériaux pour enrichir les noms de produits (référence uniquement)
// const materialVariants = [
//   'Wax', 'Kente', 'Bogolan', 'Soie', 'Damassé',
//   'Imprimé', 'Fil d\'or', 'Satin', 'Velours', 'Premium'
// ];

// Aucun produit - comme dans la catégorie femmes
let allProducts = [];

// Vérifier le nombre de produits générés
console.log(`Nombre total d'images disponibles: ${allAvailableImages.length}`);
console.log(`Nombre de produits générés: ${allProducts.length}`);

// Filter and sort products
const getFilteredProducts = (category, subcategory, sortBy) => {
  let filtered = [...allProducts];
  
  // Filtrer les produits sans images
  filtered = filtered.filter(product => product.image && product.image.trim() !== '');
  
  if (category) {
    filtered = filtered.filter(product => product.category === category);
  }
  
  if (subcategory) {
    filtered = filtered.filter(product => product.subcategory === subcategory);
  }
  
  // Sort products based on sortBy
  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => parseFloat(a.price.replace(/[^\d]/g, '')) - parseFloat(b.price.replace(/[^\d]/g, '')));
      break;
    case 'price-desc':
      filtered.sort((a, b) => parseFloat(b.price.replace(/[^\d]/g, '')) - parseFloat(a.price.replace(/[^\d]/g, '')));
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      // 'newest' is default, no need to sort as we assume the array is already sorted by newest
      break;
  }
  
  return filtered;
};

// Get paginated products
const getPaginatedProducts = (products, currentPage, productsPerPage) => {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  return products.slice(startIndex, endIndex);
};

export {
  allProducts,
  getFilteredProducts,
  getPaginatedProducts
};
