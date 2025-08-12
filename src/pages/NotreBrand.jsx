import { Helmet } from 'react-helmet-async';
import DesignerProfile from '../components/brand/DesignerProfile';
import BrandPresentation from '../components/brand/BrandPresentation';
import GiftCheckSection from '../components/brand/GiftCheckSection';
import PageHeader from '../components/ui/PageHeader';

const Brand = () => {
  return (
    <>
      <Helmet>
        <title>Notre marque | Khalil Collection - La mode africaine à un autre niveau</title>
        <meta name="description" content="Découvrez l'histoire de Khalil Collection, notre vision et notre engagement pour une mode africaine premium et contemporaine." />
        <meta property="og:title" content="Notre marque | Khalil Collection - La mode africaine à un autre niveau" />
        <meta property="og:description" content="Découvrez l'histoire de Khalil Collection, notre vision et notre engagement pour une mode africaine premium et contemporaine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://btoure.com/notre-marque" />
      </Helmet>

      <PageHeader 
        title="Notre marque"
        breadcrumbs={[
          { label: 'Accueil', url: '/' },
          { label: 'Notre marque' }
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
