import PlanCard from './PlanCard';
import PlanDetails from './PlanDetails';
const Plans = () => {
  const plans = [
    {
      title: "REVIVE",
      price: "1799",
      duration: "month",
      features: [
        { text: "1 car wash & 2 drives*†" },
        { text: "Vehicle and battery checkup" }
      ]
    },
    {
      title: "CRUISE",
      price: "4899",
      duration: "3 months",
      features: [
        { text: "3 car wash & 6 drives*†" },
        { text: "Vehicle service in showroom if necessary (payment excluded)" },
        { text: "General vehicle checkup" },
        { text: "Free Airport (COK) pickup*" }
      ],
      isPopular: true
    },
    {
      title: "ELITE",
      price: "9499",
      duration: "6 months",
      features: [
        { text: "6 car wash & 14 drives*†" },
        { text: "Vehicle service in showroom if necessary (payment excluded)" },
        { text: "General vehicle checkup" },
        { text: "Free Airport (COK) pickup*" }
      ]
    }
  ];

  return (
    <>
      <section id="plans" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold plan-title mb-4 text-cruzo-blue">
              SUBSCRIPTION PLANS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your vehicle care needs and enjoy premium services at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-400">
            <p>* Fuel charges excluded</p>
            <p>† Under 10km each</p>
          </div>
        </div>

        <div className="absolute -right-20 -top-20 w-64 h-64 bg-cruzo-blue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cruzo-blue opacity-10 rounded-full blur-3xl"></div>
      </section>
      <PlanDetails />
    </>
  );
};

export default Plans;
