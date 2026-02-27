export interface CompanyInfo {
  name: string;
  address: string;
  crn: string;
  phone: string;
  email: string;
  hours: string;
}

export const COMPANY_DETAILS: CompanyInfo = {
  name: "Support Health Care Middlesbrough",
  address: "0",
  crn: "SUPPORT-HEALTH-CARE-MIDDLESBROUGH",
  phone: "0",
  email: "0",
  hours: "Monday - Friday: 09:00 - 17:30 GMT"
};

export interface Service {
  id: string;
  title: string;
  description: string;
  audience: string;
  process: string[];
  benefits: string[];
  startingPrice: number;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.",
    audience: "SMEs and Healthcare Providers looking for worry-free technology management.",
    process: ["Initial Audit", "Environment Stabilisation", "24/7 Monitoring", "Regular Strategy Reviews"],
    benefits: ["Reduced Downtime", "Predictable Monthly Costs", "Expert Support Access"],
    startingPrice: 250,
    icon: "ShieldCheck"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    description: "Seamless transition to secure, scalable cloud environments tailored for UK compliance.",
    audience: "Businesses seeking flexibility and remote-work capabilities.",
    process: ["Readiness Assessment", "Migration Planning", "Execution", "Post-Migration Support"],
    benefits: ["Scalability", "Enhanced Security", "Cost Efficiency"],
    startingPrice: 500,
    icon: "Cloud"
  },
  {
    id: "cyber-security",
    title: "Cyber Security Essentials",
    description: "Protecting your sensitive data with enterprise-grade security protocols and UK GDPR compliance.",
    audience: "Organisations handling sensitive patient or client data.",
    process: ["Vulnerability Scanning", "Policy Implementation", "Staff Training", "Incident Response Planning"],
    benefits: ["GDPR Compliance", "Data Protection", "Peace of Mind"],
    startingPrice: 400,
    icon: "Lock"
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Design and implementation of robust, high-speed wired and wireless networks.",
    audience: "New office setups or businesses with connectivity issues.",
    process: ["Site Survey", "Design", "Hardware Installation", "Testing & Optimisation"],
    benefits: ["High Performance", "Reliability", "Future-Proofing"],
    startingPrice: 750,
    icon: "Network"
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Expert guidance to align your technology roadmap with your business objectives.",
    audience: "Leadership teams planning for growth or digital transformation.",
    process: ["Discovery", "Gap Analysis", "Roadmap Creation", "Implementation Oversight"],
    benefits: ["Strategic Alignment", "ROI Optimisation", "Expert Insights"],
    startingPrice: 1200,
    icon: "Lightbulb"
  },
  {
    id: "data-backup",
    title: "Disaster Recovery & Backup",
    description: "Ensuring business continuity with automated backups and rapid recovery solutions.",
    audience: "Any business that cannot afford data loss.",
    process: ["Risk Assessment", "Backup Strategy", "Implementation", "Regular Testing"],
    benefits: ["Business Continuity", "Data Integrity", "Rapid Recovery"],
    startingPrice: 150,
    icon: "Database"
  }
];

export const PRICING_PLANS = [
  {
    name: "Essential",
    price: 99,
    features: ["Remote Support", "Antivirus Protection", "Monthly Health Checks", "Standard Business Hours"],
    support: "Standard",
    idealFor: "Small Startups",
    vat: "Excluding VAT"
  },
  {
    name: "Professional",
    price: 249,
    features: ["On-site & Remote Support", "Advanced Security Suite", "Cloud Backup (1TB)", "Priority Response", "Strategic Planning"],
    support: "Priority",
    idealFor: "Growing SMEs",
    vat: "Excluding VAT",
    popular: true
  },
  {
    name: "Enterprise",
    price: 599,
    features: ["24/7 Dedicated Support", "Full Infrastructure Management", "Unlimited Cloud Backup", "Dedicated Account Manager", "Compliance Auditing"],
    support: "24/7 Dedicated",
    idealFor: "Large Organisations & Healthcare",
    vat: "Excluding VAT"
  }
];
