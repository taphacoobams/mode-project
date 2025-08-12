import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const DesignerProfile = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-kc-gold z-0"></div>
            <LazyLoadImage
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Khalil Collection Designer"
              effect="blur"
              className="w-full h-auto relative z-10"
              wrapperClassName="w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-kc-gold z-0"></div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">
            Khalil Collection, Mode & Broderie
          </h2>
          <div className="w-16 h-1 bg-kc-gold mb-6"></div>
          <p className="text-gray-700 mb-4">
            Fondée à Dakar au Sénégal, Khalil Collection est une marque de mode et broderie qui célèbre l'élégance africaine. 
            Spécialisée dans la création de vêtements sur mesure et de broderies artisanales de qualité, 
            notre marque s'inspire des riches traditions textiles africaines tout en embrassant un style contemporain.
          </p>
          <p className="text-gray-700 mb-4">
            Notre vision : créer des pièces uniques qui reflètent l'identité et la personnalité de chaque client. 
            Notre slogan "C'est moi, c'est vous !" incarne notre engagement à créer des vêtements qui vous ressemblent 
            et qui vous permettent d'exprimer votre individualité avec élégance.
          </p>
          <blockquote className="border-l-4 border-kc-gold pl-4 italic text-gray-600 my-6">
            "Nous croyons en une mode qui exprime votre personnalité, qui vous permet d'être vous-même tout en étant élégant. 
            C'est moi, c'est vous ! Chaque vêtement que nous créons est une extension de votre identité."
          </blockquote>
          <p className="text-gray-700">
            Aujourd'hui, Khalil Collection est reconnue pour son savoir-faire artisanal et son attention aux détails, 
            habillant aussi bien des personnalités que des amateurs de mode à la recherche de pièces uniques et élégantes 
            qui reflètent leur identité.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignerProfile;
