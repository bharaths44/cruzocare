
import { Mail } from "lucide-react";
import WhatsAppIcon from './ui/WhatsApp';
import InstagramIcon from './ui/Instagram';
import logo from './../images/logo.png';
import { scrollToSection } from "./animation/smooth";
const Footer = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId.replace('#', ''));
  };
  return (
    <footer className="bg-black pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="CRUZOCARE"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400"><br />Premium car care services in Kochi. Keeping your vehicle in perfect condition.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="# " onClick={(e) => handleClick(e, '#')} className="text-gray-400 hover:text-cruzo-blue transition-colors">Home</a></li>
              <li><a href="#services" onClick={(e) => handleClick(e, 'services')} className="text-gray-400 hover:text-cruzo-blue transition-colors">Services</a></li>
              <li><a href="#plans" onClick={(e) => handleClick(e, 'plans')} className="text-gray-400 hover:text-cruzo-blue transition-colors">Plans</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="text-gray-400 hover:text-cruzo-blue transition-colors">Contact</a></li>
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
                <WhatsAppIcon />
                <div>
                  <a
                    href="https://wa.me/918921231547?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20Cruzo%20Care%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cruzo-blue transition-colors"
                  >+91 8921231547
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <InstagramIcon />
                <div>
                  <a
                    href="https://instagram.com/cruzocare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cruzo-blue transition-colors"
                  >@cruzocare
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-cruzo-blue mr-4 mt-1" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:cruzocare@gmail.com"
                  className="text-gray-400 hover:text-cruzo-blue transition-colors"
                >
                  cruzocare@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 CRUZO. All rights reserved.</p>
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
