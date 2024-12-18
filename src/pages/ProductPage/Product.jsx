import ProductItems from "./ProductItems";
import { storeData } from "../../assets/DummyData";
import styles from "./Product.module.css";
const Product = () => {
  return (
    <div>
      <div className={styles.productcontainer}>
        {storeData.slice(0, 8).map((product) => (
          <ProductItems
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            text={product.text}
            size={product.size}
            amount={product.amount}
            color={product.color}
            totalPrice={product.totalPrice}
          ></ProductItems>
        ))}
      </div>
    </div>
  );
};
export default Product;
