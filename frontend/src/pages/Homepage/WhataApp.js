import React, { useState } from "react";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  const phoneNumber = "7320810579";
  const whatsappLink = `whatsapp://send?phone=${phoneNumber}`;
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    margin: "8px",
    fontSize: "1.2rem",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    backgroundColor: isHovered ? "#dc3545" : "#ffc107",
    color: isHovered ? "#fff" : "#000",
    transition: "background-color 0.3s ease",
  };

  return (
    <Link
      to={whatsappLink}
      target="_blank"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Contact <i className="fa-brands fa-whatsapp"></i>
    </Link>
  );
};

export default WhatsApp;
