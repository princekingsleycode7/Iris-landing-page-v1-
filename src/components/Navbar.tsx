import React from 'react';
import { ArrowRight, BookOpen, Activity } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface NavbarProps {
  onScrollToForm: () => void;
  onOpenReader: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToForm,
  onOpenReader,
}) => {
  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6 w-full max-w-5xl mx-auto transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-[#EAEAEA] rounded-full px-4 sm:px-6 py-2.5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.05)] flex items-center justify-between">
        
        {/* Brand & Guide Badge */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs">
              I
            </div>
            <span className="font-bold text-base text-[#18181B] tracking-tight">
              Iris
            </span>
          </a>

          <div className="hidden md:block h-3.5 w-px bg-slate-200" />

          <button
            onClick={() => {
              trackEvent('GUIDE_READER_OPEN', 'Navbar Table of Contents Click');
              onOpenReader();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>36-Page Growth Guide</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="nav-primary-cta"
            onClick={() => {
              trackEvent('CTA_CLICK', 'Navbar Primary CTA');
              onScrollToForm();
            }}
            className="group relative inline-flex items-center justify-center pl-4 pr-1.5 py-1.5 bg-[#18181B] hover:bg-slate-800 text-white text-xs font-semibold rounded-full transition-all duration-200 shadow-xs"
          >
            <span className="mr-2">Get Free Guide</span>
            <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};
