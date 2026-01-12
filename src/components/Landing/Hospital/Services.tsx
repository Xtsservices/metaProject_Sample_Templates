import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Smile, Shield, Heart, Check, Star, Clock, DollarSign, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our comprehensive cosmetic dental services.',
      features: [
        'Porcelain Veneers',
        'Dental Bonding',
        'Smile Makeovers',
        'Gum Contouring',
        'Full Mouth Reconstruction'
      ],
      price: 'Starting at $299',
      duration: '1-3 visits',
      color: 'from-purple-100 to-purple-200'
    },
    {
      icon: <Smile className="w-10 h-10" />,
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth that look and feel natural.',
      features: [
        'Single Tooth Implants',
        'Multiple Implants',
        'All-on-4 Treatment',
        'Implant-Supported Dentures',
        'Bone Grafting'
      ],
      price: 'Starting at $1,500',
      duration: '3-6 months',
      color: 'from-blue-100 to-blue-200'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Emergency Dental Care',
      description: 'Fast relief for dental emergencies when you need it most.',
      features: [
        'Severe Toothache Relief',
        'Broken Tooth Repair',
        'Lost Filling/Crown',
        'Dental Abscess Treatment',
        'Emergency Extractions'
      ],
      price: 'From $150',
      duration: 'Same day',
      color: 'from-red-100 to-red-200'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern orthodontic solutions.',
      features: [
        'Traditional Braces',
        'Clear Aligners (Invisalign)',
        'Retainers',
        'Early Intervention',
        'Adult Orthodontics'
      ],
      price: 'Starting at $3,500',
      duration: '12-24 months',
      color: 'from-pink-100 to-pink-200'
    },
    {
      icon: <Check className="w-10 h-10" />,
      title: 'Preventive Care',
      description: 'Keep your teeth healthy with regular preventive dental care.',
      features: [
        'Dental Cleanings',
        'Comprehensive Exams',
        'Digital X-rays',
        'Fluoride Treatments',
        'Oral Cancer Screenings'
      ],
      price: 'Starting at $89',
      duration: '45-60 minutes',
      color: 'from-green-100 to-green-200'
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: 'Teeth Whitening',
      description: 'Professional whitening for a brighter, more confident smile.',
      features: [
        'In-Office Whitening',
        'Take-Home Kits',
        'Custom Whitening Trays',
        'Deep Stain Removal',
        'Maintenance Programs'
      ],
      price: 'Starting at $399',
      duration: '1-2 hours',
      color: 'from-amber-100 to-amber-200'
    }
  ];

  const additionalServices = [
    {
      title: 'Root Canal Therapy',
      description: 'Save infected teeth with gentle, effective root canal treatment.',
      icon: '🦷'
    },
    {
      title: 'Dental Crowns & Bridges',
      description: 'Restore damaged or missing teeth with custom prosthetics.',
      icon: '👑'
    },
    {
      title: 'Dentures',
      description: 'Complete or partial dentures for a natural-looking smile.',
      icon: '😊'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Gentle, specialized care for children of all ages.',
      icon: '👶'
    },
    {
      title: 'Periodontal Treatment',
      description: 'Comprehensive care for gum disease and oral health.',
      icon: '🩺'
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including wisdom teeth removal.',
      icon: '⚕️'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your concerns, goals, and create a personalized treatment plan.'
    },
    {
      number: '02',
      title: 'Comprehensive Exam',
      description: 'Thorough examination including digital X-rays and diagnostic tests.'
    },
    {
      number: '03',
      title: 'Treatment Planning',
      description: 'We explain all options, costs, and expected outcomes clearly.'
    },
    {
      number: '04',
      title: 'Quality Care Delivery',
      description: 'Receive expert treatment in our comfortable, modern facility.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="services" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive dental care tailored to your unique needs. From preventive care to advanced cosmetic treatments, we're here to help you achieve your best smile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">FEATURED SERVICES</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Comprehensive Dental Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-br ${service.color} p-8`}>
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-700">{service.description}</p>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <span>{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/hospital?service=${encodeURIComponent(service.title)}#booking`} 
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-center font-medium hover:shadow-lg transition-all group-hover:scale-105"
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
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">MORE SERVICES</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Additional Dental Care Options</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <Link to={`/hospital?service=${encodeURIComponent(service.title)}#booking`} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                  Learn More
                  <ChevronRight className="w-5 h-5" />
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
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">OUR PROCESS</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">How We Care for You</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              From your first visit to ongoing care, we make the process simple, comfortable, and transparent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600 to-blue-700"></div>
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
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">ADVANCED TECHNOLOGY</span>
              <h2 className="text-4xl font-bold text-slate-900">State-of-the-Art Dental Equipment</h2>
              <p className="text-slate-600 leading-relaxed">
                We invest in the latest dental technology to provide you with more accurate diagnoses, more comfortable treatments, and better results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Digital X-Rays</h4>
                    <p className="text-slate-600">90% less radiation and instant results for faster diagnosis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Intraoral Cameras</h4>
                    <p className="text-slate-600">See what we see with detailed images of your teeth and gums.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Laser Dentistry</h4>
                    <p className="text-slate-600">Minimally invasive procedures with faster healing times.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">3D Imaging</h4>
                    <p className="text-slate-600">Precise treatment planning for implants and complex cases.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-9xl">
                  🔬
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience the difference quality dental care can make.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/hospital#booking" 
              className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 font-medium text-lg inline-flex items-center gap-2"
            >
              Book an Appointment
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/hospital#contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;