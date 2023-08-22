var typed = new Typed("#element", {
  strings: ["a Frontend developer", " an automation Engineer", " a Programer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
gsap.defaults({ duration: 0.5 });
let tl = gsap
  .timeline({ opacity: 0 })

  .from("h1", { x: -100 }, 0)
  .from("h3", { x: -100 }, 0)
  .from("p", { x: -80 }, 0)
  .from(
    ".social-links a i ",
    {
      y: 160,
      stagger: 0.1,
      duration: 0.8,
      ease: "ease-in-out",
      opacity: 0,
    },
    2
  )
  .from(".img", { opacity: 0, ease: "back", xPercent: 100, duration: 1 }, 0)
  .from(".bons", { opacity: 0, duration: 3 });

const barLink = document.querySelector(".bar");
const navMenu = document.querySelector(".nav");
barLink.addEventListener("click", () => {
  barLink.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    barLink.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// let tl0 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".container9",
//     start: "-30% center",
//     end: "bottom center",
//     scrub: true,
//     markers: true,
//   },
// });
// tl0
//   .from(".timeline:after", { y: 150 })
//   .from(".left-cont", {
//     stagger: 2,
//     duration: 3,
//     ease: "ease-in-out",
//     opacity: 0,
//     x: -80,
//   })
//   .from(
//     ".right-cont",
//     {
//       stagger: 2,
//       duration: 3,
//       ease: "ease-in-out",
//       opacity: 0,

//       x: 80,
//     },
//     1
//   )
//   .from(".timeline >:after", {
//     opacity: 0,
//     y: -500,
//   });
