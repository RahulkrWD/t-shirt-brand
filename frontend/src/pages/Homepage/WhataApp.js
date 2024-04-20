import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Homepage.module.css";

const WhatsApp = () => {
  const phoneNumber = "7320810579";
  const whatsappLink = `whatsapp://send?phone=${phoneNumber}`;

  return (
    <Link
      to={whatsappLink}
      target="_blank"
      className={`m-2 fs-5 btn text-bg-warning text-decoration-none ${styles.contactButton}`}
    >
      Contact <i className=" fa-brands fa-whatsapp"></i>
    </Link>
  );
};

export default WhatsApp;
