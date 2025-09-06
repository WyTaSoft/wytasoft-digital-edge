import { Button } from '@/components/ui/button';
import { 
  Database, 
  Cloud, 
  Brain, 
  Code, 
  GraduationCap, 
  Users,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Modern data pipelines, ETL/ELT processes, and real-time analytics infrastructure to unlock your data's potential.",
      features: ["Data Pipeline Architecture", "Real-time Processing", "Data Quality & Governance", "Analytics Infrastructure"]
    },
    {
      icon: Cloud,
      title: "Cloud Transformation", 
      description: "End-to-end cloud migration and optimization across GCP, Azure, and AWS with enterprise security and compliance.",
      features: ["Cloud Migration Strategy", "Multi-Cloud Architecture", "DevOps & CI/CD", "Cost Optimization"]
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Custom ML models, AI-powered analytics, and intelligent automation to drive business insights and efficiency.",
      features: ["Predictive Analytics", "MLOps & Model Deployment", "AI Strategy & Consulting", "Automated Decision Systems"]
    },
    {
      icon: Code,
      title: "SaaS Development",
      description: "Scalable, secure SaaS platforms built with modern architectures and enterprise-grade reliability.",
      features: ["Full-Stack Development", "Microservices Architecture", "API Design & Integration", "Performance Optimization"]
    },
    {
      icon: GraduationCap,
      title: "Training & Upskilling",
      description: "Comprehensive training programs to empower your teams with cutting-edge data and cloud technologies.",
      features: ["Technical Workshops", "Certification Programs", "Hands-on Labs", "Custom Curriculum"]
    },
    {
      icon: Users,
      title: "Strategic Consulting",
      description: "Expert guidance on digital transformation strategy, technology roadmaps, and organizational change management.",
      features: ["Digital Strategy", "Technology Roadmaps", "Change Management", "Best Practices Implementation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">
            Comprehensive Data & Cloud Solutions
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            From data engineering to cloud transformation, we deliver end-to-end solutions 
            that drive innovation and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-enterprise group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-enterprise rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent-data rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                className="group/btn text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-secondary p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can accelerate your data and cloud transformation journey.
            </p>
            <Button className="btn-hero">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;