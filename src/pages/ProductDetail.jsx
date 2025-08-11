import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import supprimé car le bouton de partage a été retiré
import { FaWhatsapp } from 'react-icons/fa';
import PageHeader from '../components/ui/PageHeader';

// Importer les données de produits depuis productUtils
import { allProducts } from '../utils/productUtils';

const ProductDetail = () => {
  const { category, id } = useParams();
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    // Récupérer l'URL complète de la page actuelle
    const fullUrl = window.location.origin + location.pathname;
    setCurrentUrl(fullUrl);
  }, [location]);
  
  // Récupérer le produit depuis allProducts en utilisant l'ID
  const product = allProducts.find(p => p.id.toString() === id) || {};
  const similarProducts = allProducts
    .filter(p => p.id.toString() !== id && p.category === product.category)
    .slice(0, 4);
  
  if (!product.id) {
    return (
      <div className="container py-20">
        <h1 className="text-2xl font-medium">Produit non trouvé</h1>
        <Link to="/nos-creations" className="text-primary hover:underline mt-4 inline-block">
          Retour aux créations
        </Link>
      </div>
    );
  }



  // Déterminer le nom de la catégorie pour l'affichage dans le fil d'Ariane
  const getCategoryName = (categorySlug) => {
    const categories = {
      'collection-africa': 'Collection Africa',
      'collection-heritage': 'Collection Héritage',
      'accessoires': 'Accessoires'
    };
    return categories[categorySlug] || categorySlug;
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | I. K. MBENGUE</title>
        <meta name="description" content={`Découvrez ${product.name}, une création exclusive de I. K. MBENGUE. ${product.description?.substring(0, 150)}...`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            image: product.image || '',
            description: product.description || `${product.name} - I. K. MBENGUE Collection`,
            brand: {
              '@type': 'Brand',
              name: 'I. K. MBENGUE'
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
        title={product.name}
        height="sm"
        backgroundImage="/images/backgrounds/breadcrumb-bg.jpg"
        overlay={true}
        textAlignment="left"
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Nos créations', url: '/nos-creations' },
          { label: category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), url: `/nos-creations?category=${category}` },
          { label: product.name, url: null }
        ]}
      />

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Galerie d'images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
              {product.image ? (
                <LazyLoadImage
                  src={product.image}
                  alt={product.name}
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">Image non disponible</span>
                </div>
              )}
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-sm font-medium">
                  {product.discount}
                </div>
              )}
            </div>
            
            {/* Suppression de la galerie de miniatures car nous n'avons qu'une seule image par produit */}
          </div>
          
          {/* Informations produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-medium text-secondary mb-2">{product.name}</h1>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium text-secondary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">{product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="text-red-600 font-medium">{product.discount}</span>
                )}
              </div>
            </div>
            
            {product.description && (
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            )}
            
            {/* Sélecteur de taille */}
            {product.sizes && (
              <div>
                <h3 className="text-sm font-medium text-secondary mb-2">TAILLE</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`px-4 py-2 border ${
                        selectedSize === size 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-gray-300 hover:border-primary'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Sélecteur de quantité */}
            <div>
              <h3 className="text-sm font-medium text-secondary mb-2">QTÉ</h3>
              <div className="flex items-center border border-gray-300">
                <button 
                  className="px-4 py-2 text-gray-500 hover:text-primary"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  aria-label="Diminuer la quantité"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  className="px-4 py-2 text-gray-500 hover:text-primary"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Actions supprimées */}
            
            <div className="mt-4 p-4 bg-gray-100 rounded-sm">
              <p className="text-sm text-gray-700">
                Pour commander ce produit, utilisez le bouton WhatsApp flottant pour nous contacter directement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Détails du produit */}
      {product.details && (
        <section className="container py-12 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-medium text-secondary mb-6">Détails</h2>
          <ul className="space-y-3 text-gray-700">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Produits similaires */}
      {similarProducts.length > 0 && (
        <section className="container py-12 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-medium text-secondary mb-8">PRODUITS SIMILAIRES</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <div key={product.id} className="group">
                <Link to={`/creations/${product.category}/${product.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-gray-100 mb-3">
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-secondary mb-2 hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-primary font-semibold">{product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Bouton WhatsApp flottant */}
      <a 
        href={`https://wa.me/221777777777?text=Je%20suis%20intéressé(e)%20par%20ce%20produit:%20${encodeURIComponent(product.name)}%20${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
        aria-label="Commander via WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
};

export default ProductDetail;
