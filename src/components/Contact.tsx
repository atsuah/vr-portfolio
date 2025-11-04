import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    console.log('Email link clicked');
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#1a202c] to-[#0B1120] text-white py-16 px-6 relative overflow-hidden"
    >
      {/* Simple Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* VR-style Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded border border-cyan-500/30 mb-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-mono text-sm">CONNECTION_READY</span>
          </div>
          <h2 className="text-3xl font-bold font-mono text-cyan-300">CONTACT_SYSTEM</h2>
          <p className="text-gray-400 font-mono mt-2">INITIATE_IMMERSIVE_COLLABORATION</p>
        </div>

        {/* Contact Cards - Better Alignment */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-lg mx-auto">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/agnes-cybil-a-b9585a1bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 group cursor-pointer min-h-[120px]"
          >
            <FaLinkedin className="text-3xl text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />
            <div className="text-center">
              <div className="text-white font-mono text-sm mb-1">LINKEDIN</div>
              <div className="text-blue-400 font-mono text-xs">PROFESSIONAL_NETWORK</div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:agnescybilatsuah@gmail.com?subject=VR Portfolio Inquiry&body=Hello Agnes, I came across your VR portfolio and would like to connect about..."
            onClick={handleEmailClick}
            className="flex-1 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 group cursor-pointer min-h-[120px]"
          >
            <FaEnvelope className="text-3xl text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors" />
            <div className="text-center">
              <div className="text-white font-mono text-sm mb-1">EMAIL</div>
              <div className="text-cyan-400 font-mono text-xs">DIRECT_COMMS</div>
            </div>
          </a>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20 max-w-md mx-auto">
          <div className="font-mono text-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-cyan-400">RESPONSE_PROTOCOL:</span>
              <span className="text-green-400">ACTIVE_9-7_MON-FRI</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cyan-400">COMMS_STATUS:</span>
              <span className="text-green-400">ENCRYPTED</span>
            </div>
          </div>
        </div>

        {/* Status Footer */}
        <div className="mt-8 flex justify-center items-center">
          <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-mono text-sm">AVAILABLE_FOR_VR_PROJECTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;