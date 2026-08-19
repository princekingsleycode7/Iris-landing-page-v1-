import React, { useState } from 'react';
import { ArrowRight, Check, HelpCircle, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface TransitionSolutionSectionProps {
  onScrollToForm: () => void;
}

export const TransitionSolutionSection: React.FC<TransitionSolutionSectionProps> = ({ onScrollToForm }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true
  });

  const diagnosticQuestions = [
    "Can we respond faster using better systems?",
    "Can we handle routine customer questions automatically?",
    "Can we capture inquiries outside business hours?",
    "Can we give our team better tools before giving them more work?"
  ];

  const toggleItem = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
    trackEvent('CHECKLIST_TOGGLE', `Diagnostic Question ${idx + 1}`);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Context & Thesis */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em]">
              <span>System Design</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
              The Solution Isn't Always More Staff.
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                When businesses realize they are missing inquiries, the first instinct is often: <em className="text-slate-900 font-medium">"We need to hire more people."</em>
              </p>
              <p>
                Hiring adds fixed overhead, payroll, and management overhead. Before adding headcount, modern operators audit their response systems.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  trackEvent('CTA_CLICK', 'Transition Section Free Guide Button');
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

          {/* Right Column: Diagnostic Questions (Double Bezel Tray) */}
          <div className="lg:col-span-6">
            <div className="p-2 sm:p-3 rounded-[2.5rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.04)]">
              <div className="p-6 sm:p-8 rounded-[2rem] bg-slate-50 border border-[#EAEAEA] space-y-4">
                
                <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Operational Capacity Diagnostic
                  </span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full font-medium">
                    Self-Audit
                  </span>
                </div>

                <div className="space-y-2.5">
                  {diagnosticQuestions.map((q, idx) => {
                    const isChecked = !!checkedItems[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleItem(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border flex items-start gap-3 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          isChecked 
                            ? 'bg-white border-slate-300 text-[#18181B] shadow-2xs' 
                            : 'bg-slate-100/60 border-slate-200 text-slate-500 hover:bg-white'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-[#18181B] text-white' : 'bg-slate-200 text-slate-400'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className="leading-snug">{q}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2 text-[11px] text-slate-500 italic text-center">
                  The free guide provides the step-by-step framework to address all 4 areas.
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
