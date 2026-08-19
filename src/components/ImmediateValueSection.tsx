import React from 'react';
import { TrendingUp, Users, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export const ImmediateValueSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            <span>Strategic Shift</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
            You May Not Need More Customers. You May Need to Convert More of the Ones You Already Have.
          </h2>
        </div>

        {/* Asymmetric 2-Column Insight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: The Common Misconception */}
          <div className="md:col-span-6 p-7 sm:p-9 rounded-[2rem] bg-slate-50 border border-[#EAEAEA] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#EAEAEA] text-slate-800 flex items-center justify-center font-bold text-sm shadow-xs">
                01
              </div>
              <h3 className="text-xl font-bold text-[#18181B] font-serif">
                The Default Scaling Assumption
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Most businesses believe that growth requires spending more money on advertising, getting more website traffic, or hiring additional staff.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EAEAEA] text-xs text-slate-500 flex items-center gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Result: Higher overhead, bloated payroll, and diminishing margins.</span>
            </div>
          </div>

          {/* Right Column: The Real Opportunity */}
          <div className="md:col-span-6 p-7 sm:p-9 rounded-[2rem] bg-[#18181B] text-white flex flex-col justify-between space-y-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-amber-300 border border-white/10 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                The Inbound Conversion Reality
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Many businesses are already losing high-intent opportunities every day due to slow response times, missed calls, and limited availability. Fixing these leaks increases capacity without adding payroll.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-amber-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Capture what you are already paying to attract.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
