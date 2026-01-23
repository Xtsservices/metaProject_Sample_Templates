import { useState } from 'react';
import { Award, Heart, Star, Clock, Mail, Ambulance } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Team = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Paramedics', 'Doctors', 'Management', 'Support Staff'];

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      department: 'Doctors',
      image: '👨‍⚕️',
      experience: '20+ years',
      specialization: 'Emergency Medicine',
      certifications: ['MD', 'FACEP', 'ACLS'],
      description: 'Board-certified emergency physician with extensive experience in pre-hospital emergency care.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Paramedic',
      department: 'Paramedics',
      image: '👨‍⚕️',
      experience: '18+ years',
      specialization: 'Advanced Life Support',
      certifications: ['Paramedic', 'ACLS', 'PALS'],
      description: 'Highly experienced paramedic specializing in critical care transport and emergency response.'
    },
    {
      name: 'Emily Davis',
      role: 'Operations Manager',
      department: 'Management',
      image: '👩‍💼',
      experience: '15+ years',
      specialization: 'Emergency Services Management',
      certifications: ['MBA', 'CEMSO'],
      description: 'Expert in emergency medical services operations and fleet management.'
    },
    {
      name: 'James Wilson',
      role: 'Senior Paramedic',
      department: 'Paramedics',
      image: '👨‍⚕️',
      experience: '12+ years',
      specialization: 'Trauma Care',
      certifications: ['Paramedic', 'PHTLS', 'ITLS'],
      description: 'Specialized in trauma care and advanced cardiac life support protocols.'
    },
    {
      name: 'Dr. Lisa Anderson',
      role: 'Medical Consultant',
      department: 'Doctors',
      image: '👩‍⚕️',
      experience: '16+ years',
      specialization: 'Critical Care',
      certifications: ['MD', 'FCCM'],
      description: 'Critical care specialist providing medical oversight for ICU transport services.'
    },
    {
      name: 'Robert Martinez',
      role: 'Fleet Manager',
      department: 'Management',
      image: '👨‍💼',
      experience: '14+ years',
      specialization: 'Vehicle Operations',
      certifications: ['CEVO', 'Fleet Management'],
      description: 'Responsible for maintaining our fleet of ambulances and equipment.'
    },
    {
      name: 'Jennifer Lee',
      role: 'Paramedic Supervisor',
      department: 'Paramedics',
      image: '👩‍⚕️',
      experience: '13+ years',
      specialization: 'Pediatric Emergency Care',
      certifications: ['Paramedic', 'PALS', 'NRP'],
      description: 'Specializes in pediatric emergency care and neonatal transport.'
    },
    {
      name: 'David Thompson',
      role: 'Training Coordinator',
      department: 'Support Staff',
      image: '👨‍🏫',
      experience: '11+ years',
      specialization: 'Medical Education',
      certifications: ['Paramedic', 'EMS Instructor'],
      description: 'Coordinates training programs for all emergency medical personnel.'
    }
  ];

  const filteredMembers = selectedDepartment === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-red-100">Meet the dedicated professionals who save lives every day</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedDepartment === dept
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-300'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 text-center relative">
                  <div className="text-9xl mb-4">{member.image}</div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-red-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{member.experience} Experience</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-sm text-gray-600 mb-3">{member.description}</p>
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Specialization:</p>
                      <p className="text-sm text-gray-600">{member.specialization}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Certifications:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, idx) => (
                          <span key={idx} className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold">
                      View Profile
                    </button>
                    <button className="px-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-12 text-white text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Heart className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Join Our Life-Saving Team</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              We're always looking for dedicated professionals to join our mission of saving lives. Explore career opportunities with AmCare.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-red-600 px-10 py-4 rounded-full hover:bg-gray-100 transition font-semibold text-lg shadow-xl">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition font-semibold text-lg">
                Submit Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600">Benefits of joining the AmCare family</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-12 h-12" />, title: 'Career Growth', desc: 'Continuous training and professional development opportunities' },
              { icon: <Heart className="w-12 h-12" />, title: 'Competitive Benefits', desc: 'Comprehensive health insurance and retirement plans' },
              { icon: <Star className="w-12 h-12" />, title: 'Modern Equipment', desc: 'Work with the latest medical technology and equipment' }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-xl transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 text-red-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
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
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition">Our Team</a></li>
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
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
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

      <Footer />
    </div>
  );
};

export default Team;