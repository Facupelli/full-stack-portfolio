import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateIntro() {
  const introDiv = document.querySelector(".intro-div");
  const introTitles = introDiv.querySelectorAll(".intro-title");
  const introBackground = introDiv.querySelector(".intro-background");

  gsap.to(introBackground, {
    duration: 6,
    y: "+=150",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  introTitles.forEach((introTitle, index) => {
    gsap.fromTo(
      introTitle,
      { x: 0, opacity: 1 },
      {
        x: -1000,
        opacity: 0,
        scrollTrigger: {
          trigger: introDiv,
          start: `center+=200px center-=${index * 150}px`,
          end: "bottom center",
          scrub: true,
          // markers: true,
        },
      }
    );
  });

  gsap.to(introBackground, {
    opacity: 0,
    scrollTrigger: {
      trigger: introDiv,
      start: `center+=200px center-=${(introTitles.length - 1) * 50}px`,
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });
}
