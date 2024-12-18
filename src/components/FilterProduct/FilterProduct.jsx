import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./FilterProduct.module.css";
import {
  filterProducts,
  filterGender,
  filterByColor,
  filterBySize,
  sortByPrice,
} from "../../features/ProductSlice";

import ProductCard from "./ProductCard";
import useDropdown from "./FilterDropdown";
import { useEffect } from "react";
import Error from "../../pages/Error/Error";

const FilterProduct = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const { type } = useParams();
  const dispatch = useDispatch();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "yellow",
    "green",
    "white",
    "black",
    "gray",
    "orange",
    "purple",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  // const { setIsDropdownOpen } = useDropdown();
  const {
    isDropdownOpen: isColorDropdownOpen,
    toggleDropdown: toggleColorDropdown,
  } = useDropdown();
  const {
    isDropdownOpen: isSizeDropdownOpen,
    toggleDropdown: toggleSizeDropdown,
  } = useDropdown();

  // const handleOutsideClick = (e) => {
  //   if (!e.target.closest(`.${styles.dropdown}`)) {
  //     setIsDropdownOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{type}</h1>
      </div>

      <div className={styles.filterSection}>
        {genderButtons.map((gender, index) => (
          <button
            key={index}
            onClick={() => dispatch(filterGender(gender))}
            className={styles.filterButton}
          >
            {gender}
          </button>
        ))}
        <button
          onClick={() => dispatch(sortByPrice())}
          className={styles.filterButton}
        >
          High Price
        </button>

        <div className={styles.dropdown}>
          <button
            onClick={toggleColorDropdown}
            className={`${styles.filterButton} ${styles.dropdownToggle}`}
          >
            Select Color
          </button>
          {isColorDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {colorButtons.map((color, index) => (
                <li key={index}>
                  <button
                    onClick={() => dispatch(filterByColor(color))}
                    className={styles.dropdownItem}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      color: "#fff",
                    }}
                  >
                    {color}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.dropdown}>
          <button
            onClick={toggleSizeDropdown}
            className={`${styles.filterButton} ${styles.dropdownToggle}`}
          >
            Select Size
          </button>
          {isSizeDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {sizeButtons.map((size, index) => (
                <li key={index}>
                  <button
                    onClick={() => dispatch(filterBySize(size))}
                    className={styles.dropdownItem}
                    disabled={type === "bags"}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={() => dispatch(filterProducts(type))}
          className={styles.clearButton}
        >
          Clear Filters
        </button>
      </div>

      <div className={styles.productGrid}>
        {products && products.length > 0 ? (
          products.filter((product) => product.type === type).length > 0 ? (
            products
              .filter((product) => product.type === type)
              .map((product, index) => (
                <div key={index} className={styles.productCard}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    text={product.text}
                    price={product.amount}
                    colors={product.color}
                    size={product.size}
                  />
                </div>
              ))
          ) : (
            <Error />
          )
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};

export default FilterProduct;
