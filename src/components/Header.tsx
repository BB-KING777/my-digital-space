'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <>
      {/* ピクセルアニメーション */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pixel-scroll" 
           style={{
             background: 'linear-gradient(to right, #000 0%, #000 50%, #00aaff 50%, #00aaff 100%)',
             backgroundSize: '8px 3px'
           }}
      />
      
      <header className="relative overflow-hidden border-b-4 border-green-400 mb-8">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-white mb-6 animate-text-glow tracking-wider"
          >
            My Digital Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl text-green-400 glow-primary tracking-wider"
          >
            Programming · Computer Architecture · Security
          </motion.p>
        </div>

        {/* 下部のグリーンライン */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-green-400" />
      </header>
    </>
  );
}