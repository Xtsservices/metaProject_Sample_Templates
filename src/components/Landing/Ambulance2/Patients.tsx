import { FileText, Phone, CreditCard, Shield, AlertCircle } from 'lucide-react';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';

export function PatientsPage() {
  const faqs = [
    {
      question: 'When should I call 911?',
      answer: 'Call 911 for life-threatening emergencies including chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, or serious injuries.',
    },
    {
      question: 'What happens when I call for an ambulance?',
      answer: 'A trained dispatcher will answer, ask about your emergency, collect your location, and dispatch the nearest available ambulance. Paramedics will arrive prepared to provide immediate medical care.',
    },
    {
      question: 'Will I be transported to my preferred hospital?',
      answer: 'When medically appropriate, we will transport you to your preferred hospital. However, in critical situations, we may need to transport you to the nearest appropriate facility.',
    },
    {
      question: 'What insurance do you accept?',
      answer: 'We accept most major insurance plans including Medicare, Medicaid, and private insurance. Our billing team can help verify your coverage.',
    },
    {
      question: 'How much does ambulance service cost?',
      answer: 'Costs vary depending on the level of care required and transport distance. We work with all insurance providers and offer payment plans for those without insurance.',
    },
    {
      question: 'Can family members ride with the patient?',
      answer: 'In non-critical situations, one family member may be allowed to ride along, space permitting. However, during critical emergencies, space is needed for medical personnel.',
    },
  ];

  const prepareSteps = [
    {
      icon: Phone,
      title: 'Keep Emergency Numbers Handy',
      description: 'Save 911 and our non-emergency number in your phone contacts.',
    },
    {
      icon: FileText,
      title: 'Medical Information Ready',
      description: 'Keep a list of medications, allergies, and medical conditions easily accessible.',
    },
    {
      icon: CreditCard,
      title: 'Insurance Information',
      description: 'Have your insurance card and identification readily available.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Ensure your address is visible from the street for quick location by emergency responders.',
    },
  ];

  const whatToBring = [
    'Current medications',
    'Insurance cards',
    'Photo identification',
    'List of allergies',
    'Medical history documents',
    'Living will or advance directives (if applicable)',
    'Contact information for family members',
    'Phone charger',
  ];

  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Information</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Everything you need to know about our ambulance services and emergency care
              </p>
            </div>
          </div>
        </section>

        {/* When to Call Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-gray-900">When to Call 911</h2>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Call 911 immediately if you or someone else experiences:
                </p>
                <ul className="space-y-3">
                  {[
                    'Chest pain or pressure',
                    'Difficulty breathing or shortness of breath',
                    'Severe bleeding',
                    'Loss of consciousness',
                    'Suspected heart attack or stroke',
                    'Severe allergic reactions',
                    'Poisoning or overdose',
                    'Serious injuries from accidents',
                    'Severe burns',
                    'Choking',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Contact</h3>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <p className="text-sm text-gray-600 mb-2">Emergency</p>
                  <a
                    href="tel:911"
                    className="text-4xl font-bold text-red-600 hover:text-red-700 block"
                  >
                    911
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-sm text-gray-600 mb-2">Non-Emergency</p>
                  <a
                    href="tel:5551234567"
                    className="text-2xl font-bold text-gray-900 hover:text-red-600 block"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Prepare for an Emergency
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Being prepared can help emergency responders provide faster, more effective care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {prepareSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-lg mb-4">
                    <step.icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Bring</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatToBring.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Common questions about our ambulance services</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rights Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Patient Rights & Privacy
              </h2>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Right to Quality Care
                    </h4>
                    <p className="text-gray-600">
                      You have the right to receive professional, compassionate care regardless of
                      your race, religion, gender, or ability to pay.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Privacy Protection</h4>
                    <p className="text-gray-600">
                      Your medical information is protected under HIPAA regulations and will only be
                      shared with authorized healthcare providers and insurers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Informed Consent</h4>
                    <p className="text-gray-600">
                      When possible, you will be informed about your condition and treatment options
                      before procedures are performed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Right to Refuse Treatment
                    </h4>
                    <p className="text-gray-600">
                      You have the right to refuse treatment, except when you are unable to make
                      decisions due to your medical condition.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
