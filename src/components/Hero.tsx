import React from 'react';
import { ArrowRight, Monitor, Database, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl">
              <span className="block reveal">{t('heroTitle')}</span>
              <span className="block text-gradient mt-3 reveal">{t('heroSubtitle')}</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 reveal">
              {t('heroDescription')}
            </p>
            <div className="mt-10 reveal">
              <a href="#contact" className="btn group bg-gradient-to-r from-blue-600 to-indigo-600">
                {t('startProject')}
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="relative animate-float glow bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              <div className="relative grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover-card shine">
                  <Monitor className="h-10 w-10 text-blue-400" />
                  <p className="mt-4 font-medium text-white">{t('spaTitle')}</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover-card shine">
                  <Database className="h-10 w-10 text-blue-400" />
                  <p className="mt-4 font-medium text-white">{t('pimcoreTitle')}</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover-card shine">
                  <Code className="h-10 w-10 text-blue-400" />
                  <p className="mt-4 font-medium text-white">{t('cleanCodeTitle')}</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl hover-card shine">
                  <svg className="h-10 w-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <p className="mt-4 font-medium text-white">{t('modernStackTitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,37 C240,74 480,74 720,37 C960,0 1200,0 1440,37 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </section>
  );
}