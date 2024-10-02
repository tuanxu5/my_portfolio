import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./index.css"; // Chứa các CSS tương tự với đoạn mã bạn đã cung cấp

gsap.registerPlugin(ScrollTrigger);

const App = () => {
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
          // Loại bỏ markers
          markers: false
        }
      });
      tl.to(image, { height: 0 });
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
          // Loại bỏ markers
          markers: false
        }
      });
      tl.to(text, { duration: 0.33, opacity: 1, y: "15%" }).to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
    });

    ScrollTrigger.create({
      trigger: ".black",
      scrub: true,
      // Loại bỏ markers
      markers: false,
      pin: true,
      start: () => "top top",
      end: () => "+=" + (images.length + 1) * window.innerHeight,
      invalidateOnRefresh: true
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="orange">
        <div className="text">This is some text inside of a div block.</div>
      </section>

      <section className="black">
        <div className="text-wrap">
          <div className="panel-text blue-text">Blue</div>
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

      <section className="blue"></section>
    </div>
  );
};

export default App;
