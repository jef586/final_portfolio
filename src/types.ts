export interface NavItem {
  title: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory = 'qa' | 'frontend' | 'backend' | 'devops';

export interface CategoryGroup {
  key: SkillCategory;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  url: string;
  repo?: string;
}

export interface ImpactMetric {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  url: string;
  label: string;
  icon: string;
}
