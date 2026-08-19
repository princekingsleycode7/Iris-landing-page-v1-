import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  KeyRound, 
  ArrowLeft, 
  LogOut, 
  RefreshCw, 
  Download, 
  Users, 
  Mail, 
  PhoneCall, 
  BookOpen, 
  MousePointer, 
  Activity, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Trash2,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { getAnalyticsMetrics, getStoredLeads, getStoredEvents } from '../utils/analytics';
import { LeadSubmission, AnalyticsEvent } from '../types';

interface AnalysisPageProps {
  onNavigateHome: () => void;
}

const AUTH_STORAGE_KEY = 'iris_analysis_session_auth';
const VALID_PASSCODE = '123456';

export const AnalysisPage: React.FC<AnalysisPageProps> = ({ onNavigateHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [metrics, setMetrics] = useState(getAnalyticsMetrics());
  const [leads, setLeads] = useState<LeadSubmission[]>(getStoredLeads());
  const [events, setEvents] = useState<AnalyticsEvent[]>(getStoredEvents());
  const [searchQuery, setSearchQuery] = useState('');

  const refreshData = () => {
    setMetrics(getAnalyticsMetrics());
    setLeads(getStoredLeads());
    setEvents(getStoredEvents());
  };

  useEffect(() => {
    const handleUpdate = () => {
      refreshData();
    };
    window.addEventListener('iris_analytics_update', handleUpdate);
    return () => window.removeEventListener('iris_analytics_update', handleUpdate);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === VALID_PASSCODE) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setAuthError('');
      setPasscode('');
      refreshData();
    } else {
      setAuthError('Incorrect access passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all test leads and analytics events? This cannot be undone.')) {
      localStorage.removeItem('iris_analytics_events');
      localStorage.removeItem('iris_lead_submissions');
      refreshData();
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('No leads available to export.');
      return;
    }

    const headers = ['ID', 'First Name', 'Business Email', 'Company Name', 'Submitted At', 'Source'];
    const rows = leads.map(l => [
      `"${l.id}"`,
      `"${l.firstName}"`,
      `"${l.email}"`,
      `"${l.companyName || 'N/A'}"`,
      `"${new Date(l.submittedAt).toLocaleString()}"`,
      `"${l.source}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `iris_leads_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(lead => {
    const q = searchQuery.toLowerCase();
    return (
      lead.firstName.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      (lead.companyName && lead.companyName.toLowerCase().includes(q))
    );
  });

  // Calculate Funnel Stages
  const totalVisitors = metrics.totalVisitors;
  const ctaClicks = metrics.ctaClicks;
  const formStarts = metrics.formStarts;
  const submissions = metrics.emailSubmissions;
  const demoClicks = metrics.irisDemoClicks;

  // 1. Password Protection Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[100dvh] bg-[#FBFBFA] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-2.5 sm:p-3 rounded-[2.5rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]">
          <div className="p-6 sm:p-8 rounded-[2rem] bg-slate-50 border border-[#EAEAEA] space-y-6">
            
            <div className="flex items-center justify-between">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-medium transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Landing Page</span>
              </button>

              <div className="w-8 h-8 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-xs">
                I
              </div>
            </div>

            <div className="text-center space-y-2 pt-2">
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mx-auto shadow-2xs">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#18181B] font-serif">
                Campaign Telemetry Access
              </h2>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Enter the administrative passcode to inspect real-time funnel conversion metrics and captured leads.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {authError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono uppercase tracking-wider">
                  Passcode
                </label>
                <input
                  type="password"
                  required
                  autoFocus
                  placeholder="Enter 6-digit passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#EAEAEA] rounded-xl text-sm font-mono text-[#18181B] tracking-widest placeholder:tracking-normal placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#18181B] hover:bg-slate-800 text-white text-xs font-bold rounded-full transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Unlock Analytics</span>
              </button>
            </form>

            <div className="pt-2 text-center text-[11px] text-slate-400 font-mono">
              Protected Administrative Route: /analysis
            </div>

          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Analytics Dashboard
  return (
    <div className="min-h-[100dvh] bg-[#FBFBFA] text-[#18181B] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top App Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EAEAEA]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#18181B] text-white flex items-center justify-center font-bold text-sm">
              I
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-[#18181B] font-serif">
                  Campaign Telemetry and Funnel Intelligence
                </h1>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Live
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Route: /analysis - Real-time conversion insights
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={refreshData}
              className="p-2 bg-white border border-[#EAEAEA] hover:bg-slate-50 rounded-full text-slate-700 text-xs font-medium transition-colors cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#EAEAEA] hover:bg-slate-50 rounded-full text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Landing Page</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors cursor-pointer"
              title="Lock Session"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Primary KPI Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Conversion Rate */}
          <div className="p-6 rounded-[1.75rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Visitor-to-Lead Rate
            </span>
            <div className="text-3xl font-bold font-mono text-[#18181B]">
              {metrics.leadConversionRate}%
            </div>
            <div className="text-xs text-slate-500">
              {metrics.emailSubmissions} leads from {metrics.totalVisitors} unique visitors
            </div>
          </div>

          {/* Iris Intent Rate */}
          <div className="p-6 rounded-[1.75rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Iris Demo Intent Rate
            </span>
            <div className="text-3xl font-bold font-mono text-emerald-700">
              {metrics.irisDemoConversionRate}%
            </div>
            <div className="text-xs text-slate-500">
              {metrics.irisDemoClicks} demo interactions recorded
            </div>
          </div>

          {/* Total Captured Leads */}
          <div className="p-6 rounded-[1.75rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Total Captured Leads
            </span>
            <div className="text-3xl font-bold font-mono text-[#18181B]">
              {leads.length}
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Stored and exportable</span>
            </div>
          </div>

          {/* Guide Engagement */}
          <div className="p-6 rounded-[1.75rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Guide Reads and PDF Saves
            </span>
            <div className="text-3xl font-bold font-mono text-[#18181B]">
              {metrics.guideDownloads}
            </div>
            <div className="text-xs text-slate-500">
              In-browser reader and print engagement
            </div>
          </div>

        </div>

        {/* Funnel Step Breakdown */}
        <div className="p-6 sm:p-8 rounded-[2rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#18181B] font-serif">
                Lead Magnet Funnel Progression
              </h3>
              <p className="text-xs text-slate-500">
                Step-by-step visitor progression from discovery to lead qualification
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {metrics.totalVisitors} Unique Sessions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-xs">
            
            <div className="p-4 rounded-xl bg-slate-50 border border-[#EAEAEA] space-y-1">
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Step 1</span>
              <div className="font-bold text-sm text-[#18181B]">Page Arrival</div>
              <div className="text-lg font-bold font-mono text-slate-900">{totalVisitors}</div>
              <span className="text-[10px] text-slate-500">100% baseline</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-[#EAEAEA] space-y-1">
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Step 2</span>
              <div className="font-bold text-sm text-[#18181B]">CTA Clicks</div>
              <div className="text-lg font-bold font-mono text-slate-900">{ctaClicks}</div>
              <span className="text-[10px] text-slate-500 font-mono">
                {totalVisitors > 0 ? ((ctaClicks / totalVisitors) * 100).toFixed(0) : 0}% of visitors
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-[#EAEAEA] space-y-1">
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Step 3</span>
              <div className="font-bold text-sm text-[#18181B]">Form Focus</div>
              <div className="text-lg font-bold font-mono text-slate-900">{formStarts}</div>
              <span className="text-[10px] text-slate-500 font-mono">
                {totalVisitors > 0 ? ((formStarts / totalVisitors) * 100).toFixed(0) : 0}% of visitors
              </span>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
              <span className="text-amber-700 font-mono text-[10px] uppercase block">Step 4</span>
              <div className="font-bold text-sm text-amber-950">Lead Submitted</div>
              <div className="text-lg font-bold font-mono text-amber-900">{submissions}</div>
              <span className="text-[10px] text-amber-700 font-mono font-bold">
                {metrics.leadConversionRate}% conversion
              </span>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
              <span className="text-emerald-700 font-mono text-[10px] uppercase block">Step 5</span>
              <div className="font-bold text-sm text-emerald-950">Iris Demo Click</div>
              <div className="text-lg font-bold font-mono text-emerald-900">{demoClicks}</div>
              <span className="text-[10px] text-emerald-700 font-mono font-bold">
                {metrics.irisDemoConversionRate}% intent rate
              </span>
            </div>

          </div>
        </div>

        {/* Captured Leads Table */}
        <div className="p-6 sm:p-8 rounded-[2rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#18181B] font-serif">
                Captured Lead Submissions ({leads.length})
              </h3>
              <p className="text-xs text-slate-500">
                Contact information received from the free growth guide download form
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter leads..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 bg-slate-50 border border-[#EAEAEA] rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
                />
              </div>

              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#18181B] hover:bg-slate-800 text-white rounded-full text-xs font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center border border-dashed border-[#EAEAEA] rounded-2xl space-y-2">
              <Mail className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">No leads found</p>
              <p className="text-xs text-slate-400">
                Fill out the lead capture form on the landing page to test lead logging.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-[#EAEAEA] rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-[#EAEAEA] font-mono text-slate-500 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="px-4 py-3">First Name</th>
                    <th className="px-4 py-3">Business Email</th>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Submitted At</th>
                    <th className="px-4 py-3">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAEAEA] text-slate-700">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#18181B]">{lead.firstName}</td>
                      <td className="px-4 py-3 font-mono text-amber-900">{lead.email}</td>
                      <td className="px-4 py-3 text-slate-500">{lead.companyName || 'N/A'}</td>
                      <td className="px-4 py-3 font-mono text-slate-500">
                        {new Date(lead.submittedAt).toLocaleDateString()} {new Date(lead.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px]">
                          {lead.source}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Live Activity Telemetry Stream & Admin Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Event Stream */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-[2rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#18181B] font-serif">
                Live Activity Event Stream
              </h3>
              <span className="text-[11px] font-mono text-slate-400">
                Last {Math.min(events.length, 25)} events
              </span>
            </div>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {events.slice(0, 25).map((evt) => (
                <div
                  key={evt.id}
                  className="p-3 bg-slate-50 rounded-xl border border-[#EAEAEA] flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-900 text-[11px]">
                        {evt.type}
                      </span>
                      {evt.metadata?.percent && (
                        <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded">
                          {String(evt.metadata.percent)}%
                        </span>
                      )}
                    </div>
                    {evt.label && (
                      <span className="text-slate-500 text-[11px] block">{evt.label}</span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 shrink-0">
                    {new Date(evt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Management Controls */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-[2rem] bg-white border border-[#EAEAEA] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#18181B] font-serif">
                Administrative Control
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear test records before deploying live campaigns or export current leads to your CRM.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#EAEAEA]">
              <button
                onClick={handleExportCSV}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Lead List (CSV)</span>
              </button>

              <button
                onClick={handleClearData}
                className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-full text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Test Telemetry Data</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
