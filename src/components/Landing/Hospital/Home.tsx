import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Check, Star, Heart, Smile, Shield, Sparkles, ChevronRight, Play } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '10K+', label: 'Happy Patients' },
    { value: '98%', label: 'Satisfaction Rate' }
  ];

  const services = [
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, bonding, and smile makeovers designed just for you.',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution that looks, feels, and functions like natural teeth.',
      icon: <Smile className="w-8 h-8" />
    },
    {
      title: 'Emergency Dental Care',
      description: 'Fast relief for dental emergencies including severe pain, broken teeth, and urgent issues.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern braces or clear aligners for a perfect, healthy smile.',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Preventive Care',
      description: 'Regular cleanings, exams, and screenings to keep your smile healthy and prevent future problems.',
      icon: <Check className="w-8 h-8" />
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more confident smile in just one visit.',
      icon: <Star className="w-8 h-8" />
    }
  ];

  const team = [
    { name: 'Emily Carter', role: 'Lead Dentist', image: '👩‍⚕️' },
    { name: 'James Martinez', role: 'Founder & Dentist', image: '👨‍⚕️' },
    { name: 'Sophia Bennet', role: 'Orthodontic Specialist', image: '👩‍⚕️' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient since 2020',
      text: "I've been coming to Astra Dental for years and they never disappoint. The staff is friendly, professional, and they always make me feel comfortable.",
      image: '👩'
    },
    {
      name: 'Michael Chen',
      role: 'Dental Implant Patient',
      text: 'After years of being self-conscious about my smile, I finally got dental implants at Astra. The transformation is incredible!',
      image: '👨'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Parent',
      text: "My kids actually look forward to their dental visits! The pediatric team is amazing with children.",
      image: '👩'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Care',
      subtitle: 'Essential dental care for individuals',
      price: '$49',
      period: 'per month',
      features: [
        { text: '2 Cleanings per year', included: true },
        { text: 'Annual X-rays', included: true },
        { text: 'Basic exams', included: true },
        { text: '10% off treatments', included: true },
        { text: 'Emergency visits', included: false },
        { text: 'Cosmetic procedures', included: false }
      ]
    },
    {
      name: 'Family Plan',
      subtitle: 'Complete coverage for the whole family',
      price: '$129',
      period: 'per month',
      featured: true,
      features: [
        { text: '4 Cleanings per year', included: true },
        { text: 'Annual X-rays', included: true },
        { text: 'Comprehensive exams', included: true },
        { text: '20% off treatments', included: true },
        { text: 'Emergency visits', included: true },
        { text: 'Cosmetic procedures', included: false }
      ]
    },
    {
      name: 'Premium',
      subtitle: 'Full access to all dental services',
      price: '$199',
      period: 'per month',
      features: [
        { text: 'Unlimited cleanings', included: true },
        { text: 'Full diagnostic imaging', included: true },
        { text: 'Comprehensive exams', included: true },
        { text: '30% off treatments', included: true },
        { text: 'Priority emergency visits', included: true },
        { text: 'Cosmetic procedures included', included: true }
      ]
    }
  ];

  const blogPosts = [
    {
      title: '5 Tips for Maintaining Healthy Teeth Between Visits',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      excerpt: 'Learn the essential daily habits that will keep your smile bright and your teeth healthy between dental checkups.'
    },
    {
      title: 'Understanding the Benefits of Dental Implants',
      date: 'Jan 10, 2024',
      readTime: '7 min read',
      excerpt: 'Dental implants offer a permanent solution for missing teeth. Discover why they might be the right choice for you.'
    },
    {
      title: "When Should Your Child First Visit the Dentist?",
      date: 'Jan 5, 2024',
      readTime: '4 min read',
      excerpt: "Early dental care sets the foundation for a lifetime of healthy smiles. Here's what parents need to know."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
                  EXCELLENCE IN DENTISTRY SINCE 2010
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Caring for Healthy,{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Confident Smiles
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We provide modern, gentle, and professional dental care designed to keep your smile bright and healthy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/hospital#booking" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-xl transition-all duration-300 font-medium text-lg flex items-center gap-2"
                >
                  Book an Appointment
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a 
                  href="tel:5551234567" 
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 font-medium text-lg flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (555) 123-4567
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  🦷
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">👨‍⚕️</div>
                  <div>
                    <div className="font-semibold text-slate-900">Dr. James Martinez</div>
                    <div className="text-sm text-slate-600">Founder of Astra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">WE CARE FOR EVERY SMILE</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Our mission is to make dental care comfortable, modern, and stress-free — so you can feel confident every time you smile.
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  💊
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl overflow-hidden mt-8">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🦷
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">ABOUT US</span>
              <h2 className="text-4xl font-bold text-slate-900">Your Health, Our Priority</h2>
              <p className="text-slate-600 leading-relaxed">
                We believe everyone deserves access to quality care that fits seamlessly into their lifestyle. That's why we combine modern technology with compassionate service to deliver healthcare that's always within reach.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With decades of experience and a team of dedicated professionals, we provide comprehensive support—from preventive care to specialized treatments—designed to keep you and your family healthy, happy, and confident.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Anytime Care Access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Customized Health Plans</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Complete Wellness Focus</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Expert Medical Team</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Advanced Technology</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Family-Friendly Care</span>
                </div>
              </div>
              <Link to="/hospital#about" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                Learn More
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">OUR SERVICES</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Comprehensive Care for a Healthier Smile</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 hover:scale-110 transition-transform shadow-xl">
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold text-slate-900">Caring for You, Always</h2>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">OUR TEAM</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Meet the Experts Behind Your Smile</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    {member.image}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-slate-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/hospital#about" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
              View All Members
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">TESTIMONIALS</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Smiles That Speak for Themselves</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Every smile we restore tells a story of trust, comfort, and lasting results — a reflection of the care, dedication, and attention we bring to every patient.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">PRICING PLANS</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Simple Packages — No Hidden Fees</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 ${
                  plan.featured 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105' 
                    : 'bg-white border border-slate-200'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.featured ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.subtitle}
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.featured ? 'text-blue-100' : 'text-slate-600'}>/{plan.period}</span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className={`font-semibold mb-4 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    What's Included
                  </div>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-white' : 'text-green-600'}`} />
                      ) : (
                        <span className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-blue-300' : 'text-slate-300'}`}>✕</span>
                      )}
                      <span className={feature.included ? (plan.featured ? 'text-white' : 'text-slate-700') : (plan.featured ? 'text-blue-200' : 'text-slate-400')}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.featured 
                    ? 'bg-white text-blue-600 hover:bg-blue-50' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Get Started
                </button>
                <p className={`text-xs mt-4 text-center ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                  *Terms and conditions apply
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">BLOG & NEWS</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">Insights, Stories & Updates</h2>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
              View All Posts
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    📝
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                    Read More
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-100 font-semibold uppercase tracking-wide text-sm">GET STARTED TODAY</span>
          <h2 className="mt-4 text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, more confident smile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/hospital#booking" 
              className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 font-medium text-lg"
            >
              Book an Appointment
            </Link>
            <a 
              href="tel:5551234567" 
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;