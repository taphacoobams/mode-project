import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import React from 'react';

// Layout Components
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ui/ScrollToTop';
import Spinner from './components/ui/Spinner';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Brand = lazy(() => import('./pages/NotreBrand'));
const Creations = lazy(() => import('./pages/Creations'));
const Contact = lazy(() => import('./pages/Contact'));
const Mensurations = lazy(() => import('./pages/Mensurations'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Designer = lazy(() => import('./pages/Designer'));
const ChequeCadeau = lazy(() => import('./pages/ChequeCadeau'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white">
          <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
              <Spinner size="lg" color="gold" />
            </div>
          }>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notre-marque" element={<Brand />} />
                <Route path="/creations" element={<Creations />} />
                <Route path="/creations/productcategory/:category" element={<Creations />} />
                <Route path="/creations/productcategory/:category/:subcategory" element={<Creations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mensurations" element={<Mensurations />} />
                <Route path="/designer" element={<Designer />} />
                <Route path="/cheque-cadeau" element={<ChequeCadeau />} />
                <Route path="/product/:reference" element={<ProductDetail />} />
                <Route path="/creations/:category/:reference" element={<ProductDetail />} />
              </Routes>
            </Layout>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
