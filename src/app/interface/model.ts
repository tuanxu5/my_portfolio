import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ProjectItem {
  id: Number;
  title: String;
  descriptions: String;
  position: String;
  company: String;
  teamSize: String;
  linkRepository?: String;
  linkPreview?: String;
  linkInstallAndroid?: String;
  linkInstallIos?: String;
  techStack?: String[];
}

export interface Project {
  id: number;
  type?: string;
  company?: string;
  name?: string;
  descriptions: string;
  position: string;
  banner?: string | StaticImport;
  content: JSX.Element; 
}

export interface Experiences {
  title: string;
  content: any;
}

export interface Skill {
  id?: number;
  image: string; 
  name: string;
  width?: number;
  height?: number;
}

export interface ListTechStack {
  id: number;
  title: string;
  children: Skill[];
}