import React from 'react';
import Header from './Header3';
import Footer from './Footer3';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        <section className="py-20 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact <span className="text-teal-600">DentalCare</span></h1>
          <p className="text-slate-600 mb-8">Have questions or need help? Reach out and we'll get back to you shortly.</p>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-teal-600" />
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-sm text-slate-600">123 Dental Street, New York, NY 10001</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-teal-600" />
                <div>
                  <div className="font-semibold">Call</div>
                  <a href="tel:+18001234567" className="text-sm text-slate-600">+1 (800) 123-4567</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-teal-600" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:info@dentalcare.com" className="text-sm text-slate-600">info@dentalcare.com</a>
                </div>
              </div>
            </div>
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 border rounded" placeholder="Your name" />
              <input className="p-3 border rounded" placeholder="Email" />
              <input className="p-3 border rounded md:col-span-2" placeholder="Subject" />
              <textarea className="p-3 border rounded md:col-span-2" rows={4} placeholder="Message" />
              <button className="md:col-span-2 px-6 py-3 bg-teal-600 text-white rounded">Send Message</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
