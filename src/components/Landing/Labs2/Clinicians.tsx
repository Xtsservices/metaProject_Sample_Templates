import { Mail, Phone, Award } from 'lucide-react';
import { Labs2Layout } from './Layout';
import { ImageWithFallback } from '../../figma/ImagewithFallback';
import { Link } from 'react-router-dom';

export function Clinicians() {
  const clinicians = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15+ years',
      education: 'MD, Harvard Medical School',
      description: 'Specialist in heart disease prevention and treatment with extensive research in cardiovascular health.',
      image: 'https://images.unsplash.com/photo-1728474372689-c3072b79806e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY4MjczMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      experience: '12+ years',
      education: 'MD, Johns Hopkins University',
      description: 'Expert in neurological disorders with focus on innovative treatment approaches.',
      image: 'https://images.unsplash.com/photo-1758205307849-56d762128dbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGNsaW5pY3xlbnwxfHx8fDE3NjgyODE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      experience: '10+ years',
      education: 'MD, Stanford University',
      description: 'Dedicated to providing comprehensive care for children from infancy through adolescence.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwY2FyZXxlbnwxfHx8fDE3NjgyODE0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dr. James Williams',
      specialty: 'Orthopedics',
      experience: '18+ years',
      education: 'MD, Mayo Clinic',
      description: 'Specializing in sports medicine and joint replacement surgeries.',
      image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjgyMjE0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dr. Lisa Anderson',
      specialty: 'Dermatology',
      experience: '14+ years',
      education: 'MD, Columbia University',
      description: 'Expert in medical and cosmetic dermatology with focus on skin cancer prevention.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzY4MjEwNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dr. Robert Taylor',
      specialty: 'Oncology',
      experience: '20+ years',
      education: 'MD, Yale School of Medicine',
      description: 'Leading cancer specialist with expertise in personalized treatment plans.',
      image: 'https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODI4MTQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const specialties = [
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'Oncology',
    'Gastroenterology',
    'Endocrinology',
  ];

  return (
    <Labs2Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Clinicians</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Meet our team of highly qualified medical professionals dedicated to your health and well-being.
          </p>
        </div>
      </section>

      {/* Specialties Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              All Specialties
            </button>
            {specialties.slice(0, 4).map((specialty, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-200"
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Clinicians Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicians.map((clinician, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={clinician.image}
                  alt={clinician.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{clinician.name}</h3>
                      <p className="text-blue-600 font-medium">{clinician.specialty}</p>
                    </div>
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Experience:</span> {clinician.experience}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Education:</span> {clinician.education}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{clinician.description}</p>
                  <div className="flex gap-4 pt-4 border-t">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </button>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">Call</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented healthcare professionals to join our growing team. If you're passionate about patient care and excellence in medicine, we'd love to hear from you.
            </p>
            <Link to="/labs2/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule an Appointment?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Book a consultation with one of our expert clinicians today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            <Link to="/labs2/contact" className="text-blue-600">Book Appointment</Link>
          </button>
        </div>
      </section>
    </Labs2Layout>
  );
}
