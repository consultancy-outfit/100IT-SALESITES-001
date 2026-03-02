import { Service, PricingTier, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Greater Manchester",
  address: "38 Eade Road, London, England, N4 1DH",
  crn: "17049309",
  phone: "0161 410 1860",
  email: "info@greatermanchesterltd.co.uk",
  hours: "Mon-Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    name: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.",
    targetAudience: "SMEs looking for a reliable, outsourced IT department.",
    process: ["Initial Audit", "Onboarding", "24/7 Monitoring", "Helpdesk Support", "Quarterly Reviews"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert advice", "Security updates"],
    startingPrice: "£250/month",
    icon: "ShieldCheck",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Solutions",
    overview: "Advanced threat protection, vulnerability assessments, and employee security training.",
    targetAudience: "Businesses handling sensitive data or requiring Cyber Essentials certification.",
    process: ["Risk Assessment", "Security Implementation", "Employee Training", "Continuous Monitoring"],
    benefits: ["Data protection", "Compliance assurance", "Peace of mind", "Incident response"],
    startingPrice: "£450/month",
    icon: "Lock",
  },
  {
    id: "cloud-migration",
    name: "Cloud Migration & Hosting",
    overview: "Seamless transition to Azure or AWS with managed hosting and backup solutions.",
    targetAudience: "Companies looking to modernise their infrastructure and enable remote work.",
    process: ["Cloud Readiness Assessment", "Migration Strategy", "Execution", "Post-Migration Support"],
    benefits: ["Scalability", "Remote accessibility", "Cost efficiency", "Disaster recovery"],
    startingPrice: "£1,200 (One-off setup)",
    icon: "Cloud",
  },
  {
    id: "it-consultancy",
    name: "IT Strategy & Consultancy",
    overview: "Strategic planning to align your technology with your business goals for long-term growth.",
    targetAudience: "Growing businesses needing a technology roadmap.",
    process: ["Business Goal Alignment", "Tech Audit", "Roadmap Creation", "Implementation Oversight"],
    benefits: ["Strategic advantage", "Optimised ROI", "Future-proofing", "Expert leadership"],
    startingPrice: "£150/hour",
    icon: "Lightbulb",
  },
  {
    id: "network-solutions",
    name: "Network & Connectivity",
    overview: "High-speed business broadband, leased lines, and secure Wi-Fi infrastructure.",
    targetAudience: "Offices requiring robust and fast internal and external connectivity.",
    process: ["Site Survey", "Design", "Installation", "Testing & Optimisation"],
    benefits: ["Fast speeds", "Reliable connection", "Secure Wi-Fi", "Scalable bandwidth"],
    startingPrice: "£85/month",
    icon: "Wifi",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Essential",
    price: "£25",
    features: ["Remote Support", "Antivirus Included", "Patch Management", "Email Support"],
    supportLevel: "Standard (9-5)",
    idealFor: "Sole traders & Small startups",
    vatInfo: "Prices exclude VAT at 20%",
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "£45",
    features: ["Remote & On-site Support", "Advanced Security", "Cloud Backup", "Priority Helpdesk"],
    supportLevel: "Priority (8-6)",
    idealFor: "Growing SMEs (10-50 users)",
    vatInfo: "Prices exclude VAT at 20%",
    cta: "Choose Professional",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["24/7 Support", "Dedicated Account Manager", "Full IT Strategy", "Disaster Recovery"],
    supportLevel: "24/7/365",
    idealFor: "Large organisations (50+ users)",
    vatInfo: "Bespoke pricing based on requirements",
    cta: "Contact for Quote",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "James Harrison",
    role: "Managing Director",
    company: "Northern Logistics Ltd",
    content: "Greater Manchester transformed our outdated systems. Their proactive approach saved us thousands in potential downtime.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Peak Design Studio",
    content: "The cybersecurity audit was eye-opening. We now feel much more secure and compliant with GDPR requirements.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Cloud Migration for Retail Group",
    industry: "Retail",
    challenge: "Legacy servers causing slow transactions and frequent crashes.",
    solution: "Full migration to Microsoft Azure with redundant backups.",
    result: "35% increase in transaction speed and £12,000 annual savings on hardware maintenance.",
  },
  {
    title: "Security Overhaul for Law Firm",
    industry: "Legal",
    challenge: "High risk of data breach due to outdated security protocols.",
    solution: "Implemented multi-factor authentication and advanced endpoint protection.",
    result: "Achieved Cyber Essentials Plus certification and zero security incidents in 12 months.",
  },
];
