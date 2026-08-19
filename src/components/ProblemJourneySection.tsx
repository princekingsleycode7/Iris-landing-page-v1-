import React from 'react';
import { Search, Globe, HelpCircle, PhoneCall, Clock, CheckCircle2, UserX, ArrowRight } from 'lucide-react';

export const ProblemJourneySection: React.FC = () => {
  const steps = [
    { title: "Discover", subtitle: "Finds your business", icon: Search },
    { title: "Visit", subtitle: "Lands on your website", icon: Globe },
    { title: "Inquire", subtitle: "Has a specific question", icon: HelpCircle },
    { title: "Contact", subtitle: "Calls or sends message", icon: PhoneCall },
    { title: "Wait", subtitle: "Latency begins ticking", icon: Clock, isCritical: true },
    { title: "Outcome", subtitle: "Buys or contacts competitor", icon: CheckCircle2 }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            <span>The Customer Journey</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
            Your Customers Are Already Trying to Reach You.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            The biggest customer drop-off happens in the minutes following their first attempt to contact you.
          </p>
        </div>

        {/* Step Flow Architecture */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCritical = step.isCritical;

            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border flex flex-col justify-between space-y-4 transition-all duration-200 ${
                  isCritical 
                    ? 'bg-amber-50/80 border-amber-300/80 shadow-xs' 
                    : 'bg-white border-[#EAEAEA]'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>0{idx + 1}</span>
                  {isCritical && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-200/80 px-1.5 py-0.5 rounded">
                      Leak
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isCritical ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#18181B] pt-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Point Highlight Box */}
        <div className="p-6 sm:p-8 rounded-[2rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
              The 5-Minute Inbound Window
            </span>
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              If an inquiry isn't answered in the moment of high intent, 78% of customers simply move to the next competitor.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-slate-500 bg-slate-50 px-4 py-2.5 rounded-xl border border-[#EAEAEA]">
            Speed = Conversion
          </div>
        </div>

      </div>
    </section>
  );
};
