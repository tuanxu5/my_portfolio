import Image from "next/image";

export const ImageWeb = () => {
  return (
    <div className="mt-[100px] relative">
      <Image
        alt="Web development"
        src="https://ronasit.com/_next/static/media/web-development-light.70611adc.svg"
        decoding="async"
        className="relative"
      />
      <Image
        alt="Cloud"
        src="https://ronasit.com/_next/static/media/cloud-light.1b9a7bfb.svg"
        decoding="async"
        className="absolute top-[10%] left-[5%]"
      />
      <Image
        alt="Angular"
        src="https://ronasit.com/_next/static/media/angular-light.69df12c5.svg"
        decoding="async"
        className="absolute right-[20%] top-[-10%]"
      />
      <Image
        alt="React"
        src="https://ronasit.com/_next/static/media/react-light.6e3745ce.svg"
        decoding="async"
        className="absolute bottom-[30%] right-[25%]"
      />
      <Image
        alt="Mouse"
        src="https://ronasit.com/_next/static/media/mouse-light.105213fe.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-7 left-[60%]"
      />
      <Image
        alt="Java"
        src="https://ronasit.com/_next/static/media/java-light.2ecf81de.svg"
        decoding="async"
        className="absolute right-[40%] top-0"
      />
    </div>
  );
};
