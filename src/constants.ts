import { 
  Shield, 
  Cloud, 
  Server, 
  Lock, 
  Headphones, 
  BarChart3, 
  Network 
} from 'lucide-react';
import { Service, Testimonial, CaseStudy, PricingTier } from './types';

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Proactive 24/7 monitoring and unlimited remote support for your entire team.',
    longDescription: 'Our Managed IT Support provides a comprehensive safety net for your business operations. We don\'t just fix things when they break; we proactively monitor your systems to prevent issues before they impact your productivity.',
    targetAudience: 'SMEs looking for a reliable, outsourced IT department.',
    process: [
      'Initial Infrastructure Audit',
      'Onboarding & Documentation',
      '24/7 Monitoring Setup',
      'Ongoing Remote & On-site Support'
    ],
    benefits: [
      'Reduced Downtime',
      'Fixed Monthly Costs',
      'Expert Technical Advice',
      'Improved Employee Productivity'
    ],
    startingPrice: '£25 per user/month',
    icon: 'Headphones'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security Solutions',
    description: 'Advanced threat protection, vulnerability assessments, and employee training.',
    longDescription: 'In an era of increasing digital threats, our Cyber Security services provide multi-layered protection. From firewalls and endpoint security to dark web monitoring and staff awareness training, we secure your most valuable assets.',
    targetAudience: 'Businesses handling sensitive data or requiring high compliance standards.',
    process: [
      'Security Risk Assessment',
      'Implementation of Security Layers',
      'Continuous Threat Monitoring',
      'Regular Security Audits'
    ],
    benefits: [
      'Data Breach Prevention',
      'Regulatory Compliance (GDPR)',
      'Enhanced Client Trust',
      'Peace of Mind'
    ],
    startingPrice: '£495 per audit',
    icon: 'Lock'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Infrastructure',
    description: 'Seamless migration and management of Microsoft Azure, AWS, and Microsoft 365.',
    longDescription: 'Modernise your business with scalable cloud solutions. We help you migrate from legacy on-premise servers to high-performance cloud environments, ensuring accessibility, scalability, and cost-efficiency.',
    targetAudience: 'Growing companies needing flexible and remote-friendly infrastructure.',
    process: [
      'Cloud Readiness Assessment',
      'Migration Planning',
      'Data Transfer & Setup',
      'Post-Migration Optimisation'
    ],
    benefits: [
      'Work from Anywhere',
      'Automatic Backups',
      'Scalable Resources',
      'Lower Hardware Costs'
    ],
    startingPrice: '£150 per month',
    icon: 'Cloud'
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Expert guidance on digital transformation, budgeting, and technology roadmaps.',
    longDescription: 'Align your technology with your business goals. Our consultants work as your Virtual CTO, providing the high-level strategic insight needed to make informed technology investments that drive growth.',
    targetAudience: 'Leadership teams planning for long-term growth and digital evolution.',
    process: [
      'Business Goal Alignment',
      'Current Tech Stack Review',
      'Strategic Roadmap Design',
      'Implementation Oversight'
    ],
    benefits: [
      'Better ROI on Tech Spend',
      'Future-Proofed Infrastructure',
      'Strategic Competitive Advantage',
      'Clear Technology Vision'
    ],
    startingPrice: '£850 per day',
    icon: 'BarChart3'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design and installation of high-speed business Wi-Fi, cabling, and switching.',
    longDescription: 'A fast, reliable network is the backbone of any modern office. We design and install robust wired and wireless networks that provide seamless connectivity for all your devices and users.',
    targetAudience: 'Offices, warehouses, and retail spaces requiring reliable connectivity.',
    process: [
      'Site Survey & Heatmapping',
      'Network Design',
      'Hardware Installation',
      'Testing & Optimisation'
    ],
    benefits: [
      'Eliminated Dead Zones',
      'High-Speed Connectivity',
      'Secure Guest Access',
      'Scalable Capacity'
    ],
    startingPrice: '£1,200 per project',
    icon: 'Network'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Harrison',
    role: 'Managing Director',
    company: 'Harrison Logistics Ltd',
    content: 'Centenary Close transformed our IT from a constant headache into a silent engine for growth. Their response times are exceptional.'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Thames Valley Legal',
    content: 'The migration to Microsoft 365 was seamless. We can now work securely from anywhere, which has been a game-changer for our team.'
  },
  {
    id: '3',
    name: 'Robert Miller',
    role: 'Finance Director',
    company: 'Miller & Co Accountants',
    content: 'Their cyber security audit identified critical gaps we weren\'t even aware of. I feel much more confident about our data security now.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Cloud Migration for Multi-Site Retailer',
    client: 'Urban Style UK',
    challenge: 'Legacy on-premise servers causing frequent downtime across 5 locations.',
    solution: 'Full migration to Microsoft Azure with centralised management.',
    result: '99.99% uptime achieved and 30% reduction in IT maintenance costs.',
    value: '£45,000 annual savings'
  },
  {
    id: '2',
    title: 'Cyber Security Overhaul',
    client: 'Global FinTech Solutions',
    challenge: 'Increasing phishing attempts and lack of formal security protocols.',
    solution: 'Implemented MFA, advanced endpoint protection, and staff training.',
    result: 'Zero successful security incidents in 12 months post-implementation.',
    value: '£250,000 potential loss mitigated'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Essential Support',
    price: '£25',
    features: [
      'Unlimited Remote Support',
      '24/7 Monitoring',
      'Antivirus Management',
      'Patch Management',
      'Monthly Health Reports'
    ],
    supportLevel: '9am - 5:30pm Mon-Fri',
    idealFor: 'Small businesses with basic IT needs.',
    highlighted: false
  },
  {
    name: 'Professional Managed',
    price: '£45',
    features: [
      'Everything in Essential',
      'Priority Response Times',
      'Cyber Essentials Readiness',
      'Backup Monitoring',
      'Quarterly Strategy Reviews',
      'Microsoft 365 Management'
    ],
    supportLevel: '8am - 8pm Mon-Fri',
    idealFor: 'Growing companies requiring proactive management.',
    highlighted: true
  },
  {
    name: 'Enterprise Plus',
    price: '£75',
    features: [
      'Everything in Professional',
      '24/7 Emergency Support',
      'Dedicated Account Manager',
      'Virtual CTO Services',
      'Advanced Threat Protection',
      'On-site Support Included'
    ],
    supportLevel: '24/7/365 Support',
    idealFor: 'Larger organisations with complex requirements.',
    highlighted: false
  }
];
