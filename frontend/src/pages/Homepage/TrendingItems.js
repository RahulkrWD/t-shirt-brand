import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Homepage.module.css";

function TrendingItems() {
  const trending = [
    {
      image: "https://i.ibb.co/VWpY5Yv/i1.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 100,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/9Zscrsc/i15.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/dQSVHQw/i14.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/fYbdvKS/i13.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/CWtsqjL/i12.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/ky6sBFv/i11.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/D1Fpft4/i10.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/qx2WC3b/i9.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/sbyCQgB/i8.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/d4qtJtS/i7.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/pX4fM80/i6.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/3025qYk/i5.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 143,
      rating: 3.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/mbF3SPB/i4.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 99,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/FWfdB1z/i3.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 149,
      rating: 5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/svPG68h/i2.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 234,
      rating: 4,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/kynYqzL/i18.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/gSfXKTS/i17.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
    {
      image: "https://i.ibb.co/fDvYQwP/i16.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
      offer: 45,
    },
  ];

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
        {trending.map((items, index) => (
          <Link key={index} className={styles.product}>
            <div className="trending image">
              <img className={styles.treding_images} src={items.image} alt="" />
            </div>
            <div className="product details p-2 bg-light">
              <div className="d-flex justify-content-between">
                <h6 className={styles.brand_name}>Nova@</h6>
                <i className="fa-regular fa-heart"></i>
              </div>
              <h6 className={styles.items_name}>{items.name}</h6>
              <div className="d-flex justify-content-between">
                <span className={`fw-bold text-dark ${styles.main_price}`}>
                  &#8377;{items.price - (items.price * items.offer) / 100}
                </span>
                <del className={styles.del_price}>&#8377;{items.price}</del>
                <span className={styles.items_offer}>{items.offer}% Off</span>
              </div>

              <h6>{items.rating}</h6>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TrendingItems;
