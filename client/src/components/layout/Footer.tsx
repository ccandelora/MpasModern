import { Link, useLocation } from 'wouter';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { contactInfo, navigationLinks, footerServices } from '@/data';

const Footer = () => {
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
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MPAS</h2>
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
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-2">
              <p>Email: info@mpas.boston</p>
              <p>Phone: (555) 123-4567</p>
              <p>Massachusetts, USA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Massachusetts Police Accreditation Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
