import { PictureAssets } from "@/app/assets/images";
import Image from "next/image";

export const ImageBannerAbout = () => {
  return (
    <div className="mt-20 relative">
      <Image
        alt="Web development"
        src={PictureAssets.ImageBannerAboutMain}
        decoding="async"
        className="relative"
        width={1320}
        height={398}
      />
      <Image
        alt="Cloud"
        src={PictureAssets.ImageBannerAboutCloud}
        decoding="async"
        className="absolute top-[15%] left-[8%]"
        width={161}
        height={74}
      />
      <Image
        alt="NextJs"
        src={PictureAssets.ImageBannerAboutNext}
        decoding="async"
        className="absolute right-[20%] top-[-20%]"
        width={118}
        height={118}
      />
      <Image
        alt="ReactJs"
        src={PictureAssets.ImageBannerAboutReact}
        decoding="async"
        className="absolute bottom-[30%] right-[25%]"
        width={42}
        height={42}
      />
      <Image
        alt="Mouse"
        src={PictureAssets.ImageBannerAboutMouse}
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-7 left-[60%]"
        width={111}
        height={36}
      />
      <Image
        alt="Java"
        src={PictureAssets.ImageBannerAboutTailwind}
        decoding="async"
        className="absolute right-[40%] top-0"
        width={118}
        height={118}
      />
    </div>
  );
};
