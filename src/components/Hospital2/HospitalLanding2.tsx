import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Doctors from './Doctors';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Appointment from './Appointment';
import Footer from './Footer';

export default function HospitalLanding2() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Testimonials />
      <Blog />
      <Appointment />
      <Footer />
    </div>
  );
}
