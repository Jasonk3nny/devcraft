import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-2 py-1 rounded ${
          language === 'de'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        DE
      </button>
    </div>
  );
}