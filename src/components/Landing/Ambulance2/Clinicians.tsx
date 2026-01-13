import { Award, GraduationCap, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback2';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';

export function CliniciansPage() {
  const clinicians = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODIyOTE2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'MD, FACEP',
      experience: '15 years',
      specialization: 'Emergency Medicine',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Paramedic',
      image: 'https://images.unsplash.com/photo-1649260257583-6f2c5c18b531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhbWVkaWMlMjBlbXQlMjB1bmlmb3JtfGVufDF8fHx8MTc2ODI5MTUwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'NRP, ACLS, PALS',
      experience: '12 years',
      specialization: 'Advanced Life Support',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior EMT',
      image: 'https://images.unsplash.com/photo-1641723345378-a701b30b2d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhlYWx0aGNhcmUlMjB3b3JrZXJ8ZW58MXx8fHwxNzY4MjkxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'EMT-P, NREMT',
      experience: '8 years',
      specialization: 'Emergency Medical Services',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Critical Care Physician',
      image: 'https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODIyOTE2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'MD, FCCM',
      experience: '18 years',
      specialization: 'Critical Care Transport',
    },
    {
      name: 'Amanda Torres',
      role: 'Flight Paramedic',
      image: 'https://images.unsplash.com/photo-1641723345378-a701b30b2d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhlYWx0aGNhcmUlMjB3b3JrZXJ8ZW58MXx8fHwxNzY4MjkxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'FP-C, CCEMT-P',
      experience: '10 years',
      specialization: 'Air Medical Services',
    },
    {
      name: 'David Martinez',
      role: 'Paramedic Supervisor',
      image: 'https://images.unsplash.com/photo-1649260257583-6f2c5c18b531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhbWVkaWMlMjBlbXQlMjB1bmlmb3JtfGVufDF8fHx8MTc2ODI5MTUwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'NRP, CCP-C',
      experience: '14 years',
      specialization: 'Operations Management',
    },
  ];

  const requirements = [
    {
      icon: GraduationCap,
      title: 'Advanced Certifications',
      description: 'All our clinicians hold current state and national certifications including EMT, Paramedic, and specialized care credentials.',
    },
    {
      icon: Award,
      title: 'Continuous Training',
      description: 'Regular training programs ensure our team stays updated with the latest emergency medical protocols and techniques.',
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Our clinicians are trained not just in medical procedures, but in compassionate patient care and communication.',
    },
  ];

  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clinicians</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Meet our dedicated team of highly trained medical professionals committed to saving lives
              </p>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our clinicians meet the highest standards in emergency medical services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mb-6">
                    <req.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{req.title}</h3>
                  <p className="text-gray-600">{req.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicians.map((clinician, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <ImageWithFallback
                    src={clinician.image}
                    alt={clinician.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{clinician.name}</h3>
                    <p className="text-red-600 font-semibold mb-3">{clinician.role}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold">Credentials:</span> {clinician.credentials}
                      </p>
                      <p>
                        <span className="font-semibold">Experience:</span> {clinician.experience}
                      </p>
                      <p>
                        <span className="font-semibold">Specialization:</span>{' '}
                        {clinician.specialization}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Are you a dedicated medical professional looking to make a difference? We're always
              looking for talented individuals to join our team.
            </p>
            <a
              href="mailto:careers@ambons.com"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              View Career Opportunities
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
