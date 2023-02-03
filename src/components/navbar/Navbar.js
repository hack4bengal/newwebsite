import React from "react";
import { useRef, useState } from "react";
import "./Navbar.css";
import hack4bengal from "../../assets/img/Hack4Bengal.png";
import tcp from "../../assets/img/tcp.png";
import { motion } from "framer-motion";
import { headerVariants } from "../../motionUtils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = useRef(null);
  function toggleMenu() {
    setIsOpen(!isOpen);
    hamburger.current.classList.toggle("active");
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className="hack4bengal__navbar-container"
    >
      <header className="hack4bengal__navbar">
        <div className="hack4bengal__navbar-body">
          <div className="hack4bengal__navbar-logo">
            <img src={hack4bengal} alt="logo" />
          </div>
          <nav className="hack4bengal__navbar-menu">
            <ul className="hack4bengal__navbar-navlist">
              <li className="hack4bengal__navbar-navitem">
                <a href="#home">
                  <h3 className="hack4bengal__navbar-menu-heading">Home</h3>
                </a>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <a href="#aboutus">
                  <h3 className="hack4bengal__navbar-menu-heading">About Us</h3>
                </a>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <a href="#prizes">
                  <h3 className="hack4bengal__navbar-menu-heading">Prizes</h3>
                </a>
              </li>
              {/*   <li className="hack4bengal__navbar-navitem">
                <a href="#events">
                  <h3 className="hack4bengal__navbar-menu-heading">Events</h3>
                </a>
              </li> */}

              <li className="hack4bengal__navbar-navitem">
                <a href="#speakers">
                  <h3 className="hack4bengal__navbar-menu-heading">Speakers</h3>
                </a>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <a href="#sponsers">
                  <h3 className="hack4bengal__navbar-menu-heading">Sponsors</h3>
                </a>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <a href="#faq">
                  <h3 className="hack4bengal__navbar-menu-heading">FAQ</h3>
                </a>
              </li>
              {/* <li className="hack4bengal__navbar-navitem">
                <a href="#contactus">
                  <h3 className="hack4bengal__navbar-menu-heading">
                    Contact Us
                  </h3>
                </a>
              </li> */}
            </ul>
          </nav>
          {/* <div className="hack4bengal__navbar-logo hack4bengal__navbar-brochure">
            <img src={tcp} />
            <button className="hack4bengal__navbar-brochure-button">
              <img src={downArrow} />
              <a href={brochure} download="Brochure">
                BROCHURE
              </a>
            </button>
          </div> */}
        </div>
      </header>
      <header
        className={`hack4bengal__navbar-hamburger ${
          isOpen ? `hamburger-open` : ``
        }`}
      >
        <div className="hack4bengal__navbar-hamburger-body">
          <nav className="hack4bengal__navbar-hamburger-nav">
            <div className="hamburger">
              <svg
                className="ham hamRotate ham8"
                viewBox="0 0 100 100"
                width="80"
                ref={hamburger}
                onClick={toggleMenu}
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
              </svg>
            </div>
            <div className="hack4bengal__navbar-hamburger-logo">
              <img src={hack4bengal} alt="logo" />
            </div>
            <div className="hack4bengal__navbar-hamburger-logo">
              <img src={tcp} alt="logo" />
            </div>
          </nav>
        </div>
        <ul
          className={`hack4bengal__navbar-hamburger-navlist ${
            isOpen ? `activeMenu slide-bottom` : ``
          }`}
        >
          <li className="hack4bengal__navbar-hamburger-navitem">
            <a href="#home" onClick={toggleMenu}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Home
              </h3>
            </a>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <a href="#aboutus" onClick={toggleMenu}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                About Us
              </h3>
            </a>
          </li>
          {/*  <li className="hack4bengal__navbar-hamburger-navitem">
            <a href="#events" onClick={toggleMenu}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Events
              </h3>
            </a>
          </li> */}
          <li className="hack4bengal__navbar-hamburger-navitem">
            <a href="#speakers" onClick={toggleMenu}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Speakers
              </h3>
            </a>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <a href="#sponsers" onClick={toggleMenu}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Sponsors
              </h3>
            </a>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <a href="#faq" onClick={toggleMenu}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                FAQ
              </h3>
            </a>
          </li>
          {/* <li className="hack4bengal__navbar-hamburger-navitem">
            <a href="#contactus" onClick={toggleMenu}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Contact Us
              </h3>
            </a>
          </li> */}
          {/* <button className="hack4bengal__navbar-hamburger-brochure-button hack4bengal__navbar-brochure-button">
            <img src={downArrow} />
            <a href={brochure} download="Brochure">
              Download Brochure
            </a>
          </button> */}
        </ul>
      </header>
    </motion.div>
  );
};

export default Navbar;
