import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";

function Navbar() {
  const [paused, setPaused] = useState(false);

  function mouseEnter() {
    setPaused(true);
  }

  function mouseLeave() {
    setPaused(false);
  }

  return (
    <>
      <div className={styles.nav_bg}>
        <div
          className={`${styles.nav_icons} ${paused ? styles.paused : ""}`}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <span className={` text-light ${styles.nav_contact}`}>
            <i className="fa-solid m-1 text-light text-primary fa-phone-volume"></i>
            +91 999-99-99-99
          </span>

          <span className={` text-light ${styles.nav_mail}`}>
            <i className="fa-regular m-1 text-white fa-envelope"></i>
            novabrand99@gmail.com
          </span>

          <span className={`text-light ${styles.nav_offer}`}>
            🌟 Limited Time Offer: Get 5% Off Orders Over ₹499! Use Code:
            SAVE5NOW 🌟
          </span>
        </div>
      </div>
      <div className={` navbar ${styles.nav_container}`}>
        <div className="search">
          <input type="text" placeholder="search" />
        </div>
        <div className="title_brand">
          <h4>Nova</h4>
        </div>
        <div className="list items">
          <h6>list</h6>
        </div>
      </div>
    </>
  );
}

export default Navbar;
