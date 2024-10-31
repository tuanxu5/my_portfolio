import { SvgIcon } from "@/app/assets/icons";
import Image from "next/image";
import styles from "./index.module.scss";

export const ListTechStack = ({ techStack }: { techStack: String[] | undefined }) => {
  return (
    <div className="flex mt-5 relative overflow-scroll w-[40vh]">
      {techStack?.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-2`}
          style={{ transform: `translateX(-${index * 15}%)` }}
        >
          <div className={`${styles.circle} w-[6rem] h-[6rem]`}>
            <Image src={SvgIcon.IconStackReactJs} alt="React Icon" width={0} height={0} className="w-[2.5rem]" />
          </div>
          <span className="font-semibold text-sm">{item}</span>
        </div>
      ))}
    </div>
  );
};
