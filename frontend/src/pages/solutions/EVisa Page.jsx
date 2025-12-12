import React from 'react';
import { SolutionTemplate } from './SolutionTemplate';
import { Globe, Clock, Shield, TrendingUp, Lock, Users } from 'lucide-react';

export const EVisaPage = () => {
  const solutionData = {
    title: 'eVisa Platform & Managed Services',
    subtitle: 'Streamline visa application processes with enhanced security and efficiency',
    heroImage: 'https://images.unsplash.com/photo-1667453466805-75bbf36e8707?w=1200',
    Icon: Globe,
    description: 'Our comprehensive eVisa platform revolutionizes how governments manage visa applications. With advanced biometric integration, real-time processing, and robust security measures, we help immigration authorities process applications 60% faster while maintaining the highest security standards.',
    stats: [
      { value: '60%', label: 'Faster Processing' },
      { value: '95%', label: 'Fraud Reduction' },
      { value: '3M+', label: 'Applications/Year' },
      { value: '24/7', label: 'Support' }
    ],
    benefits: [
      {
        icon: Clock,
        title: 'Reduced Processing Time',
        description: 'Cut visa processing time by up to 60% with automated workflows and intelligent document verification'
      },
      {
        icon: Shield,
        title: 'Enhanced Security',
        description: 'Multi-layer security with biometric verification, fraud detection, and secure document storage'
      },
      {
        icon: TrendingUp,
        title: 'Better Analytics',
        description: 'Real-time dashboards and comprehensive reporting for data-driven decision making'
      }
    ],
    features: [
      {
        title: 'Online Application Portal',
        description: 'User-friendly portal for applicants with multilingual support and step-by-step guidance'
      },
      {
        title: 'Biometric Integration',
        description: 'Seamless integration with biometric capture devices and international databases'
      },
      {
        title: 'Document Verification',
        description: 'AI-powered document authentication and fraud detection systems'
      },
      {
        title: 'Payment Gateway',
        description: 'Secure payment processing with multiple payment methods and currencies'
      },
      {
        title: 'Case Management',
        description: 'Comprehensive workflow management for visa officers with automation capabilities'
      },
      {
        title: 'Reporting & Analytics',
        description: 'Advanced analytics dashboard with customizable reports and insights'
      },
      {
        title: 'Mobile Application',
        description: 'Native mobile apps for applicants to track status and receive notifications'
      },
      {
        title: 'API Integration',
        description: 'RESTful APIs for integration with existing government systems and databases'
      }
    ]
  };

  return <SolutionTemplate {...solutionData} />;
};