import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TemplateShowcase = () => {
  const { t } = useTranslation();

  const templates = [
    { name: 'Noir', id: 'noir', badge: 'Timeless' },
    { name: 'Bloom', id: 'bloom', badge: 'Popular' },
    { name: 'Majestic', id: 'majestic', badge: 'Exclusive' }
  ];

  return (
    <section id="templates" style={{ backgroundColor: 'var(--white)', padding: 'var(--section-padding)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '16px' }}>{t('templates.title')}</h2>
        <p style={{ textAlign: 'center', color: 'rgba(26, 23, 20, 0.6)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px', fontSize: '1rem' }}>
          {t('templates.subtitle')}
        </p>
        
        <div className="responsive-grid-3" style={{ textAlign: 'center' }}>
          {templates.map((template, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '40px 24px',
                borderRadius: 'var(--radius-premium)',
                background: 'var(--parchment)',
                border: '1px solid var(--sand)',
                transition: 'var(--transition-smooth)'
              }}
            >
              {template.badge && (
                <span style={{ 
                  fontSize: '0.65rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  color: 'var(--accent-gold)', 
                  fontWeight: '700',
                  marginBottom: '10px',
                  display: 'block'
                }}>
                  {template.badge}
                </span>
              )}
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', marginBottom: '20px' }}>{template.name}</h3>
              <button className="premium-button secondary" style={{ padding: '10px 24px', fontSize: '0.7rem' }}>
                {t('templates.demo')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
