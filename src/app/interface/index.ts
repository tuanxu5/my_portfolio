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
  id: String;
  type: String;
  name: String;
  descriptions: String;
  banner: React.ReactNode;
  children: ProjectItem[];
}

export interface Experiences {
  title: string;
  content: any;
}
