import { useDispatch } from "react-redux";
import { addToCart } from "../../features/CartSlice";
import { useState } from "react";
import styles from "./Product.module.css";
import ColorandSizeHook from "./ColorandSizeHook";

const ProductItems = ({ id, img, name, text, size, amount, color }) => {
  const { isColor, setColor, isSize, setSize } = ColorandSizeHook(color, size);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.product} key={id}>
        <img src={img} alt="" className={styles.image} />
        <h4>Price: {amount}$</h4>

        <div className={styles.size}>
          {size && size.length > 0 ? (
            <select
              className={styles.sizesection}
              value={isSize || ""}
              onChange={(e) => setSize(e.target.value)}
            >
              {size.map((defaultSize, index) => (
                <option key={index} value={defaultSize}>
                  {defaultSize}
                </option>
              ))}
            </select>
          ) : (
            <p>No sizes available</p>
          )}
        </div>

        <div className={styles.productcolor}>
          {color && color.length > 0 ? (
            color.map((defaultColor, index) => (
              <button
                key={index}
                value={defaultColor}
                onClick={(e) => setColor(e.target.value)}
                style={{
                  backgroundColor: defaultColor,
                  padding: "0.5rem",
                  borderRadius: "50%",
                }}
                className={styles.colorbtn}
              ></button>
            ))
          ) : (
            <p>No colors available</p>
          )}
        </div>

        <button
          className={styles.btn}
          onClick={() =>
            dispatch(
              addToCart({
                id: id,
                name: name,
                img: img,
                text: text,
                quantity: 1,
                amount: amount,
                color: isColor,
                size: isSize,
              })
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
