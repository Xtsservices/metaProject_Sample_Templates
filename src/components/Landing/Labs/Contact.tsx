import React, { useState } from 'react';
import { Beaker, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Address',
      details: ['123 Laboratory Street', 'Medical District, MD 12345', 'United States']
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Emergency: +1 (555) 911-0000']
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      details: ['info@laboratory.com', 'support@laboratory.com', 'contact@laboratory.com']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Working Hours',
      details: ['Monday – Friday: 9am to 8pm', 'Saturday: 9am to 5pm', 'Sunday: Closed']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Beaker className="w-10 h-10 text-teal-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Diagnostic Laboratory</h1>
                <p className="text-xs text-gray-500">WordPress Theme</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-teal-600 transition">Home</a>
              <a href="/labs" className="text-gray-600 hover:text-teal-600 transition">Labs</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">About Us</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Services</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Gallery</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Blog</a>
              <a href="#" className="text-teal-600 font-semibold border-b-2 border-teal-600 pb-1">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mb-6 text-white">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-2">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Feel free to contact us for any inquiries. We're here to help you with all your laboratory needs.
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services</option>
                      <option value="appointment">Appointment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-lg hover:shadow-lg transition font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Location</h2>
              <p className="text-gray-600 mb-8">
                Visit us at our laboratory located in the heart of the medical district.
              </p>
              
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg h-96 flex items-center justify-center mb-8">
                <div className="text-center">
                  <MapPin className="w-24 h-24 text-teal-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-800">Map Location</p>
                  <p className="text-gray-600">123 Laboratory Street, Medical District</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
                <p className="text-teal-100 mb-6">
                  For urgent inquiries, please call our emergency hotline 24/7
                </p>
                <a href="tel:+15559110000" className="inline-block bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold text-lg">
                  Call: +1 (555) 911-0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: 'What are your operating hours?', a: 'We are open Monday to Friday from 9am to 8pm, and Saturday from 9am to 5pm. We are closed on Sundays.' },
              { q: 'Do I need an appointment?', a: 'While walk-ins are welcome, we recommend scheduling an appointment to ensure minimal wait time.' },
              { q: 'What services do you offer?', a: 'We offer a comprehensive range of diagnostic laboratory services including blood tests, pathology, radiology, and specialized testing.' },
              { q: 'Do you accept insurance?', a: 'Yes, we accept most major insurance plans. Please contact us to verify your specific coverage.' }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
                <Beaker className="w-8 h-8 text-teal-500" />
                <span className="text-xl font-bold">Laboratory</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.
              </p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                Get in Touch
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Business Hours</h3>
              <div className="space-y-4 text-gray-400 text-sm">
                <div>
                  <p className="font-semibold text-white mb-2">Opening Days:</p>
                  <p>Monday – Friday : 9am to 20 pm</p>
                  <p>Saturday : 9am to 17 pm</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Vacations:</p>
                  <p>All Sunday Days</p>
                  <p>All Official Holidays</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Practice Areas</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-teal-500 transition">Our Services</a></li>
                <li><a href="#" className="hover:text-teal-500 transition">Online Results</a></li>
                <li><a href="#" className="hover:text-teal-500 transition">Our Store</a></li>
                <li><a href="#" className="hover:text-teal-500 transition">Test diagnostic</a></li>
                <li><a href="#" className="hover:text-teal-500 transition">Shoplifting</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Don't miss to subscribe to our news feeds, kindly fill the form below.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-teal-500"
                />
                <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Laboratory All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition">About Us</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition">Home</a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;