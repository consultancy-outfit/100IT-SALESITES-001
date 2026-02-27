import { 
  Shield, 
  Cloud, 
  Cpu, 
  Network, 
  Code2, 
  Headphones, 
  Lock 
} from 'lucide-react';
import { Service, PricingPlan, Testimonial, CaseStudy } from './types';

export const COMPANY_DETAILS = {
  name: 'Bruntsfield House',
  address: '10 Bruntsfield Terrace, Edinburgh, EH10 4ER, United Kingdom',
  crn: 'SC654321',
  phone: '+44 131 555 0123',
  email: 'info@bruntsfieldhouse.co.uk',
  hours: 'Mon - Fri: 08:30 - 18:00',
};

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Proactive maintenance and 24/7 monitoring for your entire infrastructure.',
    icon: 'Headphones',
    overview: 'Our flagship managed service provides end-to-end management of your IT environment, ensuring maximum uptime and security.',
    targetAudience: 'SMEs looking to outsource their IT department or augment existing teams.',
    process: [
      'Initial Infrastructure Audit',
      'Onboarding & Security Hardening',
      '24/7 Monitoring Setup',
      'Monthly Strategic Reviews'
    ],
    benefits: [
      'Reduced downtime',
      'Predictable monthly costs',
      'Access to senior engineers',
      'Peace of mind'
    ],
    startingPrice: 450
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Advanced threat protection and compliance management for modern risks.',
    icon: 'Shield',
    overview: 'Comprehensive security solutions including penetration testing, firewall management, and employee awareness training.',
    targetAudience: 'Businesses handling sensitive data or requiring Cyber Essentials certification.',
    process: [
      'Vulnerability Assessment',
      'Security Strategy Design',
      'Implementation of Controls',
      'Continuous Threat Hunting'
    ],
    benefits: [
      'GDPR compliance',
      'Protection against ransomware',
      'Improved insurance premiums',
      'Enhanced brand trust'
    ],
    startingPrice: 750
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Infrastructure',
    description: 'Seamless migration and management of Azure, AWS, and private cloud.',
    icon: 'Cloud',
    overview: 'Modernise your business with scalable cloud solutions that enable remote work and high availability.',
    targetAudience: 'Companies looking to move away from on-premise servers or optimize existing cloud spend.',
    process: [
      'Cloud Readiness Assessment',
      'Migration Planning',
      'Execution & Testing',
      'Cost Optimization'
    ],
    benefits: [
      'Scalability on demand',
      'Remote work enablement',
      'Disaster recovery built-in',
      'Lower hardware capital expenditure'
    ],
    startingPrice: 600
  },
  {
    id: 'network-design',
    title: 'Network Design',
    description: 'High-performance connectivity solutions for offices and remote sites.',
    icon: 'Network',
    overview: 'Bespoke network architecture designed for speed, reliability, and security across multiple locations.',
    targetAudience: 'Growing businesses with multiple sites or high-bandwidth requirements.',
    process: [
      'Site Survey & Requirements',
      'Architecture Design',
      'Hardware Procurement',
      'Deployment & Tuning'
    ],
    benefits: [
      'Zero-bottleneck performance',
      'Secure site-to-site VPNs',
      'Guest network isolation',
      'Future-proof cabling'
    ],
    startingPrice: 1200
  },
  {
    id: 'it-consultancy',
    title: 'Strategic Consultancy',
    description: 'Expert guidance on digital transformation and technology roadmaps.',
    icon: 'Cpu',
    overview: 'Align your technology with your business goals through expert vCISO and vCTO services.',
    targetAudience: 'Executive teams needing high-level technical direction without a full-time hire.',
    process: [
      'Business Goal Alignment',
      'Technology Gap Analysis',
      'Roadmap Development',
      'Implementation Oversight'
    ],
    benefits: [
      'Better ROI on tech spend',
      'Competitive advantage',
      'Risk mitigation',
      'Clear digital strategy'
    ],
    startingPrice: 950
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Foundation',
    price: 250,
    features: [
      'Remote Support (9-5)',
      'Antivirus Management',
      'Patch Management',
      'Weekly Backups',
      'Basic Security Monitoring'
    ],
    supportLevel: 'Business Hours Only',
    idealFor: 'Small teams (up to 10 staff)',
  },
  {
    name: 'Professional',
    price: 550,
    features: [
      'Priority Remote & On-site Support',
      'Advanced Threat Protection',
      'Daily Off-site Backups',
      'Microsoft 365 Management',
      'Quarterly IT Reviews',
      'Network Monitoring'
    ],
    supportLevel: 'Priority 24/7 Critical',
    idealFor: 'Growing SMEs (10-50 staff)',
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 1200,
    features: [
      'Dedicated Account Manager',
      'Unlimited On-site Support',
      'vCTO Advisory Services',
      'SIEM Security Monitoring',
      'Disaster Recovery as a Service',
      'Compliance Auditing (GDPR/ISO)'
    ],
    supportLevel: 'Dedicated 24/7/365',
    idealFor: 'Large organisations (50+ staff)',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'James Henderson',
    role: 'Operations Director',
    company: 'Sterling Logistics Ltd',
    content: 'Bruntsfield House transformed our legacy systems into a modern, cloud-first infrastructure. Their support team is exceptionally responsive and truly understands the UK business landscape.'
  },
  {
    name: 'Sarah Miller',
    role: 'Managing Partner',
    company: 'Miller & Co Solicitors',
    content: 'Security is paramount for our firm. The cyber security audit and subsequent implementation by Bruntsfield House gave us the confidence to achieve our Cyber Essentials Plus certification.'
  },
  {
    name: 'Alistair Graham',
    role: 'Founder',
    company: 'Graham Creative',
    content: 'Finally, an IT partner that speaks plain English. They helped us scale from a team of 5 to 30 without a single day of technical downtime. Highly recommended.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Cloud Migration for Financial Services',
    client: 'Edinburgh Wealth Management',
    challenge: 'Aging on-premise servers causing slow performance and security risks.',
    solution: 'Full migration to Microsoft Azure with multi-factor authentication and encrypted backups.',
    result: '100% uptime achieved over 12 months and improved remote access for staff.',
    savings: '£12,000 annual reduction in hardware maintenance costs.'
  },
  {
    title: 'Cyber Security Overhaul',
    client: 'Midlands Manufacturing Group',
    challenge: 'Frequent phishing attempts and lack of centralized security control.',
    solution: 'Implemented SentinelOne EDR and conducted company-wide security awareness training.',
    result: '95% reduction in security incidents and successful GDPR compliance audit.',
    savings: 'Estimated £45,000 saved by preventing potential data breaches.'
  }
];
