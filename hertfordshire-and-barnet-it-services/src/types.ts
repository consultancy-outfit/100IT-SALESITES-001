import { LucideIcon } from 'lucide-react';

export interface CompanyInfo {
  name: string;
  legalName: string;
  address: string;
  crn: string;
  phone: string;
  email: string;
  hours: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  overview: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: number;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
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
  value: string;
}
