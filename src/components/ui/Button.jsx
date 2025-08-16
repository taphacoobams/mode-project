import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  as = 'button',
  to = '',
  href = '',
  onClick,
  disabled = false,
  className = '',
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  ...props 
}) => {
  // Base classes for all buttons
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size variants
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-kc-gold text-kc-black hover:bg-kc-gold/90 focus:ring-kc-gold/50',
    secondary: 'bg-kc-black text-kc-white hover:bg-kc-black/90 focus:ring-kc-black/50',
    outline: 'bg-transparent border border-kc-gold text-kc-gold hover:bg-kc-gold/10 focus:ring-kc-gold/30',
    ghost: 'bg-transparent text-kc-gold hover:bg-kc-gold/10 focus:ring-kc-gold/30',
    white: 'bg-kc-white text-kc-black border border-gray-200 hover:border-kc-gold hover:text-kc-gold focus:ring-kc-gold/30',
  };
  
  // Disabled state
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';
  
  // Full width
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${widthClasses} ${className}`;
  
  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}>
        {icon}
      </span>
    );
  };
  
  // Content with icon
  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  );
  
  // Render as motion component with hover animation
  const MotionComponent = motion[as];
  
  // Render based on the 'as' prop
  if (as === 'link' && to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={to} className={buttonClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }
  
  if (as === 'a' && href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <a href={href} className={buttonClasses} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={props.type || 'button'}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
