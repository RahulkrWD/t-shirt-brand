// import React, { useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import axios from "axios";
// import Loading from "../../components/Loading";
// import Product from "./Product";
// import Filter from "./Filter";
// import styles from "./styles/Listing.module.css";

// function Listing() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API}/product/get-product`
//         );
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <Layout>
//       <div className="listing d-flex container">
//         <div className="filter">
//           <Filter setProducts={setProducts} />
//         </div>
//         {loading ? (
//           <center>
//             <Loading />
//           </center>
//         ) : products.length > 0 ? (
//           <div className={styles.listing_product}>
//             {products.map((item, index) => (
//               <div className={styles.items} key={index}>
//                 <Product product={item} />
//               </div>
//             ))}
//           </div>
//         ) : (

//             <p className="">No products found</p>

//         )}
//       </div>
//     </Layout>
//   );
// }

// export default Listing;

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
      <div className="listing d-flex container">
        <div className="filter">
          <Filter setProducts={setProducts} />
        </div>
        {loading ? (
          <div className={styles.centered}>
            <Loading />
          </div>
        ) : products.length > 0 ? (
          <div className={styles.listing_product}>
            {products.map((item, index) => (
              <div className={styles.items} key={index}>
                <Product product={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.centered}>
            <p className={styles.noDataMessage}>No products found</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Listing;
