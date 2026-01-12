import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Heart, Shield, CheckCircle, Target, Eye, ArrowRight, Star } from 'lucide-react';
import Header from './Header3';
import Footer from './Footer3';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Patient Care First',
      description: 'Your comfort, health, and satisfaction are our absolute top priorities in every single treatment and interaction.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety & Hygiene',
      description: 'We maintain the highest standards of sterilization and safety protocols to protect our patients and staff.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality dental care through continuous education and improvement.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Our collaborative approach ensures comprehensive, coordinated care for every patient we serve.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Dentist & Founder',
      specialty: 'General & Cosmetic Dentistry',
      experience: '15+ years',
      image: '👩‍⚕️',
      bio: 'Board-certified dentist with expertise in cosmetic procedures and restorative care.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Orthodontist',
      specialty: 'Braces & Clear Aligners',
      experience: '12+ years',
      image: '👨‍⚕️',
      bio: 'Specialized in modern orthodontic solutions for patients of all ages.'
    },
    {
      name: 'Dr. Emily Davis',
      role: 'Oral Surgeon',
      specialty: 'Dental Implants & Surgery',
      experience: '10+ years',
      image: '👩‍⚕️',
      bio: 'Expert in dental implants and complex oral surgical procedures.'
    },
    {
      name: 'Dr. Robert Wilson',
      role: 'Endodontist',
      specialty: 'Root Canal Specialist',
      experience: '14+ years',
      image: '👨‍⚕️',
      bio: 'Dedicated to saving natural teeth through advanced endodontic treatments.'
    },
    {
      name: 'Dr. Lisa Anderson',
      role: 'Pediatric Dentist',
      specialty: "Children's Dentistry",
      experience: '11+ years',
      image: '👩‍⚕️',
      bio: 'Passionate about creating positive dental experiences for children.'
    },
    {
      name: 'Dr. James Brown',
      role: 'Periodontist',
      specialty: 'Gum Disease Treatment',
      experience: '13+ years',
      image: '👨‍⚕️',
      bio: 'Specialized in treating gum disease and maintaining oral health.'
    }
  ];

  const achievements = [
    { number: '25+', label: 'Years of Service' },
    { number: '15,000+', label: 'Happy Patients' },
    { number: '50+', label: 'Expert Dentists' },
    { number: '99%', label: 'Success Rate' }
  ];

  const milestones = [
    {
      year: '1998',
      title: 'Foundation',
      description: 'DentalCare was founded with a vision to provide exceptional dental care to the community.'
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Expanded our facility and added specialized services to serve more patients.'
    },
    {
      year: '2015',
      title: 'Technology Upgrade',
      description: 'Invested in state-of-the-art equipment and digital dentistry technology.'
    },
    {
      year: '2025',
      title: 'Leading Provider',
      description: 'Recognized as one of the top dental clinics in the region with 15,000+ patients served.'
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
              About <span className="text-teal-600">DentalCare</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Providing exceptional dental care since 1998. Your smile is our passion, and your health is our mission.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Our Story</span>
                <h2 className="text-4xl font-bold text-slate-900">25+ Years of Excellence in Dental Care</h2>
                <p className="text-slate-600 leading-relaxed">
                  Founded in 1998 by Dr. Sarah Johnson, DentalCare has been serving the community with dedication and excellence for over 25 years. What started as a small practice has grown into a comprehensive dental care center, trusted by thousands of families throughout the region.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our team of experienced dentists and hygienists combines advanced technology with personalized care to ensure every patient receives the best possible treatment in a comfortable, welcoming environment. We believe that quality dental care should be accessible to everyone.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Today, we're proud to be recognized as one of the leading dental clinics in the area, serving over 15,000 patients with a 99% satisfaction rate. Our commitment to excellence, innovation, and compassionate care continues to drive everything we do.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/doctor/appointment"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 font-medium"
                  >
                    Join Our Family
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    🏥
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-teal-600 mb-1">4.9/5.0</div>
                  <div className="text-sm text-slate-600">Patient Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-teal-50 text-lg">Proud milestones in our journey of excellence</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-teal-100 text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Our Values</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                What We Stand For
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Our core values guide every decision we make and every interaction we have with our patients and community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Our Journey</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Milestones & Growth
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="bg-teal-600 text-white text-2xl font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {milestone.year}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-teal-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Our Team</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Meet Our Experienced Professionals
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Our diverse team of dental experts is dedicated to providing you with the best possible care and creating beautiful, healthy smiles.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group">
                  <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                      {member.image}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-slate-600 mb-3">{member.specialty} • {member.experience}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    😊
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">Why Choose Us</span>
                <h2 className="text-4xl font-bold text-slate-900">Experience the DentalCare Difference</h2>
                <p className="text-slate-600 leading-relaxed">
                  At DentalCare, we combine cutting-edge technology with a personal touch to deliver exceptional dental care that exceeds your expectations. Here's what sets us apart from other dental practices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">State-of-the-Art Technology</h4>
                      <p className="text-slate-600 text-sm">Digital X-rays, intraoral cameras, and advanced diagnostic tools for precise treatment and better outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Flexible Scheduling</h4>
                      <p className="text-slate-600 text-sm">Convenient appointment times including evenings and weekends to fit your busy lifestyle.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Insurance & Financing</h4>
                      <p className="text-slate-600 text-sm">We accept most insurance plans and offer flexible payment options to make dental care affordable for everyone.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Comfortable Environment</h4>
                      <p className="text-slate-600 text-sm">Modern, welcoming facilities designed to make your visit as comfortable and stress-free as possible.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Quality Dental Care?</h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Join our family of satisfied patients and start your journey to a healthier, more beautiful smile today.
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

export default About;