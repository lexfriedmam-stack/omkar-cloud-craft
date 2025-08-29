import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold hero-text mb-4">Omkar Vuddanti</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Senior Systems Engineer specializing in cloud-native operations, SRE, and automation. 
              Building reliable, scalable solutions for the modern enterprise.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge text-xs">Cloud Architecture</span>
              <span className="skill-badge text-xs">SRE</span>
              <span className="skill-badge text-xs">Kubernetes</span>
              <span className="skill-badge text-xs">Azure Entra ID</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary text-sm text-left transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Omkar Vuddanti. Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;