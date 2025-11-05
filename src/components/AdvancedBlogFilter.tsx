'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  Hash,
  Layers,
  RotateCcw
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import {
  getAvailableCategories,
  getAvailableTags,
  type BlogFilterOptions
} from '@/lib/blogData';

interface AdvancedBlogFilterProps {
  onFilterChange: (filters: BlogFilterOptions) => void;
  activeFilters: BlogFilterOptions;
}

export default function AdvancedBlogFilter({ onFilterChange, activeFilters }: AdvancedBlogFilterProps) {
  const { t, language } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState(activeFilters.searchQuery || '');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(activeFilters.categories || []);
  const [selectedTags, setSelectedTags] = useState<string[]>(activeFilters.tags || []);
  const [showAllTags, setShowAllTags] = useState(false);

  const availableCategories = getAvailableCategories();
  const availableTags = getAvailableTags();
  const displayTags = showAllTags ? availableTags : availableTags.slice(0, 8);

  // フィルター更新用のヘルパー関数
  const updateFilters = (newSearchQuery?: string, newCategories?: string[], newTags?: string[]) => {
    const filters: BlogFilterOptions = {
      searchQuery: (newSearchQuery ?? searchQuery).trim() || undefined,
      categories: (newCategories ?? selectedCategories).length > 0 ? (newCategories ?? selectedCategories) : undefined,
      tags: (newTags ?? selectedTags).length > 0 ? (newTags ?? selectedTags) : undefined
    };
    onFilterChange(filters);
  };

  const handleSearchChange = (newQuery: string) => {
    setSearchQuery(newQuery);
    updateFilters(newQuery, selectedCategories, selectedTags);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    updateFilters(searchQuery, newCategories, selectedTags);
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    updateFilters(searchQuery, selectedCategories, newTags);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTags([]);
    updateFilters('', [], []);
  };

  const hasActiveFilters = searchQuery.trim() || selectedCategories.length > 0 || selectedTags.length > 0;
  const totalActiveFilters = (searchQuery.trim() ? 1 : 0) + selectedCategories.length + selectedTags.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-terminal border-2 border-gray-700 hover:border-green-400 transition-all duration-300"
    >
      {/* ヘッダー */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-green-400">
              {t('filterByCategory')}
            </h3>
            {totalActiveFilters > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="px-2 py-1 bg-green-400/20 border border-green-400 text-green-400 text-xs rounded-full"
              >
                {totalActiveFilters}
              </motion.span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                title="Clear all filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 検索バー */}
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={language === 'ja' ? 'ブログ記事を検索...' : 'Search blog posts...'}
            className="w-full pl-10 pr-4 py-3 bg-black border-2 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 展開可能なフィルターセクション */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-6">
              {/* カテゴリフィルター */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                    Categories
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {availableCategories.map((category) => (
                    <motion.button
                      key={category.value}
                      onClick={() => handleCategoryToggle(category.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3 border-2 transition-all duration-200 text-left ${
                        selectedCategories.includes(category.value)
                          ? 'border-green-400 bg-green-400/20 text-green-400'
                          : 'border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">
                          {language === 'ja' ? category.labelJa : category.label}
                        </span>
                        <span className="text-xs opacity-70">
                          {category.count}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* タグフィルター */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-purple-400" />
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
                      Tags
                    </h4>
                  </div>
                  {availableTags.length > 8 && (
                    <button
                      onClick={() => setShowAllTags(!showAllTags)}
                      className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {showAllTags ? 'Show Less' : `Show All (${availableTags.length})`}
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {displayTags.map((tag) => (
                    <motion.button
                      key={tag.value}
                      onClick={() => handleTagToggle(tag.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-2 border transition-all duration-200 text-sm ${
                        selectedTags.includes(tag.value)
                          ? 'border-purple-400 bg-purple-400/20 text-purple-400'
                          : 'border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400'
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {tag.value}
                        <span className="text-xs opacity-70">
                          {tag.count}
                        </span>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* アクティブフィルターサマリー */}
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t border-gray-700 pt-4"
                >
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Active Filters:</h4>
                  <div className="flex flex-wrap gap-2">
                    {searchQuery && (
                      <span className="px-2 py-1 bg-green-400/20 border border-green-400 text-green-400 text-xs flex items-center gap-1">
                        Search: &ldquo;{searchQuery}&rdquo;
                        <button onClick={() => handleSearchChange('')}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedCategories.map((category) => (
                      <span key={category} className="px-2 py-1 bg-blue-400/20 border border-blue-400 text-blue-400 text-xs flex items-center gap-1">
                        {availableCategories.find(c => c.value === category)?.[language === 'ja' ? 'labelJa' : 'label']}
                        <button onClick={() => handleCategoryToggle(category)}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    {selectedTags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-purple-400/20 border border-purple-400 text-purple-400 text-xs flex items-center gap-1">
                        {tag}
                        <button onClick={() => handleTagToggle(tag)}>
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}