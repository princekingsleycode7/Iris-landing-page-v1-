import React, { useState } from 'react';
import { ArrowRight, BookOpen, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { PREVIEW_PAGES } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

interface EbookPreviewSectionProps {
  onScrollToForm: () => void;
  onOpenReader: () => void;
}

export const EbookPreviewSection: React.FC<EbookPreviewSectionProps> = ({
  onScrollToForm,
  onOpenReader,
}) => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const activePage = PREVIEW_PAGES[selectedPageIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            <span>Inside The Manuscript</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
            Here's a Preview of What You'll Discover
          </h2>
        </div>

        {/* Page Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PREVIEW_PAGES.map((page, idx) => {
            const isActive = idx === selectedPageIndex;
            return (
              <button
                key={page.id}
                onClick={() => {
                  setSelectedPageIndex(idx);
                  trackEvent('PREVIEW_PAGE_SWITCH', `Page ${page.pageNumber}: ${page.title}`);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#18181B] text-white shadow-xs'
                    : 'bg-white border border-[#EAEAEA] text-slate-600 hover:text-slate-900'
                }`}
              >
                Page {page.pageNumber}: {page.title}
              </button>
            );
          })}
        </div>

        {/* Double Bezel Document Sheet Preview */}
        <div className="p-2 sm:p-3 rounded-[2.5rem] bg-slate-200/60 border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="p-6 sm:p-10 rounded-[2rem] bg-white border border-[#EAEAEA] space-y-6">
            
            {/* Sheet Header */}
            <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4 text-xs font-mono text-slate-500">
              <span className="font-bold text-amber-800 uppercase">
                {activePage.badge}
              </span>
              <span>Page {activePage.pageNumber} of 36</span>
            </div>

            {/* Title Block */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] font-serif">
                {activePage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {activePage.subtitle}
              </p>
            </div>

            {/* Checklist / Framework Items */}
            <div className="space-y-2.5 pt-2">
              {activePage.excerpt.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-[#EAEAEA] flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                >
                  <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                    {idx + 1}
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Subtext */}
            <div className="pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="font-medium">
                This is only one section of the full 36-page guide.
              </div>

              <button
                onClick={() => {
                  trackEvent('GUIDE_READER_OPEN', 'Preview Open Interactive Reader');
                  onOpenReader();
                }}
                className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-amber-700 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read entire guide in browser →</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
