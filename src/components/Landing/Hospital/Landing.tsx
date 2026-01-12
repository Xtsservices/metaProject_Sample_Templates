import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import About from './About';
import Booking from './Booking';
import Contact from './Contact';
import Footer from './Footer';

const HospitalLanding: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // only act when on /hospital path (works for /hospital and /hospital#...)
    if (!location.pathname.startsWith('/hospital')) return;
    const hash = location.hash ? location.hash.replace('#', '') : '';
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // fallback if element renders slightly after navigation
        setTimeout(() => {
          const el2 = document.getElementById(hash);
          if (el2) el2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="antialiased text-slate-900">
      <Header />
      <main>
        <Home />
        <Services />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HospitalLanding;
