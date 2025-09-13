import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-coconut-peat.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            PT Relvin Alam Nusantara Exports
            <span className="block text-accent"> Nature's Coir</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
            Premium Coconut Coir for Sustainable Agriculture
          </p>

          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            100% organic coconut coir from Southeast Asia, delivering
            eco-friendly growing media worldwide
          </p>

          <div className="flex justify-center pt-8">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 shadow-large transition-smooth"
              onClick={() => navigate("/products")}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
