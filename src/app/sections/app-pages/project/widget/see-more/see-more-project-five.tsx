import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectFive = () => {
  return (
    <div>
      <div className="font-semibold text-[24px] mt-10">
        <span>🤝 Team size: 1 personal</span>
      </div>
      <div className="w-fit mt-5 text-[16px]">
        <div className="">👉 Link Repository: {"Confidential and cannot be disclosed 🙅"}</div>
        <div className="mt-2">👉 Link Preview: {"Confidential and cannot be disclosed 🙅"}</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium">
          SPG Manager is a freelance project designed to empower employees to efficiently manage products across popular
          e-commerce platforms such as WooCommerce, Shopify, and more. With a user-friendly interface and essential
          tools, this project simplifies product listing, updating, and tracking, making operations smoother and more
          streamlined. Built with flexibility and scalability in mind, SPG Manager enables businesses to optimize their
          workflows, save time, and focus on growth in the competitive e-commerce market..
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack
          techStack={[
            { image: SvgIcon.IconStackReactJs, name: "ReactJS" },
            { image: SvgIcon.IconStackAntd, name: "Antd" },
            { image: SvgIcon.IconStackTailWind, name: "Tailwind" },
            { image: SvgIcon.IconStackSass, name: "Sass" }
          ]}
        />
      </div>
    </div>
  );
};
