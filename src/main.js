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


// main.js
// main.js
import heroBg1 from './assets/431A9412.jpg';
import heroBg2 from './assets/431A9402.jpg';
import sectionBg1 from './assets/431A9488.jpg';
import sectionBg2 from './assets/IMG_4379.jpg';
import sectionBg3 from './assets/IMG_4402.jpg';

// Hero section
document.querySelector('.hero-title').style.backgroundImage = `url(${heroBg1})`;
document.querySelector('.hero2').style.backgroundImage = `url(${heroBg2})`;

// Page sections
document.getElementById('section1').style.backgroundImage = `url(${sectionBg1})`;
document.getElementById('section2').style.backgroundImage = `url(${sectionBg2})`;
document.getElementById('section3').style.backgroundImage = `url(${sectionBg3})`;
