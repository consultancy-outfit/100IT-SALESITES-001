export const COMPANY_DETAILS = {
  name: "Soma Healthcare Central London (IT Division)",
  shortName: "Soma IT Solutions",
  address: "#####",
  crn: "#####",
  phone: "#####",
  email: "#####",
  hours: "Mon - Fri: 09:00 - 18:00 GMT",
};

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and support for your entire IT infrastructure, ensuring maximum uptime and security.",
    targetAudience: "Small to medium-sized businesses in Central London requiring reliable, always-on IT support.",
    process: ["Initial Audit", "Infrastructure Setup", "24/7 Monitoring", "Proactive Maintenance", "Quarterly Reviews"],
    benefits: ["Reduced downtime", "Predictable monthly costs", "Access to expert engineers", "Enhanced security posture"],
    startingPrice: "£450/month",
    icon: "ShieldCheck",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    overview: "Seamless transition of your local servers and applications to secure, scalable cloud environments like Azure or AWS.",
    targetAudience: "Companies looking to modernize their infrastructure and enable remote work capabilities.",
    process: ["Readiness Assessment", "Strategy Design", "Data Migration", "Optimization", "Ongoing Management"],
    benefits: ["Scalability", "Cost efficiency", "Disaster recovery", "Remote accessibility"],
    startingPrice: "£1,200",
    icon: "Cloud",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Compliance",
    overview: "Advanced threat protection, vulnerability assessments, and GDPR compliance auditing to protect your sensitive data.",
    targetAudience: "Healthcare providers and financial firms handling sensitive personal information.",
    process: ["Threat Assessment", "Security Implementation", "Employee Training", "Compliance Audit", "Incident Response Plan"],
    benefits: ["Data protection", "Regulatory compliance", "Risk mitigation", "Peace of mind"],
    startingPrice: "£750",
    icon: "Lock",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    overview: "Expert guidance on technology roadmaps, digital transformation, and IT budget optimization.",
    targetAudience: "Growing businesses needing high-level technical leadership without a full-time CTO.",
    process: ["Business Analysis", "Gap Identification", "Roadmap Creation", "Vendor Selection", "Implementation Oversight"],
    benefits: ["Strategic alignment", "ROI optimization", "Future-proof technology", "Expert insights"],
    startingPrice: "£150/hour",
    icon: "Lightbulb",
  },
  {
    id: "network-infrastructure",
    title: "Network & Connectivity",
    overview: "Design and installation of high-speed office networks, secure Wi-Fi, and dedicated fibre connectivity.",
    targetAudience: "New office fit-outs or businesses experiencing slow network performance.",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Testing & Optimization", "Documentation"],
    benefits: ["High-speed performance", "Secure connectivity", "Reliable Wi-Fi coverage", "Scalable design"],
    startingPrice: "£1,500",
    icon: "Network",
  },
  {
    id: "healthcare-tech",
    title: "Healthcare Technology Integration",
    overview: "Specialized IT services for medical practices, including patient management system integration and secure data sharing.",
    targetAudience: "Private clinics, dental practices, and healthcare providers in the UK.",
    process: ["Clinical Workflow Analysis", "System Integration", "Security Hardening", "Staff Training", "Support"],
    benefits: ["Improved patient care", "Seamless data flow", "HIPAA/GDPR compliance", "Efficient workflows"],
    startingPrice: "£950",
    icon: "Stethoscope",
  },
];

export const PRICING_TIERS = [
  {
    name: "Essential Support",
    price: "£299",
    features: ["Remote Support (9-5)", "Antivirus & Patch Management", "Cloud Backup (50GB)", "Monthly Health Reports"],
    supportLevel: "Standard Business Hours",
    idealClient: "Small startups and micro-businesses",
    vatInfo: "All prices exclude VAT at 20%",
    cta: "Get Started",
  },
  {
    name: "Professional IT",
    price: "£599",
    features: ["On-site & Remote Support", "24/7 Server Monitoring", "Advanced Security Suite", "Cloud Backup (500GB)", "Quarterly Strategy Meetings"],
    supportLevel: "Priority Response (4hr SLA)",
    idealClient: "Growing SMEs with 10-50 employees",
    vatInfo: "All prices exclude VAT at 20%",
    cta: "Choose Professional",
  },
  {
    name: "Enterprise Managed",
    price: "Custom",
    features: ["Dedicated Account Manager", "Unlimited On-site Support", "Full Security Operations Center (SOC)", "Disaster Recovery as a Service", "Strategic CTO Advisory"],
    supportLevel: "24/7/365 Critical Support",
    idealClient: "Larger organizations and healthcare groups",
    vatInfo: "Contact us for a tailored quote",
    cta: "Contact Sales",
  },
];

export const TESTIMONIALS = [
  {
    name: "Alistair Graham",
    role: "Practice Manager",
    company: "Westminster Medical Clinic",
    content: "Soma IT Solutions transformed our clinic's digital infrastructure. Their understanding of healthcare compliance is second to none.",
  },
  {
    name: "Sarah Jenkins",
    role: "Director",
    company: "Jenkins & Co. Legal",
    content: "Reliable, professional, and incredibly responsive. They've been our IT partner for 3 years and we couldn't be happier.",
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "TechHub London",
    content: "The cloud migration was seamless. We didn't experience a single minute of downtime during the entire transition.",
  },
];

export const CASE_STUDIES = [
  {
    title: "Clinic Digital Transformation",
    industry: "Healthcare",
    challenge: "Outdated local servers causing frequent downtime and security risks.",
    solution: "Full migration to Azure Cloud with enhanced security protocols.",
    result: "Saved £12,000 annually in maintenance costs and 100% uptime achieved.",
  },
  {
    title: "Financial Firm Security Overhaul",
    industry: "Finance",
    challenge: "Failed security audit due to lack of encryption and monitoring.",
    solution: "Implemented SOC-as-a-Service and end-to-end encryption.",
    result: "Passed subsequent audit with zero non-conformities; reduced insurance premiums by £5,000.",
  },
];
