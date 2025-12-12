import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';

const solutions = [
  {
    title: 'eVisa Platform & Managed Services',
    href: '/solutions/evisa',
    description: 'Streamline visa application processes with enhanced security'
  },
  {
    title: 'National ID / Passports / Secured Documents',
    href: '/solutions/national-id',
    description: 'Advanced identity management with biometric integration'
  },
  {
    title: 'Learning & Training Solutions',
    href: '/solutions/training',
    description: 'Digital platforms for government workforce education'
  },
  {
    title: 'Trace & Track for Government',
    href: '/solutions/tracking',
    description: 'Real-time tracking for government assets and documents'
  }
];

const services = [
  {
    title: 'Digital Transformation Consulting',
    href: '/services/digital-transformation',
    description: 'Strategic technology adoption and change management'
  },
  {
    title: 'Cyber & Information Security',
    href: '/services/cybersecurity',
    description: 'Comprehensive security assessments and monitoring'
  },
  {
    title: 'Custom Software Development',
    href: '/services/software-development',
    description: 'Tailored solutions for government operations'
  },
  {
    title: 'IT Infrastructure Services',
    href: '/services/infrastructure',
    description: 'Cloud infrastructure and data center management'
  },
  {
    title: 'IT Testing & Quality Assurance',
    href: '/services/testing',
    description: 'Ensure highest standards for performance and security'
  },
  {
    title: 'Data Science',
    href: '/services/data-science',
    description: 'Predictive analytics and machine learning models'
  }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-primary group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">TechAira</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant="ghost"
                className={cn(
                  'text-base',
                  location.pathname === '/' && 'text-primary'
                )}
              >
                Home
              </Button>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">About TechAira</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our mission, vision, and leadership team
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about/digital-transformation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Digital Transformation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our 4 pillars approach to transformation
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {solutions.map((solution) => (
                        <li key={solution.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={solution.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{solution.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {solution.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[700px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/customers">
              <Button
                variant="ghost"
                className={cn(
                  'text-base',
                  location.pathname === '/customers' && 'text-primary'
                )}
              >
                Customers
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="premium" size="lg" className="ml-4">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base">
                    Home
                  </Button>
                </Link>
                <Link to="/about" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base">
                    About
                  </Button>
                </Link>
                <div className="pl-4 space-y-2">
                  <Link to="/about/digital-transformation" onClick={() => setMobileOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      Digital Transformation
                    </Button>
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="px-4 text-sm font-medium text-muted-foreground">Solutions</p>
                  {solutions.map((solution) => (
                    <Link key={solution.href} to={solution.href} onClick={() => setMobileOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        {solution.title}
                      </Button>
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="px-4 text-sm font-medium text-muted-foreground">Services</p>
                  {services.map((service) => (
                    <Link key={service.href} to={service.href} onClick={() => setMobileOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        {service.title}
                      </Button>
                    </Link>
                  ))}
                </div>
                <Link to="/customers" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-base">
                    Customers
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="premium" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};