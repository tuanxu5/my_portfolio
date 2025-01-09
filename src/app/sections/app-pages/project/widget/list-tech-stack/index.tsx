"use client";

import { ListTechStackProps } from "@/app/interface/props";
import Image from "next/image";
import styles from "./index.module.scss";

export const ListTechStack = ({ techStack }: ListTechStackProps) => {
  const widthScreen = window.innerWidth;

  return (
    <div className="flex mt-5 relative overflow-scroll flex-row" style={{ width: `calc(${widthScreen}px - 2rem)` }}>
      {techStack?.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-2`}
          style={{ transform: `translateX(-${index * 15}%)` }}
        >
          <div className={`${styles.circle} w-[6rem] h-[6rem]`}>
            <Image
              src={item.image}
              alt="React Icon"
              width={0}
              height={0}
              className="w-[2rem] sm:w-[2.5rem] rounded-md"
            />
          </div>
          <span className="font-semibold text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  );
};
