import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Eye, Target, Users, Award, Lightbulb, Shield, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We use 100% organic coconut husk (a renewable resource) and minimize our carbon footprint.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Rigorous testing and certifications ensure every shipment meets premium standards.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continually improve our processes and develop new coir-based solutions for modern agriculture.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent business practices, on-time delivery, and responsive support build long-term partnerships.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-earth text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About CocoExport</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Building on generations of coconut farming heritage to deliver premium growing media worldwide
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-earth-green mb-6">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl mb-6">
                Founded in 2010 in Southeast Asia, Coconut Peat Exporter builds on generations of coconut farming heritage. 
                We work closely with local farmers to harvest and process coconut coir into premium growing media. 
                Our team combines agricultural expertise with export experience to serve clients worldwide.
              </p>
              
              <p className="text-lg">
                Our commitment extends beyond business – we invest in local communities and maintain fair labor practices 
                while pioneering sustainable agricultural solutions. Every bag of coconut coir we export represents our 
                dedication to environmental stewardship and agricultural innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-earth-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-primary shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-3xl font-bold text-earth-green">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to supply sustainable, high-quality coconut coir products that help growers 
                  achieve better yields with lower environmental impact. We use organic, renewable coir to 
                  support eco-friendly agriculture worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-earth-sage shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-10 w-10 text-earth-sage mr-4" />
                  <h3 className="text-3xl font-bold text-earth-green">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a world where eco-friendly growing media support food security and healthier farms 
                  globally. Our goal is to be the leading supplier of sustainable coconut coir solutions that 
                  empower agricultural communities everywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-green mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-earth rounded-full group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-earth-green">{value.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Community */}
      <section className="py-20 bg-gradient-earth text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Community Impact</h2>
            <p className="text-xl opacity-90">
              Our success is built on strong partnerships with local farming communities and a commitment 
              to sustainable practices that benefit everyone involved.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <Users className="h-12 w-12 mx-auto opacity-80" />
                <h3 className="text-2xl font-semibold">500+ Farmers</h3>
                <p className="opacity-80">Supporting local farming families</p>
              </div>
              <div className="space-y-4">
                <Heart className="h-12 w-12 mx-auto opacity-80" />
                <h3 className="text-2xl font-semibold">Fair Trade</h3>
                <p className="opacity-80">Ethical sourcing practices</p>
              </div>
              <div className="space-y-4">
                <Leaf className="h-12 w-12 mx-auto opacity-80" />
                <h3 className="text-2xl font-semibold">Zero Waste</h3>
                <p className="opacity-80">Complete coconut husk utilization</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;