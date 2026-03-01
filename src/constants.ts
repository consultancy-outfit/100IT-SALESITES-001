import { Service, PricingTier, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Eleanor Live Well",
  address: "174 Warrensway, Telford, England, TF7 5QG",
  crn: "17049272",
  phone: "0173 265 5162",
  email: "info@eleanorlivewellltd.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30 GMT",
};

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive end-to-end IT management for small to medium British enterprises.',
    targetAudience: 'SMEs looking to outsource their entire IT department.',
    process: ['Audit & Assessment', 'Infrastructure Setup', '24/7 Monitoring', 'Proactive Maintenance'],
    benefits: ['Reduced downtime', 'Fixed monthly costs', 'Expert UK-based support'],
    startingPrice: '£450/month',
    icon: 'ShieldCheck',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'Seamlessly move your business operations to secure, scalable cloud environments.',
    targetAudience: 'Businesses modernising their legacy infrastructure.',
    process: ['Cloud Readiness Assessment', 'Migration Planning', 'Execution', 'Post-Migration Optimisation'],
    benefits: ['Scalability', 'Remote work enablement', 'Cost efficiency'],
    startingPrice: '£1,200',
    icon: 'Cloud',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security Solutions',
    description: 'Protecting your digital assets with advanced threat detection and GDPR compliance.',
    targetAudience: 'Companies handling sensitive client data.',
    process: ['Vulnerability Scanning', 'Security Hardening', 'Employee Training', 'Incident Response Planning'],
    benefits: ['Data protection', 'Regulatory compliance', 'Peace of mind'],
    startingPrice: '£750',
    icon: 'Lock',
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Expert advice to align your technology roadmap with your business goals.',
    targetAudience: 'Leadership teams planning digital transformation.',
    process: ['Business Goal Analysis', 'Technology Gap Analysis', 'Roadmap Development', 'Implementation Oversight'],
    benefits: ['Strategic alignment', 'Informed decision making', 'Future-proofing'],
    startingPrice: '£150/hour',
    icon: 'Lightbulb',
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Designing and implementing robust, high-speed networking for modern offices.',
    targetAudience: 'New office setups or infrastructure refreshes.',
    process: ['Site Survey', 'Network Design', 'Hardware Installation', 'Performance Testing'],
    benefits: ['High-speed connectivity', 'Reliable hardware', 'Secure internal networks'],
    startingPrice: '£2,500',
    icon: 'Network',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Essential',
    price: '£299',
    features: ['Remote Support', 'Antivirus Management', 'Cloud Backups', 'Monthly Health Check'],
    support: 'Business Hours (9-5)',
    idealFor: 'Small startups and micro-businesses',
  },
  {
    name: 'Professional',
    price: '£599',
    features: ['On-site Support', 'Cyber Security Suite', 'Network Monitoring', 'Priority Response'],
    support: 'Extended Hours (8-8)',
    idealFor: 'Growing SMEs with 10-50 employees',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Dedicated Account Manager', '24/7 Critical Support', 'Full IT Outsourcing', 'Strategic Roadmap'],
    support: '24/7/365',
    idealFor: 'Large organisations with complex needs',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alistair Graham',
    role: 'Managing Director',
    company: 'Graham & Co. Logistics',
    content: 'Eleanor Live Well transformed our chaotic IT setup into a streamlined, secure environment. Their UK-based team is always responsive and professional.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Brighton Creative Agency',
    content: 'The cloud migration was flawless. We saved over £5,000 in hardware costs in the first year alone. Highly recommended for any UK business.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Digital Transformation for Retail',
    client: 'London Fashion Hub',
    result: '£12,000 annual savings',
    description: 'Replaced legacy on-premise servers with a hybrid cloud solution, reducing maintenance costs and improving uptime by 99.9%.',
  },
  {
    title: 'Security Overhaul',
    client: 'Midlands Financial Services',
    result: '100% GDPR Compliance',
    description: 'Implemented multi-layer security and staff training, preventing potential data breaches and ensuring full regulatory compliance.',
  },
];
