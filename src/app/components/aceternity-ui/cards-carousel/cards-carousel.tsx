/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import { cn } from "@/app/utils/aceternity";

import { SvgIcon } from "@/app/assets/icons";
import { useOutsideClick } from "@/app/hooks/useOutSideClick";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  position: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScalability();
    }
  }, [initialScroll]);

  const checkScalability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScalability}
        >
          <div className={cn("absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div className={cn("flex flex-row justify-start gap-4 pl-4", "max-w-7xl mx-auto")}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true
                  }
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <Image src={SvgIcon.IconLeft} alt="icon" width={8} height={8} />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <Image src={SvgIcon.IconRight} alt="icon" width={8} height={8} />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

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
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 top-10 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[var(--primary-color)] backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="bg-white dark:bg-neutral-900 h-[85vh] z-[200] mt-[70px] rounded-3xl font-sans relative overflow-scroll p-10"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-[var(--primary-color)] rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <Image src={SvgIcon.IconClose} alt="icon" width={14} height={14} />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium max-w-[1320px] mx-[auto]"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-[54px] font-bold leading-[68px] mt-4 max-w-[1320px] mx-[auto]"
              >
                {card.title}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-[18px] font-medium max-w-[1320px] mx-[auto] mt-10"
              >
                Position: {card.position}
              </motion.p>
              <div className="py-10 max-w-[1320px] mx-[auto]">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 w-[60vh] h-[22rem] overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-left text-[16px]"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-4xl font-semibold text-left mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage src={card.src} alt={card.title} fill className="object-cover absolute z-10 inset-0" />
      </motion.button>
    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
