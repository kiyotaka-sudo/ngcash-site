import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { normalizePhoneNumber } from '../utils/phone';
import './Livraison.css';

export default function Livraison() {
  const { t } = useTranslation();

  function handleWhatsAppRedirect() {
    const targetNumber = '212695433269';
    const cleanNumber = normalizePhoneNumber(targetNumber);
    const whatsappMessage = `Bonjour, je souhaite faire livrer une commande (Shein/Zara/Temu). Voici les détails :`;
    const link = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(link, '_blank');
  }

  return (
    <div className="livraison-page">
      <motion.div 
        className="page-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/livraison-hero.png" alt={t('delivery_banner')} className="page-banner-bg" />
        <div className="page-banner-overlay" />
        <div className="page-banner-content">
          <motion.h1 
            className="text-blue"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('delivery_banner')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t('delivery_banner_text')}
          </motion.p>
        </div>
      </motion.div>

      <section className="section livraison-section">
        <div className="container">
          <motion.div 
            className="livraison-content-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('delivery_service_title')}</h2>
            <p>{t('delivery_service_desc')}</p>

            <button 
              className="btn btn-primary btn-livraison" 
              onClick={handleWhatsAppRedirect}
            >
              {t('delivery_whatsapp_btn')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
