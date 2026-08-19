import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImmediateValueSection } from './components/ImmediateValueSection';
import { ProblemJourneySection } from './components/ProblemJourneySection';
import { ConversionLeaksSection } from './components/ConversionLeaksSection';
import { TransitionSolutionSection } from './components/TransitionSolutionSection';
import { GuideChaptersSection } from './components/GuideChaptersSection';
import { EbookPreviewSection } from './components/EbookPreviewSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { ImagineSection } from './components/ImagineSection';
import { MeetIrisSection } from './components/MeetIrisSection';
import { WithoutHiringSection } from './components/WithoutHiringSection';
import { WhatYouCanExpectSection } from './components/WhatYouCanExpectSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { IrisDemoModal } from './components/IrisDemoModal';
import { EbookReaderModal } from './components/EbookReaderModal';
import { SimpleInfoModal } from './components/SimpleInfoModal';
import { AnalysisPage } from './pages/AnalysisPage';
import { trackEvent } from './utils/analytics';

export default function App() {
  // Client-side URL & Route state
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.startsWith('/analysis') || hash === '#/analysis' || hash.startsWith('#/analysis')) {
        return '/analysis';
      }
    }
    return '/';
  });

  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [infoModalTitle, setInfoModalTitle] = useState<string | null>(null);

  // Track initial page view & scroll depth thresholds on landing page
  const trackedDepths = useRef<{ [key: number]: boolean }>({});

  const navigateTo = (route: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', route);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.startsWith('/analysis') || hash === '#/analysis' || hash.startsWith('#/analysis')) {
        setCurrentRoute('/analysis');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (currentRoute === '/') {
      trackEvent('LANDING_PAGE_VIEW', 'Visitor Arrived on Lead Magnet Page');

      const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return;

        const currentPercent = Math.round((window.scrollY / scrollHeight) * 100);

        [25, 50, 75, 100].forEach((threshold) => {
          if (currentPercent >= threshold && !trackedDepths.current[threshold]) {
            trackedDepths.current[threshold] = true;
            trackEvent('SCROLL_DEPTH', `Scrolled past ${threshold}%`, { percent: threshold });
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentRoute]);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      // Focus on first name input after smooth scroll animation completes
      setTimeout(() => {
        const input = document.getElementById('first-name-input');
        if (input) input.focus();
      }, 500);
    }
  };

  // Route 1: Password-Gated Analysis Route (/analysis)
  if (currentRoute === '/analysis') {
    return (
      <div className="min-h-[100dvh] bg-[#FBFBFA] text-[#18181B] flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900 relative">
        <div className="grain-overlay" />
        <AnalysisPage onNavigateHome={() => navigateTo('/')} />
      </div>
    );
  }

  // Route 2: High-Converting Lead Magnet Landing Page (/)
  return (
    <div className="min-h-[100dvh] bg-[#FBFBFA] text-[#18181B] flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900 relative">
      
      {/* Taste Skill: Pointer-Events-None Fixed Micro-Grain Layer */}
      <div className="grain-overlay" />

      {/* 1. Header Navigation (Floating Island) */}
      <Navbar
        onScrollToForm={scrollToForm}
        onOpenReader={() => setIsReaderOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section with 3D Ebook Mockup */}
        <HeroSection
          onScrollToForm={scrollToForm}
          onOpenReader={() => setIsReaderOpen(true)}
        />

        {/* 3. Immediate Value Section */}
        <ImmediateValueSection />

        {/* 4. Problem Journey Section */}
        <ProblemJourneySection />

        {/* 5. The 5 Conversion Leaks */}
        <ConversionLeaksSection />

        {/* 6. Transition to the Solution */}
        <TransitionSolutionSection
          onScrollToForm={scrollToForm}
        />

        {/* 7. What the Free Guide Teaches */}
        <GuideChaptersSection
          onScrollToForm={scrollToForm}
          onOpenReader={() => setIsReaderOpen(true)}
        />

        {/* 8. Ebook Preview Section */}
        <EbookPreviewSection
          onScrollToForm={scrollToForm}
          onOpenReader={() => setIsReaderOpen(true)}
        />

        {/* 9 & 10. Lead Capture Section & Value Reinforcements */}
        <LeadCaptureSection
          onOpenReader={() => setIsReaderOpen(true)}
        />

        {/* 11. The "Imagine" Section */}
        <ImagineSection />

        {/* 12. Introduce Iris with "SEE HOW IRIS WORKS →" */}
        <MeetIrisSection
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        {/* 13. "Without Hiring" Capacity Comparison Section */}
        <WithoutHiringSection
          onScrollToForm={scrollToForm}
        />

        {/* 14. Trust / Credibility Section ("What You Can Expect") */}
        <WhatYouCanExpectSection />

        {/* 15. FAQ Section */}
        <FAQSection />

        {/* 16. Final CTA Section */}
        <FinalCTASection
          onScrollToForm={scrollToForm}
        />
      </main>

      {/* 17. Footer */}
      <Footer
        onNavigateToAnalysis={() => navigateTo('/analysis')}
        onOpenPrivacy={(title) => setInfoModalTitle(title)}
      />

      {/* 18. Sticky Mobile Bottom Floating CTA */}
      <StickyMobileCTA
        onScrollToForm={scrollToForm}
      />

      {/* Interactive Modals */}
      <IrisDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onScrollToForm={scrollToForm}
      />

      <EbookReaderModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        onScrollToForm={scrollToForm}
      />

      <SimpleInfoModal
        title={infoModalTitle}
        onClose={() => setInfoModalTitle(null)}
      />

    </div>
  );
}
