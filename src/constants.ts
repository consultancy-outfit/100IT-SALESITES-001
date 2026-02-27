import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Swanton Community Services Buckinghamshire",
  address: "124 City Road, London, EC1V 2NX, United Kingdom",
  crn: "01234567",
  phone: "+44 20 7946 0000",
  email: "contact@swantonit.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and proactive maintenance for your entire IT estate.",
    overview: "Our Managed IT Support service acts as your internal IT department, providing expert guidance and rapid resolution for all technical issues.",
    targetAudience: "Small to medium-sized UK businesses looking to outsource their IT operations.",
    process: [
      "Initial Infrastructure Audit",
      "Onboarding & Tool Deployment",
      "24/7 Monitoring Setup",
      "Ongoing Proactive Maintenance",
      "Quarterly Strategic Reviews"
    ],
    benefits: [
      "Reduced downtime",
      "Predictable monthly costs",
      "Access to a full team of experts",
      "Improved system security"
    ],
    startingPrice: "£450",
    icon: "Monitor"
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Advanced threat protection and compliance management to safeguard your business data.",
    overview: "We deploy multi-layered security protocols to protect your business from evolving cyber threats, including ransomware and phishing.",
    targetAudience: "Businesses handling sensitive client data or requiring Cyber Essentials certification.",
    process: [
      "Vulnerability Assessment",
      "Security Policy Implementation",
      "Endpoint Protection Deployment",
      "Employee Awareness Training",
      "Continuous Threat Monitoring"
    ],
    benefits: [
      "GDPR compliance assurance",
      "Protection against data breaches",
      "Enhanced brand reputation",
      "Business continuity"
    ],
    startingPrice: "£600",
    icon: "ShieldCheck"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Seamless migration and management of Microsoft 365, Azure, and AWS environments.",
    overview: "Modernise your workplace with scalable cloud infrastructure that enables remote work and improves collaboration.",
    targetAudience: "Companies looking to transition from on-premise servers to flexible cloud environments.",
    process: [
      "Cloud Readiness Assessment",
      "Migration Strategy Design",
      "Data & Application Migration",
      "User Training & Adoption",
      "Cloud Cost Optimisation"
    ],
    benefits: [
      "Scalability on demand",
      "Enhanced remote collaboration",
      "Automatic updates",
      "Cost efficiency"
    ],
    startingPrice: "£300",
    icon: "Cloud"
  },
  {
    id: "it-consulting",
    title: "IT Strategy & Consulting",
    description: "Strategic technology roadmaps aligned with your long-term business objectives.",
    overview: "Our consultants work with your leadership team to ensure your technology investment drives real business growth.",
    targetAudience: "Growing businesses needing high-level technical direction without a full-time CTO.",
    process: [
      "Business Goal Alignment",
      "Current State Analysis",
      "Gap Analysis",
      "Technology Roadmap Creation",
      "Implementation Oversight"
    ],
    benefits: [
      "Better ROI on tech spend",
      "Future-proofed infrastructure",
      "Strategic competitive advantage",
      "Risk mitigation"
    ],
    startingPrice: "£1,200",
    icon: "Lightbulb"
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Robust, high-speed networking solutions for office and remote connectivity.",
    overview: "We design and implement secure, high-performance networks that serve as the backbone of your digital operations.",
    targetAudience: "Offices requiring reliable Wi-Fi, structured cabling, or secure VPN solutions.",
    process: [
      "Site Survey & Requirements",
      "Network Design & Topology",
      "Hardware Procurement",
      "Installation & Configuration",
      "Performance Testing"
    ],
    benefits: [
      "High-speed connectivity",
      "Secure remote access",
      "Minimal latency",
      "Scalable architecture"
    ],
    startingPrice: "£800",
    icon: "Network"
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
      "Basic Email Support",
      "Monthly Health Reports"
    ],
    supportLevel: "9am - 5pm Business Days",
    idealFor: "Small teams needing basic maintenance.",
    isPopular: false
  },
  {
    name: "Professional IT",
    price: "£45",
    features: [
      "Priority Remote Support",
      "On-site Support Included",
      "Advanced Cyber Security",
      "Cloud Backup Management",
      "Quarterly Strategy Meetings"
    ],
    supportLevel: "24/7 Emergency Support",
    idealFor: "Growing businesses with critical IT needs.",
    isPopular: true
  },
  {
    name: "Enterprise Managed",
    price: "£85",
    features: [
      "Dedicated Account Manager",
      "Unlimited On-site Support",
      "Full Security Operations (SOC)",
      "Disaster Recovery Planning",
      "vCTO Strategic Consulting"
    ],
    supportLevel: "24/7 Priority Support",
    idealFor: "Established firms requiring full IT management.",
    isPopular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "James Henderson",
    role: "Managing Director",
    company: "Henderson Logistics Ltd",
    content: "Swanton IT transformed our operations. Their cloud migration was seamless, and their support team is always there when we need them. Truly a professional British service."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Bucks Creative Agency",
    content: "The security audit they performed gave us peace of mind. We now have Cyber Essentials certification thanks to their expert guidance. Highly recommended for any UK business."
  },
  {
    name: "David Miller",
    role: "Founder",
    company: "Miller & Co Solicitors",
    content: "Reliable, efficient, and cost-effective. Their managed IT service has reduced our downtime by 90% in the first six months. A vital partner for our firm."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Manufacturing Efficiency Boost",
    industry: "Manufacturing",
    challenge: "Legacy servers causing frequent production delays.",
    solution: "Full Azure cloud migration and network overhaul.",
    result: "Saved £12,000 annually in maintenance costs and eliminated downtime."
  },
  {
    title: "Legal Data Security Overhaul",
    industry: "Legal",
    challenge: "Outdated security protocols risking client confidentiality.",
    solution: "Implemented multi-factor authentication and SOC monitoring.",
    result: "Achieved 100% GDPR compliance and prevented 3 major breach attempts."
  }
];
