// Central type definitions.
// Every interface (Desktop, Terminal, Scroll) reads from the same data
// objects typed here — there is exactly one shape for each kind of content.

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  location?: string;
  availability?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  profileImage?: string;
  resumeUrl?: string;
};

export type Links = {
  github?: string;
  linkedin?: string;
  leetcode?: string;
  codeforces?: string;
  hackerrank?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  resumeUrl?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  companyUrl?: string;
  certificateUrl?: string;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  features: string[];
  technicalHighlights?: string[];
  image?: string;
  github?: string;
  liveDemo?: string;
  website?: string;
  appStore?: string;
  playStore?: string;
};

export type SkillCategory = {
  id: string;
  category: string;
  items: string[];
};

export type CodingProfile = {
  id: string;
  platform: string;
  username?: string;
  statistic?: string;
  description?: string;
  url?: string;
};

export type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  branch?: string;
  cgpa?: string;
  startDate?: string;
  endDate?: string;
  achievements?: string[];
};
