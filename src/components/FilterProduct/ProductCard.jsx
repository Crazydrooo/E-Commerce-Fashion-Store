import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/ProductSlice";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ id, name, img, text, price, colors, size }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  const handleSingleProduct = () => {
    dispatch(singleProduct(id));
  };

  return (
    <Link
      to={`/filterProduct/${type}/` + id}
      className={styles.productCard}
      onClick={handleSingleProduct}
    >
      <div className={styles.cardContent}>
        <img src={img} alt={name} className={styles.productImage} />
        <h5 className={styles.productName}>{name}</h5>
        <h6 className={styles.productDescription}>{text}</h6>
        <div className={styles.cardFooter}>
          <h6 className={styles.productPrice}>${price}</h6>
          <div className={styles.colorChoices}>
            {colors.map((color, index) => (
              <span
                key={index}
                className={styles.colorDot}
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
