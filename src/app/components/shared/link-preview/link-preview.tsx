import { LinkPreviewProps } from "@/app/interface/props";
import { LinkPreviewAceternity } from "../../aceternity-ui/link-preview";

export const LinkPreview = ({ link, children }: LinkPreviewProps) => {
  return (
    <LinkPreviewAceternity url={link} className="underline">
      {children ?? link}
    </LinkPreviewAceternity>
  );
};
