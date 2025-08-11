import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { generatePlaceholderColor } from '../../utils/imageUtils';

/**
 * OptimizedImage component for better image loading performance
 * @param {Object} props - Component props
 * @param {String} props.src - Image source URL
 * @param {String} props.alt - Image alt text
 * @param {String} props.className - Additional CSS classes for the image
 * @param {String} props.wrapperClassName - Additional CSS classes for the wrapper
 * @param {String} props.objectFit - CSS object-fit property (cover, contain, etc.)
 * @param {Boolean} props.eager - Whether to load the image eagerly (not lazy)
 * @param {Function} props.onLoad - Callback when image is loaded
 * @param {Function} props.onError - Callback when image fails to load
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  objectFit = 'cover',
  eager = false,
  onLoad,
  onError,
  ...props
}) => {
  const [placeholderColor, setPlaceholderColor] = useState('#f0f0f0');

  useEffect(() => {
    // Generate placeholder color based on the image
    const generateColor = async () => {
      try {
        const color = await generatePlaceholderColor(src);
        setPlaceholderColor(color);
      } catch (error) {
        console.error('Error generating placeholder color:', error);
      }
    };

    generateColor();
  }, [src]);

  return (
    <div 
      className={`relative overflow-hidden ${wrapperClassName}`}
      style={{ backgroundColor: placeholderColor }}
    >
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        className={`w-full h-full transition-opacity duration-300 ${className}`}
        style={{ objectFit }}
        threshold={100}
        visibleByDefault={eager}
        onLoad={onLoad}
        onError={onError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
