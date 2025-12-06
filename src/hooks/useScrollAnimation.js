import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for blur fade-in animation triggered by scroll
 * Uses Intersection Observer to trigger once when element enters viewport
 */
export function useBlurFadeIn(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -10% 0px",
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only trigger once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

/**
 * Hook for text sections (Hero, ProjectCard)
 * Keeps content fixed and fades it out as user scrolls
 */
export function useTextScrollAnimation(options = {}) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  const {
    scrubDuration = 0.5,
    pinDuration = "50%",  // How long the section stays pinned
  } = options;

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    
    if (!section || !content) return;

    // Ensure content starts at full opacity
    gsap.set(content, { opacity: 1 });

    const ctx = gsap.context(() => {
      // Create a timeline for the fade animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${pinDuration}`,
          pin: true,
          pinSpacing: false,
          scrub: scrubDuration,
        }
      });

      // Fade out in 64% of scroll, then hold invisible for remaining 36%
      tl.to(content, {
        opacity: 0,
        ease: "none",
        duration: 0.64,  // 64% of timeline - fade
      })
      .to(content, {
        opacity: 0,
        duration: 0.36,  // 36% of timeline - hold at invisible
      });
    }, section);

    return () => ctx.revert();
  }, [scrubDuration, pinDuration]);

  return { sectionRef, contentRef };
}

/**
 * Hook for media sections
 * Scales content from smaller to full size as it scrolls into view
 * Peaks at center of viewport
 */
export function useMediaScrollAnimation(options = {}) {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  
  const {
    startScale = 0.85,
    endScale = 1,
    scrubDuration = 0.3,
    triggerStart = "top 95%",
    triggerEnd = "top 40%",
  } = options;

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    
    if (!section || !media) return;

    // Set initial scale
    gsap.set(media, { scale: startScale });

    const ctx = gsap.context(() => {
      // Scale up as media scrolls into view
      gsap.to(media, {
        scale: endScale,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: triggerStart,
          end: triggerEnd,
          scrub: scrubDuration,
        }
      });
    }, section);

    return () => ctx.revert();
  }, [startScale, endScale, scrubDuration]);

  return { sectionRef, mediaRef };
}

/**
 * Hook for media sections that need to fade out
 * Scales content up, then fades it out as user scrolls past
 */
export function useMediaWithFadeOutAnimation(options = {}) {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  
  const {
    startScale = 0.85,
    endScale = 1,
    scrubDuration = 0.3,
    triggerStart = "top 130%",
    triggerEnd = "top 70%",
    fadeStart = "top 30%",
    fadeEnd = "top -100%",
  } = options;

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    
    if (!section || !media) return;

    // Set initial scale
    gsap.set(media, { scale: startScale, opacity: 1 });

    const ctx = gsap.context(() => {
      // Scale up as media scrolls into view
      gsap.to(media, {
        scale: endScale,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: triggerStart,
          end: triggerEnd,
          scrub: scrubDuration,
        }
      });

      // Fade out as media scrolls past
      gsap.to(media, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: fadeStart,
          end: fadeEnd,
          scrub: scrubDuration,
        }
      });
    }, section);

    return () => ctx.revert();
  }, [startScale, endScale, scrubDuration, triggerStart, triggerEnd, fadeStart, fadeEnd]);

  return { sectionRef, mediaRef };
}

/**
 * Hook for footer section
 * Scales the black box from smaller to full size
 */
export function useFooterScrollAnimation(options = {}) {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  
  const {
    startScale = 0.9,
    endScale = 1,
    scrubDuration = 1,
    pinDuration = "80%",
  } = options;

  useEffect(() => {
    const section = sectionRef.current;
    const box = boxRef.current;
    
    if (!section || !box) return;

    // Set initial scale
    gsap.set(box, { scale: startScale, transformOrigin: "center bottom" });

    const ctx = gsap.context(() => {
      gsap.to(box, {
        scale: endScale,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${pinDuration}`,
          pin: true,
          scrub: scrubDuration,
          anticipatePin: 1,
        }
      });
    }, section);

    return () => ctx.revert();
  }, [startScale, endScale, scrubDuration, pinDuration]);

  return { sectionRef, boxRef };
}
