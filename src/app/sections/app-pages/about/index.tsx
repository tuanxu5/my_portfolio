import { FlipWords } from "@/app/components/aceternity-ui/flip-words";
import TitleComponent from "@/app/components/shared/title";

export const AboutSection = () => {
  const words = ["TuanXu", "Software Developer"];
  return (
    <TitleComponent
      title="About"
      subTitle={<div>I have experience in modern develop web and mobile apps.</div>}
      name={
        <span>
          Hi, I&apos;m
          <FlipWords words={words} duration={5000} />
        </span>
      }
    />
  );
};
