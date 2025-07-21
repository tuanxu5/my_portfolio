import { SvgIcon } from "@/app/assets/icons";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectSeven = () => {
  return (
    <div>
      <div className="font-semibold text-2xl mt-10">
        <span>🤝 Team size: 7 Personal (2 Frontend, 2 Backend, 1 Tester, 1 Business Analyst, 1 Product Owner)</span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div>👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
        <div>
          👉 Link Preview:{" "}
          <a
            href="https://gearmarket.vn/"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            gearmarket.vn
          </a>
        </div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium text-base">
          Hong Anh Retail E-commerce Website is a modern B2C web platform designed to support both online shoppers and
          sales operations for the company. The system includes core e-commerce features such as product listing,
          advanced filtering by category, brand, and price, a real-time search bar with autosuggest, and detailed
          product pages with image galleries, specifications, and promotions. The checkout flow includes cart
          management, discount vouchers, multiple payment options, and delivery address handling. Admins can manage
          products, inventories, banners, promotions, and SEO metadata through a powerful CMS interface. The platform is
          built with performance and scalability in mind, featuring responsive design for all devices, dynamic routing,
          and full SEO optimization. Integrated analytics provide insights into user behavior and campaign
          effectiveness.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack
          techStack={[
            { image: SvgIcon.IconStackNextJs, name: "NextJs" },
            { image: SvgIcon.IconStackTailWind, name: "TailwindCss" },
            { image: SvgIcon.IconStackSass, name: "Sass" }
          ]}
        />
      </div>
    </div>
  );
};
