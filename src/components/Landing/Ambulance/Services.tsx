import React from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Phone, Clock, Heart, Plane, Users, Activity, Stethoscope, CheckCircle, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: <Ambulance className="w-16 h-16" />,
      title: 'Emergency Ambulance',
      description: '24/7 emergency medical transportation with advanced life support equipment and certified paramedics ready to respond to any medical emergency.',
      features: [
        'Advanced Life Support (ALS)',
        'Cardiac monitoring equipment',
        'Defibrillators and ventilators',
        'Experienced paramedics',
        'GPS tracking system',
        'Average response time: 8 minutes'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Heart className="w-16 h-16" />,
      title: 'ICU Ambulance',
      description: 'Intensive care unit equipped ambulances for critical patients requiring constant monitoring and advanced medical intervention during transport.',
      features: [
        'ICU level medical equipment',
        'Multi-parameter monitors',
        'Infusion pumps',
        'Critical care specialists',
        'Ventilator support',
        'Temperature controlled environment'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Plane className="w-16 h-16" />,
      title: 'Air Ambulance',
      description: 'Rapid air medical transport for long-distance emergencies, providing critical care at 30,000 feet with helicopter and fixed-wing aircraft.',
      features: [
        'Helicopter & fixed-wing service',
        'Medical flight crew',
        'Long-distance capability',
        'Weather monitoring',
        'Bedside to bedside service',
        'International transport'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: 'Patient Transport',
      description: 'Non-emergency patient transfer services between medical facilities, ensuring safe and comfortable transportation for scheduled appointments.',
      features: [
        'Inter-facility transfers',
        'Scheduled appointments',
        'Wheelchair accessible',
        'Stretcher transport',
        'Trained attendants',
        'Insurance coordination'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Stethoscope className="w-16 h-16" />,
      title: 'Medical Escort',
      description: 'Professional medical escort services for patients traveling by commercial airlines, ensuring medical support throughout the journey.',
      features: [
        'Commercial flight escort',
        'Medical professional accompaniment',
        'Medication management',
        'Airport assistance',
        'International travel support',
        'Medical documentation'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Activity className="w-16 h-16" />,
      title: 'Event Medical Services',
      description: 'On-site medical coverage for events, providing immediate emergency response and first aid services for attendees and participants.',
      features: [
        'On-site medical team',
        'Mobile medical unit',
        'First aid station',
        'Emergency response',
        'Event risk assessment',
        'Crowd medical management'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const additionalServices = [
    { title: 'Neonatal Transport', icon: '👶' },
    { title: 'Bariatric Transport', icon: '🏥' },
    { title: 'Oxygen Support', icon: '💨' },
    { title: 'Cardiac Care', icon: '❤️' },
    { title: 'Trauma Support', icon: '🚨' },
    { title: 'Medical Equipment', icon: '⚕️' }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Call Emergency',
      description: 'Contact our 24/7 emergency hotline or book online'
    },
    {
      number: '02',
      title: 'Dispatch Team',
      description: 'Nearest ambulance is dispatched immediately'
    },
    {
      number: '03',
      title: 'Medical Care',
      description: 'Paramedics provide on-site emergency care'
    },
    {
      number: '04',
      title: 'Safe Transport',
      description: 'Patient transported safely to medical facility'
    }
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
              <Link to="/ambulance/services" className="text-red-600 font-semibold">Services</Link>
              <Link to="/ambulance/team" className="text-gray-600 hover:text-red-600 transition">Team</Link>
              <Link to="/ambulance/contact" className="text-gray-600 hover:text-red-600 transition">Contact</Link>
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
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-red-100">Comprehensive emergency and non-emergency medical transportation</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHAT WE OFFER
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Complete Medical Transport Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional ambulance services equipped with advanced medical technology
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 text-center`}>
                        <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white">
                          {service.icon}
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                          <div className="text-4xl font-bold mb-2">24/7</div>
                          <div className="text-lg">Available</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition font-semibold flex items-center gap-2">
                        Learn More <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition font-semibold flex items-center gap-2">
                        Learn More <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 text-center`}>
                        <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white">
                          {service.icon}
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                          <div className="text-4xl font-bold mb-2">24/7</div>
                          <div className="text-lg">Available</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized medical transport solutions</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-sm font-bold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Response Process</h2>
            <p className="text-xl text-gray-600">Quick and efficient emergency response in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto text-white">
                    <span className="text-3xl font-bold">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-red-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Ambulance Service?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Book our services now or call our emergency hotline for immediate assistance
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:911" className="bg-white text-red-600 px-10 py-4 rounded-full hover:bg-gray-100 transition font-bold text-lg shadow-xl">
              Call 911 Now
            </a>
            <a href="/ambulance/contact" className="bg-white text-red-600 px-10 py-4 rounded-full hover:bg-gray-100 transition font-bold text-lg shadow-xl">
              Book Online
            </a>
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

export default Services;