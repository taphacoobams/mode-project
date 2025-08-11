import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image = '', 
  type = 'website', 
  schema = null 
}) => {
  const siteName = 'I. K. Mbengue - Mode Africaine Premium';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Découvrez la collection I. K. Mbengue, une marque de mode africaine premium proposant des vêtements élégants et des accessoires de qualité pour I. K. Mbengue hommes et femmes.';
  const siteUrl = 'https://www.ikmbengue-mode.com'; // Replace with actual URL in production
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Structured Data / Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
