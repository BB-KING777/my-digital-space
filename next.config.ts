import { Achievement } from "@/lib/achievementsData";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// 実際の活動実績データ

export const achievementsData: Achievement[] = [
  // 発表・プレゼンテーション
  {
    id: 'presentation-001',
    type: 'presentation',
    date: '2025-08-01',
    title: {
      ja: 'BadRAM Attack Detection from User-Level Privileges',
      en: 'BadRAM Attack Detection from User-Level Privileges'
    },
    description: {
      ja: 'ユーザーレベル権限からのBADRAM攻撃検出に関する研究経過を発表。ハードウェアレベルでの脅威に対する新しい検出手法を提案しました。',
      en: 'Presented research results on BadRAM attack detection from user-level privileges. Proposed new detection methods for hardware-level threats.'
    },
    venue: {
      ja: '大連理工大学',
      en: 'Dalian University of Technology'
    },
    organizer: {
      ja: 'DUT-RU共同ワークショップ',
      en: 'DUT-RU Joint Workshop on Information Science and Engineering'
    },
    category: {
      ja: 'ポスター発表',
      en: 'Poster Presentation'
    },
    paperUrl: '/papers/badram-detection-2025.pdf',
    tags: ['BADRAM', 'セキュリティ', 'ハードウェア攻撃', '検出手法', 'ワークショップ発表']
  },
  // 参加イベント（重要度順）
  {
    id: 'event-001',
    type: 'event',
    date: '2025-07-01',
    title: {
      ja: 'セキュリティキャンプ全国大会2025',
      en: 'Security Camp 2025'
    },
    description: {
      ja: 'IPAが主催する若手セキュリティエンジニア育成のための合宿型研修に参加。ハードウェアセキュリティ分野とくに、IoTセキュリティを中心に学習を深めました。',
      en: 'Participated in a camp-style training program for young security engineers organized by IPA. Focused on learning in the hardware security field.'
    },
    venue: {
      ja: '東京都',
      en: 'Tokyo, Japan'
    },
    organizer: {
      ja: 'IPA（情報処理推進機構）',
      en: 'IPA (Information-technology Promotion Agency)'
    },
    category: {
      ja: 'セキュリティ研修',
      en: 'Security Training'
    },
    tags: ['セキュリティキャンプ', 'IPA', 'ハードウェアセキュリティ', '人材育成']
  },
  // ハッカソン・受賞歴
  {
    id: 'event-002',
    type: 'event',
    date: '2025-05-01',
    title: {
      ja: '技育CAMPハッカソン2025 vol.3',
      en: 'Geek Camp Hackathon 2025 vol.3'
    },
    description: {
      ja: '技育が主催するオンラインハッカソンに参加。チームで視覚障がい者の方の支援するLLMとJetsonを用いた呼び鈴システムの開発に取り組み、技術力向上と他の学生との交流を深めました。',
      en: 'Participated in an online hackathon organized by Geek. Worked on web application development in a team, improving technical skills and networking with other students.'
    },
    venue: {
      ja: 'オンライン',
      en: 'Online'
    },
    organizer: {
      ja: '技育（サポーターズ）',
      en: 'Geek (Supporters)'
    },
    category: {
      ja: 'ハッカソン',
      en: 'Hackathon'
    },
    paperUrl: '/papers/giiku-camp-2025-vol3.pdf',
    tags: ['ハッカソン', '技育', 'Webアプリ開発', 'チーム開発']
  }
];
