// src/components/pharmacy/PharmacyHeader.tsx
import { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

export default function PharmacyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P+
            </div>
            <span className="text-xl font-bold text-gray-800">PharmaCare</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/pharmacy" className="text-gray-700 hover:text-teal-600 font-medium">Home</a>
            <a href="/pharmacy/about-us" className="text-gray-700 hover:text-teal-600 font-medium">About Us</a>
            {/* <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Shop</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Doctors</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Articles</a> */}
            <a href="/pharmacy/contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact Us</a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-80">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent ml-2 outline-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {/* You can connect real cart count later */}
              {/* {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )} */}
            </button>
            <button className="hidden md:block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
              Login
            </button>
            <button 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="/pharmacy" className="text-gray-700 hover:text-teal-600 font-medium">Home</a>
              <a href="/pharmacy/about-us" className="text-gray-700 hover:text-teal-600 font-medium">About Us</a>
              {/* <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Shop</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Doctors</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Articles</a> */}
              <a href="/pharmacy/contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact Us</a>
            </nav>

            {/* Mobile Search */}
            <div className="mt-4 flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent ml-2 outline-none w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}