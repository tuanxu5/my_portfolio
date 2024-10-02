"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactElement, useState } from "react";

export const AnimatedTooltip = ({ items, title }: { items?: ReactElement<any, any>; title: String }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-100, 105 - title.length * 2]), springConfig);

  return (
    <>
      <div
        className="flex justify-center"
        key={"item.name"}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {hoveredIndex === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10
              }
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap"
            }}
            className="absolute -top-10 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-2 py-2"
          >
            <div className="text-white text-[12px]">{title}</div>
          </motion.div>
        )}
        {items}
      </div>
    </>
  );
};
