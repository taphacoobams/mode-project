import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/home/HeroSlider';
import CategoryBlocks from '../components/home/CategoryBlocks';
import LatestCreations from '../components/home/LatestCreations';
import MeasurementBlock from '../components/home/MeasurementBlock';
import ManifestoBanner from '../components/home/ManifestoBanner';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Khalil Collection - Mode & Broderie - C'est moi, c'est vous !</title>
        <meta name="description" content="Découvrez Khalil Collection, une marque de mode africaine premium qui réinvente l'habillement traditionnel avec une touche contemporaine." />
        <meta property="og:title" content="Khalil Collection - Mode & Broderie - C'est moi, c'est vous !" />
        <meta property="og:description" content="Découvrez Khalil Collection, une marque de mode africaine premium qui réinvente l'habillement traditionnel avec une touche contemporaine." />
      </Helmet>

      <div className="pt-16">
        <HeroSlider />
        <CategoryBlocks />
        <LatestCreations />
        <MeasurementBlock />
        <ManifestoBanner />
      </div>
    </>
  );
};

export default Home;
