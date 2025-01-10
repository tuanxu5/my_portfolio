/* eslint-disable react-hooks/exhaustive-deps */

import { MutableRefObject, useEffect, useRef } from "react";

type SectionElement = HTMLElement | null;

export const useStickySections = (containerRef: React.RefObject<HTMLDivElement>) => {
  const sections = useRef<SectionElement[]>([] as SectionElement[]) as MutableRefObject<SectionElement[]>;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    sections.current = Array.from(container.querySelectorAll("section"));
    initContainer();
    handleSections();

    const onScroll = () => {
      handleSections();
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [containerRef]);

  const initContainer = () => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty("--stick-items", `${sections.current.length + 1}00vh`);
    container.classList.add("[&_*]:!transition-none");
    setTimeout(() => {
      container.classList.remove("[&_*]:!transition-none");
    }, 1);
  };

  const handleSections = () => {
    const container = containerRef.current;
    if (!container) return;

    const viewportTop = window.scrollY;
    const containerHeight = container.clientHeight;
    const containerTop = container.offsetTop;
    const containerBottom = containerTop + containerHeight;

    let newScrollValue: number;
    if (containerBottom <= viewportTop) {
      newScrollValue = sections.current.length + 1;
    } else if (containerTop >= viewportTop) {
      newScrollValue = 0;
    } else {
      newScrollValue = remapValue(viewportTop, containerTop, containerBottom, 0, sections.current.length + 1);
    }

    const newActiveIndex =
      Math.floor(newScrollValue) >= sections.current.length ? sections.current.length - 1 : Math.floor(newScrollValue);

    sections.current.forEach((section, i) => {
      if (section) {
        if (i === newActiveIndex) {
          section.style.setProperty("--stick-visibility", "1");
          section.style.setProperty("--stick-scale", "1");
        } else {
          section.style.setProperty("--stick-visibility", "0");
          section.style.setProperty("--stick-scale", ".8");
        }
      }
    });
  };

  const remapValue = (value: number, start1: number, end1: number, start2: number, end2: number): number => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  return sections;
};