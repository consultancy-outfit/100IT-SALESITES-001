import React from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  MonitorSmartphone, 
  Database, 
  Lock, 
  Headphones, 
  BarChart3,
  Zap,
  Users,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { Feature, PricingPlan, Service, Testimonial, CompanyDetails } from './types';

export const COMPANY: CompanyDetails = {
  name: 'Thurrock Essex IT Solutions Ltd',
  address: '',
  crn: '',
  phone: '',
  email: 'info@thurrockessex.it',
  hours: 'Mon - Fri: 08:30 - 18:00'
};

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    overview: 'Comprehensive day-to-day IT management and helpdesk support for your entire workforce.',
    targetAudience: 'SMEs looking for a reliable, outsourced IT department.',
    process: [
      'Initial Infrastructure Audit',
      'Remote Monitoring Setup',
      '24/7 Helpdesk Integration',
      'Regular Performance Reviews'
    ],
    benefits: [
      'Reduced downtime',
      'Predictable monthly costs',
      'Access to expert engineers',
      'Proactive issue resolution'
    ],
    startingPrice: '£250',
    icon: <MonitorSmartphone className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Compliance',
    overview: 'Advanced threat protection and GDPR compliance auditing to keep your business data safe.',
    targetAudience: 'Businesses handling sensitive client data or requiring Cyber Essentials certification.',
    process: [
      'Vulnerability Assessment',
      'Security Policy Implementation',
      'Staff Awareness Training',
      'Continuous Threat Monitoring'
    ],
    benefits: [
      'Peace of mind',
      'GDPR compliance',
      'Protection against ransomware',
      'Enhanced brand reputation'
    ],
    startingPrice: '£450',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Azure',
    overview: 'Seamless transition to Microsoft Azure or Microsoft 365, optimized for performance and cost.',
    targetAudience: 'Companies looking to modernize their legacy on-premise servers.',
    process: [
      'Cloud Readiness Assessment',
      'Migration Strategy Design',
      'Data & Application Transfer',
      'Post-Migration Optimization'
    ],
    benefits: [
      'Work from anywhere',
      'Scalable infrastructure',
      'Automatic backups',
      'Reduced hardware costs'
    ],
    startingPrice: '£800',
    icon: <Cloud className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    overview: 'Design and installation of high-speed, secure wired and wireless networks.',
    targetAudience: 'Offices, warehouses, and retail spaces requiring robust connectivity.',
    process: [
      'Site Survey',
      'Network Topology Design',
      'Hardware Installation',
      'Testing & Certification'
    ],
    benefits: [
      'Zero dead zones',
      'Gigabit speeds',
      'Guest network isolation',
      'Future-proof cabling'
    ],
    startingPrice: '£1,200',
    icon: <Globe className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 'data-backup',
    title: 'Disaster Recovery',
    overview: 'Automated off-site backups and rapid recovery plans for business continuity.',
    targetAudience: 'Any business where data loss would be catastrophic.',
    process: [
      'Critical Data Identification',
      'Backup Schedule Configuration',
      'Recovery Point Objective (RPO) Testing',
      'Off-site Encryption'
    ],
    benefits: [
      'Business continuity',
      'Protection from hardware failure',
      'Encrypted off-site storage',
      'Fast recovery times'
    ],
    startingPrice: '£150',
    icon: <Database className="w-8 h-8 text-emerald-600" />
  }
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'UK-Based Support',
    description: 'Our entire engineering team is based in Essex, providing local expertise and on-site support when you need it.',
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    color: 'bg-emerald-50'
  },
  {
    id: '2',
    title: 'Proactive Monitoring',
    description: 'We fix 80% of issues before you even notice them, thanks to our advanced 24/7 monitoring systems.',
    icon: <Zap className="w-6 h-6 text-emerald-600" />,
    color: 'bg-emerald-50'
  },
  {
    id: '3',
    title: 'Cyber Essentials',
    description: 'We help you achieve and maintain Cyber Essentials certification to protect your business and win more contracts.',
    icon: <Lock className="w-6 h-6 text-emerald-600" />,
    color: 'bg-emerald-50'
  },
  {
    id: '4',
    title: 'Strategic Planning',
    description: 'We don\'t just fix PCs; we provide a long-term IT roadmap aligned with your business growth goals.',
    icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
    color: 'bg-emerald-50'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Essential Support',
    price: '£25',
    period: '/user/mo',
    description: 'Perfect for small teams needing reliable helpdesk support.',
    features: [
      'Unlimited Remote Support',
      'Antivirus Management',
      'Patch Management',
      'Office 365 Support',
      'Next Business Day Response'
    ],
    idealFor: 'Startups & Small Offices',
    recommended: false
  },
  {
    name: 'Premium Managed',
    price: '£45',
    period: '/user/mo',
    description: 'Our most popular plan for complete IT peace of mind.',
    features: [
      'Everything in Essential',
      'On-site Support Included',
      'Cyber Security Suite',
      'Cloud Backup (50GB)',
      '1-Hour Critical Response',
      'Quarterly IT Strategy'
    ],
    idealFor: 'Growing SMEs',
    recommended: true
  },
  {
    name: 'Enterprise Secure',
    price: '£75',
    period: '/user/mo',
    description: 'Maximum security and compliance for regulated industries.',
    features: [
      'Everything in Premium',
      '24/7 Security Monitoring',
      'Compliance Auditing',
      'Unlimited Cloud Backup',
      'Dedicated Account Manager',
      'vCIO Services'
    ],
    idealFor: 'Regulated Businesses',
    recommended: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Managing Director',
    company: 'Essex Logistics Ltd',
    content: 'Thurrock Essex transformed our chaotic IT into a streamlined machine. Their local presence makes a huge difference.',
  },
  {
    id: '2',
    name: 'David Thompson',
    role: 'Operations Manager',
    company: 'Thameside Construction',
    content: 'The cyber security audit they performed saved us from a potential breach. Professional, knowledgeable, and very responsive.',
  },
  {
    id: '3',
    name: 'Emma Wright',
    role: 'Founder',
    company: 'Grays Creative Agency',
    content: 'Moving to the cloud with their help was seamless. We can now work from anywhere without any performance issues.',
  }
];

export const INDUSTRIES = [
  'Logistics & Transport',
  'Construction & Trade',
  'Professional Services',
  'Manufacturing',
  'Retail & E-commerce',
  'Healthcare & Dental'
];
