import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, price, image, category } = product;

  return (
    <motion.div 
      className="bg-white shadow-md overflow-hidden group"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden aspect-square">
        <Link to={`/nos-creations/${category}/${id}`} aria-label={`Voir ${name}`}>
          <LazyLoadImage
            src={image}
            alt={name}
            effect="blur"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        </Link>
        
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Ajouter aux favoris"
          >
            <FiHeart size={18} />
          </button>
          <button 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Ajouter au panier"
          >
            <FiShoppingBag size={18} />
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link 
            to={`/nos-creations/${category}/${id}`}
            className="inline-block bg-primary text-white py-2 px-4 rounded-sm text-sm"
            aria-label={`Voir détails de ${name}`}
          >
            Voir détails
          </Link>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/nos-creations/${category}/${id}`} className="block">
          <h3 className="text-lg font-medium text-secondary mb-2 hover:text-primary transition-colors">{name}</h3>
        </Link>
        <p className="text-primary font-semibold">{price}</p>
      </div>
      
      {/* Schema.org Product structured data for SEO - Moved to Helmet component */}
    </motion.div>
  );
};

export default ProductCard;
