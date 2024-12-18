import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.description}>
          Welcome to our website! We are passionate about delivering
          high-quality products and services to our customers. Our team is
          dedicated to innovation, excellence, and customer satisfaction.
        </p>
        <p className={styles.description}>
          Feel free to explore our site and learn more about what we offer.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
