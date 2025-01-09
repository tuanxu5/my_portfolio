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
          👉 Link repository: <LinkPreview link="https://github.com/tuanxu5/tx-design-ui" />
        </div>
        <div className="mt-2">
          👉 Link docs: <LinkPreview link="https://docs-tx-design.pages.dev/" />
        </div>
        <div className="mt-2">
          👉 Link storybook: <LinkPreview link="https://storybook-tx-design.pages.dev/" />
        </div>
        <div className="mt-2">
          👉 Link download: <LinkPreview link="https://www.npmjs.com/package/tx-design-ui" />
        </div>
        <div className="mt-2">👉 Total downloads: 250+ downloads</div>
        <div className="mt-2">👉 Total weekly downloads: 3+</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium text-base">
          Tx Design UI Libraries is a modern and versatile UI library designed specifically for ReactJs applications.
          Built with performance, scalability, and developer experience in mind, this library offers a comprehensive set
          of components that are easy to integrate, fully customizable, and optimized for both mobile and desktop.
          Whether you’re building dashboards, e-commerce platforms, or enterprise applications,Tx Design UI Libraries
          empowers developers to create stunning, responsive user interfaces with minimal effort. With clean
          documentation and ongoing support, this library is your ultimate tool for crafting modern web experiences.
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
