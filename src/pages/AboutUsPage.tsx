import { CheckCircle } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">About Dasil Support Services London</h1>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">Your trusted partner for innovative and reliable IT solutions in the UK.</p>

        {/* Mission & Vision */}
        <section className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower UK businesses with cutting-edge, secure, and efficient IT solutions that drive growth, enhance productivity, and ensure seamless operations. We are committed to delivering exceptional value and building lasting partnerships based on trust and innovation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading IT services provider in London and across the UK, recognised for our technical excellence, customer-centric approach, and unwavering commitment to digital transformation and security for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Story</h2>
          <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Founded in [Year], Dasil Support Services London began with a clear vision: to bridge the gap between complex IT challenges and accessible, effective solutions for British businesses. What started as a small team of passionate IT professionals has grown into a reputable firm, serving a diverse portfolio of clients across various industries. Our journey has been marked by continuous learning, adaptation to technological advancements, and an unwavering focus on client success. We believe in fostering long-term relationships, understanding that our growth is intrinsically linked to the prosperity of the businesses we support.
          </p>
        </section>

        {/* Leadership Profiles */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Meet Our Leadership Team</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img src="https://picsum.photos/seed/person1/150/150" alt="John Smith" className="rounded-full mx-auto mb-4 w-32 h-32 object-cover" referrerPolicy="no-referrer" />
              <h3 className="text-xl font-semibold text-gray-900">Mr. John Smith</h3>
              <p className="text-blue-600">Founder & CEO</p>
              <p className="text-gray-600 mt-2 text-sm">A visionary leader with over 20 years of experience in IT strategy and business development.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img src="https://picsum.photos/seed/person2/150/150" alt="Sarah Davies" className="rounded-full mx-auto mb-4 w-32 h-32 object-cover" referrerPolicy="no-referrer" />
              <h3 className="text-xl font-semibold text-gray-900">Ms. Sarah Davies</h3>
              <p className="text-blue-600">Chief Technology Officer</p>
              <p className="text-gray-600 mt-2 text-sm">Expert in cloud architecture and cybersecurity, driving our technical innovation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img src="https://picsum.photos/seed/person3/150/150" alt="David Green" className="rounded-full mx-auto mb-4 w-32 h-32 object-cover" referrerPolicy="no-referrer" />
              <h3 className="text-xl font-semibold text-gray-900">Mr. David Green</h3>
              <p className="text-blue-600">Head of Client Services</p>
              <p className="text-gray-600 mt-2 text-sm">Dedicated to ensuring client satisfaction and fostering strong, collaborative relationships.</p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mt-16 bg-blue-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Core Values</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
                <p className="text-gray-700">Operating with honesty, transparency, and ethical practices in all our engagements.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                <p className="text-gray-700">Continuously seeking new technologies and creative solutions to solve complex IT challenges.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Client-Centricity</h3>
                <p className="text-gray-700">Placing our clients' needs at the forefront, delivering tailored solutions and exceptional service.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
                <p className="text-gray-700">Striving for the highest standards in technical delivery, customer support, and strategic advice.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Collaboration</h3>
                <p className="text-gray-700">Working closely with clients and partners to achieve shared goals and foster mutual success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Compliance */}
        <section className="mt-16 bg-green-50 rounded-xl shadow-lg p-8 flex items-center justify-center text-center">
          <CheckCircle className="text-green-600 mr-4" size={32} />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Commitment to GDPR Compliance</h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              At Dasil Support Services London, we are deeply committed to protecting your data and ensuring full compliance with the General Data Protection Regulation (GDPR). Our processes, systems, and services are designed with privacy by design and default principles, ensuring that all personal data is handled with the utmost care, transparency, and security. Your trust is our priority.
            </p>
            <a href="/privacy-policy" className="mt-4 inline-block text-blue-600 hover:underline font-medium">Learn more about our Privacy Policy &rarr;</a>
          </div>
        </section>
      </main>
    </div>
  );
}
