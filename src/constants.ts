import { 
  Shield, 
  Cloud, 
  Monitor, 
  Database, 
  Lock, 
  Server, 
  Headset 
} from 'lucide-react';
import { Service, PricingTier, Testimonial, CaseStudy } from './types';

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.',
    icon: Monitor,
    targetAudience: 'SMEs looking for a dedicated IT department without the overhead.',
    process: ['Initial Audit', 'Infrastructure Setup', '24/7 Monitoring', 'Monthly Reporting'],
    benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Guidance'],
    startingPrice: '£250/month'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Advanced threat protection, vulnerability assessments, and employee security training.',
    icon: Shield,
    targetAudience: 'Businesses handling sensitive data or requiring high-level compliance.',
    process: ['Risk Assessment', 'Security Implementation', 'Continuous Monitoring', 'Incident Response'],
    benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind'],
    startingPrice: '£500/month'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'Seamless transition to Azure, AWS, or Google Cloud with minimal business disruption.',
    icon: Cloud,
    targetAudience: 'Companies looking to modernize their legacy systems and enable remote work.',
    process: ['Cloud Readiness Assessment', 'Migration Planning', 'Execution', 'Post-Migration Support'],
    benefits: ['Scalability', 'Cost Efficiency', 'Enhanced Collaboration'],
    startingPrice: '£1,500 (Project Based)'
  },
  {
    id: 'data-recovery',
    title: 'Disaster Recovery & Backup',
    description: 'Robust backup solutions and rapid recovery plans to ensure business continuity.',
    icon: Database,
    targetAudience: 'Any UK business that cannot afford data loss or extended downtime.',
    process: ['Data Audit', 'Backup Strategy', 'Recovery Testing', 'Automated Backups'],
    benefits: ['Business Continuity', 'Data Integrity', 'Fast Recovery'],
    startingPrice: '£150/month'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design, installation, and management of high-performance wired and wireless networks.',
    icon: Server,
    targetAudience: 'Expanding offices or businesses with connectivity issues.',
    process: ['Site Survey', 'Network Design', 'Installation', 'Performance Tuning'],
    benefits: ['High Speed', 'Reliability', 'Secure Connectivity'],
    startingPrice: '£1,000 (Project Based)'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Essential',
    price: '£250',
    features: [
      'Remote Support (9-5)',
      'Antivirus Management',
      'Patch Management',
      'Monthly Health Check',
      'Basic Email Support'
    ],
    supportLevel: 'Standard Business Hours',
    idealFor: 'Small startups and micro-businesses.'
  },
  {
    name: 'Professional',
    price: '£750',
    features: [
      '24/7 Remote Support',
      'On-site Support (Next Day)',
      'Advanced Cybersecurity',
      'Cloud Backup (500GB)',
      'Quarterly Strategy Reviews'
    ],
    supportLevel: '24/7 Remote + Next Day On-site',
    idealFor: 'Growing SMEs with 10-50 employees.',
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '£1,500',
    features: [
      'Dedicated Account Manager',
      '4-Hour On-site Response',
      'Full Compliance Auditing',
      'Unlimited Cloud Backup',
      'Custom IT Roadmap'
    ],
    supportLevel: 'Priority 24/7 Support',
    idealFor: 'Large organizations requiring high availability.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alistair Graham',
    role: 'Managing Director',
    company: 'London Logistics Ltd',
    content: 'Community Recovery transformed our outdated systems. Their proactive approach saved us over £12,000 in potential downtime last year.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Midlands Manufacturing',
    content: 'The cybersecurity audit was eye-opening. We now feel completely secure and compliant with all UK regulations.'
  },
  {
    name: 'David Thompson',
    role: 'CEO',
    company: 'TechVentures UK',
    content: 'Reliable, professional, and truly understand the British business landscape. Highly recommended for any IT needs.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Full Cloud Migration',
    client: 'Retail Group SE',
    challenge: 'Legacy on-premise servers were failing and costly to maintain.',
    solution: 'Migrated all operations to Microsoft Azure with zero downtime.',
    result: 'Reduced annual IT costs by £8,500 and increased remote productivity by 40%.'
  },
  {
    title: 'Cybersecurity Overhaul',
    client: 'FinTech Solutions',
    challenge: 'Frequent phishing attempts and lack of GDPR compliance.',
    solution: 'Implemented multi-layer security and staff training program.',
    result: 'Zero security breaches in 18 months and full GDPR certification achieved.'
  }
];
