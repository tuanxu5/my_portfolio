"use client";

interface CustomDrawerProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export const CustomDrawer = ({ setIsOpen, isOpen, children }: CustomDrawerProps) => {
  return (
    <main
      className={
        " fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out z-[9999]" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-y-0  "
          : " transition-all delay-500 opacity-0 translate-y-full  ")
      }
    >
      <section
        className={
          " w-screen bottom-0 absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform flex justify-center rounded-t-[20px]" +
          (isOpen ? " translate-y-0 " : " translate-y-full ")
        }
      >
        <article className="relative overflow-y-scroll h-full justify-center w-full max-w-[] px-[6.5rem] max-h-[80vh]">
          <div className="text-[var(--primary-color)] w-full pt-[80px] mb-20 flex flex-col gap-3">{children}</div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};
