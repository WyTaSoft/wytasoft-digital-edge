import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Cloud, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  DollarSign,
  Server,
  Globe,
  Lock,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudTransformation = () => {
  const services = [
    {
      icon: Globe,
      title: "Cloud Migration Strategy",
      description: "Comprehensive assessment and strategic planning for seamless migration to AWS, Azure, or Google Cloud Platform."
    },
    {
      icon: Server,
      title: "Multi-Cloud Architecture",
      description: "Design resilient, scalable architectures that leverage the best features of multiple cloud providers."
    },
    {
      icon: Zap,
      title: "DevOps & CI/CD",
      description: "Implement automated deployment pipelines, infrastructure as code, and continuous integration practices."
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Optimize cloud spending through right-sizing, reserved instances, and intelligent resource management."
    }
  ];

  const cloudProviders = [
    { name: "AWS", services: ["EC2", "S3", "Lambda", "RDS", "Redshift", "EMR"] },
    { name: "Azure", services: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "Synapse", "HDInsight"] },
    { name: "GCP", services: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "BigQuery", "Dataproc"] }
  ];

  const benefits = [
    { icon: DollarSign, title: "Cost Reduction", description: "Average 30-50% reduction in infrastructure costs" },
    { icon: Zap, title: "Improved Performance", description: "Up to 10x faster deployment and scaling" },
    { icon: Shield, title: "Enhanced Security", description: "Enterprise-grade security and compliance" },
    { icon: TrendingUp, title: "Business Agility", description: "Faster time-to-market for new features" }
  ];

  const migrationProcess = [
    { step: "1", title: "Assessment", description: "Comprehensive audit of current infrastructure and applications" },
    { step: "2", title: "Strategy", description: "Define migration roadmap with priorities and timelines" },
    { step: "3", title: "Design", description: "Architecture design optimized for cloud-native performance" },
    { step: "4", title: "Migration", description: "Phased migration with minimal business disruption" },
    { step: "5", title: "Optimization", description: "Continuous monitoring and optimization post-migration" },
    { step: "6", title: "Support", description: "Ongoing support and maintenance for your cloud infrastructure" }
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
                <Cloud className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-hero">Cloud Transformation</h1>
                <p className="text-xl opacity-90">Accelerate Innovation with Enterprise Cloud Solutions</p>
              </div>
            </div>
            <p className="text-subtitle mb-8 max-w-3xl">
              Transform your business with scalable, secure, and cost-effective cloud solutions. 
              Our expert team guides you through every step of your cloud journey, from strategy 
              to implementation and optimization across AWS, Azure, and Google Cloud Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero">
                <Link to="/start-project">
                  Start Cloud Migration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary-enterprise">
                <Link to="/consultation">Get Cloud Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Complete Cloud Transformation Services</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              End-to-end cloud services that accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-enterprise group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Multi-Cloud Expertise</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Certified experts across all major cloud platforms to help you choose the best fit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="card-enterprise">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-primary mb-4">{provider.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {provider.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Our Proven Migration Process</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              A structured approach that minimizes risk and ensures successful cloud adoption.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {migrationProcess.map((phase, index) => (
              <Card key={index} className="card-enterprise">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Measurable Business Benefits</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Our cloud transformations deliver tangible ROI and competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-enterprise text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-enterprise rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Certified Cloud Experts</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Our team holds professional certifications across all major cloud platforms.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-6 py-3 text-base">
              <Shield className="mr-2 h-5 w-5" />
              AWS Solutions Architect
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base">
              <Shield className="mr-2 h-5 w-5" />
              Azure Solutions Architect
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base">
              <Shield className="mr-2 h-5 w-5" />
              Google Cloud Architect
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base">
              <Shield className="mr-2 h-5 w-5" />
              DevOps Engineer
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base">
              <Shield className="mr-2 h-5 w-5" />
              Security Specialist
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-secondary p-12 rounded-2xl border border-border">
            <h2 className="text-section-title mb-4">Ready for the Cloud?</h2>
            <p className="text-subtitle mb-8 max-w-2xl mx-auto">
              Start your cloud transformation journey today. Get a free assessment and discover 
              how cloud technology can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/start-project">
                  Start Cloud Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Free Assessment
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

export default CloudTransformation;