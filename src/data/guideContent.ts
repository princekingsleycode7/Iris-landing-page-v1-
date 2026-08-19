export interface FullGuideChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readingTime: string;
  sections: {
    heading: string;
    paragraphs: string[];
    callout?: {
      title: string;
      content: string;
    };
    actionChecklist?: string[];
  }[];
}

export const FULL_GUIDE_DATA = {
  title: "Turn More Visitors & Callers Into Customers",
  subtitle: "A practical guide to growing your business without adding more employees",
  author: "Iris Growth & Automation Research",
  version: "2026 Practical Milestone Edition",
  totalPages: 36,
  chapters: [
    {
      id: "ch1",
      number: "01",
      title: "Respond Faster",
      subtitle: "The Science of Speed to Lead and Response Latency",
      readingTime: "4 min read",
      sections: [
        {
          heading: "Why Speed Trumps Pitch Perfection",
          paragraphs: [
            "In modern commerce, the buyer's journey is compressed. When someone searches for a service or reaches out with a question, their intent is at its highest point in that exact minute.",
            "If they do not receive a response within 5 minutes, their likelihood of engaging drops by more than 80%. They open a new browser tab or call the next listing.",
            "Reducing your initial response latency is the single highest-ROI improvement you can make before spending another dollar on advertising."
          ],
          callout: {
            title: "Key Rule of Thumb",
            content: "A quick, accurate 30-second answer beats a detailed email sent 4 hours later every single time."
          },
          actionChecklist: [
            "Measure your team's current median first-response time across email, web forms, and phone.",
            "Eliminate dead-end contact forms that only say 'Thank you, we will get back to you in 24-48 hours'.",
            "Set up instant auto-acknowledgements with immediate next steps and self-serve answers."
          ]
        }
      ]
    },
    {
      id: "ch2",
      number: "02",
      title: "Convert More Website Visitors",
      subtitle: "Moving from Passive Brochureware to Active Conversations",
      readingTime: "5 min read",
      sections: [
        {
          heading: "The Trap of the Static Brochure Website",
          paragraphs: [
            "Most business websites function like digital brochures. They present information and hope the visitor takes the initiative to find the tiny contact page.",
            "High-converting businesses treat their website like a welcoming front desk. When a visitor lands on a pricing or service page, an active prompt invites them into a low-friction interaction."
          ],
          actionChecklist: [
            "Place high-contrast, frictionless contact touchpoints on every key service page.",
            "Offer direct answers to the top 3 questions visitors have (price range, availability, process).",
            "Reduce form fields to the bare minimum (Name + Email or Phone)."
          ]
        }
      ]
    },
    {
      id: "ch3",
      number: "03",
      title: "Handle More Phone Calls",
      subtitle: "Rescuing Inbound Voice Opportunities During Peak Hours",
      readingTime: "4 min read",
      sections: [
        {
          heading: "The Hidden Cost of the Busy Signal and Voicemail",
          paragraphs: [
            "A customer who calls your business has chosen the highest-effort communication channel available. They want an immediate human answer.",
            "When that call goes to voicemail, over 60% hang up without leaving a message. That customer is lost permanently.",
            "Implementing intelligent call overflow ensures every inbound caller is greeted, their question answered, and their contact recorded even when staff are on other calls."
          ]
        }
      ]
    },
    {
      id: "ch4",
      number: "04",
      title: "Stay Available Beyond Business Hours",
      subtitle: "Capturing the 42% of Inquiries That Arrive After 5 PM",
      readingTime: "4 min read",
      sections: [
        {
          heading: "The After-Hours Revenue Leak",
          paragraphs: [
            "Decision makers and consumers frequently browse and research services at night, early in the morning, or over weekends.",
            "If your business shuts down completely outside 9 AM - 5 PM, you forfeit nearly half of all inbound opportunities to 24/7 automated competitors."
          ],
          actionChecklist: [
            "Ensure after-hours callers can book appointments, leave structured details, and get pricing info.",
            "Send an instant text message to after-hours callers confirming their inquiry has been received."
          ]
        }
      ]
    },
    {
      id: "ch5",
      number: "05",
      title: "Capture Better Customer Information",
      subtitle: "The 4 Essential Qualification Questions",
      readingTime: "3 min read",
      sections: [
        {
          heading: "What to Ask at the First Touchpoint",
          paragraphs: [
            "Don't overwhelm the lead with a 10-field form. Instead, capture:",
            "1. Primary objective / specific service required\n2. Urgency / timeline\n3. Preferred contact method\n4. Decision maker role or company context"
          ]
        }
      ]
    },
    {
      id: "ch6",
      number: "06",
      title: "Follow Up Without Chasing Customers",
      subtitle: "Polite, Consistent Follow-Up Systems That Close",
      readingTime: "4 min read",
      sections: [
        {
          heading: "Why Follow-Up Fails in Most Small Businesses",
          paragraphs: [
            "Without an automated pipeline, follow-ups rely entirely on human memory. When the team gets busy, follow-up is the first thing dropped.",
            "A structured 3-touch follow-up sequence (Day 1 check-in, Day 3 helpful resource, Day 7 final touch) recovers up to 35% of stalled leads."
          ]
        }
      ]
    },
    {
      id: "ch7",
      number: "07",
      title: "Reduce Repetitive Work",
      subtitle: "Reclaiming 10+ Hours Per Week of Skilled Labor",
      readingTime: "5 min read",
      sections: [
        {
          heading: "The Repetitive FAQ Audit",
          paragraphs: [
            "Ask your team to write down every question they answer more than 3 times a week. You will find that 70% of inbound calls revolve around: 'Do you take my insurance / do you service my zip code / how much does X start at / what are your hours?'.",
            "Offloading these predictable questions to an intelligent assistant frees your skilled team for high-value sales and customer fulfillment."
          ]
        }
      ]
    },
    {
      id: "ch8",
      number: "08",
      title: "Scale Customer Service Without Scaling Payroll",
      subtitle: "The Hybrid Human + Automation Operational Model",
      readingTime: "5 min read",
      sections: [
        {
          heading: "Multiplying Capacity Safely",
          paragraphs: [
            "The traditional growth playbook assumed that to double client inquiries, you must double reception and front-desk staff.",
            "In modern operations, intelligent AI reception handles frontline triage 24/7, escalating warm, qualified opportunities directly to your human specialists.",
            "Your existing team stays energized, overhead remains fixed, and customer conversion rates climb."
          ],
          callout: {
            title: "Conclusion & Next Steps",
            content: "Start with the Customer Conversion Checklist on page 14. Fix the leaks one by one."
          }
        }
      ]
    }
  ]
};
