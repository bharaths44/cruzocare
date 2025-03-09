import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsApp";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-cruzo mb-4 text-cruzo-blue">
            CONTACT US
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for inquiries or to book a service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <div className="bg-white bg-opacity-5 p-8 rounded-xl h-full">
            <h3 className="text-2xl font-bold mb-6 font-cruzo text-cruzo-blue">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <WhatsAppIcon />
                <div>
                  <h4 className="text-lg font-semibold">WhatsApp</h4>
                  <a
                    href="https://wa.me/918921231547?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20Cruzo%20Care%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cruzo-blue transition-colors"
                  >
                    +91 8921231547
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-cruzo-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-300">
                    Kochi, Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-cruzo-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Instagram</h4>
                  <a
                    href="https://instagram.com/cruzocare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cruzo-blue transition-colors"
                  >
                    @cruzocare
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-cruzo-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a
                    href="mailto:cruzocare@gmail.com"
                    className="text-gray-300 hover:text-cruzo-blue transition-colors"
                  >
                    cruzocare@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Join Card */}
          <div className="bg-cruzo-blue p-8 rounded-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-cruzo">Ready to Join?</h3>
              <p className="text-white mb-8 text-lg">
                Experience premium car care services tailored just for you. Our expert team ensures your vehicle receives the best care possible.
              </p>
              <ul className="space-y-4 mb-8 text-white">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Professional Car Care
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Expert Technicians
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Premium Service
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 24/7 Support
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              className="w-full bg-white text-cruzo-darkBlue hover:bg-gray-100 border-white text-lg font-semibold"
            >
              <a href="https://wa.me/918921231547?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20Cruzo%20Care%20services"
                target="_blank"
                rel="noopener noreferrer"> Book A Service Now </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;