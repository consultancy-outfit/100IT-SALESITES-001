import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive 24/7 proactive monitoring and support for your entire IT infrastructure.',
    targetAudience: 'SMEs looking for a reliable external IT department.',
    process: ['Initial Audit', 'Infrastructure Onboarding', '24/7 Monitoring', 'Monthly Performance Reviews'],
    benefits: ['Reduced downtime', 'Predictable monthly costs', 'Expert UK-based helpdesk'],
    startingPrice: '£450/month',
    icon: 'ShieldCheck'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Advanced threat protection, security audits, and employee awareness training.',
    targetAudience: 'Businesses handling sensitive data or requiring Cyber Essentials certification.',
    process: ['Vulnerability Assessment', 'Strategy Implementation', 'Staff Training', 'Continuous Monitoring'],
    benefits: ['Data protection compliance', 'Reduced risk of breaches', 'Peace of mind'],
    startingPrice: '£750/audit',
    icon: 'Lock'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'Seamless transition to Microsoft Azure or AWS with minimal business disruption.',
    targetAudience: 'Companies looking to modernize their legacy on-premise servers.',
    process: ['Readiness Assessment', 'Migration Planning', 'Execution', 'Post-Migration Support'],
    benefits: ['Scalability', 'Remote work enablement', 'Cost efficiency'],
    startingPrice: '£1,200',
    icon: 'Cloud'
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Expert guidance on digital transformation and long-term technology roadmaps.',
    targetAudience: 'Growing businesses needing high-level technical leadership.',
    process: ['Business Goal Alignment', 'Gap Analysis', 'Roadmap Creation', 'Implementation Oversight'],
    benefits: ['Aligned technology & business goals', 'Informed decision making', 'Future-proofed systems'],
    startingPrice: '£150/hour',
    icon: 'Lightbulb'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design and installation of high-speed, secure wired and wireless networks.',
    targetAudience: 'Offices requiring robust connectivity and hardware refreshes.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Testing & Certification'],
    benefits: ['High-speed connectivity', 'Secure access control', 'Optimized performance'],
    startingPrice: '£2,000',
    icon: 'Network'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Essential Support',
    price: '£25',
    features: ['Remote Support', 'Business Hours Access', 'Antivirus Management', 'Patch Management'],
    supportLevel: '9am - 5:30pm Mon-Fri',
    idealClient: 'Small businesses with basic IT needs.',
    isPopular: false
  },
  {
    name: 'Professional',
    price: '£45',
    features: ['Remote & On-site Support', '24/7 Monitoring', 'Cyber Essentials Prep', 'Backup Management', 'Priority Response'],
    supportLevel: '24/7 Critical Support',
    idealClient: 'Growing SMEs requiring high availability.',
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '£85',
    features: ['Unlimited Support', 'Dedicated Account Manager', 'vCFO Services', 'Advanced Security Stack', 'Disaster Recovery'],
    supportLevel: 'Dedicated 24/7 Support',
    idealClient: 'Large organizations with complex compliance needs.',
    isPopular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'James Harrison',
    role: 'Managing Director',
    company: 'Thames Logistics Ltd',
    content: 'Fradel Lodge transformed our archaic server setup into a modern cloud environment. Their support team is incredibly responsive and speaks plain English, not technical jargon.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Kent Legal Partners',
    content: 'The security audit provided by Fradel Lodge was eye-opening. They helped us achieve Cyber Essentials Plus certification in record time. Highly recommended for professional services.'
  },
  {
    name: 'Oliver Smith',
    role: 'Founder',
    company: 'Brighton Creative Hub',
    content: 'Finally, an IT company that understands the creative sector. They managed our office move and network setup flawlessly. No downtime, no stress.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Cloud Transformation for Legal Firm',
    industry: 'Legal Services',
    challenge: 'Legacy on-premise servers causing frequent downtime and preventing remote work.',
    solution: 'Full migration to Microsoft Azure with secure VPN and SharePoint implementation.',
    result: '£12,000 annual saving on hardware maintenance and 100% remote work capability.'
  },
  {
    title: 'Cybersecurity Overhaul for E-commerce',
    industry: 'Retail',
    challenge: 'Increased phishing attempts and lack of formal security protocols.',
    solution: 'Implemented multi-factor authentication, advanced endpoint protection, and staff training.',
    result: 'Zero security incidents in 12 months and 40% reduction in IT support tickets.'
  }
];

export const COMPANY_DETAILS = {
  name: 'Fradel Lodge',
  address: '124 City Road, London, EC1V 2NX, United Kingdom',
  crn: '14529876',
  phone: '+44 20 7946 0123',
  email: 'contact@fradellodge.co.uk',
  hours: 'Mon - Fri: 09:00 - 17:30',
};
