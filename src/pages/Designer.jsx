import React from 'react';
import { Helmet } from 'react-helmet-async';
import DesignerProfile from '../components/brand/DesignerProfile';
import DesignerMessage from '../components/brand/DesignerMessage';
import PartnershipsSection from '../components/brand/PartnershipsSection';
import ManifestoBanner from '../components/home/ManifestoBanner';

// Import BrandPresentation après avoir défini le composant Designer
// pour éviter les dépendances circulaires
const Designer = () => {
  return (
    <>
      <Helmet>
        <title>Le Designer | Khalil Collection - Mode & Broderie</title>
        <meta name="description" content="Découvrez le designer derrière Khalil Collection, sa vision et son parcours dans le monde de la mode et de la broderie africaine." />
        <meta property="og:title" content="Le Designer | Khalil Collection" />
        <meta property="og:description" content="Découvrez le designer derrière Khalil Collection, sa vision et son parcours dans le monde de la mode et de la broderie africaine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khalilcollection.com/designer" />
      </Helmet>

      {/* PageHeader supprimé */}
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">Designer</h2>
            <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">Découvrez l'histoire et la vision du créateur de Khalil Collection</p>
          </div>
          <DesignerProfile />
          <DesignerMessage />
          <PartnershipsSection />
        </div>
      </div>
      
      <ManifestoBanner />
    </>
  );
};

export default Designer;
