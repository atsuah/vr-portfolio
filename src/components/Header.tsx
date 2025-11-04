import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Check screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical breakpoint for mobile
    };

    // Check initially
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close menu when clicking on a link
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: "SCENE", href: "#", onClick: scrollToTop },
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
    {
      name: "MORE",
      href: "https://www.canva.com/design/DAG3Byt1_jM/hdFa65PV-qdIruoDfSo06g/edit?utm_content=DAG3Byt1_jM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      external: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800/90 backdrop-blur-lg text-white z-50 border-b border-gray-600">
      
      
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
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-200 hover:scale-105 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
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
                    <li key={item.name} className="border-b border-gray-700 last:border-b-0">
                      <a
                        href={item.href}
                        onClick={() => {
                          if (item.onClick) item.onClick();
                          handleNavClick();
                        }}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="block px-6 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
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