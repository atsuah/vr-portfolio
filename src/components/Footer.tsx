import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black text-white py-8 relative overflow-hidden border-t border-cyan-500/20">
      {/* Simplified Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Bottom Section */}
        <div className="text-center space-y-3">
          {/* Copyright */}
          <p className="text-gray-400 font-mono text-sm">
            © {currentYear} SITE BUILT BY AGNES-CYBIL_ATSUAH USING REACT, HOSTED BY GITHUB PAGES
          </p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;