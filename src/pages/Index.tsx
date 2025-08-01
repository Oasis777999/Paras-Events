import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Wedding from "@/components/Wedding";
import AboutUs from "@/components/Aboutus.jsx"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Packages />
      <AboutUs/>
    </div>
  );
};

export default Index;
