import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    const isOpening = openIndex !== idx;
    setOpenIndex(isOpening ? idx : null);
    if (isOpening) {
      trackEvent('FAQ_INTERACTION', `FAQ Expanded: ${FAQ_ITEMS[idx].question}`);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            <HelpCircle className="w-3 h-3 text-slate-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
            Common Questions
          </h2>
        </div>

        {/* Clean Line-Separated FAQ List (Taste Skill Accordion) */}
        <div className="divide-y divide-[#EAEAEA] border-y border-[#EAEAEA]">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 font-bold text-base sm:text-lg text-[#18181B] hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <span className="font-serif leading-snug">{faq.question}</span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-2xl animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
