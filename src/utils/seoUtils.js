/**
 * Utility functions for SEO optimization
 */

/**
 * Generate structured data for a product
 * @param {Object} product - Product object
 * @param {String} product.id - Product ID
 * @param {String} product.name - Product name
 * @param {String} product.description - Product description
 * @param {String} product.image - Product image URL
 * @param {String} product.price - Product price
 * @param {String} product.currency - Product currency (default: 'XOF')
 * @param {String} product.availability - Product availability (default: 'InStock')
 * @returns {Object} Structured data object for the product
 */
export const generateProductSchema = (product) => {
  const {
    id,
    name,
    description,
    image,
    price,
    currency = 'XOF',
    availability = 'InStock',
  } = product;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    productID: id,
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: 'I. K. Mbengue',
    },
    offers: {
      '@type': 'Offer',
      price: price.replace(/[^\d]/g, ''),
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url: `https://www.ikmbengue-mode.com/nos-creations/${id}`,
    },
  };
};

/**
 * Generate structured data for a local business
 * @returns {Object} Structured data object for the business
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: 'I. K. Mbengue',
    description: 'Mode africaine premium pour hommes et femmes',
    url: 'https://www.ikmbengue-mode.com',
    telephone: '+225 07 07 07 07 07',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue des Jardins',
      addressLocality: 'Abidjan',
      addressRegion: 'Cocody',
      postalCode: '00225',
      addressCountry: 'CI',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.3364,
      longitude: -4.0267,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/ikmbengue',
      'https://www.instagram.com/ikmbengue',
    ],
  };
};

/**
 * Generate structured data for breadcrumbs
 * @param {Array} breadcrumbs - Array of breadcrumb objects with name and url
 * @returns {Object} Structured data object for breadcrumbs
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
};

/**
 * Generate canonical URL
 * @param {String} path - URL path
 * @returns {String} Canonical URL
 */
export const generateCanonicalUrl = (path) => {
  const baseUrl = 'https://www.ikmbengue-mode.com';
  return `${baseUrl}${path}`;
};
