import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, ShoppingBag, Layers, Sprout } from 'lucide-react';
import cocoPeatBlocksImage from '@/assets/coco-peat-blocks.jpg';
import growBagsImage from '@/assets/grow-bags.jpg';
import looseCoir from '@/assets/loose-coir.jpg';

const ProductHighlights = () => {
  const products = [
    {
      icon: Package,
      image: cocoPeatBlocksImage,
      name: 'Coco Peat Blocks',
      subtitle: 'Compressed bricks that expand in water',
      benefits: ['Economical & versatile', 'Excellent water retention', 'Superior nutrient holding'],
      uses: ['Ideal for soil conditioning', 'Perfect for seed starting', 'Great for potting mixes'],
      packaging: '5kg bricks, bulk pallets available',
      cta: 'Request Bulk Quote'
    },
    {
      icon: Layers,
      image: growBagsImage,
      name: 'Grow Bags (Coir Slabs)',
      subtitle: 'Ready-to-use coco slabs, no pre-flushing needed',
      benefits: ['Easy-to-use design', 'Steady moisture delivery', 'Professional grade quality'],
      uses: ['Hydroponic systems', 'Greenhouse cultivation', 'Commercial growing'],
      packaging: '50L and 100L slabs with grower channels',
      cta: 'Customize Order'
    },
    {
      icon: ShoppingBag,
      image: looseCoir,
      name: 'Loose Coir (Bulk Bags)',
      subtitle: 'Bagged loose coir for potting mixes and landscaping',
      benefits: ['Forklift-friendly bags', 'Cost-effective solution', 'Consistent quality'],
      uses: ['Commercial potting mixes', 'Landscaping projects', 'Nursery operations'],
      packaging: '50L/100L bags, 1800-2000L jumbo bags',
      cta: 'Get Bulk Quote'
    },
    {
      icon: Sprout,
      image: cocoPeatBlocksImage,
      name: 'Coco Discs (Seedling Pellets)',
      subtitle: 'Small compressed discs - just add water to grow seedlings',
      benefits: ['Biodegradable material', 'Convenient for nurseries', 'Perfect expansion rate'],
      uses: ['Seed starting trays', 'Nursery propagation', 'Home gardening kits'],
      packaging: 'Packs of 50-100 discs, custom sizes',
      cta: 'Order Pellets'
    }
  ];

  return (
    <section className="py-20 bg-earth-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-green mb-6">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From compressed blocks to ready-to-use grow bags, we offer comprehensive coconut coir solutions 
            for every agricultural need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`${product.name} - premium coconut coir product`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                  <product.icon className="h-6 w-6" />
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-earth-green mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-earth-brown mb-2">Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-earth-green rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-earth-brown mb-2">Use Cases:</h4>
                  <ul className="text-sm space-y-1">
                    {product.uses.map((use, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-earth-sage rounded-full mr-2"></span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-medium text-earth-brown">Packaging:</p>
                  <p className="text-sm">{product.packaging}</p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 transition-smooth">
                  {product.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;