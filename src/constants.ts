export interface CompanyDetails {
  name: string;
  address: string;
  crn: string;
  phone: string;
  email: string;
  hours: string;
}

export const COMPANY_DETAILS: CompanyDetails = {
  name: "The Bridgewater Complex",
  address: "N/A",
  crn: "12345678",
  phone: "+44 (0) 20 7946 0123",
  email: "Info@thebridgewatercomplex.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30 GMT"
};

export interface Service {
  id: string;
  title: string;
  overview: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.",
    targetAudience: "SMEs looking for a reliable outsourced IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Support", "Review"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert advice"],
    startingPrice: "£450/month",
    icon: "ShieldCheck"
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Strategy",
    overview: "Seamless transition to Azure or AWS with a focus on security and scalability.",
    targetAudience: "Businesses outgrowing on-premise hardware.",
    process: ["Assessment", "Planning", "Execution", "Optimisation"],
    benefits: ["Scalability", "Remote access", "Cost efficiency"],
    startingPrice: "£2,500",
    icon: "Cloud"
  },
  {
    id: "cyber-security",
    title: "Cyber Security Essentials",
    overview: "Protecting your business from evolving threats with multi-layered security protocols.",
    targetAudience: "Companies handling sensitive client data.",
    process: ["Risk Assessment", "Implementation", "Training", "Monitoring"],
    benefits: ["Data protection", "Compliance", "Peace of mind"],
    startingPrice: "£750",
    icon: "Lock"
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    overview: "Aligning your technology roadmap with your long-term business objectives.",
    targetAudience: "Leadership teams needing technical direction.",
    process: ["Discovery", "Strategy", "Roadmap", "Execution Support"],
    benefits: ["Future-proofing", "ROI focus", "Competitive edge"],
    startingPrice: "£1,200/day",
    icon: "Lightbulb"
  },
  {
    id: "network-solutions",
    title: "Network Infrastructure",
    overview: "Designing and implementing robust, high-speed wired and wireless networks.",
    targetAudience: "Offices requiring high-performance connectivity.",
    process: ["Site Survey", "Design", "Installation", "Testing"],
    benefits: ["High speed", "Reliability", "Secure guest access"],
    startingPrice: "£1,500",
    icon: "Network"
  },
  {
    id: "disaster-recovery",
    title: "Backup & Disaster Recovery",
    overview: "Ensuring your business can bounce back from any data loss event within minutes.",
    targetAudience: "Any business where data is critical.",
    process: ["Strategy", "Backup Setup", "Testing", "Maintenance"],
    benefits: ["Business continuity", "Data integrity", "Compliance"],
    startingPrice: "£150/month",
    icon: "Database"
  }
];

export const PRICING_PLANS = [
  {
    name: "Essential",
    price: "£450",
    period: "/month",
    features: ["Remote Support", "Antivirus", "Patch Management", "Email Support"],
    support: "9-5 Mon-Fri",
    idealFor: "Small teams (up to 10)",
    vat: "Excluding VAT",
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "£950",
    period: "/month",
    features: ["On-site Support", "Cloud Backup", "Cyber Security Audit", "Priority Response"],
    support: "24/7 Critical Support",
    idealFor: "Growing SMEs (10-50)",
    vat: "Excluding VAT",
    cta: "Most Popular",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Dedicated IT Manager", "Full Infrastructure Management", "Strategic Roadmap", "Unlimited Support"],
    support: "24/7 Dedicated Support",
    idealFor: "Large Organisations (50+)",
    vat: "Bespoke Pricing",
    cta: "Contact Us"
  }
];
