import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop blur overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navbar */}
      <nav ref={menuRef} className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center flex-shrink-0" 
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                UnifiedCare.
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-[#5B7C99] transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-[#5B7C99] transition-colors duration-200 font-medium"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-[#5B7C99] transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-[#5B7C99] transition-colors duration-200 font-medium"
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="bg-[#5B7C99] text-white px-6 py-2 rounded-lg hover:bg-[#4a6480] transition-colors duration-200 font-medium"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-[#5B7C99] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5B7C99] transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pb-4 pt-2 space-y-1 border-t border-gray-200">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-[#5B7C99] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block text-gray-700 hover:text-[#5B7C99] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-[#5B7C99] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/login" 
                className="block text-gray-700 hover:text-[#5B7C99] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="block bg-[#5B7C99] text-white px-4 py-3 rounded-lg hover:bg-[#4a6480] transition-colors duration-200 font-medium text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;