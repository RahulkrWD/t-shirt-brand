import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = localStorage.getItem("auth");
  const userJson = JSON.parse(user);
  const profile = userJson.user;
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <Layout>
      <h5>Profile</h5>
      <h6>{profile.name}</h6>
      <h6>{profile.email}</h6>
    </Layout>
  );
}

export default Profile;
