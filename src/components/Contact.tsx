import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Mail, Phone, Clock, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">
            Get in Touch
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Ready to start your data transformation journey? 
            Contact us to discuss your project and explore how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="card-enterprise">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MapPin className="h-5 w-5 text-accent-data mr-2" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  37 Rue Edouard Vaillant<br />
                  92700 Colombes<br />
                  France
                </p>
              </CardContent>
            </Card>

            <Card className="card-enterprise">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Mail className="h-5 w-5 text-accent-data mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contact@wytasoft.com</p>
              </CardContent>
            </Card>

            <Card className="card-enterprise">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 text-accent-data mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 9:00 - 18:00</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enterprise">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Linkedin className="h-5 w-5 text-accent-data mr-2" />
                  Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Follow on LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-enterprise">
              <CardHeader>
                <CardTitle className="text-xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input 
                        placeholder="Your first name" 
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Your last name" 
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@company.com" 
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company
                    </label>
                    <Input 
                      placeholder="Your company name" 
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground">
                      <option>Select a service...</option>
                      <option>Data Engineering</option>
                      <option>Cloud Transformation</option>
                      <option>Machine Learning & AI</option>
                      <option>SaaS Development</option>
                      <option>Training & Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Description *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project, timeline, and requirements..."
                      rows={6}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="rounded border-border" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to the processing of my personal data for the purpose of this inquiry.
                    </label>
                  </div>

                  <Button className="btn-hero w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="card-enterprise">
            <CardContent className="p-0">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Colombes, France</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;