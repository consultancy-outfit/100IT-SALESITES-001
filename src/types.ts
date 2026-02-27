import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  value: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  supportLevel: string;
  idealFor: string;
  highlighted?: boolean;
}
