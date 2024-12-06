import { Project, Skill } from "./model";

export interface ButtonProps {
  label: React.ReactNode | string | null;
  px: number;
  py: number;
}

export interface BlockProjectProp {
  data: Project;
}

export interface SeeMoreProjectProps {
  card: Project;
  index: number;
  layout?: boolean;
}

export interface ListTechStackProps {
  techStack: Skill[] | undefined;
}

export interface LinkPreviewProps {
  link: string;
  children?: React.ReactNode;
}

export interface TimelineEntryProps {
  title: string;
  content: React.ReactNode;
}
