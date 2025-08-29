import { Calendar, MapPin, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Computer Science AI Trainer',
      company: 'Invisible Technologies',
      period: 'July 2024 – Present',
      type: 'Freelance',
      location: 'Remote',
      icon: <Zap className="h-5 w-5" />,
      achievements: [
        'Prompt design and evaluation for data science/DBA tasks',
        'Multilingual model training across diverse technical domains',
        'Quality assurance on factuality and clarity for LLM outputs'
      ],
      tags: ['AI Training', 'Prompt Engineering', 'Data Science', 'Quality Assurance']
    },
    {
      role: 'AI Training Analyst',
      company: 'Outlier AI',
      period: 'September 2024 – Present',
      type: 'Freelance',
      location: 'Remote',
      icon: <TrendingUp className="h-5 w-5" />,
      achievements: [
        'Contributed to 8 LLM evaluation projects',
        'Implemented feedback loops improving model reliability',
        'Enhanced model performance through systematic analysis'
      ],
      tags: ['LLM Evaluation', 'Model Training', 'Performance Analysis']
    },
    {
      role: 'Senior Systems Engineer',
      company: 'Viasat (Infosys)',
      period: 'September 2022 – June 2024',
      type: 'Full-time',
      location: 'Bangalore, India',
      icon: <Shield className="h-5 w-5" />,
      achievements: [
        'Automated Azure Entra ID RBAC, MFA, and Conditional Access policies',
        'Standardized infrastructure with Terraform and Ansible',
        'Managed 24/7 on-call operations using PagerDuty',
        'Implemented Sumo Logic for comprehensive observability',
        'Deployed New Relic monitoring for EKS and server infrastructure',
        'Reduced escalations by ~50% through proactive monitoring',
        'Integrated Okta with Salesforce and 5 satcom applications'
      ],
      tags: ['Azure Entra ID', 'Terraform', 'Ansible', 'Kubernetes', 'SRE', 'Okta', 'New Relic']
    },
    {
      role: 'Systems Engineer',
      company: 'Inmarsat (Infosys)',
      period: 'April 2021 – August 2022',
      type: 'Full-time',
      location: 'Bangalore, India',
      icon: <Users className="h-5 w-5" />,
      achievements: [
        'Migrated Apigee on-premises to GCP Apigee X and OCI',
        'Achieved ~$100K annual cost savings through migration',
        'Replatformed APIs and databases serving ~1M users',
        'Implemented comprehensive security policies',
        '24/7 support for critical applications and LDAP services',
        'Reduced system downtime by ~70% through improved monitoring'
      ],
      tags: ['Apigee', 'GCP', 'OCI', 'Migration', 'LDAP', 'Cost Optimization']
    },
    {
      role: 'Backend Developer & DevOps Intern',
      company: 'Knowledge Lens',
      period: 'January 2020 – December 2020',
      type: 'Internship',
      location: 'Remote',
      icon: <Zap className="h-5 w-5" />,
      achievements: [
        'Built comprehensive CI/CD pipelines for on-premises and cloud deployments',
        'Developed Flask-based data collection web application',
        'Implemented automated testing and deployment workflows'
      ],
      tags: ['Flask', 'CI/CD', 'DevOps', 'Python', 'Automation']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A track record of delivering reliable cloud infrastructure and automation solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-8 hover-lift">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="text-primary font-medium mb-2">{exp.company}</div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="skill-badge text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other half on desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;