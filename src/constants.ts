import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_DETAILS = {
  name: "City Gate House",
  address: "123 London Wall, London, EC2Y 5AS, United Kingdom",
  crn: "12345678",
  phone: "+44 20 7946 0000",
  email: "contact@citygatehouse.it",
  hours: "Mon - Fri: 09:00 - 18:00",
  vat: "GB 123 4567 89"
};

export interface Service {
  id: string;
  title: string;
  description: string;
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
  support: string;
  idealFor: string;
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
  value: string;
}
