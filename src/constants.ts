export const COMPANY_DETAILS = {
  name: "Penstone Farm",
  address: "12 Penstone Way, London, EC1A 1BB, United Kingdom",
  crn: "08421357",
  phone: "+44 20 7946 0123",
  email: "hello@penstonefarm.it",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Proactive 24/7 monitoring and helpdesk support for your entire infrastructure.",
    audience: "SMEs looking for a reliable external IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Support"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert advice"],
    startingPrice: 499,
  },
  {
    id: "cloud-solutions",
    title: "Cloud Infrastructure",
    description: "Seamless migration and management of Azure, AWS, and Google Cloud environments.",
    audience: "Businesses transitioning to remote or hybrid work models.",
    process: ["Strategy", "Migration", "Optimisation", "Security"],
    benefits: ["Scalability", "Cost efficiency", "Remote accessibility"],
    startingPrice: 750,
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Compliance",
    description: "Advanced threat protection, GDPR compliance audits, and employee training.",
    audience: "Firms handling sensitive data or requiring Cyber Essentials certification.",
    process: ["Risk Assessment", "Implementation", "Training", "Audit"],
    benefits: ["Data protection", "Legal compliance", "Peace of mind"],
    startingPrice: 999,
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Long-term technology roadmapping aligned with your business objectives.",
    audience: "Leadership teams planning digital transformation.",
    process: ["Discovery", "Analysis", "Roadmap", "Execution"],
    benefits: ["Future-proofing", "ROI focus", "Competitive edge"],
    startingPrice: 1200,
  },
  {
    id: "disaster-recovery",
    title: "Backup & Disaster Recovery",
    description: "Robust data protection strategies to ensure business continuity in any crisis.",
    audience: "Enterprises where data loss is not an option.",
    process: ["Planning", "Setup", "Testing", "Maintenance"],
    benefits: ["Business continuity", "Minimal RTO", "Secure backups"],
    startingPrice: 350,
  },
  {
    id: "network-solutions",
    title: "Network & Connectivity",
    description: "High-speed business broadband, leased lines, and secure Wi-Fi installations.",
    audience: "Offices requiring stable and fast connectivity.",
    process: ["Site Survey", "Design", "Installation", "Testing"],
    benefits: ["Reliable speed", "Secure access", "Full coverage"],
    startingPrice: 200,
  }
];

export const PRICING_PLANS = [
  {
    name: "Essential",
    price: 499,
    features: ["Business Hours Support", "Remote Helpdesk", "Antivirus Management", "Patch Management"],
    support: "Standard (9-5)",
    idealFor: "Small businesses with basic needs",
  },
  {
    name: "Professional",
    price: 999,
    features: ["24/7 Monitoring", "On-site Support", "Advanced Security", "Backup Management", "Cloud Support"],
    support: "Priority 24/7",
    idealFor: "Growing SMEs requiring high uptime",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 1999,
    features: ["Dedicated Account Manager", "Unlimited Support", "Strategic Roadmap", "Compliance Audits", "Full DRaaS"],
    support: "Dedicated 24/7",
    idealFor: "Larger organisations with complex estates",
  }
];
