import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, ShieldCheck, Cloud, Lightbulb, Network } from 'lucide-react';
import { Service } from '../types';

const iconMap: Record<string, any> = {
  Monitor,
  ShieldCheck,
  Cloud,
  Lightbulb,
  Network
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon] || Monitor;

  return (
    <div className="group p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-secondary/30">
      <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-brand-primary mb-6 transition-colors group-hover:bg-brand-secondary group-hover:text-white">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-secondary transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <Link 
        to="/services" 
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors"
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
