"use client";

import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectSix = () => {
  return (
    <div>
      <div className="font-semibold text-[24px] mt-10">
        <span>🤝 Package: tx_dropdown_menu</span>
      </div>
      <div className="w-fit mt-5 text-[16px]">
        <div className="">👉 Link repository: https://github.com/tuanxu5/tx-dropdown-menu</div>
        <div className="mt-2">👉 Link preview: https://pub.dev/packages/tx_dropdown_menu</div>
        <div className="mt-2">👉 Total downloads: 200+ downloads</div>
        <div className="mt-2">👉 Total likes: 5+ likes</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium">
          This is a Flutter custom powerful lightweight drop-down filter menu package, which supports iOS and Android.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack techStack={[{ image: SvgIcon.IconStackFlutter, name: "Flutter" }]} />
      </div>
    </div>
  );
};
