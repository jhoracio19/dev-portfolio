export interface Hackathon {
  id: string;
  name: string;
  projectCreated: string;
  description: string;
  date: string;
  technologies: string[];
  certificateUrl?: string;
  repoUrl?: string;
  achievement?: string;
  prize?: string;
  demoUrls?: { label: string; url: string; icon: string }[];
}
