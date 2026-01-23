// src/pages/bloodbank/BloodBankHome.tsx
import { useState } from 'react';
import { 
  Heart, Droplet, Phone, Mail, MapPin, Clock, ChevronRight,
  Facebook, Instagram, Youtube, Users, Calendar, Clock as ClockIcon 
} from 'lucide-react';
import MetadevLogo from '../../assets/MetadevLogo.jpg';
// ── Shared Header Component ────────────────────────────────────────────────
function BloodBankHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Donate Blood', href: '#donate' },
    { label: 'Get Involved', href: '#involved' },
    // { label: 'Our Mission', href: '#mission' },
    // { label: 'How to Help', href: '#help' },
    { label: 'Contacts', href: '#footer' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Droplet className="h-10 w-10 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">LifeBlood</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 font-medium hover:text-red-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            <a
              href="#donate"
              className="hidden md:inline-flex items-center bg-red-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
            >
              DONATE NOW
            </a>

            <button
              className="lg:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t bg-white">
            <nav className="flex flex-col space-y-6 text-center">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-gray-800 hover:text-red-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#donate"
                className="mt-4 inline-block bg-red-600 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-red-700 transition shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                DONATE NOW
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// ── Shared Footer Component ────────────────────────────────────────────────
function BloodBankFooter() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Droplet className="h-10 w-10 text-red-600" />
              <span className="text-2xl font-bold text-white">LifeBlood</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Saving lives one drop at a time.<br/>
              Together we can make every donation count.
            </p>
            <div className="flex space-x-6">
              <Facebook className="h-7 w-7 hover:text-white transition cursor-pointer" />
              <Instagram className="h-7 w-7 hover:text-white transition cursor-pointer" />
              <Youtube className="h-7 w-7 hover:text-white transition cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#donate" className="hover:text-white transition">Donate Blood</a></li>
              <li><a href="#involved" className="hover:text-white transition">Get Involved</a></li>
              <li><a href="#mission" className="hover:text-white transition">Our Mission</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <span>+1 (234) 567 89 00</span>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <span>blood.center@email.com</span>
              </li>
              <li className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <span>9:00 – 18:00<br/>Monday – Friday</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Donation Centers</h3>
            <ul className="space-y-4 text-sm">
              <li>1425 Maple Drive, Denver, CO</li>
              <li>6789 Cedar Lane, San Diego, CA</li>
              <li>230 Oak Street, Boston, MA</li>
              <li>4567 Willow Avenue, Austin, TX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} LifeBlood Organization. All rights reserved.
        </div>
        <div className="mt-3 flex items-center justify-center gap-2">
            <p className="text-xs text-gray-500">Powered by MetaDev</p>
            <img 
              src={MetadevLogo}
              alt="MetaDev Logo"
              className="h-16 w-auto"
            />
          </div>
      </div>
    </footer>
  );
}

// ── Main Landing Page ──────────────────────────────────────────────────────
export default function BloodBankHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BloodBankHeader />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <p className="text-red-400 font-medium uppercase tracking-wider mb-5 text-lg">
                Let's Donate
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                Your Blood Donation<br/>
                <span className="text-red-500">Matters.</span> Give Today!
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl">
                Every drop counts. One donation can save up to three lives.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#donate"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl text-lg font-bold transition shadow-lg transform hover:scale-105"
                >
                  DONATION PROCESS
                </a>
                <a
                  href="#donate"
                  className="inline-flex items-center justify-center border-2 border-white/40 hover:bg-white/10 text-white px-10 py-5 rounded-xl text-lg font-bold transition backdrop-blur-sm"
                >
                  CHECK ELIGIBILITY
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US - Exact section from your reference */}
        <section id="about" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Text */}
              <div>
                <p className="text-red-600 font-semibold uppercase tracking-wider mb-4 text-lg">
                  MAKE AN IMPACT
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Who We Are
                </h2>
                <div className="w-24 h-1 bg-red-600 mb-8 rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  We are a dedicated nonprofit blood donation center committed to saving lives and strengthening communities
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in the power of community and the life-saving impact of blood donation. Our mission is to ensure a steady supply of safe and accessible blood for patients in need. We are dedicated to raising awareness about the importance of blood donation and providing support to donors throughout their journey.
                </p>

                <div className="mt-10">
                  <a
                    href="#donate"
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-md"
                  >
                    DONATE NOW <ChevronRight className="ml-3 h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-red-600">
                <svg className="w-full h-full" viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="450" fill="#dc2626"/>
                  <circle cx="300" cy="200" r="80" fill="#ffffff" opacity="0.2"/>
                  <circle cx="150" cy="100" r="60" fill="#ffffff" opacity="0.15"/>
                  <circle cx="450" cy="350" r="70" fill="#ffffff" opacity="0.1"/>
                  <text x="300" y="225" textAnchor="middle" fill="#ffffff" fontSize="32" fontWeight="bold">Blood Donation</text>
                  <text x="300" y="265" textAnchor="middle" fill="#ffffff" fontSize="24">Team</text>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* DONATE BLOOD SECTION */}
        <section id="donate" className="py-24 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-red-600 font-semibold uppercase tracking-wider mb-4">DONORS DAY</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                World Blood Donors Day
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Every year, <strong>on 14 June</strong>, countries around the world celebrate World Blood Donor Day.
              </p>
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                World Blood Donor Day celebrates the lifesaving contributions of blood donors and raises awareness of the ongoing need for safe blood donations worldwide.
              </p>
            </div>

            {/* Register Card */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
              <div className="grid md:grid-cols-2">
                {/* Left - Image */}
                <div className="relative h-96 md:h-auto bg-red-600">
                  <svg className="w-full h-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="600" fill="#dc2626"/>
                    <circle cx="300" cy="150" r="50" fill="#ffffff" opacity="0.2"/>
                    <circle cx="200" cy="300" r="70" fill="#ffffff" opacity="0.15"/>
                    <circle cx="400" cy="450" r="60" fill="#ffffff" opacity="0.1"/>
                    <path d="M 300 200 Q 350 250 300 300 Q 250 250 300 200" fill="#ffffff" opacity="0.2"/>
                    <text x="300" y="400" textAnchor="middle" fill="#ffffff" fontSize="36" fontWeight="bold">Blood</text>
                    <text x="300" y="450" textAnchor="middle" fill="#ffffff" fontSize="36" fontWeight="bold">Samples</text>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Register Today!</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        56 Elm St, Austin, TX
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        14 June
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 mr-2" />
                        9:00 am - 8:00 pm
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Form */}
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">
                    Register for Donation
                  </h3>

                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                        placeholder="+1 (123) 456-7890"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-xl font-bold text-lg transition shadow-md flex items-center justify-center gap-3"
                    >
                      REGISTER
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GET INVOLVED */}
        <section id="involved" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-red-600 font-semibold uppercase tracking-wider mb-4">GET INVOLVED</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Support is Invaluable
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                There are many meaningful ways you can help us continue saving lives every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Donate Blood", desc: "One donation can save up to three lives.", icon: Droplet },
                { title: "Volunteer Team", desc: "Help organize drives and support events.", icon: Users },
                { title: "Spread Awareness", desc: "Encourage others to become donors.", icon: Heart },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-red-200 group"
                >
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors">
                    <item.icon className="h-10 w-10 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Make a Difference.<br/>
              <span className="text-red-400">Become a Blood Donor Today!</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
              One donation = up to 3 lives saved<br/>
              Your blood can give someone a second chance.
            </p>

            <a
              href="#donate"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-14 py-7 rounded-xl text-2xl font-bold transition shadow-2xl transform hover:scale-105"
            >
              DONATE NOW <ChevronRight className="ml-4 h-7 w-7" />
            </a>
          </div>
        </section>
      </main>

      <BloodBankFooter />
    </div>
  );
}