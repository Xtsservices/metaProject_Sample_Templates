import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Heart, Shield, CheckCircle, Star, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, understanding, and genuine concern for their wellbeing.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in dental care through continuous learning and improvement.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We believe in honest communication and transparent treatment recommendations.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Patient-Centered',
      description: 'Your comfort, preferences, and goals are at the heart of everything we do.'
    }
  ];

  const team = [
    {
      name: 'Dr. James Martinez',
      role: 'Founder & Lead Dentist',
      bio: '15+ years of experience in comprehensive dental care. Specialized in cosmetic dentistry and implantology.',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Emily Carter',
      role: 'Associate Dentist',
      bio: 'Expert in preventive dentistry and endodontics. Passionate about patient education and comfort.',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. Sophia Bennet',
      role: 'Orthodontic Specialist',
      bio: 'Specialized in Invisalign and modern orthodontic solutions for all ages.',
      image: '👩‍⚕️'
    },
    {
      name: 'Sarah Johnson',
      role: 'Dental Hygienist',
      bio: 'Committed to helping patients achieve optimal oral health through preventive care.',
      image: '👩‍⚕️'
    },
    {
      name: 'Michael Chen',
      role: 'Practice Manager',
      bio: 'Ensures smooth operations and exceptional patient experience from start to finish.',
      image: '👨‍💼'
    },
    {
      name: 'Lisa Thompson',
      role: 'Dental Assistant',
      bio: 'Supporting our dental team with care, precision, and a warm, friendly approach.',
      image: '👩‍⚕️'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Service' },
    { number: '10,000+', label: 'Happy Patients' },
    { number: '25+', label: 'Awards Won' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="about" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Astra Dental
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're more than just a dental clinic — we're your partners in achieving and maintaining optimal oral health for life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">OUR STORY</span>
              <h2 className="text-4xl font-bold text-slate-900">15 Years of Excellence in Dental Care</h2>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2010 by Dr. James Martinez, Astra Dental Clinic began with a simple mission: to provide exceptional dental care in a comfortable, welcoming environment.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Over the years, we've grown from a small practice to a full-service dental clinic, serving thousands of patients while maintaining our commitment to personalized, compassionate care.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, our team of experienced professionals continues to uphold the highest standards in dentistry, utilizing state-of-the-art technology and proven techniques to help our patients achieve healthy, beautiful smiles.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🏥
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl overflow-hidden mt-8">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  ⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100 text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">OUR VALUES</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">What We Stand For</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every interaction we have with our patients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">OUR TEAM</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Meet Our Experienced Professionals</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Our diverse team of dental experts is dedicated to providing you with the best possible care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                    {member.image}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">WHY CHOOSE US</span>
              <h2 className="text-4xl font-bold text-slate-900">Experience the Astra Difference</h2>
              <p className="text-slate-600 leading-relaxed">
                At Astra Dental, we combine cutting-edge technology with a personal touch to deliver exceptional dental care that exceeds your expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">State-of-the-Art Technology</h4>
                    <p className="text-slate-600">Digital X-rays, intraoral cameras, and advanced diagnostic tools for precise treatment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Flexible Scheduling</h4>
                    <p className="text-slate-600">Convenient appointment times that work with your busy lifestyle, including evenings and weekends.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Insurance & Financing</h4>
                    <p className="text-slate-600">We accept most insurance plans and offer flexible payment options to make care affordable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Comfortable Environment</h4>
                    <p className="text-slate-600">Modern, welcoming facilities designed to make your visit as comfortable as possible.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-9xl">
                  😊
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-slate-900">98% Rating</div>
                <div className="text-sm text-slate-600">From 10,000+ patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Quality Dental Care?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our family of satisfied patients and start your journey to a healthier smile today.
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

export default About;