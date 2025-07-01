'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Instagram, MapPin, GraduationCap } from 'lucide-react';

export default function ContactSection() {
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
          コンタクト
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          研究協力、プロジェクトの相談、技術交流など、お気軽にご連絡ください。
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
            基本情報
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-blue-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <div className="text-white font-semibold">所属</div>
                <div className="text-gray-300">立命館大学情報理工学部</div>
                <div className="text-gray-300">先進計算機システム研究室</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-blue-400">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-white font-semibold">研究分野</div>
                <div className="text-gray-300">ハードウェアセキュリティ</div>
                <div className="text-gray-300">DDRメモリに対するBADRAM攻撃手法</div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-lg font-semibold text-green-400 mb-4">専門分野</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-gray-300">• ハードウェアセキュリティ</div>
                <div className="text-gray-300">• CPUアーキテクチャ</div>
                <div className="text-gray-300">• FPGA開発</div>
                <div className="text-gray-300">• 電子工作</div>
                <div className="text-gray-300">• 組み込みシステム</div>
                <div className="text-gray-300">• メモリシステム</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ソーシャルリンク */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-terminal pixel-border p-8 relative overflow-hidden terminal-pattern"
        >
          <h3 className="text-2xl font-bold text-green-400 glow-primary mb-6 border-l-4 border-green-400 pl-4">
            ソーシャルメディア
          </h3>
          
          <div className="space-y-4">
            <a
              href="https://github.com/BB-KING777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-600 hover:border-green-400 hover:bg-gray-700 transition-all group"
            >
              <div className="text-gray-400 group-hover:text-green-400 transition-colors">
                <Github size={24} />
              </div>
              <div>
                <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                  GitHub
                </div>
                <div className="text-gray-400 text-sm">@BB-KING777</div>
                <div className="text-gray-500 text-xs">プロジェクトとソースコード</div>
              </div>
            </a>

            <a
              href="https://twitter.com/denkiryokinggg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-600 hover:border-blue-400 hover:bg-gray-700 transition-all group"
            >
              <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </div>
              <div>
                <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                  X (Twitter)
                </div>
                <div className="text-gray-400 text-sm">@denkiryokinggg</div>
                <div className="text-gray-500 text-xs">技術的な話題と日常</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/photo_otaku_0628"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-600 hover:border-pink-400 hover:bg-gray-700 transition-all group"
            >
              <div className="text-gray-400 group-hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </div>
              <div>
                <div className="text-white font-semibold group-hover:text-pink-400 transition-colors">
                  Instagram
                </div>
                <div className="text-gray-400 text-sm">@photo_otaku_0628</div>
                <div className="text-gray-500 text-xs">写真と日常の記録</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-600">
              <div className="text-gray-400">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400 text-sm">大学のメールアドレス経由でご連絡ください</div>
                <div className="text-gray-500 text-xs">正式な連絡はGitHubまたはSNS経由で</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* HandsOnMCU プロジェクト（名刺）セクション */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-terminal pixel-border p-8 relative overflow-hidden terminal-pattern"
      >
        <h3 className="text-2xl font-bold text-green-400 glow-primary mb-6 border-l-4 border-green-400 pl-4">
          基盤名刺について
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-300 leading-relaxed mb-4">
              名刺をお受け取りいただきありがとうございます。この電子名刺は、私の技術スキルと興味を表現するために特別に設計されています。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              この名刺に関する詳細情報や組み立て方法、技術的な解説などは以下のGitHubリポジトリでご確認いただけます。マイクロコントローラを使った実践的なプロジェクトの一環として開発しました。
            </p>
            <a
              href="https://github.com/BB-KING777/HandsOnMCU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold"
            >
              <Github size={20} />
              HandsOnMCU プロジェクトを見る
            </a>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-800 border border-gray-600 p-6 inline-block">
              <h4 className="text-lg font-semibold text-green-400 mb-3">プロジェクト概要</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• CH552 マイクロコントローラー使用</div>
                <div>• DIY 電子名刺の設計・実装</div>
                <div>• 回路設計からファームウェア開発まで</div>
                <div>• 電子工作の実践的ノウハウ公開</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* フッター */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <div className="bg-black border-t-4 border-green-400 p-6">
          <p className="text-green-400 glow-green text-lg mb-2">
            &copy; 2025 My Digital Space. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">
            「目に見える機械と見えない電子の世界をつなぐ技術」に情熱を注いでいます
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}