import React from 'react';
import { Beaker, Quote, Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Home Health',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Middle Ages.",
      image: '🔬'
    },
    {
      number: '02',
      title: 'Acute Care',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Middle Ages.",
      image: '👨‍⚕️'
    },
    {
      number: '03',
      title: 'Skilled worker',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Middle Ages.",
      image: '🧪'
    }
  ];

  const testimonials = [
    {
      text: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. will close the solely on the bottom line.',
      author: 'Valtteri Erkin',
      role: 'Web-Designer'
    },
    {
      text: 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverable. Proactively envisioned multimedia based expertise and cross-media growth strategies.',
      author: 'Anar Norwood',
      role: 'Web-Designer'
    },
    {
      text: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration markets via plug-and-play networks.',
      author: 'Kory Junior',
      role: 'Developer'
    }
  ];

  const pricingPlans = [
    {
      name: 'BASIC',
      price: '$17',
      period: '/Month',
      description: 'An awesome description',
      features: ['1 User', '1 Dashboard', '5 Projects'],
      color: 'from-teal-400 to-cyan-500'
    },
    {
      name: 'BUSINESS',
      price: '$53',
      period: '/Month',
      description: 'An awesome description',
      features: ['3 User', 'Unlimited Dashboards', '10 Projects', 'Custom CSS'],
      color: 'from-cyan-500 to-blue-500',
      featured: true
    },
    {
      name: 'PREMIUM',
      price: '$76',
      period: '/Month',
      description: 'An awesome description',
      features: ['20 User', 'Unlimited Dashboards', '50 Projects', 'Custom CSS'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'ULTIMATE',
      price: '$99',
      period: '/Month',
      description: 'An awesome description',
      features: ['50 User', 'Unlimited Dashboard', '80 Projects', 'Custom CSS', 'Custom Domain'],
      color: 'from-indigo-500 to-purple-500'
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
              <a href="#" className="text-teal-600 font-semibold border-b-2 border-teal-600 pb-1">Services</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Gallery</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Blog</a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">provide best service for you</h2>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg h-96 flex items-center justify-center text-9xl">
                        {service.image}
                      </div>
                    </div>
                    <div>
                      <div className="inline-block bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg mb-6">
                        <div className="bg-white rounded-lg p-4 m-1">
                          <span className="text-5xl font-bold text-teal-600">{service.number}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="inline-block bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-6">
                        <div className="bg-white rounded-lg p-4 m-1">
                          <span className="text-5xl font-bold text-cyan-600">{service.number}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg h-96 flex items-center justify-center text-9xl">
                        {service.image}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">form our clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <Quote className="w-12 h-12 text-teal-500 mb-6" />
                <p className="text-gray-600 mb-8 italic leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-lg text-gray-800">{testimonial.author}</h4>
                  <p className="text-teal-600">{testimonial.role}</p>
                </div>
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

export default Services;