import { IconProdRonasit } from "@/app/components/shared/icon/icon-prod";
import { ProjectItem } from "@/app/interface";
import { ProjectDetail } from "./project-detail";

interface ProjectItemsProps {
  backGround: String;
  textColor: String;
  iconColor?: String;
  project: ProjectItem;
}

export const ProjectItems = ({ backGround, textColor, iconColor, project }: ProjectItemsProps) => {
  return (
    <div
      className={`flex flex-col justify-start p-10 rounded-2xl w-full`}
      style={{ background: `${backGround}`, color: `${textColor}` }}
    >
      <div>
        <IconProdRonasit iconColor={iconColor} />
      </div>
      <div className="text-[32px] leading-[38px] mt-2 font-semibold">{project.title}</div>
      <div className="mt-5">
        <div className="text-[16px] line-clamp">{project.descriptions}</div>
      </div>
      <ProjectDetail project={project} />
    </div>
  );
};
