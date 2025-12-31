import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to detect when an element enters the viewport
 * @param {Object} options - Intersection Observer options
 * @param {boolean} options.triggerOnce - Only trigger once (default: true)
 * @param {number} options.threshold - Percentage of element visibility to trigger (default: 0.1)
 * @param {string} options.rootMargin - Margin around root (default: "0px")
 * @returns {Object} - { ref, inView } - Attach ref to element, inView indicates visibility
 */
export function useInView({ triggerOnce = true, threshold = 0.1, rootMargin = "0px" } = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
          setInView(true);
          if (triggerOnce && element) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [triggerOnce, threshold, rootMargin]);

  return { ref, inView };
}
