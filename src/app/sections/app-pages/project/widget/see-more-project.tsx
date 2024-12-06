/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { SvgIcon } from "@/app/assets/icons";
import { ButtonPrimary } from "@/app/components/shared/button/button-primary";
import { ButtonSecondary } from "@/app/components/shared/button/button-secondary";
import { useOutsideClick } from "@/app/hooks/useOutSideClick";
import { SeeMoreProjectProps } from "@/app/interface/props";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SeeMoreProject = ({ card, index, layout = false }: SeeMoreProjectProps) => {
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
              className="bg-white sm:h-[85vh] h-[90vh] sm:mt-[70px] rounded-3xl overflow-scroll px-[1rem] py-[1rem] sm:py-[60px] relative w-full"
            >
              <div className="max-w-[1320px] mx-auto sm:px-[6.5rem]">
                <div className="fixed right-[1rem] ml-auto cursor-pointer w-fit" onClick={handleClose}>
                  <ButtonPrimary
                    label={
                      <Image
                        src={SvgIcon.IconClose}
                        alt="icon"
                        width={0}
                        height={0}
                        className="w-[0.6rem] sm:w-[0.8rem] m-[0.1rem]"
                      />
                    }
                    px={2}
                    py={2}
                  />
                </div>
                <motion.p
                  layoutId={layout ? `category-${card.name}` : undefined}
                  className="text-base font-medium mx-[auto]"
                >
                  {card.company}
                </motion.p>
                <motion.p
                  layoutId={layout ? `title-${card.name}` : undefined}
                  className="text-5xl leading-tight font-bold mt-4 mx-[auto]"
                >
                  {card.name}
                </motion.p>
                <motion.p
                  layoutId={layout ? `title-${card.name}` : undefined}
                  className="text-lg font-medium mx-[auto] mt-10"
                >
                  Position: {card.position}
                </motion.p>
                <div className="py-10 mx-[auto]">{card.content}</div>
              </div>
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
