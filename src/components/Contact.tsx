
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, MapPin, Instagram, Send, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsApp";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-5 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 font-cruzo text-cruzo-blue">Send Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white bg-opacity-10 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cruzo-blue"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white bg-opacity-10 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cruzo-blue"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white bg-opacity-10 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cruzo-blue"
                  placeholder="Your message"
                ></textarea>
              </div>

              <Button className="w-full bg-cruzo-blue hover:bg-cruzo-darkBlue">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-white bg-opacity-5 p-8 rounded-xl mb-8">
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
                    <p>
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

            <div className="bg-cruzo-blue p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 font-cruzo">Ready to Join?</h3>
              <p className="text-white mb-6">Sign up today and experience premium car care services tailored for you.</p>
              <Button variant="outline" className="w-full bg-white text-cruzo-darkBlue hover:bg-gray-100 border-white">
                Book A Service Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
