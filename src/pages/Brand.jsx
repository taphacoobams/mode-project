import { Helmet } from 'react-helmet-async';
import DesignerProfile from '../components/brand/DesignerProfile';
import BrandPresentation from '../components/brand/BrandPresentation';
import GiftCheckSection from '../components/brand/GiftCheckSection';
import PageHeader from '../components/ui/PageHeader';

const Brand = () => {
  return (
    <>
      <Helmet>
        <title>La marque | Khalil Collection - Mode & Broderie - C'est moi, c'est vous !</title>
        <meta name="description" content="Découvrez l'histoire de Khalil Collection, notre vision et notre engagement pour une mode africaine premium et contemporaine." />
        <meta property="og:title" content="La marque | Khalil Collection - Mode & Broderie - C'est moi, c'est vous !" />
        <meta property="og:description" content="Découvrez l'histoire de Khalil Collection, notre vision et notre engagement pour une mode africaine premium et contemporaine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khalilcollection.com/notre-marque" />
      </Helmet>

      <PageHeader 
        title="La marque"
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'La marque' }
        ]}
      />
      
      <div className="py-16">
        <div className="container">
          
          <DesignerProfile />
          <BrandPresentation />
          <GiftCheckSection />
        </div>
      </div>
    </>
  );
};

export default Brand;
