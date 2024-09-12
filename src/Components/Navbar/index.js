import React, { useState } from "react";
import "./navBar.css";
import logo from "./logo.png";

const Navbar = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle link click and update active section
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="220" height="55" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-dark side-bar"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header bg-dark ms-4 mt-4">
              <h5
                className="offcanvas-title text-danger"
                id="offcanvasDarkNavbarLabel"
              >
                PORTFOLIO
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 ms-4">
                <li className="nav-item mb-3">
                  <a
                    className={`nav-link ${
                      activeSection === "home" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#home"
                    onClick={() => handleNavClick("home")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    className={`nav-link ${
                      activeSection === "about" ? "active" : ""
                    }`}
                    href="#about"
                    onClick={() => handleNavClick("about")}
                  >
                    About me
                  </a>
                </li>
                <li className="nav-item mb-3 ">
                  <a
                    className={`nav-link ${
                      activeSection === "skills" ? "active" : ""
                    }`}
                    href="#skills"
                    onClick={() => handleNavClick("skills")}
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    className={`nav-link ${
                      activeSection === "projects" ? "active" : ""
                    }`}
                    href="#projects"
                    onClick={() => handleNavClick("projects")}
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    className={`nav-link ${
                      activeSection === "contact" ? "active" : ""
                    }`}
                    href="#contact"
                    onClick={() => handleNavClick("contact")}
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
