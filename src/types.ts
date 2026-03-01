import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

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

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  support: string;
  idealFor: string;
  highlighted?: boolean;
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
  result: string;
  description: string;
}
