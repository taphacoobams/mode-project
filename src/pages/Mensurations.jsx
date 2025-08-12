import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import ManifestoBanner from '../components/home/ManifestoBanner';

const Mensurations = () => {
  return (
    <>
      <Helmet>
        <title>Vos mensurations | Khalil Collection - La mode africaine à un autre niveau</title>
        <meta name="description" content="Prenez vos mesures en ligne pour des vêtements Khalil Collection parfaitement ajustés à votre morphologie. Service gratuit pour tous nos clients." />
        <meta property="og:title" content="Vos mensurations | Khalil Collection - La mode africaine à un autre niveau" />
        <meta property="og:description" content="Prenez vos mesures en ligne pour des vêtements Khalil Collection parfaitement ajustés à votre morphologie. Service gratuit pour tous nos clients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://btoure.com/mensurations" />
      </Helmet>

      <PageHeader 
        title="Vos mensurations" 
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Vos mensurations' }
        ]}
      />
      
      <div className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">Vos mensurations</h2>
            <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              Cette page est en cours de développement. Bientôt, vous pourrez y trouver des informations 
              sur comment prendre vos mesures pour des vêtements parfaitement ajustés.
            </p>
            <p className="text-gray-600">
              Pour toute question concernant les mensurations ou les tailles, n'hésitez pas à nous contacter à 
              <a href="mailto:khalilcollections@gmail.com" className="text-kc-gold hover:underline"> khalilcollections@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      
      <ManifestoBanner />
    </>
  );
};

export default Mensurations;
