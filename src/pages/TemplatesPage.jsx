import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import mockups from '../assets/mockups.png';

const TemplatesPage = () => {
  const { t } = useTranslation();

  const allTemplates = [
    { 
      name: 'Noir', 
      price: 'Premium', 
      style: 'Modern & Dark',
      liveUrl: 'https://premiumelegante.thedigitalyes.com/'
    },
    { name: 'Bloom', price: 'Starter', style: 'Floral & Light' },
    { name: 'Majestic', price: 'Deluxe', style: 'Royal & Gold' },
    { name: 'Minimal', price: 'Starter', style: 'Clean & Simple' },
    { name: 'Vintage', price: 'Premium', style: 'Classic & Elegant' },
    { name: 'Ethereal', price: 'Deluxe', style: 'Dreamy & Soft' }
  ];

  return (
    <div className="section-padding page-clearance" style={{ backgroundColor: 'var(--parchment)', minHeight: '100vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '24px' }}>{t('templatesPage.title')}</h1>
          <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            {t('templatesPage.subtitle')}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {allTemplates.map((template, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <div style={{ height: '400px', background: 'var(--sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                {/* Mobile Mockup */}
                <div style={{ 
                  width: '180px', 
                  height: '360px', 
                  background: 'var(--warm-black)', 
                  borderRadius: '30px', 
                  border: '8px solid #1a1a1a', 
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>{template.name}</span>
                  )}
                  
                  {/* Phone Notch/Speaker */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '0', 
                    width: '60px', 
                    height: '18px', 
                    background: '#1a1a1a', 
                    borderBottomLeftRadius: '10px', 
                    borderBottomRightRadius: '10px',
                    zIndex: 10
                  }} />
                </div>
              </div>
              <div style={{ padding: '30px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{template.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>{template.style}</p>
                <button 
                  className="premium-button secondary" 
                  style={{ width: '100%' }}
                  onClick={() => template.liveUrl && window.open(template.liveUrl, '_blank')}
                >
                  {t('templatesPage.liveDemo')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default TemplatesPage;
