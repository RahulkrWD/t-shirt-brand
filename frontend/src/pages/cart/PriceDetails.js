import React, { useState, useEffect } from "react";
import styles from "./styles/Cart.module.css";
import TextField from "@mui/material/TextField";

function PriceDetails({ price }) {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const delivery = 45;

  useEffect(() => {
    let total = price.reduce((acc, item) => acc + item.totalPrice, 0);
    setTotalPrice(total);
  }, [price]);

  useEffect(() => {
    function applyCoupon() {
      const matchedCoupon = coupons.find((c) => c.card === coupon);
      if (matchedCoupon && totalPrice >= 400) {
        setDiscount(totalPrice * (matchedCoupon.discount / 100));
      } else {
        setDiscount(0);
      }
    }
    applyCoupon();
  }, [coupon, totalPrice]);

  const finalPrice = totalPrice + delivery - discount;
  useEffect(() => {
    const prices = {
      price: totalPrice,
      discount: discount,
      delivery: delivery,
      finalPrice: finalPrice,
    };
    localStorage.setItem("price", JSON.stringify(prices));
    localStorage.setItem("totalprice", finalPrice);
  }, [totalPrice, discount, delivery, finalPrice]);

  const coupons = [
    { card: "100DEP", discount: 10, message: "Discount 10%" },
    { card: "50DEP", discount: 5, message: "Discount 5%" },
    { card: "FIRSTDEP", discount: 10, message: "Discount 10%" },
    { card: "SAVE5NOW", discount: 5, message: "Discount 5%" },
  ];

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  return (
    <div className={styles.price_details}>
      <h4 className={`text-center ${styles.price_heading}`}>Price Details</h4>
      <p className="border-bottom p-1">
        Price: <strong style={{ float: "right" }}>&#8377;{totalPrice}</strong>
      </p>
      <p className="border-bottom p-1">
        Discount:{" "}
        <strong style={{ float: "right" }}>&#8377;{discount.toFixed(2)}</strong>
      </p>
      <p className="border-bottom p-1">
        Delivery: <strong style={{ float: "right" }}> &#8377;{delivery}</strong>
      </p>
      <p className="p-1">
        Final Price:
        <strong style={{ float: "right" }}>
          &#8377;{finalPrice.toFixed(2)}
        </strong>
      </p>
      <TextField
        value={coupon}
        onChange={handleCouponChange}
        id="standard-basic"
        label="Enter Coupon Code"
        variant="standard"
        fullWidth
      />
    </div>
  );
}

export default PriceDetails;
