import './style.css';       // CSS import
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Animate section headers (h1, h2, p)
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section.querySelectorAll("h1, h2, p"), {
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

// Animate elements with slide-left or slide-right
gsap.utils.toArray(".slide-left, .slide-right").forEach((el) => {
  const startX = el.classList.contains("slide-left") ? -200 : 200;

  gsap.fromTo(
    el,
    { x: startX, opacity: 0 },
    { 
      x: 0, 
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

// Optional extra animation for slide-left elements (if you want a slightly different effect)
gsap.utils.toArray(".slide-left").forEach((el) => {
  gsap.fromTo(
    el,
    { x: -200, opacity: 0 },
    { 
      x: 0,
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