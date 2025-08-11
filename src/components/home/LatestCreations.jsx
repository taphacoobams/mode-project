import { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';
import QuickView from '../ui/QuickView';

const LatestCreations = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const handleQuickView = (product, e) => {
    e.preventDefault();
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  // Mock data for latest products
  const latestProducts = [
    {
      id: 1,
      name: 'Chemise Wax Premium',
      price: '25,000 CFA',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'homme',
      subcategory: 'chemises',
      description: 'Chemise en tissu wax premium, confectionnée à la main par nos artisans. Design exclusif I. K. MBENGUE.',
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 2,
      name: 'Costume Africain Moderne',
      price: '45,000 CFA',
      image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'homme',
      subcategory: 'costumes-africains',
      description: 'Costume africain moderne alliant tradition et élégance contemporaine. Parfait pour les occasions spéciales.',
      sizes: ['M', 'L', 'XL'],
    },
    {
      id: 3,
      name: 'Robe Sakinatou',
      price: '35,000 CFA',
      image: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'femme',
      subcategory: 'collection-sakinatou',
      description: 'Robe élégante de la collection Sakinatou, avec des motifs traditionnels revisités.',
      sizes: ['S', 'M', 'L'],
    },
    {
      id: 4,
      name: 'Ensemble Chic Femme',
      price: '40,000 CFA',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'femme',
      subcategory: 'collection-femme-chic',
      description: 'Ensemble chic pour femme, parfait pour les événements professionnels et cérémonies.',
      sizes: ['S', 'M', 'L'],
    },
    {
      id: 5,
      name: 'Polo Brodé',
      price: '18,000 CFA',
      image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'homme',
      subcategory: 'polo',
      description: 'Polo brodé avec le logo I. K. MBENGUE, confortable et élégant pour un style décontracté.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 6,
      name: 'Lunettes I. K. Mbengue',
      price: '15,000 CFA',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'accessoires',
      subcategory: 'ikmbengue-sunglasses',
      description: 'Lunettes de soleil de la collection exclusive I. K. MBENGUE, design élégant et protection UV.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Nos dernières créations</h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {latestProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={item}
                className="bg-white shadow-md overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-square">
                  <Link 
                    to={`/creations/${product.category}/${product.id.toString()}`}
                    className="block"
                  >
                    <LazyLoadImage
                      src={product.image}
                      alt={product.name}
                      effect="blur"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </Link>
                  
                  <button
                    onClick={(e) => handleQuickView(product, e)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white py-2 px-4 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2"
                    aria-label={`Aperçu rapide de ${product.name}`}
                  >
                    <FiEye size={18} />
                    <span>Aperçu rapide</span>
                  </button>
                </div>
                <div className="p-4">
                  <Link to={`/creations/${product.category}/${product.id.toString()}`}>
                    <h3 className="text-lg font-medium text-secondary mb-2 hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-primary font-semibold">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/nos-creations" className="btn btn-primary">
              Voir toutes nos créations
            </Link>
          </div>
        </div>
      </section>
      
      {/* QuickView Modal */}
      <QuickView 
        product={selectedProduct}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
};

export default LatestCreations;
