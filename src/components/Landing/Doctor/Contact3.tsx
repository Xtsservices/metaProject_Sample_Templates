import React from 'react';
import Header from './Header3';
import Footer from './Footer3';
import { MapPin, Phone, Mail, Clock, Stethoscope, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        <section className="py-20 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact <span className="text-slate-900">Dr. Johnson</span></h1>
            <p className="text-slate-600 mb-8">Schedule your orthopedic consultation or reach out with any questions. We're here to help restore your mobility.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-slate-900 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Our Location</div>
                      <div className="text-slate-600">456 Medical Center Drive<br />Suite 300, Houston, TX 77030</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-slate-900 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Phone</div>
                      <a href="tel:+18001234567" className="text-slate-600 hover:text-slate-900">+1 (800) 123-4567</a>
                      <div className="text-sm text-slate-500">Emergency: 24/7 Available</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-slate-900 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <a href="mailto:info@orthopediccare.com" className="text-slate-600 hover:text-slate-900">info@orthopediccare.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-slate-900 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Office Hours</div>
                      <div className="text-slate-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Emergency Only
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-slate-900 rounded-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Emergency Orthopedic Care</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  For urgent orthopedic injuries, fractures, or severe pain, don't wait. Contact us immediately.
                </p>
                <a href="tel:+18001234567" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition">
                  <Phone className="w-5 h-5" />
                  Call Emergency Line
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-slate-900" />
                <h2 className="text-2xl font-bold text-slate-900">Schedule Consultation</h2>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    className="p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                    placeholder="First Name" 
                    required
                  />
                  <input 
                    className="p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                    placeholder="Last Name" 
                    required
                  />
                </div>
                <input 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  placeholder="Email Address" 
                  type="email"
                  required
                />
                <input 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  placeholder="Phone Number" 
                  type="tel"
                  required
                />
                <select className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" required>
                  <option value="">Select Service</option>
                  <option>Joint Replacement Consultation</option>
                  <option>Sports Medicine Evaluation</option>
                  <option>Spine Surgery Consultation</option>
                  <option>General Orthopedic Assessment</option>
                  <option>Second Opinion</option>
                  <option>Physical Therapy Evaluation</option>
                </select>
                <textarea 
                  className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none" 
                  rows={4} 
                  placeholder="Describe your condition or symptoms (optional)"
                />
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" required />
                  <label className="text-sm text-slate-600">
                    I agree to the privacy policy and consent to being contacted by OrthoExpert regarding my inquiry.
                  </label>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What to Expect</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">1. Initial Consultation</h4>
                  <p className="text-slate-600 text-sm">Comprehensive evaluation of your condition and medical history.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">2. Diagnostic Imaging</h4>
                  <p className="text-slate-600 text-sm">Advanced imaging studies if needed for accurate diagnosis.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">3. Treatment Plan</h4>
                  <p className="text-slate-600 text-sm">Personalized treatment options and timeline discussion.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
