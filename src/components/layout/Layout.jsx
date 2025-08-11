import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MeasurementBlock from '../home/MeasurementBlock';
import WhatsAppButton from '../ui/WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {children}
        <MeasurementBlock />
      </main>
      <Footer />
      <WhatsAppButton accountId="YOUR_JOINCHAT_ACCOUNT_ID" />
    </>
  );
};

export default Layout;
