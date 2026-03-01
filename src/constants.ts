import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_DETAILS = {
  name: "Bridlington IT Solutions Ltd",
  address: "1 Love Lane, Kings Langley, England, WD4 9JT",
  crn: "17048627",
  phone: "0126 234 2067",
  email: "info@bridlingtonltd.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export interface Service {
  id: string;
  title: string;
  description: string;
  overview: string;
  target: string;
  process: string[];
  benefits: string[];
  startingPrice: number;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Proactive monitoring and 24/7 helpdesk support for your entire infrastructure.",
    overview: "Our Managed IT Support service acts as your dedicated IT department. We handle everything from day-to-day troubleshooting to long-term strategic planning, ensuring your systems are always up and running.",
    target: "SMEs looking for reliable, scalable IT support without the overhead of an in-house team.",
    process: ["Audit & Onboarding", "Proactive Monitoring Setup", "24/7 Helpdesk Integration", "Monthly Performance Reviews"],
    benefits: ["Reduced downtime", "Predictable monthly costs", "Access to expert engineers", "Strategic IT roadmap"],
    startingPrice: 250,
    icon: "ShieldCheck",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    description: "Seamless transition to Microsoft Azure or AWS with secure, scalable hosting.",
    overview: "We help businesses leverage the power of the cloud to improve flexibility and reduce hardware costs. Whether it's a full migration or a hybrid setup, we ensure a smooth transition.",
    target: "Businesses outgrowing physical servers or seeking better remote work capabilities.",
    process: ["Readiness Assessment", "Migration Strategy", "Data Transfer", "Post-Migration Optimization"],
    benefits: ["Improved scalability", "Enhanced disaster recovery", "Lower capital expenditure", "Work from anywhere"],
    startingPrice: 500,
    icon: "Cloud",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Compliance",
    description: "Protecting your business from evolving threats with advanced security protocols.",
    overview: "In an era of increasing cyber threats, we provide multi-layered security solutions including firewalls, endpoint protection, and employee awareness training.",
    target: "Companies handling sensitive data or requiring Cyber Essentials certification.",
    process: ["Vulnerability Scanning", "Security Implementation", "Employee Training", "Continuous Monitoring"],
    benefits: ["Protection against ransomware", "GDPR compliance", "Peace of mind", "Insurance premium reduction"],
    startingPrice: 150,
    icon: "Lock",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "High-performance wired and wireless networking solutions tailored to your office.",
    overview: "A solid network is the backbone of any digital business. We design, install, and maintain high-speed networks that support your growth.",
    target: "New office fit-outs or businesses experiencing slow connectivity and dropouts.",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Testing & Certification"],
    benefits: ["High-speed connectivity", "Seamless Wi-Fi coverage", "Secure guest access", "Future-proofed cabling"],
    startingPrice: 750,
    icon: "Network",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Expert guidance to align your technology with your business goals.",
    overview: "Our consultants work with your leadership team to identify technology gaps and opportunities, helping you make informed investment decisions.",
    target: "Growing businesses needing high-level technical direction and digital transformation.",
    process: ["Business Goal Alignment", "Infrastructure Audit", "Solution Design", "Implementation Oversight"],
    benefits: ["Better ROI on tech spend", "Competitive advantage", "Risk mitigation", "Digital transformation"],
    startingPrice: 1000,
    icon: "BarChart3",
  },
  {
    id: "backup-recovery",
    title: "Backup & Disaster Recovery",
    description: "Ensuring your data is safe and recoverable no matter what happens.",
    overview: "Data loss can be catastrophic. We implement automated, encrypted backup solutions that ensure your business can recover in minutes, not days.",
    target: "Any business that cannot afford more than an hour of data loss.",
    process: ["Data Mapping", "Backup Configuration", "Recovery Testing", "Off-site Replication"],
    benefits: ["Zero data loss guarantee", "Fast recovery times", "Automated protection", "Compliance with data laws"],
    startingPrice: 100,
    icon: "Database",
  }
];

export const PRICING_PLANS = [
  {
    name: "Essential Support",
    price: 250,
    period: "per month",
    description: "Perfect for small offices needing reliable helpdesk support.",
    features: [
      "Remote Helpdesk (9-5)",
      "Proactive Monitoring",
      "Antivirus Management",
      "Monthly Health Reports",
      "Up to 5 Users"
    ],
    support: "Standard Business Hours",
    idealFor: "Micro-businesses & Startups",
    vat: "Excluding VAT",
    cta: "Get Started",
    popular: false
  },
  {
    name: "Business Pro",
    price: 750,
    period: "per month",
    description: "Comprehensive IT management for growing companies.",
    features: [
      "24/7 Remote Support",
      "On-site Emergency Response",
      "Advanced Cybersecurity",
      "Cloud Backup (500GB)",
      "Up to 20 Users",
      "vCIO Strategic Planning"
    ],
    support: "24/7 Priority Support",
    idealFor: "Established SMEs",
    vat: "Excluding VAT",
    cta: "Choose Pro",
    popular: true
  },
  {
    name: "Enterprise Managed",
    price: 1500,
    period: "per month",
    description: "Full-scale IT infrastructure management and strategy.",
    features: [
      "Unlimited Support",
      "Dedicated Account Manager",
      "Full Compliance Auditing",
      "Disaster Recovery Suite",
      "Unlimited Users",
      "Custom Project Work"
    ],
    support: "Dedicated VIP Support",
    idealFor: "Large Organizations",
    vat: "Excluding VAT",
    cta: "Contact Sales",
    popular: false
  }
];
