/**
 * Utility functions for image handling and optimization
 */

/**
 * Get responsive image sources for different screen sizes and formats
 * @param {String} basePath - Base path to the image without extension
 * @param {String} fallbackExt - Fallback image extension (e.g., 'jpg')
 * @param {Array} sizes - Array of size objects with width and mediaQuery
 * @returns {Object} Object with srcSet and sizes strings for responsive images
 */
export const getResponsiveImageSources = (basePath, fallbackExt = 'jpg', sizes = []) => {
  // Default sizes if none provided
  const defaultSizes = [
    { width: 480, mediaQuery: '(max-width: 480px)' },
    { width: 768, mediaQuery: '(max-width: 768px)' },
    { width: 1024, mediaQuery: '(max-width: 1024px)' },
    { width: 1280, mediaQuery: '(min-width: 1025px)' },
  ];

  const imageSizes = sizes.length > 0 ? sizes : defaultSizes;

  // Generate WebP srcSet
  const webpSrcSet = imageSizes
    .map((size) => `${basePath}-${size.width}.webp ${size.width}w`)
    .join(', ');

  // Generate fallback srcSet
  const fallbackSrcSet = imageSizes
    .map((size) => `${basePath}-${size.width}.${fallbackExt} ${size.width}w`)
    .join(', ');

  // Generate sizes attribute
  const sizesAttr = imageSizes
    .map((size, index) => {
      // Last item is the default size
      if (index === imageSizes.length - 1) {
        return '100vw';
      }
      return `${size.mediaQuery} ${Math.round(size.width / 16)}rem`;
    })
    .join(', ');

  return {
    webpSrcSet,
    fallbackSrcSet,
    sizes: sizesAttr,
  };
};

/**
 * Get image dimensions from a URL or path
 * @param {String} src - Image URL or path
 * @returns {Promise<Object>} Promise resolving to { width, height }
 */
export const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = src;
  });
};

/**
 * Generate a placeholder color for an image
 * @param {String} src - Image URL or path
 * @returns {Promise<String>} Promise resolving to a CSS color value
 */
export const generatePlaceholderColor = async (src) => {
  // In a real application, you would use a library like color-thief
  // or a backend service to analyze the image and return a dominant color
  // For now, we'll return a default color
  return '#f0f0f0';
};

/**
 * Check if WebP format is supported by the browser
 * @returns {Boolean} True if WebP is supported
 */
export const isWebPSupported = () => {
  // Feature detection for WebP
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    // Was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

/**
 * Check if AVIF format is supported by the browser
 * @returns {Boolean} True if AVIF is supported
 */
export const isAVIFSupported = () => {
  // Feature detection for AVIF
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    // Was able or not to get AVIF representation
    return elem.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  }
  return false;
};
