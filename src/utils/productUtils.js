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
    image: "/images/haut/photo_1_2025-08-12_19-24-44.jpg",
    additionalImages: ["/images/haut/photo_2_2025-08-12_19-24-44.jpg", "/images/haut/photo_3_2025-08-12_19-24-44.jpg"],
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
    price: "79,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise en tissu wax authentique avec motifs royaux, conçue pour un confort optimal.",
    image: "/images/haut/photo_4_2025-08-12_19-24-44.jpg",
    additionalImages: ["/images/haut/photo_5_2025-08-12_19-24-44.jpg", "/images/haut/photo_6_2025-08-12_19-24-44.jpg"],
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
    price: "94,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise inspirée des motifs Kente, symbole de prestige et d'élégance africaine.",
    image: "/images/haut/photo_7_2025-08-12_19-24-44.jpg",
    additionalImages: ["/images/haut/photo_8_2025-08-12_19-24-44.jpg", "/images/haut/photo_9_2025-08-12_19-24-44.jpg"],
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
    price: "84,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Fusion parfaite entre tradition et modernité avec des broderies contemporaines.",
    image: "/images/haut/photo_10_2025-08-12_19-24-44.jpg",
    additionalImages: ["/images/haut/photo_11_2025-08-12_19-24-44.jpg", "/images/haut/photo_12_2025-08-12_19-24-44.jpg"],
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
    price: "99,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise premium avec motifs Bogolan authentiques, fabriquée selon les techniques traditionnelles.",
    image: "/images/haut/photo_13_2025-08-12_19-24-44.jpg",
    additionalImages: ["/images/haut/photo_14_2025-08-12_19-24-44.jpg", "/images/haut/photo_15_2025-08-12_19-24-44.jpg"],
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
    price: "109,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise festive avec broderies en fil d'or, idéale pour les célébrations et événements spéciaux.",
    image: "/images/haut/photo_16_2025-08-12_19-24-44.jpg",
    additionalImages: ["/images/haut/photo_17_2025-08-12_19-24-44.jpg"],
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
    price: "74,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Réinterprétation moderne du dashiki traditionnel, alliant confort et style africain contemporain.",
    image: "/images/haut/photo_1_2025-08-12_19-26-49.jpg",
    additionalImages: ["/images/haut/photo_2_2025-08-12_19-26-49.jpg", "/images/haut/photo_3_2025-08-12_19-26-50.jpg"],
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
    price: "119,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise haut de gamme avec broderies artisanales complexes, symbole d'élégance et de raffinement.",
    image: "/images/haut/photo_2_2025-08-12_19-24-44.jpg",
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
    price: "89,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise inspirée des motifs ancestraux africains, alliance parfaite entre tradition et modernité.",
    image: "/images/haut/photo_3_2025-08-12_19-24-44.jpg",
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
    price: "129,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise d'exception avec broderies en fil d'or, pour les occasions les plus prestigieuses.",
    image: "/images/haut/photo_5_2025-08-12_19-24-44.jpg",
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
    price: "79,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise moderne en tissu wax aux couleurs vives, parfaite pour un style affirmé et contemporain.",
    image: "/images/haut/photo_6_2025-08-12_19-24-44.jpg",
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
    price: "99,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise de cérémonie avec broderies fines et détaillées, idéale pour les mariages et événements formels.",
    image: "/images/haut/photo_8_2025-08-12_19-24-44.jpg",
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
    price: "104,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise prestige avec motifs africains traditionnels revisités, symbole d'élégance et d'authenticité.",
    image: "/images/haut/photo_9_2025-08-12_19-24-44.jpg",
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
    price: "84,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise tendance avec motifs géométriques inspirés de l'art africain contemporain.",
    image: "/images/haut/photo_11_2025-08-12_19-24-44.jpg",
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
    price: "94,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise artisanale avec broderies traditionnelles réalisées à la main par des artisans experts.",
    image: "/images/haut/photo_12_2025-08-12_19-24-44.jpg",
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
    price: "89,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise premium avec motifs ethniques subtils, alliance parfaite entre élégance et tradition.",
    image: "/images/haut/photo_14_2025-08-12_19-24-44.jpg",
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
    price: "119,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Pièce exclusive de la collection Khalil, chemise haut de gamme avec finitions luxueuses et design unique.",
    image: "/images/haut/photo_15_2025-08-12_19-24-44.jpg",
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
    price: "129,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "La chemise signature de Khalil Collection, symbole d'élégance et de raffinement intemporel.",
    image: "/images/haut/photo_17_2025-08-12_19-24-44.jpg",
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
    price: "114,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise festive avec broderies dorées luxueuses, idéale pour les célébrations et occasions spéciales.",
    image: "/images/haut/photo_2_2025-08-12_19-26-49.jpg",
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
    price: "99,99 €",
    category: "homme",
    subcategory: "chemises",
    description: "Chemise traditionnelle de la collection Khalil, alliance parfaite entre héritage culturel et confort moderne.",
    image: "/images/haut/photo_3_2025-08-12_19-26-50.jpg",
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
    subcategory: "boubous-traditionnelles",
    description: "Boubou traditionnel de luxe avec broderies en fil d'or, symbole de royauté et d'élégance pour les cérémonies prestigieuses.",
    image: "/images/boubou-traditionnel/photo_1_2025-08-12_19-31-00.jpg",
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
    subcategory: "boubous-traditionnelles",
    description: "Grand boubou cérémonial avec broderies complexes et finitions raffinées, idéal pour les mariages et grandes occasions.",
    image: "/images/boubou-traditionnel/photo_2_2025-08-12_19-31-00.jpg",
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
    subcategory: "boubous-traditionnelles",
    description: "Pièce maîtresse de la collection Khalil, ce boubou prestige incarne l'élégance africaine dans sa forme la plus raffinée.",
    image: "/images/boubou-traditionnel/photo_3_2025-08-12_19-31-00.jpg",
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
    subcategory: "boubous-traditionnelles",
    description: "Boubou traditionnel authentique confectionné selon les techniques ancestrales, alliance parfaite entre tradition et confort.",
    image: "/images/boubou-traditionnel/photo_4_2025-08-12_19-31-00.jpg",
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
    subcategory: "boubous-traditionnelles",
    description: "Boubou majestueux avec broderies royales complexes, symbole de distinction et de raffinement pour les grandes occasions.",
    image: "/images/boubou-traditionnel/photo_5_2025-08-12_19-31-00.jpg",
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
    subcategory: "boubous-traditionnelles",
    description: "Boubou de luxe avec broderies artisanales méticuleuses réalisées à la main par des maîtres artisans.",
    image: "/images/boubou-traditionnel/photo_6_2025-08-12_19-31-00.jpg",
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
    subcategory: "boubous-traditionnelles",
    description: "Boubou de cérémonie premium avec finitions impeccables et broderies élégantes, parfait pour les événements formels.",
    image: "/images/boubou-traditionnel/photo_7_2025-08-12_19-31-00.jpg",
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
    subcategory: "boubous-traditionnelles",
    description: "Le boubou signature de la maison Khalil, symbole d'excellence et d'élégance intemporelle pour l'homme raffiné.",
    image: "/images/boubou-traditionnel/photo_8_2025-08-12_19-31-00.jpg",
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
    image: "/images/broderie-fait-main/photo_1_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_2_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_3_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_4_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_5_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_6_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_7_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_8_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_9_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_10_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_11_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_12_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_13_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_14_2025-08-12_19-28-15.jpg",
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
    image: "/images/broderie-fait-main/photo_15_2025-08-12_19-28-15.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou royal avec broderies en fil d'or véritable, symbole de royauté et d'opulence pour les occasions les plus prestigieuses.",
    image: "/images/grand-boubou/photo_1_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou cérémonial de prestige avec broderies complexes et finitions raffinées, créé pour les mariages et cérémonies importantes.",
    image: "/images/grand-boubou/photo_2_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Pièce maîtresse de la collection Khalil, ce grand boubou majestueux incarne la quintessence de l'élégance africaine.",
    image: "/images/grand-boubou/photo_3_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou traditionnel authentique confectionné selon les techniques ancestrales, alliance parfaite entre tradition et confort moderne.",
    image: "/images/grand-boubou/photo_4_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou avec broderies royales complexes, symbole de distinction et de raffinement pour les grandes occasions.",
    image: "/images/grand-boubou/photo_5_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou de luxe avec broderies en fil d'or méticuleuses réalisées à la main par des maîtres artisans.",
    image: "/images/grand-boubou/photo_6_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou de cérémonie premium avec finitions impeccables et broderies élégantes, parfait pour les événements formels.",
    image: "/images/grand-boubou/photo_7_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Le grand boubou signature de la maison Khalil, symbole d'excellence et d'élégance intemporelle pour l'homme raffiné.",
    image: "/images/grand-boubou/photo_8_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou prestige de la collection royale avec broderies somptueuses et détails raffinés pour une allure majestueuse.",
    image: "/images/grand-boubou/photo_9_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou de mariage luxueux avec broderies exceptionnelles, créé pour le plus beau jour de votre vie.",
    image: "/images/grand-boubou/photo_10_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou cérémonial de prestige avec broderies en fil d'or, symbole de distinction et d'opulence pour les grandes occasions.",
    image: "/images/grand-boubou/photo_11_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou traditionnel luxueux avec broderies raffinées, alliance parfaite entre héritage culturel et confort moderne.",
    image: "/images/grand-boubou/photo_12_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou prestige avec broderies royales complexes, symbole de distinction et de raffinement pour les cérémonies importantes.",
    image: "/images/grand-boubou/photo_13_2025-08-12_19-32-52.jpg",
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
    subcategory: "grand-boubou",
    description: "Grand boubou premium de la collection Khalil avec broderies exclusives et finitions luxueuses, symbole d'élégance intemporelle.",
    image: "/images/grand-boubou/photo_14_2025-08-12_19-32-52.jpg",
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
    name: "Ensemble Fillage Traditionnel",
    price: "179,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble traditionnel avec technique de fillage authentique, alliance parfaite entre savoir-faire ancestral et confort moderne.",
    image: "/images/modele-fillage/photo_1_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fillage traditionnel",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 59,
    name: "Tunique Fillage Artisanal",
    price: "159,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tunique avec fillage artisanal méticuleux réalisé à la main par des maîtres artisans, pièce unique et raffinée.",
    image: "/images/modele-fillage/photo_2_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Crème", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fillage artisanal",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 60,
    name: "Ensemble Fillage Cérémonial",
    price: "189,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble cérémonial avec fillage complexe et finitions raffinées, idéal pour les mariages et célébrations importantes.",
    image: "/images/modele-fillage/photo_3_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et fillage traditionnel",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 61,
    name: "Tunique Fillage Collection Khalil",
    price: "169,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Pièce exclusive de la collection Khalil, tunique avec fillage haut de gamme et finitions luxueuses.",
    image: "/images/modele-fillage/photo_4_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Beige", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fillage artisanal",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 62,
    name: "Ensemble Fillage Prestige",
    price: "199,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble prestige avec technique de fillage complexe, symbole de distinction et de raffinement pour les occasions spéciales.",
    image: "/images/modele-fillage/photo_5_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et fillage de luxe",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 63,
    name: "Tunique Fillage Traditionnel Luxe",
    price: "169,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tunique traditionnelle avec fillage luxueux, confectionnée selon les techniques ancestrales avec une touche de modernité.",
    image: "/images/modele-fillage/photo_6_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Beige", "Marron"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fillage traditionnel",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 64,
    name: "Ensemble Fillage Mariage",
    price: "209,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble complet pour mariage avec fillage luxueux et détaillé, créé pour les moments les plus importants de la vie.",
    image: "/images/modele-fillage/photo_7_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et fillage de luxe",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 65,
    name: "Tunique Cérémonie Fillage Précis",
    price: "179,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tunique de cérémonie avec fillage précis et méticuleux, symbole d'élégance et de raffinement pour les occasions formelles.",
    image: "/images/modele-fillage/photo_8_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Beige", "Or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fillage fin",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 66,
    name: "Ensemble Fillage Royal",
    price: "189,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble royal avec fillage complexe, symbole de distinction et d'élégance pour les grandes occasions.",
    image: "/images/modele-fillage/photo_9_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et fillage luxueux",
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 67,
    name: "Tunique Fillage Artisanal Luxe",
    price: "179,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tunique de luxe avec fillage artisanal méticuleux réalisé à la main par des artisans experts.",
    image: "/images/modele-fillage/photo_10_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fillage artisanal",
    featured: false,
    bestseller: true,
    new: true
  },
  {
    id: 68,
    name: "Ensemble Cérémonie Fillage Doré",
    price: "199,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble de cérémonie avec fillage doré élégant, parfait pour les mariages et événements formels.",
    image: "/images/modele-fillage/photo_11_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Crème"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et fils dorés",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 69,
    name: "Tunique Signature Fillage Collection Khalil",
    price: "189,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "La tunique signature de la collection Khalil, symbole d'excellence et de raffinement avec fillage exclusif.",
    image: "/images/modele-fillage/photo_12_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et fillage luxueux",
    featured: true,
    bestseller: true,
    new: true
  },
  {
    id: 70,
    name: "Ensemble Majestueux Fillage Royal",
    price: "209,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble majestueux avec fillage royal complexe, symbole de prestige et d'élégance pour les occasions spéciales.",
    image: "/images/modele-fillage/photo_13_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu royal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fillage or",
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 71,
    name: "Tunique Festive Fillage Luxueux",
    price: "169,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Tunique festive avec fillage luxueux, idéale pour les célébrations et événements spéciaux.",
    image: "/images/modele-fillage/photo_14_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium et fillage fin",
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 72,
    name: "Ensemble Premium Fillage Artisanal",
    price: "189,99 €",
    category: "homme",
    subcategory: "fillage",
    description: "Ensemble premium avec fillage artisanal détaillé, alliance parfaite entre tradition et élégance contemporaine.",
    image: "/images/modele-fillage/photo_15_2025-08-12_19-29-16.jpg",
    additionalImages: [],
    colors: ["Blanc", "Or", "Bleu"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien et fillage artisanal",
    featured: true,
    bestseller: true,
    new: true
  }
];

// Vérifier le nombre de produits générés
console.log(`Nombre total d'images disponibles: ${allAvailableImages.length}`);
console.log(`Nombre de produits générés: ${productsData.length}`);

// Mettre à jour tous les produits avec des références et des prix en FCFA
const allProducts = (() => {
  // Regrouper les produits par catégorie pour la numérotation
  const categoriesMap = {};
  
  return productsData.map(product => {
    const { category, subcategory } = product;
    
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
    if (product.image && product.image.includes('/images/haut/')) {
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
  
  console.log('Filtrage par catégorie:', category);
  console.log('Filtrage par sous-catégorie:', subcategory);
  console.log('Produits avant filtrage:', filtered.length);
  
  if (category) {
    filtered = filtered.filter(product => product.category === category);
    console.log('Produits après filtrage par catégorie:', filtered.length);
  }
  
  if (subcategory) {
    filtered = filtered.filter(product => product.subcategory === subcategory);
    console.log('Produits après filtrage par sous-catégorie:', filtered.length);
    console.log('Sous-catégories disponibles:', [...new Set(allProducts.map(p => p.subcategory))]);
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
