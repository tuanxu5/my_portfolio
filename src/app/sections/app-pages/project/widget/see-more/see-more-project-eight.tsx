import { SvgIcon } from "@/app/assets/icons";
import { ButtonPrimary } from "@/app/components/shared/button/button-primary";
import Image from "next/image";
import Link from "next/link";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectEight = () => {
  return (
    <div>
      <div className="flex gap-4 w-fit">
        <Link href="https://apps.apple.com/vn/app/giao-v%E1%BA%ADn-c-group/id6450640686?l=vi" target="_blank">
          <ButtonPrimary
            label={
              <span className="flex gap-2 items-center">
                <Image
                  src="https://ronasit.com/_next/static/media/ios.f07497a4.svg"
                  alt="This is the description for the image"
                  width={0}
                  height={0}
                  className="w-[1.5rem] h-[1.5rem]"
                />
                <span className="text-sm">Download for iOS</span>
              </span>
            }
            px={7}
            py={4}
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.honganh.shipper&hl=gsw&gl=US" target="_blank">
          <ButtonPrimary
            label={
              <span className="text-sm flex gap-2 items-center">
                <Image
                  src="https://ronasit.com/_next/static/media/android.4bd66b8b.svg"
                  alt="This is the description for the image"
                  width={0}
                  height={0}
                  className="w-[1.5rem] h-[1.5rem]"
                />
                <span className="text-sm">Download for Android</span>
              </span>
            }
            px={7}
            py={4}
          />
        </Link>
      </div>
      <div className="font-semibold text-2xl mt-20">
        <span>
          🤝 Team size: 15 Personal (2 Frontend, 6 Backend, 2 Tester, 2 Business Analyst, 2 Product Owner, 1 Head of
          Department)
        </span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div className="">👉 Link Repository: Confidential and cannot be disclosed 🙅</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium text-base">
          Hong Anh Shipper App is a logistics and delivery management web application developed with ReactJS, tailored
          to support internal shippers in processing daily order assignments. The platform allows shippers to log in
          securely, view and filter order lists by status, update delivery progress in real-time, and access route and
          customer information. Designed to work across modern browsers and devices, the app facilitates smooth
          coordination between sales teams, warehouse staff, and delivery personnel. With a user-friendly interface and
          optimized performance, it enhances delivery efficiency and improves tracking accuracy within the company’s
          logistics workflow.
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
