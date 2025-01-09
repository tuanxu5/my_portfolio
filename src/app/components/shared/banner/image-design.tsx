import Image from "next/image";

export const ImageDesign = () => {
  return (
    <div className="mt-10 relative">
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/android-development-light.845e0b23.svg"
        decoding="async"
        className="relative"
        width={1110}
        height={418}
      />
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/cargo-light.0d07f90b.svg"
        decoding="async"
        className="absolute top-[40%] right-[8%]"
        width={58}
        height={34}
      />
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/robothead-light.7691d8c2.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[15%] left-[10%]"
        width={94}
        height={81}
      />
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/ui-light-3.8961f5c5.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[11%] left-[48%]"
        width={88}
        height={26}
      />
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/ui-light-2.1f09819e.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[20%] left-[47%]"
        width={88}
        height={26}
      />
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/ui-light-1.1538a2f4.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[30%] left-[48%]"
        width={88}
        height={26}
      />
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/rectangle-small-light-2.2b8e6f4a.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[10%] right-[38.7%]"
        width={46}
        height={28}
      />
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/rectangle-large-light-3.ca6e8538.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[5%] right-[11%]"
        width={63}
        height={48}
      />
      <Image
        alt="This is the description for the image"
        src="https://ronasit.com/_next/static/media/search-light.c4fa6daa.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[38%] right-[14%]"
        width={42}
        height={40}
      />
    </div>
  );
};
