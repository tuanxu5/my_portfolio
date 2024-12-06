"use client";
import { useCursor } from "@/app/hooks/useCursor";
import { useDevice } from "@/app/hooks/useDevice";
import style from "./index.module.scss";

export default function CursorComponent() {
  const { cursorBig, cursorSmall } = useCursor();
  const { isDesktop } = useDevice();

  return (
    isDesktop && (
      <section className="custom-cursor">
        <div ref={cursorBig} className={style.custom_cursor__ball} />
        <div ref={cursorSmall} className={`${style.custom_cursor__ball} ${style.custom_cursor__ball___small}`} />
      </section>
    )
  );
}
