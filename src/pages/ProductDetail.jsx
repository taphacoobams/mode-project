import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaWhatsapp } from 'react-icons/fa';
import PageHeader from '../components/ui/PageHeader';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { allProducts } from '../utils/productUtils';

const ProductDetail = () => {
  const { reference, category } = useParams();
  const location = useLocation();
  
  // Les sélecteurs de taille et quantité ont été supprimés selon la demande du client
  
  // Trouver le produit correspondant à la référence
  const product = allProducts.find(p => p.reference.toLowerCase() === reference) || {
    name: 'Produit non trouvé',
    price: '',
    image: '',
    description: 'Ce produit n\'est plus disponible.',
    category: '',
    stock: 0
  };
  
  // Trouver des produits similaires (même catégorie, mais pas le même produit)
  const similarProducts = allProducts
    .filter(p => p.category === product.category && p.reference.toLowerCase() !== reference && p.image && p.image.trim() !== '')
    .slice(0, 4);
  
  useEffect(() => {
    // Remonter en haut de la page lors du chargement
    window.scrollTo(0, 0);
  }, [reference, category]);
  
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
                  className="w-full h-full object-cover object-center"
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
          </div>
          
          {/* Informations produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-medium text-kc-black mb-2">{product.name}</h1>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium text-kc-gold">{product.price}</span>
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
            
            {/* Les sélecteurs de taille et quantité ont été supprimés selon la demande du client */}
            
            {/* Le bouton WhatsApp sous le prix a été supprimé */}
          </div>
        </div>
      </section>

      {/* Détails du produit */}
      {product.details && (
        <section className="container py-12 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-medium text-kc-black mb-6">Détails</h2>
          <ul className="space-y-3 text-gray-700">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-kc-gold mr-2">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Produits similaires */}
      {similarProducts.length > 0 && (
        <section className="container py-12 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-medium text-kc-black mb-8">PRODUITS SIMILAIRES</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.reference.toLowerCase()}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-gray-100 mb-3">
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-kc-black mb-2 hover:text-kc-gold transition-colors">{product.name}</h3>
                  <p className="text-kc-gold font-semibold">{product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Bouton WhatsApp flottant */}
      <WhatsAppButton 
        message={`Bonjour, je vous contacte depuis votre site Khalil Collection\n\nJe suis intéressé(e) par ce produit: ${reference.toUpperCase()} sur https://khalil-collection.vercel.app/product/${reference.toLowerCase()}`}
      />
    </>
  );
};

export default ProductDetail;
