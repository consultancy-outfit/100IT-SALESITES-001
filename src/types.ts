import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: number;
}

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  features: string[];
  supportLevel: string;
  idealFor: string;
  vatIncluded: boolean;
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
  value: string;
}
