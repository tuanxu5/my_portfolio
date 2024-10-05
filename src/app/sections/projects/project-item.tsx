import { IconProdRonasit } from "@/app/components/shared/icon/icon-prod";
import { ProjectDetail } from "./project-detail";

interface ProjectItemsProps {
  backGround: String;
  textColor: String;
  iconColor?: String;
}

export const ProjectItems = ({ backGround, textColor, iconColor }: ProjectItemsProps) => {
  return (
    <div
      className={`flex flex-col justify-start p-10 rounded-2xl w-full`}
      style={{ background: `${backGround}`, color: `${textColor}` }}
    >
      <div>
        <IconProdRonasit iconColor={iconColor} />
      </div>
      <div className="text-[32px] leading-[38px] mt-2 font-semibold">Custom web app development</div>
      <div className="mt-5">
        <div className="text-[16px]">
          A web app is a piece of software. Unlike a website, it encourages the user to manipulate the data presented in
          the web app. Its content is dynamic and interactive. If you need urgent web app development follow the link to
          learn more.
        </div>
      </div>
      <ProjectDetail />
    </div>
  );
};
