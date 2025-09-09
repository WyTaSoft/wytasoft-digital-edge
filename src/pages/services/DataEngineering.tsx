import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Database, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3,
  GitBranch,
  Server,
  Cloud,
  Users,
  Clock,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataEngineering = () => {
  const services = [
    {
      icon: GitBranch,
      title: "Data Pipeline Architecture",
      description: "Design and build scalable, fault-tolerant data pipelines using modern frameworks like Apache Airflow, Kafka, and Spark."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Implement streaming data solutions for real-time analytics and decision-making using Apache Kafka, Storm, and cloud-native services."
    },
    {
      icon: Shield,
      title: "Data Quality & Governance",
      description: "Establish comprehensive data quality frameworks, governance policies, and compliance measures to ensure data integrity."
    },
    {
      icon: BarChart3,
      title: "Analytics Infrastructure",
      description: "Build robust analytics platforms with data warehouses, lakes, and marts optimized for business intelligence and reporting."
    }
  ];

  const technologies = [
    "Apache Spark", "Apache Kafka", "Apache Airflow", "Databricks", "Snowflake", "BigQuery",
    "AWS Redshift", "Azure Synapse", "dbt", "Apache Beam", "Elasticsearch", "PostgreSQL"
  ];

  const benefits = [
    { icon: TrendingUp, title: "Improved Decision Making", description: "Access to real-time, accurate data for better business decisions" },
    { icon: Zap, title: "Reduced Processing Time", description: "Up to 90% faster data processing with optimized pipelines" },
    { icon: Shield, title: "Enhanced Data Security", description: "Enterprise-grade security and compliance frameworks" },
    { icon: Server, title: "Scalable Architecture", description: "Infrastructure that grows with your business needs" }
  ];

  const caseStudies = [
    {
      title: "E-commerce Analytics Platform",
      challenge: "Real-time customer behavior tracking and personalization",
      solution: "Built streaming data pipeline processing 10M+ events/day",
      results: "40% increase in conversion rates, 60% faster insights"
    },
    {
      title: "Financial Risk Management",
      challenge: "Complex regulatory reporting with multiple data sources",
      solution: "Unified data platform with automated compliance checks",
      results: "75% reduction in reporting time, 100% compliance achievement"
    }
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
                <Database className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-hero">Data Engineering</h1>
                <p className="text-xl opacity-90">Transform Raw Data into Business Intelligence</p>
              </div>
            </div>
            <p className="text-subtitle mb-8 max-w-3xl">
              Build robust, scalable data infrastructure that turns your data into a competitive advantage. 
              Our enterprise-grade data engineering solutions ensure reliable, real-time access to clean, 
              actionable data across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero">
                <Link to="/start-project">
                  Start Your Data Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary-enterprise">
                <Link to="/consultation">Schedule Consultation</Link>
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
                Comprehensive Data Engineering Services
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              From data ingestion to analytics, we cover every aspect of your data journey.
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

      {/* Technologies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-accent-data to-accent-innovation bg-clip-text text-transparent">
                Technologies We Master
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              We work with the latest and most reliable data engineering technologies.
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

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-accent-innovation to-primary bg-clip-text text-transparent">
                Why Choose Our Data Engineering?
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Proven results that drive business value and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-enterprise text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-enterprise rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary font-semibold">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-accent-success to-accent-data bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Real results from our data engineering implementations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-enterprise">
                <CardHeader>
                  <CardTitle className="text-xl text-primary font-semibold">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent-data mb-2">Challenge</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-data mb-2">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-data mb-2">Results</h4>
                    <p className="text-primary font-medium">{study.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-secondary p-12 rounded-2xl border border-border">
            <h2 className="text-section-title mb-4">Ready to Transform Your Data?</h2>
            <p className="text-subtitle mb-8 max-w-2xl mx-auto">
              Let's discuss how our data engineering expertise can unlock the value in your data 
              and accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/start-project">
                  Start Data Engineering Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
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

export default DataEngineering;