'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Award, ExternalLink, FileText, X, Tag } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAchievementsByType, getSortedAchievements, type Achievement } from '@/lib/achievementsData';

export default function AchievementsSection() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'presentation' | 'award' | 'event'>('all');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const getFilteredAchievements = () => {
    if (activeFilter === 'all') {
      return getSortedAchievements();
    }
    return getAchievementsByType(activeFilter);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'presentation':
        return <FileText className="w-5 h-5" />;
      case 'award':
        return <Award className="w-5 h-5" />;
      case 'event':
        return <Users className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: Achievement['type']) => {
    switch (type) {
      case 'presentation':
        return 'border-blue-400 bg-blue-400/10 text-blue-400';
      case 'award':
        return 'border-yellow-400 bg-yellow-400/10 text-yellow-400';
      case 'event':
        return 'border-green-400 bg-green-400/10 text-green-400';
      default:
        return 'border-gray-400 bg-gray-400/10 text-gray-400';
    }
  };

  const filterButtons = [
    { id: 'all', label: '全て', labelEn: 'All' },
    { id: 'presentation', label: t('presentationsTitle'), labelEn: 'Presentations' },
    { id: 'award', label: t('awardsTitle'), labelEn: 'Awards' },
    { id: 'event', label: t('eventsTitle'), labelEn: 'Events' }
  ];

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-green-400 glow-primary mb-4">
          {t('achievementsTitle')}
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t('achievementsDescription')}
        </p>
      </motion.div>

      {/* フィルターボタン */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {filterButtons.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id as 'all' | 'presentation' | 'award' | 'event')}
            className={`px-4 py-2 border-2 transition-all duration-300 ${
              activeFilter === filter.id
                ? 'border-green-400 bg-green-400/20 text-green-400'
                : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-green-400 hover:bg-green-400/10'
            }`}
          >
            {language === 'ja' ? filter.label : filter.labelEn}
          </button>
        ))}
      </motion.div>

      {/* 実績カード */}
      <div className="grid gap-6 md:gap-8">
        <AnimatePresence>
          {getFilteredAchievements().map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border-2 border-gray-700 p-6 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  {/* タイプバッジ */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`flex items-center gap-2 px-3 py-1 border-2 ${getTypeColor(achievement.type)}`}>
                      {getTypeIcon(achievement.type)}
                      <span className="text-sm font-medium">
                        {achievement.type === 'presentation' && t('presentationsTitle')}
                        {achievement.type === 'award' && t('awardsTitle')}
                        {achievement.type === 'event' && t('eventsTitle')}
                      </span>
                    </div>
                    {achievement.award && (
                      <div className="px-3 py-1 border-2 border-yellow-400 bg-yellow-400/10 text-yellow-400">
                        {achievement.award[language]}
                      </div>
                    )}
                  </div>

                  {/* タイトル */}
                  <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2">
                    {achievement.title[language]}
                  </h3>

                  {/* 説明 */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {achievement.description[language]}
                  </p>

                  {/* メタ情報 */}
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(achievement.date)}</span>
                    </div>
                    {achievement.venue && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{achievement.venue[language]}</span>
                      </div>
                    )}
                    {achievement.organizer && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{achievement.organizer[language]}</span>
                      </div>
                    )}
                    {achievement.rank && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{achievement.rank}</span>
                      </div>
                    )}
                  </div>

                  {/* タグ */}
                  {achievement.tags && achievement.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {achievement.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="flex items-center gap-1 px-2 py-1 bg-gray-800 border border-gray-600 text-xs text-gray-300"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* アクションボタン */}
                <div className="flex flex-col gap-3 min-w-fit">
                  {achievement.paperUrl && (
                    <button
                      onClick={() => setSelectedAchievement(achievement)}
                      className="px-4 py-2 border-2 border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-all duration-300 flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      {t('viewPaper')}
                    </button>
                  )}
                  {achievement.externalUrl && (
                    <a
                      href={achievement.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-2 border-green-400 bg-green-400/10 text-green-400 hover:bg-green-400/20 transition-all duration-300 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('viewDetails')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 論文ポップアップ */}
      <AnimatePresence>
        {selectedAchievement && selectedAchievement.paperUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 border-2 border-green-400 p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-green-400">
                  {selectedAchievement.title[language]}
                </h3>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300">
                  {selectedAchievement.description[language]}
                </p>

                {/* 論文埋め込みまたはリンク */}
                <div className="border-2 border-gray-700 bg-gray-800 p-4">
                  <p className="text-gray-400 mb-3">論文・紀要:</p>
                  <a
                    href={selectedAchievement.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-400 bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-all duration-300"
                  >
                    <FileText className="w-4 h-4" />
                    PDFを開く
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    ※ 新しいタブで開きます
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}