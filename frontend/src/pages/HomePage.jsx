import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Shield,
  Zap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Lock,
  Award,
  Clock,
  Target,
  BarChart3,
  Plane,
  FileText,
  MapPin,
  Briefcase,
  Fingerprint,
  CreditCard,
  Building2,
  Map,
  Landmark
} from 'lucide-react';

const stats = [
  { number: '50+', label: 'Government Agencies', icon: Users },
  { number: '98%', label: 'Success Rate', icon: TrendingUp },
  { number: '25+', label: 'Years Experience', icon: Award },
  { number: '24/7', label: 'Support', icon: Clock }
];

const solutions = [
  {
    title: 'eVisa Platform',
    description: 'Streamline visa application processes with reduced processing time and enhanced security',
    icon: Globe,
    color: 'primary',
    link: '/solutions/evisa',
    image: 'https://images.unsplash.com/photo-1667453466805-75bbf36e8707?w=800'
  },
  {
    title: 'National ID Systems',
    description: 'Advanced identity management with biometric integration and fraud prevention',
    icon: Shield,
    color: 'secondary',
    link: '/solutions/national-id',
    image: 'https://images.unsplash.com/photo-1614064643392-8dd713152ae9?w=800'
  },
  {
    title: 'Learning & Training',
    description: 'Digital platforms for continuous workforce education and compliance training',
    icon: Users,
    color: 'accent',
    link: '/solutions/training',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800'
  },
  {
    title: 'Trace & Track',
    description: 'Real-time tracking solutions for transparency and accountability',
    icon: Target,
    color: 'primary',
    link: '/solutions/tracking',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?w=800'
  }
];

const benefits = [
  {
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security with scalable infrastructure designed for government needs',
    icon: Lock
  },
  {
    title: 'Trusted Worldwide',
    description: 'Trusted by over 50 government agencies across multiple continents',
    icon: Globe
  },
  {
    title: 'Optimized Performance',
    description: 'Built for long-term sustainability with optimized performance and efficiency',
    icon: Zap
  },
  {
    title: 'Proven Results',
    description: 'Streamlined processes that deliver measurable improvements in operations',
    icon: BarChart3
  }
];

const testimonials = [
  {
    quote: 'TechAira transformed our visa processing system, reducing processing time by 60% while enhancing security measures.',
    author: 'Director of Immigration Services',
    organization: 'Ministry of Interior',
    country: 'United Arab Emirates'
  },
  {
    quote: 'The National ID system implementation was flawless. Their expertise in biometric integration is unmatched.',
    author: 'Chief Technology Officer',
    organization: 'National Identity Authority',
    country: 'Kenya'
  },
  {
    quote: 'Outstanding support and innovative solutions. TechAira is a true partner in our digital transformation journey.',
    author: 'Secretary of Digital Governance',
    organization: 'Ministry of Digital Affairs',
    country: 'Estonia'
  }
];

export const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Digital Transformation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>

        {/* Floating Animated Shapes with Travel Theme */}
        <div className="floating-shape floating-shape-1 gradient-primary rounded-full animate-blob" />
        <div className="floating-shape floating-shape-2 gradient-secondary rounded-full animate-blob" style={{ animationDelay: '2s' }} />
        <div className="floating-shape floating-shape-3 gradient-primary rounded-full animate-blob" style={{ animationDelay: '4s' }} />
        
        {/* Additional Travel-themed Background Shapes */}
        <div className="absolute top-40 left-1/4 w-40 h-40 bg-accent/10 rounded-lg animate-float-slow blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-secondary/10 rounded-lg animate-float-diagonal blur-3xl" style={{ animationDelay: '1s' }} />

        {/* Travel & Immigration Related Floating Icons */}
        <div className="absolute top-20 left-10 animate-float-slow opacity-15">
          <Plane className="h-16 w-16 text-primary-foreground transform rotate-45" />
        </div>
        <div className="absolute top-32 right-20 animate-float-diagonal opacity-20" style={{ animationDelay: '1s' }}>
          <Globe className="h-20 w-20 text-primary-foreground" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float opacity-15" style={{ animationDelay: '2s' }}>
          <FileText className="h-14 w-14 text-primary-foreground" />
        </div>
        <div className="absolute top-1/2 left-12 animate-float-diagonal opacity-15" style={{ animationDelay: '3s' }}>
          <Fingerprint className="h-12 w-12 text-primary-foreground" />
        </div>
        <div className="absolute top-1/3 right-16 animate-float-slow opacity-20" style={{ animationDelay: '2.5s' }}>
          <CreditCard className="h-14 w-14 text-primary-foreground" />
        </div>
        <div className="absolute bottom-40 right-32 animate-float opacity-15" style={{ animationDelay: '4s' }}>
          <MapPin className="h-16 w-16 text-primary-foreground" />
        </div>
        <div className="absolute top-2/3 left-32 animate-float-diagonal opacity-15" style={{ animationDelay: '1.5s' }}>
          <Building2 className="h-18 w-18 text-primary-foreground" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-slow opacity-15" style={{ animationDelay: '3.5s' }}>
          <Briefcase className="h-12 w-12 text-primary-foreground" />
        </div>
        <div className="absolute top-1/4 right-1/3 animate-float opacity-20" style={{ animationDelay: '2.8s' }}>
          <Shield className="h-14 w-14 text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 left-1/2 animate-float-diagonal opacity-15" style={{ animationDelay: '0.8s' }}>
          <Map className="h-16 w-16 text-primary-foreground" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground mb-4 animate-fadeInDown hover-pop">
              Trusted by 50+ Government Agencies Worldwide
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fadeInUp">
              Empowering Governments Through Digital Transformation
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              TechAira provides innovative solutions and secure platforms for modernizing government operations with trust, security, and scalability at the core.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Link to="/solutions/evisa">
                <Button size="xl" variant="accent" className="group hover-shine">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="xl" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-pop">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-subtle fade-in-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg bg-card hover-lift hover-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="mb-3 inline-block">
                      <Icon className="h-10 w-10 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <p className="text-3xl sm:text-4xl font-bold text-foreground mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 fade-in-section relative pattern-dots">
        {/* Subtle Travel Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float-diagonal" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground">About TechAira</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transforming Government Systems with Trust & Innovation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 25 years of experience, TechAira specializes in delivering secure, scalable solutions that modernize government operations. Our expertise spans across identity management, visa processing, training platforms, and real-time tracking systems.
              </p>
              <ul className="space-y-3">
                {[
                  'ISO 27001 Certified Security Standards',
                  'WCAG 2.1 AA Accessibility Compliance',
                  'Multi-Cloud Infrastructure for High Availability',
                  '24/7 Dedicated Government Support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button size="lg" variant="default" className="mt-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1717501220725-83f151c447e7?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Modern Government Technology"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-secondary rounded-2xl opacity-50 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 gradient-primary rounded-2xl opacity-50 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 gradient-subtle fade-in-section relative pattern-grid">
        {/* Additional Floating Travel Elements */}
        <div className="absolute top-20 left-1/4 animate-float-slow opacity-10">
          <Plane className="h-24 w-24 text-primary transform -rotate-12" />
        </div>
        <div className="absolute bottom-20 right-1/4 animate-float-diagonal opacity-10">
          <Globe className="h-28 w-28 text-secondary" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Our Solutions</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Comprehensive Solutions for Modern Government
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how our innovative platforms transform government operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-tilt hover-shine relative"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-primary group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-300 animate-pulse-glow">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{solution.title}</CardTitle>
                    <CardDescription className="text-base">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={solution.link}>
                      <Button variant="ghost" className="group/btn hover-pop">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 fade-in-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-accent text-accent-foreground mb-4">Why Choose TechAira</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Built for Government Excellence
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-xl hover:bg-muted transition-all duration-300 group hover-lift cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto shadow-primary group-hover:shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
                    <Icon className="h-8 w-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 gradient-hero fade-in-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-accent text-accent-foreground mb-8">Client Success Stories</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-16">
              Trusted by Government Leaders Worldwide
            </h2>

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === activeTestimonial
                      ? 'opacity-100 block'
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <Card className="border-0 shadow-2xl bg-card/95 backdrop-blur-sm">
                    <CardContent className="p-8 sm:p-12">
                      <div className="text-6xl text-primary mb-6">“</div>
                      <p className="text-xl text-foreground mb-8 leading-relaxed italic">
                        {testimonial.quote}
                      </p>
                      <div>
                        <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
                        <p className="text-muted-foreground">{testimonial.organization}</p>
                        <p className="text-sm text-muted-foreground mt-1">{testimonial.country}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'bg-accent w-8'
                        : 'bg-primary-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 fade-in-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 gradient-primary opacity-10" />
            <CardContent className="p-12 sm:p-16 text-center relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Government Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 50+ government agencies worldwide who trust TechAira for their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="xl" variant="premium">
                    Schedule a Consultation
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