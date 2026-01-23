import { useState } from 'react';
import { Menu, X, Search, MapPin, Phone, Download, Home, ExternalLink, FileText } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Hyderabad');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [detectedLocation, setDetectedLocation] = useState<string | null>(null);

  const locations = [
    { city: 'Hyderabad', state: 'Telangana', centers: 45 },
    { city: 'Bengaluru', state: 'Karnataka', centers: 32 },
    { city: 'Gurugram', state: 'Haryana', centers: 28 },
    { city: 'Pune', state: 'Maharashtra', centers: 18 },
    { city: 'Kolkata', state: 'West Bengal', centers: 20 },
    { city: 'Chennai', state: 'Tamil Nadu', centers: 15 }
  ];

  const contactInfo = {
    phone: '9240 222 222',
    email: 'info@vijayadiagnostic.com'
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar - Contact Info & Quick Links */}
      <div className="hidden lg:block bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition">
                <Phone size={14} />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-1 hover:text-blue-400 transition">
                <Download size={14} />
                Download Report
              </a>
              <a href="#" className="hover:text-blue-400 transition">Download App</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Home size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Vijaya Diagnostic</h1>
              <p className="text-xs text-gray-500">Diagnostic Centre</p>
            </div>
          </div>

          {/* Center: Search & Location (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 flex-1 mx-8">
            {/* Location Selector */}
            <div 
              onClick={() => setShowLocationModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition"
            >
              <MapPin size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{selectedLocation}</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tests, packages..."
                className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
              <ExternalLink size={16} />
              Book Test
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            {/* Mobile Location & Search */}
            <div className="py-4 space-y-3">
              <button
                onClick={() => setShowLocationModal(true)}
                className="w-full flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-left"
              >
                <MapPin size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-700">{selectedLocation}</span>
              </button>
              <div className="relative px-4">
                <Search size={14} className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-1 py-3 border-t border-gray-200">
            </div>

            {/* Mobile Contact & CTA */}
            <div className="border-t border-gray-200 pt-3 mt-3 px-4 space-y-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                <Phone size={16} />
                {contactInfo.phone}
              </a>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                <ExternalLink size={16} />
                Book Test
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Location Selection Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 animate-in fade-in slide-in-from-top">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Select Your Location</h3>
              <button
                onClick={() => setShowLocationModal(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {/* Auto Detect Button */}
              <button
                onClick={() => {
                  setIsDetectingLocation(true);
                  setTimeout(() => {
                    setSelectedLocation('Hyderabad');
                    setIsDetectingLocation(false);
                    setShowLocationModal(false);
                  }, 1000);
                }}
                disabled={isDetectingLocation}
                className="w-full mb-6 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-400"
              >
                {isDetectingLocation ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Detecting Location...
                  </>
                ) : (
                  <>
                    <MapPin size={18} />
                    Use My Current Location
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 font-medium mb-4">Select from available locations:</p>

              {/* Location List */}
              <div className="space-y-2">
                {locations.map((loc) => (
                  <button
                    key={loc.city}
                    onClick={() => {
                      setSelectedLocation(loc.city);
                      setShowLocationModal(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      selectedLocation === loc.city
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-semibold">{loc.city}</div>
                    <div className={`text-xs ${selectedLocation === loc.city ? 'text-blue-100' : 'text-gray-600'}`}>
                      {loc.state} • {loc.centers} Centers
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6">
              <button
                onClick={() => setShowLocationModal(false)}
                className="w-full bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
