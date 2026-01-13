import { Link } from 'react-router-dom';
import { FileText, Award, Users, Heart, Building, Phone } from 'lucide-react';
import { Labs2Layout } from './Layout';

export function Pages() {
  const allPages = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Services',
      description: 'Explore our comprehensive range of medical services and specialties.',
      path: '/labs2/services',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Departments',
      description: 'Learn about our specialized medical departments and facilities.',
      path: '/labs2/departments',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Team',
      description: 'Meet our dedicated healthcare professionals and support staff.',
      path: '/labs2/team',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Patient Care',
      description: 'Information about patient care, rights, and responsibilities.',
      path: '/labs2/patient-care',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: 'Facilities',
      description: 'Tour our state-of-the-art medical facilities and equipment.',
      path: '/labs2/facilities',
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: 'Emergency Services',
      description: '24/7 emergency care with highly trained medical professionals.',
      path: '/labs2/emergency',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const additionalPages = [
    'Careers',
    'News & Events',
    'Research',
    'Education & Training',
    'Community Outreach',
    'Volunteer Program',
    'Health Library',
    'Privacy Policy',
    'Terms of Service',
    'Accessibility',
  ];

  return (
    <Labs2Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Pages</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Navigate through all sections of our healthcare platform.
          </p>
        </div>
      </section>

      {/* Main Pages Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Main Sections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick access to our primary service areas and information hubs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`${page.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {page.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{page.title}</h3>
                <p className="text-gray-600">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Pages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More information and resources to support your healthcare journey.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {additionalPages.map((page, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between"
                >
                  <span className="text-gray-700 font-medium">{page}</span>
                  <span className="text-blue-600">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-lg text-gray-600">
                Frequently accessed pages for your convenience.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Link
                to="/labs2/contact"
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Schedule Appointment</h3>
                <p className="text-sm text-gray-600">Book your visit online</p>
              </Link>
              <Link
                to="/labs2/patients"
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Patient Portal</h3>
                <p className="text-sm text-gray-600">Access your records</p>
              </Link>
              <Link
                to="/labs2/clinicians"
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Find a Doctor</h3>
                <p className="text-sm text-gray-600">Search our specialists</p>
              </Link>
              <Link
                to="/labs2/blog"
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Health Tips</h3>
                <p className="text-sm text-gray-600">Read our latest blog</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Site Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Site Map</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">About Us</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/labs2/about" className="hover:text-blue-600 transition-colors">Our Story</Link></li>
                  <li><Link to="/about" className="hover:text-blue-600 transition-colors">Mission & Vision</Link></li>
                  <li><Link to="/about" className="hover:text-blue-600 transition-colors">Leadership</Link></li>
                  <li><Link to="/about" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">For Patients</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/labs2/patients" className="hover:text-blue-600 transition-colors">Patient Resources</Link></li>
                  <li><Link to="/patients" className="hover:text-blue-600 transition-colors">Patient Portal</Link></li>
                  <li><Link to="/patients" className="hover:text-blue-600 transition-colors">Insurance & Billing</Link></li>
                  <li><Link to="/patients" className="hover:text-blue-600 transition-colors">Patient Rights</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Medical Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/labs2/clinicians" className="hover:text-blue-600 transition-colors">Find a Doctor</Link></li>
                  <li><Link to="/clinicians" className="hover:text-blue-600 transition-colors">Specialties</Link></li>
                  <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Book Appointment</Link></li>
                  <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Health Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Our team is here to help you navigate our services and find the information you need.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Labs2Layout>
  );
}
