import { IconProdRonasit } from "@/app/components/shared/icon/icon-prod";

interface ProjectItemsProps {
  backGround: String;
  textColor: String;
  iconColor?: String;
}

export const ProjectItems = ({ backGround, textColor, iconColor }: ProjectItemsProps) => {
  return (
    <div className={`p-10 rounded-xl w-full`} style={{ background: `${backGround}`, color: `${textColor}` }}>
      <div>
        <IconProdRonasit iconColor={iconColor} />
      </div>
      <div>
        <div>Custom web app development</div>
        <div>3—4 months</div>
      </div>
      <div>
        <div>
          A web app is a piece of software. Unlike a website, it encourages the user to manipulate the data presented in
          the web app. Its content is dynamic and interactive. If you need urgent web app development follow the link to
          learn more.
        </div>
      </div>
    </div>
  );
};
