export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  period?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  percentage?: string;
}

export interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: string;
  doi: string;
  abstract: string;
  link?: string;
}

export interface Award {
  title: string;
  issuer: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  resumeUrl?: string;
  social: {
    linkedin: string;
    github: string;
    website: string;
  };
}