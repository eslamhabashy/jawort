import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="section-padding page-clearance">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>{t('contactPage.title')}</h1>
            <p style={{ opacity: 0.6, marginBottom: '40px' }}>
              {t('contactPage.subtitle')}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '600' }}>Email</h4>
                  <p style={{ opacity: 0.6 }}>hallo@jawort.digital</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '600' }}>{t('howItWorksPage.title').split(' ')[0]}</h4>
                  <p style={{ opacity: 0.6 }}>+49 (0) 123 456 789</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '600' }}>{t('contactPage.office')}</h4>
                  <p style={{ opacity: 0.6 }}>{t('contactPage.location')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ background: 'var(--white)', padding: '50px', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('contactPage.name')}</label>
                <input type="text" placeholder={t('contactPage.placeholderName')} style={{ padding: '15px', borderRadius: '4px', border: '1px solid var(--sand)', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('contactPage.email')}</label>
                <input type="email" placeholder={t('contactPage.placeholderEmail')} style={{ padding: '15px', borderRadius: '4px', border: '1px solid var(--sand)', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('contactPage.message')}</label>
                <textarea rows="5" placeholder={t('contactPage.placeholderMessage')} style={{ padding: '15px', borderRadius: '4px', border: '1px solid var(--sand)', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <button className="premium-button" style={{ width: '100%', marginTop: '10px' }}>{t('contactPage.send')}</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
