import React from 'react';
import { motion } from 'framer-motion';

const PartnershipsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">
            Nos partenariats prestigieux
          </h2>
          <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
          <p className="text-gray-700 mb-8">
            Khalil Collection est fière d'habiller des artistes et groupes de renommée internationale, 
            portant notre vision de l'élégance africaine contemporaine sur les scènes du monde entier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="relative w-full h-full min-h-[300px]">
                <img 
                  src={require("../../assets/images/partenariats/baobab.jpg")} 
                  alt="Orchestra Baobab habillé par Khalil Collection" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-kc-gold/90 text-white px-4 py-2 rounded-md font-semibold">
                  Partenariat officiel
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold text-kc-black mb-4">
                Orchestra Baobab
              </h3>
              <div className="w-12 h-1 bg-kc-gold mb-6"></div>
              <p className="text-gray-700 mb-6">
                Le groupe Orchestra Baobab est habillé officiellement par KHALIL COLLECTION.
                Cette légende de la musique sénégalaise, reconnue internationalement, a choisi notre marque
                pour représenter l'élégance africaine sur scène et lors de leurs apparitions officielles.
              </p>
              <p className="text-kc-gold font-semibold text-lg">
                La marque des Légendes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
