import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TemplateShowcase = () => {
  const { t } = useTranslation();

  const templates = [
    { 
      name: 'Noir', 
      id: 'noir', 
      badge: 'Timeless',
      liveUrl: 'https://premiumelegante.thedigitalyes.com/'
    },
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
                transition: 'var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Mobile Mockup */}
              <div style={{ 
                width: '140px', 
                height: '280px', 
                background: 'var(--warm-black)', 
                borderRadius: '24px', 
                border: '6px solid #1a1a1a', 
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                {template.liveUrl ? (
                  <iframe 
                    src={template.liveUrl}
                    title={template.name}
                    loading="lazy"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      border: 'none',
                      pointerEvents: 'none'
                    }}
                  />
                ) : (
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>{template.name}</span>
                )}
                
                {/* Phone Notch/Speaker */}
                <div style={{ 
                  position: 'absolute', 
                  top: '0', 
                  width: '45px', 
                  height: '14px', 
                  background: '#1a1a1a', 
                  borderBottomLeftRadius: '8px', 
                  borderBottomRightRadius: '8px',
                  zIndex: 10
                }} />
              </div>

              {template.badge && (
                <span style={{ 
                  fontSize: '0.6rem', 
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
              <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: '20px' }}>{template.name}</h3>
              <button 
                className="premium-button secondary" 
                style={{ padding: '10px 24px', fontSize: '0.7rem' }}
                onClick={() => template.liveUrl && window.open(template.liveUrl, '_blank')}
              >
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
