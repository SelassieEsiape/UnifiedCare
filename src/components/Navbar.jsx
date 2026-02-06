import React from 'react';
import { Link } from 'react-router-dom';

// Updated Navbar with React Router Links
// Link components navigate without page refresh - that's the magic of React Router!

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - clicking it takes you home */}
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-[#5B7C99] transition-colors">
            UnifiedCare.
          </Link>
          
          {/* Navigation Links - now using Link instead of <a> */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900 px-3 py-2 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 transition-colors">
              Contact Us
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 transition-colors">
              Log in
            </Link>
            <Link to="/signup" className="bg-[#5B7C99] text-white px-6 py-2 rounded-lg">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;