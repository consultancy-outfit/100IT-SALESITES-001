export const COMPANY_DETAILS = {
  name: "House of St Martin",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17048365",
  phone: "0182 329 7150",
  email: "info@houseofstmartin.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and proactive support for your entire IT infrastructure.",
    target: "SMEs looking for a reliable outsourced IT department.",
    process: ["Audit", "Onboarding", "Monitoring", "Support", "Review"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert guidance"],
    startingPrice: 450,
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Strategy",
    overview: "Seamless transition to Azure or AWS with a focus on security and scalability.",
    target: "Businesses modernising their legacy infrastructure.",
    process: ["Assessment", "Planning", "Migration", "Optimisation"],
    benefits: ["Scalability", "Remote access", "Cost efficiency"],
    startingPrice: 1200,
  },
  {
    id: "cyber-security",
    title: "Cyber Security Solutions",
    overview: "Advanced threat protection, vulnerability assessments, and employee training.",
    target: "Companies handling sensitive data or requiring compliance.",
    process: ["Risk Assessment", "Implementation", "Training", "Monitoring"],
    benefits: ["Data protection", "Compliance", "Peace of mind"],
    startingPrice: 750,
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    overview: "Expert advice on digital transformation and long-term technology roadmaps.",
    target: "Leadership teams needing technical direction.",
    process: ["Discovery", "Analysis", "Roadmap", "Execution Support"],
    benefits: ["Aligned strategy", "Future-proofing", "ROI focus"],
    startingPrice: 950,
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery & Backup",
    overview: "Robust backup solutions and business continuity planning for any scenario.",
    target: "Critical businesses that cannot afford data loss.",
    process: ["BIA", "Solution Design", "Implementation", "Testing"],
    benefits: ["Zero data loss", "Fast recovery", "Business continuity"],
    startingPrice: 300,
  },
];

export const PRICING_PLANS = [
  {
    name: "Essential Support",
    price: 299,
    features: ["Remote Support", "9/5 Helpdesk", "Antivirus Included", "Monthly Reports"],
    supportLevel: "Standard",
    idealFor: "Small startups",
    vat: "Excluding VAT",
  },
  {
    name: "Professional",
    price: 599,
    features: ["On-site Support", "24/7 Monitoring", "Cyber Essentials Prep", "Cloud Backup (1TB)"],
    supportLevel: "Priority",
    idealFor: "Growing SMEs",
    vat: "Excluding VAT",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 1299,
    features: ["Dedicated Account Manager", "vCIO Services", "Full Security Suite", "Unlimited Cloud Backup"],
    supportLevel: "Elite (1hr SLA)",
    idealFor: "Large organisations",
    vat: "Excluding VAT",
  },
];
