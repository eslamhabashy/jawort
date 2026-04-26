import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Pricing } from '../components/PricingFeatures';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const { t } = useTranslation();
  const features = [
    { name: t('pricing.featuresList.guests'), starter: true, premium: true, deluxe: true },
    { name: t('pricing.featuresList.rsvp'), starter: true, premium: true, deluxe: true },
    { name: t('pricing.featuresList.maps'), starter: false, premium: true, deluxe: true },
    { name: t('pricing.featuresList.music'), starter: false, premium: true, deluxe: true },
    { name: t('pricing.featuresList.domain'), starter: false, premium: true, deluxe: true },
    { name: t('pricing.featuresList.bilingual'), starter: false, premium: false, deluxe: true },
    { name: t('pricing.featuresList.support'), starter: false, premium: false, deluxe: true },
    { name: t('pricing.featuresList.updates'), starter: false, premium: true, deluxe: true },
  ];

  return (
    <div className="page-clearance" style={{ backgroundColor: 'var(--parchment)', minHeight: '100vh' }}>
      <Pricing />
      
      <div className="container section-padding" style={{ paddingTop: '0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>{t('pricing.compare')}</h2>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--sand)' }}>
                <th style={{ padding: '20px', fontSize: '1.2rem' }}>{t('pricing.feature')}</th>
                <th style={{ padding: '20px', textAlign: 'center' }}>{t('pricing.starter.name')}</th>
                <th style={{ padding: '20px', textAlign: 'center' }}>{t('pricing.premium.name')}</th>
                <th style={{ padding: '20px', textAlign: 'center' }}>{t('pricing.deluxe.name')}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '15px 20px' }}>{f.name}</td>
                  <td style={{ padding: '15px 20px', textAlign: 'center' }}>{f.starter ? <Check size={18} color="var(--accent)" style={{ margin: '0 auto' }} /> : '-'}</td>
                  <td style={{ padding: '15px 20px', textAlign: 'center' }}>{f.premium ? <Check size={18} color="var(--accent)" style={{ margin: '0 auto' }} /> : '-'}</td>
                  <td style={{ padding: '15px 20px', textAlign: 'center' }}>{f.deluxe ? <Check size={18} color="var(--accent)" style={{ margin: '0 auto' }} /> : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
