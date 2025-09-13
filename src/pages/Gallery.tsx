import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-coconut-peat.jpg';
import cocoPeatBlocksImage from '@/assets/coco-peat-blocks.jpg';
import growBagsImage from '@/assets/grow-bags.jpg';
import looseCoir from '@/assets/loose-coir.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroImage,
      title: 'Coconut Plantation Harvest',
      caption: 'Organic coconut husk harvest from our partner farms in Southeast Asia',
      category: 'Raw Materials'
    },
    {
      src: cocoPeatBlocksImage,
      title: 'Premium Coco Peat Blocks',
      caption: 'High-density compressed coir bricks ready for export packaging',
      category: 'Products'
    },
    {
      src: growBagsImage,
      title: 'Hydroponic Growing Systems',
      caption: 'Professional grow bags in modern greenhouse cultivation',
      category: 'Applications'
    },
    {
      src: looseCoir,
      title: 'Industrial Processing Facility',
      caption: 'State-of-the-art processing and packaging operations',
      category: 'Facilities'
    },
    {
      src: heroImage,
      title: 'Sustainable Farming Practices',
      caption: 'Working with local farmers to ensure sustainable coconut cultivation',
      category: 'Sustainability'
    },
    {
      src: cocoPeatBlocksImage,
      title: 'Quality Control Testing',
      caption: 'Rigorous testing ensures consistent pH and quality standards',
      category: 'Quality'
    },
    {
      src: growBagsImage,
      title: 'Export Container Loading',
      caption: 'Professional packaging and container loading for global shipping',
      category: 'Logistics'
    },
    {
      src: looseCoir,
      title: 'Customer Success Stories',
      caption: 'Thriving crops grown using our premium coconut coir products',
      category: 'Success Stories'
    }
  ];

  const categories = ['All', 'Raw Materials', 'Products', 'Applications', 'Facilities', 'Sustainability', 'Quality', 'Logistics', 'Success Stories'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-earth text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Take a visual journey through our operations, from coconut harvesting to global distribution
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-earth-cream border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-primary/10'
                } transition-all duration-200`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="text-xs font-medium bg-primary px-2 py-1 rounded-full inline-block mb-2">
                        {image.category}
                      </div>
                      <h3 className="font-semibold text-sm">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                {galleryImages.find(img => img.src === selectedImage) && (
                  <>
                    <h3 className="text-xl font-bold mb-2">
                      {galleryImages.find(img => img.src === selectedImage)?.title}
                    </h3>
                    <p className="opacity-90">
                      {galleryImages.find(img => img.src === selectedImage)?.caption}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-earth text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">See Our Products in Action</h2>
            <p className="text-xl opacity-90">
              Interested in learning more about our coconut coir products and how they can benefit your operations?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Request Product Samples
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Schedule Facility Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;