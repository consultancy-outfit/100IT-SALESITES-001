import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
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
  support: string;
  idealFor: string;
  cta: string;
  highlight?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}
