import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";
import CartIcons from "./CartIcons";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

function Navbar() {
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("auth");
  let userName;
  if (user) {
    try {
      const parsedUser = JSON.parse(user);
      const splitName = parsedUser.user.name.split(" ")[0];
      userName = splitName.charAt(0).toUpperCase() + splitName.slice(1);
    } catch (error) {
      console.log("split error");
    }
  }

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }

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
          <span className={`text-light ${styles.nav_contact}`}>
            <i className="fa-solid m-1 text-light text-primary fa-phone-volume"></i>
            +91 999-99-99-99
          </span>

          <span className={`text-light ${styles.nav_mail}`}>
            <i className="fa-regular m-1 text-white fa-envelope"></i>
            novabrand99@gmail.com
          </span>

          <span className={`text-light ${styles.nav_offer}`}>
            🌟 Limited Time Offer: Get 5% Off Orders Over ₹499! Use Code:
            SAVE5NOW 🌟
          </span>
        </div>
      </div>
      <div className={`navbar ${styles.nav_cont}`}>
        <div className="title_brand">
          <Link to={"/homepage"} className="text-decoration-none">
            <strong className={styles.brand_name}>
              No<strong className="text-primary">va</strong>
            </strong>
          </Link>
        </div>
        <div className={styles.search_div}>
          <Select
            className={styles.input_search}
            // options={filteredOptions}
            // onInputChange={handleInputChange}
            // onChange={handleSelectChange}
            isClearable={true}
            placeholder="Search here..."
          />
        </div>
        <div className={styles.list}>
          <ul className={styles.list_items}>
            {user ? (
              <li className="dropdown">
                <Link
                  className="text-decoration-none fw-bold"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong className="text-danger">Hi, </strong> {userName}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/My-order">
                      My Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleLogout}
                      to="/login"
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="fw-bold">
                <Link className="text-decoration-none" to="/login">
                  Login
                </Link>
                /
                <Link className="text-decoration-none" to="/register">
                  Register
                </Link>
              </li>
            )}

            <li>
              <Link to={"/cart"}>
                <CartIcons />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.responsive_search}>
          <Select
            className={styles.responsive_search_input}
            // options={filteredOptions}
            // onInputChange={handleInputChange}
            // onChange={handleSelectChange}
            isClearable={true}
            placeholder="Search here..."
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
