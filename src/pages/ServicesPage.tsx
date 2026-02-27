export default function ServicesPage() {
  const services = [
    {
      name: "Managed IT Support",
      overview: "Comprehensive 24/7 IT support and proactive monitoring to ensure your systems run smoothly and efficiently. We handle everything from helpdesk queries to server maintenance.",
      targetAudience: "Small to medium-sized businesses (SMBs) seeking reliable, always-on IT infrastructure without the overhead of an in-house team.",
      processSteps: [
        "Initial IT infrastructure audit and assessment.",
        "Customised service level agreement (SLA) development.",
        "Proactive monitoring and preventative maintenance.",
        "24/7 helpdesk support and rapid incident response.",
        "Regular performance reviews and strategic recommendations.",
      ],
      benefits: [
        "Reduced IT operational costs.",
        "Minimised downtime and improved productivity.",
        "Access to expert IT professionals.",
        "Enhanced system reliability and security.",
      ],
      startingPrice: "£350/month",
    },
    {
      name: "Cybersecurity Solutions",
      overview: "Robust cybersecurity strategies and implementation to protect your business from evolving cyber threats, including data breaches, ransomware, and phishing attacks. GDPR compliant solutions.",
      targetAudience: "Businesses across all sectors, particularly those handling sensitive customer data or operating in regulated industries (e.g., finance, healthcare, legal).",
      processSteps: [
        "Vulnerability assessment and penetration testing.",
        "Development of a tailored cybersecurity roadmap.",
        "Implementation of firewalls, antivirus, and intrusion detection systems.",
        "Employee security awareness training.",
        "Incident response planning and recovery services.",
      ],
      benefits: [
        "Stronger data protection and privacy.",
        "Compliance with GDPR and other regulations.",
        "Reduced risk of financial and reputational damage.",
        "Peace of mind knowing your assets are secure.",
      ],
      startingPrice: "£500/month",
    },
    {
      name: "Cloud Computing & Migration",
      overview: "Seamless migration to and management of cloud platforms (AWS, Azure, Google Cloud) to enhance scalability, flexibility, and cost-efficiency. Optimise your cloud environment for peak performance.",
      targetAudience: "Organisations looking to leverage the power of cloud technology for improved agility, remote work capabilities, and reduced infrastructure costs.",
      processSteps: [
        "Cloud readiness assessment and strategy development.",
        "Data migration planning and execution.",
        "Cloud infrastructure setup and configuration.",
        "Ongoing cloud resource management and optimisation.",
        "Cloud security implementation and monitoring.",
      ],
      benefits: [
        "Increased operational flexibility and scalability.",
        "Reduced capital expenditure on hardware.",
        "Enhanced collaboration and remote access.",
        "Improved disaster recovery capabilities.",
      ],
      startingPrice: "£750/project",
    },
    {
      name: "Network Design & Implementation",
      overview: "Design, implement, and optimise robust and secure network infrastructures that support your business operations. From local area networks (LANs) to wide area networks (WANs).",
      targetAudience: "New businesses setting up their IT infrastructure, or existing businesses looking to upgrade, expand, or troubleshoot their current network systems.",
      processSteps: [
        "Network requirements analysis and design.",
        "Hardware procurement and installation.",
        "Network configuration and security setup.",
        "Performance testing and optimisation.",
        "Documentation and knowledge transfer.",
      ],
      benefits: [
        "Faster and more reliable network performance.",
        "Enhanced network security and data integrity.",
        "Scalable infrastructure to support business growth.",
        "Reduced network bottlenecks and improved user experience.",
      ],
      startingPrice: "£600/project",
    },
    {
      name: "Data Backup & Disaster Recovery",
      overview: "Implement robust data backup and disaster recovery solutions to protect your critical business data from loss due to hardware failure, cyber-attacks, or natural disasters. Ensure business continuity.",
      targetAudience: "Any business that cannot afford data loss or significant downtime, crucial for maintaining operations and regulatory compliance.",
      processSteps: [
        "Data assessment and recovery point objective (RPO) / recovery time objective (RTO) definition.",
        "Implementation of automated backup systems (on-site, off-site, cloud).",
        "Regular backup verification and testing.",
        "Development of a comprehensive disaster recovery plan.",
        "Rapid data restoration and business continuity support.",
      ],
      benefits: [
        "Protection against data loss.",
        "Minimised business disruption during incidents.",
        "Compliance with data retention regulations.",
        "Peace of mind with secure and recoverable data.",
      ],
      startingPrice: "£250/month",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">Our Comprehensive IT Services</h1>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">Dasil Support Services London offers a full spectrum of IT solutions designed to empower your business and drive success in the digital landscape.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-4">{service.name}</h2>
                <p className="text-gray-700 mb-6">{service.overview}</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">Target Audience</h3>
                <p className="text-gray-600 mb-6">{service.targetAudience}</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">Process Steps</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  {service.processSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Benefits</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-200">
                <p className="text-xl font-bold text-green-700">Starting from: {service.startingPrice}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
