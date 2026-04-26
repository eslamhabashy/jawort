import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(nextLang);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 glass"
        style={{ height: 'var(--nav-height)', display: 'flex', alignItems: 'center' }}
      >
        <div className="container flex justify-between items-center" style={{ height: '100%', position: 'relative' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', height: '100%', position: 'relative' }}>
            <img 
              src="/logo.png" 
              alt="JAWORT Digital" 
              style={{ 
                height: 'var(--logo-height)', 
                width: 'auto',
                objectFit: 'contain',
                zIndex: 60,
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
              }} 
            />
          </Link>
          
          {/* Desktop Links */}
          <div className="desktop-nav-links" style={{ gap: '30px', alignItems: 'center' }}>
            <Link to="/templates" style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--warm-black)' }}>{t('nav.templates')}</Link>
            <Link to="/pricing" style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--warm-black)' }}>{t('nav.pricing')}</Link>
            <Link to="/how-it-works" style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--warm-black)' }}>{t('nav.howItWorks')}</Link>
            
            <button 
              onClick={toggleLanguage}
              style={{ 
                background: 'transparent', 
                border: '1px solid var(--accent-gold)', 
                color: 'var(--accent-gold)',
                padding: '6px 12px',
                borderRadius: '50px',
                fontSize: '0.7rem',
                fontWeight: '700'
              }}
            >
              {i18n.language.toUpperCase()}
            </button>
            
            <Link to="/contact" className="premium-button" style={{ padding: '10px 24px', fontSize: '0.7rem' }}>
              {t('nav.start')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-nav-toggle flex items-center justify-center" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'transparent', color: 'var(--warm-black)', padding: '10px' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Floating Mobile CTA */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="floating-mobile-cta"
          >
            <Link to="/contact" className="premium-button" style={{ width: '100%', padding: '18px', fontSize: '0.9rem', boxShadow: '0 10px 40px rgba(93, 46, 50, 0.4)' }}>
              {t('nav.start')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--white)',
              zIndex: 45,
              display: 'flex',
              flexDirection: 'column',
              padding: '120px 40px 60px',
              gap: '20px'
            }}
          >
            <Link to="/templates" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', fontWeight: '500' }}>{t('nav.templates')}</Link>
            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', fontWeight: '500' }}>{t('nav.pricing')}</Link>
            <Link to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', fontWeight: '500' }}>{t('nav.howItWorks')}</Link>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <button 
                onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                style={{ 
                  background: 'transparent', 
                  border: '1px solid var(--accent-gold)', 
                  color: 'var(--accent-gold)',
                  padding: '16px',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                {i18n.language === 'de' ? 'VIEW ENGLISH SITE' : 'AUF DEUTSCH WECHSELN'}
              </button>
              
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="premium-button" style={{ padding: '20px' }}>
                {t('nav.start')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .desktop-nav-links {
          display: none;
        }
        .mobile-nav-toggle {
          display: flex;
        }
        @media (min-width: 1024px) {
          .desktop-nav-links {
            display: flex;
          }
          .mobile-nav-toggle {
            display: none;
          }
        }
      `}} />
    </>
  );
};

export default Navbar;
