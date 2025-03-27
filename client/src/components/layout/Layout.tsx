import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to content link - visible only for screen readers and keyboard focus */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
      >
        Skip to main content
      </a>
      
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
