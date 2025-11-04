// Create a new component: components/LearningJourney.tsx
const LearningJourney: React.FC = () => {
  return (
    <section id="learning" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-mono text-cyan-400 mb-8">Learning_Journey</h2>
        <div className="space-y-6">
          {[
            { 
              course: "Advanced VR Development", 
              skills: ["Unity XR", "Meta SDK", "Spatial Design"],
              projects: "VR Museum, LumicareVR"
            },
            { 
              course: "3D Modeling & Animation", 
              skills: ["Blender", "Low-Poly Art", "Character Design"],
              projects: "The Fox, Asset Creation"
            },
            { 
              course: "Interactive Storytelling", 
              skills: ["Narrative Design", "User Experience", "Game Mechanics"],
              projects: "Eggsile, Interactive Exhibits"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded border border-gray-600">
              <h3 className="text-cyan-300 font-mono">{item.course}</h3>
              <p className="text-sm text-gray-400 mt-2">Applied in: {item.projects}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.skills.map(skill => (
                  <span key={skill} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};