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

gsap.utils.toArray(".png-anim").forEach((el) => {
  // Determine horizontal start based on class
  const startX = el.classList.contains("slide-left") ? -150 : 150;
  const startY = 50; // starts slightly below and moves up

  gsap.fromTo(
    el,
    { x: startX, y: startY }, // starting position off to side + lower
    {
      x: 0,       // natural horizontal position
      y: 0,       // natural vertical position
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 0.5
      }
    }
  );
});

const heroTitle = document.querySelector('.hero-title'); 
const hero2 = document.querySelector('.hero2'); 
heroTitle.style.backgroundImage = 'url("/visit-suffolk/img/431A9412.jpg")'; 
hero2.style.backgroundImage = 'url("/visit-suffolk/img/431A9402.jpg")';

document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    ['section1', '431A9488.jpg'],
    ['section2', 'IMG_4379.jpg'],
    ['section3', 'IMG_4402.jpg']
  ];

  sections.forEach(([id, img]) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.backgroundImage = `url("/visit-suffolk/img/${img}")`;
    }
  });
});
