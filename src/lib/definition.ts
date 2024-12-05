export interface ExperienceList {
  index: number;
  companyName: string;
  role: string;
  duration: string;
  information: string;
  performance?: string[];
}

export interface EducationList {
  index: number;
  duration: string;
  institution: string;
  major: string;
  finalScore: string;
  websiteUrl?: string;
  certificationUrl?: string;
  image: string;
}

export interface ProjectList {
  index: number;
  title: string;
  link?: string;
  techStacks: string[];
  role: string;
  githubLink?: string;
  image: string;
  description: string;
}

export interface CertificationList {
  index: number;
  title: string;
  platform: string;
  issued: string;
  link?: string;
  image?: string;
  description?: string;
}

export interface ContactList {
  index: number;
  link: string;
  platform: string;
  icon: React.ReactNode;
  description?: string;
}

export interface TechStackList {
  index: number;
  name: string;
  type: string;
}
