import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectTen = () => {
  return (
    <div>
      <div className="font-semibold text-2xl mt-10">
        <span>🤝 Team size: 4 Personal (1 Frontend, 1 Backend, 1 Tester, 1 Business Analyst ft Marketing Teams)</span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div>👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
        <div>👉 Link Preview: This project is currently under development and will include features such as...</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium text-base">
          This landing page was developed to highlight all active promotional campaigns run by Hong Anh Computer. Built
          with NextJS, it features a visually appealing layout with dynamic banners, countdown timers, and
          campaign-specific product sections. Admins can create and manage campaigns through a custom CMS, including
          setting titles, images, promotion durations, and associated product SKUs. The page is SEO-friendly,
          mobile-responsive, and optimized for fast load times, making it an effective tool for marketing and
          conversion.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack
          techStack={[
            { image: SvgIcon.IconStackNextJs, name: "NextJs" },
            { image: SvgIcon.IconStackTailWind, name: "TailwindCss" },
            { image: SvgIcon.IconStackGraphql, name: "GraphQL" },
            { image: SvgIcon.IconStackApollo, name: "Apollo" }
          ]}
        />
      </div>
    </div>
  );
};
