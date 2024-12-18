import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useSelector } from "react-redux";
import { IoCart } from "react-icons/io5";
import { SiVexxhost } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const cartLength = cartItems?.length || 0;

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo_section}>
        <SiVexxhost className={styles.logo_icon} />
        <h2 className={styles.logo_text}>Xquisite Attire</h2>
      </Link>

      <div className={styles.nav_links}>
        <Link to="/" className={styles.nav_link}>
          Home
        </Link>

        <Link to="/contact" className={styles.nav_link}>
          Contact
        </Link>
        <Link to="/about" className={styles.nav_link}>
          About Us
        </Link>
      </div>

      <div className={styles.actions}>
        <Link to="/cart" className={styles.action_button}>
          <IoCart className={styles.icon} />
          {cartLength > 0 && (
            <span className={styles.cart_count}>{cartLength}</span>
          )}
        </Link>
        <Link to="/profile" className={styles.action_button}>
          <CgProfile className={styles.icon} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
