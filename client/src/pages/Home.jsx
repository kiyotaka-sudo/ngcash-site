import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import TrustBadges from '../components/TrustBadges';
import CountriesGrid from '../components/CountriesGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <TrustBadges />
      <CountriesGrid />
    </>
  );
}
