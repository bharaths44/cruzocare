import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "./animation/smooth";
import silhoutte from './../images/silhoutte.png';
import car from './../images/car.png';

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId.replace('#', ''));
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center"> {/* Reduced padding-top from 80px to 50px and overall padding */}
      <div className="container mx-auto z-20 flex flex-col items-center mt-0">
        <h1 className="text-3xl md:text-7xl font-bold font-cruzo text-white w-full">
          <div className="flex items-center justify-center w-full mb-0 mt-0">
            <video
              autoPlay
              muted
              playsInline
              // poster={silhoutte}
              className="object-contain w-full md:w-4/4 lg:w-4/4 max-h-[100vh]"
            >
              <source src="rise.mp4" type="video/mp4" />
              <img src={silhoutte} alt="Luxury Car" />
            </video>
          </div>
          <div className="text-center -mt-5">
            <span className="text-cruzo-blue">CRUZO</span> IN KOCHI!!!
          </div>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 text-center">
          Premium car care services to keep your vehicle in perfect condition. Experience the luxury of professional maintenance.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12 w-full px-4">
          <Button className="bg-cruzo-blue hover:bg-cruzo-darkBlue text-white px-8 py-6 text-lg w-full md:w-auto">
            <a href='#plans' onClick={(e) => handleClick(e, 'plans')}>View Our Plans</a>
          </Button>
          <Button variant="outline" className="border-cruzo-blue text-cruzo-blue hover:bg-cruzo-blue hover:text-white px-8 py-6 text-lg w-full md:w-auto">
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')}> Book A Service</a>
          </Button>
        </div>

        <div className="w-full max-w-5xl relative">
          {/*Road*/}
          <div className="road h-16 bg-black/50 backdrop-blur-sm rounded-full relative border-t border-gray-700">
            <img
              src={car}
              alt="Moving car"
              className="w-12 absolute bottom-2/3 left-10 transform -translate-y-1/2 animate-car-drive-1"
            />
            <img
              src={car}
              alt="Moving car"
              className="w-12 absolute top-2/3 left-10 transform -translate-y-1/2 animate-car-drive-2"
            />
          </div>

          <div className="flex justify-center mt-6">
            <a href="#plans" onClick={(e) => handleClick(e, 'plans')} className="animate-bounce hover:text-cruzo-blue transition-colors">
              <ChevronDown className="h-8 w-8 text-cruzo-blue" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;