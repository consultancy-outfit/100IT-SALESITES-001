import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Walsall Domiciliary Care Service",
  address: "#####",
  crn: "00000",
  phone: "00000",
  email: "#####",
  hours: "Mon-Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Proactive monitoring and 24/7 support for your entire IT infrastructure.',
    overview: 'Our Managed IT Support provides a comprehensive safety net for your business. We don\'t just fix things when they break; we prevent issues before they impact your operations.',
    targetAudience: 'SMEs looking for reliable, outsourced IT departments.',
    process: ['Initial Audit', 'Infrastructure Setup', '24/7 Monitoring', 'Monthly Reviews'],
    benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Advice'],
    startingPrice: '£250',
    icon: 'ShieldCheck',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Strategy',
    description: 'Transition your business to the cloud with secure, scalable solutions.',
    overview: 'Modernise your workforce with Microsoft 365, Azure, and AWS integrations tailored for UK business compliance.',
    targetAudience: 'Businesses transitioning to remote or hybrid work models.',
    process: ['Readiness Assessment', 'Migration Planning', 'Execution', 'Post-Migration Support'],
    benefits: ['Scalability', 'Remote Access', 'Cost Efficiency'],
    startingPrice: '£1,500',
    icon: 'Cloud',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security Essentials',
    description: 'Protect your data with enterprise-grade security and GDPR compliance.',
    overview: 'In an era of increasing threats, we provide robust protection including firewalls, endpoint security, and employee training.',
    targetAudience: 'Any organisation handling sensitive client data.',
    process: ['Vulnerability Scan', 'Security Implementation', 'Employee Training', 'Incident Response Planning'],
    benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind'],
    startingPrice: '£500',
    icon: 'Lock',
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Expert guidance to align your technology with your business goals.',
    overview: 'Our consultants work with your leadership team to develop a long-term technology roadmap that drives growth.',
    targetAudience: 'Growing companies needing high-level technical direction.',
    process: ['Business Goal Analysis', 'Tech Gap Identification', 'Roadmap Creation', 'Implementation Oversight'],
    benefits: ['Strategic Alignment', 'Informed Decision Making', 'Future-Proofing'],
    startingPrice: '£1,000',
    icon: 'Lightbulb',
  },
  {
    id: 'disaster-recovery',
    title: 'Backup & Disaster Recovery',
    description: 'Ensure business continuity with robust data backup solutions.',
    overview: 'We ensure that your critical data is backed up and can be restored within minutes in the event of a disaster.',
    targetAudience: 'Businesses where data loss would be catastrophic.',
    process: ['Data Mapping', 'Backup Configuration', 'Recovery Testing', 'Continuous Monitoring'],
    benefits: ['Business Continuity', 'Data Integrity', 'Risk Mitigation'],
    startingPrice: '£150',
    icon: 'Database',
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '£199',
    features: ['Remote Support', 'Antivirus Management', 'Cloud Backups (50GB)', '9/5 Helpdesk'],
    supportLevel: 'Standard',
    idealFor: 'Micro-businesses and Startups',
  },
  {
    name: 'Professional',
    price: '£499',
    features: ['Remote & On-site Support', 'Advanced Security Suite', 'Cloud Backups (500GB)', '24/7 Monitoring', 'Priority Response'],
    supportLevel: 'Premium',
    idealFor: 'Growing SMEs',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '£999',
    features: ['Unlimited Support', 'Dedicated Account Manager', 'Custom Infrastructure', 'Full Disaster Recovery', 'Strategic IT Roadmap'],
    supportLevel: 'Elite',
    idealFor: 'Established Corporations',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alistair Graham',
    role: 'Managing Director',
    company: 'Graham & Sons Logistics',
    content: 'The team at Walsall Domiciliary Care transformed our legacy systems. We\'ve seen a 30% increase in efficiency since the migration.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Midlands Legal Partners',
    content: 'Their response time is incredible. It feels like having an in-house team without the overhead.',
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'TechStart Birmingham',
    content: 'Professional, knowledgeable, and distinctly British in their approach to service. Highly recommended.',
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Cloud Transformation',
    client: 'West Midlands Manufacturing',
    challenge: 'Legacy on-premise servers were failing, causing frequent downtime.',
    solution: 'Full migration to Azure with Microsoft 365 integration.',
    result: 'Saved £12,000 annually in maintenance costs and eliminated downtime.',
  },
  {
    title: 'Security Overhaul',
    client: 'Staffordshire Financial Services',
    challenge: 'Failed a security audit due to outdated protocols.',
    solution: 'Implemented multi-factor authentication and advanced threat protection.',
    result: 'Achieved Cyber Essentials Plus certification and secured £2M in client assets.',
  }
];
