import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Globe, Users, TrendingUp, Award } from 'lucide-react';

const clients = [
  { name: 'United Arab Emirates', sector: 'Immigration Services' },
  { name: 'Kenya', sector: 'National Identity' },
  { name: 'Estonia', sector: 'Digital Governance' },
  { name: 'Singapore', sector: 'Smart Nation' },
  { name: 'Rwanda', sector: 'E-Government' },
  { name: 'Saudi Arabia', sector: 'Vision 2030' },
  { name: 'Qatar', sector: 'Digital Transformation' },
  { name: 'Bahrain', sector: 'eGovernment' },
  { name: 'Malaysia', sector: 'Digital Economy' },
  { name: 'Indonesia', sector: 'National ID' },
  { name: 'Philippines', sector: 'eGovernment' },
  { name: 'Thailand', sector: 'Digital Thailand' }
];

const caseStudies = [
  {
    country: 'United Arab Emirates',
    ministry: 'Ministry of Interior',
    solution: 'eVisa Platform Implementation',
    challenge: 'The existing visa processing system was manual and time-consuming, leading to long wait times and increased security risks. The ministry needed a modern, secure solution to handle growing visa applications.',
    implementation: 'Deployed a comprehensive eVisa platform with biometric integration, automated workflow management, and real-time processing capabilities. The system was integrated with international databases and security systems.',
    results: [
      '70% reduction in processing time',
      '95% decrease in fraud cases',
      '3M+ applications processed annually',
      '99.5% uptime achieved',
      'Citizen satisfaction increased to 4.8/5'
    ],
    image: 'https://images.unsplash.com/photo-1667453466805-75bbf36e8707?w=800'
  },
  {
    country: 'Kenya',
    ministry: 'National Identity Authority',
    solution: 'National ID System with Biometrics',
    challenge: 'Manual identity verification processes were inefficient and prone to errors. The government needed a modern system to register and verify citizens with high accuracy.',
    implementation: 'Implemented a comprehensive National ID system with mobile biometric enrollment, centralized database, and secure document issuance. Deployed 500+ enrollment stations nationwide.',
    results: [
      '15M+ citizens registered',
      '99.8% biometric accuracy',
      'Complete digital records system',
      '80% reduction in document fraud',
      '50+ government services integrated'
    ],
    image: 'https://images.unsplash.com/photo-1614064643392-8dd713152ae9?w=800'
  },
  {
    country: 'Estonia',
    ministry: 'Ministry of Digital Affairs',
    solution: 'Learning & Training Platform',
    challenge: 'Government workforce needed continuous training on digital tools and cybersecurity, but traditional methods were costly and inefficient.',
    implementation: 'Deployed a comprehensive digital learning platform with AI-powered personalization, compliance tracking, and integration with existing HR systems. Created 200+ courses covering digital skills and security.',
    results: [
      '25,000+ employees trained',
      '92% course completion rate',
      '60% reduction in training costs',
      '85% improvement in digital literacy',
      'ISO 27001 compliance achieved'
    ],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800'
  }
];

const stats = [
  { icon: Globe, value: '50+', label: 'Countries Served' },
  { icon: Users, value: '100M+', label: 'Citizens Impacted' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  { icon: Award, value: '25+', label: 'Years Experience' }
];

export const CustomersPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <Badge className="bg-accent text-accent-foreground">Our Customers</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Trusted by Government Leaders Worldwide
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Delivering digital transformation excellence to 50+ government agencies across the globe
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center border-0 shadow-lg hover-lift hover-glow group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 pb-6 space-y-3">
                    <div className="inline-block animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      <Icon className="h-10 w-10 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <p className="text-4xl font-bold text-foreground group-hover:scale-110 group-hover:text-primary transition-all duration-300">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Valued Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We're proud to serve government agencies committed to digital excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-md hover-pop hover-shine group cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto shadow-primary group-hover:shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
                    <Globe className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{client.name}</p>
                  <p className="text-xs text-muted-foreground">{client.sector}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Success Stories</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Transforming Government Operations
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-world examples of how we've helped governments achieve their digital transformation goals
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={study.image}
                      alt={study.country}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
                  </div>
                  <CardContent className="p-8 lg:p-12 space-y-6">
                    <div>
                      <Badge className="mb-3">{study.country}</Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{study.ministry}</h3>
                      <p className="text-sm font-medium text-primary">{study.solution}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Challenge</p>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Implementation</p>
                        <p className="text-muted-foreground text-sm">{study.implementation}</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground mb-3">Results</p>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 gradient-primary opacity-10" />
            <CardContent className="p-12 sm:p-16 text-center relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Join 50+ Government Agencies Transforming with TechAira
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how we can help your organization achieve its digital transformation goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="xl" variant="premium" className="group">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/solutions/evisa">
                  <Button size="xl" variant="outline">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};