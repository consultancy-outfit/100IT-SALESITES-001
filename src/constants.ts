import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Draycombe House",
  address: "Not Available",
  crn: "Not Available",
  phone: "0161 410 1874",
  email: "info@greatermanchesterspecialistsupportservice.co.uk",
  hours: "Not Available",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.",
    targetAudience: "Small to medium-sized UK businesses looking for reliable, outsourced IT management.",
    process: ["Initial Audit", "Infrastructure Setup", "24/7 Monitoring", "Regular Maintenance", "Monthly Reporting"],
    benefits: ["Reduced Downtime", "Predictable Costs", "Expert Support", "Enhanced Security"],
    startingPrice: "£450",
    icon: "ShieldCheck",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Advanced threat protection, vulnerability assessments, and employee security training.",
    targetAudience: "Enterprises and professional service firms handling sensitive client data.",
    process: ["Risk Assessment", "Strategy Development", "Implementation", "Continuous Monitoring", "Incident Response"],
    benefits: ["Data Protection", "Regulatory Compliance", "Peace of Mind", "Threat Prevention"],
    startingPrice: "£750",
    icon: "Lock",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Strategy",
    description: "Seamless transition to Azure, AWS, or Google Cloud with minimal business disruption.",
    targetAudience: "Businesses looking to modernize their infrastructure and enable remote work.",
    process: ["Readiness Assessment", "Cloud Strategy", "Migration Planning", "Execution", "Optimization"],
    benefits: ["Scalability", "Cost Efficiency", "Flexibility", "Disaster Recovery"],
    startingPrice: "£1,200",
    icon: "Cloud",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Design, installation, and management of high-performance wired and wireless networks.",
    targetAudience: "Offices, warehouses, and retail spaces requiring robust connectivity.",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Configuration", "Testing"],
    benefits: ["High Speed", "Reliability", "Secure Access", "Future-Proofing"],
    startingPrice: "£800",
    icon: "Network",
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy & Strategy",
    description: "Strategic technology planning to align your IT investments with business goals.",
    targetAudience: "Leadership teams needing expert guidance on digital transformation.",
    process: ["Discovery", "Analysis", "Strategic Roadmap", "Implementation Support", "Review"],
    benefits: ["Strategic Alignment", "ROI Optimization", "Innovation", "Competitive Edge"],
    startingPrice: "£150/hr",
    icon: "Lightbulb",
  },
  {
    id: "disaster-recovery",
    title: "Backup & Disaster Recovery",
    description: "Robust data backup solutions and rapid recovery plans to protect your business continuity.",
    targetAudience: "Any business where data loss would be catastrophic.",
    process: ["Data Audit", "Backup Strategy", "Solution Deployment", "Regular Testing", "Recovery Support"],
    benefits: ["Business Continuity", "Data Integrity", "Fast Recovery", "Risk Mitigation"],
    startingPrice: "£250",
    icon: "Database",
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential Support",
    price: "£299",
    features: ["Remote Support", "9/5 Helpdesk", "Antivirus Management", "Patch Management", "Monthly Health Check"],
    support: "Standard Business Hours",
    idealFor: "Small startups and micro-businesses.",
    vatInfo: "Excluding VAT",
    cta: "Start with Essential",
  },
  {
    name: "Professional",
    price: "£599",
    features: ["On-site & Remote Support", "Priority 24/7 Helpdesk", "Advanced Cybersecurity", "Cloud Backup (1TB)", "Strategic IT Review"],
    support: "24/7 Priority Support",
    idealFor: "Growing SMEs with critical IT needs.",
    vatInfo: "Excluding VAT",
    cta: "Go Professional",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Dedicated Account Manager", "Unlimited Support", "Full Infrastructure Management", "Compliance Auditing", "Custom DR Planning"],
    support: "Dedicated 24/7 Support",
    idealFor: "Large organisations with complex requirements.",
    vatInfo: "Custom Quote",
    cta: "Contact Sales",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alistair Graham",
    role: "Managing Director",
    company: "Graham & Co. Solicitors",
    content: "Draycombe House transformed our outdated systems into a modern, secure cloud environment. Their support is second to none.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Peak Logistics UK",
    content: "The cybersecurity audit they performed was eye-opening. We now feel much more confident in our data protection measures.",
  },
  {
    name: "David Thompson",
    role: "CTO",
    company: "FinTech London",
    content: "A truly professional team that understands the nuances of the UK tech landscape. Highly recommended for any scaling business.",
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Retail Chain Infrastructure Overhaul",
    industry: "Retail",
    challenge: "Frequent network outages across 15 UK locations.",
    solution: "Implemented a centralized SD-WAN solution and upgraded hardware.",
    result: "Reduced downtime by 98% and saved £12,000 in annual maintenance costs.",
  },
  {
    title: "Legal Firm Cloud Migration",
    industry: "Legal",
    challenge: "On-premise servers reaching end-of-life and hindering remote work.",
    solution: "Migrated all data and applications to Microsoft Azure with enhanced security.",
    result: "Enabled 100% remote work capability and reduced IT overhead by £8,000 per year.",
  }
];
