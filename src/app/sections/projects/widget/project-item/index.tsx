import { IconProdRonasit } from "@/app/components/shared/icon/icon-prod";

interface ProjectItemsProps {
  backGround: string;
  textColor: string;
  iconColor?: string;
  title?: string;
  description?: string;
  seeMore: React.ReactNode;
}

export const ProjectItem = ({ backGround, textColor, iconColor, title, description, seeMore }: ProjectItemsProps) => {
  return (
    <div
      className={`flex flex-col justify-start p-10 rounded-2xl w-full`}
      style={{ background: `${backGround}`, color: `${textColor}` }}
    >
      <div>
        <IconProdRonasit iconColor={iconColor} />
      </div>
      <div className="text-[32px] leading-[38px] mt-2 font-semibold line-clamp-1">{title}</div>
      <div className="mt-5">
        <div className="text-[16px] line-clamp-4">{description}</div>
      </div>
      {seeMore}
    </div>
  );
};
