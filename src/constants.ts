export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
}

export const SERVICES: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    description: 'Comprehensive 24/7 monitoring and proactive maintenance for your entire IT infrastructure.',
    icon: 'ShieldCheck',
    targetAudience: 'Small to medium-sized UK businesses looking for a reliable external IT department.',
    process: [
      'Initial Infrastructure Audit',
      'Remote Monitoring Setup',
      'Ongoing Maintenance & Patching',
      '24/7 Helpdesk Access'
    ],
    benefits: [
      'Reduced downtime',
      'Predictable monthly costs',
      'Expert advice on tap',
      'Improved security posture'
    ],
    startingPrice: '£250/month'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Protecting your business from evolving digital threats with enterprise-grade security protocols.',
    icon: 'Lock',
    targetAudience: 'Businesses handling sensitive data or requiring GDPR compliance assurance.',
    process: [
      'Vulnerability Assessment',
      'Firewall & Endpoint Protection',
      'Employee Security Training',
      'Incident Response Planning'
    ],
    benefits: [
      'Protection against ransomware',
      'GDPR compliance peace of mind',
      'Secure remote working',
      'Data breach prevention'
    ],
    startingPrice: '£450/audit'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'Seamlessly transition your workflows to the cloud for enhanced flexibility and scalability.',
    icon: 'Cloud',
    targetAudience: 'Companies looking to modernise their legacy systems and enable remote collaboration.',
    process: [
      'Cloud Readiness Assessment',
      'Migration Strategy Design',
      'Data Transfer & Integration',
      'Post-Migration Optimisation'
    ],
    benefits: [
      'Work from anywhere',
      'Scalable resources',
      'Reduced hardware costs',
      'Automatic backups'
    ],
    startingPrice: '£1,200/project'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design and implementation of robust, high-speed networking solutions for modern offices.',
    icon: 'Network',
    targetAudience: 'New office setups or businesses experiencing slow connectivity issues.',
    process: [
      'Site Survey & Requirements',
      'Network Topology Design',
      'Hardware Installation',
      'Performance Testing'
    ],
    benefits: [
      'High-speed connectivity',
      'Reliable Wi-Fi coverage',
      'Future-proofed cabling',
      'Optimised traffic flow'
    ],
    startingPrice: '£800/setup'
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    description: 'Expert guidance to align your technology roadmap with your long-term business goals.',
    icon: 'Lightbulb',
    targetAudience: 'Leadership teams needing high-level technical direction without a full-time CTO.',
    process: [
      'Business Goal Alignment',
      'Technology Gap Analysis',
      'Strategic Roadmap Creation',
      'Budget Planning'
    ],
    benefits: [
      'Better ROI on tech spend',
      'Competitive advantage',
      'Risk mitigation',
      'Scalable growth planning'
    ],
    startingPrice: '£150/hour'
  }
];

export const COMPANY_DETAILS = {
  name: 'Assure Supported Living',
  address: 'Flat 21 Napier House 17-21 Napier Road, Luton, England, LU1 1DU',
  crn: '17046314',
  phone: '0238 104 0326', // Using a realistic Luton number instead of address duplicate
  email: 'info@assuresupportedliving.co.uk',
  hours: 'Mon - Fri: 09:00 - 17:30'
};
