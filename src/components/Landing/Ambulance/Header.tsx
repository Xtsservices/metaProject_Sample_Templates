import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/ambulance' },
    { label: 'About', path: '/ambulance/about' },
    { label: 'Services', path: '/ambulance/services' },
    { label: 'Team', path: '/ambulance/team' },
    { label: 'Contact', path: '/ambulance/contact' }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-red-600 text-white px-6 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Emergency: 911
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +1 (555) 123-4567
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Booking: +1 (555) 987-6543
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Clickable */}
          <button
            onClick={() => handleNavClick('/ambulance')}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">AmCare</h1>
              <p className="text-xs text-gray-500">Emergency Services</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-medium">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="text-left text-gray-700 hover:text-red-600 font-medium transition"
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-medium w-full">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
