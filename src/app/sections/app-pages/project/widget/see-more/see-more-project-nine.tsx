import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectNine = () => {
  return (
    <div>
      <div className="font-semibold text-2xl mt-10">
        <span>🤝 Team size: 1 Personal</span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div>👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
        <div>
          👉 Link Preview:{" "}
          <a href="https://zencomex.com/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            zenco.com
          </a>
        </div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium text-base">
          Landing Page Zenco is a corporate website developed for Zenco Production & Import-Export Co., Ltd. Built with
          NextJs, the site showcases the company’s product lines, services, and import-export capabilities. It features
          responsive design, multi-section layout, and SEO-optimized metadata to improve search visibility. The project
          also includes a CMS-based admin panel for updating banners, content, and SEO settings without developer
          intervention. Deployed on a VPS with Nginx and HTTPS, the website ensures high availability, performance, and
          secure access.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack
          techStack={[
            { image: SvgIcon.IconStackNextJs, name: "NextJs" },
            { image: SvgIcon.IconStackTailWind, name: "TailwindCss" },
            { image: SvgIcon.IconStackRedux, name: "Redux" },
            { image: SvgIcon.IconStackNodeJs, name: "ExpressJs" },
            { image: SvgIcon.IconStackMySql, name: "MySql" },
            { image: SvgIcon.IconStackNginx, name: "Nginx" },
            { image: SvgIcon.IconStackDocker, name: "Docker" }
          ]}
        />
      </div>
    </div>
  );
};
