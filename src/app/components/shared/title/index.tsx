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
          {/* {isLink && (
            <Link href={link} className="font-semibold text-right flex items-center justify-end gap-1 text-15px">
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="3"
                stroke="currentColor"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
              </svg>
              <span>{titleLink}</span>
            </Link>
          )} */}
        </div>
        <h1 className="text-[60px] font-bold leading-[70px]">{name}</h1>
        <h1 className="text-[45px] font-bold leading-[50px]">
          <div>{subTitle}</div>
        </h1>
      </div>
    </section>
  )
}
