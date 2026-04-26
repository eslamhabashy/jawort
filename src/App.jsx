import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import TemplateShowcase from './components/TemplateShowcase';
import { Features, Pricing } from './components/PricingFeatures';
import { Testimonials, FinalCTA, Footer } from './components/FooterSections';
import { motion, AnimatePresence } from 'framer-motion';

// Real Pages
import TemplatesPage from './pages/TemplatesPage';
import PricingPage from './pages/PricingPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            left: '20px', 
            right: '20px', 
            zIndex: 100,
            background: 'var(--warm-black)',
            color: 'var(--parchment)',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <p style={{ fontSize: '0.85rem', maxWidth: '800px' }}>
            {t('cookie.text')}
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={accept}
              className="premium-button" 
              style={{ padding: '8px 20px', fontSize: '0.75rem' }}
            >
              {t('cookie.accept')}
            </button>
            <button 
              onClick={() => setVisible(false)}
              className="premium-button secondary" 
              style={{ padding: '8px 20px', fontSize: '0.75rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              {t('cookie.decline')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LandingPage = () => (
  <>
    <Hero />
    <HowItWorks />
    <TemplateShowcase />
    <Features />
    <Pricing />
    <Testimonials />
    <FinalCTA />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
