import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className={`h-8 w-8 ${isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>DevCraft</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-baseline space-x-4">
              <a href="#home" className={`${isScrolled ? 'text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'} px-3 py-2 rounded-md text-sm font-medium`}>{t('home')}</a>
              <a href="#services" className={`${isScrolled ? 'text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'} px-3 py-2 rounded-md text-sm font-medium`}>{t('services')}</a>
              <a href="#portfolio" className={`${isScrolled ? 'text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'} px-3 py-2 rounded-md text-sm font-medium`}>{t('portfolio')}</a>
              <a href="#about" className={`${isScrolled ? 'text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'} px-3 py-2 rounded-md text-sm font-medium`}>{t('about')}</a>
              <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors">{t('contact')}</a>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'
              } transition-colors duration-300`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-2'
                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ease-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-2'
                } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className={`h-full flex flex-col justify-center transition-all duration-500 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="px-4 pt-2 pb-3 space-y-6 sm:px-3 text-center">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-medium text-white hover:text-blue-400 transform transition-all duration-300 hover:scale-110"
            >
              {t('home')}
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-medium text-white hover:text-blue-400 transform transition-all duration-300 hover:scale-110"
            >
              {t('services')}
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-medium text-white hover:text-blue-400 transform transition-all duration-300 hover:scale-110"
            >
              {t('portfolio')}
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-medium text-white hover:text-blue-400 transform transition-all duration-300 hover:scale-110"
            >
              {t('about')}
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-medium text-white hover:text-blue-400 transform transition-all duration-300 hover:scale-110"
            >
              {t('contact')}
            </a>
            <div className="flex items-center justify-center space-x-4 pt-6">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}