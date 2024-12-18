import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/ProductSlice";
import styles from "./NavigationButton.module.css";
import { Link } from "react-router-dom";

const NavigationButton = () => {
  const [activeButtons, setActiveButtons] = useState("");
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  const handleClick = (button) => {
    setActiveButtons(button);
    dispatch(filterProducts(button));
  };

  return (
    <div className={styles.container}>
      {buttons.map((button) => (
        <div key={button} className={styles.buttonWrapper}>
          <Link to={"/filterProduct/" + button}>
            <button
              className={`${styles.button} ${
                activeButtons.includes(button) ? styles.active : ""
              }`}
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationButton;
