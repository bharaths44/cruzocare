
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanFeature {
  text: string;
}

interface PlanProps {
  title: string;
  price: string;
  duration: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

const PlanCard: React.FC<PlanProps> = ({
  title,
  price,
  duration,
  features,
  isPopular = false,
}) => {
  return (
    <div className={`relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex flex-col card-glow ${
      isPopular ? 'transform md:scale-110 border-2 border-cruzo-blue' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cruzo-blue text-white py-1 px-4 rounded-full text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-bold plan-title mb-2">
        {title} PLAN
      </h3>
      
      <div className="flex items-baseline mb-4">
        <span className="text-2xl md:text-4xl font-bold text-white plan-price">₹{price}</span>
        <span className="text-gray-400 ml-2">/{duration}</span>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-cruzo-blue mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button className={`w-full ${
        isPopular ? 'bg-cruzo-blue hover:bg-cruzo-darkBlue' : 'bg-white bg-opacity-20 hover:bg-opacity-30'
      }`}>
        Choose Plan
      </Button>
    </div>
  );
};

export default PlanCard;
