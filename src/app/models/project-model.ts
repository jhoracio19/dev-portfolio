export type ProjectCategory = 'clients' | 'platforms' | 'tools' | 'experiments';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  demoUrl?: string;
}
