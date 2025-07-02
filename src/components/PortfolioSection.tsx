'use client';

import { motion } from 'framer-motion';
import { Github, Code, Cpu, Zap, Monitor, Star, Eye, Truck } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  image: string;
  category: string;
  status: string;
  stars?: number;
  icon: React.ReactNode;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation();
  
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
                  : project.status === 'Development'
                  ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10'
                  : 'border-gray-400 text-gray-400 bg-gray-400/10'
              }`}>
                {project.status}
              </span>
            )}
          </div>
        </div>

        {/* 説明 */}
        <p className="text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* 技術スタック */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-blue-400/20 text-blue-400 border border-blue-400/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* フッター */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-white transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">{t('viewOnGithub')}</span>
              </a>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm">{t('projectStatus')}:</span>
              <span className="text-blue-400">{project.status}</span>
            </div>
            {project.stars && (
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={14} />
                <span className="text-gray-400 text-sm">{t('githubStars')}:</span>
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
  const { t, language } = useTranslation();
  
  const projectsData = [
    {
      id: 1,
      title: language === 'ja' ? 'HandsOnMCU プロジェクト' : 'HandsOnMCU Project',
      description: language === 'ja' 
        ? 'マイクロコントローラを使用した実践的なプロジェクト。基盤名刺の作成や各種電子機器の制御を行い、実用的な電子工作のノウハウを公開しています。CH552マイクロコントローラーを使用したDIY名刺の開発も含まれています。'
        : 'Practical projects using microcontrollers. Creating PCB business cards and controlling various electronic devices, sharing practical electronics know-how. Includes development of DIY business cards using CH552 microcontroller.',
      technologies: ['C', language === 'ja' ? 'マイコン' : 'MCU', language === 'ja' ? 'ハードウェア' : 'Hardware', language === 'ja' ? '電子工作' : 'Electronics'],
      githubUrl: 'https://github.com/BB-KING777/HandsOnMCU',
      image: '/images/projects/hands-on-mcu.jpg',
      category: language === 'ja' ? 'ハードウェア' : 'Hardware',
      status: 'Active',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'KT0937-D8lib',
      description: language === 'ja'
        ? 'SDRラジオチップ「KT0937-D8」用のライブラリ開発。電子工作やラジオ制作向けのC++ライブラリで、チップの制御と機能を簡単に利用できるように実装しています。'
        : 'Library development for SDR radio chip "KT0937-D8". A C++ library for electronics and radio projects, implemented to easily utilize chip control and functions.',
      technologies: ['C++', 'SDR', language === 'ja' ? '電子工作' : 'Electronics', 'RF'],
      githubUrl: 'https://github.com/BB-KING777/KT0937-D8lib',
      image: '/images/projects/kt0937.jpg',
      category: language === 'ja' ? 'ライブラリ' : 'Library',
      status: 'Active',
      stars: 2,
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 3,
      title: language === 'ja' ? 'FPGA CPU開発' : 'FPGA CPU Development',
      description: language === 'ja'
        ? 'FPGAを使用した独自CPUアーキテクチャの設計と実装。MIPS命令セットをベースとした教育用プロセッサの開発を行い、コンピュータアーキテクチャの理解を深めています。'
        : 'Design and implementation of custom CPU architecture using FPGA. Developing educational processors based on MIPS instruction set to deepen understanding of computer architecture.',
      technologies: ['Verilog', 'FPGA', language === 'ja' ? 'デジタル回路' : 'Digital Circuits', 'MIPS'],
      image: '/images/projects/fpga-cpu.jpg',
      category: language === 'ja' ? 'アーキテクチャ' : 'Architecture',
      status: 'Development',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 4,
      title: language === 'ja' ? 'データ構造とアルゴリズム学習ツール' : 'Data Structures and Algorithms Learning Tool',
      description: language === 'ja'
        ? 'プログラミング学習者向けのインタラクティブな教育ツール。データ構造とアルゴリズムを視覚的に理解できるWebアプリケーションです。'
        : 'Interactive educational tool for programming learners. A web application for visually understanding data structures and algorithms.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', language === 'ja' ? '教育ツール' : 'Educational Tool'],
      image: '/images/projects/dsa.png',
      category: language === 'ja' ? '教育ツール' : 'Educational Tool',
      status: 'Completed',
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 5,
      title: language === 'ja' ? 'ZHA (玄関訪問者認識システム)' : 'ZHA (Visitor Recognition System)',
      description: language === 'ja'
        ? '視覚障害者および高齢者向けの革新的な訪問者認識支援システム。深層学習ベースの顔認識（ResNet50）と大規模言語モデル（Gemma3）による画像理解を組み合わせ、訪問者の自動識別とリアルタイム音声通知を実現しています。'
        : 'Innovative visitor recognition support system for visually impaired and elderly people. Combines deep learning-based face recognition (ResNet50) with large language model (Gemma3) image understanding to achieve automatic visitor identification and real-time voice notifications.',
      technologies: ['Python', 'Flask', 'ResNet50', 'Gemma3', 'NVIDIA Jetson', 'OpenCV'],
      githubUrl: 'https://github.com/BB-KING777/GeekVol.3_2025-ZHA',
      image: '/images/projects/ZHA.png',
      category: language === 'ja' ? 'AI・機械学習' : 'AI & ML',
      status: 'Active',
      icon: <Eye className="w-6 h-6" />
    },
    {
      id: 6,
      title: language === 'ja' ? 'キッチンカーWebアプリ' : 'Food Truck Web Application',
      description: language === 'ja'
        ? '大学のキッチンカー事業を支援するWebアプリケーション。地域連携課に公認された正式なプロジェクトとして、営業管理、メニュー表示、注文システムなどの機能を提供しています。大学と地域コミュニティをつなぐ重要な役割を担っています。'
        : 'Web application supporting university food truck business. As an official project approved by the regional collaboration department, it provides functions such as business management, menu display, and ordering system. Plays an important role in connecting the university and local community.',
      technologies: ['React', 'Node.js', language === 'ja' ? 'データベース' : 'Database', language === 'ja' ? 'Webアプリ' : 'Web App'],
      image: '/images/projects/kitchen-car.png',
      category: language === 'ja' ? '地域連携' : 'Community',
      status: 'Active',
      icon: <Truck className="w-6 h-6" />
    }
  ];

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
          {t('portfolioTitle')}
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t('portfolioDescription')}
        </p>
      </motion.div>

      {/* プロジェクト一覧 */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <h3 className="text-3xl font-bold text-green-400 glow-primary mb-8 border-l-4 border-green-400 pl-4">
          {t('projectsTitle')}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}