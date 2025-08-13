import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MeasurementBlock from '../home/MeasurementBlock';
import WhatsAppButton from '../ui/WhatsAppButton';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Vérifier si nous sommes sur une page produit (URL contient /nos-creations/ et un ID de produit)
  const isProductPage = /\/nos-creations\/[^\/]+\/\d+/.test(location.pathname);
  
  return (
    <>
      <Header />
      <main className="pt-20">
        {children}
        <MeasurementBlock />
      </main>
      <Footer />
      {/* N'afficher le bouton WhatsApp global que si nous ne sommes pas sur une page produit */}
      {!isProductPage && <WhatsAppButton />}
    </>
  );
};

export default Layout;
