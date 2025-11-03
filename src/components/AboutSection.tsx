'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Cpu, Shield, Wrench, Gamepad2, Code, Zap, MapPin, Calendar, Briefcase, GraduationCap, Award, BookOpen, User, Presentation } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

// 型定義
interface QualificationItem {
  name: string;
  organization: string;
  date: string;
  category: string;
  location?: string;
}

interface CompletionItem {
  name: string;
  organization: string;
  date: string;
  category: string;
  location?: string;
}

interface ExperienceItem {
  name: string;
  organization: string;
  period: string;
  description: string;
  location?: string;
}

interface PresentationItem {
  name: string;
  event: string;
  date: string;
  type: string;
  location?: string;
  pdfUrl?: string;
}

const qualificationsData = {
  qualifications: [
    { name: '普通自動車第一種運転免許', organization: '公安委員会', date: '2021年4月', category: '免許', location: '大阪府' },
    { name: '普通自動二輪車免許', organization: '公安委員会', date: '2022年2月', category: '免許', location: '大阪府' },
    { name: '英語検定2級', organization: '英検協会', date: '2017年6月', category: '英語資格', location: 'トルコ・イスタンブール' }
  ],
  completions: [
    { name: 'セキュリティキャンプ', organization: 'IPA', date: '2025年7月', category: '合宿', location: '東京都' }
  ],
  experiences: [
    { name: 'バイク用品店ピットスタッフ', organization: 'りんかん', period: '2022年6月 - 2024年2月', description: 'タイヤ交換、オイル交換、フォーク・キャブレターOH等', location: '大阪府茨木市' },
    { name: 'BADRAM攻撃手法研究', organization: '先進計算機システム研究室', period: '2024年夏 - 現在', description: 'メモリを標的としたハードウェア攻撃の研究', location: '滋賀県草津市' },
    { name: 'ナビ個別指導塾', organization: 'CKCネットワーク', period: '2025年春 - 現在', description: '小学生・中学生を対象とした学習塾', location: '大阪府岸和田市' }
  ],
  presentations: [
    { name: 'BadRAM Attack Detection from User-Level Privileges', event: 'DUT-RU Joint Workshop on Information Science and Engineering', date: '2025年8月', type: 'ワークショップ発表', location: '中国・大連', pdfUrl: '/papers/badram-detection-2025.pdf' },
  ]
};

const cpuCollection = [
  { name: 'MOS 6502AD', year: '1975年', desc: 'Apple II、ファミコンなどの名機に搭載された伝説的CPU' },
  { name: 'Intel P8255A', year: '1976年', desc: 'プログラマブル周辺インターフェース、多くの初期マイコンで使用' },
  { name: 'Zilog Z80', year: '1976年', desc: 'ゲームボーイやMSXなど多数の機器に採用された8ビットCPU' },
  { name: 'Intel 8086', year: '1978年', desc: 'x86アーキテクチャの始祖、PCの基盤を築いた16ビットCPU' },
  { name: 'Motorola MC68000', year: '1979年', desc: '初代マッキントッシュやメガドライブに搭載された16/32ビットCPU' },
  { name: 'Atmel ATMEGA328', year: '2009年', desc: 'Arduinoで広く使われた8ビットAVRマイクロコントローラ' },
  { name: 'Microchip PIC16F84', year: '1993年', desc: '電子工作で人気の高いフラッシュメモリ搭載マイコン' },
  { name: 'Intel Pentium 4', year: '2000年', desc: 'NetBurstアーキテクチャ採用、3GHz壁を突破した高クロックCPU' },
  { name: 'AMD Athlon 64 X2', year: '2005年', desc: 'デスクトップ向け初のネイティブデュアルコアCPU、64ビット対応' }
];


const timeline = [
  {
    period: '2005年 - 2012年',
    title: 'タイ・バンコク日本人学校',
    description: '幼少期から小学校3年生まで約7年間をタイのバンコクで過ごす。国際的な環境での育成期間が国際的な視野形成の基盤となる。',
    icon: <MapPin className="w-5 h-5" />,
    type: '海外生活'
  },
  {
    period: '2012年',
    title: 'コンピュータとの出会い',
    description: 'ローマ字入力テストでの苦戦をきっかけに初めてのWindows XPパソコンを手に入れる。技術への興味の原点。',
    icon: <Cpu className="w-5 h-5" />,
    type: '技術的転機'
  },
  {
    period: '2012年 - 2016年',
    title: '日本・大阪での小学校生活',
    description: '小学3年生から卒業まで。日本の教育システムに適応しながら、技術への関心を深める。',
    icon: <GraduationCap className="w-5 h-5" />,
    type: '学業'
  },
  {
    period: '2016年 - 2019年',
    title: 'トルコ・イスタンブール日本人学校',
    description: '中学時代の3年間を再び海外で過ごす。異なる文化での生活経験が多様性への理解を深める。',
    icon: <MapPin className="w-5 h-5" />,
    type: '海外生活'
  },
  {
    period: '2019年 - 2022年',
    title: '初芝立命館高校',
    description: '独学でプログラミング学習を開始。技術的な基礎知識を体系的に習得する重要な時期。',
    icon: <Code className="w-5 h-5" />,
    type: '学業・技術習得'
  },
  {
    period: '2022年6月 - 2024年2月',
    title: 'りんかん（バイク用品店）ピットスタッフ',
    description: 'タイヤ交換、オイル交換、フォークオーバーホール、キャブレターオーバーホールなど専門作業を担当。実践的な機械工学経験を積む。',
    icon: <Briefcase className="w-5 h-5" />,
    type: '職歴'
  },
  {
    period: '2022年4月 - 現在',
    title: '立命館大学情報理工学部',
    description: '2022年入学。セキュリティネットワークコース配属後、2024年夏より先進計算機システム研究室でBADRAM攻撃手法を研究。',
    icon: <Shield className="w-5 h-5" />,
    type: '学業・研究'
  }
];

// 新しいセクション用のコンポーネント
function QualificationItem({ item, index }: { item: QualificationItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 border-l-4 border-green-400 p-6 mb-4 hover:bg-gray-700 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-white mb-1 break-words">{item.name}</h4>
          <p className="text-blue-400 text-sm">{item.organization}</p>
          {item.location && (
            <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              {item.location}
            </p>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          <span className="px-3 py-1 text-xs bg-green-400/20 text-green-400 border border-green-400/50 rounded">
            {item.category}
          </span>
          <p className="text-gray-400 text-sm mt-1">{item.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

function CompletionItem({ item, index }: { item: CompletionItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 border-l-4 border-blue-400 p-6 mb-4 hover:bg-gray-700 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-white mb-1 break-words">{item.name}</h4>
          <p className="text-blue-400 text-sm">{item.organization}</p>
          {item.location && (
            <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              {item.location}
            </p>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          <span className="px-3 py-1 text-xs bg-blue-400/20 text-blue-400 border border-blue-400/50 rounded">
            {item.category}
          </span>
          <p className="text-gray-400 text-sm mt-1">{item.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceItem({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 border-l-4 border-yellow-400 p-6 mb-4 hover:bg-gray-700 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-white mb-1 break-words">{item.name}</h4>
          <p className="text-yellow-400 text-sm mb-2">{item.organization}</p>
          {item.location && (
            <p className="text-gray-400 text-sm flex items-center gap-1 mb-2">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              {item.location}
            </p>
          )}
          <p className="text-gray-300 text-sm break-words">{item.description}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-gray-400 text-sm">{item.period}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PresentationItem({ item, index }: { item: PresentationItem; index: number }) {
  // 発表形式に応じた色とアイコンを決定
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'オーラル':
        return 'bg-green-400/20 text-green-400 border-green-400/50';
      case 'ポスター':
        return 'bg-blue-400/20 text-blue-400 border-blue-400/50';
      default:
        return 'bg-purple-400/20 text-purple-400 border-purple-400/50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 border-l-4 border-purple-400 p-6 mb-4 hover:bg-gray-700 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-white mb-1 break-words leading-relaxed">{item.name}</h4>
          <p className="text-purple-400 text-sm mb-2 break-words">{item.event}</p>
          {item.location && (
            <p className="text-gray-400 text-sm flex items-center gap-1 mb-2">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              {item.location}
            </p>
          )}
          {item.pdfUrl && (
            <a
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 transition-colors mb-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              論文PDF
            </a>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          <span className={`px-3 py-1 text-xs border rounded ${getTypeColor(item.type)}`}>
            {item.type}
          </span>
          <p className="text-gray-400 text-sm mt-1">{item.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const { t } = useTranslation();
  
  const interests = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t('bikeTitle'),
      description: t('bikeDescription')
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t('retroGamingTitle'),
      description: t('retroGamingDescription')
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('computerArchitectureTitle'),
      description: t('computerArchitectureDescription')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('hardwareSecurityTitle'),
      description: t('hardwareSecurityDescription')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('engineEngineeringTitle'),
      description: t('engineEngineeringDescription')
    }
  ];
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      {/* プロフィールセクション */}
      <div className="bg-terminal pixel-border p-8 relative overflow-hidden terminal-pattern">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src="/images/author-avatar.jpg"
              alt="プロフィール画像"
              width={250}
              height={250}
              className="pixel-border object-cover glow-primary"
            />
          </motion.div>
          
          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-green-400 glow-primary mb-4"
            >
              {t('name')}
            </motion.h2>
            <motion.h3
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-blue-400 glow-blue mb-6"
            >
              {t('affiliation')}
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 leading-relaxed mb-4"
            >
              {t('profileDesc1')}
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-300 leading-relaxed mb-6"
            >
              {t('profileDesc2')}
            </motion.p>
            
            {/* ソーシャルリンク */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://twitter.com/denkiryokinggg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400/20 transition-colors"
              >
                <Twitter size={20} />
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/photo_otaku_0628"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400/20 transition-colors"
              >
                <Instagram size={20} />
                Instagram
              </a>
              <a
                href="https://github.com/BB-KING777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400/20 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 興味・関心セクション */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-terminal border-2 border-gray-700 p-8 relative overflow-hidden terminal-pattern"
      >
        <h2 className="text-3xl font-bold text-green-400 glow-primary mb-8 border-l-4 border-green-400 pl-4">
          {t('interestsTitle')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-gray-800 border-l-4 border-blue-400 p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-400">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-400">{interest.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 経歴セクション */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-terminal border-2 border-gray-700 p-8 relative overflow-hidden terminal-pattern"
      >
        <h2 className="text-3xl font-bold text-green-400 glow-primary mb-8 border-l-4 border-green-400 pl-4">
          {t('timelineTitle')}
        </h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex gap-6 items-start group"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-800 border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-all">
                  {item.icon}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-0.5 h-16 bg-gray-600 mt-4"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 text-sm bg-blue-400/20 text-blue-400 border border-blue-400/50 w-fit">
                    {item.type}
                  </span>
                </div>
                <p className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {item.period}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 居住歴のまとめ */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 p-6 bg-gray-800 border-l-4 border-green-400"
        >
          <h3 className="text-xl font-bold text-green-400 mb-4">居住歴のまとめ</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
            <div>
              <span className="font-semibold text-blue-400">タイ・バンコク:</span> 2005-2012年（7年間）
            </div>
            <div>
              <span className="font-semibold text-blue-400">日本・大阪:</span> 2012-2016年（4年間）
            </div>
            <div>
              <span className="font-semibold text-blue-400">トルコ・イスタンブール:</span> 2016-2019年（3年間）
            </div>
            <div>
              <span className="font-semibold text-blue-400">日本・大阪～滋賀:</span> 2019-2024年
            </div>
            <div>
              <span className="font-semibold text-blue-400">日本・大阪茨木:</span> 2024年-現在
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            計10年間の海外生活経験により、国際的な視野と多様な文化への理解力を培う
          </p>
        </motion.div>
      </motion.div>

      {/* 資格・経歴セクション */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-terminal border-2 border-gray-700 p-8 relative overflow-hidden terminal-pattern"
      >
        <h2 className="text-3xl font-bold text-green-400 glow-primary mb-8 border-l-4 border-green-400 pl-4">
          {t('credentialsTitle')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 資格サブセクション */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-6 border-b border-gray-600 pb-2 flex items-center gap-3">
              <Award className="w-6 h-6" />
              {t('qualificationsTitle')}
            </h3>
            <div className="space-y-4">
              {qualificationsData.qualifications.map((item, index) => (
                <QualificationItem key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* 修了サブセクション */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-6 border-b border-gray-600 pb-2 flex items-center gap-3">
              <BookOpen className="w-6 h-6" />
              {t('completionsTitle')}
            </h3>
            <div className="space-y-4">
              {qualificationsData.completions.map((item, index) => (
                <CompletionItem key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* 経験サブセクション */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-6 border-b border-gray-600 pb-2 flex items-center gap-3">
              <User className="w-6 h-6" />
              {t('experiencesTitle')}
            </h3>
            <div className="space-y-4">
              {qualificationsData.experiences.map((item, index) => (
                <ExperienceItem key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* 発表サブセクション */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-6 border-b border-gray-600 pb-2 flex items-center gap-3">
              <Presentation className="w-6 h-6" />
              {t('presentationsTitle')}
            </h3>
            <div className="space-y-4">
              {qualificationsData.presentations.map((item, index) => (
                <PresentationItem key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CPUコレクションセクション */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-terminal border-2 border-gray-700 p-8 relative overflow-hidden terminal-pattern"
      >
        <h2 className="text-3xl font-bold text-green-400 glow-primary mb-6 border-l-4 border-green-400 pl-4">
          {t('cpuCollectionTitle')}
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          多様なアーキテクチャとメーカーのCPUを収集しています。8ビットの歴史的名機から、現代的なデュアルコアプロセッサまで、時代とアーキテクチャを越えた様々なCPUを集めることで、コンピュータの進化の歴史を実物で追体験しています。
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cpuCollection.map((cpu, index) => (
            <motion.div
              key={cpu.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="bg-gray-800 border border-gray-600 p-4 text-center hover:border-blue-400 hover:bg-gray-700 transition-all"
            >
              <div className="text-blue-400 font-bold text-lg mb-2">{cpu.name}</div>
              <div className="text-green-400 text-sm mb-2">{cpu.year}</div>
              <div className="text-gray-400 text-sm">{cpu.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 将来の展望 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="bg-terminal border-2 border-gray-700 p-8 relative overflow-hidden terminal-pattern"
      >
        <h2 className="text-3xl font-bold text-green-400 glow-primary mb-6 border-l-4 border-green-400 pl-4">
          {t('futureProspectsTitle')}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            {t('futureProspects1')}
          </p>
          <p>
            {t('futureProspects2')}
          </p>
          <div className="text-center mt-8">
            <p className="text-xl text-blue-400 glow-blue">
              「目に見える機械と見えない電子の世界をつなぐ技術」に情熱を注いでいます
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}