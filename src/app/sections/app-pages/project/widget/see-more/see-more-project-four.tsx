import { SvgIcon } from "@/app/assets/icons";
import { ButtonPrimary } from "@/app/components/shared/button/button-primary";
import Image from "next/image";
import Link from "next/link";
import { ListTechStack } from "../list-tech-stack";

export const SeeMoreProjectFour = () => {
  return (
    <div>
      <div className="flex gap-4 w-fit">
        <Link
          href="https://apps.apple.com/us/app/%C4%91%E1%BA%A1i-l%C3%BD-h%E1%BB%93ng-anh/id6470966667"
          target="_blank"
        >
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
        <Link
          href="https://play.google.com/store/apps/details?id=com.honganhprod.sellermobile&pcampaignid=web_share"
          target="_blank"
        >
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
          🤝 Team size: 15 Personal (2 Mobile, 6 Backend, 2 Tester, 2 Business Analyst, 2 Product Owner, 1 Head of
          Department)
        </span>
      </div>
      <div className="w-fit mt-5 text-base">
        <div className="">👉 Link Repository: {"Confidential and cannot be disclosed 🙅"}</div>
        <div className="mt-2">👉 Link Preview: {"Confidential and cannot be disclosed 🙅"}</div>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Description ✍️</span>
        <p className="mt-3 font-medium text-base">
          Hong Anh Seller Mobile App is an innovative e-commerce platform designed to simplify shopping for both
          customers and dealers. This app creates a seamless connection between buyers and sellers, offering a wide
          range of products with intuitive navigation and secure payment options. Built for convenience and efficiency,
          it enables customers to browse, compare, and purchase with ease, while providing dealers with tools to
          showcase products, track orders, and reach a larger audience. With a focus on user-friendly design and
          real-time updates, this app redefines the shopping experience and empowers businesses to thrive in the digital
          age.
        </p>
      </div>
      <div className="w-fit mt-10">
        <span className="text-lg font-semibold">Tech Stack</span>
        <ListTechStack
          techStack={[
            { image: SvgIcon.IconStackFlutter, name: "Flutter" },
            { image: SvgIcon.IconStackBloc, name: "BloC & Cubit" },
            { image: SvgIcon.IconStackGetX, name: "GetX" },
            { image: SvgIcon.IconStackFvm, name: "Fvm" },
            { image: SvgIcon.IconStackGraphql, name: "GraphQL" },
            { image: SvgIcon.IconStackRx, name: "RxDart" }
          ]}
        />
      </div>
    </div>
  );
};
