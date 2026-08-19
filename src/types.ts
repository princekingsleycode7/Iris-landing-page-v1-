export interface LeadSubmission {
  id: string;
  firstName: string;
  email: string;
  companyName?: string;
  submittedAt: string;
  source: string;
}

export type AnalyticsEventType = 
  | 'LANDING_PAGE_VIEW'
  | 'CTA_CLICK'
  | 'EBOOK_FORM_START'
  | 'EBOOK_FORM_COMPLETED'
  | 'EMAIL_SUBMISSION_SUCCESS'
  | 'SCROLL_DEPTH'
  | 'GUIDE_DOWNLOAD_CLICK'
  | 'GUIDE_READER_OPEN'
  | 'PREVIEW_PAGE_SWITCH'
  | 'IRIS_DEMO_CLICK'
  | 'FAQ_INTERACTION'
  | 'CHECKLIST_TOGGLE';

export interface AnalyticsEvent {
  id: string;
  type: AnalyticsEventType;
  timestamp: string;
  label?: string;
  metadata?: Record<string, unknown>;
}

export interface EbookPagePreview {
  id: string;
  pageNumber: number;
  title: string;
  subtitle: string;
  excerpt: string[];
  type: 'checklist' | 'framework' | 'playbook';
  badge: string;
}

export interface ConversionLeak {
  id: number;
  title: string;
  iconName: string;
  headline: string;
  description: string;
  lossPoint: string;
}

export interface GuideChapter {
  number: string;
  title: string;
  description: string;
  keyTakeaway: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
