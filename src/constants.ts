import { LucideIcon, Shield, Cloud, Monitor, Lock, Database, Cpu, Globe } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
}

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Monitor,
    description: 'Comprehensive 24/7 proactive monitoring and support for your entire IT infrastructure.',
    targetAudience: 'SMEs and Care Providers requiring reliable uptime.',
    process: ['Audit', 'Onboarding', '24/7 Monitoring', 'Helpdesk Support'],
    benefits: ['Reduced downtime', 'Predictable costs', 'Expert advice'],
    startingPrice: '£250/month'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Migration & Hosting',
    icon: Cloud,
    description: 'Secure cloud hosting and seamless migration services to Microsoft Azure and AWS.',
    targetAudience: 'Businesses looking to modernize and enable remote work.',
    process: ['Assessment', 'Strategy', 'Migration', 'Optimization'],
    benefits: ['Scalability', 'Remote access', 'Cost efficiency'],
    startingPrice: '£500'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Compliance',
    icon: Shield,
    description: 'Advanced threat protection, GDPR compliance audits, and staff security training.',
    targetAudience: 'Organizations handling sensitive client data.',
    process: ['Risk Assessment', 'Implementation', 'Training', 'Monitoring'],
    benefits: ['Data protection', 'Regulatory compliance', 'Peace of mind'],
    startingPrice: '£750'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    icon: Globe,
    description: 'Design and installation of high-speed, secure wired and wireless networks.',
    targetAudience: 'New office setups or infrastructure upgrades.',
    process: ['Site Survey', 'Design', 'Installation', 'Testing'],
    benefits: ['High performance', 'Secure connectivity', 'Future-proof'],
    startingPrice: '£1,200'
  },
  {
    id: 'disaster-recovery',
    title: 'Backup & Disaster Recovery',
    icon: Database,
    description: 'Automated off-site backups and rapid recovery plans to protect your business continuity.',
    targetAudience: 'Any business with critical digital assets.',
    process: ['Data Mapping', 'Backup Setup', 'Recovery Testing', 'Maintenance'],
    benefits: ['Business continuity', 'Zero data loss', 'Fast recovery'],
    startingPrice: '£150/month'
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    icon: Cpu,
    description: 'Expert guidance on digital transformation and long-term technology roadmaps.',
    targetAudience: 'Leadership teams planning for growth.',
    process: ['Discovery', 'Analysis', 'Roadmap Creation', 'Execution'],
    benefits: ['Strategic alignment', 'ROI focus', 'Innovation'],
    startingPrice: '£95/hour'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Essential Support',
    price: '£25',
    period: 'per user / month',
    features: [
      'Remote Helpdesk (9-5)',
      'Antivirus & Patch Management',
      'Email Security',
      'Basic Performance Monitoring',
      'Monthly Health Reports'
    ],
    support: 'Standard Business Hours',
    idealFor: 'Small teams needing reliable basics',
    vat: 'Excluding VAT'
  },
  {
    name: 'Professional Care',
    price: '£45',
    period: 'per user / month',
    features: [
      'Remote & On-site Support',
      '24/7 Infrastructure Monitoring',
      'Advanced Cyber Security',
      'Cloud Backup (100GB)',
      'Quarterly IT Strategy Reviews'
    ],
    support: 'Priority 24/7 for Critical Issues',
    idealFor: 'Growing businesses and care facilities',
    vat: 'Excluding VAT',
    popular: true
  },
  {
    name: 'Enterprise Managed',
    price: '£75',
    period: 'per user / month',
    features: [
      'Dedicated Account Manager',
      'Unlimited On-site Support',
      'Full Compliance Management',
      'Unlimited Cloud Backup',
      'vCIO Strategic Planning'
    ],
    support: '24/7/365 VIP Support',
    idealFor: 'Compliance-heavy organizations',
    vat: 'Excluding VAT'
  }
];

export const COMPANY_DETAILS = {
  name: 'Worksop Supported Living Service',
  address: 'Unit 12, Worksop Business Hub, Bridge Place, Worksop, Nottinghamshire, S80 1JS',
  crn: '12845678',
  phone: '01909 555 0123',
  email: 'info@worksopsupportedlivingservice.co.uk',
  hours: 'Mon - Fri: 08:30 - 17:30',
  vatNumber: 'GB 123 4567 89'
};
