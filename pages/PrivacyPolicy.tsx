import React from 'react';
import { COMPANY } from '../constants';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 py-48 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
        </div>
        
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100 space-y-12 leading-relaxed text-slate-600">
          <section>
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-emerald-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">1. Introduction</h2>
            </div>
            <p>
              Thurrock Essex IT Solutions Ltd ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
            </p>
            <p className="mt-4">
              For the purpose of the Data Protection Act 2018 and the UK General Data Protection Regulation (UK GDPR), the data controller is {COMPANY.name}{COMPANY.address ? `, ${COMPANY.address}` : ''}.
            </p>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-emerald-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">2. Information We Collect</h2>
            </div>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Information that you provide by filling in forms on our site, including name, email address, and company details.</li>
              <li>If you contact us, we may keep a record of that correspondence.</li>
              <li>Details of your visits to our site including, but not limited to, traffic data, location data, and other communication data.</li>
              <li>Technical information, including the IP address used to connect your computer to the Internet.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-emerald-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">3. How We Use Your Information</h2>
            </div>
            <p>We use information held about you in the following ways:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To provide you with information, products or services that you request from us.</li>
              <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our service.</li>
              <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-emerald-600 mr-4" />
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">4. Your Rights</h2>
            </div>
            <p>
              Under the UK GDPR, you have the right to access information held about you. You also have the right to ask us to correct or remove information you think is inaccurate. You have the right to be forgotten and the right to data portability.
            </p>
            <p className="mt-4">
              If you wish to exercise any of these rights, please contact our Data Protection Officer at {COMPANY.email}.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-50">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p>
              Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to:<br />
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

export default PrivacyPolicy;