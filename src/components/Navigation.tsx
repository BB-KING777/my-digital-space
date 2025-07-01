'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'ホーム' },
    { id: 'about', label: 'プロフィール' },
    { id: 'portfolio', label: 'ポートフォリオ' },
    { id: 'contact', label: 'コンタクト' }
  ];

  return (
    <>
      {/* デスクトップナビゲーション */}
      <nav className="hidden md:block sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b-2 border-gray-800 mb-8">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ul className="flex justify-center space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`px-4 py-2 border-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    activeSection === item.id
                      ? 'border-green-400 bg-green-400/20 text-green-400'
                      : 'border-green-400 bg-gray-800 text-gray-300 hover:bg-green-400/10 hover:text-green-400'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* モバイルナビゲーション */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 right-4 z-50 p-3 bg-gray-800 border-2 border-green-400 text-green-400 hover:bg-green-400/20 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-6 py-3 text-xl border-2 transition-all ${
                    activeSection === item.id
                      ? 'border-green-400 bg-green-400/20 text-green-400'
                      : 'border-green-400 text-gray-300 hover:bg-green-400/10 hover:text-green-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}