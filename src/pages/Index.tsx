import HeroSection from '@/components/HeroSection';
import ProductHighlights from '@/components/ProductHighlights';
import TrustSection from '@/components/TrustSection';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const MissionSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-earth-green">Our Mission</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We source 100% organic coconut coir from Southeast Asia to deliver eco-friendly growing media worldwide. 
          Our mission is to empower farmers and growers with natural, high-performance products for healthier crops.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-earth-brown">
          <span className="bg-earth-cream px-4 py-2 rounded-full font-medium">#Sustainable</span>
          <span className="bg-earth-cream px-4 py-2 rounded-full font-medium">#EcoFriendly</span>
          <span className="bg-earth-cream px-4 py-2 rounded-full font-medium">#Premium Quality</span>
          <span className="bg-earth-cream px-4 py-2 rounded-full font-medium">#Global Reach</span>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-gradient-earth text-white">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to Grow with Us?</h2>
        <p className="text-xl opacity-90">
          Join thousands of growers worldwide who trust our premium coconut coir for their agricultural success
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Request Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80">
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            info@cocoexport.com
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            +1 (555) 123-4567
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ProductHighlights />
      <TrustSection />
      <CTASection />
    </div>
  );
};

export default Index;