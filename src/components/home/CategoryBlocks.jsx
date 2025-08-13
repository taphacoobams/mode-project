import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CategoryBlocks = () => {
  const categories = [
    {
      id: 1,
      title: 'Hommes',
      image: 'https://i.pinimg.com/originals/d4/4f/d2/d44fd2c3f8e3a967506bd8f8b5ba4a93.jpg',
      link: '/nos-creations/productcategory/homme',
    },
    {
      id: 2,
      title: 'Femmes',
      image: 'https://i.pinimg.com/originals/7e/62/f0/7e62f0b4f6821fa37b1e4b5a2e4e7a72.jpg',
      link: '/nos-creations/productcategory/femme',
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
              className="relative overflow-hidden group h-[700px]"
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
