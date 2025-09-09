import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Code, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  Layers,
  Globe,
  Settings,
  Smartphone,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SaaSDevelopment = () => {
  const services = [
    {
      icon: Layers,
      title: "Full-Stack Development",
      description: "Complete web applications built with modern frameworks like React, Node.js, and cloud-native architectures."
    },
    {
      icon: Settings,
      title: "Microservices Architecture",
      description: "Scalable, maintainable systems using microservices patterns with containerization and orchestration."
    },
    {
      icon: Globe,
      title: "API Design & Integration",
      description: "RESTful and GraphQL APIs with comprehensive documentation and third-party integrations."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance applications optimized for speed, scalability, and exceptional user experience."
    }
  ];

  const technologies = [
    "React", "Node.js", "TypeScript", "Next.js", "Express", "PostgreSQL",
    "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Stripe API"
  ];

  const features = [
    { title: "Multi-tenant Architecture", description: "Secure isolation with shared infrastructure efficiency" },
    { title: "Subscription Management", description: "Flexible billing, trial periods, and plan management" },
    { title: "User Authentication", description: "Secure SSO, MFA, and role-based access control" },
    { title: "Analytics Dashboard", description: "Real-time insights and business intelligence" },
    { title: "API First Design", description: "Extensible platform with robust API capabilities" },
    { title: "Mobile Responsive", description: "Seamless experience across all devices" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <Code className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-hero">SaaS Development</h1>
                <p className="text-xl opacity-90">Scalable Software Solutions That Scale With You</p>
              </div>
            </div>
            <p className="text-subtitle mb-8 max-w-3xl">
              Build powerful, scalable SaaS platforms with modern architectures and enterprise-grade security. 
              From MVP to enterprise solution, we deliver software that grows with your business and delights your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero">
                <Link to="/start-project">
                  Start SaaS Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary-enterprise">
                <Link to="/consultation">Product Strategy Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary to-accent-data bg-clip-text text-transparent">
                Complete SaaS Development Services
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              From concept to launch and beyond, we build SaaS solutions that succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-enterprise group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-accent-data to-accent-innovation bg-clip-text text-transparent">
                Enterprise SaaS Features
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Built-in capabilities that modern SaaS platforms require for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-enterprise">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center text-primary font-semibold">
                    <CheckCircle className="h-5 w-5 text-accent-success mr-2" />
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-accent-innovation to-primary bg-clip-text text-transparent">
                Modern Technology Stack
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              We use proven technologies that ensure scalability, security, and maintainability.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-accent-success to-accent-data bg-clip-text text-transparent">
                Our Development Process
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Agile methodology ensuring rapid delivery and continuous feedback.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-enterprise text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <CardTitle className="text-lg text-primary font-semibold">Discovery</CardTitle>
                <CardDescription>Requirements gathering and technical planning</CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-enterprise text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <CardTitle className="text-lg text-primary font-semibold">Design</CardTitle>
                <CardDescription>UX/UI design and system architecture</CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-enterprise text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <CardTitle className="text-lg text-primary font-semibold">Development</CardTitle>
                <CardDescription>Agile development with regular demos</CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-enterprise text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <CardTitle className="text-lg text-primary font-semibold">Launch</CardTitle>
                <CardDescription>Deployment, monitoring, and ongoing support</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-secondary p-12 rounded-2xl border border-border">
            <h2 className="text-section-title mb-4">Ready to Build Your SaaS?</h2>
            <p className="text-subtitle mb-8 max-w-2xl mx-auto">
              Turn your vision into a successful SaaS business. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/start-project">
                  Start SaaS Development
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Product Strategy Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaaSDevelopment;