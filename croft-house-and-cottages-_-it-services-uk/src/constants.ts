import { Service, PricingTier, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: 'Croft House and Cottages',
  address: '12 Croft Business Park, Bromborough, Wirral, CH62 3PQ, United Kingdom',
  crn: '08421579',
  phone: '+44 (0) 151 555 0123',
  email: 'info@crofthhouseandcottages.co.uk',
  hours: 'Mon - Fri: 09:00 - 17:30',
};

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.',
    targetAudience: 'SMEs looking to outsource their IT department.',
    process: ['Initial Audit', 'Infrastructure Setup', '24/7 Monitoring', 'Monthly Reporting'],
    benefits: ['Reduced Downtime', 'Fixed Monthly Costs', 'Expert Advice'],
    startingPrice: 250,
    icon: 'ShieldCheck',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Transformation',
    description: 'Seamless migration to Microsoft Azure or AWS, tailored for UK business compliance.',
    targetAudience: 'Businesses moving away from legacy on-premise servers.',
    process: ['Readiness Assessment', 'Strategy Design', 'Data Migration', 'Post-Migration Support'],
    benefits: ['Scalability', 'Remote Work Ready', 'Enhanced Security'],
    startingPrice: 1500,
    icon: 'Cloud',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Compliance',
    description: 'Protecting your business from modern threats with Cyber Essentials certification support.',
    targetAudience: 'Firms handling sensitive data or requiring specific certifications.',
    process: ['Vulnerability Scan', 'Risk Mitigation', 'Staff Training', 'Certification Support'],
    benefits: ['GDPR Compliance', 'Peace of Mind', 'Insurance Eligibility'],
    startingPrice: 500,
    icon: 'Lock',
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Expert guidance to align your technology roadmap with your business goals.',
    targetAudience: 'Leadership teams planning for growth or digital transformation.',
    process: ['Business Analysis', 'Gap Identification', 'Roadmap Creation', 'Implementation Oversight'],
    benefits: ['ROI Focused', 'Future-Proofing', 'Efficiency Gains'],
    startingPrice: 800,
    icon: 'Lightbulb',
  },
  {
    id: 'network-solutions',
    title: 'Network & Connectivity',
    description: 'High-speed business broadband and secure Wi-Fi solutions for modern offices.',
    targetAudience: 'Offices requiring reliable, high-performance connectivity.',
    process: ['Site Survey', 'Hardware Sourcing', 'Installation', 'Performance Tuning'],
    benefits: ['Zero Lag', 'Secure Guest Access', 'Reliable Backup Links'],
    startingPrice: 300,
    icon: 'Network',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Essential',
    price: 49,
    features: ['Remote Support', 'Antivirus Management', 'Patch Management', 'Email Security'],
    supportLevel: '9am - 5pm Business Days',
    idealFor: 'Small startups and micro-businesses',
  },
  {
    name: 'Professional',
    price: 99,
    features: ['On-site Support', '24/7 Monitoring', 'Backup Management', 'Vulnerability Scanning', 'Quarterly Reviews'],
    supportLevel: 'Priority 24/7 Emergency',
    idealFor: 'Growing SMEs with 10-50 employees',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    features: ['Dedicated Account Manager', 'Strategic Roadmap', 'Unlimited Support', 'Full Compliance Audit', 'Disaster Recovery'],
    supportLevel: 'Dedicated 24/7 Support',
    idealFor: 'Large organisations with complex needs',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alistair Graham',
    role: 'Managing Director',
    company: 'Mersey Logistics Ltd',
    content: 'Croft House and Cottages transformed our legacy systems into a modern cloud powerhouse. Their support is second to none.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Head',
    company: 'Cheshire Legal Partners',
    content: 'The cyber security audit they performed was eye-opening. We are now fully GDPR compliant and feel much more secure.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Retail Digital Overhaul',
    client: 'Midlands Fashion Group',
    challenge: 'Outdated POS systems causing 15% revenue loss during peak hours.',
    solution: 'Implemented a unified cloud-based POS and inventory system.',
    result: 'Increased transaction speed by 40% and reduced stock errors.',
    value: '£120,000 annual savings',
  },
];
