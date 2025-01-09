import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectTwo = () => {
  return (
    <div>
      <div className="font-semibold text-2xl mt-10">
        <span>
          🤝 Team size: 15 Personal (2 Frontend, 6 Backend, 2 Tester, 2 Business Analyst, 2 Product Owner, 1 Head of
          Department)
        </span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div>👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
        <div>👉 Link Preview: Confidential and cannot be disclosed 🙅</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium text-base">
          Our OPS Project is a cutting-edge operational solution tailored to optimize the workflow of our computer
          components and technology products business. By automating repetitive tasks, improving inventory management,
          and providing actionable insights, this project enhances efficiency and ensures smooth operations. It is
          designed to streamline order processing, track stock in real-time, and deliver exceptional customer service.
          With scalability and flexibility at its core, the OPS Project positions our company to meet the growing
          demands of the tech market and provide top-quality products to our customers..
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
