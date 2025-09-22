import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-theatre.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Theatre Performance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Naalvadi Ranga{" "}
            <span className="text-accent animate-cultural-float inline-block">
              Madhyama
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-theatre-beige mb-8 leading-relaxed animate-fade-in">
            A community-driven theatre organization in Mysuru that believes in 
            the power of performance to <span className="text-accent font-semibold">awaken</span>, 
            <span className="text-accent font-semibold"> educate</span>, and 
            <span className="text-accent font-semibold"> empower</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-warm hover-lift"
            >
              <Link to="/about">Discover Our Story</Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-cultural hover-lift"
            >
              <Link to="/workshops">Join Workshops</Link>
            </Button>
          </div>

          {/* Values */}
          <div className="flex flex-wrap gap-6 text-theatre-beige animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-theatre-glow"></div>
              <span className="text-lg font-medium">Justice</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-theatre-glow"></div>
              <span className="text-lg font-medium">Equality</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-theatre-glow"></div>
              <span className="text-lg font-medium">Culture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-cultural-float">
        <div className="w-1 h-16 bg-accent/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;