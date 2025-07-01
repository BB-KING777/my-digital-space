'use client';

import { motion } from 'framer-motion';
import { Cpu, Shield, Code, Wrench, Gamepad2, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}


export default function HomeSection({ onSectionChange }: HomeSectionProps) {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('hardwareSecurity'),
      description: t('hardwareSecurityDesc'),
      link: 'about'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('cpuArchitecture'),
      description: t('cpuArchitectureDesc'),
      link: 'portfolio'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t('electronics'),
      description: t('electronicsDesc'),
      link: 'portfolio'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t('programming'),
      description: t('programmingDesc'),
      link: 'about'
    }
  ];
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      {/* メインビジュアル */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center bg-terminal pixel-border p-12 relative overflow-hidden terminal-pattern"
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 animate-text-glow"
        >
          {t('welcome')}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-green-400 glow-primary mb-8 leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => onSectionChange('about')}
            className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105"
          >
            {t('viewProfile')}
          </button>
          <button
            onClick={() => onSectionChange('portfolio')}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105"
          >
            {t('viewPortfolio')}
          </button>
        </motion.div>
      </motion.div>

      {/* 特徴セクション */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="bg-terminal border-2 border-gray-700 p-6 hover:border-green-400 transition-all duration-300 group cursor-pointer"
            onClick={() => onSectionChange(feature.link)}
          >
            <div className="flex items-start gap-4">
              <div className="text-green-400 group-hover:text-white transition-colors flex-shrink-0">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-green-400 group-hover:text-white transition-colors text-sm">
                  <span>{t('viewDetails')}</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 研究ハイライト */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-terminal pixel-border p-8 relative overflow-hidden terminal-pattern"
      >
        <h3 className="text-3xl font-bold text-green-400 glow-primary mb-6 border-l-4 border-green-400 pl-4">
          {t('currentResearch')}
        </h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">{t('badramResearch')}</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('badramDesc1')}{' '}
              {t('badramDesc2')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('badramDesc3')}
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">{t('technicalApproach')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400"></div>
                <span className="text-gray-300">{t('memoryAnalysis')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400"></div>
                <span className="text-gray-300">{t('fpgaImplementation')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400"></div>
                <span className="text-gray-300">{t('detectionMethods')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400"></div>
                <span className="text-gray-300">{t('systemIntegration')}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 興味分野の概要 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-terminal border-2 border-gray-700 p-6 text-center hover:border-blue-400 transition-colors">
          <Wrench className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">{t('bikeEngine')}</h4>
          <p className="text-gray-300 text-sm">
            {t('bikeEngineDesc')}
          </p>
        </div>
        
        <div className="bg-terminal border-2 border-gray-700 p-6 text-center hover:border-blue-400 transition-colors">
          <Gamepad2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">{t('retroGaming')}</h4>
          <p className="text-gray-300 text-sm">
            {t('retroGamingDesc')}
          </p>
        </div>
        
        <div className="bg-terminal border-2 border-gray-700 p-6 text-center hover:border-blue-400 transition-colors">
          <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">{t('cpuDesign')}</h4>
          <p className="text-gray-300 text-sm">
            {t('cpuDesignDesc')}
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center bg-black border-4 border-green-400 p-8"
      >
        <h3 className="text-2xl font-bold text-green-400 glow-primary mb-4">
          {t('motto')}
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          {t('contactMessage')}
        </p>
        <button
          onClick={() => onSectionChange('contact')}
          className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105"
        >
          {t('getInTouch')}
        </button>
      </motion.div>
    </motion.section>
  );
}