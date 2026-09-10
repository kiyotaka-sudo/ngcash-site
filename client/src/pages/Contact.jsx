import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { normalizePhoneNumber } from '../utils/phone';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ firstName: '', lastName: '', message: '' });
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Numéro cible NG Cash
    const targetNumber = '212695433269';
    const cleanNumber = normalizePhoneNumber(targetNumber);
    
    // Construction du message WhatsApp
    const whatsappMessage = `Nouveau message depuis le site NG Cash
Nom : ${form.firstName} ${form.lastName}

Message : 
${form.message}`;

    const link = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(link, '_blank');
    
    // Confirmer l'action côté UI
    setStatus('success');
    setForm({ firstName: '', lastName: '', message: '' });
  }

  return (
    <div className="contact-page">
      <motion.div 
        className="page-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/contact-hero.png" alt={t('contact_banner')} className="page-banner-bg" />
        <div className="page-banner-overlay" />
        <div className="page-banner-content">
          <motion.h1 
            className="text-blue"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('contact_banner')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t('contact_banner_text')}
          </motion.p>
        </div>
      </motion.div>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info-block"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2>{t('contact_info_title')}</h2>
              <p>{t('contact_info_text')}</p>
            </motion.div>

            <motion.form 
              className="contact-form-block" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label>{t('contact_lastname')}</label>
                  <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>{t('contact_firstname')}</label>
                  <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group full-width">
                <label>{t('contact_message')}</label>
                <textarea name="message" required rows="5" value={form.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact_sending') : t('contact_send')}
              </button>

              {status === 'success' && <p className="form-feedback success">{t('contact_success')}</p>}
              {status === 'error' && <p className="form-feedback error">{t('contact_error')}</p>}
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
