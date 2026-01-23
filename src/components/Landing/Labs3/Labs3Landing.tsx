import { useState } from 'react';
import { Home, Stethoscope, BookOpen, Briefcase, Award, MapPin, HelpCircle, Newspaper } from 'lucide-react';
import Header from './Header';
import Hero from './Hero';
import PopularTests from './PopularTests';
import HealthPackages from './HealthPackages';
import BookATest from './BookATest';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Blog from './Blog';
import Awards from './Awards';
import FindCentre from './FindCentre';
import FAQs from './FAQs';
import Footer from './Footer';

type TabType = 'home' | 'about' | 'book-test' | 'services' | 'packages' | 'awards' | 'blog' | 'centres' | 'faqs';

export default function Labs3Landing() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const tabs = [
    { id: 'home' as TabType, label: 'Home', icon: Home },
    { id: 'about' as TabType, label: 'About', icon: Stethoscope },
    { id: 'book-test' as TabType, label: 'Book a Test', icon: BookOpen },
    { id: 'packages' as TabType, label: 'Health Packages', icon: Briefcase },
    { id: 'services' as TabType, label: 'Services', icon: Stethoscope },
    { id: 'awards' as TabType, label: 'Awards', icon: Award },
    { id: 'blog' as TabType, label: 'Blog', icon: Newspaper },
    { id: 'centres' as TabType, label: 'Find Centre', icon: MapPin },
    { id: 'faqs' as TabType, label: 'FAQs', icon: HelpCircle },
  ];

  return (
    <div className="w-full bg-white">
      <Header />
      
      {/* Navigation Tabs */}
      <nav className="fixed top-24 left-0 right-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold whitespace-nowrap border-b-2 transition ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Tab Content with margin-top to account for fixed nav */}
      <div className="w-full mt-32">
        {activeTab === 'home' && (
          <>
            <Hero />
            <PopularTests />
            <Footer />
          </>
        )}

        {activeTab === 'about' && (
          <>
            <div className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About Our Diagnostic Centre</h1>
              </div>
            </div>
            <WhyChooseUs />
            <Awards />
            <Footer />
          </>
        )}

        {activeTab === 'book-test' && (
          <>
            <BookATest />
            <Footer />
          </>
        )}

        {activeTab === 'packages' && (
          <>
            <HealthPackages />
            <Footer />
          </>
        )}

        {activeTab === 'services' && (
          <>
            <Services />
            <Footer />
          </>
        )}

        {activeTab === 'awards' && (
          <>
            <Awards />
            <Footer />
          </>
        )}

        {activeTab === 'blog' && (
          <>
            <Blog />
            <Footer />
          </>
        )}

        {activeTab === 'centres' && (
          <>
            <FindCentre />
            <Footer />
          </>
        )}

        {activeTab === 'faqs' && (
          <>
            <FAQs />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
