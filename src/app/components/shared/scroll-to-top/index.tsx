"use client";
import { SvgIcon } from "@/app/assets/icons";
import Image from "next/image";
import { AnimatedTooltip } from "../../aceternity-ui/tooltip/intex";
import { ButtonPrimary } from "../button/button-primary";

export default function ScrollToTop() {
  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="fixed right-8 bottom-6" onClick={() => handleScrollToTop()}>
      <AnimatedTooltip
        title="Scroll to top"
        items={
          <ButtonPrimary
            px={2.5}
            py={2.5}
            label={
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
