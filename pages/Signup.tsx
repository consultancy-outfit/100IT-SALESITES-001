import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, Shield, Building, User, Calendar, Laptop } from 'lucide-react';
import { SignupFormData, Page } from '../types';

interface SignupProps {
  onNavigate: (page: Page) => void;
}

const Signup: React.FC<SignupProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    email: '',
    companyName: '',
    accountType: 'Business',
    intendedUse: '',
    emailCount: '',
    preferredUsername: '',
    industry: 'Other',
    country: 'United Kingdom',
    websiteUrl: '',
    monthlyUsage: '',
    adminAccess: 'No',
    teamAccounts: 'No',
    complianceReqs: '',
    storageReqs: '',
    securityExpectations: '',
    verificationDocs: 'No',
    timeline: '',
    additionalNotes: '',
    agreedToTerms: false
  });

  const updateField = (field: keyof SignupFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 3) {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } else {
      nextStep();
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 pt-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center bg-white p-16 rounded-3xl shadow-sm border border-slate-100"
        >
          <div className="bg-emerald-500 w-24 h-24 flex items-center justify-center mx-auto mb-10 rounded-full shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-12 h-12 text-slate-900" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Audit Requested!</h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Thank you for your interest. One of our senior technical consultants will review your details and contact you within 24 hours to schedule your free IT audit.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold hover:bg-slate-800 transition-all text-lg"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-48 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Free Consultation</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">Book Your <br /><span className="text-emerald-500 italic serif">Free IT Audit.</span></h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto">Get a comprehensive review of your current infrastructure, security, and potential for growth.</p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-16 flex items-center justify-between relative px-4 max-w-md mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-emerald-500 -translate-y-1/2 transition-all duration-700"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              className={`w-10 h-10 flex items-center justify-center font-bold text-sm z-10 rounded-full transition-all duration-500 ${
                step >= i ? 'bg-emerald-500 text-slate-900 scale-110 shadow-lg shadow-emerald-500/20' : 'bg-white text-slate-400 border border-slate-200'
              }`}
            >
              {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-10 md:p-16">
            <div className="flex items-center space-x-6 mb-12">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-400">
                {step === 1 && <User className="w-7 h-7" />}
                {step === 2 && <Building className="w-7 h-7" />}
                {step === 3 && <Shield className="w-7 h-7" />}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {step === 1 && 'Personal Details'}
                  {step === 2 && 'Business Information'}
                  {step === 3 && 'Technical Scope'}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Step {step} of 3</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                    <input 
                      type="text" required
                      value={formData.fullName}
                      onChange={e => updateField('fullName', e.target.value)}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                      placeholder="e.g. David Jones"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Work Email</label>
                    <input 
                      type="email" required
                      value={formData.email}
                      onChange={e => updateField('email', e.target.value)}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                      placeholder="david@company.co.uk"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Company Name</label>
                    <input 
                      type="text" required
                      value={formData.companyName}
                      onChange={e => updateField('companyName', e.target.value)}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                      placeholder="Your Business Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Number of Employees</label>
                    <select 
                      value={formData.emailCount}
                      onChange={e => updateField('emailCount', e.target.value)}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-250">51-250</option>
                      <option value="250+">250+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Current IT Setup</label>
                    <select 
                      value={formData.accountType}
                      onChange={e => updateField('accountType', e.target.value)}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="In-house">In-house Team</option>
                      <option value="Outsourced">Outsourced Support</option>
                      <option value="None">No Formal Support</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Primary Concerns</label>
                    <textarea 
                      rows={4} required
                      value={formData.intendedUse}
                      onChange={e => updateField('intendedUse', e.target.value)}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
                      placeholder="e.g. Slow network, security worries, cloud migration needs..."
                    />
                  </div>
                  <div className="flex items-start space-x-4">
                    <input 
                      type="checkbox" required
                      checked={formData.agreedToTerms}
                      onChange={e => updateField('agreedToTerms', e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-slate-500 leading-relaxed">
                      I agree to the <button type="button" onClick={() => onNavigate('terms')} className="text-slate-900 font-bold hover:underline">Terms of Service</button> and allow Thurrock Essex IT Solutions to contact me regarding this audit.
                    </span>
                  </div>
                </motion.div>
              )}

              <div className="pt-10 border-t border-slate-50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`flex items-center text-sm font-bold text-slate-400 hover:text-slate-900 transition-all ${
                    step === 1 ? 'invisible' : 'visible'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center group"
                >
                  {step === 3 ? 'Request Audit' : 'Next Step'}
                  {step < 3 && <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Calendar className="w-5 h-5" />, text: 'Flexible Scheduling' },
            { icon: <Shield className="w-5 h-5" />, text: 'Confidential Review' },
            { icon: <Laptop className="w-5 h-5" />, text: 'Expert Insights' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center text-slate-400 text-sm font-medium">
              <span className="mr-3 text-emerald-500">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signup;