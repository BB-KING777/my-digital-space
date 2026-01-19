'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onSectionChange={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderSection()}
      </main>
    </div>
  );
}
