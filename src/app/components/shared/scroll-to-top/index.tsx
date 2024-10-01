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
      className="cursor-pointer fixed right-6 bottom-6 w-10 h-10 bg-[#03030f] text-white rounded-2xl "
      onClick={handleScrollToTop}
    >
      <AnimatedTooltip
        title="Scroll to top"
        items={
          <Image
            src={SvgIcon.IconToTop}
            alt="button"
            width={18}
            height={18}
            className="flex justify-center items-center"
          />
        }
      />
    </button>
  )
}
