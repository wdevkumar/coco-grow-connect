import { Card, CardContent } from '@/components/ui/card';
import { Award, Globe, Leaf, Shield } from 'lucide-react';

const TrustSection = () => {
  const credentials = [
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'Our coir meets ISO and organic standards, with independent lab tests for purity and consistency.',
      features: ['ISO Certified', 'Organic Standards', 'HACCP Compliant', 'Lab Tested']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving growers in 30+ countries with reliable export shipping and logistics support.',
      features: ['30+ Countries', 'Sea & Air Freight', 'Real-time Tracking', 'On-time Delivery']
    },
    {
      icon: Leaf,
      title: 'Eco Practices',
      description: '100% coconut husks used, zero waste. We ship dry and compressed to cut carbon emissions.',
      features: ['Zero Waste Process', 'Carbon Neutral Shipping', 'Renewable Resource', '100% Organic']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing protocols ensure every batch meets premium standards for pH and salt levels.',
      features: ['Batch Testing', 'Quality Control', 'Consistent pH', 'Low Salt Content']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-green mb-6">
            Trusted by Growers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality, sustainability, and reliability has made us a preferred partner 
            for agricultural professionals across the globe
          </p>
          
          <div className="mt-8 p-6 bg-gradient-earth rounded-2xl shadow-medium max-w-4xl mx-auto">
            <p className="text-lg text-white font-medium italic">
              "Nothing goes to waste – coconut husks become our premium growing media, 
              supporting sustainable agriculture and healthier crops worldwide."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-earth rounded-full group-hover:scale-110 transition-transform duration-300">
                  <credential.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-earth-green">{credential.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {credential.description}
                </p>

                <div className="space-y-2">
                  {credential.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-earth-sage rounded-full"></div>
                      <span className="text-sm font-medium text-earth-brown">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-earth-green">30+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-earth-green">100%</div>
            <div className="text-muted-foreground">Organic Material</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-earth-green">Zero</div>
            <div className="text-muted-foreground">Waste Process</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-earth-green">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;