import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Cog, Cpu, Database, TrendingUp, Target, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'People',
    color: 'primary',
    description: 'Empowering government workforce through training and change management',
    points: [
      'Comprehensive training programs',
      'Change management strategies',
      'Continuous skill development',
      'Cultural transformation support'
    ]
  },
  {
    icon: Cog,
    title: 'Process',
    color: 'secondary',
    description: 'Optimizing workflows and operational procedures for efficiency',
    points: [
      'Business process reengineering',
      'Workflow automation',
      'Standard operating procedures',
      'Continuous improvement frameworks'
    ]
  },
  {
    icon: Cpu,
    title: 'Technology',
    color: 'accent',
    description: 'Implementing cutting-edge solutions aligned with government needs',
    points: [
      'Cloud-native architectures',
      'AI/ML integration',
      'Modern development practices',
      'Scalable infrastructure'
    ]
  },
  {
    icon: Database,
    title: 'Data',
    color: 'success',
    description: 'Leveraging data for informed decision-making and insights',
    points: [
      'Data governance frameworks',
      'Analytics and insights',
      'Predictive modeling',
      'Data-driven decision making'
    ]
  }
];

const benefits = [
  {
    title: 'Cost Savings',
    description: 'Reduce operational costs by up to 40% through automation and efficiency',
    stat: '40%',
    icon: TrendingUp
  },
  {
    title: 'Improved Efficiency',
    description: 'Streamline processes and reduce processing times significantly',
    stat: '60%',
    icon: Target
  },
  {
    title: 'Better Citizen Engagement',
    description: 'Enhance citizen satisfaction through improved digital services',
    stat: '85%',
    icon: Users
  }
];

const caseStudies = [
  {
    title: 'Ministry of Interior - UAE',
    challenge: 'Outdated visa processing system causing delays and security concerns',
    solution: 'Implemented modern eVisa platform with biometric integration',
    results: [
      '70% reduction in processing time',
      '95% decrease in fraud cases',
      '3M+ applications processed annually'
    ]
  },
  {
    title: 'National ID Authority - Kenya',
    challenge: 'Manual identity verification leading to inefficiencies',
    solution: 'Deployed comprehensive National ID system with mobile biometrics',
    results: [
      '15M+ citizens registered',
      '99.8% biometric accuracy',
      'Complete digital records system'
    ]
  }
];

export const DigitalTransformationPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        {/* Floating Animated Shapes */}
        <div className="floating-shape floating-shape-1 gradient-secondary rounded-full animate-blob" />
        <div className="floating-shape floating-shape-2 gradient-primary rounded-full animate-blob" style={{ animationDelay: '3s' }} />
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-10 animate-float-slow opacity-20">
          <Cpu className="h-16 w-16 text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float-diagonal opacity-20">
          <Database className="h-20 w-20 text-primary-foreground" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <Badge className="bg-accent text-accent-foreground hover-pop cursor-pointer">Digital Transformation</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              The Four Pillars of Government Digital Transformation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Our proven methodology transforms government operations through a holistic approach covering People, Process, Technology, and Data.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Comprehensive Framework
            </h2>
            <p className="text-lg text-muted-foreground">
              Each pillar works in harmony to ensure successful digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-xl hover:shadow-2xl overflow-hidden group hover-tilt hover-shine cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary group-hover:h-3 transition-all duration-300" />
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center shadow-primary group-hover:shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                        <Icon className="h-8 w-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{pillar.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {pillar.description}
                    </p>
                    <ul className="space-y-3">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Measurable Impact</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Benefits of Digital Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-20 h-20 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-primary">
                      <Icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="text-5xl font-bold text-primary">{benefit.stat}</div>
                    <h3 className="text-2xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Success Stories</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Real-World Transformations
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our approach has transformed government operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Challenge</p>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-2">Solution</p>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-accent mb-3">Results</p>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                            <span className="text-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Start Your Transformation Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Let's discuss how our four-pillar approach can modernize your government operations
            </p>
            <Link to="/contact">
              <Button size="xl" variant="accent">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};