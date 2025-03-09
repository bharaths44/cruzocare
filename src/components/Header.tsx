
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold font-cruzo text-cruzo-blue">CRUZO</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-white hover:text-cruzo-blue transition-colors font-medium">Services</a>
          <a href="#plans" className="text-white hover:text-cruzo-blue transition-colors font-medium">Plans</a>
          <a href="#contact" className="text-white hover:text-cruzo-blue transition-colors font-medium">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:8921231547" className="flex items-center">
            <PhoneCall className="h-5 w-5 text-cruzo-blue mr-2" />
            <span className="hidden md:inline text-white">8921231547</span>
          </a>
          <a href="https://instagram.com/cruzocare" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Instagram className="h-5 w-5 text-cruzo-blue mr-2" />
            <span className="hidden md:inline text-white">cruzocare</span>
          </a>
          <Button className="bg-cruzo-blue hover:bg-cruo-darkBlue">Book Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
