import React, { useEffect, useState } from "react";
import "../styles/Navigation.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Run once after mount — read saved theme or use OS preference
  useEffect(() => {
    // only run in browser
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme"); // null if not set
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
      setTheme(saved);
      return;
    }

    // if no saved preference, use OS preference
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = prefersDark ? "dark" : "light";
    applyTheme(initial);
    setTheme(initial);
  }, []);

  // helper: apply theme by toggling class on <html>
  const applyTheme = (value) => {
    const body = document.body; // <html>
    if (value === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("theme", next); // persist
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__brand" id="Home">
        <h1>
          <a href="#">Portfolio</a>
        </h1>
      </div>

      {/* Hamburger Button */}
      <button
        className="nav__hamburger"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span
          className={`nav__hamburger-line ${menuOpen ? "open" : ""}`}
        ></span>
        <span
          className={`nav__hamburger-line ${menuOpen ? "open" : ""}`}
        ></span>
        <span
          className={`nav__hamburger-line ${menuOpen ? "open" : ""}`}
        ></span>
      </button>

      {/* Menu */}
      <div
        className={`nav__menu ${menuOpen ? "nav__menu--open" : ""}`}
        id="Pages"
      >
        <ul className="nav__list">
          <li className="nav__item nav__item--about">
            <a href="#About" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li className="nav__item nav__item--skills">
            <a href="#Skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className="nav__item nav__item--experiences">
            <a href="#Experiences" onClick={closeMenu}>
              Experiences
            </a>
          </li>
          <li className="nav__item nav__item--projects">
            <a href="#Projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav__item nav__item--contact">
            <a href="#Contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li className="nav__item nav__item--mode">
            <button className="nav__mode-button">Mode</button>
          </li>
        </ul>
      </div>

      {/* Desktop Mode button */}
      {/* <div className="nav__mode-desktop">
        <button className="nav__mode-button" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div> */}
    </nav>
  );
}
