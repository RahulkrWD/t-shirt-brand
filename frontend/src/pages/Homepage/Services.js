import React from "react";
import styles from "./styles/Services.module.css";
import WhatsApp from "./WhatsApp";

function Services() {
  const image = [
    {
      image: "/image/services1.webp",
      name: "Character Printing",
      summary:
        "Create personalized t-shirts featuring your favorite characters or designs. Upload your artwork or choose from our collection of illustrations to bring your vision to life.",
    },
    {
      image: "/image/services2.webp",
      name: "Image Printing",
      summary:
        "Customize t-shirts with your own photos or images. Whether it's a memorable picture, artwork, or logo, we ensure high-quality printing to showcase your unique style.",
    },
    {
      image: "/image/services3.webp",
      name: "Promotional T-shirts Printing",
      summary:
        "Boost your brand or event visibility with custom promotional t-shirts. Ideal for businesses, organizations, or events looking to leave a lasting impression.",
    },
    {
      image: "/image/services4.webp",
      name: "Couple T-shirts Printing",
      summary:
        "Express love and unity with matching couple t-shirts. Design complementary designs for you and your partner, making a statement together.",
    },
  ];
  return (
    <section id="services" style={{ backgroundColor: "pink" }}>
      <h3 className="text-center p-3">Services</h3>
      <div className={styles.Services_container}>
        {image.map((items, index) => (
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
