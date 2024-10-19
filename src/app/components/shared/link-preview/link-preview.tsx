import { LinkPreviewAceternity } from "../../aceternity-ui/link-preview";

interface LinkPreviewProps {
  link: string;
  children?: React.ReactNode;
}

export const LinkPreview = ({ link, children }: LinkPreviewProps) => {
  return (
    <LinkPreviewAceternity url={link} className="underline">
      {children ?? link}
    </LinkPreviewAceternity>
  );
};
