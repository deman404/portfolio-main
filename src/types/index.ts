export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
  date: string;
  clientName?: string;
  projectUrl?: string;
  content?: {
    overview: string;
    challenge: string;
    solution: string | string[];
    results?: string | string[];
    technologies: string[];
    gallery: string[];
  };
}

export interface Skill {
  name: string;
  level: number;
  category: 'design' | 'development' | 'tools';
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatarUrl?: string;
}