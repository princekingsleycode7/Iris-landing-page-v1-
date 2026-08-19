import React from 'react';
import { MessageSquare, PhoneCall, Moon, Sparkles, CheckCircle2 } from 'lucide-react';

export const ImagineSection: React.FC = () => {
  const scenarios = [
    {
      icon: MessageSquare,
      title: "Immediate Web Answers",
      desc: "Every website visitor with a question receives an immediate, accurate response."
    },
    {
      icon: PhoneCall,
      title: "Zero Missed Calls",
      desc: "Every phone call is answered promptly, even during lunch rushes, meetings, and field visits."
    },
    {
      icon: Moon,
      title: "10:30 PM Inbound Capture",
      desc: "Inquiries arriving late at night are captured, qualified, and scheduled before morning."
    },
    {
      icon: Sparkles,
      title: "High-Value Focus",
      desc: "Your team spends their day working with qualified buyers instead of answering routine FAQs."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            <span>The Operational Standard</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
            Imagine If Every Customer Got an Answer.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            This is not a hypothetical vision. It is how modern, high-converting businesses operate today.
          </p>
        </div>

        {/* 2x2 Asymmetric Grid with 1px border styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {scenarios.map((sc, idx) => {
            const Icon = sc.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-[2rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-[#EAEAEA] text-slate-800 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>

                  <h3 className="text-lg font-bold text-[#18181B] font-serif">
                    {sc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sc.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAEAEA] flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard Operational Capability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
