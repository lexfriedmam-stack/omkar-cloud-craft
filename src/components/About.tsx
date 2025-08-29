import { GraduationCap, Award, Users, Zap } from 'lucide-react';
import omkarHeadshot from '@/assets/omkar-profile.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'L2/L3 Support Excellence',
      description: 'Advanced troubleshooting and incident resolution with 50% reduction in escalations'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Cloud Operations',
      description: 'Multi-cloud expertise with focus on reliability, observability, and automation'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Identity Management',
      description: 'Specialized in Azure Entra ID, Okta, and enterprise authentication solutions'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about building reliable, scalable cloud infrastructure and automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 4 years of experience as a Senior Systems Engineer, I specialize in 
                cloud-native operations, site reliability engineering, and identity platform management. 
                My expertise spans across AWS, Azure, and OCI ecosystems, with a strong focus on 
                automation and observability.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Throughout my career, I've led critical infrastructure migrations, implemented 
                robust monitoring solutions, and developed automation frameworks that have 
                significantly improved system reliability and reduced operational overhead. 
                My experience includes 24/7 on-call responsibilities, where I've consistently 
                delivered rapid incident resolution and maintained high service availability.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Beyond technical expertise, I'm passionate about mentoring teams, implementing 
                best practices, and driving continuous improvement initiatives that enhance 
                both system performance and team productivity.
              </p>
            </div>

            {/* Education */}
            <div className="glass-card p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-primary font-medium">
                    B.Tech in Computer Science Engineering
                  </p>
                  <p className="text-muted-foreground">
                    Data Science Specialization • NIIT University • 2020
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image and Stats */}
          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              <div className="w-64 h-80 glass-card p-4 glow-on-hover">
                <img
                  src={omkarHeadshot}
                  alt="Omkar Vuddanti"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">50%</div>
                <div className="text-sm text-muted-foreground">Reduced Escalations</div>
              </div>
              
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">70%</div>
                <div className="text-sm text-muted-foreground">Less Downtime</div>
              </div>
              
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">$100K</div>
                <div className="text-sm text-muted-foreground">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;