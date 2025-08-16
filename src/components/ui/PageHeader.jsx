import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageHeader = ({ 
  title, 
  subtitle = '', 
  backgroundImage = '', 
  overlay = true,
  height = 'md',
  textAlignment = 'center',
  breadcrumbs = [],
  hideTitle = false,
  customClass = ''
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
      className={`relative ${heightClasses[height]} w-full flex flex-col justify-center ${alignmentClasses[textAlignment]} px-6 ${customClass}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: backgroundImage ? 'transparent' : ''
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
            <ol className="flex flex-wrap items-center space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-3 text-kc-gold text-lg font-medium">
                      /
                    </span>
                  )}
                  {crumb.url ? (
                    <Link 
                      to={crumb.url} 
                      className={`text-base md:text-lg font-medium hover:underline ${
                        customClass ? '' : backgroundImage ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-kc-gold'
                      }`}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={`text-base md:text-lg font-bold ${
                      customClass ? 'text-kc-gold' : backgroundImage ? 'text-white' : 'text-gray-800'
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
        {!hideTitle && title && (
          <motion.h1 
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
              backgroundImage ? 'text-white' : 'text-kc-black'
            }`}
            variants={itemVariants}
          >
            {title}
          </motion.h1>
        )}
        
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
