import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="section-padding page-clearance" style={{ backgroundColor: 'var(--parchment)', minHeight: '100vh' }}>
      <div className="container">
        {/* Centered Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '24px' }}>{t('contactPage.title')}</h1>
          <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            {t('contactPage.subtitle')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>
          {/* Info Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {[
              { icon: <Mail size={22} />, label: 'Email', value: 'hallo@jawort.digital' },
              { icon: <Phone size={22} />, label: 'WhatsApp', value: '+49 (0) 123 456 789' },
              { icon: <MapPin size={22} />, label: t('contactPage.office'), value: t('contactPage.location') }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50%', 
                  background: 'var(--white)', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', 
                  color: 'var(--accent)', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' 
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)', marginBottom: '4px' }}>{item.label}</h4>
                  <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              background: 'var(--white)', 
              padding: 'clamp(30px, 5vw, 60px)', 
              borderRadius: 'var(--radius-premium)', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.08)' 
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { label: t('contactPage.name'), type: 'text', placeholder: t('contactPage.placeholderName') },
                { label: t('contactPage.email'), type: 'email', placeholder: t('contactPage.placeholderEmail') }
              ].map((field, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)' }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--sand)', outline: 'none', fontFamily: 'inherit', fontSize: '1rem', background: 'var(--parchment)' }} />
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)' }}>{t('contactPage.message')}</label>
                <textarea rows="4" placeholder={t('contactPage.placeholderMessage')} style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--sand)', outline: 'none', resize: 'none', fontFamily: 'inherit', fontSize: '1rem', background: 'var(--parchment)' }}></textarea>
              </div>
              <button className="premium-button" style={{ width: '100%', padding: '20px' }}>{t('contactPage.send')}</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
