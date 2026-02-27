import React from 'react';
import { COMPANY } from '../constants';
import { Gavel, Scale, AlertCircle, FileCheck } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-slate-50 py-48 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Gavel className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Terms & Conditions</h1>
          <p className="text-slate-500 font-medium">Effective Date: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
        </div>
        
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100 space-y-12 leading-relaxed text-slate-600">
          <section>
            <div className="flex items-center mb-6">
              <Scale className="w-6 h-6 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">1. Agreement to Terms</h2>
            </div>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p className="mt-4">
              {COMPANY.name} is a company registered in England and Wales under company number {COMPANY.crn}.{COMPANY.address && ` Our registered office is at ${COMPANY.address}.`}
            </p>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <FileCheck className="w-6 h-6 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">2. Provision of Services</h2>
            </div>
            <p>
              We will provide IT services as described in your specific Service Level Agreement (SLA) or Statement of Work (SOW). While we strive for 100% uptime, services are provided on an "as available" basis unless otherwise specified in a formal contract.
            </p>
            <p className="mt-4">
              We reserve the right to withdraw or amend the service we provide on our site without notice. We will not be liable if for any reason our site is unavailable at any time or for any period.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">3. Limitation of Liability</h2>
            </div>
            <p>
              To the extent permitted by law, {COMPANY.name} shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
            <p className="mt-4">
              Our total liability for any claim arising out of or relating to these terms or our services shall not exceed the amount paid by you to us for the specific service in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <Scale className="w-6 h-6 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">4. Governing Law</h2>
            </div>
            <p>
              These terms shall be governed and construed in accordance with the laws of England and Wales. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-50">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:<br />
              <strong>{COMPANY.name}</strong><br />
              {COMPANY.address && <>{COMPANY.address}<br /></>}
              Email: {COMPANY.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;