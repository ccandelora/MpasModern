import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationLinks } from '@/data';
import logoImage from '@/assets/images/MPAS_logo_solid-sheild_navy-type_transparent-bg.webp'; // Use .webp

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`} role="banner">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Updated to use image */}
        <Link href="/" className="flex items-center" aria-label="MPAS - Massachusetts Police Accreditation Solutions - Home">
          <img 
            src={logoImage} 
            alt="MPAS Logo - Massachusetts Police Accreditation Solutions" 
            className="h-16 w-auto" // Increased height from h-12 to h-16
          />
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          {navigationLinks.map((link, index) => (
            <Link 
              key={index} 
              href={handleNavigation(link.href)}
              onClick={(e) => handleClick(e, link.href)}
              className="text-foreground hover:text-primary font-medium focus:outline-none focus:underline"
            >
              {link.text}
            </Link>
          ))}
          <Button asChild variant="default">
            <Link 
              href={handleNavigation('#contact')} 
              onClick={(e) => handleClick(e, '#contact')}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground"
            >
              Contact Us
            </Link>
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          id="mobile-navigation"
          className="md:hidden bg-white border-t border-gray-100 py-4"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={handleNavigation(link.href)}
                onClick={(e) => {
                  handleClick(e, link.href);
                  closeMenu();
                }}
                className="text-foreground hover:text-primary font-medium py-2"
              >
                {link.text}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full">
              <Link 
                href={handleNavigation('#contact')} 
                onClick={(e) => {
                  handleClick(e, '#contact');
                  closeMenu();
                }}
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
