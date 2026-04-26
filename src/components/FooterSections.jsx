import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    { name: 'Sarah & Marc', quote: t('testimonials.sarah'), rating: 5 },
    { name: 'Lukas & Elena', quote: t('testimonials.lukas'), rating: 5 },
    { name: 'Thomas & Julia', quote: t('testimonials.thomas'), rating: 5 }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '60px' }}>{t('testimonials.title')}</h2>
        <div className="responsive-grid-3">
          {testimonials.map((item, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '40px 28px', background: 'var(--parchment)', borderRadius: 'var(--radius-premium)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '20px' }}>
                {[...Array(item.rating)].map((_, j) => <Star key={j} size={16} fill="var(--accent)" color="var(--accent)" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '20px', fontSize: '1rem', color: 'rgba(26, 23, 20, 0.8)', lineHeight: 1.7 }}>"{item.quote}"</p>
              <p style={{ fontWeight: '600', letterSpacing: '0.05em', fontSize: '0.85rem' }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding" style={{ textAlign: 'center', backgroundColor: 'var(--warm-black)' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '20px', color: 'var(--parchment)' }}>{t('finalCTA.title')}</h2>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '40px', color: 'rgba(250, 247, 242, 0.7)' }}>{t('finalCTA.subtitle')}</p>
        <Link to="/contact" className="premium-button" style={{ padding: '18px 48px', fontSize: '0.85rem' }}>
          {t('finalCTA.button')}
        </Link>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer style={{ padding: '60px 0', borderTop: '1px solid var(--sand)', backgroundColor: 'var(--parchment)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ marginBottom: '20px' }}>
              <img src="/logo.png" alt="JAWORT Digital" style={{ height: '80px', width: 'auto', maxWidth: '200px' }} />
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{t('footer.madeIn')}</p>
          </div>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{t('footer.platform')}</h4>
              <a href="#" style={{ fontSize: '0.85rem', opacity: 0.7 }}>{t('nav.templates')}</a>
              <a href="#" style={{ fontSize: '0.85rem', opacity: 0.7 }}>{t('nav.pricing')}</a>
              <a href="#" style={{ fontSize: '0.85rem', opacity: 0.7 }}>{t('nav.howItWorks')}</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{t('footer.legal')}</h4>
              <a href="#" style={{ fontSize: '0.85rem', opacity: 0.7 }}>{t('footer.imprint')}</a>
              <a href="#" style={{ fontSize: '0.85rem', opacity: 0.7 }}>{t('footer.privacy')}</a>
              <a href="#" style={{ fontSize: '0.85rem', opacity: 0.7 }}>{t('footer.terms')}</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '48px', textAlign: 'center', fontSize: '0.8rem', opacity: 0.4 }}>
          © {new Date().getFullYear()} Jawort. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export { Testimonials, FinalCTA, Footer };
