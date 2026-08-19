import React from 'react';
import { BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/landingData';

interface Ebook3DMockupProps {
  onClick?: () => void;
}

export const Ebook3DMockup: React.FC<Ebook3DMockupProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative cursor-pointer group select-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
      title="Click to Preview Table of Contents"
    >
      {/* Ambient background soft glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/20 via-slate-200/30 to-indigo-100/20 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Double Bezel Outer Tray */}
      <div className="relative p-2 rounded-[2rem] bg-slate-100/80 border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
        
        {/* Book Container */}
        <div className="relative w-64 sm:w-72 md:w-80 h-[380px] sm:h-[420px] md:h-[460px] rounded-[1.5rem] bg-[#111111] text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle Spine Texture */}
          <div className="absolute top-0 left-0 bottom-0 w-4 bg-gradient-to-r from-white/15 via-black/20 to-transparent pointer-events-none" />

          {/* Book Header */}
          <div className="relative z-10 pl-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-amber-300 text-[10px] font-semibold tracking-wider uppercase mb-4 border border-white/10">
              <Sparkles className="w-3 h-3" />
              <span>Official 2026 Edition</span>
            </div>

            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              PRACTICAL GROWTH SERIES
            </div>
          </div>

          {/* Main Title Area */}
          <div className="relative z-10 pl-2 my-auto space-y-3">
            <h3 className="text-xl sm:text-2xl font-black font-serif text-white tracking-tight leading-snug">
              {HERO_DATA.ebookCoverTitle}
            </h3>
            <div className="h-0.5 w-12 bg-amber-400 rounded-full" />
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {HERO_DATA.ebookCoverSubtitle}
            </p>
          </div>

          {/* Book Footer */}
          <div className="relative z-10 pl-2 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>36 Pages</span>
            </div>
            <div className="font-serif italic text-amber-200">
              Iris Growth Library
            </div>
          </div>

          {/* Interactive Hover Pill */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
            <div className="px-4 py-2 rounded-full bg-white text-slate-950 font-bold text-xs shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Click to Read Inside</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
