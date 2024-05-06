import React from "react";
import styles from "./styles/Homepage.module.css";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className={`bg-dark ${styles.Section_container}`}>
      <ul className={styles.Section_items}>
        <li>
          <a
            className="text-decoration-none text-light fw-bold p-2"
            href="#trending"
          >
            Trending
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none text-light fw-bold p-2"
            href="#gallery"
          >
            Gallery
          </a>
        </li>
        <li>
          <Link
            className="text-decoration-none text-light fw-bold p-2"
            to={"/products"}
          >
            All Products
          </Link>
        </li>
        <li>
          <a
            className="text-decoration-none text-light fw-bold p-2"
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none text-light fw-bold p-2"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none text-light fw-bold p-2"
            href="#about"
          >
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Section;
