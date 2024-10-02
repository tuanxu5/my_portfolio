"use client";
import { SvgIcon } from "@/app/assets/icons";
import Image from "next/image";
import { AnimatedTooltip } from "../../aceternity-ui/tooltip/intex";
import CustomButton from "../button";

export default function ScrollToTop() {
  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className=" fixed right-8 bottom-6" onClick={handleScrollToTop}>
      <CustomButton
        py={3}
        px={3}
        label={
          <AnimatedTooltip
            title="Scroll to top"
            items={
              <Image
                src={SvgIcon.IconToTop}
                alt="icon"
                width={16}
                height={16}
                className="flex justify-center items-center"
              />
            }
          />
        }
      />
    </div>
  );
}
