import { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { countryGroups } from '../data/countries';
import { getFeePercentage } from '../data/rates';
import './Hero.css';
const allCountries = countryGroups.flatMap((g) => g.countries).sort((a, b) => a.name.localeCompare(b.name));

export default function Hero() {
  const { t } = useTranslation();
  const [from, setFrom] = useState('France');
  const [to, setTo] = useState('Cameroun');
  const [amount, setAmount] = useState(100);
  const [transferType, setTransferType] = useState('send');
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!from || !to || !amount) {
      alert(t('calc_alert'));
      return;
    }
    setStatus('loading');
    
    // Simulation du dÃ©lai rÃ©seau pour l'animation
    setTimeout(() => {
      const numAmount = Number(amount);
      const feePercentage = getFeePercentage(from);
      
      let amountSent, fees, amountReceived;

      if (transferType === 'receive') {
        amountReceived = numAmount;
        amountSent = numAmount / (1 - feePercentage);
        fees = amountSent - amountReceived;
      } else {
        amountSent = numAmount;
        fees = numAmount * feePercentage;
        amountReceived = numAmount - fees;
      }

      const fromCurrency = allCountries.find(c => c.name === from)?.currency || '';
      const toCurrency = allCountries.find(c => c.name === to)?.currency || '';

      setResult({
        from,
        to,
        fromCurrency,
        toCurrency,
        amountSent,
        feePercentage,
        fees,
        amountReceived
      });
      setStatus('done');
    }, 800);
  }

  function closeModal() {
    setStatus('idle');
    setResult(null);
  }

  return (
    <section className="hero" id="accueil">
      <video className="hero-video" autoPlay muted loop playsInline poster="/logongcashfondblanc.jpg">
        <source src={`${import.meta.env.BASE_URL}VideoAccueil.mp4`} type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="container hero-inner">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>
            {t('hero_title_1')}{' '}
            <span className="text-red">{t('hero_title_brand')}</span>{' '}
            {t('hero_title_2')}
          </h1>
          <p className="hero-tagline">{t('hero_tagline')}</p>
        </motion.div>

        <motion.div 
          className="calculator" 
          id="calculateur"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="calculator-header">
            <div className="calculator-bar left-bar" />
            <h2 className="calculator-title">{t('calc_title')}</h2>
            <div className="calculator-bar right-bar" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="calc-field">
              <label className="calc-label">{t('calc_from')}</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)} className="calc-select">
                <option value="">{t('calc_select')}</option>
                {allCountries.map((c) => (
                  <option key={`from-${c.code}`} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="calc-field">
              <label className="calc-label">{t('calc_to')}</label>
              <select value={to} onChange={(e) => setTo(e.target.value)} className="calc-select">
                <option value="">{t('calc_select')}</option>
                {allCountries.map((c) => (
                  <option key={`to-${c.code}`} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="calc-field">
              <label className="calc-label">{t('calc_amount')}</label>
              <input type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)}
                className="calc-input" placeholder={t('calc_amount_placeholder')} />
            </div>

            <div className="calc-field">
              <label className="calc-label">{t('calc_type')}</label>
              <div className="calc-radio-group">
                <label className="calc-radio">
                  <input type="radio" name="transferType" value="send"
                    checked={transferType === 'send'} onChange={() => setTransferType('send')} />
                  <span className="radio-dot" />
                  <span>{t('calc_send')}</span>
                </label>
                <label className="calc-radio">
                  <input type="radio" name="transferType" value="receive"
                    checked={transferType === 'receive'} onChange={() => setTransferType('receive')} />
                  <span className="radio-dot" />
                  <span>{t('calc_receive')}</span>
                </label>
              </div>
            </div>

            <button type="submit" className="btn calc-btn">{t('calc_submit')}</button>
          </form>
        </motion.div>
      </div>

      {/* Modal */}
      {status !== 'idle' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Fermer"><X size={20} /></button>
            <h3 className="modal-title">{t('modal_title')}</h3>

            {status === 'loading' && (
              <div className="modal-loading">
                <div className="elegant-spinner">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
                </div>
              </div>
            )}

            {status === 'done' && result && (
              <div className="modal-result">
                <div className="modal-row">
                  <span>{t('modal_rate')}</span>
                  <strong>1 {result.fromCurrency} = {(result.amountReceived / result.amountSent).toFixed(2)} {result.toCurrency}</strong>
                </div>
                <div className="modal-row highlight">
                  <span>{t('modal_received')}</span>
                  <strong>{result.amountReceived.toFixed(2)} {result.toCurrency}</strong>
                </div>
                <div className="modal-divider" />
                <div className="modal-row">
                  <span>{t('modal_sent')}</span>
                  <strong>{result.amountSent.toFixed(2)} {result.fromCurrency}</strong>
                </div>
                <div className="modal-row">
                  <span>{t('modal_fees')}</span>
                  <strong>{result.fees.toFixed(2)} {result.fromCurrency}</strong>
                </div>
                <div className="modal-row bold">
                  <span>{t('modal_total')}</span>
                  <strong>{(result.amountSent + result.fees).toFixed(2)} {result.fromCurrency}</strong>
                </div>
                <p className="modal-footer-text">
                  {t('modal_contact')}
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="modal-error"><p className="text-red">{t('modal_error')}</p></div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
