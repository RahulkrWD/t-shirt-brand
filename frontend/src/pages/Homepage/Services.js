import React from "react";
import styles from "./styles/Services.module.css";
import WhatsApp from "./WhatsApp";
import service from "../../JsonData/Services.json";

function Services() {
  return (
    <section id="services" style={{ paddingTop: "20px" }}>
      <h3 className="text-center p-1">Services</h3>
      <div className={styles.Services_container}>
        {service.map((items, index) => (
          <div key={index} className={styles.services_items}>
            <img className={styles.Services_image} src={items.image} alt="" />
            <h5 className={`text-success ${styles.Services_title}`}>
              {items.name}
            </h5>
            <p className={styles.items_summary}>{items.summary}</p>
            <div className={`text-center ${styles.enquiry}`}>
              <WhatsApp />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
