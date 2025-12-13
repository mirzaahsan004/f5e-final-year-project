// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

/**
 * ThemeToggle -> toggles 'light-theme' class on body.
 * Stores preference in localStorage ('site-theme' -> 'light' | 'dark').
 */

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // initialize from localStorage or system preference
    const saved = localStorage.getItem("site-theme");
    if (saved === "light") {
      document.body.classList.add("light-theme");
      setIsLight(true);
    } else if (saved === "dark") {
      document.body.classList.remove("light-theme");
      setIsLight(false);
    } else {
      // if no saved preference, try system preference
      const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      if (prefersLight) {
        document.body.classList.add("light-theme");
        setIsLight(true);
        localStorage.setItem("site-theme", "light");
      } else {
        document.body.classList.remove("light-theme");
        setIsLight(false);
        localStorage.setItem("site-theme", "dark");
      }
    }
  }, []);

  function toggleTheme() {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.body.classList.add("light-theme");
      localStorage.setItem("site-theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("site-theme", "dark");
    }
  }

  return (
    <div className="theme-toggle" role="region" aria-label="Theme toggle">
      <button
        onClick={toggleTheme}
        aria-pressed={isLight}
        title={isLight ? "Switch to dark" : "Switch to light"}
      >
        {isLight ? (
          // Sun SVG (light)
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 4V2M12 22v-2M4.93 4.93L3.51 3.51M20.49 20.49l-1.42-1.42M2 12H4M20 12h2M4.93 19.07l-1.42 1.42M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/>
          </svg>
        ) : (
          // Moon SVG (dark)
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}
