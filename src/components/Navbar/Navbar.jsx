import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <ul className={`${styles.menuItems}`}>
          <li>
            <a href="#about" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => scrollToSection("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
