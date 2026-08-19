import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { GUIDE_CHAPTERS } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

interface GuideChaptersSectionProps {
  onScrollToForm: () => void;
  onOpenReader: () => void;
}

export const GuideChaptersSection: React.FC<GuideChaptersSectionProps> = ({
  onScrollToForm,
  onOpenReader,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
              <span>Curriculum & Frameworks</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
              Inside the Free Guide, You'll Learn How To:
            </h2>
          </div>

          <button
            onClick={() => {
              trackEvent('GUIDE_READER_OPEN', 'Guide Curriculum Top Button');
              onOpenReader();
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors cursor-pointer self-start md:self-auto"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Open Table of Contents →</span>
          </button>
        </div>

        {/* 2-Column Asymmetric Chapter Matrix (Grid with 1px border dividers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {GUIDE_CHAPTERS.map((ch) => (
            <div
              key={ch.number}
              className="p-6 sm:p-7 rounded-[1.75rem] bg-slate-50/70 border border-[#EAEAEA] hover:bg-white hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded-md">
                    CHAPTER {ch.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#18181B] font-serif pt-1">
                  {ch.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ch.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAEAEA] text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="truncate">{ch.keyTakeaway}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              trackEvent('CTA_CLICK', 'Curriculum Section Primary CTA');
              onScrollToForm();
            }}
            className="group inline-flex items-center justify-center pl-6 pr-2 py-3 bg-[#18181B] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-full transition-all duration-200 shadow-xs"
          >
            <span className="mr-3">DOWNLOAD THE FULL 36-PAGE GUIDE</span>
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
