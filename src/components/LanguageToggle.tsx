'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="flex bg-gray-800 border border-gray-600 overflow-hidden">
        <button
          onClick={() => setLanguage('ja')}
          className={`px-3 py-2 text-sm font-semibold transition-all duration-200 ${
            language === 'ja'
              ? 'bg-green-400 text-black'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          JP
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-2 text-sm font-semibold transition-all duration-200 ${
            language === 'en'
              ? 'bg-green-400 text-black'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
}