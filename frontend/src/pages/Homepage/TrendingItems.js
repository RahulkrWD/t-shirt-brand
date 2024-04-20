import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Homepage.module.css";

function TrendingItems() {
  const trending = [
    {
      image: "https://i.ibb.co/VWpY5Yv/i1.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/9Zscrsc/i15.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/dQSVHQw/i14.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/fYbdvKS/i13.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/CWtsqjL/i12.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/ky6sBFv/i11.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/D1Fpft4/i10.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/qx2WC3b/i9.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/sbyCQgB/i8.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/d4qtJtS/i7.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/pX4fM80/i6.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/3025qYk/i5.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 143,
      rating: 3.5,
    },
    {
      image: "https://i.ibb.co/mbF3SPB/i4.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 99,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/FWfdB1z/i3.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 149,
      rating: 5,
    },
    {
      image: "https://i.ibb.co/svPG68h/i2.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 234,
      rating: 4,
    },
    {
      image: "https://i.ibb.co/kynYqzL/i18.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/gSfXKTS/i17.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
    {
      image: "https://i.ibb.co/fDvYQwP/i16.webp",
      name: "Women's Full Sleeve's Printed Tshirts",
      price: 123,
      rating: 4.5,
    },
  ];
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h4 className="text-center p-3">Treding Design</h4>
      <div className={`container ${styles.treding_items}`}>
        {trending.map((items, index) => (
          <Link key={index}>
            <img className={styles.treding_images} src={items.image} alt="" />
            <h6>{items.name}</h6>
            <h5>{items.price}</h5>
            <h6>{items.rating}</h6>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingItems;
