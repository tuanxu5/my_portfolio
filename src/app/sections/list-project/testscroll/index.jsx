import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const TestSCroll = () => {
  useEffect(() => {
    // Thiết lập z-index cho các panel
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    const images = gsap.utils.toArray(".panel:not(.purple)");

    images.forEach((image, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".black",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
          markers: false
        }
      });

      tl.to(image, { height: 0, opacity: 0, borderRadius: "0% 0% 0% 0%" }, 0).to(
        image,
        { borderRadius: "0%", duration: 0 },
        0
      );
    });

    // Thiết lập z-index cho các panel-text
    gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

    const texts = gsap.utils.toArray(".panel-text");

    texts.forEach((text, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".black",
          start: () => "top -" + window.innerHeight * i,
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
          markers: false
        }
      });
      tl.to(text, { duration: 0.33, opacity: 1, y: "15%" }).to(text, { duration: 0, opacity: 0, y: "0%" }, 0.66);
    });

    // Tạo hiệu ứng pin và scroll
    ScrollTrigger.create({
      trigger: ".black",
      scrub: true,
      markers: false,
      pin: true,
      start: () => "top top",
      end: () => "+=" + (images.length + 1) * window.innerHeight,
      invalidateOnRefresh: true
    });

    gsap.set(".blue-text", { opacity: 1, y: "15%" });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="black">
        <div className="text-wrap">
          <div className="panel-text blue-text">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum laudantium quod temporibus expedita
              placeat odio aliquid voluptatum asperiores dicta, incidunt tenetur, minima dolores in tempore magnam
              repellat molestias nemo?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum laudantium quod temporibus expedita
              placeat odio aliquid voluptatum asperiores dicta, incidunt tenetur, minima dolores in tempore magnam
              repellat molestias nemo?
            </div>{" "}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum laudantium quod temporibus expedita
              placeat odio aliquid voluptatum asperiores dicta, incidunt tenetur, minima dolores in tempore magnam
              repellat molestias nemo?
            </div>{" "}
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum laudantium quod temporibus expedita
              placeat odio aliquid voluptatum asperiores dicta, incidunt tenetur, minima dolores in tempore magnam
              repellat molestias nemo?
            </div>
          </div>
          <div className="panel-text red-text">Red</div>
          <div className="panel-text orange-text">Orange</div>
          <div className="panel-text purple-text">Purple</div>
        </div>

        <div className="p-wrap">
          <div className="panel blue"></div>
          <div className="panel red"></div>
          <div className="panel orange"></div>
          <div className="panel purple"></div>
        </div>
      </section>
    </div>
  );
};

export default TestSCroll;
