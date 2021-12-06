import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [background, setBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen((open) => !open);
  };

  const navBackgroundHandler = () => {
    if (window.scrollY >= 80) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  window.addEventListener("scroll", navBackgroundHandler);
  return (
    <nav className={`${classes.navbar} ${background && classes.active}`}>
      <div className={classes.container}>
        {/* Text Logo */}
        <a href='#header'>Yoms</a>

        <button
          className={classes.navbar_toggler}
          type="button"
          data-toggle="offcanvas">
          <FiMenu
            className={classes.navbar_toggler_icon}
            onClick={toggleHandler}
          />
        </button>

        <div
          className={`${classes.offcanvas_collapse} ${!open && classes.navbar_collapse
            }`}
          id="navbarsExampleDefault">
          <ul className={classes.navbar_nav}>
            <li className={classes.nav_item}>
              <a className={classes.nav_link} href="#header">
                Home
              </a>
            </li>
            <li className={classes.nav_item}>
              <a className={classes.nav_link} href="#about">
                About
              </a>
            </li>

            <li className={classes.nav_item}>
              <a className={classes.nav_link} href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <span className={`${classes.nav_item} ${classes.social_icons}`}>
            <button className={classes.s_stack}>
              <a href='https://www.linkedin.com/in/oluwayomi-oke-347648179' target="_blank">
                <FaLinkedin className={classes.fa_linkedin} size={32} />
              </a>
            </button>
            <button className={classes.s_stack}>
              <a href="https://github.com/oke-yomi" target="_blank">
                <FaGithub className={classes.fa_github} size={32} />
              </a>
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
