import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const DesignerMessage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">
            Mot du Designer
          </h2>
          <div className="w-16 h-1 bg-kc-gold mx-auto mb-10"></div>
          
          <div className="relative bg-white p-8 md:p-12 shadow-md">
            <FaQuoteLeft className="text-kc-gold/20 text-5xl absolute top-6 left-6" />
            
            <div className="text-left relative z-10 text-gray-700 space-y-4">
              <p>
                Chez KHALIL COLLECTION, chaque création est une histoire, une émotion, un reflet de qui nous sommes.
                Je crois que la mode ne se limite pas à un simple vêtement : c'est une manière de s'exprimer, de se révéler, 
                de se sentir unique tout en restant connecté aux autres.
              </p>
              
              <p>
                Mon inspiration vient de vous, de vos styles, de vos rêves et de vos envies. 
                Chaque pièce que je dessine est pensée pour sublimer votre personnalité, 
                allier élégance et authenticité, et vous offrir un style qui vous ressemble vraiment.
              </p>
              
              <p className="font-medium">
                Parce que KHALIL COLLECTION, ce n'est pas seulement moi. C'est moi, c'est vous !
              </p>
            </div>
            
            <FaQuoteRight className="text-kc-gold/20 text-5xl absolute bottom-6 right-6" />
            
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-end">
              <div className="mr-4 text-right">
                <p className="font-heading font-bold text-kc-black">Khalil</p>
                <p className="text-kc-gold text-sm">Designer & Fondateur</p>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-kc-gold">
                <img src={require("../../assets/images/designer.jpg")} alt="Khalil - Designer & Fondateur" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignerMessage;
