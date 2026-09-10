import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Livraison from './pages/Livraison';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/livraison" element={<Livraison />} />
          {/* Redirection pour l'ancienne route /simulation */}
          <Route path="/simulation" element={<Navigate to="/#calculateur" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="212695433269" />
    </>
  );
}

