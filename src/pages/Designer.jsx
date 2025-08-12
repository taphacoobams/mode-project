import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import DesignerProfile from '../components/brand/DesignerProfile';
import DesignerMessage from '../components/brand/DesignerMessage';
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

      <PageHeader 
        title="Le Designer"
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Le Designer' }
        ]}
      />
      
      <div className="py-16">
        <div className="container">
          <DesignerProfile />
          <div className="py-16 bg-gray-50 my-12">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">
                  Notre philosophie
                </h2>
                <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
                <p className="text-gray-700">
                  Chez Khalil Collection, nous croyons que la mode est bien plus qu'un simple vêtement. 
                  C'est une expression de soi, un héritage culturel et une vision du monde. 
                  Notre mission est de créer des pièces qui vous permettent d'exprimer votre 
                  individualité tout en célébrant la richesse de la culture africaine.
                </p>
              </div>
            </div>
          </div>
          <DesignerMessage />
        </div>
      </div>
      
      <ManifestoBanner />
    </>
  );
};

export default Designer;
