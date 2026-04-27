import React, { useRef } from 'react';
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
    { name: 'Majestic', id: 'majestic', badge: 'Exclusive' },
    { name: 'Minimal', id: 'minimal', badge: 'Clean' },
    { name: 'Vintage', id: 'vintage', badge: 'Classic' }
  ];

  const constraintsRef = useRef(null);

  return (
    <section id="templates" style={{ backgroundColor: 'var(--white)', padding: 'var(--section-padding)', overflow: 'hidden' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '16px' }}
        >
          {t('templates.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ textAlign: 'center', color: 'rgba(26, 23, 20, 0.6)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px', fontSize: '1rem' }}
        >
          {t('templates.subtitle')}
        </motion.p>
        
        {/* Carousel Container */}
        <div 
          ref={constraintsRef}
          style={{ cursor: 'grab', overflow: 'visible' }}
        >
          <motion.div 
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            whileTap={{ cursor: 'grabbing' }}
            style={{ 
              display: 'flex', 
              gap: '30px', 
              padding: '20px 0',
              width: 'max-content'
            }}
          >
            {templates.map((template, i) => (
              <motion.div 
                key={i} 
                style={{
                  width: '320px',
                  padding: '40px 24px',
                  borderRadius: 'var(--radius-premium)',
                  background: 'var(--parchment)',
                  border: '1px solid var(--sand)',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexShrink: 0
                }}
              >
                {/* Mobile Mockup */}
                <div style={{ 
                  width: '180px', 
                  height: '360px', 
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
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>{template.name}</span>
                  )}
                  
                  {/* Phone Notch/Speaker */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '0', 
                    width: '60px', 
                    height: '16px', 
                    background: '#1a1a1a', 
                    borderBottomLeftRadius: '10px', 
                    borderBottomRightRadius: '10px',
                    zIndex: 10
                  }} />
                </div>

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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{template.name}</h3>
                <button 
                  className="premium-button secondary" 
                  style={{ padding: '10px 24px', fontSize: '0.7rem' }}
                  onClick={() => template.liveUrl && window.open(template.liveUrl, '_blank')}
                >
                  {t('templates.demo')}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Carousel Hint */}
        <div style={{ textAlign: 'center', marginTop: '40px', opacity: 0.4, fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          {t('templates.swipeHint', { defaultValue: 'SWIPE TO EXPLORE' })}
        </div>
      </div>
    </section>


  );
};

export default TemplateShowcase;
