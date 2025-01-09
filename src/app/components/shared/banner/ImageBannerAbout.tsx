import { PictureAssets } from "@/app/assets/images";
import Image from "next/image";

export const ImageBannerAbout = () => {
  return (
    <div className="mt-20 relative w-full">
      <Image
        alt="This is the description for the image"
        src={PictureAssets.ImageBannerAboutMain}
        decoding="async"
        className="relative"
        width={1320}
        height={398}
      />
      <Image
        alt="This is the description for the image"
        src={PictureAssets.ImageBannerAboutCloud}
        decoding="async"
        className="absolute top-[15%] left-[8%] w-[12%] h-auto"
      />
      <Image
        alt="This is the description for the image"
        src={PictureAssets.ImageBannerAboutNext}
        decoding="async"
        className="absolute right-[20%] top-[-25%] w-[12%] h-auto"
      />
      <Image
        alt="This is the description for the image"
        src={PictureAssets.ImageBannerAboutReact}
        decoding="async"
        className="absolute bottom-[30%] right-[20%] w-[4%] h-auto"
      />
      <Image
        alt="This is the description for the image"
        src={PictureAssets.ImageBannerAboutMouse}
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-7 left-[60%] w-[8%] h-auto"
      />
      <Image
        alt="This is the description for the image"
        src={PictureAssets.ImageBannerAboutTailwind}
        decoding="async"
        className="absolute right-[40%] top-0 w-[12%] h-auto"
      />
    </div>
  );
};
