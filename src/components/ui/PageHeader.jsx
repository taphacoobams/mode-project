import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageHeader = ({ 
  title, 
  subtitle = '', 
  backgroundImage = '', 
  overlay = true,
  height = 'md',
  textAlignment = 'center',
  breadcrumbs = []
}) => {
  // Height variants
  const heightClasses = {
    sm: 'h-40',
    md: 'h-60',
    lg: 'h-80',
    xl: 'h-96',
  };
  
  // Text alignment variants
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className={`relative ${heightClasses[height]} w-full flex flex-col justify-center ${alignmentClasses[textAlignment]} px-6`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: backgroundImage ? 'transparent' : '#f8f8f8'
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-black/40"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav 
            className="mb-4 flex justify-center"
            variants={itemVariants}
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap items-center space-x-2 text-xs">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <span className={`mx-2 ${backgroundImage ? 'text-white/70' : 'text-gray-400'}`}>
                      /
                    </span>
                  )}
                  {crumb.url ? (
                    <Link 
                      to={crumb.url} 
                      className={`text-sm hover:underline ${
                        backgroundImage ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-primary'
                      }`}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={`text-sm ${
                      backgroundImage ? 'text-white' : 'text-gray-800'
                    }`}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
        
        {/* Title */}
        <motion.h1 
          className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 ${
            backgroundImage ? 'text-white' : 'text-secondary'
          }`}
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        
        {/* Subtitle */}
        {subtitle && (
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${
              textAlignment === 'left' ? 'ml-0' : 
              textAlignment === 'right' ? 'mr-0' : ''
            } ${
              backgroundImage ? 'text-white/90' : 'text-gray-600'
            }`}
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default PageHeader;
