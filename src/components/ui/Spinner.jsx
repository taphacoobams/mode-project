import { motion } from 'framer-motion';

const Spinner = ({ size = 'md', color = 'primary' }) => {
  // Size variants
  const sizeVariants = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
  };
  
  // Color variants
  const colorVariants = {
    primary: 'border-primary/30 border-t-primary',
    white: 'border-white/30 border-t-white',
    secondary: 'border-secondary/30 border-t-secondary',
  };
  
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizeVariants[size]} ${colorVariants[color]} rounded-full border-solid`}
        animate={{ rotate: 360 }}
        transition={spinTransition}
        role="status"
        aria-label="Chargement"
      />
    </div>
  );
};

export default Spinner;
