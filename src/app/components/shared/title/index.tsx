interface TitleComponentProps {
  title: String;
  subTitle?: React.ReactNode;
  name?: React.ReactNode | String | null;
}

export default function TitleComponent({ title, subTitle, name, ...rest }: TitleComponentProps) {
  return (
    <section className="container px-[140px] flex flex-wrap">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h5 className="text-[16px] font-medium mb-12">{title}</h5>
        </div>
        {name && <h1 className="text-[70px] font-bold leading-[70px] mb-4">{name}</h1>}
        <h1 className="text-[45px] font-semibold leading-[50px]">
          <div>{subTitle}</div>
        </h1>
      </div>
    </section>
  );
}
