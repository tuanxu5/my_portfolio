"use client"
import { SvgIcon } from "@/app/assets/icons"
import Image from "next/image"
import { AnimatedTooltip } from "../../aceternity-ui/AnumatedTooltip/intex"

export default function ScrollToTop() {
  const handleScrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <button
      className="cursor-pointer fixed right-8 bottom-6 w-[36px] h-[36px] bg-[#03030f] text-white rounded-full"
      onClick={handleScrollToTop}
    >
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
    </button>
  )
}
