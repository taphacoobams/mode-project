import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import PageHeader from '../components/ui/PageHeader';

const Mensurations = () => {
  const [activeTab, setActiveTab] = useState('hommes');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez envoyer les données à votre backend
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 3000);
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

      <PageHeader 
        title="Vos mensurations" 
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Vos mensurations' }
        ]}
      />
      
      <div className="py-16">

        <div className="container mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Prise de mesures pour vêtements" 
                className="w-full h-64 object-cover mb-6"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-serif font-bold mb-4">Comment prendre vos mesures</h2>
                <p className="text-gray-600 mb-4">
                  Pour garantir que vos vêtements Khalil Collection vous vont parfaitement, veuillez suivre 
                  les instructions ci-dessous et remplir le formulaire avec précision. Utilisez un mètre ruban 
                  et demandez l'aide d'une autre personne si nécessaire.
                </p>
              </motion.div>
            </div>

            <div className="mb-8">
              <div className="flex border-b">
                <button 
                  className={`py-2 px-4 font-medium ${activeTab === 'hommes' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('hommes')}
                >
                  MESURES HOMMES
                </button>
                <button 
                  className={`py-2 px-4 font-medium ${activeTab === 'femmes' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('femmes')}
                >
                  MESURES FEMMES
                </button>
              </div>
            </div>

            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cou *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Épaule *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Manche courte *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Manche longue *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Poitrine *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tour de buste *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Longueur chemise *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tour de veste *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Longueur tonique *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Longueur kaftan *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ceinture *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tour de hanche *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tour de cuisse *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Longueur pantalon *</label>
                <input 
                  type="text" 
                  placeholder="cm"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="col-span-2 mt-4">
                <button 
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 text-white py-3 px-6 rounded-sm transition-colors flex items-center justify-center"
                >
                  <span>ENVOYER</span>
                  <FiSend className="ml-2" />
                </button>
              </div>

              {formSubmitted && (
                <div className="col-span-2 mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  <p>Merci ! Vos mensurations ont été enregistrées avec succès. Nous les utiliserons pour vos prochaines commandes.</p>
                </div>
              )}
            </motion.form>

            <div className="mt-12 bg-gray-50 p-6 rounded-sm">
              <h3 className="text-xl font-serif font-bold mb-4">Conseils pour des mesures précises</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Utilisez un mètre ruban souple, pas un mètre rigide</li>
                <li>Tenez-vous droit, mais de façon naturelle</li>
                <li>Ne serrez pas trop le mètre ruban</li>
                <li>Demandez l'aide d'une autre personne si possible</li>
                <li>Prenez les mesures directement sur le corps, pas sur les vêtements</li>
                <li>Pour plus de précision, prenez chaque mesure deux fois</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                JE PRENDS MES MESURES
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mensurations;
