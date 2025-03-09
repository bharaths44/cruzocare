
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Plans from '../components/Plans';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cruzo-black text-white overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
