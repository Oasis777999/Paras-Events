import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-events.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-deep/80 via-purple-deep/60 to-gold/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-gold mr-3" />
          <span className="text-gold text-lg font-semibold">Creating Unforgettable Moments</span>
          <Sparkles className="h-8 w-8 text-gold ml-3" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Dream Events,
          <span className="block bg-gradient-to-r from-gold to-rose-gold bg-clip-text text-transparent">
            Perfectly Crafted
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          From intimate gatherings to grand celebrations, we bring your vision to life with 
          exceptional attention to detail and unparalleled elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="luxury" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
            onClick={()=>navigate("/packages")}
          >
            Explore Our Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={()=>navigate("/gallery")}
          >
            View Gallery
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5000+</div>
            <div className="text-white/80">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15 Years</div>
            <div className="text-white/80">Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;