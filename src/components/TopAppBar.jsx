import React, { useState, useEffect } from 'react';

const TopAppBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b-[3px] border-black shadow-[4px_4px_0px_0px_#000] z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="font-black text-2xl tracking-tighter uppercase flex items-center gap-2 hover:opacity-80">
          <div className="w-8 h-8 bg-neo-lime border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_#000]"></div>
          <span className="hidden sm:inline">Hassan Hesham</span>
        </a>
        
        <nav className="hidden md:flex gap-8 font-black text-lg">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className={`transition-colors border-b-4 pb-1 ${
                activeSection === link.id 
                  ? 'border-neo-lime text-black' 
                  : 'border-transparent hover:border-black'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <button 
          className="md:hidden flex items-center justify-center p-2 border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_#000] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#000] transition-all bg-neo-lime"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined font-black">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col bg-white border-t-[3px] border-black p-4 gap-4 font-black text-xl shadow-[4px_4px_0px_0px_#000]">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 border-2 border-transparent ${
                activeSection === link.id ? 'bg-neo-lime border-black shadow-[2px_2px_0px_0px_#000]' : 'hover:bg-neo-cream'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default TopAppBar;
