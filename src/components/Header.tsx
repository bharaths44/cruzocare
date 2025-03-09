
import React from 'react';
import logo from '/public/logo.png';
import { Button } from "@/components/ui/button";
import { PhoneCall, Instagram } from "lucide-react";
import WhatsAppIcon from './WhatsApp';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src={logo}
              alt="CRUZOCARE"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-white hover:text-cruzo-blue transition-colors font-medium">Services</a>
          <a href="#plans" className="text-white hover:text-cruzo-blue transition-colors font-medium">Plans</a>
          <a href="#contact" className="text-white hover:text-cruzo-blue transition-colors font-medium">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">

          <Button className="bg-cruzo-blue hover:bg-cruo-darkBlue">Book Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
