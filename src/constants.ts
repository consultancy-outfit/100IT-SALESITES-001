export const COMPANY_DETAILS = {
  name: "Aspire IT Solutions",
  address: "Flat 21 Napier House 17-21 Napier Road, Luton, England, LU1 1DU",
  crn: "17049977",
  phone: "0208 088 5472",
  email: "info@aspiresouthwestlondon.co.uk",
  hours: "Mon-Fri: 09:00 - 17:30, Sat-Sun: Closed",
};

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us", path: "/contact" },
];

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 IT management for small to medium-sized UK businesses.",
    target: "SMEs looking for reliable, outsourced IT departments.",
    process: ["Audit", "Onboarding", "Monitoring", "Support"],
    benefits: ["Reduced downtime", "Fixed monthly costs", "Expert advice"],
    price: "£499",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    overview: "Protecting your digital assets with advanced threat detection and prevention.",
    target: "Businesses handling sensitive data and requiring GDPR compliance.",
    process: ["Risk Assessment", "Implementation", "Training", "Review"],
    benefits: ["Data protection", "Compliance peace of mind", "Threat mitigation"],
    price: "£799",
  },
  {
    id: "cloud-services",
    title: "Cloud Migration & Hosting",
    overview: "Seamless transition to Microsoft Azure or AWS with secure UK-based hosting.",
    target: "Companies seeking scalability and remote work capabilities.",
    process: ["Planning", "Migration", "Optimization", "Management"],
    benefits: ["Scalability", "Remote access", "Cost efficiency"],
    price: "£299",
  },
  {
    id: "it-consultancy",
    title: "IT Strategy & Consultancy",
    overview: "Expert guidance to align your technology with your business goals.",
    target: "Growing firms needing a technology roadmap.",
    process: ["Discovery", "Strategy", "Roadmap", "Execution"],
    benefits: ["Strategic alignment", "Future-proofing", "ROI focus"],
    price: "£950",
  },
  {
    id: "network-infrastructure",
    title: "Network & Infrastructure",
    overview: "Robust networking solutions including Wi-Fi, cabling, and server setups.",
    target: "New offices or businesses upgrading their physical infrastructure.",
    process: ["Site Survey", "Design", "Installation", "Testing"],
    benefits: ["High-speed connectivity", "Reliable hardware", "Secure access"],
    price: "£1,200",
  },
];

export const PRICING_PLANS = [
  {
    name: "Essential",
    price: "199",
    features: ["Remote Support", "Antivirus", "Patch Management", "Email Support"],
    support: "9/5 Support",
    ideal: "Startups & Micro-businesses",
    vat: "Excl. VAT",
  },
  {
    name: "Professional",
    price: "499",
    features: ["On-site Support", "Backup Solutions", "Cyber Essentials Prep", "Priority Support"],
    support: "24/7 Monitoring",
    ideal: "Growing SMEs",
    vat: "Excl. VAT",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "999",
    features: ["Dedicated Manager", "Full Security Stack", "Disaster Recovery", "Strategic Reviews"],
    support: "24/7 Priority Support",
    ideal: "Large Organizations",
    vat: "Excl. VAT",
  },
];
