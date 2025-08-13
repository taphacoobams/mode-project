import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
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
          <DesignerMessage />
          <PartnershipsSection />
        </div>
      </div>
      
      <ManifestoBanner />
    </>
  );
};

export default Designer;
