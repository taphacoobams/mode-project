import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/home/HeroSlider';
import CategoryBlocks from '../components/home/CategoryBlocks';
import LatestCreations from '../components/home/LatestCreations';
import ManifestoBanner from '../components/home/ManifestoBanner';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>I. K. MBENGUE - La mode africaine à un autre niveau</title>
        <meta name="description" content="Découvrez I. K. MBENGUE, une marque de mode africaine premium qui réinvente l'habillement traditionnel avec une touche contemporaine." />
        <meta property="og:title" content="I. K. MBENGUE - La mode africaine à un autre niveau" />
        <meta property="og:description" content="Découvrez I. K. MBENGUE, une marque de mode africaine premium qui réinvente l'habillement traditionnel avec une touche contemporaine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://btoure.com" />
      </Helmet>

      <div className="pt-16">
        <HeroSlider />
        <CategoryBlocks />
        <LatestCreations />
        <ManifestoBanner />
      </div>
    </>
  );
};

export default Home;
