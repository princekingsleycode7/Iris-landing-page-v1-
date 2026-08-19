import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { WHAT_YOU_CAN_EXPECT } from '../data/landingData';

export const WhatYouCanExpectSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Built Around a Simple Goal</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
            What You Can Expect
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            Every operational improvement begins with understanding where your customer opportunities are.
          </p>
        </div>

        {/* 2x3 Grid with 1px border cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WHAT_YOU_CAN_EXPECT.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-[1.75rem] bg-slate-50/70 border border-[#EAEAEA] flex flex-col justify-between space-y-4 hover:bg-white hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-200"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#EAEAEA] text-emerald-600 flex items-center justify-center shadow-2xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                </div>

                <h3 className="text-base font-bold text-[#18181B] font-serif pt-1">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
