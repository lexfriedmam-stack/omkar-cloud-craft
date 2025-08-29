import { ExternalLink, Github, Eye, Brain, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Face Detection Attendance with Temperature Monitoring',
      description: 'AI-powered attendance system with integrated temperature screening for enhanced safety protocols.',
      longDescription: 'Comprehensive solution using OpenCV and CNN-based facial recognition combined with IR temperature sensors and Raspberry Pi integration for automated safety screening in corporate environments.',
      technologies: ['OpenCV', 'CNN', 'Raspberry Pi', 'Python', 'IR Sensors', 'Computer Vision'],
      category: 'AI & IoT',
      icon: <Brain className="h-6 w-6" />,
      image: '/placeholder-project-1.jpg',
      outcomes: [
        'Automated attendance tracking with 99.2% accuracy',
        'Real-time temperature monitoring and alerts',
        'Reduced manual screening time by 80%',
        'Enhanced workplace safety protocols'
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Statistical Downscaling of Temperature',
      description: 'Advanced climate modeling using deep learning and machine learning techniques for temperature projections.',
      longDescription: 'Comparative analysis of deep learning vs traditional ML approaches including SDSM, ANN, WRF, and nonlinear regression for accurate temperature projections in Bhuntar region.',
      technologies: ['Deep Learning', 'Machine Learning', 'SDSM', 'ANN', 'WRF', 'Python', 'TensorFlow', 'Statistical Analysis'],
      category: 'Data Science',
      icon: <BarChart3 className="h-6 w-6" />,
      image: '/placeholder-project-2.jpg',
      outcomes: [
        'Improved temperature prediction accuracy by 25%',
        'Comprehensive model comparison and analysis',
        'Regional climate pattern identification',
        'Scalable methodology for other regions'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Customer Sales Analysis',
      description: 'Data-driven sales insights platform with SQL-based extraction and intelligent reporting.',
      longDescription: 'Comprehensive sales analytics solution featuring SQL-based data extraction, aggregation, and filtering to provide actionable business insights and performance metrics.',
      technologies: ['SQL', 'MySQL', 'Data Analysis', 'Business Intelligence', 'Python', 'Pandas', 'Visualization'],
      category: 'Business Intelligence',
      icon: <Users className="h-6 w-6" />,
      image: '/placeholder-project-3.jpg',
      outcomes: [
        'Identified top-performing sales channels',
        'Reduced reporting time by 60%',
        'Enhanced decision-making with real-time insights',
        'Automated sales performance tracking'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const viewProject = (projectTitle: string) => {
    // In a real application, this would navigate to a detailed project page
    console.log('Viewing project:', projectTitle);
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative projects that demonstrate technical expertise and real-world impact
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="glass-card p-4 hover-lift">
                  <div className={`h-64 lg:h-80 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="text-white/20 text-8xl">
                      {project.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <span className="skill-badge">{project.category}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
                    <p className="text-muted-foreground">{project.longDescription}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-badge text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => viewProject(project.title)}
                      className={`bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 transition-opacity`}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and innovations. Follow my journey and 
              stay updated with the latest developments in cloud engineering, AI, and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;