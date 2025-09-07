import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award,
  BookOpen,
  Code,
  Database,
  Cloud,
  Brain,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Academy = () => {
  const trainingPrograms = [
    {
      id: "data-engineering-fundamentals",
      title: "Data Engineering Fundamentals",
      description: "Master the core concepts and tools of modern data engineering",
      duration: "8 weeks",
      level: "Beginner",
      students: "2,400+",
      rating: 4.9,
      price: "€899",
      image: "/placeholder.svg",
      modules: [
        "Data Pipeline Architecture",
        "ETL/ELT Processes",
        "Apache Spark & Kafka",
        "Data Quality & Governance",
        "Real-time Processing",
        "Hands-on Project"
      ],
      skills: ["Python", "SQL", "Apache Spark", "Kafka", "Airflow"],
      certification: true
    },
    {
      id: "cloud-architect-master",
      title: "Cloud Architect Mastery",
      description: "Comprehensive multi-cloud architecture training (AWS, GCP, Azure)",
      duration: "12 weeks",
      level: "Intermediate",
      students: "1,800+",
      rating: 4.8,
      price: "€1,299",
      image: "/placeholder.svg",
      modules: [
        "Cloud Architecture Patterns",
        "Multi-Cloud Strategy",
        "DevOps & CI/CD",
        "Security & Compliance",
        "Cost Optimization",
        "Capstone Project"
      ],
      skills: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform"],
      certification: true
    },
    {
      id: "machine-learning-production",
      title: "MLOps & Production ML",
      description: "Deploy and manage machine learning models at scale",
      duration: "10 weeks",
      level: "Advanced",
      students: "1,200+",
      rating: 4.9,
      price: "€1,599",
      image: "/placeholder.svg",
      modules: [
        "ML Pipeline Design",
        "Model Deployment",
        "Monitoring & Observability",
        "A/B Testing for ML",
        "MLOps Best Practices",
        "Production Case Study"
      ],
      skills: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "Python"],
      certification: true
    },
    {
      id: "saas-development-bootcamp",
      title: "SaaS Development Bootcamp",
      description: "Build scalable SaaS applications from ground up",
      duration: "14 weeks",
      level: "Intermediate",
      students: "950+",
      rating: 4.7,
      price: "€1,799",
      image: "/placeholder.svg",
      modules: [
        "SaaS Architecture Patterns",
        "Multi-tenant Design",
        "API Development",
        "Payment Integration",
        "Scaling Strategies",
        "Launch Project"
      ],
      skills: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      certification: true
    }
  ];

  const workshops = [
    {
      title: "Data Mesh Architecture Workshop",
      duration: "2 days",
      format: "In-person",
      price: "€450",
      nextDate: "March 15-16, 2024"
    },
    {
      title: "Kubernetes for Data Engineers",
      duration: "1 day",
      format: "Online",
      price: "€250",
      nextDate: "March 8, 2024"
    },
    {
      title: "Real-time Analytics with Kafka",
      duration: "3 days",
      format: "Hybrid",
      price: "€650",
      nextDate: "March 20-22, 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-academy bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-white mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                WyTaSoft Academy
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Accelerate your career with industry-leading training in data engineering, 
              cloud architecture, and modern software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Download Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6,000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-data mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-success mb-2">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-innovation mb-2">50+</div>
              <div className="text-muted-foreground">Corporate Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">
              Professional Training Programs
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Comprehensive, hands-on programs designed by industry experts to accelerate your career.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-primary"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{program.level}</Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <span className="text-sm font-medium">{program.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {program.students}
                    </div>
                    {program.certification && (
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        Certificate
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Modules:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {program.modules.slice(0, 4).map((module, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-accent-success" />
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                      {program.price}
                    </div>
                    <Button asChild>
                      <Link to={`/academy/${program.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">
              Intensive Workshops
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Short-format, intensive workshops for professionals looking to master specific technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{workshop.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Format:</span>
                      <span className="font-medium">{workshop.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next Date:</span>
                      <span className="font-medium">{workshop.nextDate}</span>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-primary mb-4">
                    {workshop.price}
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Corporate Training Solutions
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Custom training programs designed for your team's specific needs. 
              Available on-site or remotely with flexible scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90">
                <Link to="/consultation" className="flex items-center">
                  Request Corporate Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Download Corporate Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;