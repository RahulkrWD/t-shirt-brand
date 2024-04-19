import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "50vh" }}>
        {children} <Toaster />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
