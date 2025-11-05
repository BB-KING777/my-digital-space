export interface BlogPost {
  id: string;
  title: string;
  titleJa: string;
  excerpt: string;
  excerptJa: string;
  date: string;
  tags: string[];
  externalUrl: string;
  category: 'research' | 'technical' | 'personal' | 'hardware';
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Analysis of eSIM Services to Circumvent the Great Firewall in China",
    titleJa: "中国国内でのグレートファイヤウォールを回避するためのeSIMサービスの解析",
    excerpt: "An analysis of eSIM services that aim to help users circumvent China's Great Firewall, covering technical mechanisms, limitations, and privacy implications.",
    excerptJa: "中国国内でのグレートファイヤウォールを回避することを目的としたeSIMサービスの解析。技術的な仕組み、制限、プライバシーへの影響を検討します。",
    date: "2025-09-08",
    tags: ["eSIM", "Great Firewall", "Network Security", "セキュリティ", "リバースエンジニアリング"],
    externalUrl: "https://qurest.vercel.app/blog/2025-09-08-china-e-sim",
    category: "personal"
  },
  {
    id: "2",
    title: "Hacking and Security Assessment of Chinese-made Drones",
    titleJa: "中国製ドローンのリバースエンジニアリングとスプーフィングコントローラーの作成",
    excerpt: "An analysis of eSIM services that aim to help users circumvent China's Great Firewall, covering technical mechanisms, limitations, and privacy implications.",
    excerptJa: "Aliexpressで購入した中国製ドローンのリバースエンジニアリングを行い、スプーフィングコントローラーを作成しました。ドローンの通信プロトコルとセキュリティ上の脆弱性を調査します。",
    date: "2025-11-02",
    tags: ["ネットワーク", "ドローン", "セキュリティ", "リバースエンジニアリング"],
    externalUrl: "https://qurest.vercel.app/blog/2025-09-21-2-4Ghz-hacking",
    category: "personal"
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export const blogCategories = {
  research: { label: "Research", labelJa: "研究" },
  technical: { label: "Technical", labelJa: "技術" },
  personal: { label: "Personal", labelJa: "個人" },
  hardware: { label: "Hardware", labelJa: "ハードウェア" }
} as const;

// 動的にカテゴリを取得
export function getAvailableCategories(): Array<{ value: BlogPost['category']; label: string; labelJa: string; count: number }> {
  const categoryCounts: Record<string, number> = {};

  blogPosts.forEach(post => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  });

  return Object.keys(blogCategories).map(category => ({
    value: category as BlogPost['category'],
    label: blogCategories[category as BlogPost['category']].label,
    labelJa: blogCategories[category as BlogPost['category']].labelJa,
    count: categoryCounts[category] || 0
  })).filter(category => category.count > 0);
}

// 動的にタグを取得
export function getAvailableTags(): Array<{ value: string; count: number }> {
  const tagCounts: Record<string, number> = {};

  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ value: tag, count }))
    .sort((a, b) => b.count - a.count);
}

// 高度なフィルタリング機能
export interface BlogFilterOptions {
  categories?: string[];
  tags?: string[];
  searchQuery?: string;
  dateRange?: {
    start?: string;
    end?: string;
  };
}

export function filterBlogPosts(options: BlogFilterOptions): BlogPost[] {
  let filtered = [...blogPosts];

  // カテゴリフィルタ
  if (options.categories && options.categories.length > 0) {
    filtered = filtered.filter(post => options.categories!.includes(post.category));
  }

  // タグフィルタ
  if (options.tags && options.tags.length > 0) {
    filtered = filtered.filter(post =>
      options.tags!.some(tag => post.tags.includes(tag))
    );
  }

  // 検索クエリフィルタ
  if (options.searchQuery && options.searchQuery.trim()) {
    const query = options.searchQuery.toLowerCase();
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.titleJa.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.excerptJa.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // 日付範囲フィルタ
  if (options.dateRange) {
    const { start, end } = options.dateRange;
    if (typeof start === 'string') {
      filtered = filtered.filter(post => post.date >= start);
    }
    if (typeof end === 'string') {
      filtered = filtered.filter(post => post.date <= end);
    }
  }

  return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 年月別の記事数を取得
export function getPostsByMonthYear(): Array<{ yearMonth: string; posts: BlogPost[]; count: number }> {
  const grouped: Record<string, BlogPost[]> = {};

  blogPosts.forEach(post => {
    const date = new Date(post.date);
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!grouped[yearMonth]) {
      grouped[yearMonth] = [];
    }
    grouped[yearMonth].push(post);
  });

  return Object.entries(grouped)
    .map(([yearMonth, posts]) => ({
      yearMonth,
      posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
      count: posts.length
    }))
    .sort((a, b) => b.yearMonth.localeCompare(a.yearMonth));
}