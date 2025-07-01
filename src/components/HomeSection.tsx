'use client';

import { motion } from 'framer-motion';
import { Cpu, Shield, Code, Wrench, Gamepad2, ArrowRight } from 'lucide-react';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'ハードウェアセキュリティ',
    description: 'DDRメモリに対するBADRAM攻撃手法の研究。OSやカーネルレベルでは検知困難な脅威への対策手法を開発しています。',
    link: 'about'
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'CPUアーキテクチャ',
    description: 'FPGAを用いた独自CPU設計・実装。MIPSアーキテクチャやRISC-Vを学び、コンピュータの根本原理を探求しています。',
    link: 'portfolio'
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: '電子工作',
    description: 'マイコン制御から回路設計まで幅広く活動。バイクメンテナンスの経験も活かし、機械と電子の融合を目指しています。',
    link: 'portfolio'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'プログラミング',
    description: 'C/C++、Python、Verilog/VHDLなど多様な言語を駆使。ソフトウェアとハードウェアの両面からアプローチしています。',
    link: 'about'
  }
];

export default function HomeSection({ onSectionChange }: HomeSectionProps) {
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
          Welcome to My Digital Space
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-green-400 glow-primary mb-8 leading-relaxed"
        >
          ハードウェアセキュリティとコンピュータアーキテクチャの研究者
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
            プロフィールを見る
          </button>
          <button
            onClick={() => onSectionChange('portfolio')}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105"
          >
            ポートフォリオを見る
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
                  <span>詳細を見る</span>
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
          現在の研究
        </h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">BADRAM攻撃手法の研究</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              DDRメモリのSPD（Serial Presence Detect）を書き換える攻撃手法「BADRAM」について研究しています。
              この攻撃は従来のOSやカーネルレベルの検知手法では発見が困難な特徴を持っています。
            </p>
            <p className="text-gray-300 leading-relaxed">
              立命館大学の先進計算機システム研究室において、ハードウェアレベルでのセキュリティ脅威を理解し、
              効果的な対策手法の開発を目指しています。
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">技術的アプローチ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400"></div>
                <span className="text-gray-300">ハードウェアレベルでのメモリシステム解析</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400"></div>
                <span className="text-gray-300">FPGA実装による実証実験</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400"></div>
                <span className="text-gray-300">検知・対策手法の開発</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400"></div>
                <span className="text-gray-300">システム設計への統合</span>
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
          <h4 className="text-lg font-bold text-white mb-2">バイク & エンジン</h4>
          <p className="text-gray-300 text-sm">
            YZF-R25と1995年製ジョルノを所有。機械工学の美しさを実体験で学んでいます。
          </p>
        </div>
        
        <div className="bg-terminal border-2 border-gray-700 p-6 text-center hover:border-blue-400 transition-colors">
          <Gamepad2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">レトロゲーム</h4>
          <p className="text-gray-300 text-sm">
            ハードウェア制約下での創意工夫に学ぶ。CPUコレクターとしても活動中。
          </p>
        </div>
        
        <div className="bg-terminal border-2 border-gray-700 p-6 text-center hover:border-blue-400 transition-colors">
          <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-white mb-2">CPU設計</h4>
          <p className="text-gray-300 text-sm">
            FPGAを使った自作CPU開発でコンピュータの根本原理を探求しています。
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
          「目に見える機械と見えない電子の世界をつなぐ技術」
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          研究協力、プロジェクト相談、技術交流など、お気軽にご連絡ください。
          一緒に未来の技術を創造しましょう。
        </p>
        <button
          onClick={() => onSectionChange('contact')}
          className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold transform hover:scale-105"
        >
          コンタクトを取る
        </button>
      </motion.div>
    </motion.section>
  );
}