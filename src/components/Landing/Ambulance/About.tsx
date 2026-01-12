import React from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Phone, Clock, Award, Heart, Users, Shield, Target, Eye, CheckCircle, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Compassion',
      description: 'We treat every patient with empathy, dignity, and care'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Excellence',
      description: 'Committed to the highest standards of medical care and service'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Teamwork',
      description: 'Collaborative approach to deliver the best patient outcomes'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Professionalism',
      description: 'Certified professionals delivering exceptional emergency care'
    }
  ];

  const milestones = [
    { year: '2005', title: 'Founded', description: 'AmCare Ambulance Service established' },
    { year: '2010', title: 'Expansion', description: 'Expanded to 50+ ambulances' },
    { year: '2015', title: 'Air Service', description: 'Launched air ambulance service' },
    { year: '2020', title: 'Technology', description: 'Integrated advanced GPS tracking' },
    { year: '2025', title: 'Leadership', description: 'Serving 15,000+ patients annually' }
  ];

  const team = [
    { name: 'Dr. Sarah Johnson', role: 'Medical Director', image: '👨‍⚕️', experience: '20+ years' },
    { name: 'Michael Chen', role: 'Operations Manager', image: '👔', experience: '15+ years' },
    { name: 'Emily Davis', role: 'Chief Paramedic', image: '👩‍⚕️', experience: '18+ years' },
    { name: 'James Wilson', role: 'Fleet Manager', image: '👨‍💼', experience: '12+ years' }
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
              <Link to="/ambulance/about" className="text-red-600 font-semibold">About</Link>
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

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About AmCare</h1>
          <p className="text-xl text-red-100">Learn about our mission, values, and commitment to excellence</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                OUR STORY
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Saving Lives Since 2005
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AmCare Ambulance Service was founded with a simple yet powerful mission: to provide the fastest, most reliable emergency medical services to our community. For over 15 years, we have been at the forefront of emergency medical response, saving thousands of lives and setting new standards for quality care.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of highly trained paramedics and EMTs work around the clock to ensure that help is always just a phone call away. We invest continuously in the latest medical equipment and training to provide our patients with the best possible care during their most critical moments.
              </p>
              <ul className="space-y-4">
                {[
                  'ISO 9001:2015 certified organization',
                  'State-of-the-art ambulance fleet',
                  '500+ certified medical professionals',
                  'Average response time: Under 8 minutes'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-3xl p-12 text-center">
                <div className="text-9xl mb-6">🚑</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                  <div className="text-5xl font-bold mb-2">15,000+</div>
                  <div className="text-xl">Lives Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide rapid, professional, and compassionate emergency medical services that save lives and improve health outcomes for our community. We are committed to excellence in every aspect of patient care and emergency response.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading emergency medical service provider, recognized for our commitment to innovation, quality care, and community service. We strive to set the standard for excellence in emergency medical response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR VALUES
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our every action and decision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6 text-red-600">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR JOURNEY
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Milestones</h2>
            <p className="text-xl text-gray-600">Key moments in our history of excellence</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-red-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              LEADERSHIP
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced leaders dedicated to saving lives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 text-center">
                  <div className="text-8xl mb-4">{member.image}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                  <div className="text-sm text-gray-600 mb-4">{member.experience} Experience</div>
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Looking for passionate professionals to join our life-saving mission
          </p>
          <button className="bg-white text-red-600 px-10 py-4 rounded-full hover:bg-gray-100 transition font-semibold text-lg shadow-xl">
            View Career Opportunities
          </button>
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
              <ul className="space-y-4 text-gray-400 text-sm">
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

export default About;