export type ButtonElement = HTMLElement & {
  dataset: {
    block: string;
  };
};

export type LinkPreviewAceternityProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & ({ isStatic: true; imageSrc: string } | { isStatic?: false; imageSrc?: never });