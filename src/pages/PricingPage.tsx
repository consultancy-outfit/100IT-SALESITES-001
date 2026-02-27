import { CheckCircle } from 'lucide-react';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Starter IT Support",
      price: "£199",
      period: "/month",
      features: [
        "Basic remote support (9/5)",
        "Proactive monitoring (basic)",
        "Antivirus management",
        "Software updates & patching",
        "Up to 5 devices",
      ],
      supportLevel: "Standard email & phone support",
      idealClient: "Small businesses needing foundational IT assistance.",
      vatClarification: "Excludes VAT at the current UK rate.",
      callToAction: "Get Started",
    },
    {
      name: "Business IT Solutions",
      price: "£499",
      period: "/month",
      features: [
        "24/7 remote & on-site support",
        "Advanced proactive monitoring",
        "Cybersecurity essentials",
        "Cloud backup & recovery (basic)",
        "Up to 20 devices",
        "Dedicated account manager",
      ],
      supportLevel: "Priority 24/7 support",
      idealClient: "Growing SMEs requiring comprehensive IT management.",
      vatClarification: "Excludes VAT at the current UK rate.",
      callToAction: "Choose Plan",
    },
    {
      name: "Enterprise IT Partnership",
      price: "£999",
      period: "/month",
      features: [
        "Full 24/7 managed services",
        "Advanced cybersecurity suite",
        "Strategic cloud optimisation",
        "Disaster recovery planning",
        "Unlimited devices",
        "IT strategy consulting",
      ],
      supportLevel: "Dedicated 24/7 enterprise support",
      idealClient: "Large organisations seeking a strategic IT partner.",
      vatClarification: "Excludes VAT at the current UK rate.",
      callToAction: "Contact for Enterprise",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">Flexible IT Support Pricing</h1>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">Choose the perfect IT support plan for your UK business. All prices exclude VAT.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between transform hover:scale-105 transition duration-300 ease-in-out">
              <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">{tier.name}</h2>
                <p className="text-5xl font-extrabold text-gray-900 text-center mb-2">
                  {tier.price}<span className="text-xl font-medium text-gray-600">{tier.period}</span>
                </p>
                <p className="text-sm text-gray-500 text-center mb-6">{tier.vatClarification}</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h3>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Level:</h3>
                <p className="text-gray-700 mb-4">{tier.supportLevel}</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ideal For:</h3>
                <p className="text-gray-700 mb-6">{tier.idealClient}</p>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                  {tier.callToAction}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
