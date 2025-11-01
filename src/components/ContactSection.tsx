'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Instagram, MapPin, GraduationCap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactSection() {
  const { t } = useTranslation();
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* ヘッダー */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-green-400 glow-primary mb-4">
          {t('contactTitle')}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t('contactDescription')}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 連絡先情報 */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-terminal pixel-border p-8 relative overflow-hidden terminal-pattern"
        >
          <h3 className="text-2xl font-bold text-green-400 glow-primary mb-6 border-l-4 border-green-400 pl-4">
            {t('contactInfoTitle')}
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-blue-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <div className="text-white font-semibold">{t('universityTitle')}</div>
                <div className="text-gray-300">{t('universityName')}</div>
                <div className="text-gray-300">{t('affiliation')}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-blue-400">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-white font-semibold">{t('locationTitle')}</div>
                <div className="text-gray-300">{t('locationName')}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-400 mt-1">
                <Mail size={24} />
              </div>
              <div className="space-y-3">
                <div className="text-white font-semibold">{t('directContactTitle')}</div>

                {/* 学内メールアドレス */}
                <div className="text-gray-300">
                  <span className="text-gray-400">学内: </span>
                  <a href="mailto:is0698ep@ed.ritsumei.ac.jp" className="text-green-400 hover:text-white transition-colors">
                    is0698ep@ed.ritsumei.ac.jp
                  </a>
                </div>

                {/* プライベートメールアドレス */}
                <div className="text-gray-300">
                  <span className="text-gray-400">プライベート: </span>
                  <a href="mailto:syutaryosuke@gmail.com" className="text-green-400 hover:text-white transition-colors">
                    syutaryosuke@gmail.com
                  </a>
                </div>

                {/* Qurest用メールアドレス */}
                <div className="text-gray-300">
                  <span className="text-gray-400">Qurest: </span>
                  <a href="mailto:wakamiya@qurest.tech" className="text-green-400 hover:text-white transition-colors">
                    wakamiya@qurest.tech
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ソーシャルメディア */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-terminal pixel-border p-8 relative overflow-hidden terminal-pattern"
        >
          <h3 className="text-2xl font-bold text-green-400 glow-primary mb-6 border-l-4 border-green-400 pl-4">
            {t('socialMediaTitle')}
          </h3>
          
          <div className="space-y-4">
            <motion.a
              href="https://github.com/BB-KING777"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 p-4 border-2 border-gray-700 hover:border-green-400 transition-all duration-300 group"
            >
              <div className="text-green-400 group-hover:text-white transition-colors">
                <Github size={24} />
              </div>
              <div>
                <div className="text-white font-semibold">GitHub</div>
                <div className="text-gray-300 text-sm">@BB-KING777</div>
              </div>
            </motion.a>

            <motion.a
              href="https://twitter.com/denkiryokinggg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 p-4 border-2 border-gray-700 hover:border-green-400 transition-all duration-300 group"
            >
              <div className="text-green-400 group-hover:text-white transition-colors">
                <Twitter size={24} />
              </div>
              <div>
                <div className="text-white font-semibold">X (Twitter)</div>
                <div className="text-gray-300 text-sm">@denkiryokinggg</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/photo_otaku_0628"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 p-4 border-2 border-gray-700 hover:border-green-400 transition-all duration-300 group"
            >
              <div className="text-green-400 group-hover:text-white transition-colors">
                <Instagram size={24} />
              </div>
              <div>
                <div className="text-white font-semibold">Instagram</div>
                <div className="text-gray-300 text-sm">@photo_otaku_0628</div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* コンタクトフォーム風のCTAセクション */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center bg-black border-4 border-green-400 p-8"
      >
        <h3 className="text-2xl font-bold text-green-400 glow-primary mb-4">
          {t('motto')}
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          {t('contactMessage')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:wakamiya@qurest.tech"
            className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105"
          >
            <Mail className="inline mr-2" size={16} />
            {t('emailAddress')}
          </a>
          <a
            href="https://github.com/BB-KING777"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105"
          >
            <Github className="inline mr-2" size={16} />
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}