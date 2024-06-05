import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Photo from "./Photo";
import styles from "./Profile.module.css";

function Profile() {
  const [profile, setProfile] = useState();
  const { id } = useParams();

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  useEffect(() => {
    async function handleProfile() {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/profile/user/profile/${id}`,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      setProfile(response.data);
    }
    handleProfile();
  }, [id, user.token]);

  return (
    <Layout>
      <div className={` p-2 ${styles.profile_container}`}>
        <Photo />
        {profile &&
          profile.map((item, index) => (
            <div key={index}>
              <h5>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h5>
              <h6>{item.email}</h6>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export default Profile;
