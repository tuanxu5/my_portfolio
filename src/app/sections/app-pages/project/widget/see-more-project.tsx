/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { SvgIcon } from "@/app/assets/icons";
import { ButtonPrimary } from "@/app/components/shared/button/button-primary";
import { ButtonSecondary } from "@/app/components/shared/button/button-secondary";
import { useOutsideClick } from "@/app/hooks/useOutSideClick";
import { Project } from "@/app/interface";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SeeMoreProject = ({ card, index, layout = false }: { card: Project; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-[9999] top-10 overflow-hidden w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/30 backdrop-blur-sm h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.name}` : undefined}
              className="bg-white h-[84vh] z-[9999] mt-[70px] rounded-3xl font-sans relative overflow-scroll px-[6.5rem] py-[60px]"
            >
              <div className="sticky right-0 ml-auto cursor-pointer w-fit" onClick={handleClose}>
                <ButtonPrimary
                  label={<Image src={SvgIcon.IconClose} alt="icon" width={12} height={12} />}
                  px={2.5}
                  py={2.5}
                />
              </div>
              <motion.p
                layoutId={layout ? `category-${card.name}` : undefined}
                className="text-base font-medium max-w-[1320px] mx-[auto] px-[6.5rem]"
              >
                {card.company}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.name}` : undefined}
                className="text-[54px] font-bold leading-[68px] mt-4 max-w-[1320px] mx-[auto] px-[6.5rem]"
              >
                {card.name}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.name}` : undefined}
                className="text-[18px] font-medium max-w-[1320px] mx-[auto] mt-10 px-[6.5rem]"
              >
                Position: {card.position}
              </motion.p>
              <div className="py-10 max-w-[1320px] mx-[auto] px-[6.5rem]">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button onClick={handleOpen}>
        <div className="mt-16">
          <ButtonSecondary label="See more" px={8} py={4.5} />
        </div>
      </motion.button>
    </>
  );
};
