import { useEffect, useState, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";
import { NAV_ITEMS } from "../../constants/navigation";
import "./header.css";


const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuButtonRef = useRef(null);

  // Handle ESC key to close modal and return focus
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showModal) {
        setshowModal(false);
        menuButtonRef.current?.focus();
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [showModal]);

  return (
    <header className="flex">
      <button
        ref={menuButtonRef}
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
        aria-label="Open navigation menu"
        aria-expanded={showModal}
      ></button>
      <div></div> 

      <nav>
        <ul className="flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        className="mode flex"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        aria-pressed={theme === "light"}
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal" role="dialog" aria-modal="true" aria-labelledby="mobile-nav">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                  menuButtonRef.current?.focus();
                }}
                aria-label="Close navigation menu"
              />
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => {
                    setshowModal(false);
                    menuButtonRef.current?.focus();
                  }}
                >
                  {item.label}
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
