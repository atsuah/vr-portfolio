import React, { useEffect, useRef, useState } from "react";
import { Project, MediaType } from "../types";
import { PROJECTS } from "../data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNavigate?: (projectId: number) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose, 
  onNavigate 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(
    PROJECTS.findIndex(p => p.id === project.id)
  );

  const currentProject = PROJECTS[currentProjectIndex];

  // Navigation functions
  const goToNext = () => {
    setCurrentProjectIndex(prev => 
      prev === PROJECTS.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentProjectIndex(prev => 
      prev === 0 ? PROJECTS.length - 1 : prev - 1
    );
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Rest of your existing functions (getCanvaLink, vrRelevantTags, etc.)

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-full p-3 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200 z-10 group"
      >
        <span className="text-cyan-400 group-hover:text-white text-xl font-mono">←</span>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-full p-3 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200 z-10 group"
      >
        <span className="text-cyan-400 group-hover:text-white text-xl font-mono">→</span>
      </button>

      {/* Project Counter */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
        <span className="text-cyan-400 font-mono text-sm">
          {currentProjectIndex + 1} / {PROJECTS.length}
        </span>
      </div>

      {/* Your existing modal content, but use currentProject instead of project */}
      <div
        ref={modalRef}
        className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg rounded-2xl max-w-4xl w-full relative overflow-hidden border border-cyan-500/30 shadow-2xl"
      >
        {/* VR Header Bar - Updated to show current project */}
        <div className="bg-black/80 backdrop-blur-sm border-b border-cyan-500/30 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-mono font-bold text-cyan-300">
                {currentProject.title}.exe
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
            {/* Project Info - Use currentProject */}
            <div className="font-mono space-y-4">
              <div className="flex items-start">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-white">vr_project_info --id {currentProject.id}</span>
              </div>
              
              <div className="bg-black/40 rounded-lg p-4 border-l-4 border-cyan-500">
                <p className="text-cyan-100 leading-relaxed">
                  {currentProject.longDescription}
                </p>
              </div>
            </div>

            {/* Media Gallery - Use currentProject */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span>IMMERSIVE_MEDIA [{currentProject.media.length} ITEMS]</span>
              </div>
              
              <div className="space-y-4">
                {currentProject.media.map((m, idx) => {
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

            {/* Rest of your modal content using currentProject */}
            {/* ... */}
          </div>
        </div>
      </div>

      {/* Your existing CSS */}
      <style>{`
        @keyframes gridScroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};