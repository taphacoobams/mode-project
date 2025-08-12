import { motion } from 'framer-motion';
import { FiGift } from 'react-icons/fi';

const GiftCheckSection = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-kc-gold/10 p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">
              Chèque cadeau
            </h2>
            <div className="w-16 h-1 bg-kc-gold mb-6"></div>
            <p className="text-gray-700 mb-6">
              Offrez l'élégance Khalil Collection à vos proches avec nos chèques cadeaux. 
              Une attention parfaite pour toutes les occasions : anniversaires, 
              mariages, fêtes ou simplement pour faire plaisir.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-kc-gold mr-2">✓</span>
                <span className="text-gray-700">Disponible de 25 000 à 200 000 CFA</span>
              </li>
              <li className="flex items-start">
                <span className="text-kc-gold mr-2">✓</span>
                <span className="text-gray-700">Valable 12 mois sur toutes nos créations</span>
              </li>
              <li className="flex items-start">
                <span className="text-kc-gold mr-2">✓</span>
                <span className="text-gray-700">Livraison gratuite pour les chèques cadeaux</span>
              </li>
              <li className="flex items-start">
                <span className="text-kc-gold mr-2">✓</span>
                <span className="text-gray-700">Présentation élégante dans notre coffret signature</span>
              </li>
            </ul>
            <button className="bg-kc-gold hover:bg-kc-gold/90 text-white px-6 py-3 rounded-md transition-colors flex items-center space-x-2">
              <FiGift size={20} />
              <span>Commander un chèque cadeau</span>
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-kc-gold z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Chèque cadeau Khalil Collection" 
              className="w-full h-auto relative z-10 shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-kc-gold z-0"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftCheckSection;
