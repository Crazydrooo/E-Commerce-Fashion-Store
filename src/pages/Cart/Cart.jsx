import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import {
  removeFromCart,
  addToCart,
  selectFinalPrice,
} from "../../features/CartSlice";
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import Error from "../Error/Error";
import { useState } from "react";

const Cart = () => {
  const finalPrice = useSelector(selectFinalPrice);
  const cartItems = useSelector((state) => state.cart.cart);
  const OFFER_CODE = "SHAHIL";
  const [coupenCode, setCoupenCode] = useState("");
  const [applyed, setApplyed] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCoupenCode(e.target.value);
  };
  const handleClick = () => {
    if (OFFER_CODE === coupenCode) {
      alert("COUPEN APPLYED SUCESSFULLY!");
      setApplyed(true);
      setCoupenCode("");
    }
  };
  const afterDiscount = applyed
    ? finalPrice - finalPrice * 0.5
    : finalPrice - finalPrice * 0.1;
  const totalDiscount = finalPrice - afterDiscount;
  const discountPercentage = (totalDiscount / finalPrice) * 100;
  return (
    <div className={styles.cartmain}>
      <div className={styles.heading}>
        <h3>Shopping Cart</h3>
      </div>
      {cartItems.length > 0 ? (
        <div className={styles.cartWrapper}>
          <div className={styles.productsContainer}>
            {cartItems.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <img
                  src={product.img}
                  alt={product.name}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>{product.name}</h3>

                <div className={styles.productDetails}>
                  <div className={styles.productInfo}>
                    <h5>Price: ${product.amount}</h5>
                    <h5>Size: {product.size}</h5>
                  </div>
                  <div className={styles.additionalInfo}>
                    <h5>Color: {product.color}</h5>
                    <h5>Total: ${product.totalPrice}</h5>
                  </div>
                </div>
                <div className={styles.quantityControls}>
                  <RiSubtractFill
                    className={styles.controlButton}
                    onClick={() => dispatch(removeFromCart(product))}
                  />
                  <h6>Quantity: {product.quantity}</h6>
                  <IoAdd
                    className={styles.controlButton}
                    onClick={() => dispatch(addToCart(product))}
                  />
                </div>
                <button className={styles.orderButton}>Place Order</button>
              </div>
            ))}
          </div>
          <div className={styles.summaryContainer}>
            <h2>Order Summary</h2>
            <hr />
            <h3>Total Price: {finalPrice}$</h3>
            <h3>Discount Percentage: {discountPercentage} %</h3>
            <h3>Total Discount: {totalDiscount} $</h3>
            <h3>Final Total: {afterDiscount}$</h3>
            <hr />
            <div className={styles.couponContainer}>
              <input
                type="text"
                value={coupenCode}
                placeholder="Enter Coupon Code"
                onChange={handleChange}
                className={styles.couponInput}
              />
              <button className={styles.applyButton} onClick={handleClick}>
                Apply
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Cart;
