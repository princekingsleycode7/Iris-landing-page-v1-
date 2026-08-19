import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, BookOpen, Download, Printer } from 'lucide-react';
import { VALUE_REINFORCEMENTS } from '../data/landingData';
import { saveLeadSubmission, trackEvent } from '../utils/analytics';

interface LeadCaptureSectionProps {
  onOpenReader: () => void;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({ onOpenReader }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim()) {
      setErrorMsg('Please enter your first name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    setErrorMsg('');
    saveLeadSubmission({
      firstName: firstName.trim(),
      email: email.trim(),
      companyName: companyName.trim(),
      source: 'Lead Magnet Landing Page Form'
    });
    setSubmitted(true);
  };

  const handleInputFocus = () => {
    trackEvent('EBOOK_FORM_START', 'Lead Capture Form Focused');
  };

  return (
    <section id="lead-form-section" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#EAEAEA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double Bezel Outer Container */}
        <div className="p-2.5 sm:p-4 rounded-[2.5rem] bg-slate-100/90 border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]">
          <div className="p-6 sm:p-12 rounded-[2rem] bg-white border border-[#EAEAEA] space-y-8">
            
            {/* Header */}
            <div className="text-center max-w-xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-[#EAEAEA] text-slate-800 text-[11px] font-semibold uppercase tracking-[0.15em]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant Digital Access</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight leading-tight font-serif">
                Get the Free Guide
              </h2>

              <p className="text-sm sm:text-base text-slate-600">
                Learn how to turn more website visitors and callers into customers without increasing your costs.
              </p>
            </div>

            {/* Form or Instant Fulfillment Confirmation */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 pt-2">
                
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl font-medium">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label htmlFor="first-name-input" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="first-name-input"
                    type="text"
                    required
                    placeholder="Sarah"
                    value={firstName}
                    onFocus={handleInputFocus}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50/60 border border-[#EAEAEA] rounded-xl text-sm text-[#18181B] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={email}
                    onFocus={handleInputFocus}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50/60 border border-[#EAEAEA] rounded-xl text-sm text-[#18181B] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company-input" className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="company-input"
                    type="text"
                    placeholder="Apex Advisory"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50/60 border border-[#EAEAEA] rounded-xl text-sm text-[#18181B] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center pl-6 pr-2 py-3.5 bg-[#18181B] hover:bg-slate-800 text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span className="mr-3">SEND ME THE FREE GUIDE</span>
                    <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>We respect your privacy. No spam. Unsubscribe anytime.</span>
                </div>

              </form>
            ) : (
              /* Success / Immediate Fulfillment Screen */
              <div className="max-w-lg mx-auto p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-emerald-950 font-serif">
                    Guide Ready for {firstName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    We sent a digital copy to <strong className="font-semibold">{email}</strong>. You can also read or print the full 36-page guide right now:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      trackEvent('GUIDE_READER_OPEN', 'Success State Read Online Button');
                      onOpenReader();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-full inline-flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read In Browser</span>
                  </button>

                  <button
                    onClick={() => {
                      trackEvent('GUIDE_DOWNLOAD_CLICK', 'Success State Print PDF Button');
                      window.print();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <Printer className="w-4 h-4 text-slate-500" />
                    <span>Save / Print PDF</span>
                  </button>
                </div>
              </div>
            )}

            {/* Value Reinforcements Grid */}
            <div className="pt-8 border-t border-[#EAEAEA]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 text-center mb-6">
                What is included in your free download:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {VALUE_REINFORCEMENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-[#EAEAEA] flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
