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
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary z-0"></div>
            <LazyLoadImage
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="I. K. Mbengue Designer"
              effect="blur"
              className="w-full h-auto relative z-10"
              wrapperClassName="w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary z-0"></div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-serif font-bold text-secondary mb-6">
            Ibrahim Kader Mbengue, Fondateur & Designer
          </h2>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <p className="text-gray-700 mb-4">
            Né à Abidjan en Côte d'Ivoire, Ibrahim Kader Mbengue a toujours été passionné par la mode et le design. 
            Après des études en design de mode à Paris, il a travaillé pour plusieurs maisons de couture 
            prestigieuses avant de retourner dans son pays natal pour fonder I. K. MBENGUE en 2018.
          </p>
          <p className="text-gray-700 mb-4">
            Sa vision : créer une marque de mode africaine contemporaine qui allie l'élégance des tissus 
            et motifs traditionnels avec des coupes modernes et sophistiquées. Chaque création est pensée 
            pour mettre en valeur la richesse culturelle africaine tout en s'adaptant aux exigences de la vie moderne.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
            "Je crois en une mode qui raconte notre histoire, qui célèbre notre héritage tout en regardant 
            vers l'avenir. Chaque vêtement que nous créons est une page de cette histoire."
          </blockquote>
          <p className="text-gray-700">
            Aujourd'hui, I. K. MBENGUE est reconnue comme l'une des marques de mode africaine les plus innovantes, 
            habillant aussi bien des personnalités que des amateurs de mode à la recherche de pièces uniques et élégantes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignerProfile;
