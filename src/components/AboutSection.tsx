'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Twitter, Instagram, Cpu, Shield, Wrench, Gamepad2, Code, Zap, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const skillsData = {
  programming: [
    { name: 'C/C++', level: 60 },
    { name: 'Python', level: 40 },
    { name: 'JavaScript', level: 30 },
    { name: 'Verilog/VHDL', level: 65 },
    { name: 'アセンブリ言語', level: 75 }
  ],
  hardware: [
    { name: '電子工作', level: 95 },
    { name: 'バイクメンテナンス', level: 90 },
    { name: 'FPGA開発', level: 75 },
    { name: '回路設計', level: 80 },
    { name: 'マイコン制御', level: 85 }
  ],
  expertise: [
    { name: 'セキュリティネットワーク', level: 85 },
    { name: 'CPUアーキテクチャ', level: 80 },
    { name: 'メモリシステム', level: 75 },
    { name: '組み込みシステム', level: 85 },
    { name: 'エンジン構造', level: 70 }
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

const interests = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'バイク',
    description: 'YZF-R25と1995年製の古い2stのジョルノを所有しています。特にジョルノは不動車を自分で修理し復活させた思い入れのある一台です。バイクの魅力は機械の動きが直に感じられること。エンジンの仕組みや動力伝達の様子を目で見て理解できる点に惹かれています。'
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: 'レトロゲーム',
    description: 'レトロゲームの魅力は、ゲーム内容だけでなく、ハードウェアの制約の中で開発者たちが絞り出した創意工夫にあります。限られたリソースを最大限に活用するための独創的なアーキテクチャやシステム設計に惹かれています。好きなゲームは「黄金の太陽」。'
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'コンピュータアーキテクチャ',
    description: 'ハードウェアとソフトウェアの両方に興味があります。自作PCは当然のこととして、より難易度の高い自作CPUに挑戦しています。MIPSアーキテクチャやRISC-Vの設計思想を学び、FPGAを使って実装することで、コンピュータの根本原理への理解を深めています。'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'ハードウェアセキュリティ',
    description: 'BADRAMのようなOSやカーネルレベルでは検知が困難なハードウェア攻撃手法に興味があります。先進計算機システム研究室に所属し、DDRメモリのSPD（Serial Presence Detect）を書き換える攻撃手法「BADRAM」の研究に取り組んでいます。'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'エンジン工学',
    description: 'エンジンの魅力はコンピュータが介在していなくても動作する純粋な機械工学の結晶である点です。特にバイクのエンジンは構造が見えるため、その動きを直に観察できることが好きです。ディーゼルエンジンなども含め、圧倒的な機械工学の偉大さを感じることができます。'
  }
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

function SkillBar({ skill, delay = 0 }: { skill: { name: string; level: number }; delay?: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-green-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-green-400 skill-bar glow-primary"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
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
              若宮　秀太
            </motion.h2>
            <motion.h3
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-blue-400 glow-blue mb-6"
            >
              立命館大学情報理工学部 先進計算機システム研究室所属
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 leading-relaxed mb-4"
            >
              DDRメモリに対するBADRAM攻撃手法の研究に従事しています。ハードウェアセキュリティとCPUアーキテクチャに関心があり、FPGAを用いたCPU開発なども手がけています。機械と電子の両方に興味があり、バイクのメンテナンスから電子工作まで幅広く活動しています。
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-300 leading-relaxed mb-6"
            >
              目に見えない電子の世界と、目に見える機械の世界の両方を理解し、それらの橋渡しとなる技術を探求しています。
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
          興味・関心分野
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
          経歴・履歴
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

      {/* スキルセクション */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-terminal border-2 border-gray-700 p-8 relative overflow-hidden terminal-pattern"
      >
        <h2 className="text-3xl font-bold text-green-400 glow-primary mb-8 border-l-4 border-green-400 pl-4">
          技術スキル
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-6 border-b border-gray-600 pb-2">
              プログラミング
            </h3>
            {skillsData.programming.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-6 border-b border-gray-600 pb-2">
              ハードウェア
            </h3>
            {skillsData.hardware.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100 + 500} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-6 border-b border-gray-600 pb-2">
              専門知識
            </h3>
            {skillsData.expertise.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100 + 1000} />
            ))}
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
          CPUコレクション
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
          将来の展望
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            ハードウェアセキュリティの研究を深め、OSやソフトウェアレベルでは検知困難な脅威に対する効果的な対策手法の開発に貢献したいと考えています。また、コンピュータアーキテクチャの専門知識と実践経験を活かし、より安全で効率的なシステム設計にも携わりたいと思っています。
          </p>
          <p>
            機械工学と電子工学の境界に位置する領域にも興味があり、両方の知識を融合させた独自のプロジェクトやシステム開発にも挑戦していきます。特に、ハードウェアセキュリティと機械システムの安全性を両立させる研究分野では、自身の多様な興味と専門知識を最大限に活かせると考えています。
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