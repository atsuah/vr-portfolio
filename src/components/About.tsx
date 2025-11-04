import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Unity/Unreal Viewport Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        {/* Engine Grid */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Unity/Unreal Inspector Panel Style */}
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-600 overflow-hidden">
          {/* Inspector Header */}
          <div className="bg-gray-700 border-b border-gray-600 px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
              <h2 className="text-xl font-mono font-bold text-white">Developer_Profile</h2>
              <div className="flex-1"></div>
            </div>
          </div>

          <div className="p-6">
            {/* Profile Header with Image */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-lg border-2 border-cyan-500/50 overflow-hidden bg-gray-700">
         <img 
  src="/media/profile/profile-image.jpg" 
  alt="Agnes-Cybil"
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.src = "/media/fallback-profile.jpg";
  }}
/>
                </div>
                <div className="mt-2 text-left">
                  <div className="text-cyan-400 font-mono text-sm">Agnes-Cybil Atsuah</div>
                  <div className="text-gray-400 font-mono text-xs">XR Frontend Developer</div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="bg-gray-700/50 rounded p-2 border border-gray-600">
                    <div className="text-gray-400">Projects</div>
                    <div className="text-cyan-400">5+</div>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 border border-gray-600">
                    <div className="text-gray-400">Experience</div>
                    <div className="text-cyan-400">3+ years</div>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 border border-gray-600">
                    <div className="text-gray-400">VR Ready</div>
                    <div className="text-green-400">Yes</div>
                  </div>
                  <div className="bg-gray-700/50 rounded p-2 border border-gray-600">
                    <div className="text-gray-400">Status</div>
                    <div className="text-green-400">Open To Work</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspector Properties */}
            <div className="space-y-6">
              {/* Bio Section */}
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="text-cyan-400 font-mono text-sm mb-2">Bio</div>
                <div className="text-white font-mono text-sm leading-relaxed">
                  Immersive experience creator specializing in XR development, 
                  3D design, and interactive storytelling at the intersection of 
                  technology and creative expression. I thrive in environments that foster learning and self-actualisation. I enjoy creating through tech, photography and writing.
                </div>
              </div>

              {/* Focus Areas */}
              <div>
                <div className="text-cyan-400 font-mono text-sm mb-3">Specializations</div>
                <div className="space-y-2">
                  {[
                    { name: "Clean Aesthetics", type: "Low-Poly & High-Poly", icon: "🎨" },
                    { name: "Thoughtful UX", type: "Immersive Interfaces", icon: "💡" },
                    { name: "Engaging Interactions", type: "Spatial Computing", icon: "🕹️" },
                    { name: "Performance Optimization", type: "Real-time Rendering", icon: "⚡" }
                  ].map((area, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-700/30 rounded px-3 py-2 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{area.icon}</span>
                        <span className="text-white font-mono text-sm">{area.name}</span>
                      </div>
                      <span className="text-cyan-400 font-mono text-xs">{area.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Info */}
              <div>
                <div className="text-cyan-400 font-mono text-sm mb-3">Tech Stack</div>
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                    <div>
                      <div className="text-gray-400">Engine</div>
                      <div className="text-white">Unity</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Language</div>
                      <div className="text-white">C++</div>
                    </div>
                    <div>
                      <div className="text-gray-400">3D Tools</div>
                      <div className="text-cyan-400">Blender</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Platforms</div>
                      <div className="text-green-400">Meta, SteamVR</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Other tools</div>
                      <div className="text-green-400">VSCode, Canva, Creative Cloud</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inspector Footer */}
          <div className="bg-gray-700 border-t border-gray-600 px-4 py-2">
            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <div>Developer_Profile.cs</div>
              <div>Ready for immersive collaboration</div>
            </div>
          </div>
        </div>

        {/* Console Output Panel */}
        <div className="mt-6 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-600 overflow-hidden">
          <div className="bg-gray-700 border-b border-gray-600 px-4 py-2">
            <div className="text-cyan-400 font-mono text-sm">Console</div>
          </div>
          <div className="p-4">
            <div className="space-y-1 text-xs font-mono">
              <div className="text-green-400">&gt; Developer profile loaded successfully</div>
              <div className="text-green-400">&gt; VR systems initialized and ready</div>
              <div className="text-cyan-400">&gt; Skills and competencies verified</div>
              <div className="text-gray-400">&gt; Last update: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;