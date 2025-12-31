import { useState, useEffect } from "react";

/**
 * Custom hook to track scroll position and show/hide elements based on threshold
 * @param {number} threshold - Scroll position in pixels to trigger visibility (default: 300)
 * @returns {boolean} - Whether scroll position exceeds threshold
 */
export function useScrollPosition(threshold = 300) {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowElement(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to prevent memory leak
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return showElement;
}
