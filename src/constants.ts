export const COMPANY_DETAILS = {
  name: "Vibrance Outreach",
  address: "78 Neptune Drive, Hemel Hempstead, England, HP2 5QD",
  crn: "17048815",
  phone: "0132 336 0903",
  email: "info@vibranceoutreach.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00 GMT",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and support for your entire IT infrastructure.",
    target: "SMEs and growing enterprises looking for reliable technology partners.",
    process: ["Audit", "Onboarding", "Continuous Monitoring", "Proactive Maintenance"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert guidance"],
    price: "From £499/month",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Strategy",
    description: "Seamless transition to Azure, AWS, or Google Cloud with zero data loss.",
    target: "Businesses looking to modernize their legacy systems.",
    process: ["Assessment", "Strategy", "Migration", "Optimization"],
    benefits: ["Scalability", "Remote access", "Cost efficiency"],
    price: "From £1,250/project",
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Compliance",
    description: "Protecting your digital assets with advanced threat detection and GDPR compliance.",
    target: "Companies handling sensitive data or requiring Cyber Essentials certification.",
    process: ["Risk Assessment", "Implementation", "Training", "Audit"],
    benefits: ["Data protection", "Regulatory compliance", "Peace of mind"],
    price: "From £750/audit",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Aligning your technology roadmap with your long-term business goals.",
    target: "Leadership teams needing expert technical direction.",
    process: ["Discovery", "Analysis", "Roadmap Creation", "Execution Support"],
    benefits: ["Future-proof tech", "ROI optimization", "Competitive edge"],
    price: "From £150/hour",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Design and implementation of robust, high-speed wired and wireless networks.",
    target: "Offices and facilities requiring high-performance connectivity.",
    process: ["Site Survey", "Design", "Installation", "Testing"],
    benefits: ["High speed", "Reliability", "Secure connectivity"],
    price: "From £2,000/setup",
  },
];
