import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FinalCTASectionProps {
  onScrollToForm: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#EAEAEA] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-6">
          <Sparkles className="w-3 h-3 text-amber-600" />
          <span>Take The First Step</span>
        </div>

        {/* Heading (Wide max-w-2xl, 2-3 lines max) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif mb-5 max-w-2xl mx-auto">
          Your Next Business Milestone May Not Require More Employees.
        </h2>

        {/* Body */}
        <div className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto space-y-1">
          <p>Start by finding the opportunities you are already missing.</p>
          <p className="font-medium text-slate-800">
            Download the free guide and learn how to turn more website visitors and callers into customers.
          </p>
        </div>

        {/* Primary CTA (Button-in-Button) */}
        <div className="flex flex-col items-center justify-center gap-3">
          <button
            id="final-cta-btn"
            onClick={() => {
              trackEvent('CTA_CLICK', 'Final Section Primary CTA');
              onScrollToForm();
            }}
            className="group relative inline-flex items-center justify-center pl-7 pr-2 py-3.5 bg-[#18181B] hover:bg-slate-800 text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span className="mr-3">GET THE FREE GUIDE</span>
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* Supporting Text */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Free - Practical - No credit card required</span>
          </div>
        </div>

      </div>
    </section>
  );
};
