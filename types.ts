
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  overview: string;
  targetAudience: string;
  process: string[];
  benefits: string[];
  startingPrice: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
  idealFor: string;
}

export interface SignupFormData {
  fullName: string;
  email: string;
  companyName: string;
  accountType: 'Individual' | 'Business' | 'Enterprise';
  intendedUse: string;
  emailCount: string;
  preferredUsername: string;
  industry: string;
  country: string;
  websiteUrl: string;
  monthlyUsage: string;
  adminAccess: 'Yes' | 'No';
  teamAccounts: 'Yes' | 'No';
  complianceReqs: string;
  storageReqs: string;
  securityExpectations: string;
  verificationDocs: 'Yes' | 'No';
  timeline: string;
  additionalNotes: string;
  agreedToTerms: boolean;
}

export type Page = 'home' | 'services' | 'about' | 'pricing' | 'signup' | 'contact' | 'privacy' | 'terms';

export interface CompanyDetails {
  name: string;
  address: string;
  crn: string;
  phone: string;
  email: string;
  hours: string;
}
