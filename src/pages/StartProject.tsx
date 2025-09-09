import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    description: ''
  });

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.projectType || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Create email subject and body
    const subject = `New Project Request from ${formData.firstName} ${formData.lastName}`;
    const body = `
Project Request Details:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Project Type: ${formData.projectType}
Budget: ${formData.budget || 'Not specified'}

Project Description:
${formData.description}

---
This email was sent from the WyTaSoft website project request form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:contact@wytasoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened",
      description: "Your default email client should now open with the project details pre-filled.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              Start Your Transformation Journey
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary to-accent-data bg-clip-text text-transparent">
                What Type of Project Are You Planning?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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
                  <CardTitle className="text-lg text-primary font-semibold">{type.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{type.description}</CardDescription>
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
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-accent-data to-accent-innovation bg-clip-text text-transparent">
                  Tell Us About Your Project
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The more details you provide, the better we can tailor our approach to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary font-semibold">Project Details</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-accent-data mb-2 block">
                          First Name *
                        </label>
                        <Input 
                          placeholder="John" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-accent-data mb-2 block">
                          Last Name *
                        </label>
                        <Input 
                          placeholder="Doe" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-accent-data mb-2 block">
                          Email *
                        </label>
                        <Input 
                          type="email" 
                          placeholder="john@company.com" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-accent-data mb-2 block">
                          Company
                        </label>
                        <Input 
                          placeholder="Your Company" 
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-accent-data mb-2 block">
                        Project Type *
                      </label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
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
                      <label className="text-sm font-medium text-accent-data mb-2 block">
                        Project Budget
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
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
                      <label className="text-sm font-medium text-accent-data mb-2 block">
                        Project Description *
                      </label>
                      <Textarea 
                        placeholder="Describe your project goals, challenges, and requirements..."
                        rows={6}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                      />
                    </div>

                    <Button className="btn-hero w-full" onClick={handleSubmit}>
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
                    <CardTitle className="flex items-center text-primary font-semibold">
                      <Clock className="h-5 w-5 mr-2 text-accent-data" />
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
                          <h4 className="font-semibold text-primary">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle className="text-primary font-semibold">Why Choose WyTaSoft?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent-success" />
                      <span className="text-sm text-foreground">10+ years of experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent-success" />
                      <span className="text-sm text-foreground">Enterprise-grade solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent-success" />
                      <span className="text-sm text-foreground">24/7 support & maintenance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent-success" />
                      <span className="text-sm text-foreground">Certified cloud experts</span>
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