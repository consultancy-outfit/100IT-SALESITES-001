import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "SENSE Supported Living Services West Midlands",
  brandName: "SENSE Supported Living",
  address: "Innovation House, 12 Business Park Way, Birmingham, B1 1AA, United Kingdom",
  crn: "12345678",
  phone: "+44 (0) 121 555 0123",
  email: "contact@sense-supported-living.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and proactive support for your entire IT infrastructure.",
    targetAudience: "SMEs looking for a reliable outsourced IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Support", "Review"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert advice"],
    startingPrice: "£250/month",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    description: "Seamless transition to Microsoft Azure or AWS with managed hosting services.",
    targetAudience: "Businesses looking to modernize their infrastructure.",
    process: ["Assessment", "Strategy", "Migration", "Optimization"],
    benefits: ["Scalability", "Remote access", "Cost efficiency"],
    startingPrice: "£500",
    icon: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Compliance",
    description: "Advanced threat protection, security audits, and Cyber Essentials certification support.",
    targetAudience: "Companies handling sensitive data or requiring compliance.",
    process: ["Vulnerability Scan", "Patching", "Training", "Certification"],
    benefits: ["Data protection", "Peace of mind", "Regulatory compliance"],
    startingPrice: "£750",
    icon: "Lock",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Design and implementation of high-performance wired and wireless networks.",
    targetAudience: "New office setups or businesses with slow connectivity.",
    process: ["Survey", "Design", "Installation", "Testing"],
    benefits: ["High speed", "Reliability", "Future-proof"],
    startingPrice: "£1,200",
    icon: "Network",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "disaster-recovery",
    title: "Backup & Disaster Recovery",
    description: "Robust data backup solutions and business continuity planning.",
    targetAudience: "Any business where data loss would be catastrophic.",
    process: ["Risk Assessment", "Backup Setup", "Testing", "Recovery Drills"],
    benefits: ["Zero data loss", "Fast recovery", "Business continuity"],
    startingPrice: "£150/month",
    icon: "RotateCcw",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Expert guidance on digital transformation and technology roadmaps.",
    targetAudience: "Leadership teams needing technical direction.",
    process: ["Discovery", "Analysis", "Roadmap", "Execution"],
    benefits: ["Strategic alignment", "ROI focus", "Innovation"],
    startingPrice: "£95/hour",
    icon: "Lightbulb",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential Support",
    price: "£25",
    features: ["Remote Support", "Antivirus", "Patch Management", "Email Support"],
    supportLevel: "9am - 5pm Business Days",
    idealFor: "Small businesses with basic needs",
    cta: "Start Essential",
  },
  {
    name: "Business Pro",
    price: "£45",
    features: ["Remote & On-site Support", "Advanced Security", "Cloud Backup", "Priority Response"],
    supportLevel: "24/7 Critical Monitoring",
    idealFor: "Growing SMEs",
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "£85",
    features: ["Dedicated Account Manager", "Strategic Roadmap", "Full Compliance Audit", "Unlimited Support"],
    supportLevel: "24/7/365 Dedicated Support",
    idealFor: "Large organizations",
    cta: "Contact Sales",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alistair Graham",
    role: "Managing Director",
    company: "Midlands Logistics Ltd",
    content: "SENSE IT has transformed our operations. Their proactive approach means we rarely have issues, and when we do, they're solved in minutes.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "West Bromwich Care Group",
    content: "The transition to the cloud was seamless. Their team understood our unique needs in the care sector perfectly.",
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "Birmingham Tech Hub",
    content: "Reliable, professional, and genuinely UK-focused. They are our go-to partner for all things infrastructure.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Retail Chain Infrastructure Overhaul",
    challenge: "Outdated legacy systems causing frequent downtime across 12 UK stores.",
    solution: "Implemented a centralized cloud-managed network and modern POS systems.",
    result: "99.9% uptime achieved and 20% increase in transaction speed.",
    value: "£45,000 annual savings in maintenance costs.",
  },
  {
    title: "Healthcare Data Security",
    challenge: "Need for GDPR-compliant secure storage for sensitive patient records.",
    solution: "Deployed an encrypted private cloud with multi-factor authentication.",
    result: "Full compliance achieved and zero security breaches in 2 years.",
    value: "Protected £2m+ in potential regulatory fines.",
  },
];
