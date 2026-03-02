import { NavLink, Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Support Health Care Cirencester",
  address: "Not Available",
  crn: "Not Available",
  phone: "Not Available",
  email: "Not Available",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const NAV_LINKS: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and support for your entire IT infrastructure.",
    longDescription: "Our Managed IT Support provides a complete outsourcing solution for your technology needs. We act as your internal IT department, ensuring your systems are always up, secure, and performing optimally.",
    targetAudience: "Small to medium-sized healthcare providers and local businesses.",
    process: [
      "Initial Infrastructure Audit",
      "Strategic Roadmap Development",
      "24/7 Monitoring Implementation",
      "Proactive Maintenance & Patching",
      "Dedicated Helpdesk Support"
    ],
    benefits: [
      "Reduced downtime and increased productivity",
      "Predictable monthly IT costs",
      "Access to expert technical knowledge",
      "Enhanced security posture"
    ],
    startingPrice: "£250/month",
    icon: "ShieldCheck"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    description: "Secure, scalable cloud solutions tailored for healthcare data compliance.",
    longDescription: "Move your operations to the cloud with confidence. We specialize in migrating legacy systems to secure, UK-based data centres, ensuring full GDPR and NHS compliance.",
    targetAudience: "Organizations looking to modernize their infrastructure and enable remote work.",
    process: [
      "Cloud Readiness Assessment",
      "Data Migration Planning",
      "Secure Environment Setup",
      "User Training & Onboarding",
      "Post-Migration Optimization"
    ],
    benefits: [
      "Work from anywhere securely",
      "Scalable resources that grow with you",
      "Automatic backups and disaster recovery",
      "Reduced hardware maintenance costs"
    ],
    startingPrice: "£500 (One-off setup)",
    icon: "Cloud"
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Compliance",
    description: "Protecting sensitive patient data with advanced security protocols.",
    longDescription: "In the healthcare sector, data security is paramount. We provide multi-layered security solutions, including threat detection, encryption, and staff training to prevent breaches.",
    targetAudience: "Healthcare clinics, dental practices, and care homes handling sensitive data.",
    process: [
      "Vulnerability Scanning",
      "Security Policy Review",
      "Endpoint Protection Deployment",
      "Staff Cyber Awareness Training",
      "Regular Security Audits"
    ],
    benefits: [
      "Peace of mind regarding data breaches",
      "Compliance with GDPR and Cyber Essentials",
      "Protection against ransomware and phishing",
      "Rapid incident response"
    ],
    startingPrice: "£150/month",
    icon: "Lock"
  },
  {
    id: "it-consultancy",
    title: "IT Strategy & Consultancy",
    description: "Expert guidance to align your technology with your business goals.",
    longDescription: "Don't just buy technology; invest in solutions that drive your business forward. Our consultants help you plan for the future with scalable, cost-effective IT strategies.",
    targetAudience: "Business owners planning for growth or digital transformation.",
    process: [
      "Business Goal Alignment",
      "Technology Gap Analysis",
      "Budget Planning",
      "Vendor Selection Assistance",
      "Implementation Oversight"
    ],
    benefits: [
      "Clear ROI on technology investments",
      "Future-proofed infrastructure",
      "Streamlined business processes",
      "Strategic competitive advantage"
    ],
    startingPrice: "£750 (Per project)",
    icon: "Lightbulb"
  },
  {
    id: "data-backup",
    title: "Disaster Recovery & Backup",
    description: "Ensuring your business can recover quickly from any data loss event.",
    longDescription: "We implement robust backup solutions that ensure your data is safe and recoverable within minutes, not days, in the event of a hardware failure or cyber attack.",
    targetAudience: "Any business where data loss would be catastrophic to operations.",
    process: [
      "Data Criticality Assessment",
      "Backup Schedule Configuration",
      "Off-site Replication Setup",
      "Recovery Testing",
      "Continuous Monitoring"
    ],
    benefits: [
      "Zero data loss guarantee",
      "Minimal downtime during recovery",
      "Automated, hands-off backups",
      "Compliance with data retention laws"
    ],
    startingPrice: "£100/month",
    icon: "Database"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential",
    price: "£199",
    features: [
      "Remote Helpdesk Support",
      "Antivirus & Malware Protection",
      "Patch Management",
      "Monthly Health Reports",
      "Email Security"
    ],
    supportLevel: "9am - 5pm, Mon-Fri",
    idealFor: "Small practices with up to 5 users.",
  },
  {
    name: "Professional",
    price: "£449",
    features: [
      "Everything in Essential",
      "On-site Support Included",
      "Cloud Backup (500GB)",
      "Cyber Essentials Readiness",
      "Network Monitoring",
      "Quarterly Strategy Reviews"
    ],
    supportLevel: "8am - 8pm, Mon-Sat",
    idealFor: "Growing clinics with 5-20 users.",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Professional",
      "24/7/365 Emergency Support",
      "Unlimited Cloud Storage",
      "Dedicated Account Manager",
      "Full Compliance Auditing",
      "vCISO Services"
    ],
    supportLevel: "24/7/365",
    idealFor: "Large healthcare groups and multi-site businesses.",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Alistair Graham",
    role: "Senior Partner",
    company: "Cotswold Medical Centre",
    content: "Support Health Care Cirencester transformed our digital infrastructure. Their understanding of healthcare compliance is second to none."
  },
  {
    name: "Sarah Jenkins",
    role: "Practice Manager",
    company: "Oak Tree Dental",
    content: "Since switching to their managed support, we haven't had a single hour of downtime. Their response time is incredible."
  },
  {
    name: "Mark Thompson",
    role: "Director",
    company: "Thames Valley Logistics",
    content: "Professional, reliable, and truly British service. They speak our language and understand our business needs perfectly."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Cloud Migration Success",
    client: "Regional Care Group",
    challenge: "Legacy on-premise servers were failing and preventing remote access for staff.",
    solution: "Full migration to a secure UK-based Azure environment with Microsoft 365 integration.",
    result: "Reduced IT maintenance costs by £12,000 annually and enabled 100% remote work capability."
  },
  {
    title: "Security Overhaul",
    client: "Cirencester Specialist Clinic",
    challenge: "A series of phishing attempts highlighted critical vulnerabilities in their patient data handling.",
    solution: "Implemented multi-factor authentication, advanced endpoint protection, and staff training.",
    result: "Zero security incidents in 18 months and achieved Cyber Essentials Plus certification."
  }
];
