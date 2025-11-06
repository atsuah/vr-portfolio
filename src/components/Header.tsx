import React, { useState, useEffect, useRef } from "react";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  };

  // Check screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      setIsMoreOpen(false);
    }
  };

  const navItems = [
    { name: "SCENE", href: "#", onClick: scrollToTop },
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  const moreItems = [
    { 
      name: "CV", 
      href: "https://www.canva.com/design/DAG3Byt1_jM/hdFa65PV-qdIruoDfSo06g/edit?utm_content=DAG3Byt1_jM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      external: true 
    },
    { 
      name: "GITHUB", 
      href: "https://github.com/atsuah", // Replace with your actual GitHub URL
      external: true 
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800/90 backdrop-blur-lg text-white z-50 border-b border-gray-600">
      {/* Menu Bar */}
      <div className="bg-gray-900 border-b border-gray-700 px-4 py-1">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="text-gray-400">
            Unity 2022.3.1f1 - Portfolio Scene
          </div>
          <div className="text-cyan-400">
            AGNES-CYBIL ATSUAH - VR/FRONTEND DEVELOPER
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto flex items-center px-6 py-3">
        {/* Project Name + Status */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
            <h1 className="text-lg font-mono font-bold tracking-wide">
              WELCOME
            </h1>
          </div>

          <div className="flex items-center space-x-2 bg-gray-700/80 px-3 py-1 rounded border border-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-xs">ACTIVE</span>
          </div>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        {!isMobile && (
          <>
            <ul className="flex space-x-8 font-mono text-sm ml-auto">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-200 hover:scale-105 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
              
              {/* More Dropdown */}
              <li 
                ref={moreRef}
                className="relative"
                onMouseEnter={() => !isMobile && setIsMoreOpen(true)}
                onMouseLeave={() => !isMobile && setIsMoreOpen(false)}
              >
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-200 hover:scale-105 relative group flex items-center"
                >
                  MORE
                  <svg 
                    className={`ml-1 w-3 h-3 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* Dropdown Menu */}
                {isMoreOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-lg border border-gray-600 rounded-lg shadow-xl py-2 z-50">
                    {moreItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            </ul>

            {/* Engine status */}
            <div className="hidden md:flex items-center space-x-2 ml-6 bg-gray-700/80 px-3 py-1 rounded border border-gray-600">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono text-xs">VR_READY</span>
            </div>
          </>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="ml-auto flex items-center space-x-4">
            {/* Engine status for mobile */}
            <div className="flex items-center space-x-2 bg-gray-700/80 px-3 py-1 rounded border border-gray-600">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono text-xs">VR_READY</span>
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-700/80 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span 
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-b border-gray-600 shadow-lg">
                <ul className="flex flex-col font-mono text-sm py-4">
                  {navItems.map((item) => (
                    <li key={item.name} className="border-b border-gray-700">
                      <a
                        href={item.href}
                        onClick={() => {
                          if (item.onClick) item.onClick();
                          handleNavClick();
                        }}
                        className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  
                  {/* More Dropdown in Mobile */}
                  <li className="border-b border-gray-700">
                    <button
                      onClick={() => setIsMoreOpen(!isMoreOpen)}
                      className="w-full text-left px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-200 flex items-center justify-between"
                    >
                      MORE
                      <svg 
                        className={`w-3 h-3 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile More Dropdown */}
                    {isMoreOpen && (
                      <div className="bg-gray-700/50">
                        {moreItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleNavClick}
                            className="block pl-10 pr-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-600/50 transition-all duration-200 border-t border-gray-600"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;