import React from 'react';
import { ArrowRight, ShieldCheck, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { Ebook3DMockup } from './Ebook3DMockup';
import { HERO_DATA } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

interface HeroSectionProps {
  onScrollToForm: () => void;
  onOpenReader: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToForm, onOpenReader }) => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      
      {/* Background Soft Depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-100/40 via-slate-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>{HERO_DATA.eyebrow}</span>
            </div>

            {/* Main Headline (2-3 lines max, wide container) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#18181B] tracking-tight leading-[1.12] font-serif">
              How to Achieve Your Next Business Milestone Without Increasing Your Costs
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {HERO_DATA.supportingParagraph}
            </p>

            {/* CTA & Trust Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              <button
                id="hero-primary-cta"
                onClick={() => {
                  trackEvent('CTA_CLICK', 'Hero Primary CTA Button');
                  onScrollToForm();
                }}
                className="group relative inline-flex items-center justify-center pl-6 pr-2 py-3 bg-[#18181B] hover:bg-slate-800 text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                <span className="mr-3">GET THE FREE GUIDE</span>
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              <button
                onClick={() => {
                  trackEvent('GUIDE_READER_OPEN', 'Hero Read Table of Contents Button');
                  onOpenReader();
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 text-sm font-medium transition-colors w-full sm:w-auto border border-[#EAEAEA]"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>Read Online</span>
              </button>

            </div>

            {/* Microcopy Trust Line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{HERO_DATA.microCopy}</span>
            </div>

            {/* Quick Proof Signals */}
            <div className="pt-4 border-t border-[#EAEAEA] flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant Digital Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>36-Page Action Framework</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Technical Setup</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Ebook Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Ebook3DMockup onClick={onOpenReader} />
          </div>

        </div>
      </div>
    </section>
  );
};
