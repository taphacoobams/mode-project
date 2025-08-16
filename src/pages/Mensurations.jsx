import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import PageHeader from '../components/ui/PageHeader';
import ManifestoBanner from '../components/home/ManifestoBanner';

const Mensurations = () => {
  const [activeTab, setActiveTab] = useState('homme');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Ici, vous pourriez ajouter la logique pour envoyer les données à un serveur
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

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

      {/* PageHeader supprimé */}
      
      <div className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">Formulaire de mensurations</h2>
              <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Pour des vêtements parfaitement ajustés à votre morphologie, veuillez remplir ce formulaire de mensurations.
                Nos tailleurs utiliseront ces informations pour créer des pièces sur mesure qui vous mettront en valeur.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md text-center mb-8"
              >
                <h3 className="text-xl font-bold mb-2">Merci pour vos informations !</h3>
                <p>Nous avons bien reçu vos mensurations. Notre équipe les utilisera pour confectionner vos vêtements sur mesure.</p>
              </motion.div>
            ) : null}

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('homme')}
                className={`py-3 px-6 font-medium text-lg ${activeTab === 'homme' ? 'text-kc-gold border-b-2 border-kc-gold' : 'text-gray-500 hover:text-kc-gold'}`}
              >
                Homme
              </button>
              <button
                onClick={() => setActiveTab('femme')}
                className={`py-3 px-6 font-medium text-lg ${activeTab === 'femme' ? 'text-kc-gold border-b-2 border-kc-gold' : 'text-gray-500 hover:text-kc-gold'}`}
              >
                Femme
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-kc-black">Informations personnelles</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nomComplet" className="block text-gray-700 mb-1">Nom complet</label>
                      <input type="text" id="nomComplet" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-gray-700 mb-1">Téléphone</label>
                      <input type="tel" id="telephone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4 text-kc-black">Mensurations</h3>
                  <div className="space-y-4">
                    {activeTab === 'homme' ? (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="cou" className="block text-gray-700 mb-1">Cou (cm)</label>
                            <input type="number" id="cou" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="epaule" className="block text-gray-700 mb-1">Épaule (cm)</label>
                            <input type="number" id="epaule" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="manche_courte" className="block text-gray-700 mb-1">Manche courte (cm)</label>
                            <input type="number" id="manche_courte" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="manche_longue" className="block text-gray-700 mb-1">Manche longue (cm)</label>
                            <input type="number" id="manche_longue" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="poitrine" className="block text-gray-700 mb-1">Poitrine (cm)</label>
                            <input type="number" id="poitrine" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="tour_bras" className="block text-gray-700 mb-1">Tour de bras (cm)</label>
                            <input type="number" id="tour_bras" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="longueur_chemise" className="block text-gray-700 mb-1">Longueur chemise (cm)</label>
                            <input type="number" id="longueur_chemise" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="tour_ventre" className="block text-gray-700 mb-1">Tour de ventre (cm)</label>
                            <input type="number" id="tour_ventre" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="longueur_tunique" className="block text-gray-700 mb-1">Longueur tunique (cm)</label>
                            <input type="number" id="longueur_tunique" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="longueur_kaftan" className="block text-gray-700 mb-1">Longueur kaftan (cm)</label>
                            <input type="number" id="longueur_kaftan" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="ceinture" className="block text-gray-700 mb-1">Ceinture (cm)</label>
                            <input type="number" id="ceinture" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="tour_hanche" className="block text-gray-700 mb-1">Tour de hanche (cm)</label>
                            <input type="number" id="tour_hanche" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="tour_cuisse" className="block text-gray-700 mb-1">Tour de cuisse (cm)</label>
                            <input type="number" id="tour_cuisse" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="longueur_pantalon" className="block text-gray-700 mb-1">Longueur pantalon (cm)</label>
                            <input type="number" id="longueur_pantalon" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="cou" className="block text-gray-700 mb-1">Cou (cm)</label>
                            <input type="number" id="cou" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="epaule" className="block text-gray-700 mb-1">Épaule (cm)</label>
                            <input type="number" id="epaule" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="manche_courte" className="block text-gray-700 mb-1">Manche courte (cm)</label>
                            <input type="number" id="manche_courte" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="manche_longue" className="block text-gray-700 mb-1">Manche longue (cm)</label>
                            <input type="number" id="manche_longue" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="poitrine" className="block text-gray-700 mb-1">Poitrine (cm)</label>
                            <input type="number" id="poitrine" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="tour_bras" className="block text-gray-700 mb-1">Tour de bras (cm)</label>
                            <input type="number" id="tour_bras" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="longueur_chemise" className="block text-gray-700 mb-1">Longueur chemise (cm)</label>
                            <input type="number" id="longueur_chemise" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="tour_ventre" className="block text-gray-700 mb-1">Tour de ventre (cm)</label>
                            <input type="number" id="tour_ventre" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="longueur_tailleur" className="block text-gray-700 mb-1">Longueur tailleur 3/4 (cm)</label>
                            <input type="number" id="longueur_tailleur" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="longueur_robe" className="block text-gray-700 mb-1">Longueur robe longue (cm)</label>
                            <input type="number" id="longueur_robe" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="ceinture" className="block text-gray-700 mb-1">Ceinture (cm)</label>
                            <input type="number" id="ceinture" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="tour_hanche" className="block text-gray-700 mb-1">Tour de hanche (cm)</label>
                            <input type="number" id="tour_hanche" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="tour_cuisse" className="block text-gray-700 mb-1">Tour de cuisse (cm)</label>
                            <input type="number" id="tour_cuisse" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="longueur_pantalon" className="block text-gray-700 mb-1">Longueur pantalon (cm)</label>
                            <input type="number" id="longueur_pantalon" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="longueur_jupe" className="block text-gray-700 mb-1">Longueur jupe 3/4 (cm)</label>
                            <input type="number" id="longueur_jupe" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                          <div>
                            <label htmlFor="tour_taille" className="block text-gray-700 mb-1">Tour de taille (cm)</label>
                            <input type="number" id="tour_taille" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold" required />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-4 text-kc-black">Informations complémentaires</h3>
                <div>
                  <label htmlFor="commentaires" className="block text-gray-700 mb-1">Commentaires ou préférences</label>
                  <textarea id="commentaires" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kc-gold"></textarea>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-kc-gold text-white px-8 py-3 rounded-md hover:bg-kc-gold/90 transition-colors flex items-center justify-center mx-auto">
                  <FiSend className="mr-2" />
                  Envoyer mes mensurations
                </button>
              </div>
            </form>

            <div className="mt-12 bg-gray-50 p-6 rounded-md">
              <h3 className="text-xl font-medium mb-4 text-kc-black">Comment prendre vos mesures</h3>
              <p className="text-gray-700 mb-4">
                Pour des mesures précises, nous vous recommandons de :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Utiliser un mètre ruban souple</li>
                <li>Vous tenir droit mais détendu</li>
                <li>Porter des vêtements légers ou des sous-vêtements</li>
                <li>Demander l'aide d'une autre personne si possible</li>
                <li>Ne pas serrer le mètre ruban (il doit être ajusté mais pas serré)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <ManifestoBanner />
    </>
  );
};

export default Mensurations;
