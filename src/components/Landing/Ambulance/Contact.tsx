import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Phone, Clock, MapPin, Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    emergency: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    setFormData({
      ...formData,
      [target.name]: target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          emergency: false
        });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Emergency Hotline',
      details: ['Call: 911', 'Booking: +1 (555) 123-4567', 'Fax: +1 (555) 123-4568'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Us',
      details: ['emergency@amcare.com', 'info@amcare.com', 'support@amcare.com'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Our Location',
      details: ['123 Emergency Street', 'New York, NY 10001', 'United States'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Working Hours',
      details: ['24/7 Emergency Service', 'Office: Mon-Fri 9AM-6PM', 'Weekend: 10AM-4PM'],
      color: 'from-green-500 to-green-600'
    }
  ];

  const departments = [
    { name: 'Emergency Services', phone: '911', available: '24/7' },
    { name: 'Booking & Scheduling', phone: '+1 (555) 123-4567', available: '24/7' },
    { name: 'Patient Transport', phone: '+1 (555) 123-4568', available: 'Mon-Fri 8AM-8PM' },
    { name: 'Billing Department', phone: '+1 (555) 123-4569', available: 'Mon-Fri 9AM-5PM' },
    { name: 'Customer Support', phone: '+1 (555) 123-4570', available: '24/7' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">Emergency: 911</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Booking: +1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Emergency Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Ambulance className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AmCare</h1>
                <p className="text-xs text-gray-500">Ambulance Service</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/ambulance" className="text-gray-600 hover:text-red-600 transition">Home</Link>
              <Link to="/ambulance/about" className="text-gray-600 hover:text-red-600 transition">About</Link>
              <Link to="/ambulance/services" className="text-gray-600 hover:text-red-600 transition">Services</Link>
              <Link to="/ambulance/team" className="text-gray-600 hover:text-red-600 transition">Team</Link>
              <Link to="/ambulance/contact" className="text-red-600 font-semibold">Contact</Link>
            </nav>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-red-100">Get in touch with our emergency medical team</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className={`bg-gradient-to-br ${info.color} text-white p-6 text-center`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full">
                    {info.icon}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-2">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting AmCare. We'll respond to your inquiry shortly.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Select Service</option>
                        <option value="emergency">Emergency Ambulance</option>
                        <option value="icu">ICU Ambulance</option>
                        <option value="air">Air Ambulance</option>
                        <option value="transport">Patient Transport</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="emergency"
                      checked={formData.emergency}
                      onChange={handleChange}
                      className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label className="text-sm text-gray-700">
                      This is an emergency (Please call 911 instead for immediate assistance)
                    </label>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg hover:shadow-lg transition font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Map & Departments */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-8">
                Our headquarters is located in the heart of New York City with easy access to all major highways.
              </p>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl h-96 flex items-center justify-center mb-8">
                <div className="text-center">
                  <MapPin className="w-24 h-24 text-red-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-800">Interactive Map</p>
                  <p className="text-gray-600">123 Emergency Street, New York, NY</p>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div>
                        <h4 className="font-bold text-gray-800">{dept.name}</h4>
                        <p className="text-sm text-gray-600">{dept.available}</p>
                      </div>
                      <a href={`tel:${dept.phone}`} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold">
                        {dept.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Medical Emergency?</h2>
          <p className="text-xl text-red-100 mb-6">Call our 24/7 emergency hotline immediately</p>
          <a href="tel:911" className="inline-block bg-white text-red-600 px-12 py-4 rounded-full hover:bg-gray-100 transition text-2xl font-bold shadow-xl">
            Call 911 Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common inquiries</p>
          </div>

          <div className="space-y-6">
            {[
              { q: 'How quickly can an ambulance arrive?', a: 'Our average response time is under 8 minutes for emergency calls within our service area.' },
              { q: 'Do you accept insurance?', a: 'Yes, we accept most major insurance plans. Please contact us to verify your specific coverage.' },
              { q: 'Can I book an ambulance in advance?', a: 'Yes, for non-emergency patient transport, you can book our services in advance by calling our booking line.' },
              { q: 'What areas do you serve?', a: 'We provide emergency ambulance services throughout New York City and surrounding areas, plus air ambulance nationwide.' },
              { q: 'Are your paramedics certified?', a: 'Yes, all our paramedics are state-certified and regularly trained in advanced life support and emergency care.' }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Ambulance className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AmCare</span>
              </div>
              <p className="text-gray-400 mb-6">
                Professional emergency medical services providing quality care 24/7 with certified paramedics.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Emergency Ambulance</a></li>
                <li><a href="#" className="hover:text-white transition">ICU Ambulance</a></li>
                <li><a href="#" className="hover:text-white transition">Air Ambulance</a></li>
                <li><a href="#" className="hover:text-white transition">Patient Transport</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>123 Emergency Street<br />New York, NY 10001</li>
                <li>Emergency: 911</li>
                <li>Booking: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 AmCare Ambulance Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;