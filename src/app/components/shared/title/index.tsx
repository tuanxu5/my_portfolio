interface TitleComponentProps {
  title: String;
  subTitle?: React.ReactNode;
  subTitleBig?: React.ReactNode;
  name?: React.ReactNode | String | null;
}

export default function TitleComponent({ title, subTitle, name, subTitleBig, ...rest }: TitleComponentProps) {
  return (
    <section className="w-full flex flex-wrap items-start">
      <div className="w-full">
        {title && <h6 className="flex justify-between items-start text-[16px] font-medium mb-12">{title}</h6>}
        {name && <h1 className="text-[70px] font-bold leading-[70px] mb-8 min-h-[70px]">{name}</h1>}
        {subTitleBig && <h1 className="text-[60px] font-semibold leading-tight">{subTitleBig}</h1>}
        {subTitle && <h1 className="text-[45px] font-semibold leading-[50px]">{subTitle}</h1>}
      </div>
    </section>
  );
}
