import { useState, useEffect } from "react";

/**
 * Custom hook for managing theme (dark/light mode) with localStorage persistence
 * @returns {Object} { theme, toggleTheme }
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    // Apply theme class to body
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

    // Persist to localStorage
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
