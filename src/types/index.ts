export interface WorkExperienceProps {
  id: number;
  name: string;
  description?: string;
  position: string;
  period: string[];
  markdown?: string;
  imgSrc?: string;
}

export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  repoUrl: string;
  webUrl?: string;
  isTeam?: boolean;
  period: string[];
  stack: string[];
  markdown?: string;
  imgSrc?: string;
}

export interface DataProps {
  resumeTitle: {
    title: string;
  };
  information: {
    name: string;
    contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  };
  workExperience: WorkExperienceProps[];
  project: ProjectProps[];
  activity: {
    id: number;
    name: string;
    description: string;
    period: string[];
  }[];
  education: {
    id: number;
    name: string;
    description: string;
    period: string[];
  }[];
  certificate: {
    id: number;
    name: string;
    date: string;
    organizer: string;
  }[];
}
