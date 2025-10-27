import React, { useState } from "react";
import { Link } from "react-scroll";
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">
          Avernus<span>Corp</span>
        </h2>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            to="home"
            smooth={true}
            duration={700}
            offset={-70}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-70}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={700}
            offset={-70}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-70}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
