import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Warm Embrace Care Agency",
  address: "Not Available",
  crn: "Not Available",
  phone: "Not Available",
  email: "info@warmembracecareagency.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30 GMT",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 proactive monitoring and helpdesk support for your entire business infrastructure.",
    targetAudience: "SMEs looking for a reliable outsourced IT department.",
    process: ["Audit", "Onboarding", "24/7 Monitoring", "Monthly Reviews"],
    benefits: ["Reduced Downtime", "Predictable Costs", "Expert Access"],
    startingPrice: "£450/month",
    icon: "Shield",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Strategy",
    description: "Seamless transition to Microsoft Azure or AWS with a focus on security and scalability.",
    targetAudience: "Businesses moving away from legacy on-premise servers.",
    process: ["Assessment", "Architecture Design", "Data Migration", "Training"],
    benefits: ["Remote Access", "Scalability", "Cost Efficiency"],
    startingPrice: "£1,200",
    icon: "Cloud",
  },
  {
    id: "cyber-security",
    title: "Cyber Security Essentials",
    description: "Multi-layered security approach including firewall management, EDR, and staff training.",
    targetAudience: "UK firms handling sensitive client data.",
    process: ["Vulnerability Scan", "Implementation", "Staff Training", "Ongoing Audits"],
    benefits: ["GDPR Compliance", "Threat Prevention", "Peace of Mind"],
    startingPrice: "£750",
    icon: "Lock",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Design and installation of high-speed, secure wired and wireless networks.",
    targetAudience: "Offices requiring robust connectivity for high-performance teams.",
    process: ["Site Survey", "Design", "Hardware Install", "Testing"],
    benefits: ["High Speed", "Reliability", "Secure Guest Access"],
    startingPrice: "£950",
    icon: "Network",
  },
  {
    id: "it-consultancy",
    title: "Strategic IT Consultancy",
    description: "Long-term technology roadmapping aligned with your business growth objectives.",
    targetAudience: "Leadership teams planning digital transformation.",
    process: ["Discovery", "Strategy Formulation", "Roadmap Delivery", "Implementation Support"],
    benefits: ["Aligned Growth", "ROI Focus", "Future-Proofing"],
    startingPrice: "£150/hour",
    icon: "Lightbulb",
  },
  {
    id: "disaster-recovery",
    title: "Backup & Disaster Recovery",
    description: "Automated off-site backups and rapid recovery protocols to ensure business continuity.",
    targetAudience: "Any business where data loss is not an option.",
    process: ["Data Mapping", "Backup Setup", "Recovery Testing", "Monitoring"],
    benefits: ["Zero Data Loss", "Fast Recovery", "Compliance"],
    startingPrice: "£200/month",
    icon: "Database",
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential Support",
    price: "£25",
    features: ["Remote Helpdesk", "Antivirus Included", "Patch Management", "Email Support"],
    supportLevel: "Business Hours Only",
    idealFor: "Small teams and startups",
  },
  {
    name: "Business Pro",
    price: "£45",
    features: ["On-site Support", "24/7 Monitoring", "Security Training", "Backup Management", "Priority Response"],
    supportLevel: "24/7 Critical Support",
    idealFor: "Growing SMEs",
    isPopular: true,
  },
  {
    name: "Enterprise Elite",
    price: "£85",
    features: ["Dedicated Account Manager", "vCIO Services", "Unlimited Support", "Full Security Stack", "Compliance Auditing"],
    supportLevel: "Dedicated 24/7 Support",
    idealFor: "Large organisations",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alistair Graham",
    role: "Director, Graham & Sons Logistics",
    content: "Warm Embrace transformed our chaotic IT setup into a streamlined, secure operation. Their response time is exceptional.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager, Thames Valley Legal",
    content: "The cybersecurity audit they performed was eye-opening. We now feel much more confident in our GDPR compliance.",
  },
  {
    name: "David O'Connor",
    role: "Founder, TechHub Manchester",
    content: "A truly professional team that understands the unique pressures of the UK tech sector. Highly recommended.",
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Cloud Migration Success",
    client: "Midlands Manufacturing Ltd",
    result: "£12,000 annual savings in server maintenance",
    description: "Migrated legacy on-premise infrastructure to Azure, improving remote access for 50+ staff.",
  },
  {
    title: "Security Overhaul",
    client: "London Financial Partners",
    result: "100% reduction in phishing incidents",
    description: "Implemented multi-factor authentication and advanced threat protection across all endpoints.",
  }
];
