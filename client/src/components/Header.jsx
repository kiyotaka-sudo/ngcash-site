import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const langs = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'de', label: 'DE' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const langRef = useRef(null);

  // Fermer le menu langue si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/logongcashfondblanc.jpg" alt="NG Cash" className="logo-img" />
        </Link>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            {t('nav_home')}
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            {t('nav_about')}
          </NavLink>
          <NavLink to="/livraison" onClick={() => setOpen(false)}>
            {t('nav_delivery')}
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            {t('nav_contact')}
          </NavLink>
        </nav>

        <div className="lang-dropdown-container" ref={langRef}>
          <button 
            className="lang-dropdown-btn" 
            onClick={() => setLangOpen(!langOpen)}
            aria-label="Changer de langue"
          >
            <Globe size={20} />
            <span className="current-lang">{i18n.language.toUpperCase()}</span>
          </button>
          
          {langOpen && (
            <div className="lang-dropdown-menu">
              {langs.map(({ code, label }) => (
                <button
                  key={code}
                  className={`lang-dropdown-item ${i18n.language === code ? 'active' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage(code);
                    setLangOpen(false);
                    setOpen(false); // Optionnel: fermer aussi le menu mobile
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
