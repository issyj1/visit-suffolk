import './style.css'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section.querySelector("h1, h2, p"), {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});




gsap.utils.toArray(".slide-left, .slide-right").forEach((el) => {
  const startX = el.classList.contains("slide-left") ? -200 : 200;

  gsap.fromTo(
    el,
    { x: startX, opacity: 0 },
    { 
      x: 1, 
      opacity: 1, 
      duration: 1,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        scrub: true
      }
    }
  );
});

// Slide in from right and back out
gsap.utils.toArray(".slide-right").forEach((el) => {
  gsap.fromTo(el, 
    { x: 300, opacity: 1 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse",
        scrub: true
      }
    }
  );
});



gsap.fromTo(el, 
  { x: -200, opacity: 1 },
  { 
    x: 0, 
    opacity: 1, 
    duration: 1,
    immediateRender: false,  // add this
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
      scrub: true
    }
  }
);





