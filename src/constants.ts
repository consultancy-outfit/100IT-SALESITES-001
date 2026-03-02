/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const COMPANY_DETAILS = {
  name: "Shared Lives Northumberland",
  address: "Not Available",
  crn: "Not Available",
  phone: "Not Available",
  email: "Not Available",
  hours: "Monday - Friday: 09:00 - 17:30",
};

export const SERVICES = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    description: "Comprehensive 24/7 monitoring and support for your entire IT infrastructure, ensuring maximum uptime and productivity.",
    targetAudience: "Small to medium-sized UK businesses looking for reliable day-to-day IT management.",
    process: ["Initial Audit", "Environment Stabilization", "Proactive Monitoring", "24/7 Helpdesk Access"],
    benefits: ["Reduced downtime", "Predictable monthly costs", "Access to expert engineers", "Peace of mind"],
    startingPrice: "£250/month",
    icon: "Shield",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Migration & Hosting",
    description: "Secure and scalable cloud solutions tailored to your business needs, including Microsoft 365 and Azure migrations.",
    targetAudience: "Companies looking to modernize their infrastructure and enable remote work.",
    process: ["Readiness Assessment", "Migration Strategy", "Secure Deployment", "Post-Migration Support"],
    benefits: ["Enhanced flexibility", "Improved collaboration", "Robust disaster recovery", "Scalable resources"],
    startingPrice: "£500 per project",
    icon: "Cloud",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Services",
    description: "Advanced threat protection, security audits, and employee training to safeguard your business data.",
    targetAudience: "Businesses handling sensitive data or requiring Cyber Essentials certification.",
    process: ["Vulnerability Scanning", "Security Implementation", "Staff Training", "Continuous Monitoring"],
    benefits: ["Protection against ransomware", "Regulatory compliance", "Reduced risk profile", "Enhanced reputation"],
    startingPrice: "£400/audit",
    icon: "Lock",
  },
  {
    id: "it-consultancy",
    title: "IT Strategy & Consultancy",
    description: "Expert guidance to align your IT roadmap with your business goals for long-term growth.",
    targetAudience: "Growing businesses needing high-level technical leadership without a full-time CTO.",
    process: ["Business Goal Alignment", "Technology Roadmap", "Budget Planning", "Implementation Oversight"],
    benefits: ["Strategic technology use", "Cost optimization", "Future-proofed systems", "Competitive advantage"],
    startingPrice: "£150/hour",
    icon: "Lightbulb",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    description: "Design, installation, and maintenance of high-performance wired and wireless networks.",
    targetAudience: "Offices and facilities requiring robust, high-speed connectivity.",
    process: ["Site Survey", "Network Design", "Hardware Installation", "Performance Testing"],
    benefits: ["Blazing fast speeds", "Seamless connectivity", "Secure guest access", "Easily scalable"],
    startingPrice: "£750 per site",
    icon: "Network",
  },
];

export const PRICING_PLANS = [
  {
    name: "Essential",
    price: "£25",
    features: ["Remote Support", "Antivirus Protection", "Cloud Backup (50GB)", "Email Support"],
    supportLevel: "Business Hours",
    idealFor: "Sole traders and micro-businesses",
  },
  {
    name: "Professional",
    price: "£55",
    features: ["On-site & Remote Support", "Advanced Security Suite", "Cloud Backup (250GB)", "Priority Response", "Microsoft 365 Management"],
    supportLevel: "24/7 Emergency Support",
    idealFor: "Growing SMEs with 10-50 employees",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "£95",
    features: ["Dedicated Account Manager", "Full Infrastructure Management", "Unlimited Cloud Backup", "Strategic IT Planning", "Cyber Essentials Prep"],
    supportLevel: "Dedicated 24/7 Support",
    idealFor: "Larger organizations with complex needs",
  },
];
