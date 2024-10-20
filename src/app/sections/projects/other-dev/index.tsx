"use client";
import { ImageDesign } from "@/app/components/shared/banner/image-design";
import TitleComponent from "@/app/components/shared/title";
import { ProjectItem } from "../widget/project-item";
import { SeeMoreProjectOne } from "./see-more/see-more-project-one";
import { SeeMoreProjectThree } from "./see-more/see-more-project-three";
import { SeeMoreProjectTwo } from "./see-more/see-more-project-two";

export default function ProjectOtherDevSection() {
  return (
    <section className="flex flex-col gap-[120px] h-full items-center">
      <TitleComponent title="Other" subTitleBig="Design, Tools, Extensions , ..." />
      <div className="flex flex-wrap flex-col mt-[-80px] w-full">
        <h5>
          Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant,
          libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit
          vulgate.
        </h5>
        <ImageDesign />
        <div className="mt-20 grid grid-cols-2 gap-x-10 gap-y-6">
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectOne />}
            title="Figma Tx Design  UI"
            description="Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant, libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit vulgate."
          />
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectTwo />}
            title="Custom Theme Visual Code"
            description="Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant, libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit vulgate."
          />
          <ProjectItem
            backGround="#d4ecfe"
            textColor="var(--primary-color)"
            seeMore={<SeeMoreProjectThree />}
            title="Coding Convention"
            description="Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant, libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit vulgate."
          />
        </div>
      </div>
    </section>
  );
}
