import React from 'react';
import { Clock, PhoneOff, Moon, HelpCircle, UserX, AlertTriangle } from 'lucide-react';
import { CONVERSION_LEAKS } from '../data/landingData';

export const ConversionLeaksSection: React.FC = () => {
  const iconMap: { [key: string]: React.ElementType } = {
    Clock,
    PhoneOff,
    Moon,
    HelpCircle,
    UserX
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
            <AlertTriangle className="w-3 h-3 text-amber-600" />
            <span>Conversion Audit</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-[1.15] font-serif">
            5 Places Businesses Commonly Lose Potential Customers
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            Every one of these leaks represents potential revenue you have already paid to attract.
          </p>
        </div>

        {/* Asymmetric Bento Architecture (2 Large Cards Top + 3 Cards Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {CONVERSION_LEAKS.map((leak, idx) => {
            const Icon = iconMap[leak.iconName] || Clock;
            const isWide = idx < 2; // Top 2 cards span 3 columns each (50/50), bottom 3 span 2 columns each

            return (
              <div
                key={leak.id}
                className={`${
                  isWide ? 'md:col-span-3' : 'md:col-span-2'
                } p-6 sm:p-8 rounded-[2rem] bg-slate-50/70 border border-[#EAEAEA] flex flex-col justify-between space-y-6 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.04)] transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-[#EAEAEA] text-slate-800 flex items-center justify-center shadow-2xs">
                      <Icon className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#18181B] font-serif">
                    {leak.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leak.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAEAEA] text-xs font-medium text-amber-900 bg-amber-50/60 p-3 rounded-xl">
                  {leak.lossPoint}
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
