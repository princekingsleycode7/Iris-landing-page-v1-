import React, { useState } from 'react';
import { X, BookOpen, ChevronLeft, ChevronRight, Check, Printer } from 'lucide-react';
import { FULL_GUIDE_DATA } from '../data/guideContent';
import { trackEvent } from '../utils/analytics';

interface EbookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToForm: () => void;
}

export const EbookReaderModal: React.FC<EbookReaderModalProps> = ({ isOpen, onClose, onScrollToForm }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [completedItems, setCompletedItems] = useState<{ [key: string]: boolean }>({});

  if (!isOpen) return null;

  const currentChapter = FULL_GUIDE_DATA.chapters[activeChapterIndex];

  const toggleCheck = (id: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    trackEvent('CHECKLIST_TOGGLE', `Reader Checklist Item: ${id}`);
  };

  const handlePrint = () => {
    trackEvent('GUIDE_DOWNLOAD_CLICK', 'Reader Print PDF Click');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#FBFBFA] border border-[#EAEAEA] w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl text-[#18181B] flex flex-col h-[90vh]">
        
        {/* Top Navigation Bar */}
        <div className="px-5 py-4 border-b border-[#EAEAEA] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#18181B] leading-tight font-serif">
                {FULL_GUIDE_DATA.title}
              </h3>
              <p className="text-[11px] text-slate-500 font-mono">
                Digital Edition - 36 Pages Total
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-semibold transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Save / Print PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reader Layout: Chapter List + Chapter Content */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Chapter Navigation Sidebar (Desktop) */}
          <div className="w-64 border-r border-[#EAEAEA] bg-white p-3 hidden md:flex flex-col overflow-y-auto">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3 py-2">
              Table of Contents
            </div>
            <div className="space-y-1">
              {FULL_GUIDE_DATA.chapters.map((ch, idx) => {
                const isActive = idx === activeChapterIndex;
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setActiveChapterIndex(idx);
                      trackEvent('GUIDE_READER_OPEN', `Chapter ${ch.number}: ${ch.title}`);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#18181B] text-white shadow-xs' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span className={`font-mono text-[10px] ${isActive ? 'text-amber-300 font-bold' : 'text-slate-400'}`}>
                      {ch.number}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto p-3 bg-slate-50 rounded-xl border border-[#EAEAEA] text-[11px] text-slate-600">
              <span className="font-bold text-[#18181B] block mb-1">Growth Playbook</span>
              <span>8 Practical Chapters with action checklists.</span>
            </div>
          </div>

          {/* Main Reading Canvas */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#FBFBFA]">
            <div className="max-w-2xl mx-auto space-y-6">
              
              {/* Mobile Chapter Selector */}
              <div className="md:hidden flex items-center justify-between pb-3 border-b border-[#EAEAEA] text-xs">
                <span className="font-bold text-slate-500 font-mono">
                  CHAPTER {currentChapter.number} OF 08
                </span>
                <span className="text-slate-400 font-mono">{currentChapter.readingTime}</span>
              </div>

              {/* Chapter Title Block */}
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest block mb-1">
                  CHAPTER {currentChapter.number}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#18181B] font-serif leading-tight">
                  {currentChapter.title}
                </h1>
                <p className="text-sm font-medium text-slate-600 mt-1.5">
                  {currentChapter.subtitle}
                </p>
              </div>

              {/* Chapter Sections */}
              <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                {currentChapter.sections.map((sec, secIdx) => (
                  <div key={secIdx} className="space-y-4">
                    <h3 className="text-lg font-bold text-[#18181B] font-serif pt-2">
                      {sec.heading}
                    </h3>
                    
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-slate-700">
                        {p}
                      </p>
                    ))}

                    {sec.callout && (
                      <div className="bg-amber-50 border-l-2 border-amber-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-amber-950">
                        <div className="font-bold mb-1">{sec.callout.title}</div>
                        <p>{sec.callout.content}</p>
                      </div>
                    )}

                    {sec.actionChecklist && (
                      <div className="bg-white border border-[#EAEAEA] rounded-2xl p-5 my-4 space-y-3 shadow-2xs">
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                          Action Checklist:
                        </div>
                        {sec.actionChecklist.map((item, itemIdx) => {
                          const itemId = `${currentChapter.id}_${itemIdx}`;
                          const isDone = !!completedItems[itemId];
                          return (
                            <button
                              key={itemIdx}
                              onClick={() => toggleCheck(itemId)}
                              className={`w-full text-left p-3 rounded-xl border flex items-start gap-3 text-xs sm:text-sm transition-all cursor-pointer ${
                                isDone 
                                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' 
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                                isDone ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-400'
                              }`}>
                                {isDone ? <Check className="w-3 h-3" /> : null}
                              </div>
                              <span className={isDone ? 'line-through opacity-80' : ''}>
                                {item}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Chapter Pager */}
              <div className="pt-8 mt-10 border-t border-[#EAEAEA] flex items-center justify-between">
                <button
                  disabled={activeChapterIndex === 0}
                  onClick={() => setActiveChapterIndex(prev => prev - 1)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#EAEAEA] text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="text-xs font-medium text-slate-400 font-mono hidden sm:inline">
                  {activeChapterIndex + 1} of {FULL_GUIDE_DATA.chapters.length}
                </span>

                <button
                  disabled={activeChapterIndex === FULL_GUIDE_DATA.chapters.length - 1}
                  onClick={() => setActiveChapterIndex(prev => prev + 1)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#18181B] text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
