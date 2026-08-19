import { ConversionLeak, GuideChapter, EbookPagePreview, FAQItem } from '../types';

export const HERO_DATA = {
  eyebrow: "FREE BUSINESS GROWTH GUIDE",
  mainHeadline: "How to Achieve Your Next Business Milestone Without Increasing Your Costs",
  supportingHeadline: "Learn how to turn more of the people already visiting your website and calling your business into paying customers.",
  supportingParagraph: "You don't always need more traffic, more advertising, or more employees to grow. Sometimes, the biggest opportunity is getting more value from the customers who are already trying to reach you. This free step-by-step guide shows you how.",
  primaryCTA: "GET THE FREE GUIDE →",
  microCopy: "Free to download - No credit card required",
  ebookCoverTitle: "TURN MORE VISITORS & CALLERS INTO CUSTOMERS",
  ebookCoverSubtitle: "The practical growth playbook for businesses that want to do more without hiring more.",
  alternativeTitle: "How to Achieve Your Next Business Milestone Without Increasing Your Costs",
  alternativeSubtitle: "The Step-by-Step Guide to Turning More Website Visitors and Phone Callers Into Paying Customers"
};

export const CONVERSION_LEAKS: ConversionLeak[] = [
  {
    id: 1,
    title: "Slow Responses",
    iconName: "Clock",
    headline: "Speed is the deciding factor in modern inbound inquiries.",
    description: "Customers expect quick answers. If they don't get one within minutes, they simply move on to the next competitor on their search list.",
    lossPoint: "78% of customers buy from the business that responds first."
  },
  {
    id: 2,
    title: "Unanswered Calls",
    iconName: "PhoneOff",
    headline: "High-intent prospects lost at the moment of peak interest.",
    description: "A customer who calls your business is already showing strong intent. Missing that call means missing the opportunity to have a conversation.",
    lossPoint: "Over 60% of callers will not leave a voicemail if their call goes unanswered."
  },
  {
    id: 3,
    title: "Limited Availability",
    iconName: "Moon",
    headline: "Customers look for solutions outside 9-to-5 schedules.",
    description: "Customers don't always contact businesses during convenient working hours. Evenings, weekends, holidays, and busy periods create massive blind spots.",
    lossPoint: "42% of customer inquiries arrive after standard operating hours."
  },
  {
    id: 4,
    title: "Repetitive Questions",
    iconName: "HelpCircle",
    headline: "Skilled team members trapped answering routine FAQs.",
    description: "Your team spends hours answering the same questions repeatedly: pricing estimates, location, opening hours, service scope, and scheduling availability.",
    lossPoint: "Up to 65% of inbound inquiries ask about the same 5 basic details."
  },
  {
    id: 5,
    title: "No Follow-Up",
    iconName: "UserX",
    headline: "Interested leads slipping through the cracks without structured touches.",
    description: "Someone can show interest today and still not be ready to buy on the spot. Without consistent follow-up, potential customers simply disappear.",
    lossPoint: "80% of sales require 5 follow-up contacts, yet 44% of companies never follow up once."
  }
];

export const GUIDE_CHAPTERS: GuideChapter[] = [
  {
    number: "01",
    title: "Respond Faster",
    description: "Learn how response speed affects customer experience and what you can do to reduce the time between a customer's inquiry and your response.",
    keyTakeaway: "Framework for cutting first-response latency from hours to seconds."
  },
  {
    number: "02",
    title: "Convert More Website Visitors",
    description: "Learn how to turn website traffic into conversations instead of simply sending visitors to a page and hoping they contact you.",
    keyTakeaway: "Tactical prompts and micro-touchpoints that turn passive scrollers into inquiries."
  },
  {
    number: "03",
    title: "Handle More Phone Calls",
    description: "Discover how to create a better process for handling inbound calls, especially when your team is busy.",
    keyTakeaway: "Eliminating the busy signal and voicemail graveyard forever."
  },
  {
    number: "04",
    title: "Stay Available Beyond Business Hours",
    description: "Learn how businesses can provide useful information and capture opportunities even when their regular team isn't available.",
    keyTakeaway: "24/7 lead intake blueprint without paying overtime or shift wages."
  },
  {
    number: "05",
    title: "Capture Better Customer Information",
    description: "Learn what information you should collect when someone contacts your business and why it matters.",
    keyTakeaway: "The 4 critical qualifier questions that make team handoffs frictionless."
  },
  {
    number: "06",
    title: "Follow Up Without Chasing Customers",
    description: "Learn how to create a consistent follow-up process so interested prospects don't simply disappear.",
    keyTakeaway: "Automated, non-intrusive follow-up cadence templates."
  },
  {
    number: "07",
    title: "Reduce Repetitive Work",
    description: "Identify common customer interactions that can be streamlined or automated.",
    keyTakeaway: "Audit worksheet to identify 10+ hours per week of automatable conversations."
  },
  {
    number: "08",
    title: "Scale Customer Service Without Scaling Payroll",
    description: "Learn how technology and automation can increase your business's capacity without requiring a proportional increase in employees.",
    keyTakeaway: "Cost-to-capacity matrix for sustainable business growth."
  }
];

export const PREVIEW_PAGES: EbookPagePreview[] = [
  {
    id: "checklist",
    pageNumber: 14,
    title: "The Customer Conversion Checklist",
    subtitle: "Before you spend another ₦1 on advertising, audit your foundation:",
    badge: "Chapter 2 • Core Audit",
    type: "checklist",
    excerpt: [
      "Does every customer inquiry receive a response within 5 minutes?",
      "How quickly do we respond when inquiries spike during peak hours?",
      "What happens when someone calls or messages after hours?",
      "Are missed calls automatically followed up via SMS or callback?",
      "Can customers get answers to routine FAQs without waiting for an employee?",
      "Are lead details and requirements being captured into a centralized log?",
      "Are interested customers consistently followed up with after initial contact?"
    ]
  },
  {
    id: "framework",
    pageNumber: 22,
    title: "The 5-Minute Inbound Response Matrix",
    subtitle: "How conversion probability degrades over time:",
    badge: "Chapter 4 • Speed Framework",
    type: "framework",
    excerpt: [
      "< 5 Minutes: 391% higher qualification rate and 21x lead conversion.",
      "30 Minutes: Customer interest drops by 60% as they explore alternative options.",
      "4 Hours+: Inbound lead converts at less than 3% chance.",
      "Next Business Day: Lead is effectively cold or closed with a competitor."
    ]
  },
  {
    id: "playbook",
    pageNumber: 31,
    title: "The Zero-Payroll Capacity Blueprint",
    subtitle: "Separating high-value human empathy from repetitive triage:",
    badge: "Chapter 8 • Scaling Model",
    type: "playbook",
    excerpt: [
      "Tier 1 (Automated): Instant greeting, FAQ answers, business hours, lead intake, appointment booking.",
      "Tier 2 (Qualified Handoff): High-value quote requests, custom consultations, urgent escalations.",
      "Result: 1 staff member handles 4x the client volume with zero burnout."
    ]
  }
];

export const VALUE_REINFORCEMENTS = [
  "The complete step-by-step guide (PDF & Interactive Reader)",
  "Customer conversion checklist",
  "Website visitor conversion framework",
  "Phone call handling framework",
  "Follow-up framework",
  "Automation opportunities checklist"
];

export const IRIS_FEATURES = [
  "Answer incoming calls instantly with natural human-like voice",
  "Respond to customer questions with 100% company-accurate knowledge",
  "Capture lead information and contact details flawlessly",
  "Qualify potential customers based on your custom criteria",
  "Book appointments and sync with your calendar in real time",
  "Handle routine customer requests without human intervention",
  "Provide information outside normal business hours (24/7/365)",
  "Transfer important conversations to your team seamlessly",
  "Keep clean records and searchable transcripts of all interactions"
];

export const WHAT_YOU_CAN_EXPECT = [
  {
    title: "Fast customer responses",
    desc: "Cut response times from hours or days to mere seconds on every communication channel."
  },
  {
    title: "Consistent customer experience",
    desc: "Deliver polite, accurate, and prompt service on every single interaction, without bad days."
  },
  {
    title: "Better lead capture",
    desc: "Never lose a contact detail or high-intent prospect due to a busy phone line or unmonitored inbox."
  },
  {
    title: "Reduced repetitive workload",
    desc: "Free your human team from answering the same 5 questions repeatedly so they can focus on revenue."
  },
  {
    title: "Greater availability",
    desc: "Serve customers after hours, on weekends, and during holidays without paying overtime."
  },
  {
    title: "More organized customer interactions",
    desc: "Maintain structured summaries, lead records, and qualification tags for every conversation."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is the guide really free?",
    answer: "Yes. The guide is completely free. No credit card is required. You can read it immediately online or save the PDF."
  },
  {
    question: "Is this only for businesses that already use AI?",
    answer: "No. The guide is designed for business owners regardless of their current technology setup. It starts with simple operational frameworks before discussing automation tools."
  },
  {
    question: "Do I need to hire an AI expert to implement these ideas?",
    answer: "No. The guide focuses on practical processes and systems that businesses can gradually implement without specialized technical skills."
  },
  {
    question: "Is Iris a replacement for my employees?",
    answer: "No. Iris is designed to support your team by handling routine customer interactions and helping your business remain available, giving your staff more time for complex work."
  },
  {
    question: "Can Iris handle phone calls?",
    answer: "Yes. Iris is designed to act as an AI receptionist for incoming customer conversations with natural vocal cadence and instant response times."
  },
  {
    question: "Can Iris transfer calls to my team?",
    answer: "If the configured Iris setup supports call transfer, important calls and high-priority inquiries can be routed directly to the appropriate member of your team."
  },
  {
    question: "Can Iris work outside business hours?",
    answer: "Yes. One of the primary benefits of an AI receptionist is the ability to provide reliable customer availability beyond normal staff working hours, including nights and weekends."
  }
];
