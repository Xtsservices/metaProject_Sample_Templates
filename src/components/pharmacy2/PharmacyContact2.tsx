// src/pages/pharmacy/PharmacyContact.tsx
import PharmacyHeader from '../../components/pharmacy2/PharmacyHeader2';
import PharmacyFooter from '../../components/pharmacy2/PharmacyFooter2';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function PharmacyContact2() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PharmacyHeader />

      <main className="flex-grow">
        {/* Hero / Page Title */}
        <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We're here to help! Reach out to us anytime — our team is available 24/7.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left - Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="bg-emerald-100 text-emerald-700 p-4 rounded-xl">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                        <p className="text-gray-700">
                          123 Health Street, Medical District<br/>
                          New York, NY 10001, USA
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-emerald-100 text-emerald-700 p-4 rounded-xl">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                        <p className="text-gray-700">
                          +1 (555) 123-4567<br/>
                          <span className="text-sm text-gray-500">(Available 24/7)</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-emerald-100 text-emerald-700 p-4 rounded-xl">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                        <p className="text-gray-700">
                          support@pharmastore.com<br/>
                          <span className="text-sm text-gray-500">We reply within 24 hours</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-emerald-100 text-emerald-700 p-4 rounded-xl">
                        <Clock className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                        <p className="text-gray-700">
                          Monday – Sunday<br/>
                          24 hours a day, 7 days a week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                      placeholder="Inquiry about..."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition resize-none"
                      placeholder="How can we help you today?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-5 rounded-xl font-bold text-lg transition flex items-center justify-center gap-3 shadow-md"
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

      <PharmacyFooter />
    </div>
  );
}