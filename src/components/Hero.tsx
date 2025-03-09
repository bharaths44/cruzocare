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
    <section className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-10">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/lovable-uploads/566b58c8-280c-45b9-95e2-7066bbff9438.png')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-cruzo mb-6 text-white">
          <div className="flex items-center justify-center w-full mb-4">
            <img
              src={silhoutte}
              alt="Luxury Car"
              width={1000}
              height={1000}
              className="object-contain max-w-[80%] md:max-w-[60%] mx-auto"
            />
          </div>
          <span className="text-cruzo-blue">CRUZO</span> IN KOCHI!!!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Premium car care services to keep your vehicle in perfect condition. Experience the luxury of professional maintenance.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button className="bg-cruzo-blue hover:bg-cruzo-darkBlue text-white px-8 py-6 text-lg">
            <a href='#plans' onClick={(e) => handleClick(e, 'plans')}>View Our Plans</a>
          </Button>
          <Button variant="outline" className="border-cruoz-blue text-cruzo-blue hover:bg-cruzo-blue hover:text-white px-8 py-6 text-lg">
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')}> Book A Service</a>
          </Button>
        </div>
      </div>


      <div className="absolute bottom-10 w-full">
        <div className="road h-16 mx-auto max-w-5xl rounded-full">
          <img
            src={car}
            alt="Moving car"
            className="w-12  absolute bottom-2/3 left-10 transform -translate-y-1/2 animate-car-drive-1"
          />
          <img
            src={car}
            alt="Moving car"
            className=" w-12 absolute top-2/3 left-10 transform -translate-y-1/2 animate-car-drive-2"
          />
        </div>
        <div className="flex justify-center mt-6">
          <a href="#plans" onClick={(e) => handleClick(e, 'plans')} className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-cruzo-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
