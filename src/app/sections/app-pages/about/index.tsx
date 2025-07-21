import { ImageBannerAbout } from "@/app/components/shared/banner/ImageBannerAbout";
import TitleComponent from "@/app/components/shared/title";
import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";

export const AboutSection = () => {
  const infoList = [
    {
      icon: <User className="w-6 h-6 text-gray-700" />,
      platform: "Fullname",
      title: "Le Hoang Tuan"
    },
    {
      icon: <MapPin className="w-6 h-6 text-gray-700" />,
      platform: "Address",
      title: "My Dinh - Ha Noi"
    },
    {
      icon: <Phone className="w-6 h-6 text-gray-700" />,
      platform: "Phone Number",
      title: "0386426150"
    },
    {
      icon: <Calendar className="w-6 h-6 text-gray-700" />,
      platform: "Date of Birth",
      title: "25 - 09 - 2001"
    },
    {
      icon: <Mail className="w-6 h-6 text-gray-700" />,
      platform: "Email",
      title: "lehoangtuan012@gmail.com"
    }
  ];

  return (
    <section id="about" className="mt-[160px]">
      <TitleComponent
        title="About"
        subTitle="I have experience in modern develop web and mobile apps."
        name="Hi, I'm&nbsp;TuanXu"
      />

      <div className="relative mt-[80px] mb-20 overflow-hidden">
        <p className="text-lg font-medium text-start">
          As a software developer, I&apos;m passionate about staying current with the latest tech trends. My goal is to
          contribute my expertise in developing high-quality software that exceeds user expectations. Committed to
          continuous learning, I strive for excellence in every project, embracing new technologies and best practices.
        </p>
        <div className="mt-20">
          <ImageBannerAbout />
        </div>
        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-12 mt-20">Personal Info</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            {infoList.map((award, index) => (
              <div key={index} className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-700">
                  {award.icon}
                </div>
                <p className="text-sm text-gray-500">{award.platform}</p>
                <h3 className="text-2xl md:text-3xl font-semibold leading-normal text-black">{award.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
