import { Service, PricingTier, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Wrekin Villa",
  address: "Abihealth Southwest Office, UK",
  crn: "17045936",
  phone: "020 7946 0123", // Example UK number as none provided
  email: "info@caredukltd.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Proactive, 24/7 monitoring and support for your entire IT infrastructure.",
    longDescription: "Our Managed IT Support service acts as your dedicated internal IT department. We handle everything from day-to-day troubleshooting to long-term strategic planning, ensuring your systems are always operational and efficient.",
    targetAudience: "Small to medium-sized UK businesses looking for reliable IT oversight.",
    process: ["Initial Infrastructure Audit", "Onboarding & Tool Deployment", "24/7 Monitoring Setup", "Regular Strategy Reviews"],
    benefits: ["Reduced Downtime", "Predictable Monthly Costs", "Expert Technical Advice", "Enhanced Security"],
    startingPrice: "£250",
    icon: "Shield",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Comprehensive protection against evolving digital threats and data breaches.",
    longDescription: "In an era of increasing cyber threats, we provide multi-layered security protocols including advanced firewalls, endpoint protection, and employee security awareness training to safeguard your British business assets.",
    targetAudience: "Businesses handling sensitive client data or operating in regulated sectors.",
    process: ["Vulnerability Assessment", "Security Implementation", "Employee Training", "Continuous Threat Monitoring"],
    benefits: ["GDPR Compliance", "Data Integrity", "Peace of Mind", "Risk Mitigation"],
    startingPrice: "£500",
    icon: "Lock",
  },
  {
    id: "cloud-services",
    title: "Cloud Migration & Hosting",
    description: "Seamless transition to secure, scalable cloud environments like Azure and AWS.",
    longDescription: "Modernise your operations with our cloud services. We help you migrate legacy systems to the cloud, improving accessibility for remote teams while reducing physical hardware costs.",
    targetAudience: "Companies looking to enable remote work or scale infrastructure rapidly.",
    process: ["Readiness Assessment", "Migration Strategy", "Execution & Testing", "Post-Migration Support"],
    benefits: ["Scalability", "Remote Accessibility", "Disaster Recovery", "Cost Efficiency"],
    startingPrice: "£400",
    icon: "Cloud",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Robust networking solutions designed for speed, reliability, and growth.",
    longDescription: "We design and implement high-performance network architectures, from structured cabling to advanced Wi-Fi solutions, ensuring your business stays connected without bottlenecks.",
    targetAudience: "Offices, warehouses, and retail spaces requiring high-speed connectivity.",
    process: ["Site Survey", "Network Design", "Installation", "Performance Optimisation"],
    benefits: ["High Speed", "Reliability", "Future-Proofing", "Seamless Connectivity"],
    startingPrice: "£750",
    icon: "Network",
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy & Strategy",
    description: "Strategic technology roadmaps aligned with your business objectives.",
    longDescription: "Our expert consultants work with your leadership team to align technology with your business goals. We provide independent advice on software selection, digital transformation, and IT budgeting.",
    targetAudience: "Leadership teams planning significant growth or digital change.",
    process: ["Discovery Workshop", "Gap Analysis", "Strategic Roadmap", "Implementation Guidance"],
    benefits: ["Strategic Alignment", "ROI Maximisation", "Informed Decision Making", "Competitive Edge"],
    startingPrice: "£1,200",
    icon: "Lightbulb",
  }
];

export const PRICING: PricingTier[] = [
  {
    name: "Essential Support",
    price: "£249",
    period: "per month",
    features: ["Remote Support (9-5)", "Antivirus Protection", "Cloud Backups (50GB)", "Monthly Health Checks"],
    support: "Standard Business Hours",
    idealFor: "Small startups and micro-businesses.",
    cta: "Start Essential",
  },
  {
    name: "Professional",
    price: "£599",
    period: "per month",
    features: ["Priority Remote & On-site Support", "Advanced Cybersecurity Suite", "Cloud Backups (500GB)", "Quarterly IT Strategy Meetings", "Network Monitoring"],
    support: "Extended Hours (8am-8pm)",
    idealFor: "Growing SMEs with 10-50 employees.",
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "£1,499",
    period: "per month",
    features: ["24/7 Dedicated Support", "Full Managed Security (SOC)", "Unlimited Cloud Backups", "Monthly Strategic Reviews", "Dedicated Account Manager"],
    support: "24/7/365",
    idealFor: "Larger organisations with complex IT needs.",
    cta: "Contact for Enterprise",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alistair Graham",
    role: "Managing Director",
    company: "Graham & Sons Logistics",
    content: "Wrekin Villa transformed our chaotic IT setup into a streamlined machine. Their response times are exceptional, and they truly understand the UK business landscape.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Midlands Creative Agency",
    content: "Since moving our cybersecurity to Wrekin Villa, we've had zero downtime. Their team is professional, knowledgeable, and always ready to help.",
  },
  {
    name: "James Thompson",
    role: "Founder",
    company: "TechPulse UK",
    content: "The cloud migration was seamless. We were worried about data loss, but Wrekin Villa handled everything with surgical precision. Highly recommended.",
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Financial Services Firm Security Overhaul",
    challenge: "A London-based firm was at risk of GDPR non-compliance due to outdated security.",
    solution: "Implemented multi-factor authentication and encrypted cloud storage.",
    result: "100% compliance achieved and zero security incidents in 18 months.",
    value: "Saved £45,000 in potential regulatory fines.",
  },
  {
    title: "Retail Chain Network Unification",
    challenge: "A regional retail chain had inconsistent connectivity across 12 UK locations.",
    solution: "Deployed a unified SD-WAN solution with 4G failover.",
    result: "Reduced network downtime by 98% during peak trading hours.",
    value: "Increased annual revenue by £120,000 through improved uptime.",
  }
];
