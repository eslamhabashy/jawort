import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Music, MapPin, Globe, Shield, Bell } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const featureItems = [
    { icon: <Bell size={22} />, text: t('features.rsvp') },
    { icon: <MapPin size={22} />, text: t('features.map') },
    { icon: <Music size={22} />, text: t('features.music') },
    { icon: <Globe size={22} />, text: t('features.domain') },
    { icon: <Globe size={22} />, text: t('features.multilingual') },
    { icon: <Shield size={22} />, text: t('features.gdpr') }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="responsive-grid-3">
          {featureItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', border: '1px solid var(--sand)', borderRadius: 'var(--radius-premium)', background: 'var(--parchment)' }}>
              <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>{item.icon}</div>
              <p style={{ fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.4 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const { t } = useTranslation();

  const tiers = [
    { key: 'starter', popular: false },
    { key: 'premium', popular: true },
    { key: 'deluxe', popular: false }
  ];

  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: 'var(--parchment)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '60px' }}>{t('pricing.title')}</h2>
        
        <div className="responsive-grid-3" style={{ alignItems: 'flex-start' }}>
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                padding: '48px 32px', 
                background: tier.popular ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                border: tier.popular ? '2px solid var(--accent)' : '1px solid var(--sand)',
                borderRadius: 'var(--radius-premium)',
                position: 'relative',
                boxShadow: tier.popular ? '0 30px 80px rgba(104, 39, 50, 0.1)' : 'none'
              }}
            >
              {tier.popular && (
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  background: 'var(--accent)',
                  color: 'var(--white)',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  whiteSpace: 'nowrap'
                }}>
                  {t('pricing.popular', { defaultValue: 'Most Popular' })}
                </div>
              )}
              
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '12px' }}>{t(`pricing.${tier.key}.name`)}</h3>
              <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '300', marginBottom: '40px', fontFamily: 'var(--font-serif)' }}>
                €{t(`pricing.${tier.key}.price`)}
              </div>
              
              <ul style={{ listStyle: 'none', marginBottom: '40px' }}>
                {t(`pricing.${tier.key}.features`, { returnObjects: true }).map((feat, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '0.9rem', color: 'rgba(26, 23, 20, 0.7)' }}>
                    <Check size={16} color="var(--accent-gold)" style={{ marginTop: '4px', flexShrink: 0 }} />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <button className={`premium-button ${!tier.popular ? 'secondary' : ''}`} style={{ width: '100%' }}>
                {t('pricing.select')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features, Pricing };
