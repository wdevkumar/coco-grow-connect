import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['123 Coconut Grove Avenue', 'Export Industrial Zone', 'Jakarta, Indonesia 12345'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+62 21 1234 5678 (Main)', '+62 21 1234 5679 (Sales)', '+62 21 1234 5680 (Support)'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@cocoexport.com', 'sales@cocoexport.com', 'support@cocoexport.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed (Emergency only)'],
      action: 'Schedule Meeting'
    }
  ];

  const officeHours = [
    { region: 'Asia Pacific', time: '8:00 AM - 6:00 PM (GMT+7)', available: true },
    { region: 'Europe', time: '9:00 AM - 5:00 PM (GMT+1)', available: true },
    { region: 'Americas', time: '24/7 Support Available', available: true }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-earth text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to partner with us? Get in touch with our expert team for personalized solutions and support
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-earth-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-earth rounded-full group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-earth-green">{info.title}</h3>
                  
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-earth-green mb-4">Send Us a Message</h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <Card className="shadow-large">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company Ltd." className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Product inquiry, Partnership opportunity, etc." className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        rows={5}
                        placeholder="Tell us about your requirements, volume needs, timeline, or any specific questions..."
                        className="mt-1 resize-none"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="consent" className="mt-1" />
                      <Label htmlFor="consent" className="text-sm">
                        I agree to receive communications from CocoExport and understand that I can unsubscribe at any time.
                      </Label>
                    </div>

                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-large">
                <CardContent className="p-0">
                  <div className="h-80 bg-gradient-earth rounded-t-lg flex items-center justify-center text-white">
                    <div className="text-center space-y-4">
                      <MapPin className="h-16 w-16 mx-auto opacity-80" />
                      <div>
                        <h3 className="text-xl font-semibold">Our Location</h3>
                        <p className="opacity-90">Jakarta, Indonesia</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-earth-green mb-4">Visit Our Facility</h3>
                    <p className="text-muted-foreground mb-4">
                      We welcome visitors to tour our processing facility and see our quality control processes firsthand.
                    </p>
                    <Button variant="outline" className="w-full">
                      Schedule Facility Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Regional Support Hours */}
              <Card className="shadow-large">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-earth-green mb-4">Global Support Hours</h3>
                  <div className="space-y-4">
                    {officeHours.map((office, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-earth-cream rounded-lg">
                        <div>
                          <div className="font-medium text-earth-green">{office.region}</div>
                          <div className="text-sm text-muted-foreground">{office.time}</div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${office.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="shadow-large border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-earth-green">WhatsApp Support</h3>
                      <p className="text-muted-foreground">Get instant responses to urgent inquiries</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-earth-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-green mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-earth-green mb-3">What are your minimum order quantities?</h3>
                <p className="text-muted-foreground">
                  Minimum orders vary by product. Coco peat blocks: 20 tons, Grow bags: 1000 units, 
                  Loose coir: 10 tons. Contact us for custom requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-earth-green mb-3">How long does shipping take?</h3>
                <p className="text-muted-foreground">
                  Sea freight: 15-30 days depending on destination. Air freight: 5-7 days. 
                  We provide real-time tracking for all shipments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-earth-green mb-3">Do you provide product samples?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer free samples up to 2kg for quality evaluation. 
                  Shipping costs apply for international samples.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-earth-green mb-3">What certifications do you have?</h3>
                <p className="text-muted-foreground">
                  We're ISO 9001:2015 certified with organic certifications (USDA/EU), 
                  HACCP compliance, and OMRI listing for organic use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;