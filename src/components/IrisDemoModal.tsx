import React, { useState, useEffect } from 'react';
import { X, Phone, PhoneOff, Send, Bot, MessageSquare, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface IrisDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToForm: () => void;
}

export const IrisDemoModal: React.FC<IrisDemoModalProps> = ({ isOpen, onClose, onScrollToForm }) => {
  const [activeTab, setActiveTab] = useState<'call' | 'chat'>('call');
  const [callState, setCallState] = useState<'idle' | 'calling' | 'connected' | 'ended'>('idle');
  const [callDuration, setCallDuration] = useState(0);
  const [callScenario, setCallScenario] = useState<number>(0);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'iris' | 'user'; text: string; time: string; tag?: string }>>([
    {
      sender: 'iris',
      text: "Hello! Welcome to Apex Advisory. I am Iris, your 24/7 AI receptionist. Are you looking to schedule a consultation, check our service scope, or ask a question?",
      time: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');

  const callScenarios = [
    {
      title: "After-Hours Appointment Booking (8:45 PM)",
      callerQuery: "Hi there! I am looking for a consultation on financial restructuring this Thursday evening. Do you have any slots available?",
      irisReply: "Hello! Thank you for calling Apex. Yes, we have two available evening appointments this Thursday at 6:00 PM and 7:15 PM with our senior advisory team. Would 6:00 PM work well for you?",
      outcome: "Lead Captured: Thomas Vance - Slot Reserved: Thursday 6:00 PM - Calendar Synced"
    },
    {
      title: "Emergency Overflow and Lead Qualification",
      callerQuery: "Hello, I need urgent commercial HVAC maintenance for a retail facility downtown. Can someone come out tomorrow morning?",
      irisReply: "I understand this is urgent. Yes, our commercial emergency team is dispatched for downtown accounts. May I have the property address and a callback number so I can route our duty technician to you within 15 minutes?",
      outcome: "Priority Lead Escalated - SMS Dispatched to On-Call Field Lead"
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (callState === 'connected') {
      timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [callState]);

  if (!isOpen) return null;

  const startCall = () => {
    setCallState('calling');
    trackEvent('IRIS_DEMO_CLICK', 'Iris Voice Call Started');
    setTimeout(() => {
      setCallState('connected');
    }, 1200);
  };

  const endCall = () => {
    setCallState('ended');
    setTimeout(() => {
      setCallState('idle');
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal('');
    const newMsgs = [
      ...chatMessages,
      { sender: 'user' as const, text: userText, time: 'Just now' }
    ];
    setChatMessages(newMsgs);
    trackEvent('IRIS_DEMO_CLICK', `Iris Chat Prompt: ${userText.slice(0, 30)}`);

    setTimeout(() => {
      let reply = "I can certainly help you with that. Our initial consultation is designed to audit your operational bottlenecks with zero upfront risk. Would you like me to reserve a 15-minute slot for you or email you the detailed scope?";
      if (userText.toLowerCase().includes('price') || userText.toLowerCase().includes('cost')) {
        reply = "Our core packages start with custom tiering based on your monthly inquiry volume. We also provide a 100% free growth playbook. Would you like me to send you the guide right now?";
      } else if (userText.toLowerCase().includes('human') || userText.toLowerCase().includes('speak')) {
        reply = "I would be glad to connect you with our client coordinator. May I have your direct phone number so they can reach you immediately?";
      }

      setChatMessages(prev => [
        ...prev,
        {
          sender: 'iris',
          text: reply,
          time: 'Just now',
          tag: 'Latency: 0.6s'
        }
      ]);
    }, 600);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#111111] border border-slate-800 w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl text-white flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center font-bold text-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base">Iris Receptionist Simulator</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                  Live Test
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Experience how Iris answers, qualifies, and routes callers
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector: Voice Call vs. Web Chat */}
        <div className="flex border-b border-slate-800 bg-black/20">
          <button
            onClick={() => setActiveTab('call')}
            className={`flex-1 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'call' 
                ? 'text-white border-b-2 border-white bg-slate-900/60' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Voice Reception Call Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'chat' 
                ? 'text-white border-b-2 border-white bg-slate-900/60' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Live Chat and Lead Intake</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#111111]">
          
          {activeTab === 'call' ? (
            <div className="space-y-6">
              
              {/* Scenario selector */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Select Inbound Scenario:</span>
                <div className="flex gap-2">
                  {callScenarios.map((sc, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCallScenario(idx);
                        setCallState('idle');
                      }}
                      className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                        callScenario === idx 
                          ? 'bg-white text-slate-950 font-bold' 
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Scenario {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Call Display Box */}
              <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 text-center relative overflow-hidden">
                
                {callState === 'idle' && (
                  <div className="py-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">
                        {callScenarios[callScenario].title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                        Simulate an incoming caller dialing your business. See how Iris answers within 1 ring.
                      </p>
                    </div>
                    <button
                      onClick={startCall}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full shadow-lg inline-flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Start Test Inbound Call</span>
                    </button>
                  </div>
                )}

                {callState === 'calling' && (
                  <div className="py-8 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center mx-auto">
                      <Phone className="w-6 h-6 animate-pulse" />
                    </div>
                    <p className="text-xs font-semibold text-amber-300 font-mono">
                      Ringing... Iris picking up in 0.8s
                    </p>
                  </div>
                )}

                {callState === 'connected' && (
                  <div className="space-y-4 text-left">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
                      <span className="text-emerald-400 font-semibold font-mono flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Call In Progress - {formatTime(callDuration)}
                      </span>
                      <button
                        onClick={endCall}
                        className="text-rose-400 hover:text-rose-300 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <PhoneOff className="w-3.5 h-3.5" />
                        <span>End Call</span>
                      </button>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                        <span className="text-[10px] text-slate-400 font-mono block mb-1">CALLER:</span>
                        <p className="text-slate-200">"{callScenarios[callScenario].callerQuery}"</p>
                      </div>

                      <div className="p-3 bg-slate-850 rounded-xl border border-slate-700">
                        <span className="text-[10px] text-amber-300 font-mono block mb-1">IRIS (AI RECEPTIONIST):</span>
                        <p className="text-white">"{callScenarios[callScenario].irisReply}"</p>
                      </div>

                      <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-800/40 text-emerald-300 text-xs font-mono">
                        {callScenarios[callScenario].outcome}
                      </div>
                    </div>
                  </div>
                )}

                {callState === 'ended' && (
                  <div className="py-6 text-center space-y-2">
                    <p className="text-sm font-bold text-white">Call Completed and Logged</p>
                    <p className="text-xs text-slate-400 font-mono">Interaction notes archived and synced to CRM.</p>
                  </div>
                )}

              </div>

            </div>
          ) : (
            <div className="flex flex-col h-[320px]">
              
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-3">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-white text-slate-950 rounded-br-none font-medium'
                          : 'bg-slate-850 text-slate-200 rounded-bl-none border border-slate-700'
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    {msg.tag && (
                      <span className="text-[10px] text-emerald-400 mt-1 font-mono">{msg.tag}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question (e.g. 'What are your rates?' or 'Can I speak with someone?')"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white text-slate-950 hover:bg-slate-100 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-black/40 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            First, learn the operational strategy in the free guide.
          </div>

          <button
            onClick={() => {
              onClose();
              onScrollToForm();
            }}
            className="group inline-flex items-center justify-center pl-4 pr-1.5 py-1.5 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold rounded-full transition-all cursor-pointer"
          >
            <span className="mr-2">GET THE FREE GUIDE</span>
            <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center">
              <ArrowRight className="w-3 h-3" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};
