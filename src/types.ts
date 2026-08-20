export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'certifications' | 'contact';

export interface ProjectProblemStatement {
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
}

export interface ProjectWorkflow {
  pipeline: string[];
  equation?: string;
  equationNote?: string;
  stages: { name: string; desc: string }[];
}

export interface ProjectTechCategorized {
  backend?: string[];
  frontend?: string[];
  infrastructure?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  fullDescription?: string;
  image: string;
  isCapstone?: boolean;
  features?: string[];
  techStack?: string[];
  techStackCategorized?: ProjectTechCategorized;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
  problemStatement?: ProjectProblemStatement;
  workflow?: ProjectWorkflow;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  issuerColor: string;
  code?: string;
  subtitle: string;
  date: string;
  isVerified: boolean;
  skills: string[];
  credentialId?: string;
  verifyUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'ambassador' | 'research' | 'team';
  highlights?: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  color?: string;
  category: 'core' | 'ai' | 'cloud' | 'db' | 'tool';
}

export interface ProficiencyItem {
  name: string;
  percentage: number;
}

export interface ToolItem {
  name: string;
  icon: string;
  category: string;
}
