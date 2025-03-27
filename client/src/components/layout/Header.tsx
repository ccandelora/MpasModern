import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationLinks } from '@/data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`} role="banner">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" aria-label="MPAS - Massachusetts Police Accreditation Solutions - Home">
          <div className="text-primary font-bold text-2xl">MPAS</div>
          <span className="hidden md:inline-block text-foreground text-sm font-medium">Massachusetts Police Accreditation Solutions</span>
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
            <a 
              key={index} 
              href={link.href} 
              className="text-foreground hover:text-primary font-medium focus:outline-none focus:underline"
            >
              {link.text}
            </a>
          ))}
          <Button asChild variant="default">
            <a href="#contact" className="focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground">Contact Us</a>
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <nav 
        id="mobile-navigation"
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {navigationLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-foreground hover:text-primary font-medium py-2 border-b border-neutral-200 focus:outline-none focus:text-primary"
              onClick={closeMenu}
            >
              {link.text}
            </a>
          ))}
          <Button asChild className="mt-2 w-full" onClick={closeMenu}>
            <a href="#contact" className="focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground">Contact Us</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
