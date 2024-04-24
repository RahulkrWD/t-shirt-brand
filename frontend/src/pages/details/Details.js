import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import styles from "./styles/Details.module.css";
import Delivery from "./Delivery";
import WhatsApp from "../Homepage/WhatsApp";
import AddCart from "../cart/Button";
function Details() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/product/filter/${id}`
        );
        setDetails(response.data);
      } catch (err) {
        console.log("Error fetching details:", err);
      }
    }
    fetchDetails();
  }, [id]);

  const handleClickSize = (size) => {
    console.log("Clicked size:", size);
  };
  return (
    <Layout>
      {details.length > 0 ? (
        details.map((item) => (
          <div key={item._id}>
            <img src={item.images} alt="" />
            <h6>Nova@</h6>
            <h6>{item.productName}</h6>
            <div className="d-flex justify-content-between">
              <span className={`fw-bold text-success ${styles.main_price}`}>
                &#8377;{item.price - (item.price * item.offer) / 100}
              </span>
              <del className={styles.del_price}>&#8377;{item.price}</del>
              <span className={`text-primary fw-bold ${styles.items_offer}`}>
                {item.offer}% Off
              </span>
              <h6>{item.rating}</h6>
            </div>
            <h6>{item.type}</h6>
            <h6>{item.style}</h6>
            {item.productDetails && (
              <div>
                <h6>{item.productDetails.fit}</h6>
                <h6>{item.productDetails.material}</h6>
                <h6>{item.productDetails.color}</h6>
                <div>
                  {item.productDetails.size.map((size, index) => (
                    <h6
                      key={index}
                      onClick={() => handleClickSize(size)}
                      style={{ cursor: "pointer", margin: "5px 0" }}
                    >
                      {size}
                    </h6>
                  ))}
                </div>
              </div>
            )}

            <WhatsApp />
            <h6>Save Extra with These Offers</h6>
            <h5>Offer offer</h5>
            <h5>Offer offer</h5>
            <h5>Offer offer</h5>
            <AddCart item={item} />
            <h5>Check For Delivery Details</h5>
            <Delivery />

            <h6>{item.description}</h6>
            <h6>Return policy</h6>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </Layout>
  );
}

export default Details;
