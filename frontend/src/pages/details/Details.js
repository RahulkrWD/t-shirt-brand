import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function Details() {
  const [details, setDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function handleDetails() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/product/filter/${id}`
        );
        setDetails(response.data);
      } catch (err) {
        console.log("server error", err);
      }
    }
    handleDetails();
  }, [id]);
  return (
    <Layout>
      {details ? (
        details.map((items, index) => (
          <div key={index}>
            <h6>{items.productName}</h6>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </Layout>
  );
}

export default Details;
