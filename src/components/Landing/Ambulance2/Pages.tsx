import { Link } from 'react-router-dom';
import { FileText, Heart, Users, Briefcase } from 'lucide-react';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';

export function PagesPage() {
  const pages = [
    {
      icon: FileText,
      title: 'Terms & Conditions',
      description: 'Our terms of service and usage policies',
      path: '/pages/terms',
    },
    {
      icon: FileText,
      title: 'Privacy Policy',
      description: 'How we protect and handle your personal information',
      path: '/pages/privacy',
    },
    {
      icon: Briefcase,
      title: 'Careers',
      description: 'Join our team of dedicated medical professionals',
      path: '/pages/careers',
    },
    {
      icon: Heart,
      title: 'Patient Testimonials',
      description: 'Stories from those we have helped',
      path: '/pages/testimonials',
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Our commitment to community health and education',
      path: '/pages/outreach',
    },
    {
      icon: FileText,
      title: 'Insurance & Billing',
      description: 'Information about payment and insurance coverage',
      path: '/pages/billing',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Additional Information</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Find detailed information about our policies, services, and opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Pages Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-red-600 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mb-6 group-hover:bg-red-600 transition-colors">
                    <page.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-xl text-gray-600">Frequently accessed resources</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">For Patients</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/patients" className="text-red-600 hover:text-red-700">
                      Patient Information
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/billing" className="text-red-600 hover:text-red-700">
                      Billing & Insurance
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/testimonials" className="text-red-600 hover:text-red-700">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">About Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-red-600 hover:text-red-700">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/clinicians" className="text-red-600 hover:text-red-700">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/careers" className="text-red-600 hover:text-red-700">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog" className="text-red-600 hover:text-red-700">
                      Health Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/outreach" className="text-red-600 hover:text-red-700">
                      Community Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-red-600 hover:text-red-700">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/pages/privacy" className="text-red-600 hover:text-red-700">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/pages/terms" className="text-red-600 hover:text-red-700">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}