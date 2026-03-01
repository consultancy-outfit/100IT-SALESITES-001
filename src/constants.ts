export const COMPANY_DETAILS = {
  name: "Isaac Newton House",
  address: "124 Cambridge Science Park, Milton Road, Cambridge, CB4 0WZ, United Kingdom",
  crn: "08429173",
  phone: "+44 (0) 1223 456 789",
  email: "info@isaacnewtonhouse.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00 GMT",
};

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 proactive monitoring and support for your entire IT infrastructure.",
    icon: "Shield",
    targetAudience: "SMEs looking for a reliable outsourced IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Support", "Review"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert advice"],
    startingPrice: "£450",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Compliance",
    description: "Advanced threat protection, vulnerability assessments, and GDPR compliance auditing.",
    icon: "Lock",
    targetAudience: "Businesses handling sensitive data or requiring high security.",
    process: ["Risk Assessment", "Implementation", "Training", "Monitoring"],
    benefits: ["Data protection", "Peace of mind", "Regulatory compliance"],
    startingPrice: "£750",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Strategy",
    description: "Seamless transition to Azure, AWS, or Private Cloud environments tailored to your needs.",
    icon: "Cloud",
    targetAudience: "Companies looking to modernize their legacy systems.",
    process: ["Strategy", "Planning", "Migration", "Optimization"],
    benefits: ["Scalability", "Remote access", "Cost efficiency"],
    startingPrice: "£1,200",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Design and implementation of high-performance wired and wireless networks.",
    icon: "Network",
    targetAudience: "Offices requiring robust and fast connectivity.",
    process: ["Site Survey", "Design", "Installation", "Testing"],
    benefits: ["High speed", "Reliability", "Secure access"],
    startingPrice: "£950",
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery & Backup",
    description: "Robust business continuity planning and automated off-site data backup solutions.",
    icon: "RefreshCw",
    targetAudience: "Any business where data loss would be catastrophic.",
    process: ["BIA", "Strategy", "Implementation", "Testing"],
    benefits: ["Business continuity", "Data integrity", "Fast recovery"],
    startingPrice: "£300",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Expert guidance on digital transformation and long-term technology roadmaps.",
    icon: "Zap",
    targetAudience: "Organizations needing high-level technical leadership.",
    process: ["Discovery", "Analysis", "Roadmap", "Execution"],
    benefits: ["Strategic alignment", "Innovation", "Competitive edge"],
    startingPrice: "£150/hr",
  }
];

export const PRICING_PLANS = [
  {
    name: "Essential",
    price: "£299",
    period: "per month",
    features: ["Remote Support", "9am-5pm Coverage", "Antivirus Management", "Patch Management", "Monthly Reporting"],
    support: "Next Business Day",
    idealFor: "Small businesses with basic IT needs.",
  },
  {
    name: "Professional",
    price: "£599",
    period: "per month",
    features: ["Remote & On-site Support", "24/7 Monitoring", "Cyber Essentials Prep", "Cloud Backup (500GB)", "Quarterly Strategy Meetings"],
    support: "4-Hour Response",
    idealFor: "Growing SMEs requiring proactive management.",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "£1,299",
    period: "per month",
    features: ["Unlimited Support", "Dedicated Account Manager", "Advanced Security Suite", "Disaster Recovery Planning", "Full Compliance Auditing"],
    support: "1-Hour Response",
    idealFor: "Large organizations with complex infrastructure.",
  }
];

export const TESTIMONIALS = [
  {
    name: "Alistair Graham",
    role: "Managing Director",
    company: "Thames Logistics Ltd",
    content: "Isaac Newton House transformed our legacy systems into a modern cloud powerhouse. Their attention to detail and British professionalism is unmatched.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Cambridge Biotech",
    content: "The cybersecurity audit they performed was eye-opening. We now feel completely secure and compliant with all UK regulations.",
  },
  {
    name: "Edward Thorne",
    role: "Finance Director",
    company: "Westminster Legal",
    content: "Reliable, fast, and cost-effective. Having their team on hand gives us the confidence to focus on our clients rather than our servers.",
  }
];

export const CASE_STUDIES = [
  {
    title: "Digital Transformation for Retail",
    client: "High Street Fashion Group",
    result: "£120,000 annual savings",
    description: "Migrated 15 sites to a centralized cloud infrastructure, reducing hardware maintenance costs significantly.",
  },
  {
    title: "Infrastructure Overhaul",
    client: "Midlands Manufacturing",
    result: "99.99% Uptime achieved",
    description: "Redesigned the entire factory network and implemented a robust disaster recovery solution.",
  }
];
