import React from 'react';
import { COMPANY_DETAILS } from '../components/Layout';
import { ShieldCheck, Lock, Users, FileCheck, AlertTriangle } from 'lucide-react';

export default function GDPR() {
  return (
    <div className="bg-white py-20">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold uppercase tracking-widest">
            <ShieldCheck size={18} /> UK GDPR Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Data Protection Commitment</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            How Jackson Gardens ensures the highest standards of data security and privacy for our clients.
          </p>
        </div>

        <div className="space-y-12 text-slate-600 leading-relaxed">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Data Security</h3>
              <p>We implement enterprise-grade encryption for all data at rest and in transit. Our systems are monitored 24/7 for potential security breaches.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Staff Training</h3>
              <p>All Jackson Gardens employees undergo regular data protection training and are vetted to ensure they understand their responsibilities under UK GDPR.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Our GDPR Framework</h2>
            <p>As a data processor for our clients, we maintain a comprehensive framework to ensure compliance:</p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="mt-1"><FileCheck size={20} className="text-emerald-500" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Data Processing Agreements (DPA)</h4>
                  <p>We provide clear DPAs for all clients, outlining our roles and responsibilities in handling their data.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><FileCheck size={20} className="text-emerald-500" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">ICO Registration</h4>
                  <p>We are fully registered with the Information Commissioner's Office (ICO) and follow their codes of practice.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><FileCheck size={20} className="text-emerald-500" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Breach Notification</h4>
                  <p>In the unlikely event of a data breach, we have strict protocols to notify the ICO and affected clients within 72 hours.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="p-8 rounded-[40px] bg-amber-50 border border-amber-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-amber-500 shrink-0 shadow-sm">
              <AlertTriangle size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Subject Access Requests (SAR)</h3>
              <p className="text-slate-700">
                If you wish to exercise your right to access your data, please email our Data Protection Officer at <strong>{COMPANY_DETAILS.email}</strong>. We aim to respond to all SARs within 30 days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
