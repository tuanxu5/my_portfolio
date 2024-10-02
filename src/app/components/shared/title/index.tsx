interface TitleComponentProps {
  title: String
  subTitle?: React.ReactNode
  name?: String | null
}

export default function TitleComponent({ title, subTitle, name, ...rest }: TitleComponentProps) {
  return (
    <section className="container px-[140px] flex flex-wrap">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h5 className="text-[18px] font-medium mb-10">{title}</h5>
        </div>
        <h1 className="text-[60px] font-bold leading-[70px]">{name}</h1>
        <h1 className="text-[45px] font-semibold leading-[50px]">
          <div>{subTitle}</div>
        </h1>
      </div>
    </section>
  )
}
