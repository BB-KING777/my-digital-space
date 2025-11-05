'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, Tag, TrendingUp, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import {
  filterBlogPosts,
  getPostsByMonthYear,
  type BlogPost,
  type BlogFilterOptions
} from '@/lib/blogData';
import AdvancedBlogFilter from './AdvancedBlogFilter';

export default function BlogSection() {
  const { t, language } = useTranslation();
  const [filters, setFilters] = useState<BlogFilterOptions>({});
  const [viewMode, setViewMode] = useState<'list' | 'timeline'>('list');

  // フィルタリングされた記事を取得
  const filteredPosts = useMemo(() => {
    return filterBlogPosts(filters);
  }, [filters]);

  // タイムライン表示用のデータ
  const timelineData = useMemo(() => {
    if (viewMode !== 'timeline') return [];
    return getPostsByMonthYear().filter(group =>
      group.posts.some(post => filteredPosts.includes(post))
    ).map(group => ({
      ...group,
      posts: group.posts.filter(post => filteredPosts.includes(post))
    }));
  }, [filteredPosts, viewMode]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'ja'
      ? date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatMonthYear = (yearMonth: string) => {
    const [year, month] = yearMonth.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return language === 'ja'
      ? date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const getTitle = (post: BlogPost) => {
    return language === 'ja' ? post.titleJa : post.title;
  };

  const getExcerpt = (post: BlogPost) => {
    return language === 'ja' ? post.excerptJa : post.excerpt;
  };

  const handleFilterChange = useCallback((newFilters: BlogFilterOptions) => {
    setFilters(newFilters);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* ヘッダー */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-terminal pixel-border p-8 relative overflow-hidden terminal-pattern"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 glow-primary mb-4">
          {t('blogTitle')}
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
          {t('blogDescription')}
        </p>

        {/* 小さい外部ブログリンク */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 text-sm"
        >
          <a
            href="https://qurest.vercel.app/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {t('visitExternalBlog')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* 先進的なフィルター */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AdvancedBlogFilter onFilterChange={handleFilterChange} activeFilters={filters} />
      </motion.div>

      {/* 結果ヘッダーと表示モード切り替え */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-terminal border-2 border-gray-700 p-4"
      >
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-white border-l-4 border-green-400 pl-4">
            {t('myBlogPosts')}
          </h3>
          <motion.span
            key={filteredPosts.length}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="px-3 py-1 bg-green-400/20 border border-green-400 text-green-400 text-sm font-semibold"
          >
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          </motion.span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-2 border transition-all duration-300 flex items-center gap-2 ${
              viewMode === 'list'
                ? 'border-green-400 bg-green-400/20 text-green-400'
                : 'border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            List
          </button>
          <button
            onClick={() => setViewMode('timeline')}
            className={`px-3 py-2 border transition-all duration-300 flex items-center gap-2 ${
              viewMode === 'timeline'
                ? 'border-green-400 bg-green-400/20 text-green-400'
                : 'border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400'
            }`}
          >
            <Clock className="w-4 h-4" />
            Timeline
          </button>
        </div>
      </motion.div>

      {/* 記事表示エリア */}
      <AnimatePresence mode="wait">
        {viewMode === 'list' ? (
          /* リスト表示 */
          <motion.div
            key="list-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-terminal border-2 border-gray-700"
              >
                <p className="text-gray-400 text-lg">
                  {language === 'ja' ? '条件に一致する記事が見つかりません' : 'No posts found matching your criteria'}
                </p>
              </motion.div>
            ) : (
              <div className="grid gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-terminal border-2 border-gray-700 p-6 hover:border-green-400 transition-all duration-300 group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* メタ情報 */}
                      <div className="lg:w-1/4 flex-shrink-0">
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{formatDate(post.date)}</span>
                        </div>
                        <div className="inline-block px-3 py-1 bg-blue-400/20 border border-blue-400 text-blue-400 text-sm mb-3">
                          {language === 'ja' ? (
                            post.category === 'research' ? '研究' :
                            post.category === 'technical' ? '技術' :
                            post.category === 'personal' ? '個人' : 'ハードウェア'
                          ) : (
                            post.category.charAt(0).toUpperCase() + post.category.slice(1)
                          )}
                        </div>
                      </div>

                      {/* コンテンツ */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-3">
                          {getTitle(post)}
                        </h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {getExcerpt(post)}
                        </p>

                        {/* タグ */}
                        <div className="flex items-center gap-2 mb-4">
                          <Tag className="w-4 h-4 text-gray-400" />
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-800 border border-gray-600 text-gray-300 text-xs hover:border-purple-400 hover:text-purple-400 transition-colors cursor-pointer"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* アクション */}
                        <a
                          href={post.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-sm font-semibold group-hover:border-white group-hover:text-white"
                        >
                          {t('readMore')}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          /* タイムライン表示 */
          <motion.div
            key="timeline-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {timelineData.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-terminal border-2 border-gray-700"
              >
                <p className="text-gray-400 text-lg">
                  {language === 'ja' ? '条件に一致する記事が見つかりません' : 'No posts found matching your criteria'}
                </p>
              </motion.div>
            ) : (
              timelineData.map((monthGroup, groupIndex) => (
                <motion.div
                  key={monthGroup.yearMonth}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  className="bg-terminal border-2 border-gray-700 p-6"
                >
                  <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {formatMonthYear(monthGroup.yearMonth)} ({monthGroup.count})
                  </h4>
                  <div className="space-y-4 pl-4 border-l-2 border-gray-600">
                    {monthGroup.posts.map((post, postIndex) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: postIndex * 0.05 }}
                        className="relative"
                      >
                        <div className="absolute -left-6 top-3 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
                        <div className="bg-black border border-gray-600 p-4 hover:border-green-400 transition-colors">
                          <h5 className="font-semibold text-white mb-2">{getTitle(post)}</h5>
                          <p className="text-gray-300 text-sm mb-3">{getExcerpt(post)}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <a
                              href={post.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-400 hover:text-white transition-colors text-sm"
                            >
                              {t('readMore')} →
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
}