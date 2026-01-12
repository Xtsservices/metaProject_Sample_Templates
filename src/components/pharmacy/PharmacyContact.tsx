// src/components/pharmacy/PharmacyContact.tsx

import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import PharmacyHeader from './PharmacyHeader';
import PharmacyFooter from './PharmacyFooter';

export default function PharmacyContact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PharmacyHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-teal-800 to-blue-950 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-teal-100">
              We're here to help you 24/7 with all your healthcare needs
            </p>
          </div>
        </section>

        {/* Main Contact Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left - Contact Information */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                  <p className="text-lg text-gray-700 mb-10">
                    Have questions about your order, product availability, or need assistance? 
                    Our team is ready to help you — reach out anytime!
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-7 h-7 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">Phone</h3>
                        <p className="text-gray-600 text-lg">+91 98765 43210</p>
                        <p className="text-gray-500 text-sm mt-1">Mon–Sun: 8:00 AM – 11:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-7 h-7 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600 text-lg">support@pharmacare.in</p>
                        <p className="text-gray-500 text-sm mt-1">
                          We usually reply within 1–2 hours during business hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-7 h-7 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">Office Address</h3>
                        <p className="text-gray-600 text-lg">
                          PharmaCare Pvt Ltd<br />
                          Plot No. 45, Healthcare Hub<br />
                          Gachibowli, Hyderabad, Telangana 500032
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5">
                      <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-7 h-7 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">Working Hours</h3>
                        <p className="text-gray-600 text-lg">
                          Monday – Sunday<br />
                          8:00 AM – 11:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                        placeholder="+91 xxxxxxxxxx"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                      placeholder="Order help / Product inquiry / Other"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition resize-none"
                      placeholder="How can we help you today?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-4 rounded-lg font-medium hover:bg-teal-700 transition flex items-center justify-center gap-3 shadow-md"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map / Location (optional placeholder) */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Find Us Here</h2>
            <div className="bg-gray-300 h-96 rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <p className="text-xl text-gray-700">
                  Google Maps integration coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PharmacyFooter />
    </div>
  );
}