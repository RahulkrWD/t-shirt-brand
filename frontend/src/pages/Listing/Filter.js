import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles/Filter.module.css";
function Filter({ setProducts }) {
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/product/get-product`,
          {
            params: {
              sort: sort,
              lcost: priceRange?.min,
              hcost: priceRange?.max,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    if (sort || priceRange) {
      fetchProducts();
    }
  }, [sort, priceRange, setProducts]);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max });
  };

  return (
    <div className={styles.filter_container}>
      <div>
        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option>-Sort-</option>
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Price Range:
          <button onClick={() => handlePriceRangeChange(100, 300)}>
            100 - 300
          </button>
          <button onClick={() => handlePriceRangeChange(301, 600)}>
            301 - 600
          </button>
        </label>
      </div>
    </div>
  );
}

export default Filter;
