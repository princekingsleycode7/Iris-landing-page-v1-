import React from 'react';
import { X } from 'lucide-react';

interface SimpleInfoModalProps {
  title: string | null;
  onClose: () => void;
}

export const SimpleInfoModal: React.FC<SimpleInfoModalProps> = ({ title, onClose }) => {
  if (!title) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#FFFFFF] border border-[#EAEAEA] w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl text-[#18181B] flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#EAEAEA] flex items-center justify-between bg-slate-50">
          <h3 className="font-bold text-base text-[#18181B] font-serif">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          {title === 'Privacy Policy' && (
            <>
              <p className="font-semibold text-[#18181B]">1. Data Collection Commitment</p>
              <p>We only collect the contact information (first name, business email, and optional company name) that you voluntarily provide to receive our business growth guide and operational materials.</p>
              <p className="font-semibold text-[#18181B]">2. No Spam and No Third-Party Sale</p>
              <p>We do not sell, rent, or lease your contact information to any third parties. You may unsubscribe from follow-up communications at any time with a single click.</p>
            </>
          )}

          {title === 'Terms of Service' && (
            <>
              <p className="font-semibold text-[#18181B]">1. Educational Guide Usage</p>
              <p>The materials provided in "How to Turn More Visitors and Callers into Customers" are for general business operational and educational purposes. Every business results will vary based on individual execution and inbound demand.</p>
              <p className="font-semibold text-[#18181B]">2. Intellectual Property</p>
              <p>All framework checklists and guide diagrams are copyright Iris Technologies. You are granted permission to apply these frameworks internally within your business.</p>
            </>
          )}

          {title === 'Contact Us' && (
            <>
              <p className="font-semibold text-[#18181B]">Get in Touch with Iris</p>
              <p>Have questions about implementing these frameworks or want to configure Iris for your company's phone and web inbound traffic?</p>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1 font-mono text-xs text-slate-800 border border-[#EAEAEA]">
                <div>Email: team@irisreception.ai</div>
                <div>Support: 24/7 Availability via Iris Reception</div>
              </div>
            </>
          )}

          {title === 'About Iris' && (
            <>
              <p className="font-semibold text-[#18181B]">About Iris Technologies</p>
              <p>Iris is built around a single, foundational principle: help growing businesses serve more customers without bloating operational payroll or burning out front-desk teams.</p>
              <p>By automating first-response triage and 24/7 inquiry handling, Iris allows human specialists to focus on high-touch client work that truly moves the needle.</p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-[#EAEAEA] text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#18181B] hover:bg-slate-800 text-white rounded-full text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
