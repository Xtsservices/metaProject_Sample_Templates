import React from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Phone, Clock, MapPin, Award, Users, Shield, Heart, CheckCircle, Star, ChevronRight, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Ambulance className="w-12 h-12" />,
      title: 'Emergency Ambulance',
      description: '24/7 emergency medical transportation with advanced life support equipment',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'ICU Ambulance',
      description: 'Intensive care unit equipped ambulances for critical patients',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Air Ambulance',
      description: 'Rapid air medical transport for long-distance emergencies',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Patient Transport',
      description: 'Non-emergency patient transfer services between facilities',
      color: 'from-green-500 to-green-600'
    }
  ];

  const features = [
    { icon: <Clock className="w-8 h-8" />, title: '24/7 Service', desc: 'Round the clock emergency response' },
    { icon: <Users className="w-8 h-8" />, title: 'Expert Team', desc: 'Certified paramedics and EMTs' },
    { icon: <Ambulance className="w-8 h-8" />, title: 'Modern Fleet', desc: 'Well-equipped ambulances' },
    { icon: <Award className="w-8 h-8" />, title: 'Certified', desc: 'Fully licensed and accredited' }
  ];

  const stats = [
    { number: '15k+', label: 'Lives Saved', icon: <Heart className="w-8 h-8" /> },
    { number: '500+', label: 'Medical Staff', icon: <Users className="w-8 h-8" /> },
    { number: '100+', label: 'Ambulances', icon: <Ambulance className="w-8 h-8" /> },
    { number: '50+', label: 'Locations', icon: <MapPin className="w-8 h-8" /> }
  ];

  const testimonials = [
    {
      text: 'Quick response time and professional staff. They saved my fathers life. Highly recommended emergency service.',
      author: 'John Smith',
      role: 'Patient Family',
      rating: 5
    },
    {
      text: 'Outstanding service! The paramedics were very skilled and caring. The ambulance was clean and well-equipped.',
      author: 'Sarah Johnson',
      role: 'Patient',
      rating: 5
    },
    {
      text: 'Professional team with modern equipment. They provided excellent care during transport. Thank you AmCare!',
      author: 'Michael Brown',
      role: 'Patient Family',
      rating: 5
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
              <Link to="/ambulance" className="text-red-600 font-semibold">Home</Link>
              <Link to="/ambulance/about" className="text-gray-600 hover:text-red-600 transition">About</Link>
              <Link to="/ambulance/services" className="text-gray-600 hover:text-red-600 transition">Services</Link>
              <Link to="/ambulance/team" className="text-gray-600 hover:text-red-600 transition">Team</Link>
              <Link to="/ambulance/contact" className="text-gray-600 hover:text-red-600 transition">Contact</Link>
            </nav>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ⚡ Trusted Emergency Care Since 2005
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Fast & Reliable<br />
                <span className="text-yellow-400">Emergency Care</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Professional ambulance service available 24/7 with certified paramedics and state-of-the-art medical equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-red-600 px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center gap-2 font-semibold shadow-xl">
                  <Phone className="w-5 h-5" />
                  Call Emergency
                </button>
                <button className="bg-white text-red-600 px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center gap-2 font-semibold shadow-xl">
                  Our Services
                </button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold mb-1">15k+</div>
                  <div className="text-red-200 text-sm">Lives Saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">24/7</div>
                  <div className="text-red-200 text-sm">Available</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">500+</div>
                  <div className="text-red-200 text-sm">Staff</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center text-9xl">🚑</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 hover:shadow-xl transition rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 text-red-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Emergency Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ambulance services for all emergency and non-emergency situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition">
                <div className={`bg-gradient-to-br ${service.color} text-white p-8 text-center`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="#" className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ABOUT AMCARE
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Your Trusted Emergency Medical Service Provider
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AmCare has been providing exceptional emergency medical services for over 15 years. Our team of certified paramedics and EMTs is dedicated to saving lives and providing the highest quality of care.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'State-of-the-art medical equipment',
                  'Highly trained medical professionals',
                  'Fastest response time in the region',
                  'Comprehensive insurance coverage'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition font-semibold">
                Learn More About Us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-lg h-64 flex items-center justify-center text-6xl">
                🚑
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-64 flex items-center justify-center text-6xl">
                👨‍⚕️
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg h-64 flex items-center justify-center text-6xl col-span-2">
                🏥
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from people we've helped</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xl">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Emergency Assistance?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to respond to your emergency medical needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:911" className="bg-white text-red-600 px-10 py-4 rounded-full hover:bg-gray-100 transition font-bold text-lg shadow-xl">
              Call 911 Now
            </a>
            <a href="/ambulance/contact" className="bg-white text-red-600 px-10 py-4 rounded-full hover:bg-gray-100 transition font-bold text-lg shadow-xl">
              Book Ambulance
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
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                Contact Us
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
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
                <li><a href="#" className="hover:text-white transition">Medical Escort</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>123 Emergency Street<br />New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>Emergency: 911</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AmCare Ambulance Service. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;