export interface Service {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
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

export type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';
