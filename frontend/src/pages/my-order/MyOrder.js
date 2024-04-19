import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

function MyOrder() {
  const navigate = useNavigate();
  const user = localStorage.getItem("auth");
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <Layout>
      <h6>Myorder</h6>
    </Layout>
  );
}

export default MyOrder;
