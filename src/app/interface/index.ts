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
  banner?: string | StaticImport;
  children?: ProjectItem[];
}

export interface Experiences {
  title: string;
  content: any;
}
