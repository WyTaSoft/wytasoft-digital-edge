import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Cloud, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent-data/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-hero mb-6 animate-fade-in-up">
            Transform Your Business with 
            <span className="block mt-2">Data Engineering Excellence</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-subtitle mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            WyTaSoft delivers enterprise-grade data engineering, cloud transformation, 
            and AI solutions to accelerate your digital transformation journey.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up-delay-2">
            <Button asChild className="btn-hero group">
              <Link to="/start-project">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button asChild className="btn-secondary-enterprise">
              <Link to="/consultation">Schedule Consultation</Link>
            </Button>
          </div>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Database className="h-12 w-12 text-accent-data mb-4" />
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Cloud className="h-12 w-12 text-accent-data mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Projects Delivered</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Brain className="h-12 w-12 text-accent-data mb-4" />
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-white/80 text-sm">Cloud Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;