import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github, Eye } from 'lucide-react';
import omkarHeadshot from '@/assets/omkar-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    'Cloud Architecture', 'Kubernetes', 'Azure Entra ID', 'Terraform', 
    'SRE', 'Identity Management', 'AWS', 'Automation'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 particle-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-light/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-bright/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="hero-text">Omkar</span>
                <br />
                <span className="text-foreground animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Vuddanti</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Senior Systems Engineer
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                4+ years of expertise in cloud-native operations, SRE, and identity platforms. 
                Specializing in automation, reliability engineering, and scalable cloud solutions 
                across AWS, Azure, and OCI ecosystems.
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                {skills.map((skill, index) => (
                  <span 
                    key={skill} 
                    className="skill-badge animate-bounce-in"
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  className="btn-primary hero-gradient text-white font-semibold px-8 py-3 glow-on-hover"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 scale-on-hover"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                <a
                  href="https://linkedin.com/in/omkar-vuddanti-14123b130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 scale-on-hover glow-on-hover"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
                <a
                  href="mailto:OmkarVuddanti@gmail.com"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 scale-on-hover glow-on-hover"
                >
                  <Mail className="h-5 w-5" />
                </a>
                
                <Button
                  variant="ghost"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground scale-on-hover glow-on-hover"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary-light to-accent-bright rounded-full opacity-20 blur-xl animate-pulse-glow"></div>
              <div className="absolute -inset-4 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20"></div>
              
              {/* Main image container */}
              <div className="hero-image w-80 h-80 rounded-full overflow-hidden glass-card p-4 glow-on-hover">
                <img
                  src={omkarHeadshot}
                  alt="Omkar Vuddanti - Senior Systems Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating achievement badges */}
              <div className="absolute -top-6 -right-6 glass-card p-3 animate-bounce-in" style={{ animationDelay: '1.6s' }}>
                <div className="text-primary text-sm font-semibold">4+ Years</div>
                <div className="text-xs text-muted-foreground">Experience</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-3 animate-bounce-in" style={{ animationDelay: '1.8s' }}>
                <div className="text-primary text-sm font-semibold">Multi-Cloud</div>
                <div className="text-xs text-muted-foreground">Expert</div>
              </div>

              {/* Floating decoration elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 hero-gradient rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;