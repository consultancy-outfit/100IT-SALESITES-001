import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Community Short Breaks",
  tradingName: "Community Short Breaks IT Services",
  address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom",
  crn: "12345678",
  phone: "+44 (0) 20 7946 0000",
  email: "info@communityshortbreaks.it",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.",
    targetAudience: "SMEs looking for a reliable external IT department.",
    process: ["Audit & Assessment", "Onboarding", "24/7 Monitoring", "Remote & On-site Support"],
    benefits: ["Reduced downtime", "Predictable monthly costs", "Access to expert engineers"],
    startingPrice: "£250/month",
    icon: "ShieldCheck",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Protecting your business from evolving digital threats with advanced security protocols.",
    targetAudience: "Businesses handling sensitive data or regulated industries.",
    process: ["Vulnerability Scanning", "Threat Detection", "Employee Training", "Incident Response"],
    benefits: ["Data protection", "Regulatory compliance", "Peace of mind"],
    startingPrice: "£500/month",
    icon: "Lock",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Hosting",
    description: "Seamlessly transition your workflows to secure, scalable cloud environments.",
    targetAudience: "Companies looking to modernise and enable remote work.",
    process: ["Cloud Strategy", "Data Migration", "Optimisation", "Ongoing Management"],
    benefits: ["Scalability", "Cost efficiency", "Enhanced collaboration"],
    startingPrice: "£1,000 (one-off)",
    icon: "Cloud",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Expert advice to align your technology roadmap with your business goals.",
    targetAudience: "Leadership teams planning growth or digital transformation.",
    process: ["Business Analysis", "Roadmap Creation", "Technology Selection", "Implementation Oversight"],
    benefits: ["Strategic alignment", "ROI focus", "Future-proofed tech"],
    startingPrice: "£150/hour",
    icon: "Lightbulb",
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery & Backup",
    description: "Ensuring business continuity with robust data backup and rapid recovery plans.",
    targetAudience: "All businesses requiring zero data loss guarantees.",
    process: ["Risk Assessment", "Backup Strategy", "Regular Testing", "Recovery Execution"],
    benefits: ["Business continuity", "Data integrity", "Compliance"],
    startingPrice: "£150/month",
    icon: "RefreshCcw",
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential",
    price: "250",
    features: ["Remote Support", "Antivirus Protection", "Cloud Backups", "Monthly Reports"],
    support: "9am - 5pm Business Days",
    idealFor: "Small startups and micro-businesses",
    vatInfo: "Excluding VAT",
  },
  {
    name: "Professional",
    price: "750",
    features: ["On-site Support", "Advanced Security", "Network Monitoring", "vCIO Consulting"],
    support: "24/7 Critical Support",
    idealFor: "Growing SMEs with 10-50 employees",
    vatInfo: "Excluding VAT",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Dedicated Engineer", "Full Infrastructure Management", "Custom Compliance", "Unlimited Support"],
    support: "24/7 Priority Support",
    idealFor: "Large organisations with complex needs",
    vatInfo: "Contact for Quote",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "James Harrington",
    role: "Managing Director",
    company: "Harrington Logistics",
    content: "Community Short Breaks transformed our IT infrastructure. Their proactive approach saved us over £15,000 in potential downtime last year alone.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Thames Valley Legal",
    content: "The cybersecurity audit was eye-opening. We now feel completely secure and compliant with all UK data regulations.",
  },
  {
    name: "Robert Smith",
    role: "Founder",
    company: "TechScale UK",
    content: "Reliable, professional, and truly British. They understand the local market and provide support that actually works for us.",
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Digital Transformation for Retail",
    client: "London Fashion Hub",
    challenge: "Outdated legacy systems causing slow transactions.",
    solution: "Full cloud migration and POS integration.",
    result: "30% increase in transaction speed and £20k annual savings.",
  },
  {
    title: "Cybersecurity Overhaul",
    client: "Midlands Health Clinic",
    challenge: "High risk of data breaches due to weak protocols.",
    solution: "Implementation of multi-factor authentication and encryption.",
    result: "100% compliance audit pass and zero security incidents in 12 months.",
  }
];
