import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import { FiGift, FiDownload, FiInfo } from 'react-icons/fi';
import ManifestoBanner from '../components/home/ManifestoBanner';

const ChequeCadeau = () => {

  return (
    <>
      <Helmet>
        <title>Chèque Cadeau | Khalil Collection - Mode & Broderie</title>
        <meta name="description" content="Téléchargez un chèque cadeau Khalil Collection pour offrir à vos proches et faites-leur découvrir notre collection de vêtements africains premium." />
        <meta property="og:title" content="Chèque Cadeau | Khalil Collection" />
        <meta property="og:description" content="Téléchargez un chèque cadeau Khalil Collection pour offrir à vos proches et faites-leur découvrir notre collection de vêtements africains premium." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khalilcollection.com/cheque-cadeau" />
      </Helmet>

      {/* PageHeader supprimé */}
      
      <div className="py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">Offrez l'élégance Khalil Collection</h2>
            <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Faites plaisir à vos proches avec un chèque cadeau Khalil Collection et permettez-leur 
              de découvrir notre univers de mode africaine contemporaine.  
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-6">
                  <div className="bg-kc-gold/10 p-3 rounded-full mr-4">
                    <FiGift className="text-kc-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Un cadeau unique</h3>
                    <p className="text-gray-600">Offrez à vos proches la possibilité de choisir parmi nos créations exclusives.</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-kc-gold/10 p-3 rounded-full mr-4">
                    <FiInfo className="text-kc-gold text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Comment ça marche</h3>
                    <p className="text-gray-600">Téléchargez le PDF, remplissez-le et présentez-le en boutique ou envoyez-le par email.</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="font-medium text-kc-black">
                    Nos chèques cadeaux sont disponibles à partir de 25 000 FCFA et sont valables pendant un an 
                    à compter de la date d'achat.  
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg">
                <img 
                  src="/cheque.jpg" 
                  alt="Aperçu du chèque cadeau" 
                  className="w-full max-w-xs mb-6 shadow-md rounded-md" 
                />
                
                <a 
                  href="/cheque.pdf" 
                  download
                  className="flex items-center justify-center bg-kc-gold hover:bg-kc-gold/90 text-white font-medium py-3 px-6 rounded-md transition-colors w-full max-w-xs"
                >
                  <FiDownload className="mr-2" />
                  Télécharger le chèque cadeau (PDF)
                </a>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Pour toute question concernant les chèques cadeaux, contactez-nous à 
                  <a href="mailto:khalilcollections@gmail.com" className="text-kc-gold hover:underline"> khalilcollections@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-kc-black/5 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Conditions d'utilisation</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Le chèque cadeau est valable un an à compter de la date d'achat</li>
              <li>Utilisable en une ou plusieurs fois jusqu'à épuisement du montant</li>
              <li>Non remboursable et non échangeable contre des espèces</li>
              <li>Utilisable en boutique ou sur notre site internet</li>
              <li>Pour utiliser votre chèque cadeau en ligne, contactez-nous par email</li>
            </ul>
          </div>
        </div>
      </div>
      
      <ManifestoBanner />
    </>
  );
};

export default ChequeCadeau;
