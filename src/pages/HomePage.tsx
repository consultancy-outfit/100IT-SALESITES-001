export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Welcome to Dasil Support Services London</h1>
        <p className="mt-4 text-lg text-gray-600">Your trusted partner for comprehensive IT solutions in the UK.</p>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-lg p-12 mt-10 shadow-lg">
          <div className="relative z-10">
            <h2 className="text-5xl font-bold leading-tight">Empowering Your Business with Cutting-Edge IT</h2>
            <p className="mt-4 text-xl opacity-90">Seamless IT support, robust cybersecurity, and strategic cloud solutions tailored for the British market.</p>
            <div className="mt-8 space-x-4">
              <a href="/contact-us" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-md">
                Get a Free Consultation
              </a>
              <a href="/services" className="border border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-md">
                Our Services
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-pattern opacity-10 rounded-lg"></div>
        </section>

        {/* Company Overview */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">About Dasil Support Services London</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Dasil Support Services London is a leading IT solutions provider dedicated to helping UK businesses thrive in the digital age. With a team of highly skilled professionals, we offer a comprehensive suite of services designed to optimise your IT infrastructure, enhance security, and drive innovation. From proactive IT support to advanced cloud migrations and cybersecurity strategies, we are committed to delivering reliable, cost-effective, and scalable solutions that align with your business objectives.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our deep understanding of the British business landscape and regulatory environment, including GDPR, ensures that our services are not only technically superior but also fully compliant and commercially realistic. We pride ourselves on building long-term partnerships, offering personalised attention and unparalleled expertise to every client.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Why Choose Dasil Support Services?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Proactive Support</h3>
              <p className="text-gray-600">Minimise downtime with our 24/7 monitoring and rapid response team, ensuring your operations run smoothly.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Tailored Solutions</h3>
              <p className="text-gray-600">Customised IT strategies designed to meet the unique needs and goals of your UK business.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Expert Team</h3>
              <p className="text-gray-600">Benefit from the knowledge of certified British IT professionals committed to your success.</p>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Industries We Serve Across the UK</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-700">Finance & Banking</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-700">Healthcare</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-700">Retail & E-commerce</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-700">Legal Services</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-700">Manufacturing</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-700">Education</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-700">Government & Public Sector</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-medium text-gray-700">Professional Services</p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Success Stories</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Streamlining Operations for a National Retailer</h3>
              <p className="text-gray-600 mb-4">Implemented a cloud-based ERP system, reducing operational costs by <strong className="text-green-600">£150,000 annually</strong> and improving inventory accuracy by 30%.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium">Read More &rarr;</a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Enhanced Cybersecurity for a Fintech Startup</h3>
              <p className="text-gray-600 mb-4">Deployed advanced threat detection and response systems, preventing potential losses of over <strong className="text-green-600">£200,000</strong> from cyber threats.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium">Read More &rarr;</a>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mt-16 bg-blue-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">What Our Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 italic text-gray-700 relative">
              <p className="mb-4">"Dasil Support Services transformed our IT infrastructure. Their proactive approach and expert team have been invaluable. Highly recommended!"</p>
              <p className="font-semibold text-gray-800">— Mr. Alistair Finch, CEO, Finch & Co. Accountants</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 italic text-gray-700 relative">
              <p className="mb-4">"The team at Dasil provided exceptional cybersecurity solutions. We feel much more secure and confident in our digital operations. A truly professional service."</p>
              <p className="font-semibold text-gray-800">— Dr. Eleanor Vance, Director, Vance Medical Group</p>
            </div>
          </div>
        </section>

        {/* Closing Call to Action */}
        <section className="mt-16 text-center bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg p-12 shadow-lg">
          <h2 className="text-4xl font-bold">Ready to Elevate Your IT?</h2>
          <p className="mt-4 text-xl opacity-90">Contact us today for a tailored IT strategy that drives real business value.</p>
          <a href="/contact-us" className="mt-8 inline-block bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full text-xl font-semibold transition duration-300 ease-in-out shadow-lg">
            Get Started Now
          </a>
        </section>
      </main>
    </div>
  );
}
