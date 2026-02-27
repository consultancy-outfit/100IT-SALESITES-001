export const COMPANY_DETAILS = {
  name: "Thurrock",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "12345678",
  phone: "+44 (0) 20 7946 0000",
  email: "hello@thurrock-it.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const NAVIGATION = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive end-to-end IT management for small to medium enterprises.",
    target: "SMEs looking to outsource their IT department.",
    process: ["Audit", "Onboarding", "24/7 Monitoring", "Proactive Maintenance"],
    benefits: ["Reduced downtime", "Fixed monthly costs", "Expert support"],
    price: "£499",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Infrastructure",
    description: "Scalable cloud migration and management using Azure and AWS.",
    target: "Businesses transitioning to remote or hybrid work.",
    process: ["Strategy", "Migration", "Optimization", "Security"],
    benefits: ["Scalability", "Accessibility", "Cost efficiency"],
    price: "£750",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Compliance",
    description: "Protecting your digital assets with advanced threat detection and GDPR compliance.",
    target: "Firms handling sensitive data or regulated industries.",
    process: ["Risk Assessment", "Implementation", "Training", "Monitoring"],
    benefits: ["Data protection", "Regulatory compliance", "Peace of mind"],
    price: "£999",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Expert advice to align your technology roadmap with business goals.",
    target: "Leadership teams planning digital transformation.",
    process: ["Discovery", "Analysis", "Roadmap Design", "Execution Support"],
    benefits: ["Strategic alignment", "ROI optimization", "Future-proofing"],
    price: "£1,200",
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery",
    description: "Robust backup and recovery solutions to ensure business continuity.",
    target: "Critical businesses that cannot afford data loss.",
    process: ["BIA", "Solution Design", "Testing", "Maintenance"],
    benefits: ["Minimal RTO/RPO", "Data integrity", "Resilience"],
    price: "£350",
  },
];

export const PRICING_PLANS = [
  {
    name: "Essential",
    price: "299",
    features: ["Remote Support", "Antivirus", "Patch Management", "Email Security"],
    support: "Business Hours",
    ideal: "Small startups",
    cta: "Start Essential",
  },
  {
    name: "Professional",
    price: "599",
    features: ["On-site Support", "Cloud Backup", "Network Monitoring", "vCIO Services"],
    support: "24/7 Priority",
    ideal: "Growing SMEs",
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "1,299",
    features: ["Dedicated Engineer", "Full Security Suite", "Disaster Recovery", "Compliance Auditing"],
    support: "Dedicated Account Manager",
    ideal: "Large Corporations",
    cta: "Contact Sales",
  },
];
