import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "William and Patrica Venton Centre",
  address: "12-14 York Road, Northampton, NN1 5QG, United Kingdom",
  crn: "08421937",
  phone: "+44 (0) 1604 626933",
  email: "info@williamandpatricaventoncentre.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and helpdesk support for your entire infrastructure.",
    overview: "Our Managed IT Support provides a complete outsourcing solution for your business technology needs. We act as your internal IT department, ensuring your systems are always running at peak performance.",
    targetAudience: "Small to medium-sized enterprises (SMEs) looking for reliable, scalable IT management.",
    process: [
      "Initial Infrastructure Audit",
      "24/7 Monitoring Setup",
      "Helpdesk Integration",
      "Regular Strategy Reviews"
    ],
    benefits: [
      "Reduced downtime",
      "Predictable monthly costs",
      "Expert advice on demand",
      "Proactive issue resolution"
    ],
    startingPrice: 450,
    icon: "Shield"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Advanced threat protection, security audits, and employee training to keep your data safe.",
    overview: "In an era of increasing digital threats, our cybersecurity services provide multi-layered protection. We focus on prevention, detection, and rapid response to safeguard your intellectual property.",
    targetAudience: "Businesses handling sensitive client data or operating in regulated industries.",
    process: [
      "Vulnerability Assessment",
      "Firewall & Endpoint Protection",
      "Security Awareness Training",
      "Incident Response Planning"
    ],
    benefits: [
      "GDPR compliance assurance",
      "Protection against ransomware",
      "Peace of mind for stakeholders",
      "Enhanced brand reputation"
    ],
    startingPrice: 750,
    icon: "Lock"
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Strategy",
    description: "Seamless transition to Azure, AWS, or Google Cloud with minimal business disruption.",
    overview: "We help you leverage the power of the cloud to increase flexibility and reduce hardware costs. Our migration experts ensure a smooth transition of your workloads and data.",
    targetAudience: "Companies looking to modernize their legacy infrastructure and enable remote work.",
    process: [
      "Cloud Readiness Assessment",
      "Migration Roadmap Design",
      "Data Transfer & Testing",
      "Post-Migration Optimization"
    ],
    benefits: [
      "Improved scalability",
      "Remote accessibility",
      "Lower capital expenditure",
      "Disaster recovery built-in"
    ],
    startingPrice: 1200,
    icon: "Cloud"
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy & Strategy",
    description: "Expert guidance to align your technology roadmap with your long-term business goals.",
    overview: "Our consultancy services provide the strategic vision needed to make informed technology investments. We help you navigate complex digital transformations.",
    targetAudience: "Leadership teams planning for growth or digital transformation.",
    process: [
      "Business Goal Alignment",
      "Technology Gap Analysis",
      "Strategic Roadmap Creation",
      "Budget Planning"
    ],
    benefits: [
      "Better ROI on tech spend",
      "Future-proofed systems",
      "Competitive advantage",
      "Clear digital vision"
    ],
    startingPrice: 950,
    icon: "Zap"
  },
  {
    id: "network-solutions",
    title: "Network Infrastructure",
    description: "Design and implementation of robust, high-speed wired and wireless networks.",
    overview: "A fast, reliable network is the backbone of any modern business. We design and install high-performance networking solutions tailored to your office environment.",
    targetAudience: "Offices requiring high-speed connectivity and secure internal networking.",
    process: [
      "Site Survey & Mapping",
      "Hardware Specification",
      "Installation & Cabling",
      "Performance Tuning"
    ],
    benefits: [
      "Eliminated dead zones",
      "High-speed data transfer",
      "Secure guest access",
      "Scalable architecture"
    ],
    startingPrice: 600,
    icon: "Network"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential",
    price: 299,
    features: [
      "Remote Helpdesk Support",
      "Antivirus & Malware Protection",
      "Monthly Health Reports",
      "Cloud Backup (100GB)",
      "Business Hours Support"
    ],
    supportLevel: "9am - 5:30pm Mon-Fri",
    idealFor: "Small startups and micro-businesses",
  },
  {
    name: "Professional",
    price: 599,
    features: [
      "All Essential Features",
      "On-site Support Included",
      "Cybersecurity Audit",
      "Cloud Backup (500GB)",
      "Priority Response Time",
      "Microsoft 365 Management"
    ],
    supportLevel: "Priority Business Hours",
    idealFor: "Growing SMEs with 10-50 employees",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: 1299,
    features: [
      "All Professional Features",
      "24/7 Critical Support",
      "Dedicated Account Manager",
      "Unlimited Cloud Backup",
      "Strategic IT Roadmap",
      "Advanced Threat Detection"
    ],
    supportLevel: "24/7/365 Support",
    idealFor: "Large organisations with complex needs",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alistair Graham",
    role: "Managing Director",
    company: "Northampton Logistics Ltd",
    content: "The team at Venton Centre transformed our outdated server room into a sleek, cloud-based operation. Their response times are exceptional."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Cotswold Creative Agency",
    content: "Cybersecurity was a major concern for us. Their audit and subsequent implementation of security protocols have given us complete peace of mind."
  },
  {
    name: "David Thompson",
    role: "Finance Director",
    company: "Midlands Manufacturing",
    content: "Professional, knowledgeable, and distinctly British in their approach to service. They understand the local business landscape perfectly."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Digital Transformation for Retail Group",
    industry: "Retail",
    result: "£45,000 annual savings",
    description: "Migrated legacy on-premise systems to Azure, reducing hardware maintenance and energy costs while enabling remote stock management."
  },
  {
    title: "Security Overhaul for Legal Firm",
    industry: "Legal",
    result: "100% GDPR Compliance",
    description: "Implemented end-to-end encryption and multi-factor authentication for a London-based law firm, passing a rigorous external security audit."
  }
];
