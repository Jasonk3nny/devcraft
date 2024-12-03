import React from 'react';
import { Layout, Database, Zap, Shield } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="text-gradient">{t('servicesTitle')}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {t('servicesSubtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimatedSection className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-white rounded-xl shadow-lg leading-none flex items-top justify-start space-x-6 hover-card">
                <Layout className="w-8 h-8 text-blue-600" />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{t('spaTitle')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('spaFeature1')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('spaFeature2')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('spaFeature3')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('spaFeature4')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('spaFeature5')}
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-white rounded-xl shadow-lg leading-none flex items-top justify-start space-x-6 hover-card">
                <Database className="w-8 h-8 text-blue-600" />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{t('pimcoreTitle')}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('pimcoreFeature1')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('pimcoreFeature2')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('pimcoreFeature3')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('pimcoreFeature4')}
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {t('pimcoreFeature5')}
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-white rounded-xl shadow-lg hover-card">
                <Zap className="w-8 h-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{t('featureFast')}</h3>
                <p className="mt-2 text-gray-600">{t('featureFastDesc')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-white rounded-xl shadow-lg hover-card">
                <Shield className="w-8 h-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{t('featureSecure')}</h3>
                <p className="mt-2 text-gray-600">{t('featureSecureDesc')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative group md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-white rounded-xl shadow-lg hover-card">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{t('featureSEO')}</h3>
                <p className="mt-2 text-gray-600">{t('featureSEODesc')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}