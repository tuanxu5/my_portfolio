import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectTwo = () => {
  return (
    <div>
      <div className="font-semibold text-2xl mt-10">
        <span>
          🤝 Team size: 15 personal (2 frontend, 6 backend, 2 tester, 3 business analyst, 1 product owner, 1 leader)
        </span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div>👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
        <div>👉 Link Preview: Confidential and cannot be disclosed 🙅</div>
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
            { image: SvgIcon.IconStackReactJs, name: "ReactJs" },
            { image: SvgIcon.IconStackAntd, name: "Antd" },
            { image: SvgIcon.IconStackSass, name: "Sass" },
            { image: SvgIcon.IconStackGraphql, name: "GraphQL" },
            { image: SvgIcon.IconStackApollo, name: "Apollo" },
            { image: SvgIcon.IconStackNx, name: "Nx" }
          ]}
        />
      </div>
    </div>
  );
};
