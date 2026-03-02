import { CompanyInfo, Service, PricingTier, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS: CompanyInfo = {
  name: "HB IT Solutions",
  legalName: "Hertfordshire and Barnet Supported Living Service",
  address: "Not Available",
  crn: "17048852",
  phone: "Not Available",
  email: "contact@hertfordshirebarnet-it.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30"
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.",
    overview: "Our Managed IT Support provides a complete outsourced IT department for your business. We handle everything from desktop support to server management, ensuring your systems are always up and running.",
    targetAudience: "SMEs looking for reliable, fixed-cost IT management.",
    process: [
      "Initial Infrastructure Audit",
      "Proactive Monitoring Setup",
      "24/7 Helpdesk Integration",
      "Monthly Performance Reviews"
    ],
    benefits: [
      "Reduced downtime",
      "Predictable monthly costs",
      "Access to expert technicians",
      "Enhanced system security"
    ],
    startingPrice: 250,
    icon: "Shield"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    description: "Secure, scalable cloud infrastructure tailored to your business needs.",
    overview: "Transition your business to the cloud with confidence. We specialize in Microsoft 365, Azure, and private cloud hosting solutions that enable remote work and scalability.",
    targetAudience: "Businesses aiming for digital transformation and remote work capabilities.",
    process: [
      "Cloud Readiness Assessment",
      "Migration Strategy Planning",
      "Data Transfer & Configuration",
      "Staff Training & Support"
    ],
    benefits: [
      "Work from anywhere",
      "Scalable resources",
      "Automatic backups",
      "Lower hardware costs"
    ],
    startingPrice: 500,
    icon: "Cloud"
  },
  {
    id: "cyber-security",
    title: "Cyber Security Solutions",
    description: "Protect your business from evolving digital threats with our multi-layered security approach.",
    overview: "We provide enterprise-grade security for small and medium businesses. From firewall management to employee awareness training, we cover all bases.",
    targetAudience: "Companies handling sensitive data or requiring GDPR compliance.",
    process: [
      "Vulnerability Scanning",
      "Security Policy Development",
      "Endpoint Protection Deployment",
      "Continuous Threat Monitoring"
    ],
    benefits: [
      "Peace of mind",
      "GDPR compliance",
      "Protection against ransomware",
      "Secure remote access"
    ],
    startingPrice: 150,
    icon: "Lock"
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Robust, high-speed networking solutions for modern business demands.",
    overview: "Design and implementation of reliable wired and wireless networks. We ensure your office connectivity is fast, secure, and future-proof.",
    targetAudience: "New office setups or businesses struggling with slow connectivity.",
    process: [
      "Site Survey & Mapping",
      "Hardware Specification",
      "Installation & Cabling",
      "Optimization & Testing"
    ],
    benefits: [
      "High-speed connectivity",
      "Seamless Wi-Fi coverage",
      "Secure guest access",
      "Reliable VoIP support"
    ],
    startingPrice: 750,
    icon: "Network"
  },
  {
    id: "data-backup",
    title: "Disaster Recovery & Backup",
    description: "Ensure your business data is safe and recoverable in any situation.",
    overview: "Our backup solutions provide off-site, encrypted storage with rapid recovery options. We ensure your business can resume operations within hours of a disaster.",
    targetAudience: "Any business that cannot afford to lose critical data.",
    process: [
      "Data Inventory",
      "Backup Frequency Planning",
      "Encryption Setup",
      "Recovery Drill Testing"
    ],
    benefits: [
      "Zero data loss guarantee",
      "Rapid recovery times",
      "Compliance with data laws",
      "Automated daily backups"
    ],
    startingPrice: 100,
    icon: "Database"
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Expert guidance to align your IT strategy with your business goals.",
    overview: "We act as your virtual CTO, helping you make informed decisions about technology investments and long-term digital strategy.",
    targetAudience: "Growing businesses needing high-level technical direction.",
    process: [
      "Business Goal Alignment",
      "Technology Roadmap Creation",
      "Budget Planning",
      "Vendor Management"
    ],
    benefits: [
      "Better ROI on IT spend",
      "Future-proof technology",
      "Strategic advantage",
      "Expert industry insights"
    ],
    startingPrice: 400,
    icon: "Lightbulb"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Essential",
    price: 199,
    period: "per month",
    features: [
      "Remote Helpdesk Support",
      "Antivirus Management",
      "Patch Management",
      "Monthly Health Reports",
      "9am - 5pm Support"
    ],
    supportLevel: "Standard Remote",
    idealFor: "Small teams up to 10 users",
    isPopular: false
  },
  {
    name: "Professional",
    price: 449,
    period: "per month",
    features: [
      "Everything in Essential",
      "On-site Support Included",
      "Cloud Backup (500GB)",
      "Cyber Security Awareness Training",
      "Priority Response Time",
      "8am - 6pm Support"
    ],
    supportLevel: "Priority Remote & On-site",
    idealFor: "Growing businesses up to 30 users",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: 999,
    period: "per month",
    features: [
      "Everything in Professional",
      "Unlimited Cloud Backup",
      "Virtual CTO Services",
      "Advanced Threat Protection",
      "24/7 Critical Support",
      "Dedicated Account Manager"
    ],
    supportLevel: "24/7 Premium",
    idealFor: "Established companies with 50+ users",
    isPopular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alistair Graham",
    role: "Operations Director",
    company: "Hertfordshire Logistics Ltd",
    content: "The team at HB IT Solutions transformed our outdated server room into a sleek, cloud-based operation. Their response times are exceptional."
  },
  {
    name: "Sarah Jenkins",
    role: "Practice Manager",
    company: "Barnet Medical Group",
    content: "Security is paramount for us. Their cyber security audit gave us the peace of mind we needed to ensure our patient data is fully protected."
  },
  {
    name: "David Thompson",
    role: "Founder",
    company: "St Albans Creative",
    content: "Finally, an IT company that speaks plain English. They helped us scale our network as we grew from 5 to 25 people without a hitch."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Cloud Migration Success",
    client: "North London Retailers",
    challenge: "Legacy on-premise servers were failing, causing frequent downtime during peak sales periods.",
    solution: "Full migration to Microsoft Azure with redundant failover systems.",
    result: "Achieved 99.99% uptime over 12 months.",
    value: "Estimated £45,000 saved in lost revenue."
  },
  {
    title: "Cyber Security Overhaul",
    client: "Watford Financial Services",
    challenge: "Targeted by sophisticated phishing attacks that threatened client confidentiality.",
    solution: "Implemented multi-factor authentication and advanced endpoint protection.",
    result: "Zero successful breaches since implementation.",
    value: "Protected assets worth over £2.5M."
  }
];
