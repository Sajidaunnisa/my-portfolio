import React, { useState } from "react";
import logo from "./logo.png";
import "./navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact me" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img
            src={logo}
            alt="logo"
            style={{ height: "55px", width: "auto" }}
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li className="nav-item mx-2" key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link fw-semibold text-secondary position-relative ${
                    activeSection === link.id ? "text-white" : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`position-absolute start-0 bottom-0 border-2 border-danger w-100 ${
                      activeSection === link.id ? "border-bottom" : ""
                    }`}
                    style={{ transition: "all 0.3s ease" }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
