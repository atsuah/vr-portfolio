import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

const Hero: React.FC = () => {
  const handleEnterExperience = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full bg-gray-900 overflow-hidden">
      {/* Unity/Unreal Style Viewport Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
      </div>

      {/* Viewport Border - Adjusted for header */}
      <div className="absolute inset-4 mt-4 border border-gray-600 rounded-lg pointer-events-none">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
      </div>

      <Canvas className="absolute inset-4 mt-4 rounded-lg">
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[0, 3, 0]} intensity={0.8} color="#4cc9f0" />
        
        {/* Main Scene Objects */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          {/* Central VR Headset */}
          <group position={[0, 0, 0]}>
            <mesh position={[0, 0.5, 0]}>
              <boxGeometry args={[1.2, 0.8, 0.3]} />
              <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.5, -0.4]}>
              <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
              <meshStandardMaterial color="#444444" metalness={0.6} />
            </mesh>
            {/* Lenses */}
            <mesh position={[0.3, 0.5, 0.15]}>
              <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
              <meshStandardMaterial color="#00a8ff" transparent opacity={0.7} />
            </mesh>
            <mesh position={[-0.3, 0.5, 0.15]}>
              <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
              <meshStandardMaterial color="#00a8ff" transparent opacity={0.7} />
            </mesh>
          </group>

          {/* Floating UI Elements */}
          <mesh position={[2, 1, -1]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
            <boxGeometry args={[0.5, 0.5, 0.1]} />
            <meshBasicMaterial color="#00ff88" wireframe />
          </mesh>
          
          <mesh position={[-2, -1, -2]} rotation={[0, Math.PI / 3, 0]}>
            <sphereGeometry args={[0.3, 8, 6]} />
            <meshBasicMaterial color="#ff6b6b" wireframe />
          </mesh>
        </Float>

        {/* Environment Grid Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[10, 10, 10, 10]} />
          <meshBasicMaterial color="#4a5568" wireframe opacity={0.3} transparent />
        </mesh>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>

      {/* Unity/Unreal Style Interface Overlay - Adjusted positions */}
      

        {/* Hierarchy Panel - Left - Moved down */}
        <div className="absolute top-20 left-4 w-48 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-3">
          <div className="text-cyan-400 font-mono text-sm mb-2">HIERARCHY</div>
          <div className="space-y-1 text-xs text-white font-mono">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Main Camera</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>VR Headset</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>UI Elements</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Environment</span>
            </div>
          </div>
        </div>

        {/* Inspector Panel - Right - Moved down */}
        <div className="absolute top-20 right-4 w-56 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-3">
          <div className="text-cyan-400 font-mono text-sm mb-2">INSPECTOR</div>
          <div className="space-y-2 text-xs text-white font-mono">
            <div>
              <div className="text-gray-400">Transform</div>
              <div className="ml-2">Position: (0.00, 0.00, 0.00)</div>
              <div className="ml-2">Rotation: (0.00, 0.00, 0.00)</div>
            </div>
            <div>
              <div className="text-gray-400">VR Settings</div>
              <div className="ml-2">Tracking: Active</div>
              <div className="ml-2">Rendering: Stereo</div>
            </div>
          </div>
        </div>

        {/* Console - Bottom */}
        <div className="absolute bottom-4 left-4 right-4 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-3">
          <div className="text-cyan-400 font-mono text-sm mb-2">CONSOLE</div>
          <div className="space-y-1 text-xs text-white font-mono">
            <div className="text-green-400">&gt; Scene loaded successfully</div>
            <div className="text-green-400">&gt; VR System initialized</div>
            <div className="text-yellow-400">&gt; Waiting for user input...</div>
            <div className="text-cyan-400">&gt; Ready to build immersive experiences</div>
          </div>
        </div>

        {/* Play Button - Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={handleEnterExperience}
            className="pointer-events-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono px-8 py-4 rounded-lg border border-cyan-400 transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30 flex items-center space-x-3 group"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-pulse"></div>
            <span className="text-lg">PLAY EXPERIENCE</span>
            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-pulse"></div>
          </button>
        </div>

        {/* Viewport Stats - Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded border border-gray-600 p-2">
          <div className="text-xs text-white font-mono space-y-1">
            <div>Triangles: 2.4k</div>
            <div>Vertices: 1.8k</div>
            <div>Textures: 12</div>
            <div className="text-green-400">VRAM: 128MB</div>
          </div>
        </div>
      
    </section>
  );
};

export default Hero;