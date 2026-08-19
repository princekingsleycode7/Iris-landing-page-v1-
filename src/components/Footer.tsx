import React from 'react';
import { Activity } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FooterProps {
  onNavigateToAnalysis: () => void;
  onOpenPrivacy: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToAnalysis, onOpenPrivacy }) => {
  return (
    <footer className="bg-[#18181B] text-white py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center font-bold text-xs">
                I
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                Iris
              </span>
            </div>
            <p className="text-xs text-slate-400">
              AI-powered customer communication for modern businesses.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <button 
              onClick={() => onOpenPrivacy('Privacy Policy')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenPrivacy('Terms of Service')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onOpenPrivacy('Contact Us')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button 
              onClick={() => onOpenPrivacy('About Iris')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              About Iris
            </button>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Iris Technologies. All rights reserved.
          </div>

          <div>
            <button
              onClick={() => {
                trackEvent('CTA_CLICK', 'Footer Campaign Telemetry Route Click');
                onNavigateToAnalysis();
              }}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Campaign Telemetry (/analysis)</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
