import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage for prototype
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    toast.success('Thank you! Your message has been sent successfully. We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', organization: '', service: '', message: '' });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        {/* Floating Shapes */}
        <div className="floating-shape floating-shape-1 gradient-primary rounded-full animate-blob" />
        <div className="floating-shape floating-shape-2 gradient-secondary rounded-full animate-blob" style={{ animationDelay: '2s' }} />
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <Mail className="h-16 w-16 text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-diagonal opacity-20">
          <Phone className="h-14 w-14 text-primary-foreground" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
            <Badge className="bg-accent text-accent-foreground hover-pop cursor-pointer">Contact Us</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Let's Transform Your Government Operations
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Get in touch with our team to discuss your digital transformation needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-primary">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Government Plaza<br />
                        Suite 500<br />
                        Washington, DC 20001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-secondary">
                      <Phone className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4568</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-primary">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">info@techaira.com</p>
                      <p className="text-sm text-muted-foreground">support@techaira.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-secondary">
                      <Clock className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-sm text-muted-foreground">24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0977134537876!2d-77.03872368464799!3d38.89767597957159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TechAira Location"
                />
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@government.gov"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        placeholder="Ministry of Interior"
                        value={formData.organization}
                        onChange={(e) => handleChange('organization', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="evisa">eVisa Platform & Managed Services</SelectItem>
                        <SelectItem value="national-id">National ID / Passports / Secured Documents</SelectItem>
                        <SelectItem value="training">Learning & Training Solutions</SelectItem>
                        <SelectItem value="tracking">Trace & Track for Government</SelectItem>
                        <SelectItem value="digital-transformation">Digital Transformation Consulting</SelectItem>
                        <SelectItem value="cybersecurity">Cyber & Information Security</SelectItem>
                        <SelectItem value="software">Custom Software Development</SelectItem>
                        <SelectItem value="infrastructure">IT Infrastructure Services</SelectItem>
                        <SelectItem value="testing">IT Testing & Quality Assurance</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" variant="premium" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Government Procurement Information</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                TechAira is registered with GSA Schedule and is qualified for government procurement. We support various contract vehicles including GSA, SEWP, and agency-specific BPAs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="text-sm py-2 px-4">GSA Schedule Holder</Badge>
                <Badge className="text-sm py-2 px-4">SEWP Authorized</Badge>
                <Badge className="text-sm py-2 px-4">FedRAMP Ready</Badge>
                <Badge className="text-sm py-2 px-4">CMMI Level 5</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};