
import React from 'react';
import { Car, Droplets, Battery, Wrench, Plane, CalendarCheck } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string
}) => {
  return (
    <div className="bg-white bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300 border border-white border-opacity-10">
      <div className="w-12 h-12 rounded-full bg-cruzo-blue bg-opacity-20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 font-cruzo">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Car className="h-6 w-6 text-cruzo-blue" />,
      title: "Car Drives",
      description: "Regular drives to ensure your vehicle stays in optimal condition when you're away."
    },
    {
      icon: <Droplets className="h-6 w-6 text-cruzo-blue" />,
      title: "Car Wash",
      description: "Premium washing service to keep your vehicle looking clean and brand new."
    },
    {
      icon: <Battery className="h-6 w-6 text-cruzo-blue" />,
      title: "Battery Checkup",
      description: "Regular battery maintenance to prevent unexpected failures."
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-cruzo-blue" />,
      title: "Vehicle Service",
      description: "Comprehensive service coordination with authorized showrooms."
    },
    {
      icon: <Wrench className="h-6 w-6 text-cruzo-blue" />,
      title: "General Checkups",
      description: "Ensure your vehicle stays in top condition."
    },
    {
      icon: <Plane className="h-6 w-6 text-cruzo-blue" />,
      title: "Airport Pickup",
      description: "Convenient pickup service from Cochin International Airport (COK)."
    },

  ];

  return (
    <section id="services" className="py-20 bg-black bg-opacity-70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-cruzo mb-4 text-cruzo-blue">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide complete care for your vehicle with our premium services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
