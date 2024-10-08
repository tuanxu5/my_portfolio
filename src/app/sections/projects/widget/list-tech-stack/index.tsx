import { SvgIcon } from "@/app/assets/icons";
import Image from "next/image";
import styles from "./index.module.scss";

export const ListTechStack = ({ techStack }: { techStack: String[] | undefined }) => {
  return (
    <div className="flex mt-5 relative">
      {techStack?.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-2`}
          style={{ transform: `translateX(-${index * 15}%)` }}
        >
          <div className={styles.circle}>
            <Image src={SvgIcon.IconStackReactJs} alt="React Icon" width={20} height={20} />
          </div>
          <span className="font-semibold text-[14px]">{item}</span>
        </div>
      ))}
    </div>
  );
};
