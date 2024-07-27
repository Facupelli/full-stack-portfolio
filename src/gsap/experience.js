import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateHighlightBorder() {
  const border = document.querySelector(".highlight-border");

  gsap.set(border, { backgroundPosition: "100% 0" });

  const tl = gsap.timeline({ repeat: -1 });

  tl.to(border, {
    backgroundPosition: "-10% 0",
    duration: 2,
    ease: "ease-in-out",
  })
    .to({}, { duration: 2 })
    .to(border, {
      backgroundPosition: "110% 0",
      duration: 2,
      ease: "ease-in-out",
    })
    .set(border, { opacity: 0 })
    .to({}, { duration: 3 })
    .set(border, { opacity: 1 });
}
