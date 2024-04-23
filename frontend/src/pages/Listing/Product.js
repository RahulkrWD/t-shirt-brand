import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Product.module.css";

function Product({ product }) {
  return (
    <Link to={`/details/${product.productId}`} className={styles.product}>
      <div className="trending image">
        <img className={styles.treding_images} src={product.images} alt="" />
      </div>
      <div className="product details p-2 bg-light">
        <h6 className={`text-danger ${styles.brand_name}`}>Nova@</h6>
        <h6 className={styles.items_name}>{product.productName}</h6>
        <div className="d-flex justify-content-between">
          <span className={`fw-bold text-success ${styles.main_price}`}>
            &#8377;{product.price - (product.price * product.offer) / 100}
          </span>
          <del className={styles.del_price}>&#8377;{product.price}</del>
          <span className={`text-primary fw-bold ${styles.items_offer}`}>
            {product.offer}% Off
          </span>
        </div>

        <h6 className="text-bg-success btn">
          <i className="fa-solid text-warning fa-star"></i> {product.rating}
        </h6>
      </div>
    </Link>
  );
}

export default Product;
