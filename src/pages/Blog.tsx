import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Leaf, TrendingUp, Globe } from 'lucide-react';

const Blog = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'Why Coconut Peat is the Future of Soil Conditioning',
      excerpt: 'Coconut coir (peat) is a renewable, peat-free substrate that dramatically improves soil structure. It can absorb up to 10× its weight in water, ensuring consistent moisture for plant roots. This makes it ideal for modern agriculture, boosting growth without the negatives of peat moss.',
      category: 'Sustainability',
      readTime: '5 min read',
      date: '2024-01-15',
      author: 'Dr. Sarah Green',
      image: '/api/placeholder/400/250',
      icon: Leaf,
      featured: true
    },
    {
      id: 2,
      title: 'How Sustainable Growing Media Impacts Global Agriculture',
      excerpt: 'Switching to organic substrates like coconut coir reduces reliance on chemical inputs and protects the environment. Our products are certified organic and provide optimal growing conditions that increase yields. By supporting eco-friendly media, farmers can improve food security and sustainability worldwide.',
      category: 'Agriculture',
      readTime: '7 min read',
      date: '2024-01-10',
      author: 'Michael Torres',
      image: '/api/placeholder/400/250',
      icon: TrendingUp,
      featured: true
    },
    {
      id: 3,
      title: 'From Waste to Harvest: The Journey of Coconut Coir',
      excerpt: 'Discover the fascinating circular economy behind coconut coir production. Learn how coconut husks, once considered agricultural waste, are transformed into premium growing media that supports communities and sustainable agriculture across Southeast Asia.',
      category: 'Innovation',
      readTime: '6 min read',
      date: '2024-01-05',
      author: 'Elena Rodriguez',
      image: '/api/placeholder/400/250',
      icon: Globe,
      featured: true
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: 'Hydroponic Success with Coconut Coir: A Complete Guide',
      excerpt: 'Master the art of hydroponic growing with coconut coir substrates...',
      category: 'Hydroponics',
      readTime: '8 min read',
      date: '2023-12-28',
      author: 'James Wilson'
    },
    {
      id: 5,
      title: 'pH Management in Coconut Coir Growing Systems',
      excerpt: 'Understanding and maintaining optimal pH levels for maximum plant health...',
      category: 'Technical',
      readTime: '4 min read',
      date: '2023-12-20',
      author: 'Dr. Maria Santos'
    },
    {
      id: 6,
      title: 'Export Logistics: Getting Quality Coir to Global Markets',
      excerpt: 'Behind the scenes of international coconut coir distribution...',
      category: 'Logistics',
      readTime: '5 min read',
      date: '2023-12-15',
      author: 'David Chen'
    },
    {
      id: 7,
      title: 'Organic Certification: What It Means for Growers',
      excerpt: 'The importance of organic standards in growing media selection...',
      category: 'Quality',
      readTime: '6 min read',
      date: '2023-12-10',
      author: 'Lisa Anderson'
    },
    {
      id: 8,
      title: 'Climate-Smart Agriculture with Coconut Coir',
      excerpt: 'How coconut-based growing media supports climate resilience...',
      category: 'Climate',
      readTime: '7 min read',
      date: '2023-12-05',
      author: 'Ahmed Hassan'
    }
  ];

  const categories = ['All', 'Sustainability', 'Agriculture', 'Innovation', 'Hydroponics', 'Technical', 'Logistics', 'Quality', 'Climate'];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-earth text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Expert insights, industry trends, and practical guidance for sustainable agriculture and coconut coir applications
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-green mb-6">Featured Articles</h2>
            <p className="text-xl text-muted-foreground">
              In-depth analysis and expert perspectives on sustainable growing media
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={article.id} className={`group hover:shadow-large transition-all duration-300 hover:-translate-y-2 overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className={`relative ${index === 0 ? 'h-80' : 'h-48'} overflow-hidden`}>
                  <div className="w-full h-full bg-gradient-earth flex items-center justify-center">
                    <article.icon className="h-16 w-16 text-white/80" />
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <CardContent className={`p-6 ${index === 0 ? 'space-y-6' : 'space-y-4'}`}>
                  <h3 className={`font-bold text-earth-green group-hover:text-primary transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                    {article.title}
                  </h3>
                  
                  <p className={`text-muted-foreground leading-relaxed ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-earth-brown">
                      By {article.author}
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-earth-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-green mb-6">Recent Articles</h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest in sustainable agriculture and coconut coir innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden bg-gradient-warm flex items-center justify-center">
                  <div className="text-white/80 text-lg font-medium">{article.category}</div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-earth-green">
                    {article.readTime}
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-earth-green group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <span className="font-medium text-earth-brown">
                      {article.author}
                    </span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-earth text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Stay Informed</h2>
            <p className="text-xl opacity-90">
              Subscribe to our newsletter for the latest insights on sustainable agriculture, 
              product updates, and industry trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-earth-green bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button size="lg" variant="secondary" className="px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;