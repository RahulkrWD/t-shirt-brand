import React from "react";
import styles from "./styles/Homepage.module.css";
import { Link } from "react-router-dom";

function Category() {
  const category = [
    {
      image: " https://i.ibb.co/cQ2p5wM/t-shirt1.jpg",
      price: 99,
    },
    {
      image: "https://i.ibb.co/jb21zTn/t-shirt2.jpg",
      price: 149,
    },
    {
      image: "https://i.ibb.co/5Rgmp4h/tshirt-3.jpg",
      price: 149,
    },
    {
      image: "https://i.ibb.co/jTQCbSp/t-shirt-3.webp",
      price: 199,
    },
  ];

  return (
    <div className="p-2" style={{ backgroundColor: "pink" }}>
      <h4 className={styles.category_heading}>Category</h4>
      <div className={styles.category_container}>
        {category.map((data, index) => (
          <Link
            key={index}
            to={"/category"}
            className={`text-decoration-none ${styles.category_link}`}
          >
            <img className={styles.category_image} src={data.image} alt="" />
            <p className={`text-center ${styles.category_price}`}>
              Starting at <strong> &#8377; {data.price}</strong>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
