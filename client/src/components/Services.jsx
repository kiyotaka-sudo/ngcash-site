import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    logo: '/Transferts Internationaux.jpg',
    titleKey1: 'svc_transfer_title_1',
    titleKey2: 'svc_transfer_title_2',
    descKey: 'svc_transfer_desc',
  },
  {
    logo: '/Support Multi-Plateforme.jpg',
    titleKey1: 'svc_platform_title_1',
    titleKey2: 'svc_platform_title_2',
    descKey: 'svc_platform_desc',
  },
  {
    logo: '/Sécurité Avancée.jpg',
    titleKey1: 'svc_security_title_1',
    titleKey2: 'svc_security_title_2',
    descKey: 'svc_security_desc',
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="section services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {t('services_title')}
        </motion.h2>

        <div className="services-grid">
          {services.map(({ logo, titleKey1, titleKey2, descKey }, i) => (
            <motion.div 
              className="service-card" 
              key={titleKey1}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="service-icon-wrapper">
                <img src={logo} alt={t(titleKey1)} className="service-logo" />
              </div>
              <h3 className="service-title">
                <span className="title-black">{t(titleKey1)}</span>
                <span className="title-red">{t(titleKey2)}</span>
              </h3>
              <p>{t(descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
