
import React from 'react';
import { PhoneCall, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold font-cruzo text-cruzo-blue mb-4">CRUZO</h2>
            <p className="text-gray-400">Premium car care services in Kochi. Keeping your vehicle in perfect condition.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cruzo-blue transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cruzo-blue transition-colors">Services</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-cruzo-blue transition-colors">Plans</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cruzo-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cruzo-blue transition-colors">Car Drives</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cruzo-blue transition-colors">Car Wash</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cruzo-blue transition-colors">Battery Checkup</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cruzo-blue transition-colors">Vehicle Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cruzo-blue transition-colors">Airport Pickup</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 text-cruzo-blue mr-2" />
                <span className="text-gray-400">+91 8921231547</span>
              </li>
              <li className="flex items-center">
                <Instagram className="h-5 w-5 text-cruzo-blue mr-2" />
                <span className="text-gray-400">@cruzocare</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2023 CRUZO. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-cruzo-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-cruzo-blue transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
