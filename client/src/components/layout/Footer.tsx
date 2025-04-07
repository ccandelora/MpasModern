import React from 'react';
import { Link, useLocation } from 'wouter';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { contactInfo, navigationLinks } from '@/data';
import footerLogo from '@/assets/images/MPAS_logo_white-type_transparent-bg.webp';

const FooterComponent = () => {
  const [location] = useLocation();

  // Function to handle navigation
  const handleNavigation = (href: string) => {
    if (location === '/') {
      // If on home page, use the hash
      return href;
    } else {
      // If on another page, return to home with hash
      return `/${href.replace('#', '')}`;
    }
  };

  // Function to handle click events
  const handleClick = (e: React.MouseEvent, href: string) => {
    if (location === '/') {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      // Navigate to home page first
      window.location.href = '/';
      // Then scroll to the section after a short delay to ensure the page has loaded
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info - Updated with Logo */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="MPAS - Home">
              <img 
                src={footerLogo} 
                alt="MPAS Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Massachusetts Police Accreditation Solutions provides expert consulting services to help law enforcement agencies achieve and maintain accreditation standards.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={handleNavigation(link.href)}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <p>{contactInfo.address.replace('\n', ', ')}</p>
              <p>Phone: <a href={`tel:${contactInfo.phone.replace(/\D/g,'')}`} className="hover:text-white hover:underline">{contactInfo.phone}</a></p>
              <p>Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-white hover:underline">{contactInfo.email}</a></p>
              <p>Hours: {contactInfo.hours.replace('\n', ', ')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Massachusetts Police Accreditation Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const Footer = React.memo(FooterComponent);

export default Footer;
