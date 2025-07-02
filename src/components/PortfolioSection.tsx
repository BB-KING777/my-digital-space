'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Cpu, Zap, Monitor, Star, Eye, Truck } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'HandsOnMCU プロジェクト',
    description: 'マイクロコントローラを使用した実践的なプロジェクト。基盤名刺の作成や各種電子機器の制御を行い、実用的な電子工作のノウハウを公開しています。CH552マイクロコントローラーを使用したDIY名刺の開発も含まれています。',
    technologies: ['C', 'マイコン', 'ハードウェア', '電子工作'],
    githubUrl: 'https://github.com/BB-KING777/HandsOnMCU',
    image: '/images/projects/hands-on-mcu.jpg',
    category: 'ハードウェア',
    status: 'Active',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'KT0937-D8lib',
    description: 'SDRラジオチップ「KT0937-D8」用のライブラリ開発。電子工作やラジオ制作向けのC++ライブラリで、チップの制御と機能を簡単に利用できるように実装しています。',
    technologies: ['C++', 'SDR', '電子工作', 'RF'],
    githubUrl: 'https://github.com/BB-KING777/KT0937-D8lib',
    image: '/images/projects/kt0937.jpg',
    category: 'ライブラリ',
    status: 'Active',
    stars: 2,
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'College Credit Checker',
    description: '立命館大学の学生向けに開発したChrome拡張機能。複雑な単位計算システムを自動化し、必要な単位をわかりやすく表示。情報理工学部向けに最適化されています。',
    technologies: ['JavaScript', 'Chrome拡張機能', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/BB-KING777/college-credit-Checker',
    category: '教育ツール',
    status: 'Active',
    stars: 2,
    icon: <Monitor className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'FPGA CPU開発',
    description: 'FPGAを用いた独自CPUの設計と実装。コンピュータアーキテクチャを実践的に学習し、基本的なCPUパイプラインからキャッシュ、分岐予測などの高度な機能まで実装しています。',
    technologies: ['FPGA', 'Verilog', 'コンピュータアーキテクチャ', 'HDL'],
    image: '/images/projects/fpga-cpu.jpg',
    category: 'アーキテクチャ',
    status: '開発中',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 5,
    title: 'ZHA (玄関訪問者認識システム)',
    description: '視覚障害者および高齢者向けの革新的な訪問者認識支援システム。深層学習ベースの顔認識（ResNet50）と大規模言語モデル（Gemma3）による画像理解を組み合わせ、訪問者の自動識別とリアルタイム音声通知を実現しています。',
    technologies: ['Python', 'Flask', 'ResNet50', 'Gemma3', 'NVIDIA Jetson', 'OpenCV'],
    githubUrl: 'https://github.com/BB-KING777/GeekVol.3_2025-ZHA',
    image: '/images/projects/ZHA.png',
    category: 'AI・機械学習',
    status: 'Active',
    icon: <Eye className="w-6 h-6" />
  },
  {
    id: 6,
    title: 'キッチンカーWebアプリ',
    description: '大学のキッチンカー事業を支援するWebアプリケーション。地域連携課に公認された正式なプロジェクトとして、営業管理、メニュー表示、注文システムなどの機能を提供しています。大学と地域コミュニティをつなぐ重要な役割を担っています。',
    technologies: ['React', 'Node.js', 'データベース', 'Webアプリ'],
    image: '/images/projects/kitchen-car.png',
    category: '地域連携',
    status: 'Active',
    icon: <Truck className="w-6 h-6" />
  },
  {
    id: 7,
    title: 'LesNETchat',
    description: 'ローカルネットワーク内でのチャット機能を提供するプロジェクト。ネットワークプログラミングの学習と実用的なコミュニケーションツールの開発を目的としています。',
    technologies: ['TeX', 'ネットワーク', 'コミュニケーション'],
    githubUrl: 'https://github.com/BB-KING777/LesNETchat',
    category: 'ネットワーク',
    status: 'Frozen',
    icon: <Code className="w-6 h-6" />
  }
];


function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-terminal border-2 border-gray-700 p-6 hover:border-green-400 transition-all duration-300 group relative overflow-hidden"
    >
      {/* バックグラウンドパターン */}
      <div className="absolute inset-0 terminal-pattern opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        {/* プロジェクト画像 */}
        {project.image && (
          <div className="mb-4 overflow-hidden border border-gray-600">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* ヘッダー */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-green-400">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {project.status && (
              <span className={`px-2 py-1 text-xs border ${
                project.status === 'Active' 
                  ? 'border-green-400 text-green-400 bg-green-400/10'
                  : project.status === '開発中'
                  ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10'
                  : 'border-gray-400 text-gray-400 bg-gray-400/10'
              }`}>
                {project.status}
              </span>
            )}
          </div>
        </div>

        {/* カテゴリ */}
        <div className="mb-3">
          <span className="px-3 py-1 text-sm bg-blue-400/20 text-blue-400 border border-blue-400/50">
            {project.category}
          </span>
        </div>

        {/* 説明 */}
        <p className="text-gray-300 leading-relaxed mb-4 text-sm">
          {project.description}
        </p>

        {/* 技術スタック */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-green-400 mb-2">技術スタック</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-800 text-gray-300 border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* フッター */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">GitHub</span>
              </a>
            )}
            {project.stars && (
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={14} />
                <span className="text-xs">{project.stars}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
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
          ポートフォリオ
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          ハードウェアセキュリティ、CPUアーキテクチャ、電子工作を中心とした研究開発プロジェクトです。
          実践的な学習と実用的なソリューションの開発に取り組んでいます。
        </p>
      </motion.div>

      {/* プロジェクトグリッド */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* GitHub プロフィールリンク */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12"
      >
        <div className="bg-terminal border-2 border-gray-700 p-8 inline-block">
          <h3 className="text-xl font-bold text-green-400 mb-4">その他のプロジェクト</h3>
          <p className="text-gray-300 mb-6">
            GitHubでより多くのプロジェクトと実験的なコードをご覧いただけます
          </p>
          <a
            href="https://github.com/BB-KING777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold"
          >
            <Github size={20} />
            GitHub プロフィールを見る
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}