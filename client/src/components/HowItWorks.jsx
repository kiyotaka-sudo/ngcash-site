import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './HowItWorks.css';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { number: '01', titleKey: 'step1_title', descKey: 'step1_desc' },
    { number: '02', titleKey: 'step2_title', descKey: 'step2_desc' },
    { number: '03', titleKey: 'step3_title', descKey: 'step3_desc' },
  ];

  return (
    <section className="section how-it-works">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('how_title')}
        </motion.h2>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div 
              className="step-card" 
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="step-number-wrapper">
                <span className="step-number">{step.number}</span>
              </div>
              <h3>{t(step.titleKey)}</h3>
              <p>{t(step.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
