import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Brain, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3,
  Target,
  Cpu,
  LineChart,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MachineLearning = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Build sophisticated models that forecast trends, customer behavior, and business outcomes with high accuracy."
    },
    {
      icon: Cpu,
      title: "MLOps & Model Deployment",
      description: "Implement robust MLOps pipelines for automated model training, validation, and deployment at scale."
    },
    {
      icon: Target,
      title: "AI Strategy & Consulting",
      description: "Strategic guidance on AI adoption, use case identification, and organizational AI transformation."
    },
    {
      icon: LineChart,
      title: "Automated Decision Systems",
      description: "Intelligent systems that automate complex decision-making processes with continuous learning capabilities."
    }
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Kubeflow", "Apache Spark",
    "Jupyter", "Docker", "Kubernetes", "AWS SageMaker", "Azure ML", "Google AI Platform"
  ];

  const useCases = [
    { title: "Customer Churn Prediction", description: "Identify at-risk customers before they leave" },
    { title: "Demand Forecasting", description: "Optimize inventory and supply chain planning" },
    { title: "Fraud Detection", description: "Real-time detection of suspicious transactions" },
    { title: "Recommendation Systems", description: "Personalized product and content recommendations" },
    { title: "Process Optimization", description: "AI-driven efficiency improvements" },
    { title: "Image Recognition", description: "Computer vision for quality control and automation" }
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
                <Brain className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-hero">Machine Learning & AI</h1>
                <p className="text-xl opacity-90">Intelligent Solutions for Competitive Advantage</p>
              </div>
            </div>
            <p className="text-subtitle mb-8 max-w-3xl">
              Harness the power of artificial intelligence and machine learning to unlock insights, 
              automate processes, and drive innovation. Our AI solutions deliver measurable business 
              value through advanced analytics and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero">
                <Link to="/start-project">
                  Start AI Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary-enterprise">
                <Link to="/consultation">AI Strategy Session</Link>
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
              <span className="bg-gradient-to-r from-primary to-accent-innovation bg-clip-text text-transparent">
                AI &amp; Machine Learning Services
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              From predictive analytics to intelligent automation, we deliver AI solutions that drive results.
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

      {/* Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-accent-data to-accent-innovation bg-clip-text text-transparent">
                AI Use Cases We Excel At
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Proven AI solutions across industries and business functions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="card-enterprise">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-semibold">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
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
                AI Technologies &amp; Frameworks
              </span>
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              We leverage cutting-edge AI tools and platforms for maximum effectiveness.
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

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-secondary p-12 rounded-2xl border border-border">
            <h2 className="text-section-title mb-4">Ready to Harness AI?</h2>
            <p className="text-subtitle mb-8 max-w-2xl mx-auto">
              Transform your business with intelligent solutions. Let's explore how AI can 
              drive innovation and competitive advantage for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <Link to="/start-project">
                  Start AI Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  AI Strategy Consultation
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

export default MachineLearning;