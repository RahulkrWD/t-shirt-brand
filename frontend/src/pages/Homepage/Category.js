import React from "react";
import styles from "./styles/Category.module.css";
import { Link } from "react-router-dom";
import category from "../../JsonData/Category.json";

function Category() {
  return (
    <section id="category" className={`p-3 ${styles.category_container}`}>
      <h4 className="text-center p-2">Category</h4>
      <div className={styles.category_products}>
        {category.map((data, index) => (
          <Link
            key={index}
            // to={"/category"}
            className={`text-decoration-none  ${styles.category_link}`}
          >
            <img className={styles.category_image} src={data.image} alt="" />
            <h6 className="text-danger text-center p-3 fw-bold ">
              {data.name}
            </h6>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;
