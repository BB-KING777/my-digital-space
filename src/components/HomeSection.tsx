'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Shield, Code, Wrench, Gamepad2, Award, Users, Target, Github, Twitter, Instagram, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

export default function HomeSection({ onSectionChange }: HomeSectionProps) {
  const { t } = useTranslation();

  // 主要ハイライト
  const highlights = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('badramHighlight'),
      description: t('badramHighlightDesc'),
      color: 'border-green-400 bg-green-400/10 text-green-400'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('securityCampHighlight'),
      description: t('securityCampHighlightDesc'),
      color: 'border-blue-400 bg-blue-400/10 text-blue-400'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t('hardwareHobbyHighlight'),
      description: t('hardwareHobbyHighlightDesc'),
      color: 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
    }
  ];

  // 専門分野
  const expertise = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('hardwareSecurity'),
      description: t('expertiseHardwareDesc')
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('cpuArchitecture'),
      description: t('expertiseCpuDesc')
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t('electronics'),
      description: t('expertiseElectronicsDesc')
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t('programming'),
      description: t('expertiseProgrammingDesc')
    }
  ];

  // 興味分野（Aboutセクションから）
  const interests = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: t('bikeTitle'),
      description: t('bikeDescription'),
      color: 'border-orange-400 text-orange-400'
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: t('retroGamingTitle'),
      description: t('retroGamingDescription'),
      color: 'border-purple-400 text-purple-400'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: t('computerArchitectureTitle'),
      description: t('computerArchitectureDescription'),
      color: 'border-blue-400 text-blue-400'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('hardwareSecurityTitle'),
      description: t('hardwareSecurityDescription'),
      color: 'border-green-400 text-green-400'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('engineEngineeringTitle'),
      description: t('engineEngineeringDescription'),
      color: 'border-yellow-400 text-yellow-400'
    }
  ];

  // ソーシャルリンク
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/BB-KING777',
      icon: <Github className="w-5 h-5" />,
      color: 'border-gray-400 text-gray-400 hover:bg-gray-400/20'
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/denkiryokinggg',
      icon: <Twitter className="w-5 h-5" />,
      color: 'border-blue-400 text-blue-400 hover:bg-blue-400/20'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/photo_otaku_0628',
      icon: <Instagram className="w-5 h-5" />,
      color: 'border-pink-400 text-pink-400 hover:bg-pink-400/20'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      {/* ヒーローセクション - 個人紹介 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-terminal pixel-border p-12 relative overflow-hidden terminal-pattern"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* プロフィール画像 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 border-4 border-green-400 overflow-hidden">
              <Image
                src="/images/home_face.png"
                alt="若宮 秀太のプロフィール写真"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* プロフィール情報 */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 animate-text-glow"
            >
              {t('name')}
            </motion.h1>
            <motion.h2
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-blue-400 glow-blue mb-6"
            >
              {t('affiliation')}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-300 leading-relaxed mb-4"
            >
              {t('profileDesc1')}
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 leading-relaxed mb-6"
            >
              {t('profileDesc2')}
            </motion.p>

            {/* ソーシャルリンク */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 border-2 ${link.color} transition-all duration-300 transform hover:scale-105`}
                >
                  {link.icon}
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 主要ハイライト */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-bold text-green-400 glow-primary text-center border-l-4 border-green-400 pl-4 inline-block">
          {t('highlightsTitle')}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className={`bg-gray-900/50 border-2 ${highlight.color.split(' ')[0]} p-6 text-center hover:scale-105 transition-all duration-300`}
            >
              <div className={`${highlight.color.split(' ')[2]} mx-auto mb-4`}>
                {highlight.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {highlight.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 専門分野 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-terminal pixel-border p-8 relative overflow-hidden terminal-pattern"
      >
        <h3 className="text-3xl font-bold text-green-400 glow-primary mb-8 text-center border-l-4 border-green-400 pl-4 inline-block">
          {t('expertiseTitle')}
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {expertise.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gray-800/50 border-2 border-gray-700 p-6 text-center hover:border-green-400 transition-all duration-300 group"
            >
              <div className="text-green-400 group-hover:text-white transition-colors mx-auto mb-4">
                {skill.icon}
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors mb-2">
                {skill.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* クイックリンク */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-bold text-green-400 glow-primary text-center border-l-4 border-green-400 pl-4 inline-block">
          {t('quickLinksTitle')}
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            onClick={() => onSectionChange('about')}
            className="px-6 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Users className="w-5 h-5" />
            {t('viewProfile')}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            onClick={() => onSectionChange('portfolio')}
            className="px-6 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Code className="w-5 h-5" />
            {t('viewPortfolio')}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            onClick={() => onSectionChange('achievements')}
            className="px-6 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Award className="w-5 h-5" />
            {t('viewAchievements')}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            onClick={() => onSectionChange('contact')}
            className="px-6 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Target className="w-5 h-5" />
            {t('getInTouch')}
          </motion.button>
        </div>
      </motion.div>

      {/* 興味・関心分野 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-bold text-green-400 glow-primary text-center border-l-4 border-green-400 pl-4 inline-block">
          {t('interestsOverviewTitle')}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className={`bg-gray-900/50 border-2 ${interest.color.split(' ')[0]} p-6 hover:scale-105 transition-all duration-300`}
            >
              <div className={`${interest.color.split(' ')[1]} mb-4`}>
                {interest.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3">
                {interest.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.section>
  );
}