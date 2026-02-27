import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 py-24 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-400">Last Updated: February 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl prose prose-slate prose-lg">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">1. Introduction</h2>
            <p className="text-slate-600 mb-8">
              These Terms and Conditions govern the use of services provided by Centenary Close ("the Company"). By engaging our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">2. Services</h2>
            <p className="text-slate-600 mb-8">
              The Company provides IT support, consultancy, cyber security, and cloud services as defined in individual Service Level Agreements (SLAs) or project proposals.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">3. Payment Terms</h2>
            <p className="text-slate-600 mb-8">
              All financial references and invoices are in Great British Pounds (GBP £). Managed service invoices are issued monthly in advance and are payable within 14 days. Project-based work may require a deposit as specified in the proposal. All prices are subject to VAT at the prevailing UK rate.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">4. Intellectual Property</h2>
            <p className="text-slate-600 mb-8">
              All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until full payment is received, at which point a non-exclusive license is granted to the client.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">5. Confidentiality</h2>
            <p className="text-slate-600 mb-8">
              Both parties agree to keep all confidential information obtained during the course of the engagement strictly private and not to disclose it to any third party without prior written consent.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">6. Limitation of Liability</h2>
            <p className="text-slate-600 mb-8">
              The Company's total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the client in the 12 months preceding the claim.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">7. Governing Law</h2>
            <p className="text-slate-600 mb-8">
              These terms shall be governed by and construed in accordance with the laws of England and Wales.
            </p>
            
            <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold mb-4">Company Details</h3>
              <p className="text-sm text-slate-500">Company Name: Centenary Close</p>
              <p className="text-sm text-slate-500">Registered Office: Not Available</p>
              <p className="text-sm text-slate-500">Official Email: info@centenaryclose.co.uk</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
