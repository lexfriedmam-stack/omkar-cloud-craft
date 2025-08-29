import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="hero-text">Omkar</span>
                <br />
                <span className="text-foreground">Vuddanti</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
                Senior Systems Engineer
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                4+ years of expertise in cloud-native operations, SRE, and identity platforms. 
                Specializing in automation, reliability engineering, and scalable cloud solutions 
                across AWS, Azure, and OCI ecosystems.
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  className="hero-gradient text-white font-semibold px-8 py-3 glow-on-hover"
                >
                  View My Work
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://linkedin.com/in/omkar-vuddanti-14123b130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 scale-on-hover"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
                <a
                  href="mailto:OmkarVuddanti@gmail.com"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 scale-on-hover"
                >
                  <Mail className="h-5 w-5" />
                </a>
                
                <Button
                  variant="ghost"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground scale-on-hover"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card p-4 glow-on-hover">
                <img
                  src={omkarHeadshot}
                  alt="Omkar Vuddanti - Senior Systems Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 hero-gradient rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;