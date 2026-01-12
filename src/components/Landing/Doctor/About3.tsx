import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Heart, Shield, CheckCircle, Target, Eye, ArrowRight, Star, Stethoscope } from 'lucide-react';
import Header from './Header3';
import Footer from './Footer3';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is tailored to your specific needs, goals, and lifestyle for optimal outcomes.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Maintaining the highest standards of surgical safety and infection prevention protocols.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Surgical Excellence',
      description: 'Committed to delivering superior surgical outcomes through advanced techniques and technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Approach',
      description: 'Working closely with physical therapists, nurses, and specialists for comprehensive care.'
    }
  ];

  const team = [
    {
      name: 'Dr. Michael Johnson',
      role: 'Lead Orthopedic Surgeon',
      specialty: 'Joint Replacement & Sports Medicine',
      experience: '15+ years',
      image: '👨‍⚕️',
      bio: 'Board-certified orthopedic surgeon specializing in joint replacement and sports medicine.',
      credentials: ['MD - Johns Hopkins University', 'Fellowship - Mayo Clinic', 'Board Certified - ABOS']
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Spine Specialist',
      specialty: 'Spinal Surgery & Deformity',
      experience: '12+ years',
      image: '👩‍⚕️',
      bio: 'Expert in complex spinal procedures and minimally invasive spine surgery.',
      credentials: ['MD - Harvard Medical School', 'Fellowship - Cleveland Clinic', 'Spine Surgery Certification']
    },
    {
      name: 'Dr. Robert Chen',
      role: 'Sports Medicine Physician',
      specialty: 'Athletic Injuries & Performance',
      experience: '10+ years',
      image: '👨‍⚕️',
      bio: 'Former team physician with expertise in sports-related injuries and rehabilitation.',
      credentials: ['MD - Stanford University', 'Sports Medicine Fellowship', 'Team Physician Certification']
    },
    {
      name: 'Dr. Lisa Martinez',
      role: 'Physical Medicine & Rehabilitation',
      specialty: 'Non-Surgical Treatment',
      experience: '8+ years',
      image: '👩‍⚕️',
      bio: 'Focused on non-operative treatments and comprehensive rehabilitation programs.',
      credentials: ['MD - UCLA', 'PM&R Residency', 'Pain Management Certification']
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years Experience' },
    { number: '5,000+', label: 'Successful Surgeries' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '24/7', label: 'Emergency Care' }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Medical Training',
      description: 'Completed orthopedic surgery residency at Johns Hopkins University Medical Center.'
    },
    {
      year: '2010',
      title: 'Fellowship Training',
      description: 'Advanced fellowship training in joint replacement surgery at Mayo Clinic.'
    },
    {
      year: '2012',
      title: 'Practice Established',
      description: 'Founded OrthoExpert practice specializing in joint replacement and sports medicine.'
    },
    {
      year: '2025',
      title: 'Leading Provider',
      description: 'Recognized as a top orthopedic surgeon with over 5,000 successful procedures performed.'
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-white pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About <span className="text-slate-900">Dr. Johnson</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Board-certified orthopedic surgeon dedicated to restoring mobility and improving quality of life through expert surgical and non-surgical treatments.
            </p>
          </div>
        </section>

        {/* Dr. Johnson's Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Dr. Michael Johnson, MD</span>
                <h2 className="text-4xl font-bold text-slate-900">Fellowship-Trained Orthopedic Surgeon</h2>
                <p className="text-slate-600 leading-relaxed">
                  Dr. Michael Johnson is a board-certified orthopedic surgeon with over 15 years of experience specializing in joint replacement, sports medicine, and minimally invasive procedures. After completing his medical degree at Johns Hopkins University, Dr. Johnson pursued advanced fellowship training at Mayo Clinic.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Throughout his career, Dr. Johnson has performed over 5,000 successful surgeries, helping patients regain mobility and return to active lifestyles. He is committed to staying at the forefront of orthopedic innovation, regularly attending conferences and incorporating the latest surgical techniques.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Dr. Johnson believes in a patient-centered approach, taking time to understand each individual's unique needs and goals. He works closely with patients to develop personalized treatment plans that may include both surgical and non-surgical options.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/doctor/appointment"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 font-medium"
                  >
                    <Stethoscope className="w-5 h-5" />
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    👨‍⚕️
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">4.9/5.0</div>
                  <div className="text-sm text-slate-600">Patient Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Professional Achievements</h2>
              <p className="text-slate-300 text-lg">Milestones in orthopedic excellence and patient care</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-slate-300 text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Our Values</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                What Guides Our Practice
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Our core values shape every aspect of patient care and surgical excellence we provide.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 mx-auto mb-4">
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
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Professional Journey</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Career Milestones
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-900 text-white text-2xl font-bold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {milestone.year}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-slate-900"></div>
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
              <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Our Team</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Expert Orthopedic Specialists
              </h2>
              <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                Our team of fellowship-trained orthopedic surgeons provides specialized care across all areas of musculoskeletal medicine.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-gray-200 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                        {member.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-slate-900 font-medium mb-2">{member.role}</p>
                        <p className="text-sm text-slate-600 mb-3">{member.specialty} • {member.experience}</p>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                        <div className="space-y-1">
                          {member.credentials.map((cred, i) => (
                            <div key={i} className="text-xs text-slate-500">{cred}</div>
                          ))}
                        </div>
                      </div>
                    </div>
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
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    🏥
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-slate-900 font-semibold uppercase tracking-wide text-sm">Why Choose OrthoExpert</span>
                <h2 className="text-4xl font-bold text-slate-900">Advanced Orthopedic Care You Can Trust</h2>
                <p className="text-slate-600 leading-relaxed">
                  At OrthoExpert, we combine cutting-edge surgical techniques with personalized care to deliver exceptional outcomes for every patient. Here's what sets our practice apart.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Fellowship-Trained Expertise</h4>
                      <p className="text-slate-600 text-sm">All surgeons completed advanced fellowship training at top medical centers for specialized expertise.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Minimally Invasive Techniques</h4>
                      <p className="text-slate-600 text-sm">Advanced arthroscopic and robotic-assisted procedures for faster recovery and better outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">24/7 Emergency Care</h4>
                      <p className="text-slate-600 text-sm">Round-the-clock availability for orthopedic emergencies and trauma care.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Comprehensive Rehabilitation</h4>
                      <p className="text-slate-600 text-sm">Integrated physical therapy and rehabilitation programs for optimal recovery.</p>
                    </div>
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
              Experience the difference that expert orthopedic care can make. Schedule your consultation with Dr. Johnson today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/doctor/appointment" 
                className="px-8 py-4 bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-all duration-300 font-medium text-lg shadow-xl inline-flex items-center gap-2"
              >
                <Stethoscope className="w-5 h-5" />
                Schedule Consultation
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