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
  link: string;
  techStacks: string[];
  role: string;
  githubLink?: string;
  image: string;
}

export interface TableConfig {
  headers: string[];
  keys: string[];
}

export interface TableProps {
  content: ExperienceList[] | EducationList[];
  type: "experience" | "education";
  title: string;
}

export interface ContactList {
  index: number;
  link: string;
  platform: string;
  icon: React.ReactNode;
  description?: string;
}