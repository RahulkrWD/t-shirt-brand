import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Popup.module.css";

function Popup() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      navigate("/homepage");
    }, 3000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className=" text-bg-dark w-100 d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <div>
          <h3 className={` ${styles.Dep}`}>Nova</h3>
        </div>
        <div>
          <div className={styles.custom_loader}></div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
