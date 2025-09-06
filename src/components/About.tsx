import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Shield, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    "10+ years of data engineering expertise",
    "Enterprise-grade security and compliance", 
    "Multi-cloud certified specialists",
    "Proven track record across industries"
  ];

  const certifications = [
    { name: "Google Cloud Professional", icon: "🔵" },
    { name: "AWS Solutions Architect", icon: "🟠" },
    { name: "Microsoft Azure Expert", icon: "🔵" },
    { name: "Professional Liability Insured", icon: "🛡️" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-section-title mb-6">
              About WyTaSoft
            </h2>
            <p className="text-subtitle mb-8">
              Founded by Mehdi Tajmouati, WyTaSoft is a specialized consulting firm 
              delivering enterprise-grade data engineering and cloud transformation solutions. 
              We combine deep technical expertise with business acumen to drive measurable results.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent-data mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button className="btn-enterprise">Learn More About Our Story</Button>
          </div>

          {/* Founder & Company Info */}
          <div className="space-y-8">
            {/* Founder Profile */}
            <div className="card-enterprise">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-enterprise rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Mehdi Tajmouati
                  </h3>
                  <p className="text-accent-data font-medium mb-2">
                    Founder & CEO, Lead Data Engineer
                  </p>
                  <p className="text-muted-foreground text-sm">
                    10+ years of experience in data engineering, cloud architecture, 
                    and digital transformation across retail, finance, and public sectors.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="card-enterprise">
              <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <Shield className="h-5 w-5 text-accent-data mr-2" />
                Company Information
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-foreground">Legal Form:</span>
                  <span className="text-muted-foreground ml-2">SARL (Société à responsabilité limitée)</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Address:</span>
                  <span className="text-muted-foreground ml-2">37 Rue Edouard Vaillant, 92700 Colombes, France</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Insurance:</span>
                  <span className="text-muted-foreground ml-2">Professional Liability (Markel Insurance via SPVIE)</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Compliance:</span>
                  <span className="text-muted-foreground ml-2">Urssaf up to date</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card-enterprise">
              <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <Award className="h-5 w-5 text-accent-data mr-2" />
                Certifications & Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <span className="text-lg">{cert.icon}</span>
                    <span className="text-muted-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;