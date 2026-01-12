import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, DollarSign, Star } from 'lucide-react';
import Header from './Header3';
import Footer from './Footer3';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🦷',
      title: 'General Dentistry',
      description: 'Comprehensive dental care for the whole family including preventive treatments',
      features: [
        'Regular Dental Checkups',
        'Professional Teeth Cleanings',
        'Cavity Fillings & Repairs',
        'Oral Health Examinations',
        'X-Rays & Diagnostics',
        'Fluoride Treatments'
      ],
      price: 'From $89',
      duration: '45-60 minutes',
      gradient: 'from-blue-100 to-blue-200'
    },
    {
      icon: '✨',
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our advanced cosmetic dental treatments',
      features: [
        'Porcelain Veneers',
        'Dental Bonding',
        'Smile Makeovers',
        'Gum Contouring',
        'Crown Lengthening',
        'Tooth Reshaping'
      ],
      price: 'From $299',
      duration: '1-3 visits',
      gradient: 'from-purple-100 to-purple-200'
    },
    {
      icon: '🌟',
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile',
      features: [
        'In-Office Whitening',
        'Take-Home Kits',
        'Laser Whitening',
        'Custom Whitening Trays',
        'Deep Stain Removal',
        'Maintenance Programs'
      ],
      price: 'From $399',
      duration: '1-2 hours',
      gradient: 'from-amber-100 to-amber-200'
    },
    {
      icon: '🔧',
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth that looks and feels natural',
      features: [
        'Single Tooth Implants',
        'Multiple Implants',
        'All-on-4 Treatment',
        'Bone Grafting',
        'Implant Restoration',
        'Full Arch Replacement'
      ],
      price: 'From $1,500',
      duration: '3-6 months',
      gradient: 'from-teal-100 to-teal-200'
    },
    {
      icon: '😁',
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern braces or clear aligners',
      features: [
        'Traditional Metal Braces',
        'Clear Ceramic Braces',
        'Invisalign Clear Aligners',
        'Retainers & Maintenance',
        'Adult Orthodontics',
        'Early Intervention'
      ],
      price: 'From $3,500',
      duration: '12-24 months',
      gradient: 'from-pink-100 to-pink-200'
    },
    {
      icon: '🚨',
      title: 'Emergency Dental Care',
      description: 'Immediate treatment when you need it most, available same-day',
      features: [
        'Same-Day Appointments',
        'Severe Pain Relief',
        'Broken Tooth Repair',
        'Emergency Extractions',
        'Lost Crown/Filling',
        '24/7 Emergency Support'
      ],
      price: 'From $150',
      duration: 'Same day service',
      gradient: 'from-red-100 to-red-200'
    }
  ];

  const additionalServices = [
    {
      icon: '🦴',
      title: 'Root Canal Therapy',
      description: 'Save infected teeth with gentle, effective endodontic treatment'
    },
    {
      icon: '👑',
      title: 'Dental Crowns & Bridges',
      description: 'Restore damaged or missing teeth with custom prosthetics'
    },
    {
      icon: '💎',
      title: 'Dentures',
      description: 'Complete or partial dentures for a natural-looking smile'
    },
    {
      icon: '👶',
      title: 'Pediatric Dentistry',
      description: 'Gentle, specialized dental care for children of all ages'
    },
    {
      icon: '🩺',
      title: 'Periodontal Treatment',
      description: 'Comprehensive care for gum disease and oral health'
    },
    {
      icon: '⚕️',
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including wisdom teeth removal'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your concerns, goals, and create a personalized treatment plan tailored to your needs.'
    },
    {
      number: '02',
      title: 'Comprehensive Exam',
      description: 'Thorough examination including digital X-rays, diagnostic tests, and oral health assessment.'
    },
    {
      number: '03',
      title: 'Treatment Planning',
      description: 'We explain all options, costs, timeline, and expected outcomes clearly and transparently.'
    },
    {
      number: '04',
      title: 'Quality Care Delivery',
      description: 'Receive expert treatment in our comfortable, modern facility with cutting-edge technology.'
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-teal-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our <span className="text-teal-600">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive dental solutions tailored to your unique needs. From preventive care to advanced treatments, we're here to help you achieve your best smile.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Featured Services</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Complete Dental Care Solutions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-teal-600 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-br ${service.gradient} p-8`}>
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-700">{service.description}</p>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <DollarSign className="w-4 h-4 text-teal-600" />
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4 text-teal-600" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <Link 
                      to="/doctor/appointment" 
                      className="block w-full py-3 bg-teal-600 text-white rounded-full text-center font-medium hover:bg-teal-700 transition-all group-hover:scale-105"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">More Services</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Additional Dental Care Options
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link to="/doctor/appointment" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Our Process</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                How We Care for You
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                From your first visit to ongoing care, we make the process simple, comfortable, and transparent.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Advanced Technology</span>
                <h2 className="text-4xl font-bold text-slate-900">State-of-the-Art Dental Equipment</h2>
                <p className="text-slate-600 leading-relaxed">
                  We invest in the latest dental technology to provide you with more accurate diagnoses, more comfortable treatments, and better results for your oral health.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Digital X-Rays</h4>
                      <p className="text-slate-600 text-sm">90% less radiation and instant results for faster diagnosis and treatment planning.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Intraoral Cameras</h4>
                      <p className="text-slate-600 text-sm">See what we see with detailed images of your teeth and gums on screen.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Laser Dentistry</h4>
                      <p className="text-slate-600 text-sm">Minimally invasive procedures with faster healing times and less discomfort.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">3D Imaging</h4>
                      <p className="text-slate-600 text-sm">Precise treatment planning for implants and complex dental procedures.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    🔬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience the difference quality dental care can make in your life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/doctor/appointment" 
                className="px-8 py-4 bg-white text-teal-600 rounded-full hover:bg-slate-50 transition-all duration-300 font-medium text-lg shadow-xl inline-flex items-center gap-2"
              >
                Book an Appointment
                <ArrowRight className="w-5 h-5" />
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

export default Services;