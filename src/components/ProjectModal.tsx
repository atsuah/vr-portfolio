import React, { useEffect, useRef } from "react";
import { Project, MediaType } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Function to get Canva link based on project
  const getCanvaLink = (projectId: number) => {
    const canvaLinks: { [key: number]: string } = {
      0: "https://www.canva.com/design/DAGl64_Ebyk/X2k-sO32_8Ov4-aSMcWH6w/view?utm_content=DAGl64_Ebyk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd468ab2c8a",
      1: "https://www.canva.com/design/DAGqpUkze_k/cAVIJn5dqR1bXtyNpx0F5g/edit", 
      2: "https://www.canva.com/design/DAGfcod8R3c/THd6FP1Y5BY6V7qsMczJuA/view?utm_content=DAGfcod8R3c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc240b2b111",
      3: "https://www.canva.com/design/DAGiEfU-F44/jS6qYo_2p57Snyw0IIDhgw/view?utm_content=DAGiEfU-F44&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h951854f4ba",
      4: "https://www.canva.com/design/EXAMPLE_ASSET_CREATION/slide"
    };
    return canvaLinks[projectId] || "#";
  };

   // Filter to only show VR-related tags
  const vrRelevantTags = project.tags.filter(tag => 
    tag.includes('VR') || 
    tag.includes('UNITY') || 
    tag.includes('XR') ||
    tag.includes('3D') ||
    tag.includes('IMMERSIVE') ||
    tag.includes('INTERACTIVE') ||
    tag.includes('AR') ||
    tag.includes('MIXED_REALITY')
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
               animation: 'gridScroll 20s linear infinite'
             }} />
      </div>

      <div
        ref={modalRef}
        className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg rounded-2xl max-w-4xl w-full relative overflow-hidden border border-cyan-500/30 shadow-2xl"
      >
        {/* VR Header Bar */}
        <div className="bg-black/80 backdrop-blur-sm border-b border-cyan-500/30 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-mono font-bold text-cyan-300">
                {project.title}.exe
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg transition-all duration-200 group"
            >
              <span className="text-red-400 group-hover:text-white font-mono text-lg">×</span>
            </button>
          </div>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Project Info in Terminal Style */}
            <div className="font-mono space-y-4">
              <div className="flex items-start">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">vr_project_info --id {project.id}</span>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4 border-l-4 border-cyan-500">
                <p className="text-cyan-100 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* Media Gallery */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span>IMMERSIVE_MEDIA [{project.media.length} ITEMS]</span>
              </div>
              
              <div className="space-y-4">
                {project.media.map((m, idx) => {
                  switch (m.type) {
                    case MediaType.Image:
                    case MediaType.GIF:
                      return (
                        <div key={idx} className="relative group">
                          <div className="absolute inset-0 bg-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <img 
                            src={m.src} 
                            alt={m.alt} 
                            className="w-full rounded-xl border border-white/10 shadow-lg" 
                          />
                        </div>
                      );
                    case MediaType.Video:
                      return (
                        <div key={idx} className="relative group">
                          <div className="absolute inset-0 bg-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <video
                            src={m.src}
                            controls
                            className="w-full rounded-xl border border-white/10 shadow-lg"
                          />
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>

            {/* VR-Relevant Content Only */}
            {vrRelevantTags.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-white/10">
                {/* VR Tech Stack */}
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-2">XR_TECHNOLOGIES</div>
                  <div className="flex flex-wrap gap-2">
                    {vrRelevantTags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full text-sm border border-cyan-500/30 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* VR Actions */}
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-2">IMMERSIVE_ACTIONS</div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={getCanvaLink(project.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-600 hover:bg-cyan-500 text-white font-mono px-4 py-2 rounded-lg border border-cyan-400 transition-all text-sm hover:scale-105 cursor-pointer"
                    >
                      VIEW_XR_DOCUMENTATION
                    </a>
                  </div>
                </div>

                {/* VR Status Indicator */}
                <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/30">
                  <div className="flex items-center justify-between font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400">XR_READY</span>
                    </div>
                    <div className="text-cyan-300">
                      IMMERSION_LEVEL: {project.tags.includes('VR') ? 'HIGH' : 
                                      project.tags.includes('AR') ? 'MEDIUM' : 
                                      project.tags.includes('3D') ? 'ENHANCED' : 'STANDARD'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Fallback for non-VR projects */}
            {vrRelevantTags.length === 0 && (
              <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/30 text-center">
                <div className="font-mono text-cyan-300 text-sm">
                  PROJECT_NOT_VR_OPTIMIZED
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  Standard interactive experience
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add CSS for grid animation */}
      <style>{`
        @keyframes gridScroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};
