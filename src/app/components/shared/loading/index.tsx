import { SvgIcon } from "@/app/assets/icons";
import Image from "next/image";
import "./index.scss";

export const LoadingComponent = () => {
  return (
    <div id="loader_container">
      <div className="loader">
        <Image
          src={SvgIcon.IconTuanxu}
          width="0"
          height="0"
          alt="This is the description for the image"
          className="w-[3.5rem] h-[3.5rem]"
        />
        <div className="animText mt-10">
          <span className="animText_letter">WELCOME</span>
          <span className="animText_letter">TO</span>
          <span className="animText_letter">TUANXU</span>
          <span className="animText_letter">PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
};
