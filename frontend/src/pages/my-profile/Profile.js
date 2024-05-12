import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Photo from "./Photo";

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
            Authorization: `${user.token}`,
          },
        }
      );
      setProfile(response.data);
    }

    handleProfile();
  }, [id, user.token]);

  return (
    <Layout>
      <div>
        {profile &&
          profile.map((item, index) => (
            <div key={index}>
              <h5>{item.name}</h5>
            </div>
          ))}
      </div>
      <div>
        <Photo />
      </div>
    </Layout>
  );
}

export default Profile;
