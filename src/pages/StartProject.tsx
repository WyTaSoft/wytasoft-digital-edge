import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  Database, 
  Cloud, 
  Brain, 
  Code, 
  GraduationCap, 
  Users,
  Clock,
  Target,
  Zap
} from 'lucide-react';

const StartProject = () => {
  const projectTypes = [
    { icon: Database, title: "Data Engineering", description: "Build robust data pipelines and analytics infrastructure" },
    { icon: Cloud, title: "Cloud Migration", description: "Migrate and optimize your cloud infrastructure" },
    { icon: Brain, title: "AI/ML Solutions", description: "Develop intelligent systems and predictive analytics" },
    { icon: Code, title: "SaaS Development", description: "Create scalable software-as-a-service platforms" },
    { icon: GraduationCap, title: "Team Training", description: "Upskill your team with modern technologies" },
    { icon: Users, title: "Strategic Consulting", description: "Get expert guidance on digital transformation" }
  ];

  const processSteps = [
    { icon: Target, title: "Discovery", description: "We analyze your requirements and define project scope" },
    { icon: Zap, title: "Strategy", description: "Create a tailored roadmap with clear milestones" },
    { icon: CheckCircle, title: "Execution", description: "Deliver high-quality solutions with regular updates" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-hero mb-6">
              Start Your Transformation Journey
            </h1>
            <p className="text-subtitle mb-8">
              Tell us about your project and let's build something extraordinary together. 
              Our experts will guide you through every step of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">What Type of Project Are You Planning?</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Select the area that best matches your needs. We'll customize our approach accordingly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projectTypes.map((type, index) => (
              <Card key={index} className="card-enterprise group cursor-pointer hover:border-primary transition-colors duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section-title mb-4">Tell Us About Your Project</h2>
              <p className="text-subtitle">
                The more details you provide, the better we can tailor our approach to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          First Name *
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Last Name *
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email *
                        </label>
                        <Input type="email" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Company
                        </label>
                        <Input placeholder="Your Company" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Project Type *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="data-engineering">Data Engineering</SelectItem>
                          <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
                          <SelectItem value="ai-ml">AI/ML Solutions</SelectItem>
                          <SelectItem value="saas-development">SaaS Development</SelectItem>
                          <SelectItem value="training">Team Training</SelectItem>
                          <SelectItem value="consulting">Strategic Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Project Budget
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under €50,000</SelectItem>
                          <SelectItem value="50k-100k">€50,000 - €100,000</SelectItem>
                          <SelectItem value="100k-250k">€100,000 - €250,000</SelectItem>
                          <SelectItem value="250k-500k">€250,000 - €500,000</SelectItem>
                          <SelectItem value="over-500k">Over €500,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Project Description *
                      </label>
                      <Textarea 
                        placeholder="Describe your project goals, challenges, and requirements..."
                        rows={6}
                      />
                    </div>

                    <Button className="btn-hero w-full">
                      Submit Project Request
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Process Steps */}
              <div className="space-y-6">
                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Our Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-enterprise rounded-full flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle>Why Choose WyTaSoft?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">10+ years of experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Enterprise-grade solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">24/7 support & maintenance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Certified cloud experts</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProject;