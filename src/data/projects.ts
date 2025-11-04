import { MediaType, Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "THE_FOX",
    description:
      "A cozy whimsical bedroom where hard-surface precision meets organic charm, crafted with modifiers, sculpting, and a dancing fox.",
    longDescription:
      "Inspired by Animal Crossing, Studio Ghibli films, the Dancing Fox short story, and Tunic. Merged nature with fantasy while maintaining a low-poly style. Experimented with afro hair modelling.",
    tags: ["BLENDER", "3D_MODELING", "LOW-POLY", "ANIMATION", "DESIGN"],
    media: [
      { type: MediaType.Video, src: "/media/TheFox/TheFoxTrailer.mp4", alt: "The Fox Trailer" }
    ],
    links: { live: "#", github: "#" }
  },
  {
    id: 1,
    title: "VR_MUSEUM",
    description:
      "Immersive VR Museum: Transforming History Education. A Unity & Meta XR-powered experience for outreach programs.",
    longDescription:
      "An educational VR experience in Unity with Meta XR SDK. Designed for students and educators to explore historical artifacts interactively.",
    tags: ["UNITY", "VR", "EDUCATIONAL", "XR", "MUSEUM"],
    media: [
      { type: MediaType.Image, src: "/media/VRMuseum/VRMuseum.jpg", alt: "VR Museum Screenshot" }
    ],
    links: { live: "#", github: "#" }
  },
  {
    id: 2,
    title: "EGGSILE",
    description:
      "A whimsical co-op puzzle-platformer where two penguins must return their ever-growing egg safely to their colony.",
    longDescription:
      "Players must navigate treacherous icy terrain, tricky platforms, and clever environmental puzzles, balancing the egg's fragile form. Teamwork is key.",
    tags: ["GAME_DESIGN", "CO-OP", "PUZZLE", "PLATFORMER", "UNITY"],
    media: [
      { type: MediaType.Video, src: "/media/Eggsile/EggsileTrailer.mp4", alt: "Eggsile Trailer" }
    ],
    links: { live: "#", github: "#" }
  },
  {
    id: 3,
    title: "LUMICARE_VR",
    description:
      "Enhancing therapeutic VR experiences by improving usability, interaction, and realism.",
    longDescription:
      "A UX-driven app targeted at users seeking therapeutic VR solutions. Focus on immobilized users and improving usability, interaction, and realism through testing.",
    tags: ["UNITY", "VR", "THERAPEUTIC", "UX", "ACCESSIBILITY"],
    media: [
      { type: MediaType.Video, src: "/media/LumicareVR/LumicareVR.mp4", alt: "Lumicare VR Video" }
    ],
    links: { live: "#", github: "#" }
  },
  {
    id: 4,
    title: "ASSET_CREATION",
    description:
      "3rd-person Unity project with textured terrains, dynamic skies, particle systems, animated Mixamo characters, and immersive audio.",
    longDescription:
      "Created textured grass terrains, hills, sunset skyboxes, free village house assets, leaves via particle systems, Mixamo characters, and immersive sound.",
    tags: ["UNITY", "3D", "ANIMATION", "ENVIRONMENT", "ASSETS"],
    media: [
      { type: MediaType.Video, src: "/media/AssetCreation/GameRecording.mp4", alt: "Asset Creation Recording" }
    ],
    links: { live: "#", github: "#" }
  }
];