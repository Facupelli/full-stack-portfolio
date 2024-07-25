import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateFreelance() {
  const revealTexts = document.querySelectorAll(".reveal-text");

  revealTexts.forEach((revealText) => {
    const letters = revealText.textContent.split("").map((letter) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter; // Usar un espacio no separable
      span.style.display = "inline-block";
      span.style.opacity = 0;
      return span;
    });

    revealText.innerHTML = "";
    letters.forEach((span) => revealText.appendChild(span));

    gsap.to(letters, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.05,
      scrollTrigger: {
        trigger: revealText,
        start: "top 80%",
        end: "top 70%",
        onEnter: () => gsap.to(letters, { opacity: 1, stagger: 0.1 }),
        // markers: true,
      },
    });

    const parallaxContainer = document.querySelectorAll(".parallax-container");

    parallaxContainer.forEach((parallaxContainer) => {
      const parallaxImage = parallaxContainer.querySelector(".parallax-image");

      gsap.to(parallaxImage, {
        y: "10%",
        ease: "none",
        scrollTrigger: {
          trigger: parallaxContainer,
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers: true,
        },
      });
    });
  });
}
