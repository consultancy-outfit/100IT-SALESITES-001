import {
  Shield,
  Cloud,
  Monitor,
  Network,
  Database,
  Lock,
  Zap,
} from "lucide-react";
import { Service, PricingPlan, Testimonial, CaseStudy } from "./types";

export const COMPANY_DETAILS = {
  name: "CWD Outreach Service",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17049973",
  phone: "0173 748 6141",
  email: "info@cwdoutreachservice.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description:
      "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT estate.",
    icon: Monitor,
    targetAudience: "SMEs looking for a reliable external IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Support", "Review"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert advice"],
    startingPrice: "£250/month",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description:
      "Advanced threat protection, vulnerability assessments, and employee security training.",
    icon: Shield,
    targetAudience:
      "Businesses handling sensitive data or requiring compliance.",
    process: ["Risk Assessment", "Implementation", "Training", "Monitoring"],
    benefits: ["Data protection", "Compliance", "Peace of mind"],
    startingPrice: "£500/audit",
  },
  {
    id: "cloud-migration",
    title: "Cloud Infrastructure",
    description:
      "Seamless migration to Azure, AWS, or Google Cloud with ongoing optimisation.",
    icon: Cloud,
    targetAudience: "Companies looking to modernise their infrastructure.",
    process: ["Strategy", "Migration", "Optimisation", "Management"],
    benefits: ["Scalability", "Remote access", "Cost efficiency"],
    startingPrice: "£1,000/project",
  },
  {
    id: "network-design",
    title: "Network Design & Security",
    description:
      "Robust, high-speed networking solutions tailored to your office or remote setup.",
    icon: Network,
    targetAudience: "Growing teams needing reliable connectivity.",
    process: ["Survey", "Design", "Installation", "Testing"],
    benefits: ["High performance", "Secure connections", "Future-proof"],
    startingPrice: "£750/setup",
  },
  {
    id: "data-backup",
    title: "Data Backup & Recovery",
    description:
      "Automated off-site backups and rapid disaster recovery planning.",
    icon: Database,
    targetAudience: "Any business where data loss is not an option.",
    process: ["Planning", "Setup", "Testing", "Ongoing Backup"],
    benefits: ["Zero data loss", "Quick recovery", "Compliance"],
    startingPrice: "£150/month",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description:
      "Expert guidance on digital transformation and technology roadmaps.",
    icon: Zap,
    targetAudience: "Leadership teams planning for growth.",
    process: ["Discovery", "Analysis", "Roadmap", "Execution"],
    benefits: ["Aligned strategy", "ROI focused", "Innovation"],
    startingPrice: "£150/hour",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential",
    price: "£25",
    features: [
      "Remote Support",
      "Antivirus Protection",
      "Patch Management",
      "Email Security",
      "9/5 Helpdesk Access",
    ],
    supportLevel: "Standard Remote",
    idealFor: "Small businesses with basic IT needs",
    vatInfo: "Prices exclude VAT at 20%",
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "£45",
    features: [
      "Everything in Essential",
      "On-site Support (Local)",
      "Cloud Backup (1TB)",
      "Network Monitoring",
      "Priority Response",
    ],
    supportLevel: "Priority Remote & On-site",
    idealFor: "Growing SMEs with critical IT dependencies",
    vatInfo: "Prices exclude VAT at 20%",
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "£85",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Cyber Essentials Prep",
      "Disaster Recovery Suite",
      "24/7 Emergency Support",
    ],
    supportLevel: "Full Managed Service",
    idealFor: "Larger organisations requiring 24/7 uptime",
    vatInfo: "Prices exclude VAT at 20%",
    cta: "Contact Sales",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "James Harrison",
    role: "Managing Director",
    company: "Midlands Logistics Ltd",
    content:
      "CWD Outreach has transformed our remote working capabilities. Their response time is exceptional, and they speak plain English, not just tech-jargon.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Telford Creative Agency",
    content:
      "The cybersecurity audit they performed saved us from a potential breach. Professional, thorough, and highly recommended for any UK business.",
  },
  {
    name: "Robert Thompson",
    role: "Founder",
    company: "Thompson & Co Solicitors",
    content:
      "Reliable IT is critical for our legal practice. CWD provides the peace of mind we need to focus on our clients.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Cloud Migration Success",
    client: "Retail Group UK",
    challenge:
      "Legacy on-premise servers causing frequent downtime during peak sales periods.",
    solution: "Full migration to Azure with auto-scaling capabilities.",
    result:
      "Zero downtime during Black Friday and a £12,000 annual saving on hardware maintenance.",
  },
  {
    title: "Security Infrastructure Overhaul",
    client: "FinTech Startup",
    challenge:
      "Needed Cyber Essentials Plus certification to win government contracts.",
    solution:
      "Implemented end-to-end encryption, MFA, and robust access controls.",
    result: "Achieved certification in 4 weeks, securing a £500,000 contract.",
  },
];
