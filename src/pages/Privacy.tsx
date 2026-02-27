import React from 'react';
import ReactMarkdown from 'react-markdown';
import { COMPANY_DETAILS } from '../constants';

const Privacy = () => {
  const content = `
# Privacy Policy

**Last Updated: February 2026**

**${COMPANY_DETAILS.name}** ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy explains how we process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.

## 1. Data We Collect
We may collect and process the following data:
- **Contact Information:** Name, email address, phone number, and business address.
- **Technical Data:** IP address, browser type, and usage data via cookies.
- **Service Data:** Information provided during the provision of our IT services.

## 2. Purposes of Processing
We use your data to:
- Provide and manage our IT services.
- Respond to enquiries and provide quotes.
- Comply with legal and regulatory obligations.
- Improve our website and user experience.

## 3. Legal Basis for Processing
We process data based on:
- **Contractual Necessity:** To perform our services for you.
- **Legitimate Interests:** For business administration and marketing.
- **Legal Obligation:** To comply with UK law.
- **Consent:** Where you have explicitly provided it (e.g., for newsletters).

## 4. Data Retention
We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, typically for the duration of our business relationship plus 7 years for tax and legal purposes.

## 5. Your Rights
Under UK GDPR, you have the right to:
- Access your personal data.
- Rectify inaccurate data.
- Request erasure of your data ("right to be forgotten").
- Restrict or object to processing.
- Data portability.

## 6. Cookies
Our website uses cookies to distinguish you from other users. You can manage your cookie preferences through your browser settings.

## 7. Security
We implement robust technical and organisational measures, including encryption and access controls, to protect your data from unauthorised access or disclosure.

## 8. Contact Our Data Protection Lead
If you have any questions about this policy or our data practices, please contact:
- **Email:** ${COMPANY_DETAILS.email}
- **Address:** ${COMPANY_DETAILS.address}

You also have the right to lodge a complaint with the Information Commissioner's Office (ICO).
  `;

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom max-w-4xl">
        <div className="prose prose-slate lg:prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
