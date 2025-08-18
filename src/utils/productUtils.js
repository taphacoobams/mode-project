// Sous-catégories pour les produits homme (référence uniquement)
// const additionalSubcategories = {
//   homme: ['chemises', 'costumes-africains', 'pantalons', 'vestes', 'ensembles', 'tenues-traditionnelles', 'boubous-traditionnels', 'grand-boubou']
// };

// Toutes les images disponibles pour les produits homme
// eslint-disable-next-line no-unused-vars
const allAvailableImages = [
  // Boubou traditionnel
  require('../assets/images/boubou-traditionnel/photo_1_2025-08-12_19-31-00.jpg'),
  require('../assets/images/boubou-traditionnel/photo_2_2025-08-12_19-31-00.jpg'),
  require('../assets/images/boubou-traditionnel/photo_3_2025-08-12_19-31-00.jpg'),
  require('../assets/images/boubou-traditionnel/photo_4_2025-08-12_19-31-00.jpg'),
  require('../assets/images/boubou-traditionnel/photo_5_2025-08-12_19-31-00.jpg'),
  require('../assets/images/boubou-traditionnel/photo_6_2025-08-12_19-31-00.jpg'),
  require('../assets/images/boubou-traditionnel/photo_7_2025-08-12_19-31-00.jpg'),
  require('../assets/images/boubou-traditionnel/photo_8_2025-08-12_19-31-00.jpg'),
  
  // Broderie fait main
  require('../assets/images/broderie-fait-main/photo_1_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_2_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_3_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_4_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_5_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_6_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_7_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_8_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_9_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_10_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_11_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_12_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_13_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_14_2025-08-12_19-28-15.jpg'),
  require('../assets/images/broderie-fait-main/photo_15_2025-08-12_19-28-15.jpg'),
  
  // Grand boubou
  require('../assets/images/grand-boubou/photo_1_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_2_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_3_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_4_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_5_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_6_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_7_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_8_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_9_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_10_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_11_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_12_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_13_2025-08-12_19-32-52.jpg'),
  require('../assets/images/grand-boubou/photo_14_2025-08-12_19-32-52.jpg'),
  
  // Haut
  require('../assets/images/haut/photo_1_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_2_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_3_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_4_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_5_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_6_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_7_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_8_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_9_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_10_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_11_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_12_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_13_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_14_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_15_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_16_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_17_2025-08-12_19-24-44.jpg'),
  require('../assets/images/haut/photo_1_2025-08-12_19-26-49.jpg'),
  require('../assets/images/haut/photo_2_2025-08-12_19-26-49.jpg'),
  require('../assets/images/haut/photo_3_2025-08-12_19-26-50.jpg'),
  
  // Modèle Fillage
  require('../assets/images/modele-fillage/photo_1_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_2_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_3_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_4_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_5_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_6_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_7_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_8_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_9_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_10_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_11_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_12_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_13_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_14_2025-08-12_19-29-16.jpg'),
  require('../assets/images/modele-fillage/photo_15_2025-08-12_19-29-16.jpg')
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

// Fonction supprimée car intégrée directement dans la création des produits

// Produits pour la catégorie homme et sous-catégorie chemises
const productsData = [
  // Chemises homme
  {
    id: 1,
    reference: "KC-H-CH-001",
    name: "KC-H-CH-001",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise élégante avec broderie traditionnelle africaine, parfaite pour les occasions spéciales.",
    image: require("../assets/images/haut/photo_1_2025-08-12_19-24-44.jpg"),
    additionalImages: [require("../assets/images/haut/photo_2_2025-08-12_19-24-44.jpg"), require("../assets/images/haut/photo_3_2025-08-12_19-24-44.jpg")],
    colors: ["Blanc", "Bleu", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fils brodés",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 2,
    name: "Chemise Traditionnelle Wax Royal",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise en tissu wax authentique avec motifs royaux, conçue pour un confort optimal.",
    image: require("../assets/images/haut/photo_4_2025-08-12_19-24-44.jpg"),
    additionalImages: [require("../assets/images/haut/photo_5_2025-08-12_19-24-44.jpg"), require("../assets/images/haut/photo_6_2025-08-12_19-24-44.jpg")],
    colors: ["Multicolore", "Bleu", "Rouge"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Tissu wax 100% coton",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 3,
    name: "Chemise Élégante Motif Kente",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise inspirée des motifs Kente, symbole de prestige et d'élégance africaine.",
    image: require("../assets/images/haut/photo_7_2025-08-12_19-24-44.jpg"),
    additionalImages: [require("../assets/images/haut/photo_8_2025-08-12_19-24-44.jpg"), require("../assets/images/haut/photo_9_2025-08-12_19-24-44.jpg")],
    colors: ["Or", "Vert", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton et fils métallisés",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 4,
    name: "Chemise Moderne Broderie Contemporaine",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Fusion parfaite entre tradition et modernité avec des broderies contemporaines.",
    image: require("../assets/images/haut/photo_10_2025-08-12_19-24-44.jpg"),
    additionalImages: [require("../assets/images/haut/photo_11_2025-08-12_19-24-44.jpg"), require("../assets/images/haut/photo_12_2025-08-12_19-24-44.jpg")],
    colors: ["Blanc", "Noir", "Bleu marine"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie fine",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 5,
    name: "Chemise Luxe Bogolan Authentique",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise premium avec motifs Bogolan authentiques, fabriquée selon les techniques traditionnelles.",
    image: require("../assets/images/haut/photo_13_2025-08-12_19-24-44.jpg"),
    additionalImages: [require("../assets/images/haut/photo_14_2025-08-12_19-24-44.jpg"), require("../assets/images/haut/photo_15_2025-08-12_19-24-44.jpg")],
    colors: ["Beige", "Marron", "Ocre"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton Bogolan traité à la main",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 6,
    name: "Chemise Festival Broderie Or",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise festive avec broderies en fil d'or, idéale pour les célébrations et événements spéciaux.",
    image: require("../assets/images/haut/photo_16_2025-08-12_19-24-44.jpg"),
    additionalImages: [require("../assets/images/haut/photo_17_2025-08-12_19-24-44.jpg")],
    colors: ["Blanc", "Crème", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fils d'or",
    featured: false,
    bestseller: false,
    new: true
  },
  {
    id: 7,
    name: "Chemise Dashiki Moderne",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Réinterprétation moderne du dashiki traditionnel, alliant confort et style africain contemporain.",
    image: require("../assets/images/haut/photo_1_2025-08-12_19-26-49.jpg"),
    additionalImages: [require("../assets/images/haut/photo_2_2025-08-12_19-26-49.jpg"), require("../assets/images/haut/photo_3_2025-08-12_19-26-50.jpg")],
    colors: ["Multicolore", "Bleu", "Vert"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton léger imprimé",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 8,
    name: "Chemise Africaine Broderie Luxe",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise haut de gamme avec broderies artisanales complexes, symbole d'élégance et de raffinement.",
    image: require("../assets/images/haut/photo_2_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie artisanale",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 9,
    name: "Chemise Traditionnelle Motifs Ancestraux",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise inspirée des motifs ancestraux africains, alliance parfaite entre tradition et modernité.",
    image: require("../assets/images/haut/photo_3_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Bleu", "Marron"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie traditionnelle",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 10,
    name: "Chemise Royale Broderie Dorée",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise d'exception avec broderies en fil d'or, pour les occasions les plus prestigieuses.",
    image: require("../assets/images/haut/photo_5_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Ivoire", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fils d'or véritable",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 11,
    name: "Chemise Wax Contemporaine",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise moderne en tissu wax aux couleurs vives, parfaite pour un style affirmé et contemporain.",
    image: require("../assets/images/haut/photo_6_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Multicolore", "Bleu", "Orange"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Tissu wax authentique",
    featured: false,
    bestseller: true,
    new: true
  },
  {
    id: 12,
    name: "Chemise Cérémonie Broderie Fine",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise de cérémonie avec broderies fines et détaillées, idéale pour les mariages et événements formels.",
    image: require("../assets/images/haut/photo_8_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Crème", "Bleu ciel"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie fine",
    featured: true,
    bestseller: false,
    new: false
  },
  {
    id: 13,
    name: "Chemise Prestige Motifs Africains",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise prestige avec motifs africains traditionnels revisités, symbole d'élégance et d'authenticité.",
    image: require("../assets/images/haut/photo_9_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Bleu", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie artisanale",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 14,
    name: "Chemise Tendance Motifs Géométriques",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise tendance avec motifs géométriques inspirés de l'art africain contemporain.",
    image: require("../assets/images/haut/photo_11_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Noir", "Gris"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton et broderie moderne",
    featured: false,
    bestseller: false,
    new: true
  },
  {
    id: 15,
    name: "Chemise Artisanale Broderie Traditionnelle",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise artisanale avec broderies traditionnelles réalisées à la main par des artisans experts.",
    image: require("../assets/images/haut/photo_12_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu ciel"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie artisanale",
    featured: true,
    bestseller: false,
    new: false
  },
  {
    id: 16,
    name: "Chemise Premium Motifs Ethniques",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise premium avec motifs ethniques subtils, alliance parfaite entre élégance et tradition.",
    image: require("../assets/images/haut/photo_14_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie fine",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 17,
    name: "Chemise Exclusive Collection Khalil",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Pièce exclusive de la collection Khalil, chemise haut de gamme avec finitions luxueuses et design unique.",
    image: require("../assets/images/haut/photo_15_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie or",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 18,
    name: "Chemise Signature Khalil Collection",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "La chemise signature de Khalil Collection, symbole d'élégance et de raffinement intemporel.",
    image: require("../assets/images/haut/photo_17_2025-08-12_19-24-44.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Noir", "Bleu marine"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie artisanale",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 19,
    name: "Chemise Festive Broderie Dorée",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise festive avec broderies dorées luxueuses, idéale pour les célébrations et occasions spéciales.",
    image: require("../assets/images/haut/photo_2_2025-08-12_19-26-49.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fils d'or",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 20,
    name: "Chemise Traditionnelle Khalil",
    price: "15000 FCFA",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise traditionnelle de la collection Khalil, alliance parfaite entre héritage culturel et confort moderne.",
    image: require("../assets/images/haut/photo_3_2025-08-12_19-26-50.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie traditionnelle",
    featured: false,
    bestseller: true,
    new: false
  },
  // Boubous traditionnels
  {
    id: 21,
    name: "Boubou Royal Broderie Or",
    price: "189,99 €",
    category: "homme",
    subcategory: "boubous-traditionnels",
    description: "Boubou traditionnel de luxe avec broderies en fil d'or, symbole de royauté et d'élégance pour les cérémonies prestigieuses.",
    image: require("../assets/images/boubou-traditionnel/photo_1_2025-08-12_19-31-00.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et fils d'or véritable",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 22,
    name: "Grand Boubou Cérémonial",
    price: "159,99 €",
    category: "homme",
    subcategory: "boubous-traditionnels",
    description: "Grand boubou cérémonial avec broderies complexes et finitions raffinées, idéal pour les mariages et grandes occasions.",
    image: require("../assets/images/boubou-traditionnel/photo_2_2025-08-12_19-31-00.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Crème", "Ivoire"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner premium et broderie artisanale",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 23,
    name: "Boubou Prestige Collection Khalil",
    price: "199,99 €",
    category: "homme",
    subcategory: "boubous-traditionnels",
    description: "Pièce maîtresse de la collection Khalil, ce boubou prestige incarne l'élégance africaine dans sa forme la plus raffinée.",
    image: require("../assets/images/boubou-traditionnel/photo_3_2025-08-12_19-31-00.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et broderie or",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 24,
    name: "Boubou Traditionnel Authentique",
    price: "149,99 €",
    category: "homme",
    subcategory: "boubous-traditionnels",
    description: "Boubou traditionnel authentique confectionné selon les techniques ancestrales, alliance parfaite entre tradition et confort.",
    image: require("../assets/images/boubou-traditionnel/photo_4_2025-08-12_19-31-00.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et broderie traditionnelle",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 25,
    name: "Boubou Majestueux Broderie Royale",
    price: "179,99 €",
    category: "homme",
    subcategory: "boubous-traditionnels",
    description: "Boubou majestueux avec broderies royales complexes, symbole de distinction et de raffinement pour les grandes occasions.",
    image: require("../assets/images/boubou-traditionnel/photo_5_2025-08-12_19-31-00.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Argent"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et fils métallisés",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 26,
    name: "Boubou Luxe Broderie Artisanale",
    price: "169,99 €",
    category: "homme",
    subcategory: "boubous-traditionnels",
    description: "Boubou de luxe avec broderies artisanales méticuleuses réalisées à la main par des maîtres artisans.",
    image: require("../assets/images/boubou-traditionnel/photo_6_2025-08-12_19-31-00.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Crème", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et broderie fine",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 27,
    name: "Boubou Cérémonie Premium",
    price: "159,99 €",
    category: "homme",
    subcategory: "boubous-traditionnels",
    description: "Boubou de cérémonie premium avec finitions impeccables et broderies élégantes, parfait pour les événements formels.",
    image: require("../assets/images/boubou-traditionnel/photo_7_2025-08-12_19-31-00.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu ciel"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et broderie précise",
    featured: false,
    bestseller: true,
    new: true
  },
  {
    id: 28,
    name: "Boubou Signature Khalil",
    price: "189,99 €",
    category: "homme",
    subcategory: "boubous-traditionnels",
    description: "Le boubou signature de la maison Khalil, symbole d'excellence et d'élégance intemporelle pour l'homme raffiné.",
    image: require("../assets/images/boubou-traditionnel/photo_8_2025-08-12_19-31-00.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin super getzner et broderie luxueuse",
    featured: true,
    bestseller: true,
    new: true
  },
  // Broderies fait main
  {
    id: 29,
    name: "Tunique Broderie Artisanale Luxe",
    price: "149,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Tunique d'exception avec broderies artisanales réalisées à la main par des maîtres artisans, pièce unique et raffinée.",
    image: require("../assets/images/broderie-fait-main/photo_1_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie artisanale",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 30,
    name: "Ensemble Broderie Royale",
    price: "199,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Ensemble complet avec broderies royales complexes, symbole de prestige et d'élégance pour les occasions spéciales.",
    image: require("../assets/images/broderie-fait-main/photo_2_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie or",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 31,
    name: "Tunique Prestige Broderie Or",
    price: "169,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Tunique prestige avec broderies en fil d'or, alliance parfaite entre tradition et luxe contemporain.",
    image: require("../assets/images/broderie-fait-main/photo_3_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fils d'or",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 32,
    name: "Ensemble Cérémonial Broderie Fine",
    price: "189,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Ensemble cérémonial avec broderies fines et détaillées, idéal pour les mariages et célébrations importantes.",
    image: require("../assets/images/broderie-fait-main/photo_4_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie artisanale",
    featured: false,
    bestseller: true,
    new: true
  },
  {
    id: 33,
    name: "Tunique Exclusive Collection Khalil",
    price: "179,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Pièce exclusive de la collection Khalil, tunique haut de gamme avec broderies uniques et finitions luxueuses.",
    image: require("../assets/images/broderie-fait-main/photo_5_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie or",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 34,
    name: "Tunique Traditionnelle Broderie Ancestrale",
    price: "159,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Tunique traditionnelle avec broderies ancestrales inspirées des motifs africains historiques, confectionnée selon les techniques traditionnelles.",
    image: require("../assets/images/broderie-fait-main/photo_6_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Marron"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie traditionnelle",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 35,
    name: "Ensemble Mariage Broderie Luxueuse",
    price: "209,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Ensemble complet pour mariage avec broderies luxueuses et détaillées, créé pour les moments les plus importants de la vie.",
    image: require("../assets/images/broderie-fait-main/photo_7_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie or",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 36,
    name: "Tunique Cérémonie Broderie Précise",
    price: "169,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Tunique de cérémonie avec broderies précises et méticuleuses, symbole d'élégance et de raffinement pour les occasions formelles.",
    image: require("../assets/images/broderie-fait-main/photo_8_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie fine",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 37,
    name: "Ensemble Prestige Broderie Royale",
    price: "199,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Ensemble prestige avec broderies royales complexes, symbole de distinction et d'élégance pour les grandes occasions.",
    image: require("../assets/images/broderie-fait-main/photo_9_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie luxueuse",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 38,
    name: "Tunique Luxe Broderie Artisanale",
    price: "179,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Tunique de luxe avec broderies artisanales méticuleuses réalisées à la main par des artisans experts.",
    image: require("../assets/images/broderie-fait-main/photo_10_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie artisanale",
    featured: false,
    bestseller: true,
    new: true
  },
  {
    id: 39,
    name: "Ensemble Cérémonie Broderie Dorée",
    price: "189,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Ensemble de cérémonie avec broderies dorées élégantes, parfait pour les mariages et événements formels.",
    image: require("../assets/images/broderie-fait-main/photo_11_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et fils d'or",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 40,
    name: "Tunique Signature Collection Khalil",
    price: "199,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "La tunique signature de la collection Khalil, symbole d'excellence et de raffinement avec broderies exclusives.",
    image: require("../assets/images/broderie-fait-main/photo_12_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie luxueuse",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 41,
    name: "Ensemble Majestueux Broderie Royale",
    price: "209,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Ensemble majestueux avec broderies royales complexes, symbole de prestige et d'élégance pour les occasions spéciales.",
    image: require("../assets/images/broderie-fait-main/photo_13_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie or",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 42,
    name: "Tunique Festive Broderie Luxueuse",
    price: "169,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Tunique festive avec broderies luxueuses, idéale pour les célébrations et événements spéciaux.",
    image: require("../assets/images/broderie-fait-main/photo_14_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et broderie fine",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 43,
    name: "Ensemble Premium Broderie Artisanale",
    price: "189,99 €",
    category: "homme",
    subcategory: "broderies",
    description: "Ensemble premium avec broderies artisanales détaillées, alliance parfaite entre tradition et élégance contemporaine.",
    image: require("../assets/images/broderie-fait-main/photo_15_2025-08-12_19-28-15.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et broderie artisanale",
    featured: true,
    bestseller: true,
    new: true
  },
  // Grand Boubou
  {
    id: 44,
    name: "Grand Boubou Royal Or",
    price: "249,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou royal avec broderies en fil d'or véritable, symbole de royauté et d'opulence pour les occasions les plus prestigieuses.",
    image: require("../assets/images/grand-boubou/photo_1_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et fils d'or véritable",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 45,
    name: "Grand Boubou Cérémonial Prestige",
    price: "229,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou cérémonial de prestige avec broderies complexes et finitions raffinées, créé pour les mariages et cérémonies importantes.",
    image: require("../assets/images/grand-boubou/photo_2_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner premium et broderie artisanale",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 46,
    name: "Grand Boubou Majestueux Collection Khalil",
    price: "259,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Pièce maîtresse de la collection Khalil, ce grand boubou majestueux incarne la quintessence de l'élégance africaine.",
    image: require("../assets/images/grand-boubou/photo_3_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et broderie or luxueuse",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 47,
    name: "Grand Boubou Traditionnel Authentique",
    price: "199,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou traditionnel authentique confectionné selon les techniques ancestrales, alliance parfaite entre tradition et confort moderne.",
    image: require("../assets/images/grand-boubou/photo_4_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et broderie traditionnelle",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 48,
    name: "Grand Boubou Broderie Royale",
    price: "239,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou avec broderies royales complexes, symbole de distinction et de raffinement pour les grandes occasions.",
    image: require("../assets/images/grand-boubou/photo_5_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Argent"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et fils métallisés",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 49,
    name: "Grand Boubou Luxe Broderie Or",
    price: "229,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou de luxe avec broderies en fil d'or méticuleuses réalisées à la main par des maîtres artisans.",
    image: require("../assets/images/grand-boubou/photo_6_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et broderie or fine",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 50,
    name: "Grand Boubou Cérémonie Premium",
    price: "219,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou de cérémonie premium avec finitions impeccables et broderies élégantes, parfait pour les événements formels.",
    image: require("../assets/images/grand-boubou/photo_7_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu ciel"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et broderie précise",
    featured: false,
    bestseller: true,
    new: true
  },
  {
    id: 51,
    name: "Grand Boubou Signature Khalil",
    price: "269,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Le grand boubou signature de la maison Khalil, symbole d'excellence et d'élégance intemporelle pour l'homme raffiné.",
    image: require("../assets/images/grand-boubou/photo_8_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin super getzner et broderie luxueuse",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 52,
    name: "Grand Boubou Prestige Collection Royale",
    price: "249,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou prestige de la collection royale avec broderies somptueuses et détails raffinés pour une allure majestueuse.",
    image: require("../assets/images/grand-boubou/photo_9_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et broderie or",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 53,
    name: "Grand Boubou Mariage Luxe",
    price: "279,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou de mariage luxueux avec broderies exceptionnelles, créé pour le plus beau jour de votre vie.",
    image: require("../assets/images/grand-boubou/photo_10_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et broderie or véritable",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 54,
    name: "Grand Boubou Cérémonial Prestige Or",
    price: "259,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou cérémonial de prestige avec broderies en fil d'or, symbole de distinction et d'opulence pour les grandes occasions.",
    image: require("../assets/images/grand-boubou/photo_11_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner premium et fils d'or",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 55,
    name: "Grand Boubou Traditionnel Luxueux",
    price: "239,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou traditionnel luxueux avec broderies raffinées, alliance parfaite entre héritage culturel et confort moderne.",
    image: require("../assets/images/grand-boubou/photo_12_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et broderie traditionnelle",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 56,
    name: "Grand Boubou Prestige Broderie Royale",
    price: "249,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou prestige avec broderies royales complexes, symbole de distinction et de raffinement pour les cérémonies importantes.",
    image: require("../assets/images/grand-boubou/photo_13_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Argent"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et fils métallisés",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 57,
    name: "Grand Boubou Collection Khalil Premium",
    price: "259,99 €",
    category: "homme",
    subcategory: "grands-boubous",
    description: "Grand boubou premium de la collection Khalil avec broderies exclusives et finitions luxueuses, symbole d'élégance intemporelle.",
    image: require("../assets/images/grand-boubou/photo_14_2025-08-12_19-32-52.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et broderie or fine",
    featured: true,
    bestseller: true,
    new: true
  },
  // Modèles Fillage
  {
    id: 58,
    name: "Ensemble Fillage Prestige",
    price: "149,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble fillage prestige avec finitions luxueuses et motifs traditionnels, parfait pour les cérémonies importantes.",
    image: require("../assets/images/modele-fillage/photo_1_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et fils métallisés",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 59,
    name: "Tenue Fillage Royale",
    price: "179,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tenue fillage royale avec broderies complexes et détails raffinés, symbole d'élégance et de distinction.",
    image: require("../assets/images/modele-fillage/photo_2_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Argent"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et fils précieux",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 60,
    name: "Ensemble Fillage Cérémonie",
    price: "159,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble fillage de cérémonie avec motifs traditionnels et finitions impeccables, idéal pour les grandes occasions.",
    image: require("../assets/images/modele-fillage/photo_3_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Beige", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et broderie fine",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 61,
    name: "Tenue Fillage Signature",
    price: "189,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "La tenue fillage signature de la maison Khalil, alliant tradition et modernité pour un style unique et distingué.",
    image: require("../assets/images/modele-fillage/photo_4_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu nuit"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et broderie artisanale",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 62,
    name: "Ensemble Fillage Premium",
    price: "169,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble fillage premium avec détails luxueux et coupe parfaite, conçu pour l'homme qui apprécie l'excellence.",
    image: require("../assets/images/modele-fillage/photo_5_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Crème", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et fils métallisés",
    featured: false,
    bestseller: false,
    new: true
  },
  {
    id: 63,
    name: "Tenue Fillage Tradition",
    price: "165,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tenue fillage traditionnelle avec motifs ancestraux et coupe classique, symbole d'héritage culturel.",
    image: require("../assets/images/modele-fillage/photo_6_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Marron"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et broderie traditionnelle",
    featured: true,
    bestseller: false,
    new: false
  },
  {
    id: 64,
    name: "Ensemble Fillage Majestueux",
    price: "195,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble fillage majestueux avec broderies royales et détails somptueux, pour les occasions les plus prestigieuses.",
    image: require("../assets/images/modele-fillage/photo_7_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu roi"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et fils d'or",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 65,
    name: "Tenue Fillage Contemporaine",
    price: "155,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tenue fillage contemporaine alliant tradition et modernité, avec une coupe actuelle et des détails raffinés.",
    image: require("../assets/images/modele-fillage/photo_8_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Noir", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et broderie moderne",
    featured: false,
    bestseller: true,
    new: true
  },
  {
    id: 66,
    name: "Ensemble Fillage Élégance",
    price: "175,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble fillage d'une élégance incomparable, avec des finitions soignées et une attention particulière aux détails.",
    image: require("../assets/images/modele-fillage/photo_9_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et broderie précise",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 67,
    name: "Tenue Fillage Distinction",
    price: "185,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tenue fillage de distinction avec broderies exclusives et coupe impeccable, pour un homme qui se démarque.",
    image: require("../assets/images/modele-fillage/photo_10_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu marine"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et fils métallisés",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 68,
    name: "Ensemble Fillage Excellence",
    price: "199,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble fillage d'excellence avec des broderies minutieuses et des finitions parfaites, symbole de raffinement absolu.",
    image: require("../assets/images/modele-fillage/photo_11_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Ivoire"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et broderie luxueuse",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 69,
    name: "Tenue Fillage Prestige Royal",
    price: "209,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tenue fillage de prestige royal avec des motifs complexes et des détails somptueux, digne des plus grandes célébrations.",
    image: require("../assets/images/modele-fillage/photo_12_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Rouge royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et fils d'or véritable",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 70,
    name: "Ensemble Fillage Luxe",
    price: "189,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble fillage de luxe avec des broderies raffinées et une coupe parfaite, pour un homme qui apprécie le meilleur.",
    image: require("../assets/images/modele-fillage/photo_13_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Champagne"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin riche et broderie artisanale",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 71,
    name: "Tenue Fillage Raffinement",
    price: "179,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tenue fillage d'un raffinement exceptionnel, avec des détails subtils et une finition impeccable pour toutes les occasions.",
    image: require("../assets/images/modele-fillage/photo_14_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Gris perle"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner et broderie fine",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 72,
    name: "Ensemble Fillage Collection Khalil",
    price: "219,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "L'ensemble fillage signature de la collection Khalil, représentant le summum de l'artisanat et de l'élégance masculine.",
    image: require("../assets/images/modele-fillage/photo_15_2025-08-12_19-29-16.jpg"),
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Bazin getzner super et broderie exclusive",
    featured: true,
    bestseller: true,
    new: true
  }
];


// Mettre à jour tous les produits avec des références et des prix en FCFA
const allProducts = (() => {
  // Regrouper les produits par catégorie pour la numérotation
  const categoriesMap = {};
  
  return productsData.map(product => {
    // S'assurer que category et subcategory sont définis
    const category = product.category || 'autre';
    const subcategory = product.subcategory || 'general';
    
    // Initialiser le compteur pour cette catégorie si nécessaire
    if (!categoriesMap[category]) {
      categoriesMap[category] = 1;
    }
    
    // Utiliser le compteur de la catégorie pour la référence
    const categoryCounter = categoriesMap[category]++;
    
    // Générer la référence avec le préfixe KC, la première lettre de la catégorie,
    // les premières lettres de la sous-catégorie et le compteur de la catégorie
    const prefix = "KC";
    const catPrefix = category.charAt(0).toUpperCase();
    const subcatPrefix = subcategory.split('-').map(part => part.charAt(0).toUpperCase()).join('');
    const reference = `${prefix}-${catPrefix}-${subcatPrefix}-${categoryCounter.toString().padStart(3, '0')}`;
    
    // Déterminer le prix en fonction du dossier d'images
    let price;
    if (product.image && product.image.includes('../assets/images/haut/')) {
      price = "15000 FCFA";
    } else {
      price = "Prix sur demande";
    }
    
    // Retourner le produit mis à jour
    return {
      ...product,
      reference,
      name: reference, // Remplacer le nom par la référence
      price
    };
  });
})();

export { allProducts };

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
  getFilteredProducts,
  getPaginatedProducts
};
