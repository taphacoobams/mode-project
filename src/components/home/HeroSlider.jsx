import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      backgroundColor: '#1a1a1a',
      backgroundImage: require('../../assets/images/carrousel1.png'),
      title: "Bienvenue chez Khalil Collection",
      subtitle: 'L’élégance dans chaque couture',
      buttonText: 'Qui sommes-nous',
      buttonLink: '/designer'
    },
    {
      id: 2,
      backgroundColor: '#2a2a2a',
      backgroundImage: require('../../assets/images/carrousel2.png'),
      title: "C'est moi, c'est vous !",
      subtitle: 'Votre style, notre passion',
      buttonText: 'Nous contacter',
      buttonLink: '/contact'
    }
  ];

  // Fonction pour passer au slide suivant, utilisée par l'intervalle automatique
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[100vh] md:h-[100vh] lg:h-[100vh] overflow-hidden bg-kc-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-0 w-full h-full transform scale-105"
              style={{ 
                backgroundColor: slides[currentSlide].backgroundColor,
                backgroundImage: slides[currentSlide].backgroundImage ? `url(${slides[currentSlide].backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center top', /* Ajustement pour voir davantage la tête des modèles */
                backgroundRepeat: 'no-repeat',
                animation: 'subtle-zoom 10s infinite alternate ease-in-out',
                transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            ></div>
            {/* Overlay amélioré avec un dégradé complexe adapté à la position du texte */}
            <div className={`absolute inset-0 ${currentSlide === 0 
              ? 'bg-gradient-to-br from-black/80 via-black/60 to-black/30' 
              : 'bg-gradient-to-bl from-black/80 via-black/60 to-black/30'}`}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container flex">
              {/* Suppression de justify-end pour permettre au texte du premier slide d'être vraiment à gauche */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`max-w-xl text-white ${
                  currentSlide === 0 
                    ? 'pl-4 md:pl-8 text-left' 
                    : 'pr-4 md:pr-8 text-right ml-auto'
                }`}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-shadow-lg">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  {slides[currentSlide].subtitle}
                </p>
                <Link 
                  to={slides[currentSlide].buttonLink} 
                  className="bg-kc-gold text-kc-black px-5 py-2 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-kc-gold/50 inline-block"
                >
                  {slides[currentSlide].buttonText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Les flèches de navigation ont été supprimées */}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-kc-gold' : 'bg-white/50'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
