import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CategoryBlocks = () => {
  const categories = [
    {
      id: 1,
      title: 'Homme',
      image: '/images/homme.png',
      link: '/creations/productcategory/homme',
    },
    {
      id: 2,
      title: 'Femme',
      image: '/images/femme.png',
      link: '/creations/productcategory/femme',
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden group h-[900px]"
            >
              <LazyLoadImage
                src={category.image}
                alt={category.title}
                effect="blur"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                wrapperClassName="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <h3 className="text-4xl font-heading font-bold mb-6 tracking-wider">{category.title}</h3>
                <Link 
                  to={category.link}
                  className="border-2 border-white text-white hover:bg-kc-gold hover:border-kc-gold hover:text-kc-black transition-colors px-6 py-3 inline-block text-lg font-medium tracking-wide"
                >
                  Découvrir la collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBlocks;