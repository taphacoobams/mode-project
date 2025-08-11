import { motion } from 'framer-motion';

const ManifestoBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)',
          opacity: 0.2
        }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-secondary mb-6">
            I. K. MBENGUE
          </h2>
          <p className="text-2xl md:text-3xl font-serif text-primary mb-8">
            Recréons l'habillement
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 mb-8">
            Nous croyons en une mode africaine contemporaine, élégante et durable. 
            Chaque pièce est conçue avec passion et fabriquée avec le plus grand soin, 
            en respectant notre héritage culturel tout en embrassant la modernité.
          </p>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  document.getElementById('measurement-block')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Découvrir notre histoire
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoBanner;
