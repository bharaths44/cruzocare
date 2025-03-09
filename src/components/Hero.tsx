
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-10">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/lovable-uploads/566b58c8-280c-45b9-95e2-7066bbff9438.png')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container mx-auto z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-cruzo mb-6 text-white">
          <span className="text-cruzo-blue">CRUZO</span> IN KOCHI!!!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Premium car care services to keep your vehicle in perfect condition. Experience the luxury of professional maintenance.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button className="bg-cruzo-blue hover:bg-cruzo-darkBlue text-white px-8 py-6 text-lg">
            View Our Plans
          </Button>
          <Button variant="outline" className="border-cruoz-blue text-cruzo-blue hover:bg-cruzo-blue hover:text-white px-8 py-6 text-lg">
            Book A Service
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full">
        <div className="road h-16 mx-auto max-w-5xl rounded-full">
          <div className="w-8 h-4 bg-cruzo-blue rounded absolute top-1/3 left-10 transform -translate-y-1/2 animate-car-drive-1"></div>
          <div className="w-8 h-4 bg-cruzo-blue rounded absolute top-2/3 right-10 transform -translate-y-1/2 animate-car-drive-2"></div>
        </div>
        <div className="flex justify-center mt-6">
          <a href="#plans" className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-cruzo-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
