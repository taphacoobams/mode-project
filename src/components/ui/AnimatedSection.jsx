import { motion } from 'framer-motion';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * AnimatedSection component that animates its children when they come into view
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {String} props.animation - Animation type: 'fadeIn', 'fadeInUp', 'fadeInLeft', 'fadeInRight', 'scale'
 * @param {Number} props.delay - Delay before animation starts (in seconds)
 * @param {Number} props.duration - Animation duration (in seconds)
 * @param {Number} props.threshold - Percentage of element visibility to trigger animation (0-1)
 * @param {String} props.className - Additional CSS classes
 */
const AnimatedSection = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
  ...props
}) => {
  const [ref, isInView] = useIntersectionObserver({ threshold });

  // Animation variants
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    staggerChildren: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  };

  // Child animation for staggerChildren
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Get the selected animation variant
  const selectedAnimation = animations[animation] || animations.fadeIn;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedAnimation}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {animation === 'staggerChildren'
        ? React.Children.map(children, (child) => (
            <motion.div variants={childVariants}>{child}</motion.div>
          ))
        : children}
    </motion.div>
  );
};

export default AnimatedSection;
