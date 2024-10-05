import { SvgIcon } from "@/app/assets/icons";
import Image from "next/image";
import styles from "./index.module.scss";

export const ListTechStack = () => {
  return (
    <div className="flex mt-5 relative">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-2`}
          style={{ transform: `translateX(-${index * 15}%)` }}
        >
          <div className={styles.circle}>
            <Image src={SvgIcon.IconStackReactJs} alt="React Icon" width={70} height={70} />
          </div>
          <span className="font-semibold text-[14px]">React</span>
        </div>
      ))}
    </div>
  );
};
