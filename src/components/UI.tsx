import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-secondary',
    secondary: 'bg-brand-accent text-white hover:bg-sky-600',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
    ghost: 'text-brand-primary hover:bg-slate-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold',
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export const Section = ({ children, className = '', id = '', title, subtitle, dark = false }: { children: React.ReactNode; className?: string; id?: string; title?: string; subtitle?: string; dark?: boolean }) => (
  <section id={id} className={`section-padding ${dark ? 'bg-slate-900 text-white' : 'bg-transparent'} ${className}`}>
    <div className="container-custom">
      {(title || subtitle) && (
        <div className="max-w-3xl mb-16">
          {subtitle && <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-3">{subtitle}</p>}
          {title && <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">{title}</h2>}
        </div>
      )}
      {children}
    </div>
  </section>
);
