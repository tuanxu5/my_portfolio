"use client";
import { ImageDesign } from "@/app/components/shared/banner/image-design";
import TitleComponent from "@/app/components/shared/title";
import { AppleCardsCarouselDemo } from "../widget/smooth-scroll";
import { SeeMoreProjectOne } from "./see-more/see-more-project-one";
import { SeeMoreProjectThree } from "./see-more/see-more-project-three";
import { SeeMoreProjectTwo } from "./see-more/see-more-project-two";

export default function ProjectOtherDevSection() {
  const data = [
    {
      category: "Personal Project",
      title: "Figma Tx Design  UI",
      position: "Project Creator",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectOne />
    },
    {
      category: "Personal Project",
      title: "Custom Theme Visual Code",
      position: "Project Creator",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectTwo />
    },
    {
      category: "Personal Project",
      title: "Coding Convention",
      position: "Project Creator",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectThree />
    }
  ];
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
        <AppleCardsCarouselDemo data={data} />
      </div>
    </section>
  );
}
