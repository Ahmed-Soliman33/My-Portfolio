import { useEffect, useState, useCallback } from "react";
import "./header.css";

const THEME_STORAGE_KEY = "currentMode";
const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

const NAV_LINKS = [
  { href: "#up", label: "About" },
  { href: "#projs", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) ?? THEMES.DARK
  );

  useEffect(() => {
    document.body.classList.remove(THEMES.LIGHT, THEMES.DARK);
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showModal]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    setTheme(newTheme);
  }, [theme]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  return (
    <header className="flex">
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-menu flex"
        aria-label="Open navigation menu"
        aria-expanded={showModal}
      />

      <div />

      <nav aria-label="Main navigation">
        <ul className="flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        className="mode flex"
        aria-label={`Switch to ${theme === THEMES.DARK ? "light" : "dark"} mode`}
      >
        <span className={theme === THEMES.DARK ? "icon-moon-o" : "icon-sun"} />
      </button>

      {showModal && (
        <div
          className="fixed"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={closeModal}
                aria-label="Close navigation menu"
              />
            </li>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={closeModal}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
