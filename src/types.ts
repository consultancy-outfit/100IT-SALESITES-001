import React from 'react';

export type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  benefits: string[];
  process: string[];
  target: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  support: string;
  idealFor: string;
  recommended?: boolean;
}
