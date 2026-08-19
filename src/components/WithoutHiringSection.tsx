import React from 'react';
import { ArrowRight, UserPlus, Zap, CheckCircle2, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface WithoutHiringSectionProps {
  onScrollToForm: () => void;
}

export const WithoutHiringSection: React.FC<WithoutHiringSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            <span>Capacity Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
            More Customer Capacity. Without Another Employee.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            Hiring a full-time receptionist involves salary, benefits, training latency, and management overhead. A dedicated AI receptionist provides instant 24/7 coverage at a fraction of the cost.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-10">
          
          {/* Traditional Front-Desk Hiring */}
          <div className="p-7 sm:p-9 rounded-[2rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Model A
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded-full">
                  Traditional
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#18181B] font-serif">
                Linear Staff Scaling
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Fixed annual salary, benefits, and payroll taxes</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Limited to 40 hours per week (unavailable evenings/weekends)</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Can only handle 1 phone conversation at a time</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Weeks of onboarding, training, and supervision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Intelligent AI Reception */}
          <div className="p-7 sm:p-9 rounded-[2rem] bg-[#18181B] text-white border border-slate-800 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                  Model B
                </span>
                <span className="text-[10px] bg-white/10 text-emerald-300 font-medium px-2 py-0.5 rounded-full border border-white/10">
                  Modern AI
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-serif">
                Iris AI Reception
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Flat predictable software investment with zero payroll bloat</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>24/7/365 continuous availability including all holidays</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Handles simultaneous calls and inquiries with zero busy signals</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Instant knowledge deployment with 100% accurate company protocols</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              trackEvent('CTA_CLICK', 'Without Hiring Section Free Guide Button');
              onScrollToForm();
            }}
            className="group inline-flex items-center justify-center pl-6 pr-2 py-3 bg-[#18181B] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-full transition-all duration-200 shadow-xs"
          >
            <span className="mr-3">GET THE FREE GUIDE</span>
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
