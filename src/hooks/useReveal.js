import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useReveal – GSAP ScrollTrigger based scroll-reveal animations
 */
const useReveal = () => {
    useEffect(() => {
        // Reveal from bottom (fade + translate Y)
        const revealEls = document.querySelectorAll('.reveal');
        revealEls.forEach((el) => {
            gsap.fromTo(el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Reveal from left
        const revealLeftEls = document.querySelectorAll('.reveal-left');
        revealLeftEls.forEach((el) => {
            gsap.fromTo(el,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Reveal from right
        const revealRightEls = document.querySelectorAll('.reveal-right');
        revealRightEls.forEach((el) => {
            gsap.fromTo(el,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Reveal with scale
        const revealScaleEls = document.querySelectorAll('.reveal-scale');
        revealScaleEls.forEach((el) => {
            gsap.fromTo(el,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Cleanup function to avoid duplicates on hot reloads
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);
};

export default useReveal;
