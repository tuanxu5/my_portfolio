import Image from "next/image";

export const ImageMobile = () => {
  return (
    <div className="mt-[100px] relative">
      <Image
        alt="Web development"
        src="https://ronasit.com/_next/static/media/ios-development-light.4e99bbeb.svg"
        decoding="async"
        className="relative"
        width={1172}
        height={418}
      />
      <Image
        alt="Cloud"
        src="https://ronasit.com/_next/static/media/truck-light.6c3aa6d5.svg"
        decoding="async"
        className="absolute bottom-[0] left-0"
        width={255}
        height={96}
      />
      <Image
        alt="Mouse"
        src="https://ronasit.com/_next/static/media/controls-light.8db0815e.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[38%] right-[14%]"
        width={149}
        height={94}
      />
    </div>
  );
};
