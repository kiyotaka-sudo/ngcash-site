import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './About.css';
import rapiditeLogo from '../assets/RapiditeLOGO.jpg';
import fiabiliteLogo from '../assets/fiabilite.jpg';
import transfertsLogo from '../assets/TransfertsInternationaux.jpg';

const values = [
  { logo: rapiditeLogo, titleKey: 'val_speed_title', descKey: 'val_speed_desc' },
  { logo: fiabiliteLogo, titleKey: 'val_reliability_title', descKey: 'val_reliability_desc' },
  { logo: transfertsLogo, titleKey: 'val_global_title', descKey: 'val_global_desc' },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <motion.div 
        className="page-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={`${import.meta.env.BASE_URL}about-hero.png`} alt={t('about_banner')} className="page-banner-bg" />
        <div className="page-banner-overlay" />
        <div className="page-banner-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('about_banner')}
          </motion.h1>
        </div>
      </motion.div>

      <section className="section about-mission">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('about_mission_title')}</h2>
          <p>{t('about_mission_text')}</p>
        </motion.div>
      </section>

      <section className="section about-values">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('about_values_title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('about_values_subtitle')}
          </motion.p>

          <div className="values-grid">
            {values.map(({ logo, titleKey, descKey }, i) => (
              <motion.div 
                className="value-card" 
                key={titleKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="value-icon">
                  <img src={logo} alt={t(titleKey)} className="value-logo" />
                </div>
                <h3>{t(titleKey)}</h3>
                <p>{t(descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
