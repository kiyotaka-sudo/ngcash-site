import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './TrustBadges.css';
import rapiditeImg from '../assets/RapiditeLOGO.jpg';

export default function TrustBadges() {
  const { t } = useTranslation();

  return (
    <section className="section trust">
      <div className="container">
        <motion.div 
          className="trust-content"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="trust-icon-wrapper">
            <img src={rapiditeImg} alt={t('trust_title')} className="trust-logo" />
          </div>
          <h2 className="trust-title">{t('trust_title')}</h2>
          <p className="trust-desc">{t('trust_desc')}</p>
        </motion.div>
      </div>
    </section>
  );
}
