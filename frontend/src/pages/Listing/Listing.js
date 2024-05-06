import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import Loading from "../../components/Loading";
import Product from "./Product";
import Filter from "./Filter";
import styles from "./styles/Listing.module.css";

function Listing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/product/get-product`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className={`container  ${styles.Listing}`}>
        <div>
          <Filter setProducts={setProducts} />
        </div>

        <div className="d-flex justify-content-around flex-wrap">
          {loading ? (
            <Loading />
          ) : products.length > 0 ? (
            products.map((item, index) => (
              <Product key={index} product={item} />
            ))
          ) : (
            <img src="/image/no_dat_found.svg" alt="" />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Listing;
