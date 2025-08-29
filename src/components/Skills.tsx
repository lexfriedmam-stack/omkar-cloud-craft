import { Cloud, Shield, Database, Code, Globe, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Platforms',
      icon: <Cloud className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['AWS (EKS, IAM)', 'Azure (Entra ID/AAD, VM, Storage)', 'GCP', 'Apigee X/Edge', 'OCI']
    },
    {
      title: 'Containers & Orchestration',
      icon: <Database className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['Kubernetes (Amazon EKS)', 'Docker', 'Container Security', 'Helm']
    },
    {
      title: 'Infrastructure & DevOps',
      icon: <Code className="h-6 w-6" />,
      color: 'from-orange-500 to-red-500',
      skills: ['Terraform', 'Ansible', 'GitLab CI', 'ServiceNow', 'Postman', 'Cron']
    },
    {
      title: 'Identity & Security',
      icon: <Shield className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: ['Okta (MFA, SSO)', 'Entra ID', 'LDAP', 'OAuth2', 'SSL/TLS Management']
    },
    {
      title: 'Observability & SRE',
      icon: <Monitor className="h-6 w-6" />,
      color: 'from-indigo-500 to-purple-500',
      skills: ['New Relic', 'Dynatrace', 'Sumo Logic', 'SLA/SLO', 'L2/L3 Triage', 'PagerDuty']
    },
    {
      title: 'Systems & Languages',
      icon: <Globe className="h-6 w-6" />,
      color: 'from-teal-500 to-green-500',
      skills: ['Linux (RHEL, Ubuntu, Kali)', 'Python', 'SQL/MySQL', 'JSON', 'TCP/IP', 'DNS']
    }
  ];

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Telugu', level: 'Native' },
    { name: 'Hindi', level: 'Professional' }
  ];

  const certifications = [
    'Microsoft 365 Administration',
    'Google Workspace Management',
    'AWS Cloud Practitioner',
    'Kubernetes Administration'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise across cloud platforms, automation, and reliability engineering
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 hover-lift group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge w-full text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{language.name}</span>
                  <span className="skill-badge">{language.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Certifications */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Certifications & Tools
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="skill-badge">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">~50%</div>
              <div className="text-muted-foreground">Reduction in Escalations</div>
              <div className="text-sm text-muted-foreground mt-1">Through proactive monitoring</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">~70%</div>
              <div className="text-muted-foreground">Downtime Reduction</div>
              <div className="text-sm text-muted-foreground mt-1">Improved LDAP & critical apps</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">~$100K</div>
              <div className="text-muted-foreground">Annual Cost Savings</div>
              <div className="text-sm text-muted-foreground mt-1">Apigee migration optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;