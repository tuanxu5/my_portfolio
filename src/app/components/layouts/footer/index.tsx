import { SvgIcon } from "@/app/assets/icons";
import Image from "next/image";
import { ButtonPrimary } from "../../shared/button/button-primary";
import { LinkPreview } from "../../shared/link-preview/link-preview";
import ScrollToTop from "../../shared/scroll-to-top";

const FooterPage = () => {
  return (
    <footer className="w-full flex flex-col mb-5 mt-10 h-full items-start">
      <span className="text-sm text-[#03030f80]">© 2024 Tuanxu. All rights reserved.</span>
      <div className="flex flex-col fixed gap-2 left-8 bottom-6">
        <LinkPreview link="https://www.linkedin.com/in/tuanxu5/">
          <ButtonPrimary
            px={2.5}
            py={2.5}
            label={<Image src={SvgIcon.IconLinkdIn} alt="icon" width={18} height={18} />}
          />
        </LinkPreview>

        <LinkPreview link="https://github.com/Tuanxu5">
          <ButtonPrimary
            px={2.5}
            py={2.5}
            label={<Image src={SvgIcon.IconGithub} alt="icon" width={18} height={18} />}
          />
        </LinkPreview>

        <LinkPreview link="https://www.instagram.com/tuann__n/">
          <ButtonPrimary
            px={2.5}
            py={2.5}
            label={<Image src={SvgIcon.IconInstagram} alt="icon" width={18} height={18} />}
          />
        </LinkPreview>

        <LinkPreview link="https://www.facebook.com/tunnxu5/">
          <ButtonPrimary
            px={2.5}
            py={2.5}
            label={<Image src={SvgIcon.IconFacebook} alt="icon" width={18} height={18} />}
          />
        </LinkPreview>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default FooterPage;
