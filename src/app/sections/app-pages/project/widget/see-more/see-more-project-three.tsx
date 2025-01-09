import { SvgIcon } from "@/app/assets/icons";
import { LinkPreview } from "@/app/components/shared/link-preview/link-preview";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectThree = () => {
  return (
    <div>
      <div className="font-semibold text-2xl mt-10">
        <span>🤝 Team size: 1 personal</span>
      </div>
      <div className="w-fit mt-5 text-base">
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
            { image: SvgIcon.IconStackReactJs, name: "React Lib" },
            { image: SvgIcon.IconStackSass, name: "Sass" },
            { image: SvgIcon.IconStackDocusaurus, name: "Docusaurus" },
            { image: SvgIcon.IconStackStyled, name: "Styled" },
            { image: SvgIcon.IconStackStoryBook, name: "Storybook" }
          ]}
        />
      </div>
    </div>
  );
};
