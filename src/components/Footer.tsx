import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Data Engineering',
      'Cloud Transformation', 
      'Machine Learning',
      'SaaS Development',
      'Training & Consulting'
    ],
    company: [
      'About Us',
      'Careers',
      'WyTaSoft Academy',
      'Blog & Insights',
      'Contact'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Professional Liability',
      'GDPR Compliance'
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-enterprise rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">WyTaSoft</span>
            </div>
            <p className="text-background/80 mb-4 text-sm leading-relaxed">
              Specialized consulting in data engineering, cloud transformation, 
              and digital innovation for enterprise success.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-background/80">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>37 Rue Edouard Vaillant, 92700 Colombes, France</span>
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>contact@wytasoft.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/80 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#about" className="text-background/80 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal & Compliance</h4>
            <ul className="space-y-2 mb-4">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-background/20">
              <div className="flex items-center space-x-3">
                <a 
                  href="#" 
                  className="text-background/80 hover:text-background transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:contact@wytasoft.com" 
                  className="text-background/80 hover:text-background transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © {currentYear} WyTaSoft SARL. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-background/80">
              <span>🛡️ Professional Liability Insured</span>
              <span>✓ URSSAF Compliant</span>
              <span>🇫🇷 Made in France</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;