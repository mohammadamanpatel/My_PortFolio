import React from "react";

import styles from "./Hero.module.css";
import heroimage from '../../assets/hero/heroImage.jpg'
import MyResume from '../../assets/My_Resume.pdf'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aman</h1>
        <p className={styles.description}>
          I'm a MERN Stack developer Reach out if you'd like to learn more!
        </p>
        <a href={MyResume} className={styles.contactBtn}>
          My_Resume
        </a>
      </div>
      <img
        src={heroimage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
