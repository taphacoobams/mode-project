import { motion } from 'framer-motion';

const BrandPresentation = () => {
  const values = [
    {
      title: "Qualité",
      description: "Nous sélectionnons les meilleurs tissus et travaillons avec des artisans talentueux pour garantir des finitions impeccables."
    },
    {
      title: "Authenticité",
      description: "Nos créations s'inspirent de l'héritage culturel africain tout en apportant une vision contemporaine et innovante."
    },
    {
      title: "Durabilité",
      description: "Nous nous engageons à adopter des pratiques responsables, en privilégiant des matériaux durables et des conditions de travail équitables."
    },
    {
      title: "Élégance",
      description: "Chaque pièce est conçue pour offrir une élégance intemporelle, alliant sophistication et confort au quotidien."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-kc-black mb-6">
            Notre philosophie
          </h2>
          <div className="w-16 h-1 bg-kc-gold mx-auto mb-6"></div>
          <p className="text-gray-700">
            Chez Khalil Collection, nous croyons que la mode est bien plus qu'un simple vêtement. 
            C'est une expression de soi, un héritage culturel et une vision du monde. 
            Notre mission est de créer des pièces qui vous permettent d'exprimer votre 
            individualité tout en célébrant la richesse de la culture africaine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 shadow-md"
            >
              <h3 className="text-xl font-medium text-kc-gold mb-4">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-kc-black text-white p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Notre engagement</h3>
              <p className="text-white/80 mb-4">
                Nous nous engageons à créer des vêtements qui non seulement vous font 
                paraître élégant, mais qui racontent aussi une histoire - celle de notre 
                héritage africain riche et diversifié.
              </p>
              <p className="text-white/80">
                Chaque pièce est conçue avec soin, en tenant compte de l'impact environnemental 
                et social. Nous travaillons en étroite collaboration avec des artisans locaux, 
                soutenant ainsi l'économie locale et préservant les techniques traditionnelles.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 text-center">
                <span className="block text-3xl font-bold text-kc-gold mb-2">100%</span>
                <span className="text-sm text-white/80">Tissus de qualité</span>
              </div>
              <div className="bg-white/10 p-4 text-center">
                <span className="block text-3xl font-bold text-kc-gold mb-2">50+</span>
                <span className="text-sm text-white/80">Artisans locaux</span>
              </div>
              <div className="bg-white/10 p-4 text-center">
                <span className="block text-3xl font-bold text-kc-gold mb-2">5+</span>
                <span className="text-sm text-white/80">Années d'expérience</span>
              </div>
              <div className="bg-white/10 p-4 text-center">
                <span className="block text-3xl font-bold text-kc-gold mb-2">1000+</span>
                <span className="text-sm text-white/80">Clients satisfaits</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPresentation;
