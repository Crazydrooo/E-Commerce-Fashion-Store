import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { SiVexxhost } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.logo_section}>
          <h2>
            <span>
              <SiVexxhost
                style={{ fontSize: "2rem", margin: "0 0.5rem 0 0" }}
              />
            </span>
            Xquisite Attire
          </h2>
          <p>Elegance Redefined.</p>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>© 2024 Xquisite Attire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
