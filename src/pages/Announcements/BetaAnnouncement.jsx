import React, { useState } from "react";
import styles from "./BetaAnnouncement.module.css";
import { useNavigate } from "react-router-dom";

const BetaAnnouncement = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const handleDismiss = () => {
    setIsVisible(false);
    navigate("/");
  };

  return (
    isVisible && (
      <div className={styles.betaAnnouncement}>
        <p className={styles.message}>
          🚀 This is the <strong>beta version</strong>. Stay tuned for more
          updates!
        </p>
        <button className={styles.dismissButton} onClick={handleDismiss}>
          Dismiss
        </button>
      </div>
    )
  );
};

export default BetaAnnouncement;
