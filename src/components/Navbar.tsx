
import React, { useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight">
              LegalConnect
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
                Browse Lawyers
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
              Login
            </button>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 shadow-lg font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl mt-2 p-4 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
                Browse Lawyers
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/30">
                <button className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium text-left">
                  Login
                </button>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg font-medium">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
