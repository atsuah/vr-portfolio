export enum MediaType {
  Image = "image",
  GIF = "gif",
  Video = "video",
}

export interface Media {
  type: MediaType;
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  media: Media[];
  links: { live: string; github: string };
}
