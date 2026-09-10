import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copyright">{t('footer_copyright')}</p>
      </div>
    </footer>
  );
}
