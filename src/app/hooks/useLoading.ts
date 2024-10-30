import anime from "animejs";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loader_anim__intro = anime.timeline();

    loader_anim__intro
      .add({
        targets: ".animFill",
        scale: {
          value: 0.5,
          elasticity: 400
        },
        opacity: 1,
        duration: 1000
      })
      .add({
        targets: ".animItem",
        scale: 1,
        elasticity: 1000,
        complete: function () {
          loader_anim__spin.play();
        }
      })
      .add({
        targets: ".animText_letter",
        marginTop: "0px",
        opacity: 0.9,
        offset: "-=800",
        delay: function (el, i, l) {
          return i * 100;
        },
        complete: function () {
          loader_anim__textQuirk.play();
        }
      })
      .add({
        targets: ".animLoaderBar",
        duration: 1000,
        elasticity: 10
      })
      .add({
        targets: ".animLoaderBar",
        height: "100%",
        duration: 800
      })
      .add({
        targets: "#loader_container",
        top: "100%",
        duration: 800,
        elasticity: 0
      });

    let loader_anim__spin = anime({
      targets: ".animItem",
      rotate: "3turn",
      easing: "easeInOutExpo",
      duration: 1000,
      delay: 1000,
      autoplay: false
    });

    let loader_anim__textQuirk = anime({
      targets: ".animText_letter",
      direction: "alternate",
      easing: "easeInOutExpo",
      loop: true,
      autoplay: false
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return { isLoading };
};
