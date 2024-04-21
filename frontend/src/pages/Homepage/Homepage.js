import React from "react";
import Layout from "../../components/Layout";
import ImageCarousel from "./Carousel";
import Category from "./Category";
import styles from "./styles/Homepage.module.css";
import WhatsApp from "./WhatsApp";
import TrendingItems from "./TrendingItems";
import Section from "./Section";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

function Homepage() {
  return (
    <Layout>
      <Section />
      <div className={styles.custom}>
        <center>
          <h5 className={`text-center p-2 fw-bold ${styles.h_tag}`}>
            Custom T-Shirt Printing: Your Logo, Your Brand, Your Style!
          </h5>

          <p className={`text-center p-1 ${styles.p_tag}`}>
            Explore our premium t-shirt options and order starting from just 1
            unit! Design unique t-shirts effortlessly and receive high-quality
            prints that showcase your brand or message. Start today with no
            minimum order required!
          </p>

          <WhatsApp />
        </center>
      </div>
      <hr className={styles.hr} />
      <Category />
      <hr className={styles.hr} />
      <TrendingItems />
      <hr className={styles.hr} />
      <ImageCarousel />
      <hr className={styles.hr} />
      <Services />
      <hr className={styles.hr} />
      <About />
      <hr className={styles.hr} />
      <Contact />
    </Layout>
  );
}

export default Homepage;
