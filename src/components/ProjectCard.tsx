import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const firstMedia = project.media[0];

  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-[1.02] transition-all duration-300 flex flex-col border border-cyan-500/30 hover:border-cyan-400/50 group relative"
    >
      {/* VR Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* VR Status Indicator */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full border border-green-500/50">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-green-400 font-mono">VR READY</span>
        </div>
      </div>

      <div className="aspect-video w-full overflow-hidden relative">
        {/* VR Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
             style={{
               backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
               backgroundSize: '20px 20px'
             }} />
        
        {firstMedia.type === "video" ? (
          <video
            src={firstMedia.src}
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <img
            src={firstMedia.src}
            alt={firstMedia.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        
        {/* VR Hover Effect */}
        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-all duration-500" />
      </div>

      <div className="p-6 flex-1 flex flex-col relative z-10">
        {/* Project Header with Terminal Style */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold font-mono text-cyan-100 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <div className="text-xs text-cyan-400/70 font-mono bg-black/30 px-2 py-1 rounded">
            ID:{project.id}
          </div>
        </div>

        <p className="text-gray-300 flex-1 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* VR-style Tags */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200 font-mono cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* VR Interaction Hint */}
        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between text-xs text-cyan-400/60">
            <span className="font-mono">CLICK TO EXPLORE</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};