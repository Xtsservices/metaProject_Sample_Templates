import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, DollarSign } from 'lucide-react';
import Header from './Header3';
import Footer from './Footer3';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🦴',
      title: 'Joint Replacement Surgery',
      description: 'Advanced hip, knee, and shoulder replacement using minimally invasive techniques',
      features: [
        'Total Hip Replacement',
        'Total Knee Replacement',
        'Shoulder Replacement',
        'Revision Surgery',
        'Computer-Assisted Surgery',
        'Rapid Recovery Protocols'
      ],
      price: 'From $25,000',
      duration: '2-4 hours',
      gradient: 'from-slate-100 to-slate-200'
    },
    {
      icon: '⚽',
      title: 'Sports Medicine',
      description: 'Comprehensive treatment for athletic injuries and performance optimization',
      features: [
        'ACL Reconstruction',
        'Meniscus Repair',
        'Rotator Cuff Surgery',
        'Arthroscopic Procedures',
        'Sports Physical Therapy',
        'Return-to-Play Programs'
      ],
      price: 'From $8,500',
      duration: '1-3 hours',
      gradient: 'from-gray-100 to-gray-200'
    },
    {
      icon: '🔬',
      title: 'Minimally Invasive Surgery',
      description: 'Advanced arthroscopic and endoscopic procedures for faster recovery',
      features: [
        'Arthroscopic Joint Surgery',
        'Endoscopic Spine Surgery',
        'Small Incision Techniques',
        'Reduced Scarring',
        'Faster Recovery Times',
        'Same-Day Procedures'
      ],
      price: 'From $12,000',
      duration: '1-2 hours',
      gradient: 'from-stone-100 to-stone-200'
    },
    {
      icon: '🏥',
      title: 'Spine Surgery',
      description: 'Expert treatment for spinal conditions and degenerative disorders',
      features: [
        'Lumbar Fusion Surgery',
        'Cervical Disc Replacement',
        'Spinal Decompression',
        'Scoliosis Correction',
        'Minimally Invasive Techniques',
        'Non-Surgical Options'
      ],
      price: 'From $35,000',
      duration: '3-6 hours',
      gradient: 'from-zinc-100 to-zinc-200'
    },
    {
      icon: '🚑',
      title: 'Trauma & Emergency Care',
      description: 'Immediate treatment for fractures, dislocations, and traumatic injuries',
      features: [
        'Fracture Repair',
        'Emergency Surgery',
        'Polytrauma Management',
        'Complex Reconstructions',
        '24/7 Availability',
        'Multidisciplinary Care'
      ],
      price: 'Emergency rates vary',
      duration: 'Immediate care',
      gradient: 'from-neutral-100 to-neutral-200'
    },
    {
      icon: '💪',
      title: 'Physical Rehabilitation',
      description: 'Comprehensive therapy programs for optimal recovery and mobility',
      features: [
        'Post-Surgical Rehabilitation',
        'Sports Conditioning',
        'Pain Management',
        'Strength Training',
        'Movement Analysis',
        'Home Exercise Programs'
      ],
      price: 'From $150/session',
      duration: '6-12 weeks',
      gradient: 'from-slate-200 to-slate-300'
    }
  ];

  const additionalServices = [
    {
      icon: '🩺',
      title: 'Diagnostic Imaging',
      description: 'Advanced MRI, CT scans, and X-rays for accurate diagnosis'
    },
    {
      icon: '💉',
      title: 'Injection Therapy',
      description: 'Steroid injections and PRP therapy for pain management'
    },
    {
      icon: '🔧',
      title: 'Hardware Removal',
      description: 'Safe removal of surgical implants and fixation devices'
    },
    {
      icon: '👥',
      title: 'Second Opinions',
      description: 'Comprehensive consultation for treatment planning'
    },
    {
      icon: '📋',
      title: 'Pre-Surgical Planning',
      description: 'Detailed surgical planning using 3D imaging technology'
    },
    {
      icon: '🏃‍♂️',
      title: 'Performance Analysis',
      description: 'Movement analysis and biomechanical assessment'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Comprehensive evaluation of your condition, medical history, and treatment goals with Dr. Johnson.'
    },
    {
      number: '02',
      title: 'Diagnostic Imaging',
      description: 'Advanced MRI, CT scans, or X-rays to accurately diagnose your orthopedic condition.'
    },
    {
      number: '03',
      title: 'Treatment Planning',
      description: 'Personalized treatment plan with surgical and non-surgical options, timeline, and expected outcomes.'
    },
    {
      number: '04',
      title: 'Expert Treatment',
      description: 'State-of-the-art surgical procedures or conservative treatment in our modern facility.'
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 via-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our <span className="text-slate-900">Specialties</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Advanced orthopedic treatments tailored to your unique needs. From joint replacement to sports medicine, we provide comprehensive care to restore your mobility.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Featured Services</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Complete Orthopedic Care Solutions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-slate-900 hover:shadow-2xl transition-all duration-300 group"
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
                            <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <DollarSign className="w-4 h-4 text-slate-900" />
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4 text-slate-900" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <Link 
                      to="/doctor/appointment" 
                      className="block w-full py-3 bg-slate-900 text-white rounded-full text-center font-medium hover:bg-slate-800 transition-all group-hover:scale-105"
                    >
                      Book Consultation
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
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Additional Services</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Comprehensive Orthopedic Support
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link to="/doctor/appointment" className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-4 transition-all">
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
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Our Process</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Your Journey to Recovery
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                From diagnosis to recovery, we guide you through every step with expert care and personalized attention.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-slate-900"></div>
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
                <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Advanced Technology</span>
                <h2 className="text-4xl font-bold text-slate-900">State-of-the-Art Surgical Equipment</h2>
                <p className="text-slate-600 leading-relaxed">
                  We utilize the latest orthopedic technology to provide precise diagnoses, minimally invasive procedures, and optimal surgical outcomes for every patient.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">3D Imaging & Navigation</h4>
                      <p className="text-slate-600 text-sm">Precise surgical planning with computer-assisted navigation for optimal implant positioning.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Robotic Surgery Systems</h4>
                      <p className="text-slate-600 text-sm">Enhanced precision in joint replacement with robotic-assisted surgical technology.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Arthroscopic Equipment</h4>
                      <p className="text-slate-600 text-sm">Minimally invasive procedures with high-definition cameras and specialized instruments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Advanced Prosthetics</h4>
                      <p className="text-slate-600 text-sm">Latest generation implants designed for durability and natural movement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    🤖
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Restore Your Mobility?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step toward getting back to the activities you love.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/doctor/appointment" 
                className="px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium text-lg shadow-xl inline-flex items-center gap-2"
              >
                Book Consultation
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