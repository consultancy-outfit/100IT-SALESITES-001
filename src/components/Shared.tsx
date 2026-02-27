import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Globe, 
  Headphones, 
  Lock, 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Users,
  Briefcase,
  Zap,
  Award,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
export type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Constants ---
export const COMPANY_DETAILS = {
  name: "Badminton Gardens",
  address: "#####",
  crn: "#####",
  phone: "#####",
  email: "info@badmintongardens.co.uk",
  hours: "#####"
};

// --- Components ---

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = "" 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  onClick?: () => void,
  className?: string
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg",
    secondary: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false 
}: { 
  title: string, 
  subtitle?: string, 
  centered?: boolean 
}) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1 w-20 bg-emerald-500 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

export const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <div className={`bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);
