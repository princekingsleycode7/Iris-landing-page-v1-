import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface StickyMobileCTAProps {
  onScrollToForm: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onScrollToForm }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const formElement = document.getElementById('lead-form-section');
      
      let isOverForm = false;
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          isOverForm = true;
        }
      }

      if (scrollY > 350 && !isOverForm) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 animate-fade-in">
      <div className="bg-white/95 backdrop-blur-md border border-[#EAEAEA] rounded-full p-2 pl-4 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] flex items-center justify-between gap-3">
        <div className="flex flex-col truncate">
          <span className="text-xs font-bold text-[#18181B] truncate">
            Free Growth Guide
          </span>
          <span className="text-[10px] text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
            No credit card
          </span>
        </div>

        <button
          onClick={() => {
            trackEvent('CTA_CLICK', 'Sticky Mobile Floating CTA');
            onScrollToForm();
          }}
          className="group inline-flex items-center justify-center pl-4 pr-1.5 py-1.5 bg-[#18181B] active:scale-95 text-white text-xs font-semibold rounded-full shadow-xs shrink-0"
        >
          <span className="mr-2">Get Guide</span>
          <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
            <ArrowRight className="w-3 h-3" />
          </div>
        </button>
      </div>
    </div>
  );
};
