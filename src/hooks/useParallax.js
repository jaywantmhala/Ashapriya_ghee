import { useState, useEffect, useRef } from 'react';

/**
 * useParallax – Returns a scroll-based Y-offset for parallax elements.
 * @param {number} speed – Parallax multiplier (0.1 = subtle, 0.5 = dramatic)
 * @param {boolean} reverse – Reverses direction
 */
export const useParallax = (speed = 0.2, reverse = false) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const dir = reverse ? -1 : 1;
                    setOffset(window.scrollY * speed * dir);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed, reverse]);

    return offset;
};

/**
 * useElementParallax – Parallax relative to element entering the viewport.
 * @param {number} speed
 */
export const useElementParallax = (speed = 0.15) => {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let ticking = false;
        const calculate = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            setOffset((centerY - viewportCenter) * speed);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    calculate();
                    ticking = false;
                });
                ticking = true;
            }
        };

        calculate();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [speed]);

    return { ref, offset };
};

/**
 * useScrollProgress – Returns scroll progress (0–1) for the page.
 */
export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? window.scrollY / total : 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
};

export default useParallax;
