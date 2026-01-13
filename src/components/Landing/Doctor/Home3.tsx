import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Award, Heart, Shield, Calendar, ArrowRight, Quote, Phone, Stethoscope, Activity, Clock } from 'lucide-react';
import Header from './Header3';
import Footer from './Footer3';

const Home: React.FC = () => {
  const services = [
    {
      icon: '🦴',
      title: 'Joint Replacement',
      description: 'Advanced hip, knee, and shoulder replacement surgeries using minimally invasive techniques and latest prosthetics.'
    },
    {
      icon: '⚕️',
      title: 'Sports Medicine',
      description: 'Comprehensive treatment for sports injuries, arthroscopic procedures, and athletic performance optimization.'
    },
    {
      icon: '🏥',
      title: 'Spine Surgery',
      description: 'Expert spinal care including disc replacement, fusion procedures, and minimally invasive spine treatments.'
    },
    {
      icon: '🩺',
      title: 'Trauma Care',
      description: 'Emergency orthopedic trauma treatment for fractures, dislocations, and complex bone injuries.'
    },
    {
      icon: '🔬',
      title: 'Arthroscopy',
      description: 'Minimally invasive surgical procedures for joint problems with faster recovery times.'
    },
    {
      icon: '💪',
      title: 'Rehabilitation',
      description: 'Comprehensive physical therapy and rehabilitation programs for optimal recovery and mobility.'
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Board Certified',
      description: 'Fellowship-trained orthopedic surgeons with specialized expertise'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Technology',
      description: 'State-of-the-art surgical equipment and diagnostic imaging'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Patient-Centered',
      description: 'Personalized treatment plans focused on your specific needs'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Quick Access',
      description: 'Same-day appointments available for urgent orthopedic issues'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Martinez',
      role: 'Knee Replacement Patient',
      image: '👨‍💼',
      text: 'Dr. Johnson performed my knee replacement surgery with exceptional skill. I\'m now pain-free and back to all my favorite activities. Outstanding care from start to finish.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Sports Injury Patient',
      image: '🏃‍♀️',
      text: 'After my ACL injury, I thought my running days were over. Thanks to the expert treatment here, I\'m stronger than ever and back to competitive running.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      role: 'Spine Surgery Patient',
      image: '👨‍⚕️',
      text: 'The minimally invasive spine surgery changed my life. The team\'s expertise and care throughout my recovery was absolutely remarkable.',
      rating: 5
    }
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '5,000+', label: 'Successful Surgeries' },
    { value: '98%', label: 'Patient Satisfaction' },
    { value: '24/7', label: 'Emergency Care' }
  ];

  const specialties = [
    {
      icon: '🦴',
      title: 'Joint Replacement',
      subtitle: 'Hip, Knee, Shoulder'
    },
    {
      icon: '⚽',
      title: 'Sports Medicine',
      subtitle: 'Athletic Injuries'
    },
    {
      icon: '🔬',
      title: 'Minimally Invasive',
      subtitle: 'Advanced Techniques'
    },
    {
      icon: '🏥',
      title: 'Trauma Surgery',
      subtitle: 'Emergency Care'
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="bg-slate-100 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full">
                    🏆 Leading Orthopedic Specialist
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Expert Orthopedic Care for{' '}
                  <span className="text-slate-900">Better Mobility</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Advanced orthopedic treatments combining cutting-edge technology with compassionate care. From joint replacement to sports medicine, we help you get back to what you love.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/doctor/appointment"
                    className="px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl flex items-center gap-2"
                  >
                    <Stethoscope className="w-5 h-5" />
                    Book Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/doctor/services"
                    className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-50 transition-all duration-300 font-medium text-lg flex items-center gap-2"
                  >
                    Our Specialties
                  </Link>
                </div>
                {/* Quick Stats */}
                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">15+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">5K+</div>
                    <div className="text-sm text-slate-600">Surgeries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">98%</div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    🏥
                  </div>
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">24/7</div>
                      <div className="text-sm text-slate-600">Emergency Care</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Overview */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((specialty, index) => (
                <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl group-hover:bg-slate-100 transition-colors">
                    {specialty.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{specialty.title}</h3>
                  <p className="text-sm text-slate-900 font-medium">{specialty.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Why Choose Us</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Excellence in Orthopedic Care
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900">
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">About Dr. Johnson</span>
                <h2 className="text-4xl font-bold text-slate-900">
                  Fellowship-Trained Orthopedic Surgeon
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Dr. Michael Johnson is a board-certified orthopedic surgeon with over 15 years of experience specializing in joint replacement, sports medicine, and minimally invasive procedures. He completed his fellowship at Mayo Clinic and has performed over 5,000 successful surgeries.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Dr. Johnson is committed to providing personalized care using the latest surgical techniques and technology to help patients regain mobility and return to their active lifestyles.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Fellowship training in Joint Replacement Surgery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Board certification in Orthopedic Surgery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Member of American Academy of Orthopedic Surgeons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Published researcher in orthopedic journals</span>
                  </div>
                </div>
                <Link
                  to="/doctor/about"
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-4 transition-all"
                >
                  Learn More About Dr. Johnson
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-gray-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    👨‍⚕️
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-4xl font-bold text-slate-900 mb-1">15+</div>
                  <div className="text-sm text-slate-600">Years of<br />Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Our Services</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Comprehensive Orthopedic Solutions
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                From preventive care to complex surgical procedures, we offer complete orthopedic care tailored to your needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-slate-100 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    to="/doctor/services"
                    className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Care CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Orthopedic Emergency? We're Here 24/7
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Don't wait with orthopedic emergencies. Our team is available around the clock for urgent fractures, dislocations, and traumatic injuries.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="tel:+18001234567"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Emergency Line
                </a>
                <Link
                  to="/doctor/appointment"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg"
                >
                  <Clock className="w-5 h-5" />
                  Quick Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Thousands</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Our commitment to excellence is reflected in our outcomes and patient satisfaction.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Patient Stories</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Real Results from Real Patients
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Hear from patients who have regained their mobility and returned to active, pain-free lives.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <Quote className="w-10 h-10 text-slate-200 mb-4" />
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
                      <div className="text-sm text-slate-900">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Back to What You Love?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Take the first step toward better mobility and pain-free living. Schedule your consultation with Dr. Johnson today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/doctor/appointment"
                className="px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium text-lg shadow-xl inline-flex items-center gap-2"
              >
                <Stethoscope className="w-5 h-5" />
                Schedule Consultation
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