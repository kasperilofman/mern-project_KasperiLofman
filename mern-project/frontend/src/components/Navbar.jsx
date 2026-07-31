// Site navbar with responsive mobile menu and dark mode toggle
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Kasperi<span className="logo-accent">Löfman</span>
        </NavLink>

        <button
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <NavLink to="/" className={navLinkClass} onClick={closeMenu} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
            About Me
          </NavLink>
          <NavLink to="/cv" className={navLinkClass} onClick={closeMenu}>
            CV
          </NavLink>

          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
