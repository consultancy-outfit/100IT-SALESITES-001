import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Innovate UK IT Services",
  address: "#",
  crn: "000000000",
  phone: "00000",
  email: "Info@barnsleybusinessinnovationcentre.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and proactive support for your entire infrastructure.",
    overview: "Our Managed IT Support provides a complete outsourced IT department for your business. We handle everything from desktop support to server maintenance, ensuring your team stays productive.",
    targetAudience: "SMEs looking for reliable, fixed-cost IT management.",
    process: [
      "Initial Infrastructure Audit",
      "Onboarding & Tool Deployment",
      "24/7 Monitoring Setup",
      "Proactive Maintenance Schedule",
      "Monthly Performance Reviews"
    ],
    benefits: [
      "Reduced Downtime",
      "Predictable Monthly Costs",
      "Access to Expert Technicians",
      "Enhanced Security Posture"
    ],
    startingPrice: "£250/month",
    icon: "ShieldCheck"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    description: "Seamless transition to Azure, AWS, or Private Cloud environments.",
    overview: "We help UK businesses leverage the power of the cloud to increase flexibility and reduce hardware costs. Whether it's Microsoft 365 or complex server migrations, we've got you covered.",
    targetAudience: "Businesses outgrowing on-premise hardware or seeking remote work capabilities.",
    process: [
      "Cloud Readiness Assessment",
      "Strategy & Architecture Design",
      "Data Migration & Testing",
      "User Training & Handover",
      "Post-Migration Optimization"
    ],
    benefits: [
      "Scalable Infrastructure",
      "Improved Remote Access",
      "Automatic Backups",
      "Lower Capital Expenditure"
    ],
    startingPrice: "£500 (One-off setup)",
    icon: "Cloud"
  },
  {
    id: "cyber-security",
    title: "Cyber Security Essentials",
    description: "Protecting your business data with industry-leading security frameworks.",
    overview: "In an era of increasing threats, we provide robust security layers including firewalls, endpoint protection, and Cyber Essentials certification readiness.",
    targetAudience: "Any UK business handling sensitive client data or requiring compliance.",
    process: [
      "Vulnerability Scanning",
      "Security Policy Development",
      "Implementation of Security Controls",
      "Staff Awareness Training",
      "Continuous Threat Monitoring"
    ],
    benefits: [
      "Protection against Ransomware",
      "GDPR Compliance Support",
      "Peace of Mind",
      "Reduced Insurance Premiums"
    ],
    startingPrice: "£150/month",
    icon: "Lock"
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "High-performance cabling, WiFi, and switching solutions.",
    overview: "A solid business starts with a solid network. We design and install high-speed wired and wireless networks tailored to your office layout.",
    targetAudience: "New office fit-outs or businesses experiencing slow connectivity.",
    process: [
      "Site Survey & Heat Mapping",
      "Network Design",
      "Professional Installation",
      "Testing & Certification",
      "Ongoing Support"
    ],
    benefits: [
      "Eliminate Dead Zones",
      "High-Speed Data Transfer",
      "Future-Proofed Wiring",
      "Secure Guest Access"
    ],
    startingPrice: "£750 (Project based)",
    icon: "Network"
  },
  {
    id: "disaster-recovery",
    title: "Backup & Disaster Recovery",
    description: "Ensuring your business can recover from any data loss event within minutes.",
    overview: "We implement automated, encrypted backup solutions that store data both locally and in the cloud, ensuring business continuity.",
    targetAudience: "Businesses where data loss would be catastrophic.",
    process: [
      "Data Criticality Assessment",
      "Backup Strategy Design",
      "Automated System Implementation",
      "Regular Recovery Testing",
      "24/7 Monitoring"
    ],
    benefits: [
      "Zero Data Loss Guarantee",
      "Rapid Recovery Times",
      "Encrypted Off-site Storage",
      "Compliance with Data Regs"
    ],
    startingPrice: "£100/month",
    icon: "Database"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential Support",
    price: "£25",
    features: [
      "Remote Helpdesk Support",
      "Antivirus Management",
      "Patch Management",
      "9am - 5pm Coverage",
      "Next Business Day Response"
    ],
    supportLevel: "Standard Remote",
    idealFor: "Small teams with basic IT needs.",
  },
  {
    name: "Professional",
    price: "£45",
    features: [
      "Everything in Essential",
      "On-site Support Included",
      "24/7 Server Monitoring",
      "Cloud Backup (50GB)",
      "4-Hour Response Time",
      "Quarterly IT Strategy Meetings"
    ],
    supportLevel: "Priority On-site & Remote",
    idealFor: "Growing SMEs requiring proactive care.",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "£75",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Advanced Cyber Security Suite",
      "Unlimited Cloud Backup",
      "1-Hour Critical Response",
      "Annual Security Audit"
    ],
    supportLevel: "VIP 24/7 Support",
    idealFor: "Large organisations with complex compliance needs.",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alistair Cook",
    role: "Managing Director",
    company: "Yorkshire Manufacturing Ltd",
    content: "Innovate UK IT Services transformed our legacy systems. Their migration to the cloud was seamless, and we've seen a 30% increase in productivity since."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Barnsley Creative Agency",
    content: "The team is incredibly responsive. Whenever we have a glitch, they're on it immediately. It feels like having our own in-house IT department."
  },
  {
    name: "David Thompson",
    role: "Finance Director",
    company: "Pennine Logistics",
    content: "Their focus on cyber security gave us the confidence to bid for larger government contracts. A truly professional British firm."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Cloud Transformation for Logistics",
    client: "South Yorks Freight",
    challenge: "Ageing on-premise servers causing frequent downtime and high maintenance costs.",
    solution: "Full migration to Microsoft Azure with integrated backup and remote desktop services.",
    result: "Reduced annual IT spend by £12,000 and eliminated server-related downtime entirely."
  },
  {
    title: "Security Overhaul for Legal Firm",
    client: "Walker & Co Solicitors",
    challenge: "Failed a security audit due to lack of formal encryption and outdated firewalls.",
    solution: "Implemented Cyber Essentials framework, hardware firewalls, and end-to-end encryption.",
    result: "Achieved Cyber Essentials Plus certification and secured client data for £4,500 initial investment."
  }
];
