import React from 'react';
import ReactMarkdown from 'react-markdown';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  const content = `
# Privacy Policy

**Last Updated: ${new Date().toLocaleDateString('en-GB')}**

**${COMPANY_DETAILS.name}** ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.

## 1. Data Controller
For the purpose of data protection legislation, the data controller is **${COMPANY_DETAILS.name}**, with registered office at **${COMPANY_DETAILS.address}**.

## 2. Information We Collect
We may collect and process the following data about you:
*   **Contact Information:** Name, email address, phone number, and company name provided via our contact forms.
*   **Technical Data:** IP address, browser type, and usage data collected via cookies.
*   **Service Data:** Information provided to us during the provision of IT support services.

## 3. How We Use Your Data
We use your information for the following purposes:
*   To provide and manage the IT services you have requested.
*   To respond to inquiries and provide technical support.
*   To comply with legal and regulatory obligations.
*   To improve our website and service offerings.

## 4. Legal Basis for Processing
We process your data under the following legal bases:
*   **Contract:** To fulfill our contractual obligations to you.
*   **Legitimate Interests:** For the effective management and promotion of our business.
*   **Consent:** Where you have explicitly agreed to receive marketing communications.

## 5. Data Retention
We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the end of the business relationship.

## 6. Your Rights
Under the UK GDPR, you have the following rights:
*   **Access:** Request a copy of the data we hold about you.
*   **Rectification:** Request correction of inaccurate data.
*   **Erasure:** Request deletion of your data (the "right to be forgotten").
*   **Restriction:** Request that we limit the processing of your data.
*   **Portability:** Request transfer of your data to another provider.
*   **Objection:** Object to processing based on legitimate interests.

## 7. Security Measures
We implement industry-standard security measures, including encryption, firewalls, and secure access controls, to protect your data from unauthorized access, loss, or disclosure.

## 8. Cookies
Our website uses cookies to distinguish you from other users. You can manage your cookie preferences through your browser settings.

## 9. Contact Us
If you have any questions about this policy or wish to exercise your rights, please contact our Data Protection Officer at:
*   **Email:** ${COMPANY_DETAILS.email}
*   **Phone:** ${COMPANY_DETAILS.phone}
  `;

  return (
    <div className="bg-white section-padding">
      <div className="container-custom max-w-4xl">
        <div className="prose prose-slate lg:prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
