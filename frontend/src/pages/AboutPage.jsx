import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Target, Eye, Award, Users, Globe, Shield, ArrowRight, Plane, Building2, FileText, Landmark, MapPin, CreditCard } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize data protection and security in every solution we deliver'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Government needs drive our innovation and development processes'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality solutions and services'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Creating positive change in government operations worldwide'
  }
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Executive Officer',
    bio: '20+ years in government technology with PhD in Computer Science',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Former government CTO with expertise in digital transformation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Chief Security Officer',
    bio: 'Cybersecurity expert with government clearance and certifications',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
  },
  {
    name: 'James Williams',
    role: 'VP of Solutions',
    bio: 'Led digital transformation projects for 15+ government agencies',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
  }
];

const certifications = [
  'ISO 27001:2013 Information Security',
  'ISO 9001:2015 Quality Management',
  'CMMI Level 5 Certified',
  'SOC 2 Type II Compliant',
  'WCAG 2.1 AA Accessibility',
  'FedRAMP Authorized'
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <Badge className="bg-accent text-accent-foreground">About TechAira</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Pioneering Government Digital Transformation Since 1999
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We're dedicated to transforming how governments serve their citizens through innovative, secure, and scalable technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shadow-primary">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower governments worldwide with cutting-edge technology solutions that enhance operational efficiency, improve citizen services, and ensure the highest standards of security and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 gradient-secondary rounded-xl flex items-center justify-center shadow-secondary">
                  <Eye className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in government technology solutions, setting the standard for innovation, security, and excellence in public sector digital transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Our Values</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-primary">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Leadership</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Led by industry veterans with decades of government technology experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-flip h-96" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-flip-inner h-full">
                  {/* Front */}
                  <Card className="card-flip-front border-0 shadow-xl overflow-hidden h-full">
                    <div className="relative h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                        <p className="text-sm font-medium text-primary">{member.role}</p>
                      </div>
                    </div>
                  </Card>
                  {/* Back */}
                  <Card className="card-flip-back border-0 shadow-xl overflow-hidden h-full gradient-primary">
                    <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary-foreground">{member.name}</h3>
                      <p className="text-sm font-medium text-primary-foreground/90">{member.role}</p>
                      <p className="text-sm text-primary-foreground/80 leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-accent text-accent-foreground mb-4">Certifications & Compliance</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Industry-Leading Standards
              </h2>
              <p className="text-lg text-muted-foreground">
                Our certifications demonstrate our commitment to excellence and security
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1765121689322-6befc57dc8db?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Digital Transformation"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 gradient-hero opacity-95" />
            </div>
            <CardContent className="p-12 sm:p-16 text-center relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Learn About Our Digital Transformation Approach
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Discover our 4-pillar methodology: People, Process, Technology, and Data
              </p>
              <Link to="/about/digital-transformation">
                <Button size="xl" variant="accent" className="group">
                  Explore Our Approach
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};