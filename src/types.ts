export interface Project {
  id: string;
  modNumber: string;
  title: string;
  subtitle: string;
  status: string;
  tech: string[];
  description: string;
  overview: string;
  problemStatement: string;
  solution: string;
  features: string[];
  architecture: string;
  challenges: string;
  keyLearnings: string;
  futureImprovements: string[];
  githubUrl: string;
  demoUrl?: string;
  metricsLabel: string;
  metricsValue: string;
  iconName: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  contributions: string[];
  skillsGained: string[];
}

export interface Leadership {
  id: string;
  title: string;
  organization: string;
  period: string;
  responsibilities: string[];
  highlights: string[];
}

export interface ResearchPaper {
  title: string;
  publication: string;
  publicationDate: string;
  researchObjective: string;
  problemStatement: string;
  technologies: string[];
  methodology: string;
  results: string;
  learningOutcomes: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  badgeCode: string;
}

export interface TimelineItem {
  id: string;
  stage: string;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'milestone' | 'leadership' | 'research' | 'career';
}

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  location: string;
  isFallback?: boolean;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
  isPinned?: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
