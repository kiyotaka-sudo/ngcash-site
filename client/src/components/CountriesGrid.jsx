import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { countryGroups } from '../data/countries';
import './CountriesGrid.css';

export default function CountriesGrid() {
  const { t } = useTranslation();
  const allCountries = countryGroups.flatMap(g => g.countries).sort((a, b) => a.name.localeCompare(b.name)).slice(0, 8);

  return (
    <section className="section countries">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('countries_title')}</h2>
          <p className="section-subtitle">{t('countries_subtitle')}</p>
        </motion.div>

        <motion.div 
          className="countries-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {allCountries.map((country) => (
            <motion.div 
              className="country-card" 
              key={country.code}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={`Drapeau ${country.name}`}
                className="country-flag"
                width={32}
                height={32}
              />
              <span className="country-name">{country.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
