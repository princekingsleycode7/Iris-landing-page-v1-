import React from 'react';
import { ArrowRight, Bot, CheckCircle2, Phone, Sparkles, MessageSquare } from 'lucide-react';
import { IRIS_FEATURES } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

interface MeetIrisSectionProps {
  onOpenDemo: () => void;
}

export const MeetIrisSection: React.FC<MeetIrisSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double Bezel Outer Tray (Dark Slate Container) */}
        <div className="p-2 sm:p-3.5 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] text-white">
          <div className="p-6 sm:p-12 rounded-[2rem] bg-[#111111] border border-slate-800 space-y-10">
            
            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-amber-300 text-[11px] font-semibold uppercase tracking-[0.15em]">
                <Bot className="w-3.5 h-3.5" />
                <span>MEET IRIS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.12] font-serif">
                Your Business Can Be Available Even When Your Team Isn't.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Iris is an AI receptionist designed for businesses that want to respond to customers faster, capture more inquiries, and stay available 24/7 without adding payroll.
              </p>
            </div>

            {/* 3x3 Capabilities Grid with 1px borders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {IRIS_FEATURES.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            {/* Bottom Interactive Bar */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Experience the live inbound voice reception simulator.
              </div>

              <button
                onClick={() => {
                  trackEvent('IRIS_DEMO_CLICK', 'Meet Iris Section Demo Button');
                  onOpenDemo();
                }}
                className="group inline-flex items-center justify-center pl-6 pr-2 py-3 bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm rounded-full transition-all duration-200 shadow-lg cursor-pointer w-full sm:w-auto"
              >
                <span className="mr-3">SEE HOW IRIS WORKS</span>
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
