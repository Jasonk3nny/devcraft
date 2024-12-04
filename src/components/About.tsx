import React from 'react';
import { Code2, Globe, Coffee, Laptop } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              {t('aboutTitle')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              {t('aboutSubtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="relative">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Developer working"
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 dark:bg-blue-500 rounded-lg p-6 shadow-xl">
                <div className="flex items-center space-x-2 text-white">
                  <Code2 className="h-6 w-6" />
                  <span className="text-lg font-semibold">{t('aboutExperience')}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="space-y-8">
            <div className="prose prose-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('aboutIntroduction')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {t('aboutDescription')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {t('aboutDescription2')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t('aboutFeature1Title')}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{t('aboutFeature1Desc')}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Coffee className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t('aboutFeature2Title')}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{t('aboutFeature2Desc')}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Laptop className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t('aboutFeature3Title')}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{t('aboutFeature3Desc')}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t('aboutFeature4Title')}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{t('aboutFeature4Desc')}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">React</div>
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">TypeScript</div>
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Node.js</div>
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Pimcore</div>
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">PHP</div>
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">TailwindCSS</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}