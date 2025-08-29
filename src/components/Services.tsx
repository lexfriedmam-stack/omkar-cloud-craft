import { Video, Camera, Globe, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Video Editing',
      description: 'Professional end-to-end video editing services for corporates and content creators. From raw footage to polished final products.',
      features: [
        'Corporate video production',
        'Content creator editing',
        'Post-production effects',
        'Color grading & audio mixing',
        'Multi-platform optimization'
      ],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Photography',
      description: 'Capturing moments that matter with professional event, product, and brand photography services.',
      features: [
        'Event photography',
        'Product photography',
        'Brand & corporate shoots',
        'Portrait sessions',
        'Photo retouching & editing'
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Website Building for SMEs',
      description: 'Fast, SEO-friendly websites with modern UI/UX design tailored for small and medium enterprises.',
      features: [
        'Responsive web design',
        'SEO optimization',
        'Modern UI/UX',
        'CMS integration',
        'Performance optimization'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Training & Consultation',
      description: 'Expert prompt design, model evaluation, and fine-tuning support for AI/ML projects and implementations.',
      features: [
        'Prompt engineering',
        'Model evaluation & testing',
        'Fine-tuning support',
        'AI strategy consultation',
        'Quality assurance for AI outputs'
      ],
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond technical expertise, I offer creative and strategic services to help businesses grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card hover-lift p-6 cursor-pointer group">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need technical consulting, creative services, or a combination of both, 
              I'm here to help bring your vision to life with professional expertise and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="hero-gradient text-white font-semibold px-8 py-3 glow-on-hover"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;