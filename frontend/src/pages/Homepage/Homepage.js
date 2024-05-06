import React from "react";
import Layout from "../../components/Layout";
import ImageCarousel from "./Carousel";
import styles from "./styles/Homepage.module.css";
import WhatsApp from "./WhatsApp";
import TrendingItems from "./TrendingItems";
import Section from "./Section";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Category from "./Category";

function Homepage() {
  const AnimatedSection = ({ children }) => {
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current.classList.add(styles.show);
          }
        });
      });

      observer.observe(sectionRef.current);
    }, []);

    return (
      <div ref={sectionRef} className={styles.animatedSection}>
        {children}
      </div>
    );
  };
  return (
    <Layout>
      <AnimatedSection>
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
      </AnimatedSection>
      <Category />
      <AnimatedSection>
        <TrendingItems />
      </AnimatedSection>
      <AnimatedSection>
        <ImageCarousel />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </Layout>
  );
}

export default Homepage;
