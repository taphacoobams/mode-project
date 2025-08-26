import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiMaximize2, FiX, FiEye, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PageHeader from '../components/ui/PageHeader';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import QuickView from '../components/ui/QuickView';
import { allProducts } from '../utils/productUtils';

const ProductDetail = () => {
  const { reference, category } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  // Remonter en haut de la page lors du chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [reference, category]);
  
  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };
  
  // Les sélecteurs de taille et quantité ont été supprimés selon la demande du client
  
  // Trouver le produit correspondant à la référence
  let product = allProducts.find(p => p.reference.toLowerCase() === reference);
  
  // Appliquer les prix barrés uniquement à la catégorie chemises
  if (product && product.subcategory === 'chemises') {
    product = {
      ...product,
      hasDiscount: true,
      originalPrice: '25 000 FCFA',
      discountedPrice: '15 000 FCFA',
      discountPercentage: 40 // (25000 - 15000) / 25000 * 100 = 40%
    };
  } else if (product) {
    product = {
      ...product,
      hasDiscount: false
    };
  }
  
  // Si le produit n'existe pas, afficher un message simple
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-serif font-medium text-kc-black mb-4">Ce produit n'existe pas</h1>
        <Link to="/creations" className="inline-block mt-4 px-6 py-2 bg-kc-gold text-kc-black rounded hover:bg-kc-gold/80 transition-colors">
          Retour aux créations
        </Link>
      </div>
    );
  }
  
  // Recherche des produits de la même sous-catégorie
  const sameSubcategoryProducts = allProducts
    .filter(p => {
      return p.reference?.toLowerCase() !== reference && 
             p.image && p.image.trim() !== '' && 
             p.category === product.category && 
             p.subcategory && product.subcategory && 
             p.subcategory === product.subcategory;
    });
    
  // Si on a assez de produits dans la même sous-catégorie, on les utilise
  // Sinon, on complète avec des produits de la même catégorie
  let similarProducts = [];
  
  if (sameSubcategoryProducts.length >= 10) {
    // Suffisamment de produits dans la même sous-catégorie
    similarProducts = sameSubcategoryProducts.slice(0, 10);
  } else {
    // Pas assez de produits dans la même sous-catégorie, on ajoute des produits de la même catégorie
    const sameCategoryProducts = allProducts
      .filter(p => {
        return p.reference?.toLowerCase() !== reference && 
               p.image && p.image.trim() !== '' && 
               p.category === product.category && 
               (!p.subcategory || !product.subcategory || p.subcategory !== product.subcategory);
      });
    
    // Combiner les deux listes et limiter à 10 produits
    similarProducts = [...sameSubcategoryProducts, ...sameCategoryProducts].slice(0, 10);
  }
  
  // Hook déjà appelé en haut du composant
  
  return (
    <>
      <Helmet>
        <title>{product.name} | Khalil Collection</title>
        <meta name="description" content={`Découvrez ${product.name}, une création exclusive de Khalil Collection. ${product.description?.substring(0, 150)}...`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            image: product.image || '',
            description: product.description || `${product.name} - Khalil Collection`,
            brand: {
              '@type': 'Brand',
              name: 'Khalil Collection'
            },
            offers: {
              '@type': 'Offer',
              price: product.price.replace(/[^\d]/g, ''),
              priceCurrency: 'XOF',
              availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
            }
          })}
        </script>
      </Helmet>
      
      <PageHeader 
        height="sm"
        backgroundImage=""
        overlay={false}
        textAlignment="left"
        hideTitle={true}
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Nos créations', url: '/creations' },
          { label: product.category === 'homme' ? 'Homme' : product.category === 'femme' ? 'Femme' : 'Produits', 
            url: product.category ? `/creations/productcategory/${product.category}` : '/creations/productcategory' },
          { label: product.subcategory ? product.subcategory.charAt(0).toUpperCase() + product.subcategory.slice(1).replace(/-/g, ' ') : '', 
            url: product.subcategory ? `/creations/productcategory/${product.category}/${product.subcategory}` : '' },
          { label: product.reference }
        ]}
        customClass="bg-kc-black text-kc-gold text-lg py-4"
      />

      <section className="container px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Galerie d'images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 rounded-lg shadow-lg border border-gray-200">
              {product.image ? (
                <>
                  <LazyLoadImage
                    src={product.image}
                    alt={product.name}
                    effect="blur"
                    className="w-full h-full object-contain object-center"
                    wrapperClassName="w-full h-full"
                    placeholderSrc={require("../assets/images/placeholder.png")}
                  />
                  <button 
                    onClick={() => setShowFullscreenImage(true)} 
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-300"
                    aria-label="Afficher en plein écran"
                  >
                    <FiMaximize2 size={20} />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">Image non disponible</span>
                </div>
              )}
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium rounded-full shadow-md">
                  {product.discount}
                </div>
              )}
            </div>
          </div>
          
          {/* Informations produit */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-kc-black">{product.name}</h1>
            <div className="flex items-center space-x-3">
              {product.hasDiscount ? (
                <>
                  <span className="text-xl sm:text-2xl font-semibold text-kc-gold">{product.discountedPrice}</span>
                  <span className="text-sm sm:text-base text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-sm sm:text-base bg-red-500 text-white px-2 py-0.5 rounded-md">-{product.discountPercentage}%</span>
                </>
              ) : (
                <span className="text-xl sm:text-2xl font-semibold text-kc-gold">{product.price}</span>
              )}
            </div>
            
            {product.description && (
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                {product.description}
              </p>
            )}
            
            <div className="mt-4 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-md">
              <p className="text-gray-700 text-sm sm:text-base">
                <strong>Pour commander ce produit</strong>, utilisez le bouton WhatsApp flottant pour nous contacter directement.
              </p>
            </div>
            
            {/* Les sélecteurs de taille et quantité ont été supprimés selon la demande du client */}
            
            {/* Le bouton WhatsApp sous le prix a été supprimé */}
          </div>
        </div>
      </section>

      {/* Détails du produit */}
      <section className="container px-4 sm:px-6 py-6 sm:py-8 border-t border-gray-200">
        <div className="mb-6">
          <div className="inline-block bg-gray-100 px-6 py-2 rounded-t-lg">
            <h2 className="text-lg font-medium">Détails</h2>
          </div>
          <div className="border-t-2 border-gray-300"></div>
        </div>
        
        <div className="bg-white p-3 sm:p-4 rounded-md shadow-sm">
          {product.description && (
            <p className="text-gray-700 mb-4">{product.description}</p>
          )}
          
          {product.details && (
            <ul className="space-y-2 text-gray-700">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-kc-gold mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
          
          {/* Informations techniques */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="font-medium mb-2 text-sm sm:text-base">Informations techniques :</p>
            <ul className="space-y-1 text-gray-700 text-xs sm:text-sm md:text-base">
              {/* Afficher le matériau s'il existe */}
              {product.material && (
                <li>• Tissu: {product.material}</li>
              )}
              
              {/* Entretien selon le type de produit */}
              {product.subcategory === 'grands-boubous' ? (
                <li>• Entretien: Nettoyage professionnel recommandé pour préserver les broderies</li>
              ) : product.subcategory === 'boubous-traditionnels' ? (
                <li>• Entretien: Lavage à sec ou à la main avec précaution</li>
              ) : product.subcategory === 'broderies' ? (
                <li>• Entretien: Lavage à sec uniquement pour préserver les détails</li>
              ) : (
                <li>• Entretien: Lavage à sec recommandé</li>
              )}
              
              {/* Fabrication selon la catégorie */}
              {product.category === 'homme' ? (
                <li>• Fabrication: Artisanat sénégalais de haute qualité</li>
              ) : product.category === 'femme' ? (
                <li>• Fabrication: Confection artisanale par nos couturières expertes</li>
              ) : (
                <li>• Fabrication: Artisanat local</li>
              )}
              
              {/* Caractéristiques spécifiques selon la sous-catégorie */}
              {product.subcategory === 'grands-boubous' && (
                <li>• Caractéristique: Broderies luxueuses faites à la main</li>
              )}
              {product.subcategory === 'boubous-traditionnels' && (
                <li>• Caractéristique: Coupe traditionnelle authentique</li>
              )}
              {product.subcategory === 'broderies' && (
                <li>• Caractéristique: Motifs exclusifs Khalil Collection</li>
              )}
              {product.subcategory === 'chemises' && (
                <li>• Caractéristique: Coupe moderne et confortable</li>
              )}
              {product.subcategory === 'pantalons' && (
                <li>• Caractéristique: Ajustement parfait et finitions soignées</li>
              )}
            </ul>
          </div>
          
          {/* Origine du produit selon la sous-catégorie */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="font-medium mb-2 text-sm sm:text-base">Origine :</p>
            {product.subcategory === 'grands-boubous' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Nos grands boubous sont confectionnés à Dakar par des maîtres artisans avec plus de 20 ans d'expérience dans la broderie traditionnelle sénégalaise.</p>
            )}
            {product.subcategory === 'boubous-traditionnels' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Inspirés des traditions vestimentaires ouest-africaines, nos boubous traditionnels sont fabriqués selon des techniques ancestrales transmises de génération en génération.</p>
            )}
            {product.subcategory === 'broderies' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Chaque motif brodé est unique et réalisé à la main par nos artisans brodeurs qui perpétuent un savoir-faire séculaire.</p>
            )}
            {product.subcategory === 'chemises' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Nos chemises allient design contemporain et techniques de confection traditionnelles pour un résultat à la fois moderne et authentique.</p>
            )}
            {product.subcategory === 'pantalons' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Nos pantalons sont taillés et cousus dans nos ateliers de Dakar, avec une attention particulière portée au confort et à la durabilité.</p>
            )}
            {!['grands-boubous', 'boubous-traditionnels', 'broderies', 'chemises', 'pantalons'].includes(product.subcategory) && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Chaque création Khalil Collection est le fruit d'un savoir-faire artisanal sénégalais, alliant tradition et modernité.</p>
            )}
          </div>
          
          {/* Conseils de style selon la sous-catégorie */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="font-medium mb-2 text-sm sm:text-base">Conseils de style :</p>
            {product.subcategory === 'grands-boubous' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Portez ce grand boubou lors des cérémonies importantes comme les mariages ou les fêtes religieuses. Complétez votre tenue avec un chapeau assorti et des babouches en cuir pour un look royal.</p>
            )}
            {product.subcategory === 'boubous-traditionnels' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Ce boubou traditionnel convient parfaitement aux célébrations familiales et aux sorties du vendredi. Associez-le à un pantalon assorti pour un ensemble harmonieux.</p>
            )}
            {product.subcategory === 'broderies' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Cette pièce brodée peut être portée aussi bien lors d'occasions formelles que pour des événements semi-formels. Sa polyvalence en fait un incontournable de votre garde-robe.</p>
            )}
            {product.subcategory === 'chemises' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Cette chemise se porte aussi bien avec un pantalon de costume qu'avec un jean pour un look décontracté chic. Idéale pour le bureau comme pour les sorties.</p>
            )}
            {product.subcategory === 'pantalons' && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Ce pantalon s'associe parfaitement avec nos chemises et hauts pour créer un ensemble cohérent. Sa coupe vous assure confort et élégance tout au long de la journée.</p>
            )}
            {!['grands-boubous', 'boubous-traditionnels', 'broderies', 'chemises', 'pantalons'].includes(product.subcategory) && (
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">Cette pièce Khalil Collection a été conçue pour vous offrir style et confort. N'hésitez pas à demander des conseils personnalisés à notre équipe.</p>
            )}
          </div>
          
          {/* Adresse */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">Fann Hock Rue 55X70, Dakar, Sénégal</p>
          </div>
        </div>
      </section>

      {/* Produits similaires */}
      {similarProducts.length > 0 && (
        <section className="container px-4 sm:px-6 py-8 sm:py-12 border-t border-gray-200">
          <h2 className="text-xl sm:text-2xl font-serif font-medium text-kc-black mb-4 sm:mb-8">PRODUITS SIMILAIRES</h2>
          
          <div className="relative">
            {/* Flèche gauche */}
            {currentIndex > 0 && (
              <button 
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 w-10 h-10 rounded-full bg-kc-gold text-kc-black hover:bg-kc-gold/80 flex items-center justify-center shadow-md"
                aria-label="Produit précédent"
              >
                <FaChevronLeft size={16} />
              </button>
            )}
            
            {/* Flèche droite */}
            {currentIndex < similarProducts.length - 6 && (
              <button 
                onClick={() => setCurrentIndex(Math.min(similarProducts.length - 6, currentIndex + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 w-10 h-10 rounded-full bg-kc-gold text-kc-black hover:bg-kc-gold/80 flex items-center justify-center shadow-md"
                aria-label="Produit suivant"
              >
                <FaChevronRight size={16} />
              </button>
            )}
            
            <div className="flex overflow-x-auto gap-4 px-2 sm:px-4 pb-4 hide-scrollbar">
              {similarProducts.slice(currentIndex, currentIndex + 6).map(product => (
                <div key={product.id} className="group flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px]">
                  <Link to={`/product/${product.reference.toLowerCase()}`} className="block">
                    <div className="relative overflow-hidden aspect-square bg-gray-100 mb-3 rounded-lg shadow-md border border-gray-200 group">
                      <LazyLoadImage
                        src={product.image}
                        alt={product.name}
                        effect="blur"
                        className="w-full h-full object-contain object-center"
                        wrapperClassName="w-full h-full"
                        placeholderSrc={require("../assets/images/placeholder.png")}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      
                      {/* Boutons d'action */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuickView(product);
                          }}
                          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-kc-gold hover:text-kc-black transition-colors"
                          aria-label={`Aperçu rapide de ${product.name}`}
                        >
                          <FiEye size={18} />
                        </button>
                        <a
                          href={`https://wa.me/221784631010?text=${encodeURIComponent(`Bonjour, je vous contacte depuis votre site Khalil Collection\n\nJe suis intéressé(e) par ce produit: ${product.reference.toUpperCase()} sur https://khalil-collection.vercel.app/product/${product.reference.toLowerCase()}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-green-500 shadow-md flex items-center justify-center hover:bg-green-600 text-white transition-colors"
                          aria-label={`Commander ${product.name} via WhatsApp`}
                        >
                          <FaWhatsapp size={18} />
                        </a>
                      </div>
                      
                      <Link 
                        to={`/product/${product.reference.toLowerCase()}`}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-kc-gold text-kc-black w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-kc-gold/80"
                        aria-label={`Voir ${product.name}`}
                      >
                        <FiArrowRight size={16} />
                      </Link>
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-lg font-medium text-kc-black mb-1 sm:mb-2 hover:text-kc-gold transition-colors line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      {product.category === 'chemises' ? (
                        <>
                          <p className="text-kc-gold font-semibold text-xs sm:text-sm md:text-base">15 000 FCFA</p>
                          <p className="text-gray-500 text-xs line-through">25 000 FCFA</p>
                        </>
                      ) : (
                        <p className="text-kc-gold font-semibold text-xs sm:text-sm md:text-base">{product.price}</p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      
      {/* Bouton WhatsApp flottant */}
      <WhatsAppButton 
        message={`Bonjour, je vous contacte depuis votre site Khalil Collection\n\nJe suis intéressé(e) par ce produit: ${reference.toUpperCase()} sur https://khalil-collection.vercel.app/product/${reference.toLowerCase()}`}
      />
      
      {/* Modal plein écran pour l'image */}
      {showFullscreenImage && product.image && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setShowFullscreenImage(false)} 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Fermer l'image en plein écran"
          >
            <FiX size={24} />
          </button>
          <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
        </div>
      )}
      
      {/* QuickView Modal pour les produits similaires */}
      <QuickView 
        product={quickViewProduct ? {
          ...quickViewProduct,
          image: quickViewProduct.image
        } : null} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </>
  );
};

export default ProductDetail;
