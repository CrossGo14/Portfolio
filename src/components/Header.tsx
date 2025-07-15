import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-blue-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <Code2 className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">MiniByte</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 capitalize group"
              >
                <span className="relative z-10">{section}</span>
                <div className="absolute inset-0 bg-blue-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2"
          >
            <div className="relative">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="flex flex-col space-y-4 pt-4 pb-2">
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left capitalize"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;