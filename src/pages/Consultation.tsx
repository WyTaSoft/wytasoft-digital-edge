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
  Calendar, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  Users, 
  Zap,
  Award,
  Shield,
  TrendingUp
} from 'lucide-react';

const Consultation = () => {
  const consultationTypes = [
    {
      title: "Strategy Session",
      duration: "60 minutes",
      description: "Deep dive into your business goals and technology roadmap",
      features: ["Current state assessment", "Technology roadmap", "ROI analysis", "Next steps planning"]
    },
    {
      title: "Technical Review",
      duration: "90 minutes", 
      description: "Comprehensive analysis of your current technical infrastructure",
      features: ["Architecture review", "Performance analysis", "Security assessment", "Optimization recommendations"]
    },
    {
      title: "Project Scoping",
      duration: "45 minutes",
      description: "Define project requirements and create detailed implementation plan",
      features: ["Requirements gathering", "Timeline estimation", "Resource planning", "Risk assessment"]
    }
  ];

  const benefits = [
    { icon: Award, title: "Expert Guidance", description: "10+ years of enterprise experience" },
    { icon: Shield, title: "Proven Methodology", description: "Battle-tested frameworks and best practices" },
    { icon: TrendingUp, title: "Measurable Results", description: "Clear KPIs and success metrics" },
    { icon: Users, title: "Dedicated Support", description: "Ongoing partnership beyond consultation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h1 className="text-hero mb-6">
              Schedule Your Free Consultation
            </h1>
            <p className="text-subtitle mb-8">
              Get expert advice tailored to your business needs. Our consultation is completely free 
              with no obligations - just valuable insights to accelerate your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <CheckCircle className="h-4 w-4 mr-2" />
                100% Free
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="h-4 w-4 mr-2" />
                No Time Wasted
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MessageSquare className="h-4 w-4 mr-2" />
                Actionable Insights
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Choose Your Consultation Type</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Select the consultation format that best fits your current needs and timeline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {consultationTypes.map((type, index) => (
              <Card key={index} className="card-enterprise group cursor-pointer hover:border-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-enterprise rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{type.duration}</CardDescription>
                  <p className="text-muted-foreground mt-2">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section-title mb-4">Book Your Consultation</h2>
              <p className="text-subtitle">
                Fill out the form below and we'll contact you within 4 hours to schedule your consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle>Consultation Request</CardTitle>
                    <CardDescription>
                      Tell us about your goals so we can prepare for a productive session.
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
                          Phone Number
                        </label>
                        <Input placeholder="+33 1 23 45 67 89" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Company *
                        </label>
                        <Input placeholder="Your Company Name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Your Role
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ceo">CEO/Founder</SelectItem>
                            <SelectItem value="cto">CTO/Tech Lead</SelectItem>
                            <SelectItem value="manager">Project Manager</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="analyst">Business Analyst</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Consultation Type *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strategy">Strategy Session (60 min)</SelectItem>
                          <SelectItem value="technical">Technical Review (90 min)</SelectItem>
                          <SelectItem value="scoping">Project Scoping (45 min)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Primary Challenge/Goal *
                      </label>
                      <Textarea 
                        placeholder="What's the main challenge you're facing or goal you want to achieve?"
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Preferred Time
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When would you prefer to meet?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9AM - 12PM CET)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (2PM - 5PM CET)</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="btn-hero w-full">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy. We'll only use your information to schedule and conduct the consultation.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle>What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-enterprise rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Discovery Call</h4>
                        <p className="text-sm text-muted-foreground">We'll schedule a convenient time for your consultation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-enterprise rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Deep Dive Session</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive review of your needs and challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-enterprise rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Actionable Plan</h4>
                        <p className="text-sm text-muted-foreground">Receive a customized roadmap with next steps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="card-enterprise">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-enterprise rounded-lg flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;