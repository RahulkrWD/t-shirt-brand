import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Homepage.module.css";
import trendingItems from "../../JsonData/TrendingItems.json";

function TrendingItems() {
  return (
    <section
      id="trending"
      style={{ backgroundColor: "pink", paddingBottom: "50px" }}
    >
      <h4
        className="text-center "
        style={{ color: "blueviolet", padding: "15px 0" }}
      >
        Trending Design
      </h4>
      <div className={`container ${styles.treding_items}`}>
        {trendingItems.map((items, index) => (
          <Link
            to={`/details/${items.productId}`}
            key={index}
            className={styles.product}
          >
            <div className="trending image">
              <img className={styles.treding_images} src={items.image} alt="" />
            </div>
            <div className="product details p-2 bg-light">
              <h6 className={`text-danger ${styles.brand_name}`}>Nova@</h6>
              <h6 className={styles.items_name}>{items.productName}</h6>
              <div className="d-flex justify-content-between">
                <span className={`fw-bold text-success ${styles.main_price}`}>
                  &#8377;{items.price - (items.price * items.offer) / 100}
                </span>
                <del className={styles.del_price}>&#8377;{items.price}</del>
                <span className={`text-primary fw-bold ${styles.items_offer}`}>
                  {items.offer}% Off
                </span>
              </div>

              <h6 className="text-bg-success btn">
                <i className="fa-solid text-warning fa-star"></i> {items.rating}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TrendingItems;
