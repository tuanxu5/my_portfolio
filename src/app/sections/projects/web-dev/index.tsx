"use client";
import { ImageWeb } from "@/app/components/shared/banner/image-web";
import TitleComponent from "@/app/components/shared/title";

import { AppleCardsCarouselDemo } from "../widget/smooth-scroll";
import { SeeMoreProjectFive } from "./see-more/see-more-project-five";
import { SeeMoreProjectFour } from "./see-more/see-more-project-four";
import { SeeMoreProjectOne } from "./see-more/see-more-project-one";
import { SeeMoreProjectSix } from "./see-more/see-more-project-six";
import { SeeMoreProjectThree } from "./see-more/see-more-project-three";
import { SeeMoreProjectTwo } from "./see-more/see-more-project-two";

export default function ProjectWebDevSection() {
  const data = [
    {
      category: "Personal Project",
      title: "My Portfolio",
      position: "Project Creator",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectOne />
    },
    {
      category: "Hong Anh Computer",
      title: "Ops Hong Anh",
      position: "Frontend Developer",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectTwo />
    },
    {
      category: "Libraries UI For React By Me",
      title: "Tx Design UI",
      position: "Project Creator",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectThree />
    },
    {
      category: "Freelancer Project",
      title: "SPG Manager",
      position: "Frontend Developer",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectFour />
    },
    {
      category: "Personal Project",
      title: "Collection of Useful Tools for Frontend Dev",
      position: "Project Creator",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectFive />
    },
    {
      category: "Personal Project",
      title: "TikTok Clone Template",
      position: "Project Creator",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <SeeMoreProjectSix />
    }
  ];
  return (
    <section className="flex flex-col gap-[120px] h-full items-center">
      <TitleComponent title="Development" subTitleBig="Web Development" />
      <div className="flex flex-wrap flex-col mt-[-80px] w-full">
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet ipsum neque, iste accusantium quam
          doloremque quisquam aperiam odit inventore laudantium necessitatibus illum eum delectus vel modi soluta
          reprehenderit nostrum.
        </h5>
        <ImageWeb />
        <AppleCardsCarouselDemo data={data} />
      </div>
    </section>
  );
}
