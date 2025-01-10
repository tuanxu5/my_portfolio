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
        {title && <h6 className="flex justify-between items-start text-base font-medium mb-12">{title}</h6>}
        {name && <h1 className="text-6xl font-bold mb-8">{name}</h1>}
        {subTitleBig && <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">{subTitleBig}</h1>}
        {subTitle && <h3 className="text-4xl font-semibold">{subTitle}</h3>}
      </div>
    </section>
  );
}
