export const COMPANY_DETAILS = {
  name: "Westcliff on Sea",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "00000000",
  phone: "00000",
  email: "info@westcliffonsea.co.uk",
  hours: "Mon - Fri, 9:00am - 5:30pm",
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact" },
];

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.",
    target: "SMEs looking for a reliable, outsourced IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Support", "Review"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert guidance"],
    price: "£499",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    overview: "Seamless transition to Microsoft Azure or AWS with optimized cloud architecture.",
    target: "Businesses moving away from legacy on-premise servers.",
    process: ["Assessment", "Strategy", "Migration", "Optimization"],
    benefits: ["Scalability", "Remote access", "Disaster recovery"],
    price: "£850",
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Compliance",
    overview: "Advanced threat protection, Cyber Essentials certification, and GDPR compliance audits.",
    target: "Firms handling sensitive data requiring high-level security.",
    process: ["Vulnerability Scan", "Hardening", "Training", "Monitoring"],
    benefits: ["Data protection", "Legal compliance", "Peace of mind"],
    price: "£1,200",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    overview: "Expert advice on digital transformation and technology roadmaps to drive business growth.",
    target: "Leadership teams needing technical direction.",
    process: ["Discovery", "Analysis", "Roadmap", "Execution"],
    benefits: ["ROI focus", "Future-proofing", "Competitive edge"],
    price: "£150/hr",
  },
  {
    id: "network-infrastructure",
    title: "Network & Connectivity",
    overview: "High-speed business broadband, leased lines, and robust Wi-Fi solutions.",
    target: "Offices requiring reliable, high-performance connectivity.",
    process: ["Site Survey", "Design", "Installation", "Testing"],
    benefits: ["Faster speeds", "Stable connection", "Secure Wi-Fi"],
    price: "£299",
  },
];

export const PRICING_PLANS = [
  {
    name: "Essential",
    price: "25",
    period: "per user / month",
    features: [
      "Remote Support (9-5)",
      "Antivirus & Malware Protection",
      "Patch Management",
      "Email Security",
      "Monthly Health Reports"
    ],
    support: "Standard",
    ideal: "Small teams with basic needs",
    vat: "Excluding VAT"
  },
  {
    name: "Professional",
    price: "45",
    period: "per user / month",
    features: [
      "24/7 Remote Support",
      "On-site Support Included",
      "Cloud Backup (50GB)",
      "Advanced Cyber Security",
      "Strategic IT Review (Quarterly)"
    ],
    support: "Priority",
    ideal: "Growing businesses requiring reliability",
    vat: "Excluding VAT",
    popular: true
  },
  {
    name: "Enterprise",
    price: "75",
    period: "per user / month",
    features: [
      "Dedicated Account Manager",
      "Unlimited On-site Support",
      "Full Disaster Recovery",
      "Compliance Management",
      "Custom IT Roadmap"
    ],
    support: "Executive (1hr SLA)",
    ideal: "Large organizations with complex setups",
    vat: "Excluding VAT"
  }
];
