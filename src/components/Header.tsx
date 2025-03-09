
import React from 'react';
import logo from './../images/logo.png';
import { Button } from "@/components/ui/button";
import { scrollToSection } from './animation/smooth';

const Header = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId.replace('#', ''));
  };
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
          <a href="#services" onClick={(e) => handleClick(e, 'services')} className="text-white hover:text-cruzo-blue transition-colors font-medium">Services</a>
          <a href="#plans" onClick={(e) => handleClick(e, 'plans')} className="text-white hover:text-cruzo-blue transition-colors font-medium">Plans</a>
          <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="text-white hover:text-cruzo-blue transition-colors font-medium">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">

          <Button className="bg-cruzo-blue hover:bg-cruo-darkBlue"><a
            href="https://wa.me/918921231547?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20Cruzo%20Care%20services"
            target="_blank"
            rel="noopener noreferrer"
          >Book Now</a></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
