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
  gsap.fromTo(
    el,
    { y: 100, opacity: 0 }, // start lower
    { 
      y: 0, 
      opacity: 1, 
      duration: 1.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
        scrub: 0.5
      }
    }
  );
});


const heroTitle = document.querySelector('.hero-title'); 
const hero2 = document.querySelector('.hero2'); 
heroTitle.style.backgroundImage = 'url("/visit-suffolk/img/431A9412.jpg")'; 
hero2.style.backgroundImage = 'url("/visit-suffolk/img/431A9402.jpg")';

import section1Img from './assets/431A9488.jpg';
import section2Img from './assets/431A9488.jpg';
import section3Img from './assets/IMG_4402.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    ['section1', section1Img],
    ['section2', section2Img],
    ['section3', section3Img]
  ];

  sections.forEach(([id, img]) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.backgroundImage = `url(${img})`;
    }
  });
});
