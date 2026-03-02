import { CompanyDetails, NavItem, Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY: CompanyDetails = {
  name: "St Crispin Village",
  address: "Not Available",
  crn: "Not Available",
  phone: "Not Available",
  email: "Not Available",
  hours: "Mon - Fri: 09:00 - 17:30 GMT"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About Us", id: "about" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact Us", id: "contact" }
];

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.",
    target: "SMEs looking for a dedicated external IT department.",
    process: ["Initial Audit", "Environment Setup", "24/7 Monitoring", "Monthly Reporting"],
    benefits: ["Reduced Downtime", "Predictable Costs", "Expert Support"],
    startingPrice: "£250/month",
    icon: "Shield"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Advanced threat protection, vulnerability assessments, and employee security training.",
    target: "Businesses handling sensitive data or requiring compliance.",
    process: ["Risk Assessment", "Security Implementation", "Employee Training", "Incident Response"],
    benefits: ["Data Protection", "Regulatory Compliance", "Peace of Mind"],
    startingPrice: "£500/audit",
    icon: "Lock"
  },
  {
    id: "cloud-migration",
    title: "Cloud Infrastructure",
    description: "Seamless migration to Azure, AWS, or private cloud environments with ongoing management.",
    target: "Companies looking to modernise and enable remote work.",
    process: ["Cloud Readiness Assessment", "Migration Planning", "Execution", "Post-Migration Support"],
    benefits: ["Scalability", "Remote Accessibility", "Cost Efficiency"],
    startingPrice: "£1,200/project",
    icon: "Cloud"
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Expert guidance on digital transformation, budgeting, and long-term technology roadmaps.",
    target: "Leadership teams needing technical direction.",
    process: ["Business Analysis", "Strategy Development", "Roadmap Creation", "Implementation Oversight"],
    benefits: ["Aligned IT Strategy", "ROI Optimisation", "Future-Proofing"],
    startingPrice: "£150/hour",
    icon: "BarChart"
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery & Backup",
    description: "Robust backup strategies and rapid recovery plans to ensure business continuity.",
    target: "Any business where data loss would be catastrophic.",
    process: ["Data Mapping", "Backup Configuration", "Recovery Testing", "Plan Maintenance"],
    benefits: ["Zero Data Loss", "Fast Recovery", "Business Resilience"],
    startingPrice: "£100/month",
    icon: "RefreshCw"
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: "Essential Support",
    price: "£299",
    features: ["Remote Support", "Antivirus Management", "Patch Management", "Email Security"],
    support: "9am - 5pm Mon-Fri",
    idealFor: "Small businesses with basic IT needs",
    cta: "Start Essential"
  },
  {
    name: "Business Pro",
    price: "£599",
    features: ["Remote & On-site Support", "Cloud Backup (500GB)", "Advanced Security Suite", "Quarterly IT Reviews"],
    support: "8am - 8pm Mon-Sat",
    idealFor: "Growing SMEs requiring proactive care",
    cta: "Go Pro",
    popular: true
  },
  {
    name: "Enterprise Managed",
    price: "£1,299",
    features: ["24/7 Priority Support", "Unlimited Cloud Backup", "Dedicated Account Manager", "Monthly Security Audits"],
    support: "24/7/365",
    idealFor: "Large organisations with critical uptime needs",
    cta: "Contact Sales"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "James Harrington",
    role: "Managing Director",
    company: "Harrington Logistics",
    content: "St Crispin Village transformed our chaotic IT setup into a streamlined machine. Their response times are exceptional."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Northampton Creative",
    content: "The cybersecurity audit they performed saved us from a potential breach. Professional, knowledgeable, and very British!"
  },
  {
    name: "Oliver Smith",
    role: "Founder",
    company: "TechStart UK",
    content: "As a startup, we needed scalability. Their cloud migration was seamless and didn't break the bank."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Infrastructure Overhaul",
    client: "Midlands Manufacturing",
    result: "Saved £12,000 annually",
    description: "Consolidated legacy servers into a hybrid cloud environment, reducing energy and maintenance costs."
  },
  {
    title: "Security Hardening",
    client: "London Legal Partners",
    result: "100% Compliance achieved",
    description: "Implemented multi-factor authentication and encrypted backups to meet strict GDPR and legal standards."
  }
];
