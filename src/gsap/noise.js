import gsap from "gsap";

export function animateNoise() {
  gsap.to(".noise", {
    duration: 20, // Duración de la animación en segundos
    repeat: -1, // Repetir infinitamente
    ease: "linear", // Efecto de suavizado
    onUpdate: () => {
      // Generar valores aleatorios para translateX y translateY
      const randomX = Math.random() * 16 - 20; // Valores entre -8 y 8%
      const randomY = Math.random() * 40 - 20; // Valores entre -20.5 y 20.5%

      gsap.set(".noise", {
        transform: `translate(${randomX}%, ${randomY}%)`,
      });
    },
  });
}
