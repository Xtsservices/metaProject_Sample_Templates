// src/components/bloodbank/BloodBankContact.tsx
import BloodBankHeader from '../../components/BloodBank2/BloodBankHeader';
import BloodBankFooter from '../../components/BloodBank2/BloodBankFooter';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function BloodBankContact2() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BloodBankHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              We're here to help 24/7. Reach out to us anytime.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="bg-red-100 p-4 rounded-xl">
                        <MapPin className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Our Location</h3>
                        <p className="text-gray-700">
                          123 Medical Center Road<br />
                          Tanuku, Andhra Pradesh - 534215
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-red-100 p-4 rounded-xl">
                        <Phone className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Phone</h3>
                        <p className="text-gray-700">+91 98765 43210<br />(24×7 Emergency)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-red-100 p-4 rounded-xl">
                        <Mail className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-gray-700">contact@bloodbank.org</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-red-100 p-4 rounded-xl">
                        <Clock className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                        <p className="text-gray-700">
                          Round the clock (24×7)<br />
                          <span className="text-red-600 font-medium">Emergency Service Always Available</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white p-10 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                    required
                  />

                  <textarea
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none resize-none"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-xl font-bold text-lg transition shadow-md flex items-center justify-center gap-3"
                  >
                    <Send className="w-6 h-6" />
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BloodBankFooter />
    </div>
  );
}