import { NavItem, Service, PricingTier, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: 'Disabled Children Community Support Team',
  address: '85 Great Portland Street, First Floor, London, W1W 7LT, United Kingdom',
  crn: '12345678',
  phone: '+0208 088 5954',
  email: 'info@gogentlecareltd.co.uk',
  hours: 'Mon - Fri: 09:00 - 17:30',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: 'home' },
  { label: 'Services', path: 'services' },
  { label: 'About Us', path: 'about' },
  { label: 'Pricing', path: 'pricing' },
  { label: 'Contact Us', path: 'contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive 24/7 monitoring and proactive maintenance for your entire IT estate.',
    targetAudience: 'SMEs looking for a reliable outsourced IT department.',
    process: ['Initial Audit', 'Infrastructure Setup', '24/7 Monitoring', 'Monthly Reporting'],
    benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Guidance'],
    startingPrice: 450,
    icon: 'ShieldCheck',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Advanced threat protection, vulnerability assessments, and employee security training.',
    targetAudience: 'Businesses handling sensitive data or requiring GDPR compliance.',
    process: ['Risk Assessment', 'Implementation', 'Staff Training', 'Continuous Monitoring'],
    benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind'],
    startingPrice: 750,
    icon: 'Lock',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Infrastructure & Migration',
    description: 'Seamless transition to Azure or AWS with ongoing cloud management and optimisation.',
    targetAudience: 'Companies looking to modernise their infrastructure and enable remote work.',
    process: ['Strategy Planning', 'Data Migration', 'Cloud Optimisation', 'Staff Onboarding'],
    benefits: ['Scalability', 'Cost Efficiency', 'Enhanced Collaboration'],
    startingPrice: 1200,
    icon: 'Cloud',
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Expert advice on digital transformation, IT roadmapping, and technology procurement.',
    targetAudience: 'Growing businesses needing a long-term technology strategy.',
    process: ['Business Analysis', 'Gap Identification', 'Strategic Roadmap', 'Execution Support'],
    benefits: ['Aligned Technology', 'Future-Proofing', 'ROI Maximisation'],
    startingPrice: 950,
    icon: 'Lightbulb',
  },
  {
    id: 'data-backup',
    title: 'Data Backup & Disaster Recovery',
    description: 'Robust backup solutions and rapid recovery plans to ensure business continuity.',
    targetAudience: 'Any business where data loss would be catastrophic.',
    process: ['Backup Strategy', 'Automated Backups', 'Recovery Testing', 'Incident Response'],
    benefits: ['Zero Data Loss', 'Rapid Recovery', 'Business Resilience'],
    startingPrice: 300,
    icon: 'Database',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Essential',
    price: 250,
    features: ['Business Hours Support', 'Remote Monitoring', 'Antivirus Management', 'Basic Cloud Backup'],
    supportLevel: '9am - 5pm Mon-Fri',
    idealClient: 'Small startups and micro-businesses',
  },
  {
    name: 'Professional',
    price: 550,
    features: ['Priority Support', 'On-site Support', 'Advanced Cybersecurity', 'Full Cloud Management', 'Quarterly Reviews'],
    supportLevel: '8am - 8pm Mon-Sat',
    idealClient: 'Established SMEs',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 1200,
    features: ['24/7/365 Support', 'Dedicated Account Manager', 'Custom Security Operations', 'Disaster Recovery as a Service', 'Unlimited On-site Visits'],
    supportLevel: '24/7/365',
    idealClient: 'Large organisations with complex needs',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'James Harrison',
    role: 'Managing Director',
    company: 'Harrison Logistics Ltd',
    content: 'The team transformed our outdated systems into a modern, cloud-based powerhouse. Their support is second to none.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Jenkins & Co Solicitors',
    content: 'Cybersecurity was our main concern. They implemented a robust solution that gives us and our clients total peace of mind.',
  },
  {
    name: 'Oliver Smith',
    role: 'Founder',
    company: 'TechFlow Solutions',
    content: 'Reliable, professional, and always there when we need them. They feel like a true extension of our own team.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Cloud Transformation for Logistics',
    client: 'Midlands Haulage',
    challenge: 'Legacy on-premise servers causing frequent downtime and high maintenance costs.',
    solution: 'Full migration to Microsoft Azure with automated backup systems.',
    result: '99.99% uptime achieved over 12 months.',
    savings: '£12,000 annual reduction in hardware maintenance costs.',
  },
  {
    title: 'Security Overhaul for Legal Firm',
    client: 'London Legal Partners',
    challenge: 'Increasing threat of phishing and lack of GDPR-compliant data handling.',
    solution: 'Implementation of Multi-Factor Authentication and end-to-end encryption.',
    result: 'Zero security breaches since implementation.',
    savings: 'Estimated £50,000 saved in potential data breach fines.',
  },
];
