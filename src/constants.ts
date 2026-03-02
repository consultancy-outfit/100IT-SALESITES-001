import { 
  Shield, 
  Cloud, 
  Monitor, 
  Database, 
  Lock, 
  Zap, 
  Headphones,
  Users,
  Target,
  Award,
  CheckCircle2
} from 'lucide-react';
import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: "Thurrock Essex",
  address: "Not Available",
  crn: "Not Available",
  phone: "Not Available",
  email: "Not Available",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive day-to-day IT management and proactive monitoring for your entire business infrastructure.',
    targetAudience: 'Small to medium-sized UK businesses looking for a dedicated IT department.',
    process: ['Initial Audit', 'Infrastructure Setup', '24/7 Monitoring', 'Helpdesk Support', 'Quarterly Reviews'],
    benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Advice', 'Enhanced Security'],
    startingPrice: '£250',
    icon: Monitor
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Strategy',
    description: 'Seamless transition to cloud environments like Azure and AWS, tailored for scalability and remote work.',
    targetAudience: 'Companies looking to modernise their legacy systems and enable remote collaboration.',
    process: ['Readiness Assessment', 'Cloud Architecture Design', 'Data Migration', 'Staff Training', 'Optimization'],
    benefits: ['Scalability', 'Cost Efficiency', 'Disaster Recovery', 'Global Access'],
    startingPrice: '£1,500',
    icon: Cloud
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    description: 'Advanced threat protection, security audits, and GDPR compliance frameworks to protect your data.',
    targetAudience: 'Businesses handling sensitive client data requiring high-level security assurance.',
    process: ['Vulnerability Scanning', 'Security Hardening', 'Employee Training', 'Incident Response Planning'],
    benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind', 'Brand Trust'],
    startingPrice: '£500',
    icon: Shield
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design and implementation of robust, high-speed wired and wireless networks for modern offices.',
    targetAudience: 'New office setups or businesses experiencing network bottlenecks.',
    process: ['Site Survey', 'Network Design', 'Hardware Installation', 'Testing & Verification'],
    benefits: ['High Speed', 'Reliable Connectivity', 'Secure Access', 'Future-Proofing'],
    startingPrice: '£1,200',
    icon: Zap
  },
  {
    id: 'data-backup',
    title: 'Data Backup & Recovery',
    description: 'Automated backup solutions and rapid disaster recovery planning to ensure business continuity.',
    targetAudience: 'Any business that cannot afford data loss or extended downtime.',
    process: ['Data Mapping', 'Backup Configuration', 'Recovery Testing', 'Continuous Monitoring'],
    benefits: ['Zero Data Loss', 'Rapid Recovery', 'Compliance', 'Automated Protection'],
    startingPrice: '£150',
    icon: Database
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Essential',
    price: '£250',
    features: [
      'Remote Helpdesk Support',
      'Proactive Monitoring',
      'Antivirus Management',
      'Monthly Health Reports',
      'Basic Cloud Backup'
    ],
    supportLevel: '9am - 5pm Business Days',
    idealFor: 'Micro-businesses (1-5 users)',
  },
  {
    name: 'Professional',
    price: '£750',
    features: [
      'Remote & On-site Support',
      'Advanced Cybersecurity',
      'Managed Microsoft 365',
      'Strategic IT Planning',
      'Daily Off-site Backups',
      'Priority Response Time'
    ],
    supportLevel: '8am - 6pm Business Days',
    idealFor: 'Growing SMEs (6-25 users)',
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '£1,500',
    features: [
      '24/7 Critical Support',
      'Full Infrastructure Management',
      'Compliance & GDPR Audits',
      'Dedicated Account Manager',
      'Unlimited On-site Visits',
      'Custom Cloud Solutions'
    ],
    supportLevel: '24/7/365 Support',
    idealFor: 'Large Organisations (25+ users)',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alistair Graham',
    role: 'Managing Director',
    company: 'Kent Logistics Ltd',
    content: 'Thurrock Essex transformed our chaotic IT setup into a streamlined, secure operation. Their response times are exceptional.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Essex Creative Agency',
    content: 'Moving to the cloud seemed daunting, but the team made it seamless. We haven\'t had a single hour of downtime since.'
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'Thames Valley FinTech',
    content: 'Their cybersecurity audit was eye-opening. We now feel confident that our client data is protected to the highest standards.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Manufacturing Efficiency',
    result: '£45,000 Annual Savings',
    description: 'Implemented automated inventory tracking and upgraded network infrastructure for a local factory.'
  },
  {
    title: 'Retail Digital Shift',
    result: '200% Increase in Uptime',
    description: 'Migrated a multi-site retailer to a hybrid cloud solution, eliminating server failures.'
  }
];
