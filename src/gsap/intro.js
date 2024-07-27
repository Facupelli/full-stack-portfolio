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

  const mm = gsap.matchMedia();

  mm.add("(max-width: 1024px)", () => {
    // Configuración para dispositivos móviles
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
  });

  mm.add("(min-width: 1025px)", () => {
    // Configuración para dispositivos de escritorio
    introTitles.forEach((introTitle, index) => {
      gsap.fromTo(
        introTitle,
        { x: 0, opacity: 1 },
        {
          x: -300,
          opacity: 0,
          scrollTrigger: {
            trigger: introDiv,
            start: `center+=100px center-=${index * 100}px`,
            end: `center+=450px center-=${index * 100}px`,
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
        start: `center+=10px center-=${(introTitles.length - 1) * 100}px`,
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });
  });
}
