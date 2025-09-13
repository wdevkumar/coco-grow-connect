import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Ship, Settings, Leaf, DollarSign, Award, Globe, Users, Clock, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Strict quality control and certifications (ISO, Organic, HACCP). Advanced processing ensures premium-grade coir with uniform pH and low salts.',
      features: ['ISO Certified Processing', 'Organic Standards Compliance', 'HACCP Food Safety', 'Independent Lab Testing', 'Batch Quality Tracking']
    },
    {
      icon: Ship,
      title: 'Global Shipping',
      description: 'Full export logistics support – sea freight, air cargo, or road. We serve clients worldwide with flexible Incoterms (FOB, CIF, etc.).',
      features: ['30+ Countries Served', 'Multiple Shipping Options', 'Real-time Tracking', 'On-time Delivery Guarantee', 'Flexible Incoterms']
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Customized solutions: special sizes, blends or packing options (private label, film-wrapped pallets, etc.). Tailored to your needs.',
      features: ['Custom Blend Formulations', 'Private Label Options', 'Special Packaging Sizes', 'Bespoke Solutions', 'Technical Consultation']
    },
    {
      icon: Leaf,
      title: 'Sustainable Sourcing',
      description: 'Coco coir from 100% waste coconut husks. We reuse the whole nut (husk to fiber) so nothing is wasted. Compressed shipping cuts emissions.',
      features: ['Zero Waste Process', '100% Renewable Resource', 'Carbon Neutral Shipping', 'Circular Economy Model', 'Environmental Certifications']
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Efficient production and volume discounts let us offer stable, competitive rates without compromising quality. Transparent pricing structure.',
      features: ['Volume Discounts Available', 'Stable Pricing Structure', 'No Hidden Costs', 'Flexible Payment Terms', 'Cost-effective Solutions']
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '30+', label: 'Countries Served', icon: Globe },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'Organic Certification (USDA/EU)',
    'HACCP Food Safety Standards',
    'OMRI Listed for Organic Use',
    'Phytosanitary Certificates',
    'Export Quality Compliance'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-earth text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Choose Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the five pillars that make us the preferred partner for agricultural professionals worldwide
          </p>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-green mb-6">Our Five Pillars of Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core strengths ensure you receive the highest quality products and service every time
            </p>
          </div>

          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center">
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-earth-green">{pillar.title}</h3>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-3">
                    {pillar.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-earth-green flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="border-l-4 border-l-primary shadow-large hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 bg-gradient-earth rounded-full flex items-center justify-center mx-auto">
                          <pillar.icon className="h-12 w-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-earth-green">{pillar.title}</h4>
                        <div className="h-1 w-16 bg-gradient-earth mx-auto rounded-full"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-earth-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-green mb-6">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak to our commitment and expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 space-y-4">
                  <achievement.icon className="h-12 w-12 text-earth-green mx-auto" />
                  <div className="text-4xl font-bold text-earth-green">{achievement.number}</div>
                  <div className="text-muted-foreground font-medium">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-green mb-6">Certifications & Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality is backed by internationally recognized certifications and standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-earth-cream rounded-lg">
                <Award className="h-6 w-6 text-earth-green flex-shrink-0" />
                <span className="font-medium text-earth-brown">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-gradient-earth text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">What Our Clients Say</h2>
            
            <blockquote className="text-2xl italic font-light opacity-95">
              "CocoExport has been our trusted partner for over 5 years. Their consistent quality, 
              reliable delivery, and exceptional customer service have helped us scale our hydroponic 
              operations across three continents."
            </blockquote>
            
            <div className="space-y-2">
              <div className="font-semibold text-lg">Sarah Johnson</div>
              <div className="opacity-80">Head of Procurement, GreenGrow Agriculture</div>
            </div>

            <div className="flex justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="opacity-80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="opacity-80">Repeat Business</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.5%</div>
                <div className="opacity-80">On-time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;