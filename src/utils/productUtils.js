// Sous-catégories supplémentaires pour enrichir les produits
const additionalSubcategories = {
  homme: ['chemises', 'costumes-africains', 'pantalons', 'vestes', 'ensembles', 'tenues-traditionnelles'],
  femme: ['robes', 'jupes', 'ensembles', 'collection-femme-chic', 'tenues-traditionnelles', 'tops'],
  accessoires: ['chaussures', 'sacs', 'bijoux', 'ceintures', 'chapeaux', 'boxer']
};

// Images supplémentaires pour diversifier les produits
const additionalImages = {
  homme: [
    'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1522327646852-4e28586a40dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  ],
  femme: [
    'https://images.unsplash.com/photo-1534534573898-db5148bc8b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  ],
  accessoires: [
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  ]
};

// Produits de base
const baseProducts = [
  {
    id: 1,
    name: 'Chemise Wax Premium',
    price: '25,000 CFA',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'homme',
    subcategory: 'chemises',
    description: 'Chemise en tissu wax premium, confectionnée à la main par nos artisans. Design exclusif Khalil Collection avec finitions soignées et boutons en nacre.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 2,
    name: 'Costume Africain Moderne',
    price: '45,000 CFA',
    image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'homme',
    subcategory: 'costumes-africains',
    description: 'Costume africain moderne alliant tradition et élégance contemporaine. Parfait pour les cérémonies et occasions spéciales. Coupe ajustée et confortable.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 3,
    name: 'Robe Sakinatou',
    price: '35,000 CFA',
    image: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'femme',
    subcategory: 'collection-sakinatou',
  },
  {
    id: 4,
    name: 'Ensemble Chic Femme',
    price: '40,000 CFA',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'femme',
    subcategory: 'collection-femme-chic',
  },
  {
    id: 5,
    name: 'Polo Brodé',
    price: '18,000 CFA',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'homme',
    subcategory: 'polo',
  },
  {
    id: 6,
    name: 'Lunettes Khalil Collection',
    price: '15,000 CFA',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'accessoires',
    subcategory: 'khalilcollection-sunglasses',
  },
  {
    id: 7,
    name: 'Pantalon Slim Fit',
    price: '22,000 CFA',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'homme',
    subcategory: 'pantalons',
  },
  {
    id: 8,
    name: 'Boxer Premium',
    price: '8,000 CFA',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'accessoires',
    subcategory: 'boxer',
  },
  {
    id: 9,
    name: 'Chaussures Élégantes',
    price: '30,000 CFA',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'accessoires',
    subcategory: 'chaussures',
  },
  {
    id: 10,
    name: 'Chemise Brodée',
    price: '28,000 CFA',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'homme',
    subcategory: 'chemises',
  },
  {
    id: 11,
    name: 'Robe de Soirée',
    price: '50,000 CFA',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'femme',
    subcategory: 'collection-femme-chic',
  },
  {
    id: 12,
    name: 'Costume Traditionnel',
    price: '55,000 CFA',
    image: 'https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'homme',
    subcategory: 'costumes-africains',
  },
];

// Variantes de styles pour enrichir les noms de produits
const styleVariants = [
  'Classique', 'Premium', 'Deluxe', 'Édition Limitée', 'Collection Spéciale',
  'Moderne', 'Traditionnel', 'Élégant', 'Casual', 'Festif', 'Cérémonie',
  'Prestige', 'Signature', 'Exclusif', 'Artisanal'
];

// Variantes de matériaux pour enrichir les noms de produits
const materialVariants = [
  'Wax', 'Bazin', 'Kente', 'Bogolan', 'Coton', 'Lin', 'Soie', 
  'Brodé', 'Imprimé', 'Tissé main', 'Perlé', 'Damassé'
];

// Function to generate more products by modifying existing ones with more variety
const generateMoreProducts = (multiplier = 6) => {
  const newProducts = [];
  
  for (let i = 0; i < multiplier; i++) {
    baseProducts.forEach((product) => {
      const newId = product.id + (i * baseProducts.length);
      
      // Sélection aléatoire de variantes pour créer des noms uniques
      const styleIndex = Math.floor(Math.random() * styleVariants.length);
      const materialIndex = Math.floor(Math.random() * materialVariants.length);
      
      // Variation de prix (±10%)
      const basePrice = parseInt(product.price.replace(/[^0-9]/g, ''));
      const priceVariation = Math.random() * 0.2 - 0.1; // Entre -10% et +10%
      const newPrice = Math.round(basePrice * (1 + priceVariation));
      const formattedPrice = newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' CFA';
      
      // Création du nouveau nom de produit avec plus de variété
      let newName;
      if (i === 0) {
        newName = product.name; // Garder le produit original
      } else {
        // Alterner entre différents formats de noms pour plus de variété
        switch (i % 3) {
          case 0:
            newName = `${product.name} ${styleVariants[styleIndex]}`;
            break;
          case 1:
            newName = `${product.name} ${materialVariants[materialIndex]}`;
            break;
          case 2:
            newName = `${styleVariants[styleIndex]} ${product.name}`;
            break;
        }
      }
      
      // Sélection d'une image alternative pour les variantes (sauf la première)
      let productImage = product.image;
      if (i > 0 && additionalImages[product.category]) {
        const categoryImages = additionalImages[product.category];
        if (categoryImages.length > 0) {
          const randomIndex = Math.floor(Math.random() * categoryImages.length);
          productImage = categoryImages[randomIndex];
        }
      }
      
      // Variation de sous-catégorie pour certains produits (pas tous)
      let productSubcategory = product.subcategory;
      if (i > 1 && Math.random() > 0.5 && additionalSubcategories[product.category]) {
        const availableSubcategories = additionalSubcategories[product.category];
        if (availableSubcategories.length > 0) {
          const randomSubcatIndex = Math.floor(Math.random() * availableSubcategories.length);
          productSubcategory = availableSubcategories[randomSubcatIndex];
        }
      }
      
      // Générer une description si elle n'existe pas
      let productDescription = product.description;
      if (!productDescription) {
        const descriptionTemplates = [
          `${newName} de la collection Khalil Collection. Confectionné avec des matériaux de qualité supérieure pour un confort optimal.`,
          `Pièce exclusive ${newName} fabriquée à la main par nos artisans. Design unique et élégant.`,
          `${newName} inspiré des traditions africaines avec une touche moderne. Parfait pour toutes les occasions.`
        ];
        const randomDescIndex = Math.floor(Math.random() * descriptionTemplates.length);
        productDescription = descriptionTemplates[randomDescIndex];
      }
      
      // Générer des tailles si elles n'existent pas
      let productSizes = product.sizes;
      if (!productSizes) {
        const sizeOptions = [
          ['S', 'M', 'L', 'XL'],
          ['M', 'L', 'XL', 'XXL'],
          ['S', 'M', 'L', 'XL', 'XXL'],
          ['36', '38', '40', '42', '44']
        ];
        const randomSizeIndex = Math.floor(Math.random() * sizeOptions.length);
        productSizes = sizeOptions[randomSizeIndex];
      }
      
      newProducts.push({
        ...product,
        id: newId,
        name: newName,
        price: formattedPrice,
        image: productImage,
        subcategory: productSubcategory,
        description: productDescription,
        sizes: productSizes
      });
    });
  }
  
  return newProducts;
};

// Generate all products (6 times the base products)
const allProducts = generateMoreProducts(6);

// Filter and sort products
const getFilteredProducts = (category, subcategory, sortBy) => {
  let filtered = [...allProducts];
  
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
