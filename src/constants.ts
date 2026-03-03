import { Shield, Cpu, Cloud, Lock, Users, Zap, Headphones, BarChart, Globe, Mail, Phone, MapPin } from 'lucide-react';

export const COMPANY_DETAILS = {
  name: "SureCare Trafford",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17046237",
  phone: "0121 405 2129",
  email: "Info@surecare.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};

export const SERVICES = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Headphones,
    overview: 'Proactive 24/7 monitoring and helpdesk support for your entire infrastructure.',
    target: 'SMEs looking for a complete outsourced IT department.',
    process: ['Audit', 'Onboarding', '24/7 Monitoring', 'Monthly Reviews'],
    benefits: ['Reduced downtime', 'Fixed monthly costs', 'Expert advice'],
    startingPrice: 450,
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    icon: Shield,
    overview: 'Advanced threat protection, vulnerability assessments, and employee training.',
    target: 'Businesses handling sensitive data or requiring Cyber Essentials.',
    process: ['Risk Assessment', 'Implementation', 'Training', 'Compliance Audit'],
    benefits: ['Data protection', 'Regulatory compliance', 'Peace of mind'],
    startingPrice: 750,
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: Cloud,
    overview: 'Migration and management of Microsoft 365, Azure, and AWS environments.',
    target: 'Companies moving to remote or hybrid work models.',
    process: ['Strategy', 'Migration', 'Optimization', 'Management'],
    benefits: ['Scalability', 'Remote access', 'Cost efficiency'],
    startingPrice: 300,
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    icon: Zap,
    overview: 'Design and installation of high-speed, secure business networks and Wi-Fi.',
    target: 'New office setups or businesses with connectivity issues.',
    process: ['Site Survey', 'Design', 'Installation', 'Testing'],
    benefits: ['High performance', 'Reliable connectivity', 'Future-proofed'],
    startingPrice: 1200,
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    icon: BarChart,
    overview: 'Strategic technology planning to align IT with your business goals.',
    target: 'Leadership teams planning digital transformation.',
    process: ['Discovery', 'Strategy Development', 'Roadmap', 'Execution'],
    benefits: ['Strategic alignment', 'ROI focus', 'Competitive edge'],
    startingPrice: 950,
  },
  {
    id: 'data-backup',
    title: 'Data Backup & Recovery',
    icon: Lock,
    overview: 'Robust disaster recovery planning and automated off-site backups.',
    target: 'Any business where data loss is a critical risk.',
    process: ['Backup Strategy', 'Setup', 'Regular Testing', 'Recovery Support'],
    benefits: ['Business continuity', 'Data integrity', 'Fast recovery'],
    startingPrice: 250,
  }
];

export const PRICING_PLANS = [
  {
    name: 'Essential',
    price: 299,
    features: [
      'Remote Helpdesk (9-5)',
      'Antivirus Management',
      'Patch Management',
      'Basic Cloud Backup',
      'Monthly Health Report'
    ],
    support: 'Standard Business Hours',
    idealFor: 'Small startups and micro-businesses',
    vat: 'Excluding VAT'
  },
  {
    name: 'Professional',
    price: 599,
    features: [
      'Everything in Essential',
      'On-site Support Included',
      '24/7 Server Monitoring',
      'Cyber Security Essentials',
      'Microsoft 365 Management',
      'Quarterly Strategy Meetings'
    ],
    support: 'Priority Support',
    idealFor: 'Growing SMEs with 10-50 users',
    vat: 'Excluding VAT',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 1299,
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      'Full Disaster Recovery',
      'Advanced Threat Protection',
      'Unlimited On-site Support',
      'Monthly IT Strategy Board'
    ],
    support: '24/7 Emergency Support',
    idealFor: 'Established firms with complex needs',
    vat: 'Excluding VAT'
  }
];

export const TESTIMONIALS = [
  {
    name: "Alistair Graham",
    role: "Managing Director, Graham & Co",
    content: "SureCare Trafford transformed our legacy systems into a modern cloud infrastructure. Their support is second to none."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager, Peak Logistics",
    content: "The cyber security audit they performed saved us from a potential breach. Professional, thorough, and highly recommended."
  },
  {
    name: "David Thompson",
    role: "Founder, TechFlow UK",
    content: "Finally, an IT partner that speaks plain English and delivers results on time and within budget."
  }
];

export const CASE_STUDIES = [
  {
    title: "Digital Transformation for Manchester Law Firm",
    result: "Saved £12,000 annually in hardware costs.",
    description: "Migrated a 40-user firm to a full Azure environment, improving remote work efficiency by 60%."
  },
  {
    title: "Cyber Security Overhaul for Midlands Retailer",
    result: "Zero downtime during peak trading periods.",
    description: "Implemented advanced threat protection and employee training for a multi-site retail chain."
  }
];
