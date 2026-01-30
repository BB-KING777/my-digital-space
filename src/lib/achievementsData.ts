export interface Achievement {
  id: string;
  type: 'presentation' | 'award' | 'event';
  date: string;
  title: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  venue?: {
    ja: string;
    en: string;
  };
  organizer?: {
    ja: string;
    en: string;
  };
  category?: {
    ja: string;
    en: string;
  };
  award?: {
    ja: string;
    en: string;
  };
  rank?: string;
  paperUrl?: string;
  externalUrl?: string;
  tags?: string[];
}

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
      ja: 'ユーザーレベル権限からのBADRAM攻撃検出に関する研究経過を発表。',
      en: 'Presented research results on BadRAM attack detection from user-level privileges.'
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
    paperUrl: '/papers/',
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

// カテゴリフィルタ用の関数
export const getAchievementsByType = (type: Achievement['type']): Achievement[] => {
  return achievementsData.filter(achievement => achievement.type === type);
};

// 日付順ソート（新しい順）
export const getSortedAchievements = (): Achievement[] => {
  return [...achievementsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 年度別グループ化
export const getAchievementsByYear = (): Record<number, Achievement[]> => {
  const grouped = achievementsData.reduce((acc, achievement) => {
    const year = new Date(achievement.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(achievement);
    return acc;
  }, {} as Record<number, Achievement[]>);

  // 各年の配列を日付順にソート
  Object.keys(grouped).forEach(year => {
    grouped[parseInt(year)].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  return grouped;
};