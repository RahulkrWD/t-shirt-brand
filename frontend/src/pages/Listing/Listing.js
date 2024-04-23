import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import Loading from "../../components/Loading";
import Product from "./Product";
import Filter from "./Filter";

function Listing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/product/get-product`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="listing d-flex">
        <div>
          {products ? (
            products.map((item, index) => (
              <div className="product" key={index}>
                <Product product={item} />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        <div className="filter">
          <Filter setProducts={setProducts} />
        </div>
      </div>
    </Layout>
  );
}

export default Listing;
