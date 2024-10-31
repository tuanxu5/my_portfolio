"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import styles from "./index.module.scss";

interface ButtonPrimaryProps {
  label: React.ReactNode | String | null;
  px: number;
  py: number;
}

type ButtonElement = HTMLElement & {
  dataset: {
    block: string;
  };
};

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, px, py }) => {
  useEffect(() => {
    class Button {
      block: ButtonElement;
      DOM: {
        button: ButtonElement;
        flair: HTMLElement;
      };
      xSet!: (value: number) => void;
      ySet!: (value: number) => void;

      constructor(buttonElement: ButtonElement) {
        this.block = buttonElement;
        this.DOM = { button: buttonElement, flair: document.createElement("span") };
        this.init();
        this.initEvents();
      }

      init() {
        const el = gsap.utils.selector(this.block);
        this.DOM.flair = el(`.${styles.button__flair}`) as unknown as HTMLElement;

        this.xSet = gsap.quickSetter(this.DOM.flair, "xPercent") as (value: number) => void;
        this.ySet = gsap.quickSetter(this.DOM.flair, "yPercent") as (value: number) => void;
      }

      getXY(e: MouseEvent): { x: number; y: number } {
        const { left, top, width, height } = this.DOM.button.getBoundingClientRect();

        const xTransformer = gsap.utils.pipe(gsap.utils.mapRange(0, width, 0, 100), gsap.utils.clamp(0, 100));
        const yTransformer = gsap.utils.pipe(gsap.utils.mapRange(0, height, 0, 100), gsap.utils.clamp(0, 100));

        return {
          x: xTransformer(e.clientX - left),
          y: yTransformer(e.clientY - top)
        };
      }

      initEvents() {
        const handleMouseEnter = (e: MouseEvent) => {
          const { x, y } = this.getXY(e);

          this.xSet(x);
          this.ySet(y);

          const moveX = ((x - 50) / 50) * 4;
          const moveY = ((y - 50) / 50) * 4;

          gsap.set(this.DOM.button, {
            x: moveX,
            y: moveY
          });

          gsap.fromTo(
            this.DOM.flair,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              ease: "power2.out"
            }
          );
        };

        const handleMouseLeave = (e: MouseEvent) => {
          gsap.killTweensOf(this.DOM.flair);
          gsap.killTweensOf(this.DOM.button);

          gsap.set(this.DOM.button, {
            x: 0,
            y: 0
          });

          const { x, y } = this.getXY(e);
          gsap.to(this.DOM.flair, {
            xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
            yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
            scale: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        };

        const handleMouseMove = (e: MouseEvent) => {
          const { x, y } = this.getXY(e);

          gsap.to(this.DOM.flair, {
            xPercent: x,
            yPercent: y,
            duration: 0.5,
            ease: "power2"
          });

          const moveX = ((x - 50) / 50) * 8;
          const moveY = ((y - 50) / 50) * 8;
          gsap.set(this.DOM.button, {
            x: moveX,
            y: moveY
          });
        };

        this.DOM.button.addEventListener("mouseenter", handleMouseEnter);
        this.DOM.button.addEventListener("mouseleave", handleMouseLeave);
        this.DOM.button.addEventListener("mousemove", handleMouseMove);
      }
    }

    const buttonElements = document.querySelectorAll<ButtonElement>(`[data-block="button"]`);

    buttonElements.forEach((buttonElement) => {
      new Button(buttonElement);
    });
  }, []);

  return (
    <button
      className={`${styles.button_primary} ${styles["button--stroke"]}`}
      style={{
        padding: `${py * 4}px ${px * 4}px `
      }}
      data-block="button"
    >
      <span className={styles.button__flair}></span>
      <span className={styles.button__label}>{label || "Click me"}</span>
    </button>
  );
};
