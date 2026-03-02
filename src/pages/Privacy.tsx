import React from 'react';
import Markdown from 'react-markdown';
import { Section } from '../components/UI';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  const content = `
# Privacy Policy

**Last Updated: March 2026**

This Privacy Policy describes how **${COMPANY_DETAILS.name}** ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website or use our services. We are committed to protecting your privacy and complying with the **General Data Protection Regulation (GDPR)** and the **Data Protection Act 2018**.

## 1. Information We Collect
We may collect the following types of personal information:
- **Contact Information:** Name, email address, phone number, and mailing address.
- **Business Information:** Company name, job title, and industry.
- **Technical Data:** IP address, browser type, operating system, and website usage data.
- **Communication Data:** Any information you provide when you contact us via email or our contact form.

## 2. How We Use Your Information
We use the information we collect for the following purposes:
- To provide and maintain our services.
- To respond to your enquiries and provide customer support.
- To send you updates, newsletters, and marketing communications (with your consent).
- To improve our website and services through analytics.
- To comply with legal and regulatory obligations.

## 3. Legal Basis for Processing
Under GDPR, we process your personal information based on:
- **Consent:** When you have given us clear consent to process your data for a specific purpose.
- **Contract:** When processing is necessary for a contract we have with you.
- **Legal Obligation:** When processing is necessary for us to comply with the law.
- **Legitimate Interests:** When processing is necessary for our legitimate business interests.

## 4. Data Retention
We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations.

## 5. Sharing Your Information
We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.

## 6. Your Rights
Under GDPR, you have the following rights:
- **The right to access:** You can request copies of your personal data.
- **The right to rectification:** You can request that we correct any information you believe is inaccurate.
- **The right to erasure:** You can request that we erase your personal data under certain conditions.
- **The right to restrict processing:** You can request that we restrict the processing of your personal data.
- **The right to object to processing:** You can object to our processing of your personal data.
- **The right to data portability:** You can request that we transfer the data we have collected to another organization.

## 7. Cookies
Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.

## 8. Security
We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse.

## 9. Contact Us
If you have any questions about this Privacy Policy or our data practices, please contact us:
- **Email:** ${COMPANY_DETAILS.email}
- **Address:** ${COMPANY_DETAILS.address}
  `;

  return (
    <div className="pt-20">
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100">
          <div className="markdown-body prose prose-slate max-w-none">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Privacy;
