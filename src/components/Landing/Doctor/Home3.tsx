import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Award, Users, Heart, Shield, Calendar, ArrowRight, Play, Quote, Phone } from 'lucide-react';
import Header from './Header3';
import Footer from './Footer3';

const Home: React.FC = () => {
  const services = [
    {
      icon: '🦷',
      title: 'General Dentistry',
      description: 'Comprehensive dental care including checkups, cleanings, and preventive treatments for the whole family.'
    },
    {
      icon: '✨',
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with veneers, bonding, and professional smile makeovers designed just for you.'
    },
    {
      icon: '🌟',
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile in just one visit.'
    },
    {
      icon: '🔧',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement that looks and functions like natural teeth for lasting results.'
    },
    {
      icon: '😁',
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern braces or clear aligners for perfect alignment.'
    },
    {
      icon: '🚨',
      title: 'Emergency Care',
      description: 'Immediate treatment for dental emergencies and urgent dental issues, available when you need us.'
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Experts',
      description: 'Board-certified dental professionals with years of experience'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe & Hygienic',
      description: 'Highest standards of cleanliness and sterilization'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassionate Care',
      description: 'Patient comfort and satisfaction is our top priority'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Easy Scheduling',
      description: 'Flexible appointment times that work with your schedule'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      image: '👩',
      text: 'The best dental experience I\'ve ever had! The team is professional, caring, and made me feel completely at ease throughout my treatment.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'Patient',
      image: '👨',
      text: 'Amazing service! They transformed my smile with veneers and I couldn\'t be happier with the results. Highly recommend to everyone!',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Patient',
      image: '👩',
      text: 'Professional, friendly, and efficient. I highly recommend DentalCare to anyone looking for quality dental care in a comfortable environment.',
      rating: 5
    }
  ];

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '15K+', label: 'Happy Patients' },
    { value: '50+', label: 'Expert Dentists' },
    { value: '99%', label: 'Success Rate' }
  ];

  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-50 via-white to-cyan-50 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full">
                    ⭐ #1 Dental Clinic in Your Area
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Healthy Smiles Start{' '}
                  <span className="text-teal-600">Here</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Experience exceptional dental care with our team of experienced professionals. We're committed to making your visit comfortable and your smile beautiful.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/doctor/appointment"
                    className="px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl flex items-center gap-2"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/doctor/services"
                    className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-full hover:bg-teal-50 transition-all duration-300 font-medium text-lg flex items-center gap-2"
                  >
                    Our Services
                  </Link>
                </div>
                {/* Quick Stats */}
                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">25+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">15K+</div>
                    <div className="text-sm text-slate-600">Happy Patients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">99%</div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    🦷
                  </div>
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-2xl">
                      ⭐
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">4.9/5.0</div>
                      <div className="text-sm text-slate-600">Patient Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    😊
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-4xl font-bold text-teal-600 mb-1">25+</div>
                  <div className="text-sm text-slate-600">Years of<br />Experience</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">About Us</span>
                <h2 className="text-4xl font-bold text-slate-900">
                  Your Trusted Partner in Dental Health
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  At DentalCare, we've been providing exceptional dental care for over 25 years. Our team of experienced dentists and hygienists is dedicated to helping you achieve and maintain optimal oral health.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We combine state-of-the-art technology with personalized care to ensure every visit is comfortable and effective. Your smile is our passion, and your satisfaction is our goal.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">Advanced technology and modern equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">Experienced and caring dental team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">Comfortable and welcoming environment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">Flexible payment plans available</span>
                  </div>
                </div>
                <Link
                  to="/doctor/about"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-4 transition-all"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Our Services</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Comprehensive Dental Care Solutions
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                From routine checkups to advanced treatments, we offer a full range of dental services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-slate-100 rounded-2xl p-8 hover:border-teal-600 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    to="/doctor/services"
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video/CTA Section */}
        <section className="py-20 bg-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  Experience the Difference of Quality Dental Care
                </h2>
                <p className="text-teal-50 text-lg leading-relaxed">
                  Watch our video to learn more about our modern facility, advanced technology, and dedicated team committed to your dental health and beautiful smile.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/doctor/appointment"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full hover:bg-slate-50 transition-all duration-300 font-medium text-lg"
                  >
                    Schedule a Visit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+18001234567"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </div>
              <div className="relative aspect-video bg-teal-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-teal-600 hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-teal-600 mb-2">{stat.value}</div>
                  <div className="text-slate-600 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Testimonials</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                What Our Patients Say
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied patients have to say about their experience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <Quote className="w-10 h-10 text-teal-200 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience exceptional dental care that will make you smile with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/doctor/appointment"
                className="px-8 py-4 bg-white text-teal-600 rounded-full hover:bg-slate-50 transition-all duration-300 font-medium text-lg shadow-xl"
              >
                Book an Appointment
              </Link>
              <Link
                to="/doctor/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;