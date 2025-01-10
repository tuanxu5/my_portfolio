"use client";
import { TimelineEntryProps } from "@/app/interface/props";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TextAnimationFadeUp } from "../../shared/text-animate";

export const TimelineAceternity = ({ data }: { data: TimelineEntryProps[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"]
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start mt-20">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-6 absolute left-[0.3rem] md:left-5 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-2 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <time className="hidden md:block text-xl md:pl-20 md:text-xl font-medium text-black">{item.title}</time>
            </div>

            <div className="relative pl-14 sm:pl-20 pr-4 md:pl-4 w-full">
              <TextAnimationFadeUp>
                <h3 className="md:hidden block text-xl mb-4 text-left font-medium">{item.title}</h3>
              </TextAnimationFadeUp>
              <TextAnimationFadeUp>{item.content}</TextAnimationFadeUp>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px"
          }}
          className="absolute md:left-8 left-4 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
