export const COMPANY_DETAILS = {
  name: "Shauna HealthCare Services Solutions Midlands",
  shortName: "Shauna IT Solutions",
  address: "Not Available",
  crn: "Not Available",
  phone: "Not Available",
  email: "Not Available",
};

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and proactive support for your entire IT infrastructure.",
    target: "SMEs and Healthcare providers requiring reliable uptime.",
    process: ["Initial Audit", "Environment Optimization", "24/7 Monitoring", "Monthly Review"],
    benefits: ["Reduced downtime", "Predictable costs", "Expert support access"],
    startingPrice: 499,
    icon: "ShieldCheck",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Strategy",
    overview: "Seamless transition to secure cloud environments tailored for UK compliance standards.",
    target: "Businesses looking to modernize legacy systems.",
    process: ["Readiness Assessment", "Migration Planning", "Execution", "Post-Migration Support"],
    benefits: ["Scalability", "Remote accessibility", "Enhanced security"],
    startingPrice: 1200,
    icon: "Cloud",
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Compliance",
    overview: "Advanced threat protection and GDPR-aligned security frameworks.",
    target: "Organizations handling sensitive patient or client data.",
    process: ["Vulnerability Scan", "Risk Assessment", "Implementation", "Staff Training"],
    benefits: ["Data protection", "Regulatory compliance", "Peace of mind"],
    startingPrice: 850,
    icon: "Lock",
  },
  {
    id: "healthcare-it",
    title: "Healthcare Tech Integration",
    overview: "Specialized IT solutions for medical practices, clinics, and care homes.",
    target: "NHS partners and private healthcare providers.",
    process: ["Clinical Workflow Analysis", "System Integration", "Compliance Check", "Go-Live Support"],
    benefits: ["Improved patient care", "Efficient workflows", "NHS standards alignment"],
    startingPrice: 1500,
    icon: "Stethoscope",
  },
  {
    id: "data-analytics",
    title: "Business Intelligence & Data",
    overview: "Transforming raw data into actionable insights for better decision making.",
    target: "Data-driven enterprises and research institutions.",
    process: ["Data Collection", "Cleaning & Structuring", "Visualization", "Insight Delivery"],
    benefits: ["Informed decisions", "Trend identification", "Operational efficiency"],
    startingPrice: 2000,
    icon: "BarChart3",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    overview: "Expert guidance on technology roadmaps and digital transformation.",
    target: "Executive teams planning long-term growth.",
    process: ["Discovery", "Strategic Planning", "Roadmap Development", "Implementation Oversight"],
    benefits: ["Aligned IT strategy", "Cost optimization", "Future-proofing"],
    startingPrice: 1000,
    icon: "Lightbulb",
  }
];

export const PRICING_PLANS = [
  {
    name: "Essential Support",
    price: 250,
    features: [
      "Remote Support (9-5)",
      "Basic Security Monitoring",
      "Cloud Backup Management",
      "Software Updates",
      "Standard Response Time (8h)"
    ],
    support: "Standard Business Hours",
    idealFor: "Small startups and solo practitioners",
    vat: "Excluding VAT"
  },
  {
    name: "Professional Business",
    price: 750,
    features: [
      "On-site & Remote Support",
      "Advanced Cyber Security",
      "Network Management",
      "Disaster Recovery Plan",
      "Priority Response Time (4h)",
      "Monthly Performance Reports"
    ],
    support: "24/7 Critical Support",
    idealFor: "Growing SMEs with 10-50 employees",
    vat: "Excluding VAT",
    popular: true
  },
  {
    name: "Enterprise Solutions",
    price: 1950,
    features: [
      "Dedicated Account Manager",
      "Full Infrastructure Management",
      "Compliance Auditing (GDPR/ISO)",
      "Custom Software Integration",
      "Immediate Response Time (1h)",
      "Strategic IT Roadmap"
    ],
    support: "Dedicated 24/7 Support",
    idealFor: "Large organizations and NHS partners",
    vat: "Excluding VAT"
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Alistair Graham",
    role: "Clinical Director, Midlands Health",
    content: "Shauna IT Solutions transformed our clinic's digital infrastructure. Their understanding of healthcare compliance is unmatched.",
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow Logistics",
    content: "The transition to the cloud was seamless. We've seen a 30% increase in operational efficiency since partnering with them.",
  },
  {
    name: "Robert Thompson",
    role: "Operations Manager, West End Legal",
    content: "Reliable, professional, and always available. They feel like an extension of our own team.",
  }
];

export const CASE_STUDIES = [
  {
    title: "NHS Trust Integration",
    result: "£120k Annual Savings",
    description: "Optimized patient data workflows across three regional sites.",
  },
  {
    title: "Retail Digital Overhaul",
    result: "45% Faster Processing",
    description: "Implemented high-availability server clusters for a national retailer.",
  },
  {
    title: "FinTech Security Audit",
    result: "Zero Breach Incidents",
    description: "Hardened infrastructure against sophisticated cyber threats.",
  }
];
