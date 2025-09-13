import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Layers, ShoppingBag, Sprout, Droplets, Wind, Recycle, CheckCircle } from 'lucide-react';
import cocoPeatBlocksImage from '@/assets/coco-peat-blocks.jpg';
import growBagsImage from '@/assets/grow-bags.jpg';
import looseCoir from '@/assets/loose-coir.jpg';

const Products = () => {
  const products = [
    {
      icon: Package,
      image: cocoPeatBlocksImage,
      name: 'Coco Peat Blocks',
      subtitle: 'High-density compressed coir bricks',
      description: 'Expand by soaking in water (1 kg → ~10–12 L of peat). Excellent moisture retention and aeration. Versatile for soil mixes, potting, and mulching.',
      benefits: [
        'Excellent water retention',
        'Superior aeration properties', 
        'Easy to store and transport',
        'Economical bulk solution',
        'Consistent expansion rate'
      ],
      uses: [
        'Soil conditioning and amendment',
        'Potting mix ingredient',
        'Mulching material',
        'Seed starting medium',
        'Hydroponic substrate'
      ],
      packaging: '5kg bricks, bulk pallets available',
      specs: {
        'pH Level': '5.5 - 6.5',
        'Expansion Ratio': '1:10-12',
        'Moisture Content': '<20%',
        'Salt Content': '<0.5 mS/cm'
      }
    },
    {
      icon: Layers,
      image: growBagsImage,
      name: 'Hydroponic Grow Bags',
      subtitle: 'Pre-formed grow slabs of washed coco coir',
      description: 'Ready to use out-of-the-box (no pre-rinsing needed). Perfect for greenhouse and hydroponic vegetables or ornamentals.',
      benefits: [
        'No pre-flushing required',
        'Consistent moisture delivery',
        'Professional grade quality',
        'Pre-formed channels',
        'Sterile and pathogen-free'
      ],
      uses: [
        'Greenhouse cultivation',
        'Hydroponic systems',
        'Commercial vegetable production',
        'Ornamental plant growing',
        'Controlled environment agriculture'
      ],
      packaging: '50L and 100L slabs with grower channels',
      specs: {
        'pH Level': '5.8 - 6.2',
        'Water Retention': '85-90%',
        'Air Porosity': '10-15%',
        'Bulk Density': '80-90 kg/m³'
      }
    },
    {
      icon: ShoppingBag,
      image: looseCoir,
      name: 'Loose Coir (Bulk Bags)',
      subtitle: 'Loose coconut fiber in bulk bags',
      description: 'Ideal for commercial potting mixes, soil amendment, and nursery use. Available in various bag sizes including jumbo bags for large operations.',
      benefits: [
        'Forklift-friendly packaging',
        'Cost-effective solution',
        'Consistent fiber quality',
        'Low-salt, pH-balanced',
        'Easy handling and mixing'
      ],
      uses: [
        'Commercial potting mixes',
        'Soil amendment projects',
        'Nursery operations',
        'Landscaping applications',
        'Erosion control'
      ],
      packaging: '50L/100L bags, 1800-2000L jumbo bags',
      specs: {
        'pH Level': '5.5 - 6.5',
        'Fiber Length': '2-15mm',
        'Moisture Content': '<20%',
        'Organic Content': '>95%'
      }
    },
    {
      icon: Sprout,
      image: cocoPeatBlocksImage,
      name: 'Coco Discs (Seed Pellets)',
      subtitle: 'Compressed coco coir discs for seed starting',
      description: 'Small compressed discs (30–70 mm) for seed starting or small plants. Simply add water to expand into a planting pod.',
      benefits: [
        'Biodegradable material',
        'Perfect for seed starting',
        'Convenient nursery use',
        'Chemical-free composition',
        'Consistent expansion'
      ],
      uses: [
        'Seed starting trays',
        'Nursery propagation',
        'Home gardening kits',
        'Educational projects',
        'Small plant production'
      ],
      packaging: 'Packs of 50-100 discs, custom sizes available',
      specs: {
        'Disc Diameter': '30-70mm',
        'Expansion Height': '40-50mm',
        'pH Level': '5.5 - 6.5',
        'Germination Rate': '>95%'
      }
    }
  ];

  const keyFeatures = [
    {
      icon: Droplets,
      title: 'Superior Water Retention',
      description: 'Holds up to 10x its weight in water'
    },
    {
      icon: Wind,
      title: 'Excellent Aeration',
      description: 'Maintains optimal air-to-water ratio'
    },
    {
      icon: Recycle,
      title: '100% Renewable',
      description: 'Made from coconut waste material'
    },
    {
      icon: CheckCircle,
      title: 'pH Balanced',
      description: 'Naturally balanced for plant growth'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-earth text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive coconut coir solutions for every agricultural need, from compressed blocks to ready-to-use grow systems
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-earth-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-green mb-4">Why Choose Coconut Coir?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-earth rounded-full">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-earth-green">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-earth-green">{product.name}</h2>
                      <p className="text-lg text-earth-brown">{product.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-earth-brown mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 mt-1 mr-2 text-earth-green flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-earth-brown mb-3">Applications:</h4>
                      <ul className="space-y-2">
                        {product.uses.map((use, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-earth-sage rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-sm">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-earth-cream p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium text-earth-brown">{key}:</span>
                          <span className="ml-2">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline">
                      Download Spec Sheet
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-large">
                    <img 
                      src={product.image} 
                      alt={`${product.name} - premium coconut coir product`}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-earth-green">{product.packaging}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-earth text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Need Custom Solutions?</h2>
            <p className="text-xl opacity-90">
              We offer customized coconut coir solutions including special blends, private labeling, 
              and custom packaging to meet your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Request Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;