import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MousePointer2, Settings2, Share2, Sparkles, Heart, Bell } from 'lucide-react';

const HowItWorksPage = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: <MousePointer2 size={40} />,
      title: t('howItWorksPage.step1.title'),
      desc: t('howItWorksPage.step1.desc')
    },
    {
      icon: <Settings2 size={40} />,
      title: t('howItWorksPage.step2.title'),
      desc: t('howItWorksPage.step2.desc')
    },
    {
      icon: <Heart size={40} />,
      title: t('howItWorksPage.step3.title'),
      desc: t('howItWorksPage.step3.desc')
    },
    {
      icon: <Share2 size={40} />,
      title: t('howItWorksPage.step4.title'),
      desc: t('howItWorksPage.step4.desc')
    },
    {
      icon: <Bell size={40} />,
      title: t('howItWorksPage.step5.title'),
      desc: t('howItWorksPage.step5.desc')
    },
    {
      icon: <Sparkles size={40} />,
      title: t('howItWorksPage.step6.title'),
      desc: t('howItWorksPage.step6.desc')
    }
  ];

  return (
    <div className="section-padding page-clearance" style={{ backgroundColor: 'var(--parchment)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '24px' }}>{t('howItWorksPage.title')}</h1>
          <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            {t('howItWorksPage.subtitle')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', gap: '30px' }}
            >
              <div style={{ color: 'var(--accent)', flexShrink: 0 }}>
                {step.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ color: 'rgba(0,0,0,0.6)', lineHeight: '1.8' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="dark-section" style={{ marginTop: '100px', padding: '60px', borderRadius: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{t('howItWorksPage.ready')}</h2>
          <button className="premium-button">{t('howItWorksPage.start')}</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
