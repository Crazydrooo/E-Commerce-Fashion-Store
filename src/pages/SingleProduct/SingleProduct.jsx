import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";
import styles from "./SingleProduct.module.css";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProducts);
  const { id } = useParams();

  const productSize = product[0].size ? product[0].size[0] : "";
  const [size, setSize] = useState(productSize);
  const productColor = product[0].color[0];
  const [color, setColor] = useState(productColor);

  const dispatch = useDispatch();
  const handelAddToCartClick = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        img: item.img,
        text: item.text,
        size: size,
        color: color,
        price: item.amount,
        amount: 1,
        totalPrice: item.price,
      })
    );
  };
  return (
    <div className={styles.single_product_container}>
      {product
        .filter((product1) => product1.id === id)
        .map((item, index) => (
          <div key={index} className={styles.main_container}>
            <div className={styles.container}>
              <div className={styles.imagecontainer}>
                <img src={item.img} alt="" className={styles.image} />
              </div>
              <div className={styles.singleProduct_items}>
                <h1> {item.type}</h1>
                <h3>Name Of The Product : {item.name}</h3>
                <p className="content">{item.text}</p>

                <h3>Price : {item.amount} $</h3>
                <div>
                  {item.size ? (
                    <div>
                      <label htmlFor="size">Pick a Size</label>
                      <select
                        className={styles.select_container}
                        name="size"
                        id="size"
                        value={size}
                        onChange={(event) => setSize(event.target.value)}
                      >
                        {item.size.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="size">Pick a Size</label>
                      <select
                        className={styles.select_container}
                        disabled={true}
                        name="size"
                        id="size"
                        value={size}
                        onChange={(event) => setSize(event.target.value)}
                      >
                        {item?.size?.map((item, index) => (
                          <option
                            key={index}
                            value={item}
                            className={styles.select_container}
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                <div>
                  <div>
                    <div>
                      <label htmlFor="color">Pick a color</label>
                      <select
                        className={styles.select_container}
                        name="color"
                        id="color"
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                      >
                        {item.color.map((itemColor, index) => (
                          <option
                            key={index}
                            value={itemColor}
                            style={{ color: itemColor }}
                            className={styles.select_container}
                          >
                            {itemColor}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.add_to_cart}>
                      <button
                        onClick={() => handelAddToCartClick(item)}
                        className={styles.btn}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default SingleProduct;
