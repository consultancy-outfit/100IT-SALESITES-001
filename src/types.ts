import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  supportLevel: string;
  idealFor: string;
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
}

export const COMPANY_DETAILS = {
  name: "Community Recovery",
  address: "98 Burrows Road, London, England, NW10 5SH",
  crn: "17045961",
  phone: "0122 697 9109",
  email: "info@communityrecoveryltd.co.uk",
  hours: "Mon - Fri: 09:00 - 17:30",
};
