import React from "react";
import { GoogleLogin as ReactGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function GoogleLogin() {
  const navigate = useNavigate();

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse?.credential);
      const { name, email } = decoded;
      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/google-login`,
        {
          name,
          email,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        const user = response.data;
        const userJson = JSON.stringify(user);
        localStorage.setItem("auth", userJson);
        navigate("/homepage");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error during Google login: " + error.message);

      if (error.response) {
        toast.log("response data", error.response.data);
      }
    }
  };

  return (
    <>
      <ReactGoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => {
          toast.error("Google Signup Failed");
        }}
      />
    </>
  );
}

export default GoogleLogin;
