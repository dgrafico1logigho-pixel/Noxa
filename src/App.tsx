import React, { useState } from 'react';
import { AudienceType, Language, AdFormat } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { StatsBar } from './sections/StatsBar';
import { SolutionsSection } from './sections/SolutionsSection';
import { AdFormatsSection } from './sections/AdFormatsSection';
import { DemoDashboardSection } from './sections/DemoDashboardSection';
import { RevenueCalculator } from './sections/RevenueCalculator';
import { IntegrationSection } from './sections/IntegrationSection';
import { FaqSection } from './sections/FaqSection';
import { LeadCaptureSection } from './sections/LeadCaptureSection';
import { AdFormatModal } from './components/Modals/AdFormatModal';
import { AuthModal } from './components/Modals/AuthModal';

export const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es');
  const [currentAudience, setCurrentAudience] = useState<AudienceType>('publishers');

  // Modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [authModalRole, setAuthModalRole] = useState<'publisher' | 'advertiser'>('publisher');
  const [demoFormat, setDemoFormat] = useState<AdFormat | null>(null);

  const handleOpenAuth = (mode: 'login' | 'register' = 'login', role: 'publisher' | 'advertiser' = 'publisher') => {
    setAuthModalMode(mode);
    setAuthModalRole(role);
    setAuthModalOpen(true);
  };

  const handleSelectFormatFromDemo = (formatId: string) => {
    setDemoFormat(null);
    const leadSection = document.getElementById('lead-form');
    leadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Fixed / Floating Navbar */}
      <Navbar
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentAudience={currentAudience}
        onAudienceChange={setCurrentAudience}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* High-Impact Hero Section with real-time Header Bidding simulator */}
        <HeroSection
          language={currentLanguage}
          audience={currentAudience}
          onOpenAuth={handleOpenAuth}
        />

        {/* 4-Column Key Metrics & Performance Counter Bar */}
        <StatsBar language={currentLanguage} />

        {/* Segmented Solutions (Publishers vs Advertisers Interactive Tabs) */}
        <SolutionsSection
          language={currentLanguage}
          audience={currentAudience}
          onAudienceChange={setCurrentAudience}
          onOpenAuth={handleOpenAuth}
        />

        {/* Ad Formats Catalog with Interactive Previews */}
        <AdFormatsSection
          language={currentLanguage}
          onSelectFormatForDemo={setDemoFormat}
        />

        {/* Administrative Demo Dashboard Simulation */}
        <DemoDashboardSection language={currentLanguage} />

        {/* High-Converting Revenue Calculator for Publishers */}
        <RevenueCalculator
          language={currentLanguage}
          onOpenRegister={() => handleOpenAuth('register', 'publisher')}
        />

        {/* 3-Step Simple Integration Process with Code Generator */}
        <IntegrationSection
          language={currentLanguage}
          onOpenRegister={() => handleOpenAuth('register', 'publisher')}
        />

        {/* Frequently Asked Questions (FAQ Accordion with Category Filters) */}
        <FaqSection language={currentLanguage} />

        {/* Enterprise Lead Capture & Registration Form */}
        <LeadCaptureSection
          language={currentLanguage}
          initialAudience={currentAudience}
        />
      </main>

      {/* Corporate Comprehensive Footer */}
      <Footer language={currentLanguage} />

      {/* Live Interactive Ad Format Sandbox Modal */}
      <AdFormatModal
        format={demoFormat}
        onClose={() => setDemoFormat(null)}
        onSelectFormat={handleSelectFormatFromDemo}
      />

      {/* Auth / Login / Registration Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
        initialRole={authModalRole}
      />
    </div>
  );
};

export default App;
