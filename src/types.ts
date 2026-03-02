import { LucideIcon } from 'lucide-react';

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

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  support: string;
  idealFor: string;
  isPopular?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  roi: string;
}
