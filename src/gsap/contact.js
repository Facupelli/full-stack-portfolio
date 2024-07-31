import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateContact() {
  const revealTexts = document.querySelectorAll(".reveal-text-fast");
  const revealTextContainer = document.querySelector(".reveal-text-container");

  const contactSection = document.querySelector(".contact-section");
  const contactCircle = document.querySelector(".contact-circle");

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: revealTextContainer,
      start: "top 80%",
      end: "top 70%",
      // markers: true,
    },
  });

  revealTexts.forEach((revealText) => {
    const letters = revealText.textContent.split("").map((letter) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.style.display = "inline-block";
      span.style.opacity = 0;
      return span;
    });

    revealText.innerHTML = "";
    letters.forEach((span) => revealText.appendChild(span));

    timeline.to(
      letters,
      {
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: 0.025,
      },
      "-=0.2"
    );
  });

  gsap.to(contactCircle, {
    opacity: 0.5,
    scrollTrigger: {
      trigger: contactSection,
      start: `top center-=100px`,
      end: "center center",
      scrub: true,
      markers: true,
    },
  });
}
