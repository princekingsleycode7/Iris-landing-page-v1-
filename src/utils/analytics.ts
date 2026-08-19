import { AnalyticsEvent, AnalyticsEventType, LeadSubmission } from '../types';

const ANALYTICS_STORAGE_KEY = 'iris_analytics_events';
const LEADS_STORAGE_KEY = 'iris_lead_submissions';
const VISITOR_ID_KEY = 'iris_visitor_id';

export function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = 'vis_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

export function trackEvent(type: AnalyticsEventType, label?: string, metadata?: Record<string, unknown>): AnalyticsEvent {
  const newEvent: AnalyticsEvent = {
    id: 'evt_' + Math.random().toString(36).substring(2, 9),
    type,
    timestamp: new Date().toISOString(),
    label,
    metadata: {
      ...metadata,
      visitorId: getVisitorId(),
      url: window.location.href,
      screenWidth: window.innerWidth,
    },
  };

  try {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const events: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];
    events.unshift(newEvent);
    // Keep max 200 events in client storage
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(events.slice(0, 200)));
    
    // Dispatch custom event so UI components or analytics inspector can update dynamically
    window.dispatchEvent(new CustomEvent('iris_analytics_update', { detail: newEvent }));
  } catch (err) {
    console.warn('Failed to save analytics event', err);
  }

  return newEvent;
}

export function getStoredEvents(): AnalyticsEvent[] {
  try {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveLeadSubmission(lead: Omit<LeadSubmission, 'id' | 'submittedAt'>): LeadSubmission {
  const newSubmission: LeadSubmission = {
    id: 'lead_' + Math.random().toString(36).substring(2, 9),
    ...lead,
    submittedAt: new Date().toISOString(),
  };

  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    const leads: LeadSubmission[] = raw ? JSON.parse(raw) : [];
    leads.unshift(newSubmission);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));

    trackEvent('EMAIL_SUBMISSION_SUCCESS', `Lead: ${lead.email}`, {
      leadId: newSubmission.id,
      firstName: lead.firstName,
      company: lead.companyName || 'N/A'
    });
  } catch (err) {
    console.warn('Failed to save lead', err);
  }

  return newSubmission;
}

export function getStoredLeads(): LeadSubmission[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getAnalyticsMetrics() {
  const events = getStoredEvents();
  const leads = getStoredLeads();

  const pageViews = events.filter(e => e.type === 'LANDING_PAGE_VIEW').length;
  const ctaClicks = events.filter(e => e.type === 'CTA_CLICK').length;
  const formStarts = events.filter(e => e.type === 'EBOOK_FORM_START').length;
  const formCompletions = events.filter(e => e.type === 'EBOOK_FORM_COMPLETED' || e.type === 'EMAIL_SUBMISSION_SUCCESS').length;
  const irisDemoClicks = events.filter(e => e.type === 'IRIS_DEMO_CLICK').length;
  const guideDownloads = events.filter(e => e.type === 'GUIDE_DOWNLOAD_CLICK' || e.type === 'GUIDE_READER_OPEN').length;

  const totalVisitors = Math.max(1, new Set(events.map(e => (e.metadata?.visitorId as string) || 'default')).size);
  const emailSubmissions = leads.length;

  // Track conversion rate: Email submissions / unique landing page visitors
  const leadConversionRate = totalVisitors > 0 ? ((emailSubmissions / totalVisitors) * 100).toFixed(1) : '0.0';
  
  // Track conversion rate: Iris demo clicks / email submissions
  const irisDemoConversionRate = emailSubmissions > 0 ? ((irisDemoClicks / emailSubmissions) * 100).toFixed(1) : '0.0';

  return {
    totalVisitors,
    pageViews,
    ctaClicks,
    formStarts,
    formCompletions,
    emailSubmissions,
    irisDemoClicks,
    guideDownloads,
    leadConversionRate,
    irisDemoConversionRate,
    events
  };
}
