import { Service, PricingTier, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Rosewood Lodge IT Services Ltd",
  address: "Rosewood Lodge, 12-14 High Street, Reading, Berkshire, RG1 1EY, United Kingdom",
  crn: "12345678",
  phone: "+44 (0) 118 950 1234",
  email: "info@rosewoodlodge.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive 24/7 monitoring and support for your entire IT infrastructure.',
    longDescription: 'Our Managed IT Support provides a complete outsourced IT department for your business. We handle everything from desktop support to server maintenance, ensuring your systems are always up and running.',
    targetAudience: 'Small to medium-sized UK businesses looking for reliable, fixed-cost IT management.',
    process: ['Initial Audit', 'Infrastructure Setup', '24/7 Monitoring', 'Proactive Maintenance', 'Monthly Reporting'],
    benefits: ['Reduced Downtime', 'Fixed Monthly Costs', 'Access to Expert Engineers', 'Enhanced Security'],
    startingPrice: 250,
    icon: 'ShieldCheck',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Strategy',
    description: 'Seamless transition to Microsoft 365, Azure, and AWS with expert guidance.',
    longDescription: 'Move your business to the cloud with confidence. We specialise in migrating legacy systems to modern cloud platforms, improving accessibility and reducing hardware costs.',
    targetAudience: 'Growing enterprises needing scalable and flexible infrastructure.',
    process: ['Readiness Assessment', 'Migration Planning', 'Data Transfer', 'User Training', 'Post-Migration Support'],
    benefits: ['Scalability', 'Remote Work Enablement', 'Cost Efficiency', 'Disaster Recovery'],
    startingPrice: 1500,
    icon: 'Cloud',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Compliance',
    description: 'Protect your business from evolving threats with our advanced security stack.',
    longDescription: 'In an era of increasing cyber threats, we provide multi-layered security solutions including endpoint protection, firewall management, and employee awareness training.',
    targetAudience: 'Businesses handling sensitive data or requiring GDPR/Cyber Essentials compliance.',
    process: ['Vulnerability Scan', 'Risk Assessment', 'Security Implementation', 'Continuous Monitoring', 'Incident Response'],
    benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind', 'Brand Reputation'],
    startingPrice: 500,
    icon: 'Lock',
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Align your technology roadmap with your long-term business goals.',
    longDescription: 'Our consultants work with your leadership team to develop a technology strategy that drives growth and innovation. We help you make informed decisions about your IT investments.',
    targetAudience: 'Leadership teams needing expert advice on digital transformation.',
    process: ['Business Goal Alignment', 'Gap Analysis', 'Roadmap Development', 'Vendor Selection', 'Implementation Oversight'],
    benefits: ['Strategic Advantage', 'Optimised ROI', 'Future-Proofing', 'Efficiency Gains'],
    startingPrice: 1200,
    icon: 'Lightbulb',
  },
  {
    id: 'disaster-recovery',
    title: 'Backup & Disaster Recovery',
    description: 'Ensure business continuity with robust data backup and recovery plans.',
    longDescription: 'We provide automated, off-site backup solutions and comprehensive disaster recovery plans to ensure your business can recover quickly from any data loss event.',
    targetAudience: 'Any business where data loss would have a critical impact on operations.',
    process: ['Backup Audit', 'Solution Design', 'Implementation', 'Regular Testing', 'Recovery Support'],
    benefits: ['Business Continuity', 'Data Integrity', 'Minimal Downtime', 'Compliance'],
    startingPrice: 100,
    icon: 'Database',
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Essentials',
    price: 25,
    features: [
      'Remote IT Support',
      'Antivirus Protection',
      'Patch Management',
      'Email Security',
      '9am - 5pm Helpdesk'
    ],
    supportLevel: 'Standard Business Hours',
    idealClient: 'Small teams (up to 10 users)',
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: 45,
    features: [
      'All Essentials Features',
      'On-site Support Included',
      '24/7 Server Monitoring',
      'Backup Management',
      'Strategic IT Review (Annual)'
    ],
    supportLevel: 'Priority Support',
    idealClient: 'Growing businesses (10-50 users)',
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 75,
    features: [
      'All Professional Features',
      'Dedicated Account Manager',
      'Cyber Essentials Assistance',
      'Unlimited Support Calls',
      'Quarterly Strategy Meetings'
    ],
    supportLevel: '24/7 Critical Support',
    idealClient: 'Established companies (50+ users)',
    cta: 'Contact Us',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'James Henderson',
    role: 'Managing Director',
    company: 'Henderson Logistics',
    content: 'Rosewood Lodge transformed our IT infrastructure. Their proactive approach saved us over £12,000 in potential downtime last year alone.',
  },
  {
    name: 'Sarah Miller',
    role: 'Operations Manager',
    company: 'Thames Valley Creative',
    content: 'The migration to Microsoft 365 was seamless. Their team was professional, knowledgeable, and always available to help our staff.',
  },
  {
    name: 'David Wright',
    role: 'Finance Director',
    company: 'Wright & Co Accountants',
    content: 'Cyber security was our biggest concern. Rosewood Lodge implemented a robust system that gives us and our clients complete peace of mind.',
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Digital Transformation for Manufacturing',
    client: 'Reading Precision Engineering',
    challenge: 'Legacy on-premise servers causing frequent outages and limiting remote work.',
    solution: 'Full migration to Azure Cloud and implementation of Microsoft 365.',
    result: '100% uptime achieved over 12 months and enabled hybrid working for all staff.',
    savings: '£15,000 annual reduction in hardware maintenance costs.',
  },
  {
    title: 'Cyber Security Overhaul',
    client: 'Berkshire Legal Partners',
    challenge: 'Increasing phishing attempts and lack of formal security compliance.',
    solution: 'Implemented multi-factor authentication, advanced threat protection, and staff training.',
    result: 'Achieved Cyber Essentials Plus certification and zero security breaches since implementation.',
    savings: 'Protected against potential GDPR fines and data loss costs estimated at £50,000+.',
  }
];
