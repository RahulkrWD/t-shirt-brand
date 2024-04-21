import React from "react";
import styles from "./styles/About.module.css";

function About() {
  const splitIntoWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className={styles.hoverable}>
        {word}{" "}
      </span>
    ));
  };

  return (
    <section id="about" style={{ backgroundColor: "pink" }}>
      <h3 className="text-center p-4">About Us</h3>
      <div className={styles.about}>
        <div className={styles.about_summary}>
          <p>
            {splitIntoWords(
              "Welcome to Nova, your premier destination for custom t-shirt printing! At Nova, we specialize in creating personalized t-shirts that embody your unique style and message. Our commitment to quality ensures vibrant prints on durable fabrics, making them perfect for promoting your business, commemorating special events, or showcasing your creativity. With Nova, there's no minimum order required, allowing you to order just one custom t-shirt or more. Explore our diverse range of styles, colors, and sizes, upload your design with ease, and let us bring your vision to life. Get started today and discover the simplicity of creating your own custom t-shirts with Nova!"
            )}
          </p>
        </div>
        <div className="image">
          <img
            className={styles.about_image}
            src="/image/about_image.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default About;
