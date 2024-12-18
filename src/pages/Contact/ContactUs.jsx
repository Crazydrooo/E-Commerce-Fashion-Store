import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.description}>
          Have questions or need help? We’re here to assist you. Fill out the
          form below, or reach out to us directly.
        </p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              BetaAnnouncement Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder="Your Name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Your Email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
