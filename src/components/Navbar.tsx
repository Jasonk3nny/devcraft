import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>DevCraft</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} px-3 py-2 rounded-md text-sm font-medium`}>Home</a>
              <a href="#services" className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} px-3 py-2 rounded-md text-sm font-medium`}>Services</a>
              <a href="#portfolio" className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} px-3 py-2 rounded-md text-sm font-medium`}>Portfolio</a>
              <a href="#about" className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} px-3 py-2 rounded-md text-sm font-medium`}>About</a>
              <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#portfolio" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
            <a href="#about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}