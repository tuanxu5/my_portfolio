"use client";

import { LinkPreview } from "@/app/components/shared/link-preview/link-preview";
import { useState } from "react";
import { ListTechStack } from "../../widget/list-tech-stack";

export const SeeMoreProjectThree = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="font-semibold text-[24px] mt-10">
        <span>🤝 Team size: 1 personal</span>
      </div>
      <div className="w-fit mt-5 text-[16px]">
        <div>
          👉 Link Repository: <LinkPreview link="https://docs-tx-design.pages.dev/" />
        </div>
        <div className="mt-2">
          👉 Link Docs: <LinkPreview link="https://docs-tx-design.pages.dev/" />
        </div>
        <div className="mt-2">
          👉 Link Storybook: <LinkPreview link="https://storybook-tx-design.pages.dev/" />
        </div>
        <div className="mt-2">
          👉 Link npm: <LinkPreview link="https://www.npmjs.com/package/tx-design-ui" />
        </div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium">
          Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant,
          libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit
          vulgate.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack techStack={["React Lib", "Sass", "Docusaurus", "Styled", "Storybook"]} />
      </div>
    </div>
  );
};
