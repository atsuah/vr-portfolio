import { useState } from "react";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "../types";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Function to get project preview image
const getProjectPreview = (projectId: number) => {
  const previewImages: { [key: number]: string } = {
    0: "/vr-portfolio/media/TheFox/Fox.png", // The Fox
    1: "/vr-portfolio/media/VRMuseum/VRMuseum.jpg", // VR Museum
    2: "/vr-portfolio/media/Eggsile/Eggsile.png", // Eggsile
    3: "/vr-portfolio/media/LumicareVR/LumicareVR.png", // LumicareVR
    4: "/vr-portfolio/media/AssetCreation/AssetCreation.png" // Asset Creation
  };
  return previewImages[projectId] || "/vr-portfolio/media/fallback-preview.jpg";
};

  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden min-h-screen">
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
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Project Browser Header */}
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-600 mb-6 overflow-hidden">
          <div className="bg-gray-700 border-b border-gray-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-mono font-bold text-white">Projects</h2>
                <div className="flex items-center space-x-2 bg-gray-600 px-3 py-1 rounded border border-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
       
        </div>

        {/* Project Grid with Image Previews */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-600 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                 onClick={() => setSelectedProject(project.id)}>
              
              {/* Project Header */}
              <div className="bg-gray-700 border-b border-gray-600 px-4 py-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-mono font-bold text-sm truncate">{project.title}</h3>
                  <div className="flex items-center space-x-1">
                    {project.tags.includes('VR') && (
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    )}
                    {project.tags.includes('UNITY') && (
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    )}
                    {project.tags.includes('3D') && (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                <div className="text-gray-400 font-mono text-xs mt-1">Project ID: {project.id}</div>
              </div>

              {/* Project Preview Image */}
              <div className="relative aspect-video bg-gray-700 overflow-hidden">
                <img 
                  src={getProjectPreview(project.id)} 
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = "/vr-portfolio/media/fallback-preview.jpg";
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-black/80 text-cyan-400 font-mono text-xs px-3 py-2 rounded border border-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    INSPECT
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <p className="text-gray-300 font-mono text-sm line-clamp-2 mb-3">
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-cyan-300 px-2 py-1 rounded text-xs font-mono border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs font-mono border border-gray-600">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

              
              </div>
            </div>
          ))}
        </div>

        {/* Console Output */}
        <div className="mt-8 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-600 overflow-hidden">
          <div className="bg-gray-700 border-b border-gray-600 px-4 py-2">
            <div className="text-cyan-400 font-mono text-sm">Console</div>
          </div>
          <div className="p-4">
            <div className="space-y-1 text-xs font-mono">
              <div className="text-green-400">&gt; Project browser initialized</div>
              <div className="text-green-400">&gt; Loaded {PROJECTS.length} immersive projects</div>
              <div className="text-cyan-400">&gt; Select a project to view details</div>
              <div className="text-gray-400">&gt; Texture memory: Optimal</div>
            </div>
          </div>
        </div>
      </div>

{selectedProject !== null && (
  <ProjectModal
    project={PROJECTS.find(p => p.id === selectedProject)!}
    onClose={() => setSelectedProject(null)}
  />
)}
    </section>
  );
};