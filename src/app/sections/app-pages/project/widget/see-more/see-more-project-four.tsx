"use client";

import { SvgIcon } from "@/app/assets/icons";
import { ButtonPrimary } from "@/app/components/shared/button/button-primary";
import Image from "next/image";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectFour = () => {
  return (
    <div>
      <div className="flex gap-4 w-fit">
        <ButtonPrimary
          label={
            <span className="flex gap-2 items-center">
              <Image
                src="https://ronasit.com/_next/static/media/ios.f07497a4.svg"
                alt=""
                width={0}
                height={0}
                className="w-[1.5rem] h-[1.5rem]"
              />
              <span className="text-sm">Download for iOS</span>
            </span>
          }
          px={7}
          py={4}
        />
        <ButtonPrimary
          label={
            <span className="text-sm flex gap-2 items-center">
              <Image
                src="https://ronasit.com/_next/static/media/android.4bd66b8b.svg"
                alt=""
                width={0}
                height={0}
                className="w-[1.5rem] h-[1.5rem]"
              />
              <span className="text-sm">Download for Android</span>
            </span>
          }
          px={7}
          py={4}
        />
      </div>
      <div className="font-semibold text-2xl mt-20">
        <span>
          🤝 Team size: 15 personal (2 mobile, 6 backend, 2️ tester, 3️ business analyst, 1️ product owner, 1️ leader)
        </span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div className="">👉 Link Repository: {"Confidential and cannot be disclosed 🙅"}</div>
        <div className="mt-2">👉 Link Preview: {"Confidential and cannot be disclosed 🙅"}</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium text-base">
          Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant,
          libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit
          vulgate.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack
          techStack={[
            { image: SvgIcon.IconStackFlutter, name: "Flutter" },
            { image: SvgIcon.IconStackReactJs, name: "BloC" },
            { image: SvgIcon.IconStackReactJs, name: "Cubit" },
            { image: SvgIcon.IconStackReactJs, name: "GetX" },
            { image: SvgIcon.IconStackReactJs, name: "Fvm" },
            { image: SvgIcon.IconStackGraphql, name: "GraphQL" },
            { image: SvgIcon.IconStackReactJs, name: "RxDart" }
          ]}
        />
      </div>
    </div>
  );
};
