import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: ${isVisible ? "block" : "none"};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          font-size: 16px;
          border: none;
          cursor: pointer;
          outline: none;
          z-index: 1000;
        }
      `}</style>
      <Navbar />
      <main style={{ minHeight: "50vh" }}>
        {children} <Toaster />
      </main>
      <Footer />
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    </>
  );
}

export default Layout;
