import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MousePointer2, Settings2, Share2 } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <MousePointer2 size={32} />,
      title: t('howItWorks.step1.title'),
      desc: t('howItWorks.step1.desc')
    },
    {
      icon: <Settings2 size={32} />,
      title: t('howItWorks.step2.title'),
      desc: t('howItWorks.step2.desc')
    },
    {
      icon: <Share2 size={32} />,
      title: t('howItWorks.step3.title'),
      desc: t('howItWorks.step3.desc')
    }
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ backgroundColor: 'var(--parchment)' }}>
      <div className="container">
        {/* Social Proof Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px', opacity: 0.8 }}
        >
          <p style={{ letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: '600' }}>
            {t('socialProof', { count: '500+' })}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px', opacity: 0.4, flexWrap: 'wrap', fontSize: '0.85rem', fontWeight: '500', letterSpacing: '0.1em' }}>
            {['WHATSAPP', 'EMAIL', 'INSTAGRAM'].map((chan) => (
              <motion.span 
                key={chan}
                whileHover={{ opacity: 1, color: 'var(--accent-gold)', scale: 1.05 }}
                style={{ cursor: 'default' }}
              >
                {chan}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ textAlign: 'center', fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '60px' }}
        >
          {t('howItWorks.title')}
        </motion.h2>
        
        <div className="responsive-grid-3">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
              whileHover={{ 
                y: -15, 
                boxShadow: '0 40px 100px rgba(0,0,0,0.08)',
                transition: { duration: 0.3 }
              }}
              style={{ 
                textAlign: 'center', 
                padding: '48px 32px', 
                background: 'var(--white)', 
                borderRadius: 'var(--radius-premium)', 
                boxShadow: '0 20px 60px rgba(0,0,0,0.03)',
                cursor: 'default',
                position: 'relative',
                zIndex: 1
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                style={{ color: 'var(--accent-gold)', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}
              >
                {step.icon}
              </motion.div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.75rem)', marginBottom: '16px' }}>{step.title}</h3>
              <p style={{ color: 'rgba(26, 23, 20, 0.6)', lineHeight: '1.8', fontSize: '0.95rem' }}>{step.desc}</p>
              
              {/* Subtle background highlight on hover */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'var(--accent-gold)', 
                  borderRadius: 'inherit', 
                  zIndex: -1 
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default HowItWorks;
