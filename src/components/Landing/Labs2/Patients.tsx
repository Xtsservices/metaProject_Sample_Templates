import { FileText, Calendar, CreditCard, HelpCircle, Download, Clock } from 'lucide-react';
import { Labs2Layout } from './Layout';
import { ImageWithFallback } from '../../figma/ImagewithFallback';

export function Patients() {
  const resources = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Patient Forms',
      description: 'Download and complete necessary forms before your visit to save time.',
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Appointment Scheduling',
      description: 'Easily schedule, reschedule, or cancel appointments online.',
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Billing & Insurance',
      description: 'Understand your insurance coverage and payment options.',
    },
    {
      icon: <HelpCircle className="w-12 h-12" />,
      title: 'FAQs',
      description: 'Find answers to commonly asked questions about our services.',
    },
  ];

  const visitSteps = [
    {
      number: '01',
      title: 'Schedule Appointment',
      description: 'Call us or use our online booking system to schedule your visit.',
    },
    {
      number: '02',
      title: 'Complete Forms',
      description: 'Fill out patient registration and medical history forms.',
    },
    {
      number: '03',
      title: 'Check-In',
      description: 'Arrive 15 minutes early and check in at the reception desk.',
    },
    {
      number: '04',
      title: 'See Your Provider',
      description: 'Meet with your healthcare provider for your appointment.',
    },
  ];

  const patientRights = [
    'Receive respectful and non-discriminatory care',
    'Privacy and confidentiality of medical records',
    'Informed consent before treatment',
    'Access to your medical information',
    'Participate in treatment decisions',
    'Express concerns and file complaints',
  ];

  return (
    <Labs2Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Resources</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to know about your visit and our services.
          </p>
        </div>
      </section>

      {/* Patient Resources */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access important information and tools to make your healthcare experience seamless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-blue-600 flex justify-center mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect During Your Visit</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps for a smooth healthcare experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visitSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < visitSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Portal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Patient Portal</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access your medical records, test results, and communicate with your healthcare team anytime, anywhere through our secure patient portal.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 access to your health information</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Schedule and manage appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">View lab results and medical history</span>
                </li>
                <li className="flex items-start gap-3">
                  <Download className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Download medical records securely</span>
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Access Patient Portal
              </button>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjgyMjE0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Patient portal"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Rights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Patient Rights</h2>
              <p className="text-lg text-gray-600">
                We are committed to protecting your rights and ensuring quality healthcare.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {patientRights.map((right, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{right}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Billing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-blue-50 p-8 md:p-12 rounded-lg">
            <div className="text-center">
              <CreditCard className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h2>
              <p className="text-lg text-gray-600 mb-6">
                We accept most major insurance plans and offer flexible payment options to make healthcare affordable and accessible.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View Accepted Insurance
                </button>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600">
                  Payment Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Our patient services team is here to help with any questions or concerns.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Patient Services
          </button>
        </div>
      </section>
    </Labs2Layout>
  );
}
