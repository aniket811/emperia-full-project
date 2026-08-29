import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scrolled State
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Initial Hero Text Animation (fades out as you scroll down)
  gsap.to('.hero-content', {
    y: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: '+=500',
      scrub: 1,
    }
  });

  // Parallax Effect
  // Select all parallax layers
  const layers = document.querySelectorAll('.parallax-layer');

  // We want the parallax wrapper to be pinned, or just let standard scroll move things at different speeds.
  // In the video, the user scrolls down, the building comes UP faster than the text.
  
  // Let's pin the hero-section container so we can control exactly how each element moves.
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: '+=100%',
      scrub: true,
      pin: true,
    }
  });

  // Layer movements:
  // Sky moves slightly up
  tl.to('.layer-sky', { yPercent: -10, ease: 'none' }, 0);
  
  // Text moves up faster than sky
  tl.to('.layer-text', { yPercent: -40, ease: 'none' }, 0);
  
  // Building moves up even faster, covering the text
  tl.fromTo('.layer-building img', 
    { yPercent: 10, scale: 1 }, 
    { yPercent: -10, scale: 1.05, ease: 'none' }, 
  0);
  
  // Clouds move the fastest and scale up slightly
  tl.to('.cloud-1', { yPercent: -20, xPercent: -10, scale: 1.2, ease: 'none' }, 0);
  tl.to('.cloud-2', { yPercent: -30, xPercent: 10, scale: 1.3, ease: 'none' }, 0);

  // Text Reveal Section Animation
  const words = gsap.utils.toArray('.reveal-text .word');
  
  gsap.to(words, {
    color: '#111', // Change to black
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.text-reveal-section',
      start: 'top 60%',
      end: 'bottom 80%',
      scrub: true,
    }
  });

  // City Reveal Section Animation
  let cityTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.city-reveal-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
    }
  });

  // Zoom out the city background slightly
  cityTl.to('.city-background img', { scale: 1, ease: 'none' }, 0);
  
  // Fade in the arrows and move them right
  const arrows = gsap.utils.toArray('.arrow-image-mask');
  cityTl.to(arrows, {
    opacity: 1,
    x: 0,
    stagger: 0.2,
    ease: 'power2.out'
  }, 0.2);

  // Steps Section Animation
  const steps = gsap.utils.toArray('.step-item');
  
  steps.forEach((step, i) => {
    gsap.to(step, {
      opacity: 1,
      scrollTrigger: {
        trigger: step,
        start: 'top 70%',
        end: 'top 40%',
        scrub: true,
      }
    });
  });
  // Horizontal Scroll Section Animation
  let horizTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.horizontal-scroll-section',
      start: 'top top',
      end: '+=2000', // Scroll distance
      scrub: 1,
      pin: true,
    }
  });

  horizTl.to('.horizontal-track', {
    xPercent: -50, // Move the track to the left. With 3 items, -50% reveals the last item fully if the container logic is set up. Let's adjust based on layout. Actually, -66.66% is better if the track is 300% width, but we set it to 200%. So -50% is correct.
    ease: 'none'
  });
});
